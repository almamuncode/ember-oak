'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Flame, Menu, ShoppingBag, ArrowUpRight } from 'lucide-react';
import { useExperience, ReserveButton } from './ExperienceProvider';
import { Modal } from './Modal';
export const links = [
  ['/', 'Home'],
  ['/menu', 'Menu'],
  ['/about', 'Our Story'],
  ['/gallery', 'Gallery'],
  ['/contact', 'Contact'],
] as const;
export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Ember and Oak home">
      <Flame size={24} strokeWidth={1.4} />
      <span>
        EMBER <span className="logo-amp">&</span> OAK<small>MODERN GRILL & KITCHEN</small>
      </span>
    </Link>
  );
}
export function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const { count, openCart, reserve } = useExperience();
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 20);
    scroll();
    window.addEventListener('scroll', scroll, { passive: true });
    return () => window.removeEventListener('scroll', scroll);
  }, []);
  const nav = (
    <>
      {links.map(([href, label]) => (
        <Link
          key={href}
          href={href}
          onClick={() => setMobile(false)}
          aria-current={
            path === href || (href !== '/' && path.startsWith(href)) ? 'page' : undefined
          }
        >
          {label}
        </Link>
      ))}
    </>
  );
  return (
    <>
      <header className={`navbar ${scrolled || path !== '/' ? 'solid' : ''}`}>
        <div className="nav-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            {nav}
          </nav>
          <div className="nav-actions">
            <button
              className="icon-button cart-button"
              aria-label={`Open cart, ${count} items`}
              onClick={openCart}
            >
              <ShoppingBag size={20} />
              {count > 0 && <span>{count}</span>}
            </button>
            <ReserveButton className="button nav-reserve">
              Reserve a Table <ArrowUpRight size={15} />
            </ReserveButton>
            <button
              className="icon-button hamburger"
              onClick={() => setMobile(true)}
              aria-label="Open navigation"
              aria-expanded={mobile}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>
      {mobile && (
        <Modal title="Make yourself at home." onClose={() => setMobile(false)}>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {nav}
          </nav>
          <button
            className="button wide"
            onClick={() => {
              setMobile(false);
              reserve();
            }}
          >
            Reserve a Table <ArrowUpRight size={17} />
          </button>
        </Modal>
      )}
    </>
  );
}
