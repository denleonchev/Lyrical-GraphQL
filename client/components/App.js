import React from 'react';

const App = ({ children }) => {
  return (
      <div className="container">
        <h1>Lyrics App</h1>
        {children}
      </div>
  )
}

export default App