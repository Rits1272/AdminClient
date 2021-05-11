import React from 'react';
import NavBar2 from '../utils/NavBar2';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Button from '@material-ui/core/Button';
import { logout } from '../actions/loginAction';
import Link from '@material-ui/core/Link';

const NotAllowed = (props) => {

    const { isAuthenticated, dispatch, role } = props; 

    const logoutUser = (e) => {
        dispatch(logout());
    }
    
    const login = () => {
        return <Redirect to = '/login' />
    }

    return (
        <div style = {{ display : 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <NavBar2/>
            <div style={{textAlign: 'center'}}>
                <h2 style={{marginTop: 100, textAlign: 'center'}}>You do not have permission to view this page</h2>
                <h2 style={{marginTop: 100, textAlign: 'center'}}>{role}</h2>

                {isAuthenticated ? <Button onClick={logoutUser} color="secondary">Logout</Button>
                :
                <Link href='/login'><Button onClick={login} color="secondary">Login</Button></Link>
                
                }
            </div>
        </div>
    )
}

const mapState = state => ({
    isAuthenticated: state.loginReducer.isAuthenticated,
    role: state.loginReducer.role,
})

export default connect(mapState)(NotAllowed);