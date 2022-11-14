import "./AdminPage.css";
import { Link,} from "react-router-dom";
import { Button, Container, Form, Nav, Navbar, Modal, Table } from "react-bootstrap"
import { useState, useEffect } from "react";
import Footer from "../../Components/Foooter";
import useAdmin from "../../utils/useAdmin";
import swal from 'sweetalert';



function AdminPage() {
//AdminPage
 const {SessionPage} = useAdmin();
 
 SessionPage()
  //useState Modal

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //useState Formulario
  const [form, setForm] = useState({});

  // aqui guardamos lo que viene de los inputs
  function onChangeinputs(e) {
    const { name, value } = e.target
    const changes = { ...form, [name]: value };
    setForm(changes);

  }

  // Guardar formulario en localStorage
  function SaveLocalStorage() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let response = [...users, form]
    localStorage.setItem("users", JSON.stringify(response));
    swal("Buen trabajo!", "El contacto se guardo con exito!", "success");
    
    //cierra modal y actualiza 
    handleClose()
    GetUsers()
  } 
   
 
  //Tabla

  const [users, setusers] = useState([]);

  useEffect(() => {
    GetUsers()
  }, []);

  function GetUsers() {
    let getUsers = JSON.parse(localStorage.getItem("users")) || [];
    setusers(getUsers);
  }

  

  
  
  const mapUsers = users.map((item, i) => (
    <tr key={i}>
      <td>{i + 1}</td>
      <td>{item.email}</td>
      <td>{item.nombre}</td>
      <td>{item.apellido}</td>
      <td>{item.date}</td>
    </tr>
  ));

 
  return (
    <div  className="bodyAdmin">
      <div >
        <Navbar  bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand><h2>Admin</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              > <Link className="homeRef" to="/"><h5>HomePage</h5></Link>
              </Nav>
              <Form className="d-flex">
                <Button variant="btn btn-primary" onClick={handleShow}>Nuevo Contacto</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
          {/* MODAL */}
          
        <Modal  show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Nuevo Contacto</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" onChange={onChangeinputs} type="email" placeholder="Ingrese su email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control name="nombre" onChange={onChangeinputs} type="text" placeholder="Ingrese su nombre" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Apellido</Form.Label>
                <Form.Control name="apellido" onChange={onChangeinputs} type="text" placeholder="Ingrese su apellido" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control name="Contraseña" onChange={onChangeinputs} type="password" />
              </Form.Group>


              <Form.Group className="mb-3">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control name="date" onChange={onChangeinputs} type="date" />
              </Form.Group>

            </Form>


          </Modal.Body>
          <Modal.Footer>
            <Button  className="btn btn-primary w-100" onClick={SaveLocalStorage}>
              Guardar Contacto
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
      <div className="tableBody">
        <Table className="tb-b" striped bordered>
          <thead className="tbody-color">
            <tr className="tbody-color">
              <th>#</th>
              <th>Email</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Fecha de nacimiento</th>
            </tr>
          </thead>
          <tbody className="tbody-color" >

            {mapUsers}

          </tbody>
        </Table>
      </div>
      <div className="FooterAdmin">
        
        <Footer />
        
      </div>
    </div>

  )
}
export default AdminPage;