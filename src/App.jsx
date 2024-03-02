import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordian'
import RandomColor from './components/random-color/index.jsx'
import StarRating from './components/star-rating/index.jsx'
import ImageSlider from './components/image-slider/index.jsx'
import LoadMoreItem from './components/load-more-button/index.jsx'
import TreeView from './components/tree-view/index.jsx'
import menus from './components/tree-view/data.js'
import QrGenerator from './components/qr-code-generator/index.jsx'
import ThemeSwitch from './components/switch-theme/index.jsx'
import ScrollIndicator from './components/scroll-indicator/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      {/* <StarRating/> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} page={Math.floor(Math.random()*100)}/> */}
      {/* <LoadMoreItem/> */}
      {/* <TreeView list={menus} /> */}
      {/* <QrGenerator/> */}
      {/* <ThemeSwitch/> */}
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
    </>
  )
}

export default App
