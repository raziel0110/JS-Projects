import React from "react";
import "./Slider.css";

const Slider = ({ slides }) => {
  const [curr, setCurr] = React.useState(0);
  const { length } = slides;

  const goNext = () => {
    setCurr(curr === length - 1 ? 0 : curr + 1);
  };

  React.useEffect(() => {
    setTimeout(goNext, 2000);
    return function() {
      clearTimeout(goNext);
    };
  });

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {slides.map((s, i) => (
        <div key={s.title} className={i === curr ? "slide active" : "slide"}>
          <div>
            <h1>{s.title}</h1>
            <h2>{s.subtitle}</h2>
          </div>
          {i === curr && <img src={s.image} className="image" />}
        </div>
      ))}
    </section>
  );
};

export default Slider;
