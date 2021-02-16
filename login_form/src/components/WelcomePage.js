import React from 'react'

function WelcomePage({Logout, user}) {
    return (
        <div className="form__container">
          <div className="form-inner">
            <div className="welcome-block">
              <h2 className="welcome-block__header">Welcom, <span>{user.email}</span></h2>
              <button className="welcome-block__button form-button" onClick={Logout}>Log out</button>
            </div>
          </div>
        </div>
    )
}

export default WelcomePage
