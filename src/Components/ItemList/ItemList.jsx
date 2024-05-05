import Item from '../ItemDetail/ItemDetail';
import './ItemList.css';

const ItemList = ({ items }) => {
return (
   <div className="item-list">
    <h2>Nuestros productos:</h2>
    {items.map((item) => (
        <Item key={item.id} item={item}/>
    ))}
   </div>
  );
};

export default ItemList;