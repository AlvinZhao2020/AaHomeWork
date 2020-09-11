import React from 'react'

class SignupForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username: '',
            password: '',
            email: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(){
        this.props.createNewUser(this.state)
    }   

    handleInput(field){
        return(e=> this.setState({[field] : e.target.value}))
    }

    render(){
        return(
            <form onSubmit ={this.handleSubmit()}>
                <div>name:
                    <input
                        type='text'
                        value={this.state.username}
                        onChange={this.handleInput('username')}
                    />
                </div>
                <div>password:
                    <input
                        type='text'
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                    />
                </div>
                <div>email:
                    <input
                        type='text'
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                    />
                </div>
                <input type="submit"/>
            </form>
        )
    }
}

export default SignupForm