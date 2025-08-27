"use client";
import { basePath } from '@/next.config';
import { auth } from '@/shared/firebase/firebaseapi';
import store from '@/shared/redux/store';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { Fragment, useEffect, useState } from 'react';
import { Alert, Button, Card, Col, Form, Nav, Row, Tab } from 'react-bootstrap';

const Page = () => {

    const [passwordshow1, setpasswordshow1] = useState(false);

    const [err, setError] = useState("");
    const [data, setData] = useState({
        "username": "nextjsspruko",
        "password": "1234567890",
    });
    const { username, password } = data;
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError("");
    };
    const Login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(username, password).then(
            user => { console.log(user); RouteChange(); }).catch(err => { setError(err.message); });
    };

    const Login1 = (_e) => {
        if (data.username == "nextjsspruko" && data.password == "1234567890") {
            RouteChange();
        }
        else {
            setError("The Auction details did not Match");
            setData({
                "username": "nextjsspruko",
                "password": "1234567890",
            });
        }
    };

    const router = useRouter();
    const RouteChange = () => {
        const path = "/dashboard/gaming";
        router.push(path);
    };

    const local_varaiable = store.getState();

    return (
        <Fragment>
            <html dir={local_varaiable.dir}
                data-theme-mode={local_varaiable.dataThemeMode}
                data-card-background={local_varaiable.dataCardBackground}
                data-card-style={local_varaiable.dataCardStyle}
                data-nav-layout={local_varaiable.dataNavLayout}
                data-nav-style={local_varaiable.dataNavStyle}>
                <body className="authentication-background">
                    <div className="container">
                        <Row className="justify-content-center align-items-center authentication authentication-basic h-100">
                            <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                                <Card className="custom-card my-4">
                                    <div className="top-left"></div>
                                    <div className="top-right"></div>
                                    <div className="bottom-left"></div>
                                    <div className="bottom-right"></div>
                                    <div className="mb-3 d-flex justify-content-center pt-5">
                                        <Link href="/dashboard/gaming/">
                                            <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-logo.png`} alt="logo" className="desktop-logo" />
                                            <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/images/brand-logos/desktop-dark.png`} alt="logo" className="desktop-dark" />
                                        </Link>
                                    </div>
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="nextjs">
                                        <Nav variant="pills" className="justify-content-center authentication-tabs">
                                            <Nav.Item>
                                                <Nav.Link eventKey="nextjs">
                                                    <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/nextjs.png`} alt="logo" className='avatar avatar-sm' />
                                                </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="firebase">
                                                    <img src={`${process.env.NODE_ENV === 'production' ? basePath : ''}/assets/images/brand-logos/firbase.png`} alt="logo" className='avatar avatar-sm' />
                                                </Nav.Link>
                                            </Nav.Item>

                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="nextjs" className="p-5 border-0 pt-3">
                                                <p className="h5 mb-2 text-center">Sign In</p>
                                                <p className="mb-4 text-muted op-7 fw-normal text-center">Welcome back Anthony !</p>
                                                <div className="row gy-3">
                                                    {err && <Alert variant="danger">{err}</Alert>}
                                                    <div className="col-xl-12">
                                                        <Form.Label htmlFor="signin-username" className="text-default">User Name</Form.Label>
                                                        <Form.Control type="text" name="username" className="" id="signin-username" placeholder="user name"
                                                            value={username}
                                                            onChange={changeHandler}
                                                        />
                                                    </div>
                                                    <div className="col-xl-12 mb-2">
                                                        <Form.Label htmlFor="signin-password" className="text-default d-block">Password<Link href="#!" className="float-end text-danger">Forget password ?</Link></Form.Label>
                                                        <div className="position-relative">
                                                            <Form.Control name="password" type={(passwordshow1) ? 'text' : "password"} value={password}
                                                                onChange={changeHandler} className="create-password-input" id="signin-password" placeholder="password" />
                                                            <Link href="#!" scroll={false} className="show-password-button text-muted" id="button-addon2" onClick={() => setpasswordshow1(!passwordshow1)}><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                                        </div>
                                                        <div className="mt-2">
                                                            <div className="form-check">
                                                                <Form.Check className="" type="checkbox" value="" id="defaultCheck1" />
                                                                <Form.Label className="text-muted fw-normal" htmlFor="defaultCheck1">
                                                                    Remember password ?
                                                                </Form.Label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <Link href="/dashboard/gaming" className="btn btn-primary" onClick={Login1}>Sign In</Link>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-muted mt-3 mb-0">Dont have an account? <Link href="#!" className="text-primary">Sign Up</Link></p>
                                                </div>
                                                <div className="btn-list text-center mt-3">
                                                    <Button variant='' className="btn btn-icon btn-sm btn-wave authentication-social-btn">
                                                        <i className="ri-facebook-line fw-bold"></i>
                                                    </Button>
                                                    <Button variant='' className="btn btn-icon btn-sm btn-wave authentication-social-btn">
                                                        <i className="ri-twitter-x-line fw-bold"></i>
                                                    </Button>
                                                    <Button variant='' className="btn btn-icon btn-sm btn-wave authentication-social-btn">
                                                        <i className="ri-instagram-line fw-bold"></i>
                                                    </Button>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="firebase" className="p-5 border-0 pt-3">
                                                <p className="h5 mb-2 text-center">Sign In</p>
                                                <p className="mb-4 text-muted op-7 fw-normal text-center">Welcome back Anthony !</p>
                                                <div className="row gy-3">
                                                    {err && <Alert variant="danger">{err}</Alert>}
                                                    <div className="col-xl-12">
                                                        <Form.Label htmlFor="signin-username" className="text-default">User Name</Form.Label>
                                                        <Form.Control name="username" type="text" className="" id="signin-username" placeholder="user name" value={username}
                                                            onChange={changeHandler} />
                                                    </div>
                                                    <div className="col-xl-12 mb-2">
                                                        <Form.Label htmlFor="signin-password" className="text-default d-block">Password<Link href="/authentication/reset-password/reset-basic" className="float-end text-danger">Forget password ?</Link></Form.Label>
                                                        <div className="position-relative">
                                                            <Form.Control name="password" type={(passwordshow1) ? 'text' : "password"}
                                                                value={password}
                                                                onChange={changeHandler} className="create-password-input" id="signin-password" placeholder="password" />
                                                            <Link href="#!" scroll={false} className="show-password-button text-muted" id="button-addon2" onClick={() => setpasswordshow1(!passwordshow1)}><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></Link>
                                                        </div>
                                                        <div className="mt-2">
                                                            <div className="form-check">
                                                                <Form.Check className="" type="checkbox" value="" id="defaultCheck1" />
                                                                <Form.Label className="text-muted fw-normal" htmlFor="defaultCheck1">
                                                                    Remember password ?
                                                                </Form.Label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <Link href="/dashboard/gaming" className="btn btn-primary" onClick={Login}>Sign In</Link>
                                                </div>
                                                <div className="text-center">
                                                    <p className="text-muted mt-3 mb-0">Dont have an account? <Link href="#!" className="text-primary">Sign Up</Link></p>
                                                </div>
                                                <div className="btn-list text-center mt-3">
                                                    <Button variant='' className="btn btn-icon btn-sm btn-wave authentication-social-btn">
                                                        <i className="ri-facebook-line fw-bold"></i>
                                                    </Button>
                                                    <Button variant='' className="btn btn-icon btn-sm btn-wave authentication-social-btn">
                                                        <i className="ri-twitter-x-line fw-bold"></i>
                                                    </Button>
                                                    <Button variant='' className="btn btn-icon btn-sm btn-wave authentication-social-btn">
                                                        <i className="ri-instagram-line fw-bold"></i>
                                                    </Button>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>

                                    </Tab.Container>

                                </Card>
                            </Col>
                        </Row>
                    </div>
                </body>
            </html>
        </Fragment>
    );
};

export default Page;


