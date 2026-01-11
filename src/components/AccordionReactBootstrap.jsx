import { Col, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import ModalTcm from '../components/ModalTcm';



// export default function AccordionReactBootstrap({campo}) { //questo è destructuring
export default function AccordionReactBootstrap(props) {
// export default function AccordionReactBootstrap() {
// console.log("le mie props" + campo);
console.log("✅ props img_array accordion:", JSON.stringify(props, null, 2));
console.log("✅ props pageurl accordion:", JSON.stringify(props.pageUrl, null, 2));
// console.log("le mie props" + props);
// console.log("✅ Campo:", JSON.stringify(campo, null, 2));
// console.log("✅ immagini nuove:", JSON.stringify(campo?.Immagini?.data[0]?.attributes?.url, null, 2));
// console.log("le mie immagini" + campo?.Immagini?.data[0]?.attributes?.url);

    return(
        <Accordion defaultActiveKey="0" >
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    <div className='d-flex justify-content-evenly w-100'>

                        {/* <p>{`http://127.0.0.1:1337${props?.img_array[0]?.attributes?.url}`}</p> */}
                        <img class="img-fluid" height={200} width={200} src={`http://127.0.0.1:1337${props?.img_array[0]?.attributes?.url}`} alt="immagine di prova"/>
                        <p className='text-uppercase fw-bold align-self-center'>
                            {props?.nome_campo}
                        </p>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                     METTERE POP UP AL CLICK
                        <Row className='gy-4'>
                        {props?.img_array?.map((immagini,index)=>(
                            <Col md="6" lg="6" className='d-flex justify-content-center'>
                                {/* {props?.campo.Immagini.data?.length} */}
                                <p>{props?.url}</p>
                                <ModalTcm img_url={immagini?.attributes?.url} pageUrl={props?.pageUrl} img_seq={props?.img_seq} img_array={props?.img_array} client:load></ModalTcm>
                            </Col>
                        ))}
                        {/* {props?.campo.Immagini.data?.map((immagini,index)=>(
                            <Col md="6" lg="6" className='d-flex justify-content-center'>
                                <ModalTcm img_url={immagini?.attributes?.url} pageUrl={props?.url} img_seq={index} img_array={props?.campo?.immagini?.data} client:load></ModalTcm>
                            </Col>
                        ))} */}
                        </Row>
                     {/* </div> */}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )  
}

