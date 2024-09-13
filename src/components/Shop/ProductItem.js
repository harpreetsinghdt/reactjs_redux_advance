import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cartSlice";

const ProductItem = (props) => {
  const dispatach = useDispatch();
  const { id, title, price, description } = props;

  function addToCartHandler() {
    dispatach(
      cartActions.addItemToCart({
        id,
        title,
        price,
        description,
      })
    );
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions} onClick={addToCartHandler}>
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
