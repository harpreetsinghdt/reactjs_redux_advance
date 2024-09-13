import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 2,
    title: "Apple iphone 16",
    description:
      "Brand new apple iphone 16 with new M++ chip and latest processor",
  },
  {
    id: "p2",
    price: 5,
    title: "Sampsung Galaxy 16",
    description:
      "Brand new samsung galaxy 16 with new M++ chip and latest processor",
  },
  {
    id: "p3",
    price: 10,
    title: "Google pixel 16",
    description:
      "Brand new apple iphone 16 with new M++ chip and latest processor",
  },
  {
    id: "p4",
    price: 55,
    title: "Spacex 16",
    description: "Brand new missile 16 with new M++ chip and latest processor",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
