import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carosello2 from './Carosello2';

export default function ModalTcm(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  console.log("✅ props img modalTcm:", JSON.stringify(props?.img_array, null, 2));



  // const props= titolo_modale, img_url, img_seq, img_array, url
  return (
    <div class="modalTcm">
      <Button variant="primary" onClick={handleShow}>
         <img class="img-fluid img-thumbnail" height={200} style={{ maxHeight: '200px' }} src={`http://127.0.0.1:1337${props.img_url}`} alt="immagine di prova"/>
        {/* {props.img_url} */}
      </Button>

      <Modal show={show} onHide={handleClose } size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{props.titolo_modale}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex justify-content-center'>
            {props.img_array?.length===1?
<img class="img-fluid img-thumbnail" height={800} style={{ maxHeight: '800px' }} src={`http://127.0.0.1:1337${props?.img_array[0]?.attributes?.url}`} alt="immagine di prova"/> 
            :<Carosello2 pageUrl={props.pageUrl} img_seq={props.img_seq} img_array={props.img_array} client:load></Carosello2>
            }
            
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

