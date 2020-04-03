import React, { Component } from 'react';
import queryString from 'query-string';

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: ''
        }
    }

    componentDidMount () {
        this.setTitle();
    }

    componentDidUpdate () {
        if(this.state.id !== this.props.match.params.id)
            this.setTitle();
    }

    setTitle () {
        const title = queryString.parse(this.props.location.search).title;
        this.setState({title: title, id: this.props.match.params.id})
    }

    render () {
        const { id, title } = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: {id}</p>
            </div>
        );
    }
}

export default Course;