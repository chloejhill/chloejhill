import AboutClient from './AboutClient';
import { fetchPageOverrides } from '@/lib/payloadContent';

export default async function About() {
  const overrides = await fetchPageOverrides('about');
  return <AboutClient overrides={overrides} />;
}
