import { Routes, Route } from 'react-router-dom'
import Shop from './components/shop/shop.component';
import SignIn from "./components/signIn/signIn.component";
import Header from "./route/header/header.component";
import Home from "./route/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='signIn' element={<SignIn />}/>
      </Route>      
    </Routes>
  )
};

export default App;
