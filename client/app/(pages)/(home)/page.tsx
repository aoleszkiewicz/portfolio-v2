import Hero from '@/components/hero';
import Navigation from '@/components/layout/navigation/navigation';
import Section from '@/components/layout/section/section';
import Experience from '@/components/sections/experience/experience';
import Projects from '@/components/sections/projects/projects';

export default function Home() {
  return (
    <>
      <Hero
        video={
          'https://wypych-webflow.s3.eu-north-1.amazonaws.com/pw-showreel-d.mp4'
        }
      />
      <Navigation />
      <Section setAsContainer disablePadding>
        <Projects />
        <Experience />
      </Section>
    </>
  );
}
