import React from 'react'
import './product.scss'
import { useParams,Link } from 'react-router-dom'

const Product = ({data}) => {
  const {productId} = useParams()
  const cocktail = data.find(item => item.id.toString() === productId)
  return (
    <div className='productContainer'>
      <div className='img'>
        <img src={cocktail.img} alt='ptc' />
      </div>
      <div className='text'>
        <h3 className='textHeader'>{cocktail.name}</h3>
        <p className='textType'>{cocktail.type}</p>
        <ul className='textList'>
          {
            cocktail.att.map((item,index) => (
              <li key={index}><i class="far fa-check-square"></i>{item}</li>
            ))
          }
        </ul>

        <Link to='/' className='btn'>ALL COCKTAILS</Link>
      </div>

    </div>
  )
}

export default Product