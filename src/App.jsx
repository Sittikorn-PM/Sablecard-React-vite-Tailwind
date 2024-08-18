
import './App.css'

import Header from './components/header'
import Section from './components/section'
import CardDebit from './components/cardDebit'
import FavoriteBrands from './components/favoriteBrands'
import CompareSable from './components/compareSable'
import CommentSlide from './components/commentSlide'
import DownLoad from './components/downLoad'
import Footer from './components/footer'

function App() {

  return (
    <div>
      <Header />
      <Section />
      <CardDebit/>
      <FavoriteBrands/>
      <CompareSable/>
      <CommentSlide/>
      <DownLoad/>
      <Footer/>
    </div>
  )
}

export default App
