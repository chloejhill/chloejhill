import config from '../../payload.config';
import { handleServerFunctions } from '@payloadcms/next/layouts';
import type { ServerFunctionClient } from 'payload';
import { importMap } from './admin/importMap.js';
import PayloadProviders from './PayloadProviders';
import '@payloadcms/next/css';
import './admin-overrides.css';

type Args = { children: React.ReactNode };

export default function Layout({ children }: Args) {
  const serverFunction: ServerFunctionClient = async function (args) {
    'use server';
    return handleServerFunctions({
      ...args,
      config,
      importMap
    });
  };

  return <PayloadProviders serverFunction={serverFunction}>{<div className="payload-admin-root">{children}</div>}</PayloadProviders>;
}

