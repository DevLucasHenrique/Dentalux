import "./HomePage.css";

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

interface Service {
  color: string;
  icon: string;
  label: string;
  name: string;
}

interface Quality {
  icon: string;
  name: string;
  description: string;
}

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

      <section id="services">
        <h1 className="services-title">Nossos Serviços: </h1>
        <div className="services-container">
          {SERVICES.map((service) => {
            return (
              <div className={`service ${service.color}`}>
                <img className="icon" src={service.icon} alt="Service Icon" />
                <div className="body">
                  <h5 className="label">{service.label}</h5>
                  <h4 className="service-name">{service.name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="qualities">
        {QUALITIES.map((quality) => {
          return (
            <div className="quality">
              <img src={quality.icon} className="icon" alt="Icon" />
              <div className="text">
                <h3 className="quality-name">{quality.name}</h3>
                <p className="description">
                  {quality.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
