import { useState } from "react";

export default function Header() {
  const [menu, setMenu] = useState(false);
  function handleNavigation(instruction) {
    if (instruction) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  }
  return (
    <>
      <div className={menu ? "overlay isActive" : "overlay"}></div>
      <header>
        <div className="menu" onClick={() => handleNavigation(true)}>
          <img src="images/icon-hamburger.svg" alt="menu icon" />
        </div>
        <h1>
          <img src="images/logo.svg" alt="room logo" />
        </h1>
        <nav className={menu ? "isActive" : ""}>
          <div className="close" onClick={() => handleNavigation(false)}>
            <img src="images/icon-close.svg" alt="close icon" />
          </div>
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#shop">shop</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
