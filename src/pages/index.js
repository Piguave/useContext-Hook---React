import { Link } from "react-router-dom";
import Book from "../components/book";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";
import { Col, Container, Row } from "react-bootstrap";
import Noresult from "../assets/no_hay_resultados.png"

export default function Index() {
  const store = useAppContext();

  const booksContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    margin: "auto"
  };

  return (
    <>
      
        <Layout>
        <Container className="bg-withe">
        <div  className="d-flex justify-content-center text-white">
          <h1>Repositorio de Libros</h1> 
        </div>
        <div className="d-flex justify-content-center text-white mb-2 " >  
          <h2>Un lector vive mil vidas antes de morir. El hombre que nunca lee vive solo una.</h2>
        </div >
          <div style={booksContainer}  className="d-flex justify-content-center text-white">
            {!!store.items.length ?  store.items.map((item) => ( <Book key={item.id} item={item} />)) : 
            <h2 className="mt-5">No hay libros aún... :(</h2>
              }
           
          </div>
          </Container>
        </Layout>
      

    </>

  );
}
