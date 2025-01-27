import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { memberActions } from "../store/memberSlice";


const Login = () => {

    const dispatch = useDispatch();
    const [member, setMember] = useState('');

    let memberInfo = useSelector((state, action) => state.member);

    useEffect(() => {
        setMember(memberInfo);
    }, [memberInfo])

    useEffect(() => {
        console.log('member', member);
    }, [member])

    const loginHandler = () => {
        dispatch(memberActions.login())
    }

    return (
        <>
            <div>
                <div className="title">Login</div>
                <button onClick={loginHandler}>onClick</button>
            </div>
        </>
    )
}

export default Login;