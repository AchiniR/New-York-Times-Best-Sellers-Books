import React, { useEffect, useState} from 'react';
import Axios from 'axios';

const DropdownList = () => {
    const [items, setListItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        const fetchItems = async () =>{
          setIsLoading(true)
          const result = await Axios(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=96dQHhBzowRUG9npiwoF70SvpczqKcNx`)
        
          //console.log(result.data)
    
          setListItems(result.data)
          setIsLoading(false)
        }
    
        fetchItems()
      }, [])


    return (
        <div>
            
        </div>
    )
}

export default DropdownList
