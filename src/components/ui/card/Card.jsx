"use client"
import React from 'react'
import { HiOutlinePlus } from "react-icons/hi";
import { LuMinus } from "react-icons/lu";
import img from '../../../../assets/svg/Vector (43).svg';
import Image from 'next/image';
import Link from 'next/link';
function Card({product}) {
  return (
    <div>
      <Link href={`/productdetail`}>
        <div className='product-card'>
                <div className="product-card__badge">
                  {product.badge}
                </div>  
                
                <div className="product-card__image w-full h-[10px]">
                  {product.image && product.image.length > 0 ? (
                          <Image src={product.image} alt={product.title} width={300} height={300}/>
                  ) : (
                    <div className="image-placeholder">
                      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="40" r="15" stroke="#ccc" strokeWidth="2"/>
                        <path d="M30 80 Q50 60 70 80" stroke="#ccc" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                  )}
                </div>
                
                <h3 className="product-card__title">{product.title}</h3>
                
                <ul className="product-card__features">
                   {product.features} 
                </ul>
                
                <div className="product-card__footer">
                  <div className="product-card__price">
                     <span className='currency'>200 бонусов</span>
                    <span className="amount">{product.price.toLocaleString()} сом</span>
                  </div>
                  
                  <button className="product-card__cart" aria-label="Добавить в корзину">
                   <Image src={img} alt="" />
                  </button>
                </div>
              </div>
      </Link>
    </div>
  )
}

export default Card
