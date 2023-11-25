export default function AboutMe() {
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
            <section id="About-Me" className="AboutMe">
            <h1>About Me</h1>
            <p className="card-text">
               My name is Chaye, Im from north Texas and I love to create and design. I have a naturally passion for 
               creating and designing makes writing and building code more fun and easier. 
            </p>
            </section>
          </div>

        </section>
      </header>
    );
  }
  