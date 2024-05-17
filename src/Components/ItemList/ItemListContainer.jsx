import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loading from "../Loading/Loading";
//import arrayProductos from "../../json/productos.json";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

/* const fetchItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arrayProductos)
        }, 2000)
    })
}; */

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    // Accediendo a un array de productos vía JSON
    /* useEffect(() => {
        const fetchData = async () => {
            const data = await fetchItems();
            setItems(categoryId ? data.filter(item => item.category == categoryId) : data);
            setLoading(false);
        };

        fetchData();
    }, [categoryId]); */

    // Acceder a un Documento por ID en Firestore
    /* useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "items", "DwP3KfW2k9Ge8HdlRUOm");
        getDoc(docRef).then(snapShot => {
            console.log(snapShot);
            if (snapShot.exists()) {
                console.log("Existe el Documento!");
                console.log(snapShot.id);
                console.log(snapShot.data());
                setItems([{id:snapShot.id, ...snapShot.data()}]);
                setLoading(false);
            } else {
                console.log("No existe el Documento!");
            }
        });
    }, []) */


    // Acceder a una Colección en Firestore
    /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then(snapShot => {
            console.log(snapShot);
            if (snapShot.size > 0) {
                console.log("Existen Documentos!");
                console.log(snapShot.docs);
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
                setLoading(false);
            } else {
                console.log("No existen Documentos!");
            }
        });
    }, []) */


    // Acceder a una Colección usando filtros en Firestore
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        //const resultQuery = query(itemsCollection, where("precio", "<=", 5000))
        //const resultQuery = query(itemsCollection, where("categoria", "==", "linea_capilar"))
        //const resultQuery = query(itemsCollection, where("categoria", "==", categoryId))
        const resultQuery = query(itemsCollection, (where("categoria", "==", categoryId), where("precio", "<", 5000)));
        getDocs(resultQuery).then(snapShot => {
            console.log(snapShot);
            if (snapShot.size > 0) {
                console.log("Existen Documentos!");
                console.log(snapShot.docs);
                setItems(snapShot.docs.map(item => ({id:item.id, ...item.data()})));
                setLoading(false);
            } else {
                console.log("No existen Documentos!");
                setItems([]);
            }
        });
    }, [categoryId])


    return (
        <div className="container my-5">
            <div className="row">
                {
                    loading ? <Loading /> : <ItemList items={items} />
                }
            </div>
        </div>
    )
};

export default ItemListContainer;