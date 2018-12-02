// @flow

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ListItem from '../../components/ListItem';

// import type {
//     Props,
//     State,
// } from './types';


export class Home extends Component<Props, State> {
    constructor() {
        super();
        this.state = {

        };

    }

    componentDidMount() {
    }

    render() {
        return (
            <div> 
                <div>Details</div>
                <ul>
                    {this.props.listOfContacts.map(person => <ListItem key={person._id} person={person}/>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({
    HomeRoute: {
        currentContact,
    },
}) => ({
    currentContact,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        // getPersons,
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);