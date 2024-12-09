import { cn } from '@/lib/utils/class-helpers';

// TODO: Limit textSize to XL
type HeroProps = {
  video: string;
  text?: string;
  textSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
};

const Hero: React.FC<HeroProps> = ({
  video,
  text = 'Aleksander Oleszkiewicz - Fullstack Developer',
  textSize = 'sm',
}) => {
  return (
    <section className={'relative min-h-screen w-full'}>
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
      <div
        className={
          'relative flex h-full w-full flex-col items-center justify-center py-2'
        }
      >
        <h1
          className={cn(
            `text-${textSize} uppercase text-white mix-blend-difference`,
          )}
        >
          {text}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
export type { HeroProps };
