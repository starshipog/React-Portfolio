export default function SectionTwo() {
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
            <section id="Work" class="Work">
            <h2>My Work</h2>

            <p class="Web1">
                Marketing Site Update
                <a href="https://starshipog.github.io/marketing-site-update/">
                
                {/* <img src="assets\images\starshipog.github.io_marketing-site-update_.png" alt="Marketing site webpage"> */}
                
                </a>
            </p>

            <p class="Web2">
                CyberMart
                <a href="https://cybermart1-76e7c43ac326.herokuapp.com/">
{/*                 
                <img src="assets\images\cybermart ss.png" alt="Cybermart homepage with tech products for sale"> */}

                </a>

            </p>

            <p class="Web3">
                Demo Site 3
                    <a href="https://www.funbrain.com/">
                    
                    {/* <img src="assets\images\blog_page.png" alt="Red Demo Webpage"> */}

                    </a>
            </p>

            </section>
          </div>

        </section>
      </header>
    );
  }
  