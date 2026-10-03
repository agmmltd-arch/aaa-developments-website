'use client';
import { useEffect, useState } from 'react';
import Link from '@/components/link';
import { X } from 'lucide-react';
export default function CookieNotice() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    try { if (sessionStorage.getItem('aaa-cookie-notice')) return; } catch { /* Storage can be disabled. */ }
    const frame = requestAnimationFrame(() => setVisible(window.scrollY === 0));
    const dismiss = () => { setVisible(false); try { sessionStorage.setItem('aaa-cookie-notice','dismissed'); } catch { /* No storage required. */ } };
    window.addEventListener('scroll', dismiss, { once: true, passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', dismiss); };
  }, []);
  if (!visible) return null;
  return <aside className="cookie-notice" aria-label="Cookie information">Only essential site features. No advertising or analytics cookies. <Link href="/privacy">Privacy</Link><button type="button" aria-label="Dismiss cookie information" onClick={() => { setVisible(false); try {sessionStorage.setItem('aaa-cookie-notice','dismissed');} catch {/* Storage optional. */} }}><X size={16}/></button></aside>;
}
