import React from 'react';
import {Link} from "react-router-dom";

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import './listItem.css';

import { Route } from 'react-router-dom'


const ListItem = (props) => {
    const {
        person,
        handleDelete,
    } = props;

    const navigate = (history, id) => () => history.push(`/${id}`)

    return (
        <Route render={({history}) => (
            
            <React.Fragment>
                <TableRow>
                    <TableCell>
                        <Tooltip title="Show more" placement="right">
                            <span onClick={navigate(history, person._id)}>{person.name}</span>
                        </Tooltip>
                    </TableCell>
                    <TableCell>{person.surname}</TableCell>
                    <TableCell>{person.phone}</TableCell>
                    <TableCell>
                        
                        <DeleteOutlinedIcon className="delete-icon" onClick={handleDelete(person._id)}/>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        )} />
        )
}

export default ListItem;
