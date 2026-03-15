import type { Testimonial } from "../../types";
import './Testimonials.css'
import starIcon from "../../assets/icons/star.svg";

interface Props {
  TESTIMONIALS: Testimonial[]
}

export function Testimonials({ TESTIMONIALS }: Props) {
  return (
    <section id="testimonials">
      <h2 className="testimonials-title">
        O que nossos <strong>clientes</strong> dizem
      </h2>
      {TESTIMONIALS.map((testimonial) => {
        return (
          <div className="testimonial">
            <div className="rating-container">
              {[...Array(testimonial.rating)].map((_, i) => (
                <img src={starIcon} className="star" key={i} alt="Star" />
              ))}
            </div>
            <p className="text">{testimonial.text}</p>
            <h6 className="date">{testimonial.date}</h6>
          </div>
        );
      })}
    </section>
  );
}
