import {connect} from 'react-redux'
import { createNewUser} from '../../actions/session'
import SignupForm from './signup'

const mDTP = dispatch =>({
    createNewUser: formuser=>dispatch(createNewUser(formuser))
})

export default connect(null,mDTP)(SignupForm)