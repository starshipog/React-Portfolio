// import Footer from '../components/Footer';

export default function Resume() {
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
          <section id="Resume" className="Resume">
            <h1>Resume</h1>
            <p className="card-text">
               Download my <a href="https://docs.google.com/document/d/1MG47D5lH_xRIgOhYyuJQ9cbLrp9qG4Vp1Egq_KN9RhI/edit?usp=sharing">resume</a>
            </p>

            <h2>Front-end Proficiencies</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>jQuery</li>
              <li>responsive design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>

            <h2>Back-end Proficiencies</h2>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
            </section>
            {/* <Footer /> */}
          </div>

        </section>
      </header>
    );
  }
  