import Link from 'next/link';
import { redirect } from 'next/navigation';

/** 
 * Root landing page: 
 * Redirect to a default slug (e.g., 'wedding') or show a general landing. 
 */
export default function Home() {
  // Redirect to the Rajitha & Sayuri wedding invitation
  redirect('/rajitha-sayuri');
}

