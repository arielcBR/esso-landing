import aboutUsImage from '../assets/images/aboutUs-image.jpg';

export function AboutUs() {
  return (
    <section className="container flex flex-col justify-around gap-4">
      <h3 className="text-white font-bold text-2xl text-center w-full">
        Sobre nós
      </h3>
      <p className="text-white text-sm text-justify w-full">
        Somos especialistas em consultoria em segurança do trabalho e manutenção
        na Indústria 4.0, com uma sólida atuação na indústria metalúrgica e em
        empresas de alto risco &#40;graus 3 e 4&#41;. Nosso compromisso é
        oferecer soluções criativas e focadas em resultados, garantindo a gestão
        integrada de máquinas e uma visão sistêmica das operações.
      </p>
      <p className="text-white font-bold text-sm text-center">
        CREA/RS n° 262810
      </p>
      <img className='rounded-md w-full' src={aboutUsImage} alt="sala de máquinas com dois gerador gigantes ao centro" />
    </section>
  );
}
