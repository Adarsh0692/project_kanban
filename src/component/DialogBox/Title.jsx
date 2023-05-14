import React, { useState } from 'react';
import { MdSubtitles } from 'react-icons/md';
import style from "./Title.module.css"

const Title = ({title}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [headingText, setHeadingText] = useState(title);

  const handleHeadingClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setHeadingText(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.iconH2}>
      <div><MdSubtitles className={style.icon}/></div>
      <div>

     
      {isEditing ? (
        <input
          type="text"
          value={headingText}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        <h3 onClick={handleHeadingClick}>{headingText}</h3>
      )}
       </div>
      </div>
      <div className={style.p}>
      <p>In list</p>
      </div>
    </div>
  );
};

export default Title; 