import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



export default function Carosello2(props) {
console.log("✅ props carosello2: ", JSON.stringify(props, null, 2));

// const [index, setIndex] = useState(props?.img_seq!=undefined ? props?.img_seq:"");
const [index, setIndex] = useState((props?.img_seq ?? 1)-1);





const handleSelect = (selectedIndex) => {
  setIndex(selectedIndex);
};
return (
  
  <>
  {/* {props?.img_url}
  <br />
  {props?.img_seq}
  <br />
  {JSON.stringify(props?.img_array)} 
  {JSON.stringify(props?.url)}  */}

  {/* <p>img_seq: {props.img_seq}</p> */}
{/* <p>{props.url[0]}</p> */}
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {props?.img_array.map((img)=>(
        <Carousel.Item>
          <div className='d-flex justify-content-center'>
               {props.pageUrl == "photogallery" ?
               <img class="img-fluid img-thumbnail" height={800} style={{ maxHeight: '800px' }} src={`http://127.0.0.1:1337${img?.Immagine?.data?.attributes?.url}`} alt="immagine di prova"/> 
               :"no photogallery"}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>


    </>
  );
}