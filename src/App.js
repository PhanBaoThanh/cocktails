import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Product from './Components/Product/Product'
import Home from './Components/Home/Home'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'
import img7 from './img/7.jpg'
import img8 from './img/8.jpg'
import img9 from './img/9.jpg'
import img10 from './img/10.jpg'
import img11 from './img/11.jpg'
import img12 from './img/12.jpg'
import img13 from './img/13.jpg'
import img14 from './img/14.jpg'
import img15 from './img/15.jpg'
import img16 from './img/16.jpg'
import img17 from './img/17.jpg'
import img18 from './img/18.jpg'
import img19 from './img/19.jpg'
import img20 from './img/20.jpg'
import img21 from './img/21.jpg'
import img22 from './img/22.jpg'
import img23 from './img/23.jpg'
import img24 from './img/24.jpg'
function App() {
  const data = [
    {
      id: 1,
      name: 'A1',
      img: img1,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 2,
      name: 'ABC',
      img: img2,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 3,
      name: 'ACE',
      img: img3,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 4,
      name: 'ADAM',
      img: img4,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 5,
      name: 'AT&T',
      img: img5,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 6,
      name: 'ACID',
      img: img6,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 7,
      name: 'A. J.',
      img: img7,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 8,
      name: 'KARSK',
      img: img8,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 9,
      name: 'MELYA',
      img: img9,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 10,
      name: 'AFFAIR',
      img: img10,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 11,
      name: 'BOXCAR',
      img: img11,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 12,
      name: 'ORGASM',
      img: img12,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 13,
      name: 'APELLO',
      img: img13,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 14,
      name: 'AVALON',
      img: img14,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 15,
      name: 'CASINO',
      img: img15,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 16,
      name: 'RADLER',
      img: img16,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 17,
      name: 'MIMOSA',
      img: img17,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 18,
      name: 'PALOMA',
      img: img18,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 19,
      name: 'ABILENE',
      img: img19,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 20,
      name: 'ALMERIA',
      img: img20,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 21,
      name: 'MAI TAI',
      img: img21,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 22,
      name: 'MARTINI',
      img: img22,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 23,
      name: 'SAZERAC',
      img: img23,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
    {
      id: 24,
      name: 'SIDECAR',
      img: img24,
      type: 'Layered in a shot glass.',
      att: ['Amaretto','Baileys irish cream','Cognac']
    },
  ]
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home data={data}/>} />
          <Route path='/:productId' element={<Product data={data} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
