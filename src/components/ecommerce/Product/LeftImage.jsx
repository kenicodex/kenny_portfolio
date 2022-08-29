import React, { useState, useRef } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import Skeleton from '@mui/material/Skeleton';
function LeftImage(props) {
  const currentPic = useRef()
  const buffer = "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
  const objectToarray = (object) => {
    const arr = []
    for (const key in object) {
      if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        arr.push(element)
      }
    }
    return arr
  }
  const [counter, setCounter] = useState(0)

  return (
    <div className="sneakers-div">
      <div className="sneakers-col sneakers-col1">
        <ArrowBackIosIcon onClick={() => {
          setCounter(counter - 1)
          if (counter < 1) {
            setCounter(4)
          }
          currentPic.current.src = objectToarray(props.images)[counter]
        }}
          className="text-dark bg-dark mobile-prev " sx={{ display: { xs: "block", md: "none" }, width: "13", height: "18" }} />
        <img src={props.thumbnail ? props.thumbnail : buffer} id={'currentPic'} ref={currentPic} alt={'error'} className="big-sneaker" style={{maxHeight:"400px"}} /> 
        {/* {objectToarray(props.images)[counter]} */}
        {/* <Skeleton variant="rectangular" width={"100%"} height={300} /> */}
        <ArrowForwardIosIcon onClick={() => {
          if (counter > objectToarray(props.images).length -1) {
            setCounter(1)
          }else {setCounter(counter + 1)}
          
          currentPic.current.src = objectToarray(props.images)[counter]
        }}
          className="text-dark bg-dark mobile-next " sx={{ display: { xs: "block", md: "none" }, width: "13", height: "18" }} />
      </div>
      <div className="sneakers-col sneakers-col2 border p-4 rounded" style={{height:"115px !important"}}>
        {objectToarray(props.images).map((x, i) => {
          return (<div className={`small-sneaker-div `} style={{maxHeight:"105px !important"}}>
            <img alt="img" className={`small-sneaker `} src={x ? x : buffer} key={i}
              onClick={() => {
                currentPic.current.src = x
              }} />
          </div>)
        })}
      </div>
    </div>
  );
};

export default LeftImage;
