import { useId } from "react";
import GoldGradient from "./GoldGradient";

type CloseIconProps = {
  className?: string;
};

export default function CloseIcon({ className }: CloseIconProps) {
  const gradientId = `close-gradient-${useId().replace(/:/g, "")}`;

  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <GoldGradient id={gradientId} />
      </defs>

      <path
        fill={`url(#${gradientId})`}
        d="M15.481 0c8.55 0 15.482 6.931 15.482 15.481s-6.931 15.482-15.482 15.482c-8.55 0-15.481-6.931-15.481-15.482s6.931-15.481 15.481-15.481zM20.699 12.254c0.55-0.55 0.55-1.441 0-1.99s-1.441-0.55-1.99 0l-3.227 3.227-3.227-3.227c-0.55-0.55-1.441-0.55-1.99 0s-0.55 1.441 0 1.99l3.227 3.227-3.227 3.227c-0.55 0.55-0.55 1.441 0 1.99s1.441 0.55 1.99 0l3.227-3.227 3.227 3.227c0.55 0.55 1.441 0.55 1.99 0s0.55-1.441 0-1.99l-3.227-3.227 3.227-3.227z"
      />
    </svg>
  );
}
