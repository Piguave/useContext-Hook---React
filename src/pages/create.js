import { useState } from "react";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";
import { Col, Container, Row, Modal } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import coverK from '../assets/niño.png';
import { useNavigate } from "react-router-dom";
export default function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");
  const home = useNavigate()
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    home('/');
  };
  const handleShow = () => setShow(true);
  const store = useAppContext();


  function handleChange(e) {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "author":
        setAuthor(e.target.value);
        break;
      case "intro":
        setIntro(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(e.target.value);
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };

    store.createItem(newBook);
    handleShow();
    
  }

  function handleOnChangeFile(e) {
    const element = e.target;
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      console.log("RESULT", reader.result);
      setCover(reader.result.toString());
    };
    reader.readAsDataURL(file);
  }

  return (
    <Layout >

      <Modal show={show} onHide={handleClose}  >
        <Modal.Header className="d-flex">
          <Modal.Title className="m-auto " ><h1 className="text-center text-capitalize">Felicidades</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body><h4>Libro Registrado correctamente.</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Container className="bodycreate">
        <form onSubmit={handleSubmit} className="bodyform"  >
          <h1 className="d-flex justify-content-center text-white ">Registra un Libro </h1>
          <Row className="container-fluid d-flex alight-content-center"  >
            <Col xs={0} sm={1} md={2} lg={1} xl={2}></Col>
            <Col className=" mb-1 formu" >
              <Row >
                <Col>
                  <Form.Label className="p-1">Title</Form.Label>
                  <Form.Control className="d-flex" type="text" name="title" onChange={handleChange} value={title} required />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label className="p-1">Author</Form.Label>
                  <Form.Control type="text" name="author" onChange={handleChange} value={author} required />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label className="p-1">Cover</Form.Label>
                  <Form.Control type="file" name="cover" onChange={handleOnChangeFile} required />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label className="p-1">intro</Form.Label>
                  <Form.Control type="text" name="intro" onChange={handleChange} value={intro} required />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label className="p-1">Completed</Form.Label>
                  <Form.Check type="checkbox" name="completed" onChange={handleChange} value={completed} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Label className="p-1">review</Form.Label>
                  <Form.Control type="text" name="review" onChange={handleChange} value={review} required />
                </Col>
              </Row>
            </Col>

            <Col className="d-flex" >
              <Container className="bodyimg d-flex  justify-content-center ">
                <Row className="  ">
                  <Col className="">
                    <div className=" d-flex ">{!!cover ? <img src={cover} width="220" /> : <img src={coverK} classname="" width="150" />}</div>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>

          <Row className="container-fluid ">
            <Col className="p-2 d-flex justify-content-center">
              <Button type="submit" value="Register book">Register book</Button>
            </Col>
          </Row>

        </form>

      </Container>

    </Layout>
  );
}
