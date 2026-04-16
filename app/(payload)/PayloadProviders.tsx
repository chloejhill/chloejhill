'use client';

import { RootProvider } from '@payloadcms/ui';
import { en } from '@payloadcms/translations/languages/en';
import type { ServerFunctionClient } from 'payload';

type Props = {
  children: React.ReactNode;
  serverFunction: ServerFunctionClient;
};

export default function PayloadProviders({ children, serverFunction }: Props) {
  const fallbackClientConfig = {
    admin: {
      autoLogin: null,
      avatar: 'default',
      dateFormat: 'MMM d, yyyy',
      importMap: {},
      routes: {
        account: '/account',
        createFirstUser: '/create-first-user',
        login: '/login',
        logout: '/logout',
        unauthorized: '/unauthorized'
      },
      theme: 'light',
      timezones: {
        defaultTimezone: 'UTC',
        supportedTimezones: []
      },
      userSlug: 'users'
    },
    collections: [
      {
        slug: 'pages',
        labels: {
          singular: 'Page',
          plural: 'Pages'
        }
      },
      {
        slug: 'media',
        labels: {
          singular: 'Media',
          plural: 'Media'
        }
      },
      {
        slug: 'users',
        labels: {
          singular: 'User',
          plural: 'Users'
        }
      }
    ],
    globals: [],
    i18n: {
      dateFNSKey: 'en-US',
      fallbackLanguage: 'en',
      supportedLanguages: {}
    },
    routes: {
      admin: '/admin',
      api: '/api'
    }
  } as any;

  return (
    <RootProvider
      config={fallbackClientConfig}
      dateFNSKey={en.dateFNSKey}
      fallbackLang="en"
      languageCode="en"
      languageOptions={[{ label: 'English', value: 'en' }]}
      locale="en"
      permissions={null as any}
      serverFunction={serverFunction}
      theme="light"
      translations={en.translations as any}
      user={null}
    >
      {children}
    </RootProvider>
  );
}

