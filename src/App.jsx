import Header from './components/Header';
import Nav from './components/Nav';
import Description from './components/Description';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';

// Import our list of users from users.js
// import users from './users';

// Pass users array to the List component as a prop
export default function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Description />
      <SectionOne />
      <SectionTwo />
      <SectionThree />

    </div>
  );
}
