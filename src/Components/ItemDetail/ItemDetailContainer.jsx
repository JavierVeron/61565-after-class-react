import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    // Acceder a un Documento en Firestore
    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "items", id);
        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            } else {
                console.log("No existe el Documento!");
                setItem({});
            }
        });
    }, [id]);

    return (
        <>
            {
                loading ? <Loading /> : <ItemDetail item={item} />
            }
        </>
    )
}

export default ItemDetailContainer;