import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem, clear, getTotalProducts, getSumProducts} = useContext(CartContext);

    if (getTotalProducts() == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-light" role="alert"><h4>No se encontraron Productos en el Carrito!</h4></div>
                        <Link to={"/"} className="btn bg-light my-5">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={6} className="align-middle text-end"><button className="btn bg-light" onClick={clear}>Vaciar Carrito</button></td>
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imageUrl} alt={item.name} width={64} /></td>
                                    <td className="align-middle text-start">{item.name}</td>
                                    <td className="align-middle text-center">${item.price}</td>
                                    <td className="align-middle text-center">x{item.quantity}</td>
                                    <td className="align-middle text-center">${item.quantity * item.price}</td>
                                    <td className="align-middle text-end"><i className="bi bi-trash3" onClick={() => {removeItem(item.id)}} title="Eliminar Producto"></i></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={4} className="align-middle text-center"><b>Total</b></td>
                                <td className="align-middle text-center"><b>${getSumProducts()}</b></td>
                                <td className="align-middle text-end"><Link to={"/checkout"} className="btn bg-light">Checkout</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;