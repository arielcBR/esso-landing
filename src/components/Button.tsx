interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
}

export function Button({ text, variant = "primary" }: ButtonProps) {
  const baseClass = "rounded-full py-3 px-6 font-bold text-sm";
  const variantClass =
    variant === "primary" ? "bg-white border-0 text-neutral-800" : "bg-transparent border border-white text-white";

  return <button className={`${baseClass} ${variantClass}`}>{text}</button>;
}