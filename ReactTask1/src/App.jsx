import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

const appStyles = {
	minHeight: '100vh',
	margin: 0,
	background: 'linear-gradient(120deg, #f7f7f7, #eaf4ff)',
	color: '#1f2937',
	fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
};

const App = () => {
	return (
		<div style={appStyles}>
			<Navbar />
			<Main />
			<Footer />
		</div>
	);
};

export default App;
