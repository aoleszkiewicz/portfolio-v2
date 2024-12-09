import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Tag from '@/components/tag';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import type { ProjectV2 } from '@/lib/types/project';
import { getStrapiMedia } from '@/lib/utils/api/strapi-helpers';
import { Skeleton } from '@/components/ui/skeleton';

const ProjectCardSkeleton = () => {
  return (
    <div className="p-1">
      <Card className="flex h-full flex-col" style={{ background: 'white' }}>
        <CardHeader className="gap-y-4">
          <CardTitle>
            <Skeleton className="h-8 w-3/4" />
          </CardTitle>
          <div className="flex flex-wrap gap-3">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-12" />
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <Skeleton className="h-48 w-full" />
        </CardContent>
        <CardFooter>
          <Skeleton className="h-8 w-24" />
        </CardFooter>
      </Card>
    </div>
  );
};

type ProjectCardProps = Omit<ProjectV2, 'demoUrl' | 'repositoryUrl'>;

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  tags,
  fadeColor,
  cover,
  caseStudy,
}) => {
  return (
    <div className="p-1">
      <Card className="flex h-full flex-col" style={{ background: fadeColor }}>
        <CardHeader className="gap-y-4">
          <CardTitle className="text-3xl font-normal uppercase leading-tight text-white mix-blend-difference">
            {name}
          </CardTitle>
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <Tag key={index}>{tag.name}</Tag>
            ))}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <Link href={caseStudy.slug}>
            <Image
              src={getStrapiMedia(cover.url)}
              alt={`Image representing ${name} project`}
              width={500}
              height={500}
              className="mb-3 rounded-sm"
            />
          </Link>
        </CardContent>
        <CardFooter>
          <Button className="w-full xl:w-auto" size="default" asChild>
            <Link href={caseStudy.slug}>
              <ExternalLink />
              Read more
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
export { ProjectCardSkeleton };
