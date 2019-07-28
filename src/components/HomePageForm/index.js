import React, { useState } from 'react';
import './style.css';


function HomePageForm() {

    const [isActive, toggleForms] = useState(false);
    const [loginForm, setLoginForm] = useState({ email: '', password: '', repeatedPassword: '' });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (loginForm.password === loginForm.repeatedPassword && loginForm.email.trim() !== '') {

            console.log(loginForm);
        }
    }
    const handleOnChange = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    }

    return (
        <div className={isActive ? "home-form__container" : "home-form__container right-panel-active"}>
            <div className="form-container sign-up-container pt-3">
                <form onSubmit={handleOnSubmit}>
                    <h3>Sign up!</h3>
                    <div className="d-flex justify-content-around my-4 mt-3">
                        <a href="#" className="social">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social">
                            <i className="fab fa-github-square"></i>
                        </a>
                        <a href="#" className="social">
                            <i className="fab fa-google"></i>
                        </a>
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="email">Email</label>
                        <input
                            onChange={handleOnChange}
                            value={loginForm.email}
                            name="email"
                            placeholder="Email"
                            type="text"
                            className="form-control" />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={handleOnChange}
                            value={loginForm.password}
                            name="password"
                            placeholder="Password"
                            type="password"
                            className="form-control" />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="repeatedPassword">Repeat password</label>
                        <input
                            onChange={handleOnChange}
                            value={loginForm.repeatedPassword}
                            name="repeatedPassword"
                            placeholder="Repeat password"
                            type="password"
                            className="form-control" />
                    </div>
                    <button className="btn btn-primary btn-block">Sign up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form>
                    <h3>Sign in!</h3>
                    <div className="d-flex justify-content-around my-4 mt-3">
                        <a href="#" className="social">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="social">
                            <i className="fab fa-github-square"></i>
                        </a>
                        <a href="#" className="social">
                            <i className="fab fa-google"></i>
                        </a>
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="email">Email</label>
                        <input name="email" placeholder="Email" type="text" className="form-control" />
                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="password">Password</label>
                        <input name="password" placeholder="Password" type="password" className="form-control" />
                    </div>
                    <button className="btn btn-primary btn-block">Sign in</button>
                    <p className="text-left mt-2">
                        <a className="text-left" href="#">Forget password?</a>
                    </p>

                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h3>Haven't account yet?</h3>
                        <p className="lead">switch to sing up from</p>
                        <button onClick={() => toggleForms(true)} className="btn" style={{ color: '#f45c00', backgroundColor: '#fff' }}>
                            Sign up <i className="fas fa-long-arrow-alt-right"></i>
                        </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h3>Have already account?</h3>
                        <p className="lead">switch to sign in from</p>
                        <button onClick={() => toggleForms(false)} className="btn" style={{ color: '#f45c00', backgroundColor: '#fff' }}>
                            <i className="fas fa-long-arrow-alt-left"></i>
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageForm;
