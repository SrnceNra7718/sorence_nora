"use client";

import React, { useState } from "react";
import { Certificate } from "@/lib/certificates";
import { useMediaQuery } from "@/lib/useMediaQuery";

interface PdfPreviewProps {
  certificate: Certificate;
  compact?: boolean;
}

const PdfPreview: React.FC<PdfPreviewProps> = ({
  certificate,
  compact = false,
}) => {
  const [loaded, setLoaded] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { pdf, title } = certificate;

  return (
    <div className="relative w-full overflow-hidden rounded-[6px] border border-line bg-bg-1">
      {loaded && !isMobile && (
        <embed
          src={pdf}
          type="application/pdf"
          title={`PDF preview: ${title}`}
          className="h-full w-full border-0"
          style={{ aspectRatio: compact ? "16/9" : "3/4" }}
        />
      )}

      {(!loaded || isMobile) && (
        <div
          className={`flex flex-col items-center justify-center gap-[14px] p-[28px] text-center ${
            compact ? "h-[180px]" : "h-[320px]"
          }`}
        >
          <span className="material-symbols-outlined text-[32px] opacity-20">
            picture_as_pdf
          </span>
          <div className="flex flex-col gap-[10px] text-center">
            {!isMobile && (
              <button
                onClick={() => setLoaded(true)}
                className="inline-flex items-center justify-center gap-[8px] rounded-[2px] border border-accent bg-accent px-[24px] py-[12px] font-mono text-[12.5px] font-medium text-accent-ink transition-colors hover:bg-[#f0b25d]"
              >
                <span className="material-symbols-outlined text-[16px]">
                  visibility
                </span>
                View PDF
              </button>
            )}
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-[8px] rounded-[2px] border border-line-strong px-[24px] py-[12px] font-mono text-[12.5px] text-ink-0 transition-colors hover:border-accent hover:text-accent"
            >
              <span className="material-symbols-outlined text-[16px]">
                open_in_new
              </span>
              Open PDF
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfPreview;
