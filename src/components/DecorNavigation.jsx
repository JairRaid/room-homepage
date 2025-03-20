export default function DecorNavigation({ onSlide }) {
  return (
    <>
      <div className="decor-navigation">
        <button
          id="previous"
          aria-label="Previous image"
          onClick={() => onSlide("previous")}
        >
          <img src="images/icon-angle-left.svg" alt="left icon" />
        </button>
        <button
          id="next"
          aria-label="Next image"
          onClick={() => onSlide("next")}
        >
          <img src="images/icon-angle-right.svg" alt="right icon" />
        </button>
      </div>
    </>
  );
}
