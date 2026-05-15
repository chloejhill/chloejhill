'use client';

import { createContext, useContext } from 'react';

import { defaultSiteSettings, type SiteSettingsData } from '@/lib/defaultSiteSettings';

const SiteSettingsContext = createContext<SiteSettingsData>(defaultSiteSettings);

export function SiteSettingsProvider({
  value,
  children
}: {
  value: SiteSettingsData;
  children: React.ReactNode;
}) {
  return (
    <SiteSettingsContext.Provider value={value}>
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}
