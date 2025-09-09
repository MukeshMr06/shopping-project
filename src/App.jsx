import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Secondpage from './Secondpage'
import Thirdpage from './Thirdpage'
import Lastpage from './Lastpage'
import Footer from './Footer'
import LandingPage from './LandingPage'

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/productpage' element={<Secondpage />}></Route>
          <Route path='/categorypage' element={<Thirdpage />}></Route>
          <Route path='/cartpage' element={<Lastpage />}></Route>
        </Routes>
         <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App