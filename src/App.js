import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/presentationals/Header.jsx';
import GaleryContainer from './components/containers/GaleryContainer.jsx';
import ContactUsContainer from './components/containers/ContactUsContainer.jsx';

function App() {
  return (
    <>
    <BrowserRouter >
      <Header />
        <Routes>
          <Route path="/" element={<GaleryContainer />}/>
          <Route path="/search" element={<GaleryContainer />}/>
        </Routes>
      <ContactUsContainer />
    </BrowserRouter>
    </>
  );
}

export default App;
