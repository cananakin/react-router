import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Course from '../Course/Course'

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseSelectedHandler = (id) => {
        const courseKey = this.state.courses.find(course => course.id.toString() === id.toString())
        const title = courseKey.title;
        this.props.history.push( '/courses/' + id + '?title=' + title )
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (
                                <article 
                                    key={course.id}
                                    className="Course"
                                    onClick={() => this.courseSelectedHandler(course.id)} >
                                        {course.title}
                                </article>
                            );
                        } )
                    }
                </section>
                <Route path={this.props.match.url + '/:id' } exact component={Course} />
            </div>
        );
    }
}

export default Courses;