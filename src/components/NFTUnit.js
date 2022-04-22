import { React, Component } from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'



export default class NFTUnit extends Component {

    constructor(props) {
        super(props)

        
        this.state = {
            title: props.title,
            render: props.render,
            desc: props.desc,
            owner: props.owner,
            price: props.price
        }

    }


    render() {
        return (
            <div className="grid-item">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.state.render} />
                    <Card.Body>
                        <Card.Title>{this.state.title}</Card.Title>
                        <Card.Text>
                            {this.state.desc}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Owner: {this.state.owner}</ListGroupItem>
                        <ListGroupItem>{this.state.price} ETH</ListGroupItem>
                        <ListGroupItem>{this.state.price * 3000} USD</ListGroupItem>
                    </ListGroup>
                    <Card.Footer>
                        <Button variant="primary">Purchase</Button>

                    </Card.Footer>
                </Card>
            </div>
        )
    }
}
