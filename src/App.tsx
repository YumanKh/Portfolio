import {Routes, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MainPage from './MainPage'


function App() {

  return (
    <>
        <Header/>
        <Routes>
          <Route path = "/" element= {<MainPage/>}/>
        </Routes>
        <Footer/>
    </>
  );
}

export default App
