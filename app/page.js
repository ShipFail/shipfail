"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import Seo from "@/shared/layout-components/seo/seo";
import Layout from "@/app/(components)/layout";
import Header from "@/shared/layout-components/header/header";
import Footer from "@/shared/layout-components/footer/footer";
import confetti from "canvas-confetti";
import VIDEO from "@/app/(components)/containership_video";

const Page = () => {
    const [project, setProject] = useState("");
    const fullText = "what are you shipping?";
    const [typedText, setTypedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const [isFlashing, setIsFlashing] = useState(false);
    const [isShaking, setIsShaking] = useState(false);
    const [pulseIds, setPulseIds] = useState([]);
    const buttonContainerRef = useRef(null);
    const asciiIdxRef = useRef(0);
    const [asciiFrame, setAsciiFrame] = useState(null);

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            index = index + 1;
            setTypedText(fullText.slice(0, index));
            if (index >= fullText.length) {
                clearInterval(intervalId);
            }
        }, 75);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (!Array.isArray(VIDEO) || VIDEO.length === 0) return;
        setAsciiFrame(VIDEO[0]);
        const intervalId = setInterval(() => {
            asciiIdxRef.current = (asciiIdxRef.current + 1) % VIDEO.length;
            setAsciiFrame(VIDEO[asciiIdxRef.current]);
        }, 1000 / 24);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const cursorId = setInterval(() => {
            setShowCursor((v) => !v);
        }, 500);
        return () => clearInterval(cursorId);
    }, []);

    const removePulse = (id) => {
        setPulseIds((ids) => ids.filter((x) => x !== id));
    };

    const addPulse = () => {
        setPulseIds((ids) => ids.concat(Date.now() + Math.random()));
    };

    const fireConfetti = () => {
        const colors = ["#ffffff", "#bfbfbf"]; // white and gray only
        confetti({ particleCount: 120, spread: 70, startVelocity: 45, origin: { y: 0.65 }, colors });
        setTimeout(() => {
            confetti({ particleCount: 80, spread: 100, startVelocity: 35, ticks: 200, scalar: 0.9, origin: { y: 0.7 }, colors });
        }, 150);
    };

    const triggerEffects = () => {
        setIsFlashing(true);
        setTimeout(() => setIsFlashing(false), 320);
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 600);
        addPulse();
        fireConfetti();
    };

    const launch = () => {
        const slug = project.trim();
        triggerEffects();
        if (!slug) return;
        // const url = `https://${slug}.ship.fail`;
        setTimeout(() => {
            // window.location.href = url;
        }, 900);
    };
    return (
        <Fragment>
            <Layout>
                <Seo title={"Home"} />
                <div className={`d-flex flex-column min-vh-100 ${isShaking ? "camera-shake" : ""}`} style={{position: "relative"}}>
                    <div className="ascii-bg" aria-hidden="true">
                        <pre>
{asciiFrame ? asciiFrame.join('\n') : ''}
                        </pre>
                    </div>
                    <div className="min-vh-100" style={{position: "relative", zIndex: 1, }}>
                        <Header />
                        <div className="flex-grow-1 d-flex align-items-center justify-content-center">
                        <div className="w-100 px-3 min-vh-100 flex flex-column justify-center" style={{ maxWidth: 560, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <h1 className="text-center mb-4" aria-label={fullText}>
                                {typedText}
                                <span style={{opacity: showCursor ? 1 : 0}}>│</span>
                            </h1>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="your_project"
                                    value={project}
                                    onChange={(e) => setProject(e.target.value)}
                                    aria-label="project subdomain"
                                    style={{textAlign: "right !important", fontSize: "24px", }}
                                />
                                <InputGroup.Text style={{fontSize: "24px"}}>.ship.fail</InputGroup.Text>
                            </InputGroup>
                            <div ref={buttonContainerRef} className="d-grid position-relative launch-btn-container">
                                {pulseIds.map((id) => (
                                    <span key={id} className="launch-pulse" onAnimationEnd={() => removePulse(id)} />
                                ))}
                                <Button variant="primary" size="lg" onClick={launch}>🚀 LAUNCH!</Button>
                            </div>
                        </div>
                        </div>
                        <Footer />
                    </div>
                    {isFlashing ? <div className="vibe-flash" aria-hidden="true" /> : null}
                </div>
            </Layout>
            <style jsx global>{`
                .ascii-bg { position: fixed; inset: 0; z-index: 0; pointer-events: none; }
                .ascii-bg pre { position: absolute; inset: 0; margin: 0; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; line-height: 1em; white-space: pre; font-size: 32px; color: rgba(255,255,255,0.02); }

                .vibe-flash { position: fixed; inset: 0; background: radial-gradient(circle at center, rgba(46,211,183,0.4), rgba(255,255,255,0.92)); animation: vibe-flash 320ms ease-out forwards; pointer-events: none; z-index: 9999; }
                @keyframes vibe-flash { 0% { opacity: 0; } 10% { opacity: 1; } 100% { opacity: 0; } }
                .camera-shake { animation: camera-shake 600ms cubic-bezier(.36,.07,.19,.97) both; }
                @keyframes camera-shake {
                    10%, 90% { transform: translate3d(-1px, 0, 0); }
                    20%, 80% { transform: translate3d(2px, -1px, 0); }
                    30%, 50%, 70% { transform: translate3d(-3px, 1px, 0); }
                    40%, 60% { transform: translate3d(3px, 0, 0); }
                    100% { transform: translate3d(0,0,0); }
                }
                .launch-btn-container { position: relative; overflow: visible; }
                .launch-pulse { position: absolute; left: 50%; top: 50%; width: 14px; height: 14px; border-radius: 9999px; background: radial-gradient(circle, rgba(46,211,183,0) 0%, rgba(46,211,183,0) 56%, rgba(46,211,183,0.45) 62%, rgba(46,211,183,0.25) 66%, rgba(46,211,183,0) 74%); transform: translate(-50%, -50%) scale(0); animation: launch-pulse 6000ms ease-out forwards; pointer-events: none; z-index: 10000; }
                @keyframes launch-pulse { 0% { transform: translate(-50%, -50%) scale(0); opacity: 0.9; } 40% { opacity: 0.7; } 100% { transform: translate(-50%, -50%) scale(300); opacity: 0; } }

                input.form-control {
                    &::placeholder {
                        font-size: 24px;
                    }
                }
            `}</style>
        </Fragment>
    );
};

export default Page;
