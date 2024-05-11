import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
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
          <ItemCount stock={item.stock} />
        </div>
      </div>
    </div>
  )
};

export default ItemDetail;