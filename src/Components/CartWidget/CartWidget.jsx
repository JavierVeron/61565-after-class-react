import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {getTotalProducts} = useContext(CartContext);

    if (getTotalProducts() > 0) {
        return (
            <Link to={"/cart"}>
                <button type="button" className="btn bg-light position-relative">
                    <i className="bi bi-cart"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{getTotalProducts()}</span>
                </button>
            </Link>
        )
    }
}

export default CartWidget;  