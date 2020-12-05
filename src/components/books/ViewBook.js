import React from 'react';
import {Col, Row, Label, Container, Button} from 'reactstrap';

const ViewBook = ({item}) => {
    return (
        <div className='post'>
            <Container>
            <Row>
                <Col  xs='5'>
                    <Label className='name' style={{fontSize: "35px"}}><b>{item.title}</b></Label><br/>
                    <Label className='author'>by {item.author}</Label><br/><br/>
                    <img src={item.book_image} alt='book'  className="postImage"/><br/><br/>
                    {item.weeks_on_list}
                    <Label> WEEKS ON THE LIST</Label><br/><br/>
                    <Label><b>ISBN:&nbsp;</b>{item.primary_isbn10}&nbsp;|&nbsp;{item.primary_isbn13}</Label><br /><br/>
                    <Label><b>Description: </b></Label>
                    {item.description}<br/><br/>
                    <Label><b>Publisher: </b></Label>
                    {item.publisher}<br/><br/>
                    <Label><b>Contributor: </b></Label>
                    {item.contributor}<br/><br/>
                    <Label><b>Rank: </b></Label>
                    {item.rank}<br/><br/>
                    <a href={item.amazon_product_url}><Button style={{height:"40px", width: "120px", color: "white", backgroundColor:"#0a0432"}}>Buy</Button></a>
                </Col>
                
            </Row>
            </Container>
        </div>
    )
}

export default ViewBook
