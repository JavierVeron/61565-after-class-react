import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col text-center">
          <Link to={"/"}>
            <img src="https://acdn.mitiendanube.com/stores/001/070/304/themes/common/logo-256865518-1659190912-fd89c452a45cd9441d9e929b2d7616cc1659190912-320-0.webp" alt="Jabones Naturales" width={160} />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink className="nav-link text-secondary" to={"/category/linea_piel"}>Líneal Piel</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-secondary" to={"/category/linea_capilar"}>Línea Capilar</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-secondary" to={"/category/linea_aromaterapia"}>Línea Aromaterapia</NavLink>
            </li>
          </ul>
        </div>
        <div className="col text-end">
          <CartWidget/>
        </div>
      </div>
    </div>
  );
}

export default NavBar;