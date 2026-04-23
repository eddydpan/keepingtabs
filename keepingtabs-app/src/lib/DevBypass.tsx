// Dev Bypass Helpers
import type { User } from '@supabase/supabase-js'

export const isDevAuthBypassEnabled =
  import.meta.env.DEV && import.meta.env.VITE_DEV_AUTH_BYPASS === 'true'

export const createDevUser = (): User =>
  ({
    id: import.meta.env.VITE_DEV_AUTH_USER_ID ?? 'dev-user',
    email: import.meta.env.VITE_DEV_AUTH_EMAIL ?? 'dev@local.test',
    aud: 'authenticated',
    role: 'authenticated',
    app_metadata: {},
    user_metadata: { name: 'Dev User' },
    created_at: new Date().toISOString(),
  } as User)