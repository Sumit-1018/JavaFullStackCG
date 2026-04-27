const sectionStyles = {
  maxWidth: '900px',
  margin: '30px auto',
  padding: '24px',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
};

const headingStyles = {
  margin: '0 0 12px 0',
  fontSize: '30px',
  color: '#0f172a'
};

const paragraphStyles = {
  margin: '0 0 18px 0',
  lineHeight: 1.6,
  fontSize: '16px'
};

const cardListStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '14px'
};

const cardStyles = {
  padding: '14px',
  border: '1px solid #dbeafe',
  borderRadius: '10px',
  backgroundColor: '#f8fbff'
};

const Main = () => {
  return (
    <main style={sectionStyles}>
      <h1 style={headingStyles}>Welcome to Today&apos;s React Task</h1>
      <p style={paragraphStyles}>
        This section displays static information using a dedicated Main component.
        Everything in this app is styled with inline CSS.
      </p>

      <div style={cardListStyles}>
        <div style={cardStyles}>
          <h3>Topic</h3>
          <p>React Components</p>
        </div>
        <div style={cardStyles}>
          <h3>Focus</h3>
          <p>Component Structure and Reusability</p>
        </div>
        <div style={cardStyles}>
          <h3>Styling Method</h3>
          <p>Inline CSS in JSX</p>
        </div>
      </div>
    </main>
  );
};

export default Main;import {createRoot} from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')).render(
<App />
);