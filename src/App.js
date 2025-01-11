import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Personal Website</h1>
      </header>
      
      <main className="App-main">
        <TodoList />
        
        <section className="blank-section">
          <h2>Blank Website</h2>
          <div className="content-placeholder">
            Future content will be added here
          </div>
        </section>
      </main>
      
      <footer className="App-footer">
        <p>Pranjal created this app using Claude AI.</p>
      </footer>
    </div>
  );
}

export default App;