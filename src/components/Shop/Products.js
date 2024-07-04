import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id:'p1',
    title:'Test01',
          price:4,
          description:'This is a first product - amazing!',
  },
  {
    id:'p2',
    title:'Test02',
          price:6,
          description:'This is a first product - superb!',
  },
  {
    id:'p3',
    title:'Test03',
          price:10,
          description:'This is a first product - sensational!',
  },
  {
    id:'p4',
    title:'Test04',
          price:5,
          description:'This is a first product - cool!',
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCTS.map( (item) => (
            <ProductItem
            key={item.id}
            id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />
          ) )
        }
        
        
      </ul>
    </section>
  );
};

export default Products;
