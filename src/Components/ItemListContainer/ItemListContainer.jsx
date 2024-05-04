import React from "react";
/*import Greetings from '../Title/Greetings';*/
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";


const fetchItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                    {
                        id: 1,
                        imageUrl: "https://picsum.photos/200",
                        name: 'Product 1',
                        categoria: "jabones",
                        description: "Jabón de Avena",
                        price: 10
                    },
                    {
                        id: 2,
                        imageUrl: "https://picsum.photos/200",
                        name: 'Product 2',
                        categoria: "aceites",
                        description: "Aceite de Romero",
                        price: 20
                    },
                    {
                        id: 3,
                        imageUrl: "https://picsum.photos/200",
                        name: 'Product 3',
                        categoria: "jaleas",
                        description: "Jalea de Moras",
                        price: 30
                    },
            ])
        }, 2000)
    })
};

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchItems();
            setItems (data);
            setLoading (false);
        };

        fetchData();
    }, []);

    return (
        <div className="item-list-container">
            <h1>Welcome to our Store</h1>
            {
                loading
                ? <div>Cargando...</div>
                : <ItemList items={ items } />
            }
        </div>
    )
};


/*
const ItemListContainer = (props) => {
    return (
        <Greetings greeting={props.texto} />
    );
}
*/
export default ItemListContainer;