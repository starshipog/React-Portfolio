export default function Portfolio() {
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
          <section id="Work" className="Work">
          <h2>My Work</h2>

          <p className="Web1">
              Marketing Site Update
              <a href="https://starshipog.github.io/marketing-site-update/">
              
              <img src="assets\images\starshipog.github.io_marketing-site-update_.png" alt="Marketing site webpage"/>
              
              </a>
          </p>

          <p className="Web2">
              CyberMart
              <a href="https://cybermart1-76e7c43ac326.herokuapp.com/">

              <img src="assets\images\cybermart ss.png" alt="Cybermart homepage with tech products for sale"/>

              </a>

          </p>

          <p className="Web3">
              Cool Dice
                  <a href="https://cool-dice-game-9c029df8dfbf.herokuapp.com/">
                  
                  <img src="assets\images\Screenshot-1.png" alt="Green game screen with high scores and signup page"/>

                  </a>
          </p>

          </section>
        </div>

      </section>
    </header>
  );
}
