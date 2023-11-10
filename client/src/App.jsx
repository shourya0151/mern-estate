import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import About from './pages/About';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import Header from './components/header';

export default function App() {
  return <BrowserRouter>
  <Header /> 
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
  </BrowserRouter>;
}