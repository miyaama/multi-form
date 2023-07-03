export const Loader = () => {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <span className="mb-4">Loading...</span>
      <span className="animate-ping inline-flex h-3 w-3 rounded-full bg-orange-400 opacity-75"></span>
    </div>
  );
};
