"use client";

import React from "react";
import svgPaths from "./svg-2k788kq5uc";

function Layer() {
  return (
    <div className="absolute inset-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 57.6186">
        <g id="layer1-1">
          <path d={svgPaths.p3f5f6800} fill="var(--fill-0, #0089D6)" id="path21" />
        </g>
      </svg>
    </div>
  );
}

export default function MicrosoftAzureLogo({ wordpressData }: any) {
  return (
    <div className="relative size-full">
      <Layer />
    </div>
  );
}