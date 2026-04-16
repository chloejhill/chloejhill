import HomeClient from './home/HomeClient';
import { fetchPageOverrides } from '@/lib/payloadContent';

export default async function Home() {
  const overrides = await fetchPageOverrides('home');
  return <HomeClient overrides={overrides} />;
}
