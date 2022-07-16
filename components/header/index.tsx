import Image from "next/image";
import FontAwesomeIconLink from "../fontawesome-icon-link";
import { faGear, faHouse, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image
              src={require("../../assets/images/bootstrap.png")}
              alt="Brand Img"
              width="30%"
              height="30%"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <FontAwesomeIconLink
                  routeUrl="/dashboard"
                  icon={faHouse}
                  size="lg"
                />
              </li>
            </ul>
            <form className="d-flex justify-content-start" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav">
              <li className="nav-item">
                <FontAwesomeIconLink
                  routeUrl="/friends"
                  icon={faUserGroup}
                  size="lg"
                />
              </li>
            </ul>
            <ul className="navbar-nav float-right">
              <li className="nav-item dropdown">
                {/* <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a> */}
                <FontAwesomeIcon icon={faGear} size="lg" className="nav-link dropdown-toggle" id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"/>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
