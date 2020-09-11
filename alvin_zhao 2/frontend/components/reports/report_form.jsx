import React from 'react';

/*
Export a `ReportForm` presentational component that creates a form to either
create or edit a report (it will be used by two separate containers). The form
should indicate whether it is a create or edit form based on the `formType`
prop. The form should initialize state to the `report` passed in from props. Use
controlled inputs and trigger the `action` passed in from the container upon
submission. Use a text input for the understanding field and a textarea for the
improvement field.
*/

class ReportForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.report
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput = (field)=>(
        e=>this.setState({[field]:e.target.value})
    )
    
    handleSubmit =()=>{
        this.props.action(this.state)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit()}>
                <h1>{this.props.formType}</h1>
                <label> understanding:
                    <input 
                        type="text"
                        value = {this.state.understanding}
                        onChange = {this.handleInput('understanding')}
                    />
                </label>
                <label> improvement:
                    <textarea
                        value = {this.state.improvement}
                        onChange = {this.handleInput('improvement')}
                    />
                </label>
                <input type="submit" value = {this.props.formType}/>
            </form>
        )
    }
}

export default ReportForm