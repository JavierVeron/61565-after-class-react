
const CartWidget = () => {
    return (
        <button type="button" className="btn bg-light position-relative">
            <i className="bi bi-cart"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    );
}

export default CartWidget;  