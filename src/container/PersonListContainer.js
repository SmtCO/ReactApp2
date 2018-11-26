import React from 'react';
import PersonList from '../component/PersonList';
import axios from 'axios';

export default class PersonListContainer extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            people: []
        }
    }

    getPersonList = () => {
        axios.get('http://my-json-server.typicode.com/burakburuk/javascript-test/person').then((response) => {
            this.setState({
                people: response.data
            })
        });

    }

    componentWillMount() {
        this.getPersonList();
    }

    render() {
        return (
            <PersonList people={this.state.people}></PersonList>
        )
    }
}