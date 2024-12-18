interface ButtonProps {
  text: string;
  variant: "primary" | "secondary";
  to?: string;
  target?: "_self" | "_blank";
}

export function Button({ text, variant = "primary", to="", target="_self" }: ButtonProps) {
  const baseClass = "flex item-center justify-center rounded-full py-3 px-6 font-bold text-sm text=center md:text-lg";
  const variantClass =
    variant === "primary" ? "bg-white border-0 text-neutral-800" : "bg-transparent border border-white text-white";

  return <a target={target} href={to} className={`${baseClass} ${variantClass} md:w-44`}>{text}</a>;
}
