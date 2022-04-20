import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginInitiate } from "../redux/reducers/actions";


const Login = () => {

    // const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPswd, setUserPswd] = useState('')
    // const [userPswdConf, setUserPswdConf] = useState('')
    const dispatch = useDispatch()
    // const user = useSelector(state => state.user.currentUser)
    const navigate = useNavigate()
    const user = useSelector(state => state.user.currentUser)
    useEffect(() => {
        if (user) {
            navigate('/chats')
        }
    }, [user, navigate])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!userEmail || !userPswd) {
            return;
        }
        dispatch(loginInitiate(userEmail, userPswd))
    }

    return (
        <>
            <form style={{ margin: '10px', display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                <input style={{ margin: '10px' }} type='Email' value={userEmail} onChange={((e) => setUserEmail(e.target.value))} placeholder={'Ваш E-mail'} />
                <input style={{ margin: '10px' }} type='password' value={userPswd} onChange={((e) => setUserPswd(e.target.value))} placeholder={'Пароль'} />
                <button style={{ margin: '10px' }} type={"submit"}>Войти</button>
            </form>
        </>

    )
}

export default Login;
