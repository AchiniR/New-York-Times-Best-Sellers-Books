import React from 'react';
import {Col, Row, Label, Container, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

const ViewBook = ({item}) => {
    return (
        <div className='post'>
            <Container>
            <Row>
                <Col  xs='5'>
                    <Label className='name'>{item.title}</Label><br/>
                    <Label className='author'>by {item.author}</Label><br/><br/>
                    <img src={item.book_image} alt='book'  className="postImage"/><br/><br/>
                    <Label>ISBN&nbsp;<b>{item.primary_isbn10}&nbsp;|&nbsp;{item.primary_isbn13}</b></Label><br /><br/>
                    <Label><b>Description: </b></Label>
                    {item.description}<br/><br/>
                    <Label><b>Publisher: </b></Label>
                    {item.publisher}<br/><br/>
                    <Label><b>Contributor: </b></Label>
                    {item.contributor}<br/><br/>
                    <Label><b>Rank: </b></Label>
                    {item.rank}<br/><br/>
                    <Button style={{height:"40px", width: "120px", color: "white", backgroundColor:"#0a0432"}}><Link to={item.amazon_product_url}></Link>Buy</Button>
                </Col>
                
            </Row>
            </Container>
        </div>
    )
}

export default ViewBook
