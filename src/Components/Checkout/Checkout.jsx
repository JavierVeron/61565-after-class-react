import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const {cart, clear, getTotalProducts, getSumProducts} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const [nombreError, setNombreError] = useState("");
    const [emailError, setEmailError] = useState("");

    const generarOrden = () => {
        if (nombre == "") {
            setNombreError("Debe completar el campo Nombre!");
            return false;
        } else {
            setNombreError("");
        }

        if (email == "") {
            setEmailError("Debe completar el campo Email!");
            return false;
        } else {
            setEmailError("");
        }

        const buyer = {name:nombre, email:email, telephone:telefono};
        const items = cart.map(item => ({id:item.id, title:item.name, price:item.price}));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = {buyer:buyer, items:items, date:date, total:getSumProducts()};
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        
        // Agregar un nuevo Documento en Firestore
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
            setNombre("");
            setEmail("");
            setTelefono("");
            clear();
        });
    }
    
    if (orderId) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-light" role="alert"><h4>Felicitaciones! Tu Orden de Compra es: <b>{orderId}</b></h4></div>
                    </div>
                </div>
            </div>
        )
    }
    
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
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre *</label>
                            <input type="text" className={`form-control ${nombreError && "is-invalid"}`} onInput={(event) => {setNombre(event.target.value)}} />
                            <div className="text-danger">{nombreError}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email *</label>
                            <input type="text" className={`form-control ${emailError && "is-invalid"}`} onInput={(event) => {setEmail(event.target.value)}} />
                            <div className="text-danger">{emailError}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(event) => {setTelefono(event.target.value)}}  />
                        </div>
                        <p className="mb-3">* Campo obligatorios</p>
                        <button type="button" className="btn bg-light" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {
                                cart.map((item) => (
                                    <tr key={item.id}>
                                        <td><img src={item.imageUrl} alt={item.name} width={64} /></td>
                                        <td className="align-middle text-start">{item.name}</td>
                                        <td className="align-middle text-center">${item.price}</td>
                                        <td className="align-middle text-center">x{item.quantity}</td>
                                        <td className="align-middle text-center">${item.quantity * item.price}</td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={4} className="align-middle text-center"><b>Total</b></td>
                                <td className="align-middle text-center"><b>${getSumProducts()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Checkout