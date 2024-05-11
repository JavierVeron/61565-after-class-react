import React from "react";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loading from "../Loading/Loading";
import arrayProductos from "../../json/productos.json";
import { useParams } from "react-router-dom";

const fetchItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arrayProductos)
        }, 2000)
    })
};

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchItems();
            setItems(categoryId ? data.filter(item => item.category == categoryId) : data);
            setLoading(false);
        };

        fetchData();
    }, [categoryId]);

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