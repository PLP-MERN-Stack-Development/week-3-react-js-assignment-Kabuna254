import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; 
import Home from './pages/Home';
import ApiPostsPage from './pages/APIPosts';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<ApiPostsPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
