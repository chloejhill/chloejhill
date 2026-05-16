import type { Metadata } from 'next';
import WorkWithMeClient from './WorkWithMeClient';
import { fetchPageOverrides } from '@/lib/payloadContent';

export const metadata: Metadata = {
  title: 'Work with me',
  description:
    'Systems insight, strategic sensemaking, research advisory, and futures work for philanthropists, foundations, and mission-driven leaders.'
};

export default async function WorkWithMePage() {
  const overrides = await fetchPageOverrides('work-with-me');
  return <WorkWithMeClient overrides={overrides} />;
}
