import './ItemDetail.css';

const Item = ( { item }) => {
  return (
    <>
    <div className="item-card">
      <img src={item.imageUrl} alt={item.name} className="item-image" />
      <div className="item-details">
        <h3 className="item-name">{ item.name}</h3>
        <h4 className="item-description">{ item.description}</h4>
        <p className="item-price">Precio: ${item.price}</p> 
      </div>  
    </div>
    </>
  )
};

export default Item;