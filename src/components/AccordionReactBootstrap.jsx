import { Col, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import ModalTcm from '../components/ModalTcm';



// export default function AccordionReactBootstrap({campo}) { //questo è destructuring
export default function AccordionReactBootstrap(props) {
// export default function AccordionReactBootstrap() {
// console.log("le mie props" + campo);
// console.log("le mie props" + props);
console.log("✅ props accordion:", JSON.stringify(props, null, 2));
// console.log("✅ Campo:", JSON.stringify(campo, null, 2));
// console.log("✅ immagini nuove:", JSON.stringify(campo?.Immagini?.data[0]?.attributes?.url, null, 2));
// console.log("le mie immagini" + campo?.Immagini?.data[0]?.attributes?.url);

    return(
        <Accordion defaultActiveKey="0" >
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    <div className='d-flex justify-content-evenly w-100'>
                        <img class="img-fluid" height={200} width={200} src={`http://127.0.0.1:1337${props?.campo?.Immagini?.data[0]?.attributes?.url}`} alt="immagine di prova"/>
                        <p className='text-uppercase fw-bold align-self-center'>
                            {props?.campo?.Nome_campo}
                        </p>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                     {/* METTERE AL CLICK APRIRE POP UP */}
                     METTERE POP UP AL CLICK
                     {/* <div className='d-flex gap-0 row-gap-3'> */}
                        <Row className='gy-4'>
                        {props?.campo.Immagini.data?.map((immagini,index)=>(
                            <Col md="6" lg="6" className='d-flex justify-content-center'>
                                {/* {props?.campo.Immagini.data?.length} */}
                                <ModalTcm img_url={immagini?.attributes?.url} pageUrl={props?.url} img_seq={index} img_array={props?.campo} client:load></ModalTcm>
                                {/* <ModalTcm img_url={immagini?.attributes?.url} url={props?.myurl} client:load></ModalTcm> */}
                                {/* <ModalTcm img_url={immagini?.attributes?.url} img_array={props?.campo.Immagini.data}client:load></ModalTcm> */}
                            </Col>
                        ))}
                        </Row>
                     {/* </div> */}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )  
}

