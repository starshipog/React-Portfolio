import ReactDOM from 'react-dom/client';
// // Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: 'AboutMe',
        element: <AboutMe />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);


export default function Foot() {
    const linkStyle = { border: '1px black', padding: '5px' };
  
    return (
      <header className="main-header-menu">
        <section
          style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
          <div style={linkStyle}>
            
            <Footer />
          </div>

        </section>
      </header>
    );
  }
  



// export default function Section() {
//     const linkStyle = { border: '1px black', padding: '5px' };
  
//     return (
//       <header className="main-header-menu">
//         <section
//           style={{
//             display: 'flex',
//             fontFamily: 'helvetica',
//             flexDirection: 'row',
//             alignItems: 'flex-start',
//             justifyContent: 'flex-start',
//           }}
//         >


          
//           <div style={linkStyle}>
            
//             <AboutMe />
//             <Portfolio />
//             <Contact />
//             <Resume />
//             <Footer />

//           </div>

//         </section>
//       </header>
//     );
//   }
  




