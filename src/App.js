import React from 'react';
import FormSimulasi from './FormSimulasi';
import './App.css';

function App() {
  const handleFormSubmit = (data) => {
    console.log('Data form:', data);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f4f6fb', padding: '32px 0' }}>
      <FormSimulasi onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
