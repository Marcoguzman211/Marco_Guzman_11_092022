import React, { useState } from 'react';

const Collapse = ({ initialOpened, title, text }) => {
  const [isOpened, setIsOpened] = useState(initialOpened);

  return (
    <div className='collapse'>
      <div className='collapse-header' onClick={() => setIsOpened(!isOpened)}>
        <h3>{title}</h3>
        <img src={isOpened ? '/assets/arrow-down.png' : '/assets/arrow-up.png'} alt={title} />
      </div>
      {isOpened && <div className='collapse-text'>
        {typeof text === 'string' ? <p>{text}</p> : text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>}
    </div>
  );
};

export default Collapse;
