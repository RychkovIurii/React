import React from 'react'

export default function ProductCard({ name, photo }) {
	return (
	  <div className="product-card">
		<p>{name}</p>
		<img src={photo} width={200} height={140} alt={name} />
	  </div>
	);
  }
