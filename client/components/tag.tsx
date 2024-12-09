const Tag: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="rounded-xl bg-transparent px-2 py-1 text-sm font-light uppercase text-white mix-blend-difference outline outline-1 outline-white">
      {children}
    </div>
  );
};

export default Tag;
