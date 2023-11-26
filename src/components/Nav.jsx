import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/AboutMe"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;





// export default function Nav() {
//   const linkStyle = { border: '1px black', padding: '5px' };

//   return (
//     <nav className="main-header-menu">
//       <section
//         style={{
//           display: 'flex',
//           fontFamily: 'helvetica',
//           flexDirection: 'row',
//           alignItems: 'flex-start',
//           justifyContent: 'flex-start',
//         }}
//       >
//         <div style={linkStyle}>
//           <a href="#About-Me">About Me</a>
//         </div>
//         <div style={linkStyle}>
//           <a href="#Portfolio">Portfolio</a>
//         </div>
//         <div style={linkStyle}>
//           <a href="#Contact">Contact</a>
//         </div>
//         <div style={linkStyle}>
//           <a href="#Resume">Resume</a>
//         </div>
//       </section>
//     </nav>
//   );
// }
