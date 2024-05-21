import { useEffect, useState } from "react";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore";
import Loading from "../Loading/Loading";

const Checkout = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    // Acceder a una Colección usando filtros en Firestore
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const resultQuery = query(itemsCollection, where("precio", "<", 50000));
        getDocs(resultQuery).then(snapShot => {
            if (snapShot.size > 0) {
                setCart(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
                setLoading(false);
            } else {
                console.log("No existen Documentos!");
                setCart([]);
            }
        });
    }, []);

    const obtenerSumaTotal = () => {
        return cart.reduce((acumulador, item) => acumulador += item.precio, 0);
    }

    const generarOrden = () => {
        const buyer = {name:nombre, email:email, telephone:telefono};
        const items = cart.map(item => ({id:item.id, title:item.nombre, price:item.precio}));
        const order = {buyer:buyer, items:items, total:obtenerSumaTotal()};
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        
        // Agregar un nuevo Documento
        /* addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
        }); */

        // Actualizar un Documento
        /* const orderRef = doc(db, "items", "DwP3KfW2k9Ge8HdlRUOm");
        getDoc(orderRef).then(producto => {
            const {stock} = producto.data();
            updateDoc(orderRef, {precio:9000, stock:(stock - 1)});
            console.log("Producto actualizado!");
        }) */

        // Actualizar uno o más Documentos
        const batch = writeBatch(db);
        const doc1 = doc(db, "items", "DwP3KfW2k9Ge8HdlRUOm");
        const doc2 = doc(db, "items", "QYRmQ28AkxpCBBiz9Iv8");
        const doc3 = doc(db, "items", "yOQ7Su4k5OU8b6aesGkW");
        batch.update(doc1, {stock:20}); //actualiza los campos, sino existe lo agrega
        batch.update(doc2, {stock:30});
        batch.set(doc3, {stock:50}); //borra todos los campos y agrega los nuevos campos definidos en el objeto
        batch.commit();
        console.log("Documentos actualizados!");
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
                    {loading ? <Loading /> : 
                    <table className="table">
                        <tbody>
                            {
                                cart.map((item) => (
                                    <tr key={item.id}>
                                        <td className="align-middle"><img src={item.imagen} alt={item.nombre} width={64} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="align-middle text-end">${item.precio}</td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2}><b>Total</b></td>
                                <td className="text-end"><b>${obtenerSumaTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                    }
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