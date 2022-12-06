import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";
import Modal from 'react-bootstrap/Modal';
export default function View() {
  const [item, setItem] = useState({});
  const params = useParams();
  const store = useAppContext();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  return (
    <Layout>
      
      <h2>{item?.title}</h2>
      <div>{item?.cover ? <img src={item.cover} width="200" /> : ""}</div>
      <div>{item?.author}</div>
      <div>{item?.intro}</div>
      <div>{item?.completed ? "Completado" : "No terminado"}</div>
      <div>{item?.review}</div>
    </Layout>
  );
}
