import Title from "./Title";
import { services } from "../data";
import Service from "./Service"
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="Our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((services) => (
          <Service {...services} key={services.id} />
        ))}
      </div>
    </section>
  );
};
export default Services;
