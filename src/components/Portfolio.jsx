export default function SectionThree() {
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
            
          <section id="Contact-Me" className="ContactMe">
            <h2>Contact Me</h2>
            <p>
                chayewhitaker14@gmail.com
            </p>

            <p>
                <a href="https://github.com/starshipog">Github</a>
            </p>
        </section>
        
          </div>

        </section>
      </header>
    );
  }
  