export const Dot = () => {
  return (
    <span className={`relative grid h-3 w-3 place-items-center`}>
      <span className="absolute left-0 top-0 inline-flex h-full w-full animate-ping rounded-full bg-primary-main opacity-75"></span>
      <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-main"></span>
    </span>
  );
};
