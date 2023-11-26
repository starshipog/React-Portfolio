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
          <link href="#About-Me">About Me</link>
        </div>
        <div style={linkStyle}>
          <link href="#Portfolio">Portfolio</link>
        </div>
        <div style={linkStyle}>
          <link href="#Contact">Contact</link>
        </div>
        <div style={linkStyle}>
          <link href="#Resume">Resume</link>
        </div>
      </section>
    </nav>
  );
}
