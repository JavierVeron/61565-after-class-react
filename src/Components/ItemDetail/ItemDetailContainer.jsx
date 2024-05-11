import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import ItemDetail from "./ItemDetail";
import arrayProductos from "../../json/productos.json";
import { useParams } from "react-router-dom";

const fetchItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arrayProductos);
        }, 2000)
    })
};

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchItems();
            setItem (id ? data.find(item => item.id == id) : {});
            setLoading (false);
        };

        fetchData();
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