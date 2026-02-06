export const Divider = ({ width }: { width: number }) => {
  return (
    <div style={{ maxWidth: `${width}px` }} className="mx-auto px-6">
      <div className="h-px bg-[#B8AB9C]/20" />
    </div>
  );
};
