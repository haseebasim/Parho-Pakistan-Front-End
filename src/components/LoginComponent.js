import React, { Component } from 'react';
import $ from 'jquery'
class LoginSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login_email: '',
            login_password: '',
            signup_username: '',
            signup_email: '',
            signup_password: '',
            signup_confirmpassword: '',
            touched: {
                login_email: false,
                login_password: false,
                signup_username: false,
                signup_email: false,
                signup_password: false,
                signup_confirmpassword: false,
            }

        }
        this.tab_btn_handler = this.tab_btn_handler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        console.log(this.state.login_email)
    }

    //to change the tabs between login and signup
    tab_btn_handler = (e) => {
        if (e.target.id === 'login_tab_btn') {
            $('#login_container').addClass('active')
            $('#signup_container').removeClass('active')
            // $('#login_container').css('display', 'block').animate({ opacity: 1})
            // $('#signup_container').css({ 'display': 'none' }).animate({ opacity: 0.5})
            $('#login_tab_btn').toggleClass('btn_active')
            $('#signup_tab_btn').toggleClass('btn_active')
        }
        else {
            $('#login_container').removeClass('active')
            $('#signup_container').addClass('active')
            //            $('#login_container').css('display', 'none').animate({ opacity: 0.5 })
            //          $('#signup_container').css('display', 'block').animate({ opacity: 1 })

            $('#signup_tab_btn').toggleClass('btn_active')
            $('#login_tab_btn').toggleClass('btn_active')

        }

    }


    submitHandler = (e) => {
        if ((this.state.login_email === "haseebzaidi123@gmail.com") && (this.state.login_password === "haseeb123")) {
            e.preventDefault()
            console.log('works')
        }
    }


    inputOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    inputOnBlur = (e) => {
        this.setState({
            touched: {
                ...this.state.touched,
                [e.target.name]: true
            }
        })
    }

    validate(login_email, login_password, signup_username, signup_email, signup_password, signup_confirmpassword) {

        const errors = {
            login_email: "",
            login_password: "",
            signup_username: "",
            signup_email: "",
            signup_password: "",
            signup_confirmpassword: ""
        };

        if (this.state.touched.login_email && !(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/).test(login_email)) { errors.login_email = 'Please enter a valid email with an @ and a valid domain'; }
        else { errors.login_email = ''; }


        if (this.state.touched.signup_username && signup_username.length < 3)
            errors.signup_username = 'User Name should be >= 3 characters';
        else if (this.state.touched.signup_username && signup_username.length > 10)
            errors.signup_username = 'User Name should be <= 10 characters';
        else if (this.state.touched.signup_username && signup_username.length < 10 && this.state.touched.signup_username && signup_username.length > 3)
            errors.signup_username = "";


        if (this.state.touched.signup_email && !(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/).test(signup_email))
            errors.signup_email = 'Please enter a valid email with an @ and a valid domain'
        else if (this.state.touched.signup_email && (/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/).test(signup_email))
            errors.signup_email = null;

        if (this.state.touched.login_password && login_password.length < 6)
            errors.login_password = 'The password cannot be less than 6 characters';
        else if (this.state.touched.login_password && login_password.length > 20)
            errors.login_password = 'The password cannot be more than 20 characters';
        else if (this.state.touched.login_password && login_password.length < 20 && this.state.touched.login_password && login_password.length > 6)
            errors.login_password = '';

        if (this.state.touched.signup_password && signup_password.length < 6)
            errors.signup_password = 'The password cannot be less than 6 characters';
        else if (this.state.touched.signup_password && signup_password.length > 20)
            errors.signup_password = 'The password cannot be more than 20 characters';

        else if (this.state.touched.signup_password && signup_password.length < 20 && this.state.touched.signup_password && signup_password.length > 6)
            errors.signup_password = '';

        if (this.state.touched.signup_confirmpassword && signup_confirmpassword !== signup_password)
            errors.signup_confirmpassword = "the password doesnot match";
        else if (this.state.touched.signup_confirmpassword && signup_confirmpassword === signup_password)
            errors.signup_confirmpassword = 'The password matches';

        return errors;
    }





    render() {
        const errors = this.validate(this.state.login_email, this.state.login_password, this.state.signup_username, this.state.signup_email, this.state.signup_password, this.state.signup_confirmpassword);

        return (
            <div className='login_signup_component'>
                <div id="ls_container">
                    <div id="ls_content_container">
                        <div id="tab_btn_container">
                            <input type="button" id="login_tab_btn" value="Login" className="btn_active" onClick={this.tab_btn_handler} />
                            <input type="button" id="signup_tab_btn" value="Signup" onClick={this.tab_btn_handler} />
                        </div>
                        <div id="login_container" className='active'>
                            <form>
                                <div>
                                    <label htmlFor="email" className="ls_label">Email</label>
                                    <div>
                                        <input type="email" id="login_email" name="login_email" className="ls_input_fields" placeholder="Email" value={this.state.login_email} onChange={(e) => this.inputOnChange(e)} onBlur={e => this.inputOnBlur(e)} />
                                        <p className="form_feedback">{errors.login_email}</p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="ls_label">Password</label>
                                    <div>
                                        <input type="password" id="login_password" name="login_password" className="ls_input_fields" placeholder="Password" value={this.state.login_password} onChange={(e) => this.inputOnChange(e)} onBlur={e => this.inputOnBlur(e)} />
                                        <p className="form_feedback">{errors.login_password}</p>
                                    </div>
                                </div>
                                <div className="submit_btn_container">
                                    <button type="submit" onClick={this.submitHandler} className="submit_btn">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div id="signup_container">
                            <form >
                                <div>
                                    <label htmlFor="username" className="ls_label">Username</label>
                                    <div>
                                        <input type="text" id="signup_username" name="signup_username" className="ls_input_fields" placeholder="username" value={this.state.signup_username} onChange={(e) => this.inputOnChange(e)} onBlur={e => this.inputOnBlur(e)} />
                                        <p className="form_feedback">{errors.signup_username}</p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="ls_label">Email</label>
                                    <div>
                                        <input type="email" id="signup_email" name="signup_email" className="ls_input_fields" placeholder="email" value={this.state.signup_email} onChange={(e) => this.inputOnChange(e)} onBlur={e => this.inputOnBlur(e)} />
                                        <p className="form_feedback">{errors.signup_email}</p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="password" className="ls_label">Password</label>
                                    <div>
                                        <input type="password" id="signup_password" name="signup_password" className="ls_input_fields" placeholder="password" value={this.state.signup_password} onChange={(e) => this.inputOnChange(e)} onBlur={e => this.inputOnBlur(e)} />
                                        <p className="form_feedback">{errors.signup_password}</p>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="confirm_password" className="ls_label">Confirm Password</label>
                                    <div>
                                        <input type="password" id="signup_confirmpassword" name="signup_confirmpassword" className="ls_input_fields" placeholder="Confirm Password" value={this.state.signup_confirmpassword} onChange={(e) => this.inputOnChange(e)} onBlur={e => this.inputOnBlur(e)} />
                                        <p className="form_feedback">{errors.signup_confirmpassword}</p>
                                    </div>
                                </div>
                                <div className="submit_btn_container">
                                    <button type="submit" className="submit_btn">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginSignup;

