import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function createVariantFactory<TVariant extends string>(
  classes: Record<TVariant, string>,
) {
  return (type: TVariant, ...otherClasses: string[]) => {
    const classList = [classes[type], ...otherClasses];
    return classList.join(' ');
  };
}

export { cn, createVariantFactory };
