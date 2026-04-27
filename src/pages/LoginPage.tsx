import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { t } from '@/i18n';
import { useSession } from '@/contexts/SessionContext';
import { Logo } from '@/components/brand/Logo';
import { TextField } from '@/components/forms/TextField';
import { PasswordField } from '@/components/forms/PasswordField';
import { Button } from '@/components/forms/Button';
import { AuthFailureBanner } from '@/components/forms/AuthFailureBanner';

type FieldErrors = {
  username?: string;
  password?: string;
};

type FormStatus = 'idle' | 'validating' | 'success';

const SESSION_TTL_MS = 60 * 60 * 1000;

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useSession();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [authError, setAuthError] = useState<string | null>(null);
  const [status, setStatus] = useState<FormStatus>('idle');

  const isLoading = status === 'validating';
  const isSuccess = status === 'success';

  function validate(): FieldErrors {
    const errors: FieldErrors = {};
    if (!username.trim()) errors.username = t('login.validation.usernameRequired');
    if (!password) errors.password = t('login.validation.passwordRequired');
    return errors;
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setAuthError(null);

    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus('validating');

    // C5 placeholder auth — accepts any non-empty credentials.
    // C6 replaces this with a proper mock auth service that checks
    // against EVP_AUTH_USERNAME and EVP_AUTH_PASSWORD_HASH env vars.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus('success');
    login({
      username: username.trim(),
      issuedAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + SESSION_TTL_MS).toISOString(),
    });

    setTimeout(() => navigate('/portal/overview'), 280);
  }

  const submitLabel = (() => {
    if (status === 'validating') return t('login.submit.loading');
    if (status === 'success') return t('login.submit.success');
    return t('login.submit.idle');
  })();

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Hero */}
        <div className="flex flex-col items-center gap-8 mb-10">
          <Logo size="lg" />
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-primary m-0 leading-tight">
              {t('login.heroLine1')}
            </h1>
            <p className="text-2xl md:text-3xl text-ink-700 m-0 mt-1 leading-tight">
              {t('login.heroLine2')}
            </p>
          </div>
        </div>

        {/* Auth failure banner */}
        {authError && (
          <div className="w-full max-w-md mb-4">
            <AuthFailureBanner
              message={authError}
              onDismiss={() => setAuthError(null)}
            />
          </div>
        )}

        {/* Form card */}
        <form
          onSubmit={onSubmit}
          aria-labelledby="login-heading"
          className="w-full max-w-md bg-white border border-ink-200 rounded-card-lg shadow-card p-8 sm:p-10 flex flex-col gap-5"
        >
          <div className="text-center">
            <h2
              id="login-heading"
              className="text-2xl font-semibold text-ink-900 m-0"
            >
              {t('login.welcomeHeading')}
            </h2>
            <p className="text-sm text-ink-500 mt-2 leading-relaxed">
              {t('login.welcomeSubtitle')}
            </p>
          </div>

          <TextField
            id="login-username"
            label={t('login.fields.usernameLabel')}
            placeholder={t('login.fields.usernamePlaceholder')}
            value={username}
            onChange={setUsername}
            autoComplete="username"
            error={fieldErrors.username}
            disabled={isLoading || isSuccess}
          />

          <PasswordField
            id="login-password"
            label={t('login.fields.passwordLabel')}
            placeholder={t('login.fields.passwordPlaceholder')}
            value={password}
            onChange={setPassword}
            error={fieldErrors.password}
            disabled={isLoading || isSuccess}
          />

          <Button
            type="submit"
            fullWidth
            loading={isLoading}
            disabled={isLoading || isSuccess}
          >
            {submitLabel}
          </Button>
        </form>

        <p className="text-xs text-ink-500 text-center mt-6 max-w-md px-4 leading-relaxed">
          {t('login.infoStrip')}
        </p>
      </div>

      {/* Brand gradient ribbon + footer band */}
      <div
        aria-hidden="true"
        className="h-3 bg-gradient-to-l from-brand-secondary to-brand-primary"
      />
      <footer className="bg-brand-primary-dark text-white px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <p className="m-0">{t('login.footer.line1')}</p>
          <p className="m-0 opacity-80">{t('login.footer.line2')}</p>
        </div>
      </footer>
    </main>
  );
}
