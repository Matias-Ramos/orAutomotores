import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../Header/Header.jsx'
import GalleryContainer from '../Gallery/GalleryContainer.jsx'
import ContactUsContainer from '../Footer/ContactUsContainer.jsx'
import Signature from '../Signature/Signature.jsx';

const App = () => {
  return (
    <BrowserRouter >
      <Header />
        <Routes>
          <Route path="/" element={<GalleryContainer />}/>
          <Route path="/search" element={<GalleryContainer />}/>
        </Routes>
      <ContactUsContainer />
      <Signature />
    </BrowserRouter>
  );
}

export default App;
