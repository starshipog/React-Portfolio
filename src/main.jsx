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
        index: true,
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
  





//  1) Your application doesn't have a footer. Make sure to create a 'Footer' component that will display on all pages. (DONE)

// 2) You should have a resume section that contains a link to download your resume as well as a list of your proficiences. (GET HELP ADDING LINK)

// 3) Your links are not working for the different sections of your portfolio. When one of them is clicked, it should display a different page containing the necessary information.

// 4) You are missing the required contact form. Make sure that you create a form for contacting you that contains form validation.

// 5) Make sure that you are using conditional rendering to display the different pages of your application. Currently you are displaying all pages on a single large page. You should use React conditional rendering in order to display each page when the link is clicked on and hide the other pages. (DONE)

// 6) Your commit history is a bit sparse. Make sure that you commit every time that you make a meaningful change to the code and give it a message that describes the change that was made. Think of commits as a history of the development of your repository.

// 7) Make sure that you deploy this application. The deployment is a significant part of the grade, so get it deployed as soon as possible.

// 8) Create some styling for your components with CSS. Right now you don't really have any styling being applied.
