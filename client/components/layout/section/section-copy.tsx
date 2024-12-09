type SectionCopyProps = {
  label: string;
  text: string;
};

const SectionCopy: React.FC<SectionCopyProps> = ({ label, text }) => {
  return (
    <div className="flex w-full flex-col gap-y-4 py-4 md:gap-y-6 md:py-8">
      <h1 className="text-base">{label}</h1>
      <p className="text-2xl md:text-4xl">{text}</p>
    </div>
  );
};

export default SectionCopy;
export type { SectionCopyProps };
