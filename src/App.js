import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './componant/Header/Header';
import Footer from './componant/Footer/Footer';
import Home from './componant/Home/Home';
import NotFound from './componant/NotFound/NotFound';
import { Container } from 'react-bootstrap';
import ServicesData from './componant/ServicesData/ServicesData';
import Gallery from './componant/Gallery/Gallery';
import AboutUs from './componant/AboutUs/AboutUs';



function App() {
  return (
    <div>
    <BrowserRouter>
    <Container>
       <Header></Header>
         <Switch>
            <Route exact path='/'>
            <Home></Home>
            </Route>
           <Route path='/home'>
            <Home></Home>
           </Route>
           <Route path='/services'>
            <ServicesData></ServicesData>
           </Route>
           <Route path='/gallery'>
              <Gallery></Gallery>
           </Route>
           <Route path='/about'>
            <AboutUs></AboutUs>
           </Route>
           <Route path='*'>
            <NotFound></NotFound>
           </Route>
         </Switch>
       
    
   </Container>
   <Footer></Footer>
   </BrowserRouter>
    </div>
  );
}

export default App;
