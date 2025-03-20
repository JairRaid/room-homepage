export default function CarouselSlide({ image, alt }) {
  return (
    <>
      <div className="carousel-slide">
        <img src={image} alt={alt} />
      </div>
    </>
  );
}
