import React, { useState } from "react";
import styled from "styled-components";
import './Form.module.css';

const Div = styled.div`
   border-radius: 5%;
   border: 15px;
   padding: 5px;
   margin: 20px;
   background-color:orange;
   color:cornflowerblue;
`;

export default function Form(props) {

    const [userData, setUserData] = React.useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = React.useState({
        username: '',
        password: ''
    });
    function validate(inputs) {
        let errors = [];
        if (!inputs.username.trim()) {
            errors.username = 'Falta username';
        }
        if (!inputs.password.trim()) {
            errors.password = 'Falta password';
        }
        return errors;
    }
    const handleInputOnChange = function(e) {
        setUserData({
            ...userData,
            [e.target.name] : e.target.value
        });
        setErrors(
            validate({
              ...userData,
              [e.target.name] : e.target.value
            })
          );      
    }
    const handleSubmit = function(e) {
        e.preventDefault();
        console.log('errors',errors, (Object.values(errors)).length );

        if ((Object.values(errors)).length === 0) {
            props.login(userData);
        }
        else {
            alert('Corrija para continuar.');
        }
    }

    return (
        <form>
            <Div>
                <div>
                    <label>Username:</label>
                    <input name='username' type='text' onChange={handleInputOnChange} 
                        value={userData.username} className={errors.username && 'warning'}></input>
                    <p className='danger'>{errors.username}</p>
                </div>
                <div>
                    <label>Password:</label>
                    <input name='password' type='text' onChange={handleInputOnChange} 
                        value={userData.password} className={errors.password && 'warning'}></input>
                    <p className='danger'>{errors.password}</p>
                </div>
                <button onClick={handleSubmit}>Login</button>
            </Div>
        </form>
    );
}