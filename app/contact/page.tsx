import ContactClient from './ContactClient';
import { fetchPageOverrides } from '@/lib/payloadContent';

export default async function Contact() {
  const overrides = await fetchPageOverrides('contact');
  return <ContactClient overrides={overrides} />;
}
