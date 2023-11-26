import Footer from '../components/Footer';



const contactFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  if (name && email && message) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

onSubmit=contactFormHandler



export default function Contact() {
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
            
      <form className="form signup-form">
      <div className="form-group">
        <label htmlFor="name">name:</label>
        <input className="form-input" type="text" id="name-signup" />
      </div>
      <div className="form-group">
        <label htmlFor="email">email:</label>
        <input className="form-input" type="text" id="email-signup" />
      </div>
      <div className="form-group">
        <label htmlFor="password">password:</label>
        <input className="form-input" type="password" id="password-signup" />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" type="submit">submit</button>
      </div>
    </form>

            <Footer />
          </div>

        </section>
      </header>
    );
  }
  