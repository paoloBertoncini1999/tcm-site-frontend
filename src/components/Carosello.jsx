import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


export default function Carosello(props) {
console.log("✅ props carosello: ", JSON.stringify(props, null, 2));

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
          {/* <p>sonon in map img_array in carosello </p> */}
          <div className='d-flex justify-content-center'>
            {/* {console.log("✅ props carosello dentro al ciclo: ", JSON.stringify(img, null, 2))} */}
            {/* <img class="img-fluid img-thumbnail" height={800} style={{ maxHeight: '800px' }} src={`http://127.0.0.1:1337${img}`} alt="immagine di prova"/> : */}
            {console.log("✅ props pageUrl dentro al ciclo: ", JSON.stringify(pageUrl, null, 2))}
            {/* <img class="img-fluid img-thumbnail" height={800} style={{ maxHeight: '800px' }} src={`http://127.0.0.1:1337${img?.Immagine?.data?.attributes?.url}`} alt="immagine di prova"/> : */}
            {props.pageUrl[0] == "photogallery" ?
              <img class="img-fluid img-thumbnail" height={800} style={{ maxHeight: '800px' }} src={`http://127.0.0.1:1337${img?.Immagine?.data?.attributes?.url}`} alt="immagine di prova"/> 
              // <p>sono in photogallery condizione verificata</p>
              : props?.pageUrl == "campi"?
              <>
              {/* <p> sono in map img_array carosello in url == campi </p> */}
              {/* <p>{`http://127.0.0.1:1337${img?.Immagini?.data[0]?.attributes?.url}`}</p> */}
              {/* <p>{props?.img_seq}</p> */}
              <br />
              {img?.Immagini?.data?.map((img_campo, index)=>
              <p>{`http://127.0.0.1:1337${img_campo?.attributes?.url}`}</p>
              // <img class="img-fluid img-thumbnail" height={800} style={{ maxHeight: '800px' }} src={`http://127.0.0.1:1337${img_campo?.attributes?.url}`} alt="immagine di prova"/> 
              )}
              </>:
              <img class="img-fluid img-thumbnail" height={800} style={{ maxHeight: '800px' }} src={img} alt="immagine di prova"/>
            }
          </div>
        </Carousel.Item>
      ))}
    </Carousel>


    </>
  );
}