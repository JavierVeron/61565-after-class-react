import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
        <div className="col-md-4 mb-4">
            <Link to={"/item/" + item.id}>
                <div className="card">
                <img src={item.imagen} alt={item.nombre} className="img-fluid" />
                    <div className="card-body">
                        <h5 className="card-title text-secondary">{item.nombre}</h5>
                        <p className="item-price text-secondary"><b>${item.precio}</b></p>
                    </div>
                </div>
            </Link>
        </div>
  )
};

export default Item;