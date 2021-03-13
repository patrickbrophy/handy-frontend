import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App h-screen w-screen bg-gray-800">
      <div id='header' className='h-1/5 underlined'>
        <div className='ml-6 w-1/5 underlined'>
          <span className="text-9xl float-left">👐</span>
          <h1 className='text-8xl pt-14 font-header'>Handy</h1>
        </div>
      </div>

      <div>
        <h2 className='text-center my-6 text-5xl'>Who are you?</h2>

        <div className='grid grid-cols-2 content-evenly place-items-center text-center'>
          <div className='landing-card'>
            <h2 className='text-3xl'>
              Project Manager
            </h2>
            <p className='w-2/3 text-lg'>
              Do you need help on your open source projects, but they can't seem to gain any traction?
              Upload your projects and issues to our platform, and we'll automatically
              send bright coders your way!
            </p>
            <button className='button'>
              Start Now!
            </button>
          </div>

          <div className='landing-card'>
            <h2 className='text-3xl'>
              Open Source Contributor
            </h2>
            <p className='w-2/3 text-lg'>
              Do you want to contribute to open source software, but don't know
              where to start? Don't know where you can help? Don't worry! Our system
              will match you with the issues you're equipped to deal with.
            </p>
            <button className='button'>
              Start Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
