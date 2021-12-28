import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import MyNFTs from './Pages/MyNFTs/MyNFTs';
import PopularComments from './Pages/AllComments/PopularComments/PopularComments';
import FeaturedComments from './Pages/AllComments/FeaturedComments/FeaturedComments';
import CommentsForm from './Pages/AllComments/CommentsForm/CommentsForm';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popularcomments" element={<PopularComments />} />
          <Route path="/featuredcomments" element={<FeaturedComments />} />
          <Route path="/nfts" element={<MyNFTs />} />
          <Route path="/allitems/:itemId" element={<CommentsForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
