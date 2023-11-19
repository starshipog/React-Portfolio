export default function SectionOne() {
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
            <section id="About-Me" class="AboutMe">
            <h2>About Me</h2>
            <P>
               My name is Chaye, I'm from north Texas and I love to create and design. I have a naturally passion for 
               creating and designing makes writing and building code more fun and easier. 
            </P>
            </section>
          </div>

        </section>
      </header>
    );
  }
  