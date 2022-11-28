import {Card,Button} from 'react-bootstrap';
export default function FCRecipe(props) {

  return (
    <Card style={{width:'18rem', padding: 5, display:'inline-block'}}>
      <Card.Img style={{height:'15rem'}} variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text style={{height:'4rem'}} >{props.description}</Card.Text>
        <Button onClick={()=>props.sendIdToDelete(props.id)} as="a" variant={props.styleBtn}>{props.btnValue}</Button>
      </Card.Body>
    </Card>
  );
}


  
