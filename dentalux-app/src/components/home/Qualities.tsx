import type { Quality } from "../../types";
import './Qualities.css'

interface Props {
  QUALITIES: Quality[]
}

export function Qualities({ QUALITIES }: Props) {
  return (
    <section id="qualities">
      {QUALITIES.map((quality) => {
        return (
          <div className="quality">
            <img src={quality.icon} className="icon" alt="Icon" />
            <div className="text">
              <h3 className="quality-name">{quality.name}</h3>
              <p className="description">{quality.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
