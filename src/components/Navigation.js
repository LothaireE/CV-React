import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="../media/billGates.jpg" alt="profil-pic" />
          <h3>Lothaire Epee</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassname="navActive" id="navColor">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/knowledges"
              activeClassname="navActive"
              id="navColor"
            >
              <i className="fas fa-mountain"></i>
              <span>knowledges</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/portfolio"
              activeClassname="navActive"
              id="navColor"
            >
              <i className="fas fa-images"></i>
              <span>portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/contacts"
              activeClassname="navActive"
              id="navColor"
            >
              <i className="fas fa-address-book"></i>
              <span>contacts</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
          </li>
        </ul>
        <div className="signature">Lothaire - 2022</div>
      </div>
    </div>
  );
};

export default Navigation;
