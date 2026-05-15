import config from '../../payload.config';
import { handleServerFunctions } from '@payloadcms/next/layouts';
import type { ServerFunctionClient } from 'payload';
import { importMap } from './admin/importMap.js';
import { PayloadAdminNest } from './PayloadAdminNest';
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
    <div className="payload-admin-root">
      <PayloadAdminNest serverFunction={serverFunction}>{children}</PayloadAdminNest>
    </div>
  );
}
