import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const {addItem} = useContext(CartContext);

  const onAdd = (quantity) => {
    addItem(item, quantity);
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <img src={item.imageUrl} alt={item.name} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h1>{item.name}</h1>
          <p className="item-price"><b>${item.price}</b></p>
          <p>{item.description}</p>
          <ItemCount stock={item.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  )
};

export default ItemDetail;