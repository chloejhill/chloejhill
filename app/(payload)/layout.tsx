import config from '../../payload.config';
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts';
import type { ServerFunctionClient } from 'payload';
import { importMap } from './admin/importMap.js';
import '@payloadcms/next/css';
import './admin-overrides.css';

type Args = {
  children: React.ReactNode;
};

const serverFunction: ServerFunctionClient = async function serverFn(args) {
  'use server';
  return handleServerFunctions({
    ...args,
    config,
    importMap
  });
};

export default function PayloadLayout({ children }: Args) {
  return (
    <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  );
}
