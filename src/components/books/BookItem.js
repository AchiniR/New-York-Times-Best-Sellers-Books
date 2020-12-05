import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Tooltip } from 'reactstrap';

const BookItem = ({ item }) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);
    return (
        <div>
            <h3 className="cardheader">{item.list_name}</h3>
            <div className='card'>
                <div>
                <span href="#" id="TooltipExample">
                    <div className='card-front'>
                        <Link to={{pathname:`/booklist/${item.list_id}`}}><img src={item.list_image} alt='' /><br/></Link>
                    </div>
                    </span>
                </div>
            </div>
            
            <Tooltip placement="bottom" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>Click for view books</Tooltip>
            <hr/>
        </div>
    )
}

export default BookItem
