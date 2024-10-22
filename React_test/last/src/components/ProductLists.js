import React, { useState } from 'react'
import product1 from '../images/tomato.jpeg'
import product2 from '../images/carrot.jpeg'
import product3 from '../images/corn.jpeg'
import product4 from '../images/product4.jpeg'
import product5 from '../images/product5.jpeg'
import product6 from '../images/product6.jpeg'
import ProductCard from './ProductCard'
export default function ProductLists(props) {

  const [products, setProducts] = useState([
    {id: 1, name:"Apple", description: "green", photo: product4},
    {id: 2, name:"Orange", description: "red", photo: product5},
    {id: 3, name:"Melon", description: "yellow", photo: product6}
  ]);

  return (
    <div>
      <p>{props.shopName}'s Vegetables</p>
      <div className="product-cards">
        <a className="product-card" href="/">
          <img src={product1} width={200} height={140} alt="Tomato" />
          <p>Tomato</p>
        </a>
        <a className="product-card" href="/">
          <img src={product2} width={200} height={140} alt="Carrot" />
          <p>Carrot</p>
        </a>
        <a className="product-card" href="/">
          <img src={product3} width={200} height={140} alt="Corn" />
          <p>Corn</p>
        </a>
      </div>
      <div className="product-cards">
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            photo={product.photo}
          />
          //<div key={product.id} className="product-card">
          //<p>{product.name}</p>
          //<img src={product.photo} width={200} height={140} alt={product.name} />
          //</div> 

        

        ))}
      </div>
    </div>
  );
}
