export default function Nav() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
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
          <a href="#About-Me">About Me</a>
        </div>
        <div style={linkStyle}>
          <a href="#Portfolio">Portfolio</a>
        </div>
        <div style={linkStyle}>
          <a href="#Contact">Contact</a>
        </div>
        <div style={linkStyle}>
          <a href="#Resume">Resume</a>
        </div>
      </section>
    </nav>
  );
}
