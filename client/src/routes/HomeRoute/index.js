// @flow

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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

    render() {
        return (
            <div> 
                <div>Contacts</div>
                <ul>
                    {this.props.listOfContacts.map(person => <ListItem key={person._id} person={person}/>)}
                </ul>
            </div>
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