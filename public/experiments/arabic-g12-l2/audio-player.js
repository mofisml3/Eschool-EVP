/* <sound-bar src="audio/x.mp3" label="استمع"> — robust cross-platform Arabic audio player.
   Uses the Web Audio API (decode-into-memory + buffer source, resumed on user gesture),
   which plays reliably on phones/desktop where a bare <audio> element can stay silent.
   Falls back to an <audio> element if Web Audio decoding is unavailable. */
(function () {
  if (window.customElements && customElements.get('sound-bar')) return;

  var sharedCtx = null;
  function getCtx() {
    if (!sharedCtx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (AC) sharedCtx = new AC();
    }
    return sharedCtx;
  }

  function fmt(t) {
    if (!isFinite(t) || t < 0) t = 0;
    var m = Math.floor(t / 60), s = Math.floor(t % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  class SoundBar extends HTMLElement {
    connectedCallback() {
      if (this._built) return;
      this._built = true;
      this.offset = 0;
      this.playing = false;
      this.buffer = null;
      this.duration = 0;
      this.loading = false;
      this.startedAt = 0;
      this.src = this.getAttribute('src') || '';
      this.label = this.getAttribute('label') || '';
      this.render();
    }

    render() {
      var root = this.attachShadow ? this.attachShadow({ mode: 'open' }) : this;
      root.innerHTML =
        '<style>' +
        ':host{display:block;font-family:"Tajawal",system-ui,sans-serif;}' +
        '.bar{display:flex;align-items:center;gap:12px;padding:12px 14px;background:#f0ecfb;border-radius:14px;direction:rtl;}' +
        '.btn{flex:none;width:46px;height:46px;border-radius:50%;border:0;cursor:pointer;background:#200058;color:#fff;font-size:19px;display:flex;align-items:center;justify-content:center;transition:transform .12s ease,background .2s ease;}' +
        '.btn:hover{transform:scale(1.06);}' +
        '.btn:active{transform:scale(.96);}' +
        '.btn:disabled{opacity:.6;cursor:default;}' +
        '.mid{flex:1;min-width:0;display:flex;flex-direction:column;gap:7px;}' +
        '.lbl{font-family:"Reem Kufi","Tajawal",sans-serif;font-weight:600;color:#200058;font-size:14px;}' +
        '.row{display:flex;align-items:center;gap:10px;}' +
        '.track{position:relative;flex:1;height:8px;border-radius:999px;background:#d9d0f2;cursor:pointer;overflow:hidden;}' +
        '.fill{position:absolute;inset:0 auto 0 0;right:0;width:0;background:#00c3fe;border-radius:999px;}' +
        '.time{flex:none;font-size:12px;color:#5b5378;font-variant-numeric:tabular-nums;direction:ltr;min-width:82px;text-align:left;}' +
        '.err{color:#c0264d;font-size:13px;}' +
        '</style>' +
        '<div class="bar">' +
          '<button class="btn" type="button" aria-label="تشغيل">▶</button>' +
          '<div class="mid">' +
            '<span class="lbl"></span>' +
            '<div class="row">' +
              '<div class="track"><div class="fill"></div></div>' +
              '<span class="time">0:00 / 0:00</span>' +
            '</div>' +
          '</div>' +
        '</div>';
      this.$btn = root.querySelector('.btn');
      this.$lbl = root.querySelector('.lbl');
      this.$track = root.querySelector('.track');
      this.$fill = root.querySelector('.fill');
      this.$time = root.querySelector('.time');
      if (this.label) { this.$lbl.textContent = this.label; } else { this.$lbl.style.display = 'none'; }
      this.$btn.addEventListener('click', this.toggle.bind(this));
      this.$track.addEventListener('click', this.seekClick.bind(this));
    }

    resolveSrc() {
      var id = this.getAttribute('data-res-id');
      if (id && window.__resources && window.__resources[id]) return window.__resources[id];
      return this.getAttribute('src') || this.src;
    }

    async ensureBuffer() {
      if (this.buffer || this.usingFallback) return;
      var ctx = getCtx();
      if (!ctx) { this.setupFallback(); return; }
      this.loading = true;
      this.$lbl.textContent = 'جارٍ التحميل…';
      try {
        var resp = await fetch(this.resolveSrc());
        var arr = await resp.arrayBuffer();
        this.buffer = await ctx.decodeAudioData(arr.slice(0));
        this.duration = this.buffer.duration;
        this.$time.textContent = '0:00 / ' + fmt(this.duration);
        this.$lbl.textContent = this.label;
      } catch (e) {
        this.$lbl.textContent = this.label;
        this.setupFallback();
      }
      this.loading = false;
    }

    setupFallback() {
      if (this.usingFallback) return;
      this.usingFallback = true;
      var a = document.createElement('audio');
      a.src = this.resolveSrc(); a.preload = 'auto';
      a.addEventListener('loadedmetadata', () => { this.duration = a.duration; this.$time.textContent = fmt(a.currentTime) + ' / ' + fmt(this.duration); });
      a.addEventListener('timeupdate', () => {
        this.$fill.style.width = (this.duration ? (a.currentTime / this.duration * 100) : 0) + '%';
        this.$time.textContent = fmt(a.currentTime) + ' / ' + fmt(this.duration);
      });
      a.addEventListener('ended', () => { this.playing = false; this.$btn.textContent = '▶'; this.$fill.style.width = '0%'; });
      this.fallbackEl = a;
    }

    async toggle() {
      if (this.usingFallback) {
        if (this.fallbackEl.paused) { try { await this.fallbackEl.play(); this.playing = true; this.$btn.textContent = '⏸'; } catch (e) {} }
        else { this.fallbackEl.pause(); this.playing = false; this.$btn.textContent = '▶'; }
        return;
      }
      if (!this.buffer) { await this.ensureBuffer(); if (this.usingFallback) return this.toggle(); if (!this.buffer) return; }
      var ctx = getCtx();
      if (ctx.state === 'suspended') { try { await ctx.resume(); } catch (e) {} }
      if (this.playing) { this.stopSource(); }
      else { this.startSource(); }
    }

    startSource() {
      var ctx = getCtx();
      var src = ctx.createBufferSource();
      src.buffer = this.buffer;
      src.connect(ctx.destination);
      src.onended = () => {
        if (this._stopping) return;
        this.playing = false; this.offset = 0; this.$btn.textContent = '▶';
        this.$fill.style.width = '0%'; this.$time.textContent = '0:00 / ' + fmt(this.duration);
        cancelAnimationFrame(this._raf);
      };
      if (this.offset >= this.duration) this.offset = 0;
      src.start(0, this.offset);
      this.node = src;
      this.startedAt = ctx.currentTime - this.offset;
      this.playing = true;
      this.$btn.textContent = '⏸';
      this.tick();
    }

    stopSource() {
      var ctx = getCtx();
      this.offset = Math.min(ctx.currentTime - this.startedAt, this.duration);
      this._stopping = true;
      try { this.node.stop(); } catch (e) {}
      this._stopping = false;
      this.playing = false;
      this.$btn.textContent = '▶';
      cancelAnimationFrame(this._raf);
    }

    tick() {
      var ctx = getCtx();
      var cur = Math.min(ctx.currentTime - this.startedAt, this.duration);
      this.$fill.style.width = (this.duration ? (cur / this.duration * 100) : 0) + '%';
      this.$time.textContent = fmt(cur) + ' / ' + fmt(this.duration);
      if (this.playing) this._raf = requestAnimationFrame(this.tick.bind(this));
    }

    seekClick(e) {
      var rect = this.$track.getBoundingClientRect();
      // RTL track: right edge = 0, left edge = duration
      var ratio = (rect.right - e.clientX) / rect.width;
      ratio = Math.max(0, Math.min(1, ratio));
      if (this.usingFallback) { if (this.duration) this.fallbackEl.currentTime = ratio * this.duration; return; }
      if (!this.buffer) return;
      var was = this.playing;
      if (was) this.stopSource();
      this.offset = ratio * this.duration;
      this.$fill.style.width = (ratio * 100) + '%';
      this.$time.textContent = fmt(this.offset) + ' / ' + fmt(this.duration);
      if (was) this.startSource();
    }
  }

  customElements.define('sound-bar', SoundBar);
  window.SoundBar = SoundBar;
})();
