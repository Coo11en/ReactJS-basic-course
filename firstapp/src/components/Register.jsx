import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerInitiate } from "../redux/reducers/actions";


const Register = () => {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPswd, setUserPswd] = useState('')
    const [userPswdConf, setUserPswdConf] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.currentUser)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate('/chats')
        }
    }, [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (userPswd !== userPswdConf) {
            return;
        }
        dispatch(registerInitiate(userEmail, userPswd, userName))
    }

    useEffect(() => {
        if (user) {
            navigate('/chats')
        }
    }, [user, navigate])

    return (
        <>
            <form style={{ margin: '10px', display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                <input style={{ margin: '10px' }} value={userName} onChange={((e) => setUserName(e.target.value))} placeholder={'Имя пользователя'} />
                <input style={{ margin: '10px' }} type='Email' value={userEmail} onChange={((e) => setUserEmail(e.target.value))} placeholder={'Ваш E-mail'} />
                <input style={{ margin: '10px' }} type='password' value={userPswd} onChange={((e) => setUserPswd(e.target.value))} placeholder={'Пароль'} />
                <input style={{ margin: '10px' }} type='password' value={userPswdConf} onChange={((e) => setUserPswdConf(e.target.value))} placeholder={'Повторный ввод пароля'} />
                <button style={{ margin: '10px' }} type={"submit"}>Регистрация</button>
            </form>
        </>

    )
}

export default Register;
