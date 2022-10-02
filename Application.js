import React,{useState} from 'react'
import{Container,Card,Button,Row,Col,Form} from "react-bootstrap"

function Application() {
    const[count,setCount]=useState(0);
    const increment = ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }
    const reset = ()=>{
        setCount(0)
    }
    const handleChange =(e)=>{
        setCount(Number(e.target.value));
    }
    let colorName=(count>3 && count<=5) ? 'green' : (count>5 ? 'red' : 'black') ;
    if (count>5){alert("Count value is greater than 5")};
    const styleComponent={
        color:`${colorName}`
      }
  return (
    <Container className='mt-3'>
        <Row>
            <Col lg={{span:6,offset:3}}>
                <Card className='shadow-lg'>
                    <Card.Header style={{backgroundColor:"burlywood", }} ><h2>Counter</h2></Card.Header>
                  <Card.Body>
                     <Form>
                        <Form.Group className="m-3">
                            <Form.Control className="fs-4 text-center" type="text" placeholder="0" name="count" value={count} style={styleComponent} onChange={handleChange}/>
                        </Form.Group>
                     </Form>
                     <Button  variant="success" className="m-1" onClick={increment}>Increment</Button>
                    <Button variant="success" className="m-1" onClick={decrement}>Decrement</Button>
                    <Button variant="success" className="m-1" onClick={reset}>Reset</Button>
                  </Card.Body>
                  
                </Card>
            </Col>
        </Row>
       
    </Container>
  )
}

export default Application