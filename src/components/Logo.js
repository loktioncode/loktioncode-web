import React from "react";

/**
 * Playful block mark + wordmark. Scales via width on the wrapper or prop.
 */
function Logo({ className, width = 220, "aria-label": ariaLabel = "LOXIONCODE" }) {
  return (
    <svg
      className={className}
      width={width}
      height={(width * 52) / 200}
      viewBox="0 0 200 52"
      role="img"
      aria-label={ariaLabel}
    >
      <title>{ariaLabel}</title>
      <rect x="2" y="8" width="22" height="22" rx="6" fill="#FF6B6B" />
      <rect x="26" y="4" width="22" height="22" rx="6" fill="#4ECDC4" />
      <rect x="14" y="28" width="22" height="22" rx="6" fill="#FFE066" />
      <text
        x="56"
        y="33"
        fontFamily="Baloo2-Bold, system-ui, sans-serif"
        fontSize="23"
        fill="#2e2640"
      >
        LOXIONCODE
      </text>
      <text
        x="56"
        y="48"
        fontFamily="Baloo2-SemiBold, system-ui, sans-serif"
        fontSize="7"
        fill="#5c5369"
        letterSpacing="0.08em"
      >
        TEAMWORK MAKES THE DREAM WORK
      </text>
    </svg>
  );
}

export default Logo;
