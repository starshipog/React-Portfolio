import './App.css';
import Header from './components/Header';

import Section from './components/Section';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

// Import our list of users from users.js
// import users from './users';

// Pass users array to the List component as a prop
export default function App() {
  return (
    <div>
      <Header />
      <Section />
      <Outlet/>
      <Footer />

    </div>
  );
}
