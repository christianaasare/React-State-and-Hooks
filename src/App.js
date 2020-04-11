import React, {useState, useEffect } from 'react';
import './App.css';
import StateAndEffect from './StateAndEffect';

function App (){
  const [language, setLanguage] = useState('JavaScript');
  const [library, setLibrary] = useState('React')

  useEffect(() => {
    //Update the document title using the browser API
    document.title = `${language} is super fun with ${library}`
  })
  return (
    <div style={{
      position: 'absolute', left: '35%', top: '35%',

  }}>
    <section>
    <h1>Favorite Language and Library</h1>
      <label>Programming Language: </label>
        <input
        type="text"
        id="language"
        value={language}
        onChange={(event)=>setLanguage(event.target.value)}
        />
        <p>Hello World! {language} is the best.</p>
    </section>
    
    <section>
      <label>Library:</label>
      <input
      type="text"
      name="library"
      id="library"
      value={library}
      onChange={(event)=>setLibrary(event.target.value)}
      />
    </section>
    </div>
  );
}

export default App;
