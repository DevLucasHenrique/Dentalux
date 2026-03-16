import "./HomePage.css";
import type { Service, Testimonial, Quality } from "../../types";

import { CTA } from "./CTA";
import { Testimonials } from "./Testimonials";

// * SERVICES ICONS *//
import toothIcon from "../../assets/icons/tooth.svg";
import cleanToothIcon from "../../assets/icons/clean-tooth.svg";
import labIcon from "../../assets/icons/lab.svg";
import knifeIcon from "../../assets/icons/knife.svg";
import implantIcon from "../../assets/icons/implant.svg";
import stethoscopeIcon from "../../assets/icons/stethoscope.svg";

//* QUALITIES ICONS *//
import clockIcon from "../../assets/icons/clock.svg";
import peopleIcon from "../../assets/icons/people.svg";
import medalIcon from "../../assets/icons/medal.svg";
import lightIcon from "../../assets/icons/light.svg";
import { Qualities } from "./Qualities";
import { Services } from "./Services";

const SERVICES: Service[] = [
  {
    color: "purple",
    icon: stethoscopeIcon,
    label: "Agende sua",
    name: "Consulta",
  },
  {
    color: "purple",
    icon: labIcon,
    label: "Agende seus",
    name: "Exames",
  },
  {
    color: "purple",
    icon: knifeIcon,
    label: "Agende sua",
    name: "Cirurgia",
  },
  {
    color: "blue",
    icon: toothIcon,
    label: "Agende sua avaliação",
    name: "Odontológica",
  },
  {
    color: "blue",
    icon: cleanToothIcon,
    label: "Agende seu",
    name: "Clareamento",
  },
  {
    color: "blue",
    icon: implantIcon,
    label: "Agende seu",
    name: "Implante",
  },
];

const QUALITIES: Quality[] = [
  {
    icon: clockIcon,
    name: "Pontualidade",
    description:
      "Respeitamos o seu tempo. Sem filas, sem espera. Aqui cada consulta começa no horário marcado.",
  },
  {
    icon: peopleIcon,
    name: "Atendimento",
    description:
      "Cada paciente é único e tratado com atenção individual. Você nunca será apenas um número para nós.",
  },
  {
    icon: medalIcon,
    name: "Profissionalismo",
    description:
      "Equipe com mais de 15 anos de experiência no mercado, sempre atualizada com as mais modernas técnicas odontológicas.",
  },
  {
    icon: lightIcon,
    name: "Tecnologia",
    description:
      "Equipamentos modernos para diagnósticos mais precisos e tratamentos menos invasivos, garantindo mais conforto e segurança.",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    rating: 5,
    text: '"Tinha muito medo de dentista desde criança e sempre adiava as consultas. Uma amiga me indicou a Dentalux e foi a melhor decisão que tomei. A equipe foi extremamente paciente, explicou cada procedimento com calma e eu me senti segura do início ao fim. O ambiente é acolhedor e os profissionais são atenciosos de verdade. Hoje venho a cada seis meses sem nenhum receio e recomendo para todo mundo." — Ana Paula, 34 anos',
    date: "12 de dezembro de 2025",
  },
  {
    rating: 4,
    text: "Fiz clareamento e facetas aqui e o resultado superou todas as minhas expectativas. Meu sorriso mudou completamente e minha autoestima foi junto. O atendimento é impecável, o ambiente é moderno e os profissionais são muito atenciosos e honestos. Não indico só para amigos, indico para — Carlos Eduardo, 41 anos",
    date: "23 de maio de 2023",
  },
  {
    rating: 5,
    text: 'Minha família inteira é paciente da Dentalux — eu, meu marido e meus dois filhos. O que me conquistou foi o cuidado especial que têm com as . Meu filho de 7 anos que chorava só de ouvir a palavra dentista hoje entra sorrindo no consultório. Isso não tem preço."— Mariana Souza, 29 anos',
    date: "2 de janeiro de 2026",
  },
];

export default function HomePage() {
  return (
    <>
      <section id="hero"> 
        <h1 className="main-title">
          Seu <strong className="emp">sorriso</strong> merece cuidado de verdade{" "}
          <span className="emp-dot">.</span>
        </h1>
        <p className="slogan">
          Atendimento humanizado, tecnologia de ponta e um ambiente pensado para
          o seu conforto.
        </p>
        <div className="hero-nav">
          <button className="redirect-services">Ver especialidades</button>
          <button className="schedule">Agende sua consulta</button>
        </div>
      </section>

      
      <Services SERVICES={SERVICES} />
      <Qualities QUALITIES={QUALITIES}/>
      <Testimonials TESTIMONIALS={TESTIMONIALS}/>
      <CTA />
    </>
  );
}
