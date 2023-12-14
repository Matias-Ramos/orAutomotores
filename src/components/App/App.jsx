import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header.jsx";
import GalleryContainer from "../Gallery/GalleryContainer.jsx";
import ContactUsContainer from "../Footer/ContactUsContainer.jsx";
import Signature from "../Signature/Signature.jsx";
// import QueryClientProvider from "../../context/QueryClientProvider.jsx";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<GalleryContainer />} />
          <Route path="/search" element={<GalleryContainer />} />
        </Routes>
        {/* <ReactQueryDevtools /> */}
        <ContactUsContainer />
        <Signature />
      </BrowserRouter>
    </QueryClientProvider>
  )
}


export default App;
