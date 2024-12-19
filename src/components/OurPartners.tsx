import { Slider } from "./Slider";

export function OurPartners() {
  return (
    <section
      id="Partners"
      className="flex flex-col justify-center gap-5 bg-white py-14 md:gap-10 md:py-12"
    >
      <h5 className="text-center text-black text-xl font-bold text mb-3 md:text-3xl">
        Quem usa nossos serviços
      </h5>
      <Slider />
    </section>
  );
}
