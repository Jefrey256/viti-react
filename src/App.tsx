
import './App.css'


// rotas
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/Home/Home'
import Header from './components/Header/Header'
//nsfw
import Gay from './components/pages/Nsfw/Gay'
import Hetero from './components/pages/Nsfw/Hetero'
import Lesbi from './components/pages/Nsfw/Lesbi'
import Futa from './components/pages/Nsfw/Futa'
//sfw
import Gay_ from './components/pages/Sfw/Gays'
import Hetero_ from './components/pages/Sfw/Hetero'
import Lesbi_ from './components/pages/Sfw/Lesbica'

// const root = ReactDOM.createrRoot(document.getElementById("root"));
 function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='header' element={<Header />} />
        {/* nsfw */}
        <Route path='/gay' element={<Gay />} />
        <Route path='/hetero' element={ <Hetero />} />
        <Route path='/lesbi' element={ <Lesbi />} /> 
        <Route path='/futa' element={ <Futa />} />
        {/* sfw */}
        <Route path='/gay_' element={ <Gay_ />} /> 
        
        <Route path='/hetero_' element={ <Hetero_ />} /> 
        <Route path='/lesbi_' element={ <Lesbi_ />} /> 
        
        
        
      </Routes>
    </Router>
    
  )
}

export default App
