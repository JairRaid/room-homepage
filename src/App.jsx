import Header from "./components/Header";
import CarouselSlide from "./components/CarouselSlide";
import DecorNavigation from "./components/DecorNavigation";
import { SLIDEDATA, SLIDEDATADESKTOP } from "./slideData";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [slideSelected, setSlideSelected] = useState(0);
  const [slide, setSlide] = useState(SLIDEDATA);
  const timoutRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        clearTimeout(timoutRef.current);
        timoutRef.current = setTimeout(() => {
          setSlide(SLIDEDATADESKTOP);
        }, 100);
      }
      if (window.innerWidth <= 768) {
        clearTimeout(timoutRef.current);
        timoutRef.current = setTimeout(() => {
          setSlide(SLIDEDATA);
        }, 100);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timoutRef.current);
    };
  }, []);

  function handleSlide(button) {
    if (button === "previous") {
      setSlideSelected((prevSlide) =>
        prevSlide > 0 ? prevSlide - 1 : SLIDEDATA.length - 1
      );
    }

    if (button === "next") {
      setSlideSelected((prevSlide) =>
        prevSlide < SLIDEDATA.length - 1 ? prevSlide + 1 : 0
      );
    }
  }
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <section className="innovative-decor">
            <div className="decor-image">
              <div
                className="carousel-container"
                style={{ transform: `translateX(${-slideSelected * 100}%)` }}
              >
                {slide.map((data, index) => (
                  <CarouselSlide key={index} {...data} />
                ))}
              </div>
              <DecorNavigation onSlide={handleSlide} />
            </div>
            <article>
              <div className="text-wrapper">
                <h2>{slide[slideSelected].title}</h2>
                <p>{slide[slideSelected].description}</p>
                <a href="#">Shop Now</a>
              </div>
              <DecorNavigation onSlide={handleSlide} />
            </article>
          </section>

          <section className="about-furniture">
            <figure>
              <img
                src="images/image-about-dark.jpg"
                alt="Dark-themed modern furniture collection"
              />
            </figure>
            <article>
              <h3>About Our Furniture</h3>
              <p>
                Our multifunctional collection blends design and function to
                suit your individual taste. Make each room unique, or pick a
                cohesive theme that best expresses your interests and what
                inspires you. Find the furniture pieces you need, from
                traditional to contemporary styles or anything in between.
                Product specialists are available to help you create your dream
                space.
              </p>
            </article>
            <figure>
              <img
                src="images/image-about-light.jpg"
                alt="Minimalist white chair against a light background"
              />
            </figure>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
