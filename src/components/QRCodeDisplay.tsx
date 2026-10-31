"use client";

import React, { useEffect, useState } from "react";
import QRCode from "qrcode";

interface QRCodeDisplayProps {
  value: string;
  size?: number;
  className?: string;
  alt?: string;
}

export default function QRCodeDisplay({
  value,
  size = 180,
  className = "",
  alt = "Código QR",
}: QRCodeDisplayProps) {
  const [dataUrl, setDataUrl] = useState<string>("");

  useEffect(() => {
    let isMounted = true;
    QRCode.toDataURL(value, {
      width: size,
      margin: 1,
      color: {
        dark: "#2E2522",
        light: "#FFFFFF",
      },
    })
      .then((url) => {
        if (isMounted) setDataUrl(url);
      })
      .catch((err) => {
        console.error("Error generating QR code:", err);
      });

    return () => {
      isMounted = false;
    };
  }, [value, size]);

  if (!dataUrl) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`bg-cream-100 animate-pulse rounded-xl flex items-center justify-center ${className}`}
      >
        <span className="text-xs text-taupe-400">Generando QR...</span>
      </div>
    );
  }

  return (
    <img
      src={dataUrl}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-xl shadow-inner ${className}`}
    />
  );
}
