import React, { Component } from 'react';
import MultiForm from './MultiForm';
import CalendarForm from './calendar/CalendarForm';
// import TimeRelatedForm from './MultiForm';
class FormChecker extends Component {
    state = {}
    render() {
        // return (<MultiForm />);
        return (<CalendarForm />)
    }
}

export default FormChecker;