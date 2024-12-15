export function GradientText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
