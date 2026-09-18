"use client";

import React from "react";
import Image from "next/image";
import { Certificate } from "@/lib/certificates";

interface PdfPreviewProps {
  certificate: Certificate;
  compact?: boolean;
}

const PdfPreview: React.FC<PdfPreviewProps> = ({
  certificate,
  compact = false,
}) => {
  const { pdf, title, image } = certificate;

  return (
    <div
      className={`relative mx-auto w-full max-w-[620px] overflow-hidden rounded-[6px] border border-line bg-bg-1 ${
        compact ? "max-h-[260px]" : "max-h-[480px]"
      }`}
    >
      <Image
        src={image}
        alt={`${title} certificate preview`}
        width={620}
        height={480}
        sizes="(max-width: 620px) 100vw, 620px"
        className="block h-auto w-full object-contain"
      />
    </div>
  );
};

export default PdfPreview;
