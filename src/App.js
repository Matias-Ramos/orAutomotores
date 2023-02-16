import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/presentationals/Header.jsx';
import GaleryContainer from './components/containers/GaleryContainer.jsx';
import ContactUsContainer from './components/containers/ContactUsContainer.jsx';

function App() {
  return (
    <>
      <Header />
      <GaleryContainer />
      <ContactUsContainer />
    </>
  );
}

export default App;
