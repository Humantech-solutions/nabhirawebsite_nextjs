"use client";

import svgPaths from "./svg-bh286w0lws";

export default function Group({ wordpressData }: any) {
  return (
    <div className="relative size-full">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128.527 89.5288">
        <g clipPath="url(#clip0_618_38)" id="Group">
          <g id="Mask group">
            <mask height="90" id="mask0_618_38" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="129" x="0" y="0">
              <g id="Group_2">
                <path d="M0 0H128.527V89.5288H0V0Z" fill="var(--fill-0, white)" id="Vector" />
              </g>
            </mask>
            <g mask="url(#mask0_618_38)">
              <path clipRule="evenodd" d={svgPaths.p2a45bd00} fill="var(--fill-0, #00A1E0)" fillRule="evenodd" id="Vector_2" />
            </g>
          </g>
          <path clipRule="evenodd" d={svgPaths.p2ed52100} fill="var(--fill-0, #FFFFFE)" fillRule="evenodd" id="Vector_3" />
          <path clipRule="evenodd" d={svgPaths.p34d8a500} fill="var(--fill-0, #FFFFFE)" fillRule="evenodd" id="Vector_4" />
        </g>
        <defs>
          <clipPath id="clip0_618_38">
            <rect fill="white" height="89.5288" width="128.527" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}