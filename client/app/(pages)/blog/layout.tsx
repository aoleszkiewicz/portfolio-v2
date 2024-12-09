import Navigation from '@/components/layout/navigation/navigation';

const core = {
  menuItems: [
    { href: '#projects', label: 'Projects' },
    { href: '#techstack', label: 'Techstack' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ],
};

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navigation items={core.menuItems} />
      <main>{children}</main>
    </>
  );
}
