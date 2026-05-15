import { ProgressBar, RootProvider } from '@payloadcms/ui';
import { getClientConfig } from '@payloadcms/ui/utilities/getClientConfig';
import { cookies as nextCookies, headers as nextHeaders } from 'next/headers';
import { applyLocaleFiltering } from 'payload/shared';
import type { ImportMap, SanitizedConfig, ServerFunctionClient } from 'payload';

import { checkDependencies } from '../../node_modules/@payloadcms/next/dist/layouts/Root/checkDependencies.js';
import { NestProviders } from '../../node_modules/@payloadcms/next/dist/layouts/Root/NestProviders.js';
import { getNavPrefs } from '../../node_modules/@payloadcms/next/dist/elements/Nav/getNavPrefs.js';
import { getRequestTheme } from '../../node_modules/@payloadcms/next/dist/utilities/getRequestTheme.js';
import { initReq } from '../../node_modules/@payloadcms/next/dist/utilities/initReq.js';

import config from '../../payload.config';
import { importMap } from './admin/importMap.js';

const configPromise = Promise.resolve(config as unknown as SanitizedConfig);

type Props = {
  children: React.ReactNode;
  serverFunction: ServerFunctionClient;
};

/**
 * Mirrors Payload's RootLayout inner shell without rendering `<html>` / `<body>`,
 * so admin works under the site's root `app/layout.tsx` (which already owns `<html>`).
 * @see https://payloadcms.com/docs — compare with `RootLayout` from `@payloadcms/next/layouts`.
 */
export async function PayloadAdminNest({ children, serverFunction }: Props) {
  checkDependencies();

  const {
    languageCode,
    permissions,
    req,
    req: {
      payload: { config: resolvedConfig }
    }
  } = await initReq({
    configPromise,
    importMap: importMap as ImportMap,
    key: 'RootLayout'
  });

  const headers = await nextHeaders();
  const cookieStore = await nextCookies();
  const theme = getRequestTheme({
    config: resolvedConfig,
    cookies: cookieStore,
    headers
  });

  const languageOptions = Object.entries(
    resolvedConfig.i18n.supportedLanguages || {}
  ).reduce<{ label: string; value: string }[]>((acc, [language, languageConfig]) => {
    if (Object.keys(resolvedConfig.i18n.supportedLanguages || {}).includes(language)) {
      acc.push({
        label: languageConfig.translations.general.thisLanguage,
        value: language
      });
    }
    return acc;
  }, []);

  async function switchLanguageServerAction(lang: string) {
    'use server';
    const cookies = await nextCookies();
    cookies.set({
      name: `${resolvedConfig.cookiePrefix || 'payload'}-lng`,
      path: '/',
      value: lang
    });
  }

  const navPrefs = await getNavPrefs(req);
  const clientConfig = getClientConfig({
    config: resolvedConfig,
    i18n: req.i18n,
    importMap: importMap as ImportMap,
    user: req.user ?? true
  });

  await applyLocaleFiltering({
    clientConfig,
    config: resolvedConfig,
    req
  });

  const providers = resolvedConfig.admin?.components?.providers;
  const inner =
    Array.isArray(providers) && providers.length > 0 ? (
      <NestProviders
        importMap={req.payload.importMap}
        providers={providers}
        serverProps={{
          i18n: req.i18n,
          payload: req.payload,
          permissions,
          user: req.user ?? undefined
        }}
      >
        {children}
      </NestProviders>
    ) : (
      children
    );

  return (
    <>
      <style>{`@layer payload-default, payload;`}</style>
      <RootProvider
        config={clientConfig}
        dateFNSKey={req.i18n.dateFNSKey}
        fallbackLang={resolvedConfig.i18n.fallbackLanguage}
        isNavOpen={navPrefs?.open ?? true}
        languageCode={languageCode}
        languageOptions={languageOptions as never}
        locale={req.locale ?? undefined}
        permissions={(req.user ? permissions : null) as never}
        serverFunction={serverFunction}
        switchLanguageServerAction={switchLanguageServerAction}
        theme={theme}
        translations={req.i18n.translations}
        user={req.user ?? null}
      >
        <ProgressBar />
        {inner}
      </RootProvider>
      <div id="portal" />
    </>
  );
}
