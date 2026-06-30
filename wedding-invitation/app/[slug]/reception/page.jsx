'use client';
import { receptionConfig } from '@/lib/receptionConfig';
import ClientHome from '@/app/ClientHome';

export default function ReceptionPage() {
  return <ClientHome config={receptionConfig} />;
}
