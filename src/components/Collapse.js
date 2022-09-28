import React, {useState} from 'react'

const Collapse = ({ initialOpened, title, text }) => {
  const [isOpened, setIsOpened] = useState(initialOpened);

  return (
    <div className='collapse'>
      <div className='collapse-header'>
        <h3>{title}</h3>
        <img src={isOpened ? "/assets/arrow-down.png" : "/assets/arrow-up.png"} onClick={() => setIsOpened(!isOpened)} alt={title} />
      </div>
      {isOpened && <div className='collapse-text'><p>{text}</p></div>}
    </div>
  )
}

export default Collapse