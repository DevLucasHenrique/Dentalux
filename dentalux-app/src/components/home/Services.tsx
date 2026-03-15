import type { Service } from "../../types";
import './Services.css'

interface Props {
  SERVICES: Service[]
}

export function Services({ SERVICES }:Props ) {
  return (
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
  );
}
