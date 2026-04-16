'use client';

import { ConfigProvider } from '@payloadcms/ui';
import { ServerFunctionsProvider } from '@payloadcms/ui/providers/ServerFunctions';
import type { ServerFunctionClient } from 'payload';

type Props = {
  children: React.ReactNode;
  serverFunction: ServerFunctionClient;
};

const fallbackConfig = {
  collections: [],
  globals: []
} as any;

export default function PayloadConfigProvider({ children, serverFunction }: Props) {
  return (
    <ConfigProvider config={fallbackConfig}>
      <ServerFunctionsProvider serverFunction={serverFunction}>{children}</ServerFunctionsProvider>
    </ConfigProvider>
  );
}

