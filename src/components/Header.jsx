import Nav from './Nav';


export default function Header() {
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
            <h1>Chaye</h1>
            <img src="assets\images\park-wy-3237037a.jpg"></img>

            <Nav />
          </div>

        </section>
      </header>
    );
  }
  