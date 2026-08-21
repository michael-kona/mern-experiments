
function App() {
    return (
    <div style={{ fontFamily: 'sans-serif', margin: '40px' }}>
      <h1>Welcome to React</h1>
      <p>This is standard HTML elements rendered through React JSX.</p>
      
      <ul>
        <li>HTML Structure</li>
        <li>CSS Styles</li>
        <li>JavaScript Logic</li>
      </ul>

      <button onClick={() => alert('Clicked!')}>
        Click Me
      </button>
    </div>
  );
  }
export default App
