import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const LatestProducts = () => {
  const { clothData } = useContext(ShopContext);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Latest Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clothData.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
