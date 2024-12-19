import aboutUsImage from "/images/aboutUs-image.jpg";

export function AboutUs() {
  return (
    <section
      id="about"
      className="container flex flex-col justify-around gap-4 py-4 text-white md:py-12"
    >
      <h3 className="font-bold text-2xl text-center w-full md:text-3xl">
        Sobre nós
      </h3>
      <p className="text-sm text-justify w-full md:text-xl">
        Somos especialistas em consultoria em segurança do trabalho e manutenção
        na Indústria 4.0, com uma sólida atuação na indústria metalúrgica e em
        empresas de alto risco &#40;graus 3 e 4&#41;. Nosso compromisso é
        oferecer soluções criativas e focadas em resultados, garantindo a gestão
        integrada de máquinas e uma visão sistêmica das operações.
      </p>
      <p className="text-sm text-justify w-full md:text-xl">
        Estamos dedicados a promover a segurança e a eficiência na sua operação,
        ajudando a transformar desafios em oportunidades de crescimento.
      </p>
      <p className="font-bold text-sm text-center md:text-xl">
        CREA/RS n° 262810
      </p>
      <img
        className="rounded-md w-full"
        src={aboutUsImage}
        alt="sala de máquinas com dois gerador gigantes ao centro"
      />
    </section>
  );
}
