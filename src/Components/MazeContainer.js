import React, { useEffect, useState } from "react";

const MazeContainer = () => {
  const [speed, setSpeed] = useState(2);
  const [top, setTop] = useState(5);
  const [left, setLeft] = useState(5);

  const handelSliderDefault = (e) => {
    e.preventDefault();
  };

  const handleSlider = (e) => {
    setSpeed(parseInt(e.target.value));
  };
  
  const handelKeypress = (e) => {
    let key = e.keyCode;
    // left key
    // if (key === 37) {
    //   setLeft((prevLeft) => {
    //     let newleft = prevLeft - speed;
    //     if (newleft <= speed) {
    //       return 5;
    //     } else if (newleft > 5) {
    //       return newleft;
    //     }
    //   });
    // } else if (key === 38) {
    //   // Top key
    //   setTop((prevTop) => {
    //     const newTop = prevTop - speed;
    //     if (newTop <= speed) {
    //       return 5;
    //     } else if (newTop > 5) {
    //       return newTop;
    //     }
    //   });
    // } else if (key === 39) {
    //   // Right key
    //   setLeft((prevLeft) => {
    //     const newLeft = prevLeft + speed;
    //     const distanceRight = 450 - newLeft;
    //     if (speed >= distanceRight) {
    //       return 445;
    //     } else if (newLeft < 450) {
    //       return newLeft;
    //     }
    //   });
    // } else if (key === 40) {
    //   // Down Arrow
    //   setTop((prevTop) => {
    //     const newTop = prevTop + speed;
    //     const distanceDown = 450 - newTop;
    //     if (distanceDown <= speed) {
    //       return 445;
    //     } else if (newTop < 445) {
    //       return newTop;
    //     }
    //   });
    // }
    if (key === 37) {
        // Left Arrow
        setLeft((left) => Math.max(left - speed, 5));
      } else if (key === 38) {
        // Top Arrow
        setTop((top) => Math.max(top - speed, 5));
      } else if (key === 39) {
        // Right Arrow
        setLeft((left) => Math.min(left + speed, 445));
      } else if (key === 40) {
        // Down Arrow
        setTop((top) => Math.min(top + speed, 445));
      }
  };


  useEffect(() => {
    document.addEventListener("keydown", handelKeypress);
    return () => {
      document.addEventListener("keydown", handelKeypress);
    };
  }, [speed, top, left]);



  const mazeStyle = {
    width: '500px',
    height: '500px',
    margin: '1px auto',
    background: 'rgb(25,25,25)',
    border: '15px solid #f6ea8c',
    borderRadius: '10px',
  };

  const avatarStyle = {
    position: 'relative',
    left: `${left}px`,
    top: `${top}px`,
    width: '50px',
    height: '50px',
    transition: 'left 0.2s, top 0.2s',
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ color: "#f26d5b",margin:"5px 0px"}}>Control Movement Speed</h2>
        <input
          type="range"
          min="1"
          max="50"
          alt="err"
          style={{cursor:"pointer"}}
          onKeyDown={handelSliderDefault}
          value={speed}
          onChange={handleSlider}
        />
      </div>
      <div style={mazeStyle}>
        <img
          src="https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png"
          alt="err1"
          style={avatarStyle}
        />
      </div>
    </div>
  );
};

export default MazeContainer;
