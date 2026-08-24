type GoldGradientProps = {
  id: string;
};

export default function GoldGradient({ id }: GoldGradientProps) {
  return (
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#C8A04A" />
      <stop offset="100%" stopColor="#E9C47A" />
    </linearGradient>
  );
}
