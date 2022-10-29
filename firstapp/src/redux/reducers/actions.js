import * as types from './actionTypes'
import { auth } from '../../services/firebase'

const registerStart = () => (
    {
        type: types.REGISTER_START
    }
)

const registerSuccess = (userName) => (
    {
        type: types.REGISTER_SUCCESS,
        payload: userName
    }
)

const registerError = (error) => (
    {
        type: types.REGISTER_ERROR,
        payload: error
    }
)

const loginStart = () => (
    {
        type: types.LOGIN_START
    }
)

const loginSuccess = (userName) => (
    {
        type: types.LOGIN_SUCCESS,
        payload: userName
    }
)

const loginError = (error) => (
    {
        type: types.LOGIN_ERROR,
        payload: error
    }
)

const logoutStart = () => (
    {
        type: types.LOGOUT_START
    }
)

const logoutSuccess = () => (
    {
        type: types.LOGOUT_SUCCESS,
    }
)

const logoutError = (error) => (
    {
        type: types.LOGOUT_ERROR,
        payload: error
    }
)


export const registerInitiate = (userEmail, userPswd, userName) => {
    return (dispatch) => {
        dispatch(registerStart())
        auth
            .createUserWithEmailAndPassword(userEmail, userPswd)
            .then(({ user }) => {
                user.updateProfile({
                    userName
                })
                dispatch(registerSuccess(user))
            })
            .catch((error) => dispatch(registerError(error.message)))
    }
}

export const loginInitiate = (userEmail, userPswd) => {
    return (dispatch) => {
        dispatch(loginStart());
        auth
            .signInWithEmailAndPassword(userEmail, userPswd)
            .then(({ user }) => {
                dispatch(loginSuccess(user))
            })
            .catch((e) => dispatch(loginError(e.message)))
    }
}

export const logoutInitiate = () => {
    return (dispatch) => {
        dispatch(logoutStart())
        auth
            .signOut()
            .then((resp) => dispatch(logoutSuccess()))
            .catch((e) => dispatch(logoutError(e.message)))
    }
}

export const msgAuto = (AutoMsg) => {
    return (dispatch) => {
        setTimeout(() => dispatch({ type: 'printMessage', payload: AutoMsg }), 2000)
    }
}

