import React from 'react'
import Typed from 'react-typed';

function TypeWriter() {
  return (
    <div>
      <Typed
        strings={['Hello world!', 'Welcome to react-typed.', 'Customize your typing effect.']}
        typeSpeed={60}
        backSpeed={40}
        startDelay={500}
        backDelay={1500}
        fadeOut={true}
        loop={true}
        showCursor={true}
        cursorChar={'_'}
        onComplete={() => console.log('Typing complete')}
      />
    </div>
  )
}

export default TypeWriter