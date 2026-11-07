interface ProjectLinksProps {
  title: string;
  sourceUrl?: string | null;
  liveUrl?: string | null;
  className?: string;
}

const ProjectLinks = ({ title, sourceUrl, liveUrl, className = '' }: ProjectLinksProps) => {
  const links: any[] = [];
  if (liveUrl) {
    links.push(
      <a
        key="live"
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={'Open live preview of ' + title}
        className="inline-flex items-center gap-[8px] rounded-[2px] border border-accent bg-accent px-[16px] py-[10px] font-mono text-[12.5px] font-medium text-accent-ink transition-colors hover:bg-[#60a5fa]"
      >
        <span className="material-symbols-outlined text-[16px] leading-none">open_in_new</span>
        Live Preview
      </a>
    );
  }
  if (sourceUrl) {
    links.push(
      <a
        key="source"
        href={sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={'View source code for ' + title + ' on GitHub'}
        className="inline-flex items-center gap-[8px] rounded-[2px] border border-line-strong px-[16px] py-[10px] font-mono text-[12.5px] text-ink-0 transition-colors hover:border-accent hover:text-accent"
      >
        <span className="material-symbols-outlined text-[16px] leading-none">code</span>
        Source Code
      </a>
    );
  }
  if (links.length === 0) return null;
  return (
    <div className={'flex flex-wrap items-center gap-[10px] ' + className}>
      {links}
    </div>
  );
};

export default ProjectLinks;
