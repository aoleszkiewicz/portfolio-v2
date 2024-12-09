import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { cn } from '@/lib/utils/class-helpers';
import { navigation } from './payload';

const Navigation: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex w-full shrink-0 items-center justify-center bg-transparent px-4 py-1 md:px-6 md:py-2">
      <NavigationMenu>
        <NavigationMenuList className="rounded-lg bg-white px-2 py-1">
          {navigation.map(({ href, label }, index) => (
            <NavigationMenuItem key={index} className="cursor-pointer">
              <Link href={href} legacyBehavior>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    'uppercase',
                    'font-light',
                    'text-sm',
                  )}
                >
                  {label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default Navigation;
