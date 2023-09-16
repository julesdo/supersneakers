'use client'

import { hexToHSL } from "@/utils/colorConvert";
import { useEffect } from "react";

export default function Theme() {
    useEffect(() => {
        document.documentElement.style.setProperty('--custom-primary-color', hexToHSL(process.env.NEXT_PUBLIC_PRIMARY_COLOR  as string) || hexToHSL('#000000') );
    }, []);
  return null;
}