import React, { useState } from 'react'

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({email: '', password: ''})

    const submitHandler = e => {
        e.preventDefault()

        Login(details)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form__container">
                <div className="form-inner">
                    <h2 className="form-inner__header">Login form</h2>
                    {(error !== '') ? (<div className="form-inner__error">{error}</div>) : ''}
                    <div className="form-group">
                        <small className="form-group__header" htmlFor="email">Email: </small>
                        <input 
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={e => setDetails({...details, email: e.target.value})}
                            value={details.email}    
                        />
                    </div>
                    <div>
                        <small className="form-group__header" htmlFor="password">Password: </small>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            onChange={e => setDetails({...details, password: e.target.value})}
                            value={details.password}
                        />
                    </div>
                    <input className="form-inner__button form-button" type="submit" value="LOGIN"/>
                </div>
            </div>
        </form>
    )
}

export default LoginForm
