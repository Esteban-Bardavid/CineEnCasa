import "./Header.css";
import { Button, Container, Nav, Navbar, Pagination, Card } from "react-bootstrap"
import { Link } from "react-router-dom";
import CardComponent from "../Components/cards/CardComponent"
import useHome from "../../src/utils/useHome";

function Header() {

  const { OnChangeInput, SearchMovie, movie, setpage, disabled } = useHome();

  const MapMovie = movie.map((item, i) => (<CardComponent image={item.Poster} key={i} title={item.Title} description={item.Year} />))

  return (
    <div>

      <div >
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand><h2>CineEnCasa.com</h2></Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/Admin" className="adminRef"><h5>Admin</h5></Link>
            </Nav>
          </Container>
          <Container>

            {/* formulario busqueda */}

            <div className="pt-10">
              <div className="inputSearch">
                <input type="text"
                  className="form-control"
                  onChange={OnChangeInput}
                  placeholder="Busque su pelicula"
                />
                <Button
                  disabled={disabled}
                  className="btn btn-primary"
                  onClick={SearchMovie} >
                  Search
                </Button>
              </div>
            </div >
          </Container>
        </Navbar>
      </div>

      <div>
        <Card className="bg-dark text-white m-1">
          <Card.Img src="https://img.ecartelera.com/sagas/000/30.jpg" alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className="haPo"><h2> Harry Potter </h2></Card.Title>
            <Card.Text>

            </Card.Text>
            <Card.Text></Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>


      <div className=" mt-5 d-flex justify-content-evenly flex-wrap">
        {MapMovie}
      </div>
      <div className="w-100 d-flex justify-content-center ">
        <div className="mt-3">
          <Pagination>
            <Pagination.Item onClick={() => setpage(1)}>{1}</Pagination.Item>
            <Pagination.Item onClick={() => setpage(2)}>{2}</Pagination.Item>
            <Pagination.Item onClick={() => setpage(3)}>{3}</Pagination.Item>
            <Pagination.Item onClick={() => setpage(4)}>{4}</Pagination.Item>
            <Pagination.Item onClick={() => setpage(5)}>{5}</Pagination.Item>
          </Pagination>
        </div>
      </div>

    </div>

  )
}
export default Header;