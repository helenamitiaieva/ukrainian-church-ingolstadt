type SacramentIconProps = {
  icon: string;
  className?: string;
};

export default function SacramentIcon({ icon, className }: SacramentIconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <use href={`/icons/sprite.svg#${icon}`} />
    </svg>
  );
}
