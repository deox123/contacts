// @flow

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


import './styles.css';


import {Link} from "react-router-dom";


import ListItem from '../../components/ListItem';

import type {
    Props,
    State,
} from './types';

import {
    getPersons,
} from './actions';

export class Home extends Component<Props, State> {
    constructor() {
        super();
        this.state = {

        };

    }

    // clickHandler = (person) => () => {
    //     console.log(person)        
    // }

    componentDidMount() {
        this.props.actions.getPersons();
    }

    handleDelete = (id: number) => () => {
        console.log(id)
    }

    navigateToDetail = (id: number) => () => {
        console.log(id);        
    }

    render() {
        return (
            <Paper className="container">
                <h1>Contacts</h1>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Surname</TableCell>
                            {/* <TableCell>Created date</TableCell>
                            <TableCell>City</TableCell>
                            <TableCell>Address</TableCell> */}
                            <TableCell>phone</TableCell>  
                            <TableCell></TableCell>
                        </TableRow>                    
                    </TableHead>
                    <TableBody>
                        {this.props.listOfContacts.map(person => <ListItem key={person._id} person={person} handleShowMore={this.navigateToDetail} handleDelete={this.handleDelete} />)}
                    </TableBody>
                </Table>
                <Link to="/new">
                <Fab color="primary" aria-label="Add" className="fab">
                    <AddIcon />
                </Fab>
                </Link>
            </Paper>
        );
    }
}

const mapStateToProps = ({
    HomeRoute: {
        listOfContacts,
        loading,
    },
}) => ({
    listOfContacts,
    loading,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        getPersons,
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);