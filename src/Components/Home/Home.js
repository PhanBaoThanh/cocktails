import React from 'react'
import './home.scss'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const Home = ({data}) => {
    const [value,setValue] = useState("")
    const [dataCocktails,setDataCocktails] = useState(data)
    const handleChangeValue = string => {
        setValue(string)
        if(string === "")
            setDataCocktails(data)
        else
            setDataCocktails(data.filter(item => item.name.toLowerCase().includes(string.toLowerCase())))
    }

    return (
        <div className='home'>
            <h2 className='homeHeader'>Cocktails API</h2>
            <input type='text' value={value} onInput={e => handleChangeValue(e.target.value)} placeholder='Search Your Favorite Cocktails' className='homeInput' />
            <div className='cocktails'>
            {
                dataCocktails.map(item => (
                    <Link key={item.id} to={`/${item.id}`} className='cocktail'>
                        <div className='img'>
                            <img src={item.img} alt='ptc' />
                            <div className='cocktailName'>{item.name}</div>
                        </div>
                    </Link>
                ))
            }
                
            </div>
        </div>
    )
}

export default Home