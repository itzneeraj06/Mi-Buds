import { Route, Routes } from 'react-router';
import Landingpage from './pages/Landingpage';
import Header from './components/Header';
import Footer from './components/Footer';
import Specs from './pages/Specs';
import './App.css';
import Review from './pages/Review';
import FAQ from './pages/FAQ';
import Buynow from './pages/Buynow';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/specs' element={<Specs />} />
        <Route path='/review' element={<Review />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/buynow' element={<Buynow />} />
      </Routes>
      <Footer />
    </div>

  );
}
export default App;

