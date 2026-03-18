"use client";

import React from "react";
import svgPaths from "./svg-6r1cut85br";

function Group() {
  return (
    <div className="absolute inset-[0.6%_0.55%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300.671 179.8">
        <g id="Group">
          <path d={svgPaths.p1387fa00} fill="var(--fill-0, white)" id="Vector" />
          <g id="Group_2">
            <path clipRule="evenodd" d={svgPaths.p1c293b80} fill="var(--fill-0, #FF9900)" fillRule="evenodd" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p2d627700} fill="var(--fill-0, #FF9900)" fillRule="evenodd" id="Vector_3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function AmazonWebServicesLogo({ wordpressData }: any) {
  return (
    <div className="relative size-full">
      <Group />
    </div>
  );
}