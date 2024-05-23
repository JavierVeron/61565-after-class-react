import { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Checkout = () => {
    const {cart, getTotalProducts, getSumProducts} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const buyer = {name:nombre, email:email, telephone:telefono};
        const items = cart.map(item => ({id:item.id, title:item.name, price:item.price}));
        const order = {buyer:buyer, items:items, total:getSumProducts()};
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        //console.log(order);
        
        // Agregar un nuevo Documento en Firestore
        addDoc(ordersCollection, order).then(data => {
            console.log(data);
            setOrderId(data.id);
        });
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(event) => {setNombre(event.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(event) => {setEmail(event.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(event) => {setTelefono(event.target.value)}}  />
                        </div>
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
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-light" role="alert">Felicitaciones! Tu Orden de Compra es: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout