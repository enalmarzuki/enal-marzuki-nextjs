export const FooterSection = () => {
  return (
    <footer className='border-t border-slate-800/50 py-8'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-xs text-slate-600 md:flex-row md:px-6 lg:px-10'>
        <p>© {new Date().getFullYear()} Enal Marzuki. All rights reserved.</p>
        <p className='flex items-center gap-1.5'>
          <span>Built using AI, React, Next.js, and Tailwind CSS.</span>
        </p>
      </div>
    </footer>
  );
};
