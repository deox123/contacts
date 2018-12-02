import React from 'react';
import {Link} from "react-router-dom";


const ListItem = (props) => {
    const {
        person,
    } = props
    return (    
            <Link to={`/${person._id}`} >{person.name}</Link>
        )
}

export default ListItem;
