const navStyles = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '14px 26px',
	backgroundColor: '#0b3d91',
	color: '#ffffff',
	boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
};

const brandStyles = {
	fontWeight: 700,
	fontSize: '20px',
	letterSpacing: '0.4px'
};

const linksWrapperStyles = {
	display: 'flex',
	gap: '16px'
};

const linkStyles = {
	color: '#ffffff',
	textDecoration: 'none',
	fontWeight: 500,
	padding: '6px 10px',
	borderRadius: '6px',
	border: '1px solid rgba(255, 255, 255, 0.25)'
};

const Navbar = () => {
	return (
		<nav style={navStyles}>
			<div style={brandStyles}>ReactTask1</div>
			<div style={linksWrapperStyles}>
				<a href="#" style={linkStyles}>Home</a>
				<a href="#" style={linkStyles}>About</a>
				<a href="#" style={linkStyles}>Contact</a>
			</div>
		</nav>
	);
};

export default Navbar;
