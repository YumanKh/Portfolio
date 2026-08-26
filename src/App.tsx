import {Routes, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import MainPage from './MainPage'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'

function App() {

  return (
    <>
        <Header/>
        <Routes>
          <Route path = "/" element= {<MainPage/>}/>
          <Route path = "/AboutMe" element= {<AboutMe/>}/>
          <Route path = "/ContactMe" element= {<ContactMe/>}/>
        </Routes>
        <Footer/>
    </>
  );
}

export default App
