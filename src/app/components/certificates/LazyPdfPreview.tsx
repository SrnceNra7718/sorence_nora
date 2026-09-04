"use client";

import dynamic from "next/dynamic";
import { Certificate } from "@/lib/certificates";

const PdfPreview = dynamic(() => import("./PdfPreview"), {
  ssr: false,
  loading: () => (
    <div className="h-[200px] w-full animate-pulse rounded-[6px] bg-bg-2" />
  ),
});

interface LazyPdfPreviewProps {
  certificate: Certificate;
  compact?: boolean;
}

const LazyPdfPreview = ({
  certificate,
  compact = false,
}: LazyPdfPreviewProps) => {
  return <PdfPreview certificate={certificate} compact={compact} />;
};

export default LazyPdfPreview;
