import Section from '@/components/layout/section/section';
import { rubik } from '@/lib/constants/fonts';
import { cn } from '@/lib/utils/class-helpers';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <Section
      setAsContainer
      disablePadding
      className={cn(rubik.className, 'min-h-screen px-8 py-32')}
    >
      <div className="flex flex-col gap-y-8">
        <div className="w-fit bg-black px-6 py-2">
          <h3 className="text-xl font-bold uppercase text-white">Hi, there!</h3>
        </div>
        <h1 className="flex flex-col text-5xl uppercase">
          <span className="font-semibold">Aleksander Oleszkiewicz</span>
          <span>a Fullstack Developer</span>
        </h1>
        <div className="flex flex-row gap-x-2">
          <Button size="lg" asChild>
            <Link href="#projects">Projects</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">Get in touch</Link>
          </Button>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 aspect-square w-5/12 -translate-x-1/2 -translate-y-1/3 rounded-full bg-red-300 blur-2xl"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <Image
          src="/images/pfp.png"
          alt={'Aleksander Oleszkiewicz profile picture'}
          width={500}
          height={384}
          priority
          className="relative z-10"
        />

        <div className="absolute bottom-0 z-0 h-3/4 w-full rotate-3 rounded-t-xl bg-amber-600"></div>
        <div className="absolute bottom-0 z-0 h-3/4 w-full rounded-t-xl bg-amber-500"></div>
        <div className="animate-tilt absolute bottom-0 left-0 z-0 aspect-square w-3/5 rounded-full bg-amber-400 bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
        <div className="animate-tilt absolute left-0 top-1/2 z-0 aspect-square w-full -translate-y-1/4 rounded-full bg-amber-400 bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
      </div>
    </Section>
  );
};

export default Hero;
