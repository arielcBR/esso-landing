interface DifferentialCardProps {
    image: string;
    title: string;
    description: string;
}

export function DifferentialCard({image, title, description}: DifferentialCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 border border-white shadow-[10px_10px_10px_rgba(0,0,0,0.25)] bg-gray-200 rounded-3xl py-6 px-4 h-auto w-64 md:w-72">
      <img className="h-32 w-28" src={image} alt="" />
      <p className="font-bold text-lg text-yellow-600 text-nowrap md:text-xl xl:text-lg">{title}
      </p>
      <p className="text-sm text-gray-600 text-center md:text-base">{description}</p>
    </div>
  );
}
