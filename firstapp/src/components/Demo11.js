import React from 'react';
import '../components/CSS/Demo.css';


const imgobj = [
  {
    id:1,
    imgName:'images1',
    imgpath:'images.jpg'
  },
  {
    id:1,
    imgName:'images2',
    imgpath:'akshay5.png'
  }
]

function Akshay(props) {
  return (
    <div>
        <h1>Akshay</h1>
        <h1>Vivek</h1>
        <h3>My Name is {props.Name}</h3>
        {
          imgobj.map((item,index)=>(
              <img key={index} className='img' src={item.imgpath} alt={item.imgName}/>
          ))
        }
    </div>
  );
}

export default Akshay;
