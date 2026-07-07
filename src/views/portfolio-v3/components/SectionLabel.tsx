export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className='inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400 ring-1 ring-emerald-500/20'>
    <span className='size-1.5 rounded-full bg-emerald-400' />
    {children}
  </span>
);
