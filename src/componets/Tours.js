import Title from "./Title";
import { tours } from "../data";
import Tour from "./Tour"
function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="FEATURED" subTitle="TOURS" />

      <div className="section-center featured-center">
        {tours.map(
          (tourPlace) => (
            <Tour {...tourPlace} key={tourPlace.id} />
          )
        )}
      </div>
    </section>
  );
}

export default Tours;
