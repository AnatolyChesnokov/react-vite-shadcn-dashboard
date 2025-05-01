import { z } from 'zod'
import { createReactOidc } from 'oidc-spa/react'

export const {
  OidcProvider,
  /**
   * Note: If you have multiple OidcProvider in your app
   * you do not need to use the useClient hook that that corresponds
   * to the above OidcProvider.
   */
  useOidc,
  /**
   * This is useful to use the oidc API outside of React.
   */
  enforceLogin,
  // getOidc,
  // withLoginEnforced,
} = createReactOidc(async () => ({
  // If you don't have the parameters right away, it's the case for example
  // if you get the oidc parameters from an API you can pass a promise that
  // resolves to the parameters. `createReactOidc(prParams)`.
  // You can also pass an async function that returns the parameters.
  // `createReactOidc(async () => params)`. It will be called when the <OidcProvider />
  // is first mounted or when getOidc() is called.

  // NOTE: If you are using keycloak, the issuerUri should be formatted like this:
  // issuerUri: https://<YOUR_KEYCLOAK_DOMAIN><KC_RELATIVE_PATH>/realms/<REALM_NAME>
  // KC_RELATIVE_PATH is by default "" in modern keycloak, on older keycloak it used to be "/auth" by default.
  issuerUri: import.meta.env.VITE_OIDC_ISSUER_URI,
  clientId: import.meta.env.VITE_OIDC_CLIENT_ID,
  __unsafe_clientSecret: import.meta.env.VITE_OIDC_CLIENT_SECRET || undefined,
  __unsafe_useIdTokenAsAccessToken:
    import.meta.env.VITE_OIDC_USE_ID_TOKEN_AS_ACCESS_TOKEN === 'true',
  idleSessionLifetimeInSeconds: (() => {
    const value_str = import.meta.env.VITE_OIDC_SSO_SESSION_IDLE_SECONDS
    return value_str ? parseInt(value_str) : undefined
  })(),
  scopes: (import.meta.env.VITE_OIDC_SCOPE || undefined)?.split(' '),
  homeUrl: import.meta.env.BASE_URL,
  decodedIdTokenSchema: z.object({
    sub: z.string(),
    name: z.string(),
  }),
  extraQueryParams: ({ isSilent }) => ({
    audience: import.meta.env.VITE_OIDC_AUDIENCE || undefined,
    ui_locales: isSilent ? undefined : 'en', // Here you would dynamically get the current language at the time of redirecting to the OIDC server
  }),
  debugLogs: true,
}))
