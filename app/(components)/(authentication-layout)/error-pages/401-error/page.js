"use client";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useEffect } from "react";
import { Col } from "react-bootstrap";

const Error401 = () => {

    const ErrorCover = () => {
        document.querySelector("body")?.classList.remove("authentication-background");
    };
    useEffect(() => {
        ErrorCover();
    });

    return (
        <Fragment>
            <Seo title={"401-Error"} />
            <div className="page error-bg">
                <div className="error-page">
                    <div className="container">
                        <div className="my-auto">
                            <div className="row align-items-center justify-content-center h-100 text-center">
                                <Col xl={5}>
                                    <p className="error-text mb-4 text-primary">4<i className="ri-emotion-sad-line"></i>1</p>
                                    <p className="fs-3 fw-normal mb-3 text-fixed-white">Unauthorized</p>
                                    <p className="fs-15 text-fixed-white mb-5 op-8">Sorry, we were unable to process your request. Please refresh and make the necessary modifications and resubmit.</p>
                                    <Link href="/dashboard/gaming" className="btn btn-primary-ghost"><i className="ri-arrow-left-line align-middle me-1 d-inline-block"></i>BACK TO HOME</Link>
                                </Col>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Error401;
