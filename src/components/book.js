import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row, Modal  } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

export default function Book({ item }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>


      <Modal show={show} onHide={handleClose}  >
        <Modal.Header className="d-flex">
          <Modal.Title className="m-auto " ><h2 className="text-center text-capitalize">{item?.title}</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>           
           <Row className="container-fluid d-flex alight-content-center"  >
            <Col className=" mb-1 " >

              <Row>
                <Col>
                  <Form.Label className="p-1 d-flex fw-bolder fs-5 text-uppercase">Author</Form.Label>
                  <Form.Label className="p-1">{item?.author}</Form.Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label className="p-1 d-flex fw-bolder fs-5 text-uppercase">intro</Form.Label>
                  <Form.Label className="p-1">{item?.intro}</Form.Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label className="p-1 d-flex fw-bolder fs-5 text-uppercase">Completed</Form.Label>
                  <Form.Label className="p-1">{item?.completed ? "Completado" : "No terminado "}</Form.Label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label className="p-1 d-flex fw-bolder fs-5 text-uppercase">review</Form.Label>
                  <Form.Label className="p-1">{item?.review}</Form.Label>
                </Col>
              </Row>
            </Col>

            <Col className="pt-4 d-flex" >
              <Container className="bodyimg d-flex  justify-content-center ">
                <Row className="  ">
                  <Col className="">
                  <div className=" d-flex">{item?.cover ? <img src={item.cover} width="200" /> : ""}</div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>

           
           
           </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>Close</Button>
          <Button variant="warning">Save changes</Button>
        </Modal.Footer>
      </Modal>


      <div className="libroconten">
        <div  className="libro mt-1">
          <img src={item.cover} width="200" height='275' />
          <Row className="d-flex m-1" >
            <Button type="button" className="mt-1" variant="light" onClick={handleShow} >
            Visualizar
            </Button>
          </Row>


        </div>
      </div>
    </>

  );
}
