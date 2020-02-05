import React, { Component } from 'react';
import {Row,Col,Nav,NavItem,NavLink, TabContent, TabPane, Label,Input, FormGroup,Form, Button, FormFeedback} from 'reactstrap';
import classnames from 'classnames';
import {Link} from 'react-router-dom'
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            activeTab: '1',
            login_username: "",
            login_password: "",
            signup_username: "",
            signup_password: "",
            touched:{
                login_username: false,
                login_password: false,
                signup_username: false,
                signup_password: false
            }
        }
        
    }

    handleOnChange = e =>
    {
        this.setState(
            {
                [e.target.name] :e.target.value
            }
        )
    }

    onSubmit_login= (e) =>{
        e.preventDefault();
        this.props.onChange({
            login_username:this.state.login_username,
            login_password:this.state.login_password
        });
        this.setState({
            login_username: "",
            login_password: "",
        })
    }

    onSubmit_signup = (e) => {
        e.preventDefault();
        this.props.onChange({
            signup_username: this.state.signup_username,
            signup_password: this.state.signup_password
        });
        this.setState({
            signup_username: "",
            signup_password: ""
        })
    }


    validate(login_username,login_password,signup_username,signup_password) {

        const errors = {
            login_username: "",
            login_password: "",
            signup_username: "",
            signup_password: ""
        };

        if (this.state.touched.login_username && login_username.length < 3)
            errors.login_username = 'User Name should be >= 3 characters';
        else if (this.state.touched.login_username && login_username.length > 10)
            errors.login_username = 'User Name should be <= 10 characters';

        if (this.state.touched.signup_username && signup_username.length < 3)
            errors.signup_username = 'User Name should be >= 3 characters';
        else if (this.state.touched.signup_username && signup_username.length > 10)
            errors.signup_username = 'User Name should be <= 10 characters';

        if (this.state.touched.login_password && login_password.length < 6)
            errors.login_password = 'The password cannot be less than 6 characters';
        else if (this.state.touched.login_password && login_password.length > 20)
            errors.login_password = 'The password cannot be more than 20 characters';


        if (this.state.touched.signup_password && signup_password.length < 6)
            errors.signup_password = 'The password cannot be less than 6 characters';
        else if (this.state.touched.signup_password && signup_password.length > 20)
            errors.signup_password = 'The password cannot be more than 20 characters';

        return errors;
    }


    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    }



    toggleTab = (tab) =>{
        if(this.state.activeTab !== tab){
            this.setState(
                {activeTab:tab}
            );
        }
    }

    render(){
        const errors = this.validate(this.state.login_username,this.state.login_password,this.state.signup_username,this.state.signup_password);
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-6 offset-3" >
                        <Nav tabs className="justify-content-center h5 border-bottom-0" >
                            <NavItem >
                                <NavLink  className={classnames({active: this.state.activeTab === '1'})} onClick={() => {this.toggleTab('1');}}>
                                    Login
                                </NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className={classnames({active: this.state.activeTab === '2'})} onClick={() => {this.toggleTab('2');}} >
                                    Signup
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab} >
                            <TabPane tabId="1" style={{ border: "1px solid #DEE2E6",borderRadius:"5%" }}>
                                <Form >
                                    <Row form className="mt-4 ml-2">
                                        <Col md={{size:8 ,offset:2}}>
                                            <FormGroup>
                                                <Label htmlFor="Username" className="login_formfield_text">
                                                    USERNAME
                                                </Label>
                                                <Input type="text" name="login_username" id="login_username" placeholder="UserName" value={this.state.login_username} onChange={e => this.handleOnChange(e)} valid={errors.login_username === ''} invalid={errors.login_username !== ''} onBlur={this.handleBlur('login_username')}/>
                                                <FormFeedback>{errors.login_username}</FormFeedback>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                        <Row form className="ml-2">
                                        <Col md={{ size: 8, offset: 2 }}>
                                            <FormGroup>
                                                <Label htmlFor="Password" className="login_formfield_text">
                                                    PASSWORD
                                                </Label>
                                                <Input type="password" name="login_password" id="login_password" placeholder="Password" value={this.state.login_password} onChange={e => this.handleOnChange(e)} valid={errors.login_password === ''} invalid={errors.login_password !== ''} onBlur={this.handleBlur("login_password")}/>
                                                <FormFeedback>{errors.login_password}</FormFeedback>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row form className="ml-2">
                                        <Col md={{ size: 8, offset: 2 }}>
                                            <FormGroup>
                                                <Link className="login_forgot_password_text text-secondary"><u>Forgot Password?</u></Link>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row form className="ml-2">
                                        <Col md={{ size: 6, offset: 5 }}>
                                            <FormGroup>
                                                <Button type="button" onClick={e=>{this.onSubmit_login(e)}} className="btn bg-primary">Submit</Button>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                </Form>
                            </TabPane>
                            <TabPane tabId="2" style={{ border: "1px solid #DEE2E6", borderRadius: "5%" }}>
                                <Form >
                                    <Row form className="mt-4 ml-2">
                                        <Col md={{ size: 8, offset: 2 }}>
                                            <FormGroup>
                                                <Label htmlFor="Username" className="login_formfield_text">
                                                    USERNAME
                                                </Label>
                                                <Input type="text" name="signup_username" id="signup_username" placeholder="UserName" value={this.state.signup_username} onChange={e => this.handleOnChange(e)} valid={errors.signup_username === ''} invalid={errors.signup_username !== ''} onBlur={this.handleBlur("signup_username")}/>
                                                <FormFeedback>{errors.signup_username}</FormFeedback>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row form className="ml-2">
                                        <Col md={{ size: 8, offset: 2 }}>
                                            <FormGroup>
                                                <Label htmlFor="Password" className="login_formfield_text">
                                                    PASSWORD
                                                </Label>
                                                <Input type="password" name="signup_password" id="signup_password" placeholder="Password" value={this.state.signup_password} onChange={e => this.handleOnChange(e)} valid={errors.signup_password === ''} invalid={errors.signup_password !== ''} onBlur={this.handleBlur("signup_password")} />
                                                <FormFeedback>{errors.signup_password}</FormFeedback>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row form className="ml-2">
                                        <Col md={{ size: 8, offset: 2 }}>
                                            <FormGroup>
                                                <Link className="login_forgot_password_text text-secondary"><u>Forgot Password?</u></Link>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row form className="ml-2">
                                        <Col md={{ size: 6, offset: 5 }}>
                                            <FormGroup>
                                                <Button type="button" onClick={e => this.onSubmit_signup(e)} className="rounded bg-primary">Submit</Button>
                                            </FormGroup>
                                        </Col>
                                    </Row>

                                </Form>
                            </TabPane>
                        </TabContent>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

