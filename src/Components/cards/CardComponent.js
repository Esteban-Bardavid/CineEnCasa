import "./CardComponent.css";
import Card from 'react-bootstrap/Card';


function CardComponent(props) {
    return (
        <div>
            <div  className="cartas">
                <Card className="m-5" style={{ width: '15rem' }}>
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body className="cartas-body">
                        <Card.Title className="id">{props.title}</Card.Title>
                        <Card.Text className="id">{props.description}</Card.Text>
                        <Card.Text className="id">{props.id}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default CardComponent;