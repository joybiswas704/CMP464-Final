import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardItem({ id, name, img, price, des, handleBuy }) {
     return (
          <Card style={{ width: '18rem' }}>
               <Card.Img variant='top' src={img} />
               <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{des}</Card.Text>
                    <Card.Title>${price}</Card.Title>
                    <Button variant='primary' onClick={() => handleBuy(id)}>
                         Buy
                    </Button>
               </Card.Body>
          </Card>
     );
}

export default CardItem;
