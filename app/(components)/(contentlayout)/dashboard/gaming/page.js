"use client";
import { AirSupport, Civilianpopulation, Civilianpopulationsupport, Completedissues, DangerZone, DistanceCovered, Energyblock, NewEvent, PendingEvents, Player1, Player2, Player3, Player4, Player5, SafeZone, Skillachieved, TimeSpent, UnsolvedEvents, Usersreport } from "@/shared/data/dashboard/gamingdata";
const WorldMapCom = dynamic(() => import('@/shared/data/dashboard/mapdata'), { ssr: false });
import Seo from "@/shared/layout-components/seo/seo";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Fragment} from "react";
import { Badge, Card, Col, Dropdown, ProgressBar, Row } from "react-bootstrap";

const Gaming = () => {

    return (
        <Fragment>
            <Seo title={"Gaming"} />
            <Row>
                <Col xl={3} lg={6} md={6} sm={6} className="col-12">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="">
                            <div className="mb-3 d-flex align-items-start justify-content-between">
                                <div>
                                    <span className="text-fixed-white fs-11">New Events</span>
                                    <h4 className="text-fixed-white mb-0">13,278<span className="text-success fs-12 ms-2 fw-semibold d-inline-block"><i className="ti ti-trending-up align-middle me-1 d-inline-block"></i>0.25%</span></h4>
                                </div>
                                <Dropdown className="">
                                    <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="op-4 no-caret">
                                        <i className="bi bi-grid text-primary"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu" role="menu">
                                        <Dropdown.Item as="li"><Link className="" href="#!">Day</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!">Week</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!">Year</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div id="new-issues">
                                <NewEvent />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} lg={6} md={6} sm={6} className="col-12">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="">
                            <div className="mb-3 d-flex align-items-start justify-content-between">
                                <div>
                                    <span className="text-fixed-white fs-11">Completed Events</span>
                                    <h4 className="text-fixed-white mb-0">29,912<span className="text-danger fs-12 ms-2 fw-semibold"><i className="ti ti-trending-down align-middle me-1 d-inline-block"></i>0.25%</span></h4>
                                </div>
                                <Dropdown className="">
                                    <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="op-4 no-caret">
                                        <i className="bi bi-grid text-primary"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu" role="menu">
                                        <Dropdown.Item as="li"><Link className="" href="#!">Day</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!">Week</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!">Year</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div id="completed-issues">
                                <Completedissues />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} lg={6} md={6} sm={6} className="col-12">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="">
                            <div className="mb-3 d-flex align-items-start justify-content-between">
                                <div>
                                    <span className="text-fixed-white fs-11">Pending Events</span>
                                    <h4 className="text-fixed-white mb-0">1,214<span className="text-success fs-12 ms-2 fw-semibold d-inline-block"><i className="ti ti-trending-up align-middle me-1 d-inline-block"></i>0.25%</span></h4>
                                </div>
                                <Dropdown className="">
                                    <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="op-4 no-caret">
                                        <i className="bi bi-grid text-primary"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu" role="menu">
                                        <Dropdown.Item as="li"><Link className="" href="#!">Day</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!">Week</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!">Year</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div id="pending-issues">
                                <PendingEvents />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} lg={6} md={6} sm={6} className="col-12">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Body className="">
                            <div className="mb-3 d-flex align-items-start justify-content-between">
                                <div>
                                    <span className="text-fixed-white fs-11">Unresolved Events</span>
                                    <h4 className="text-fixed-white mb-0">563<span className="text-success fs-12 ms-2 fw-semibold d-inline-block"><i className="ti ti-trending-up align-middle me-1 d-inline-block"></i>0.25%</span></h4>
                                </div>
                                <Dropdown className="">
                                    <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="op-4 no-caret">
                                        <i className="bi bi-grid text-primary"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu" role="menu">
                                        <Dropdown.Item as="li"><Link className="" href="#!">Day</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!">Week</Link></Dropdown.Item>
                                        <Dropdown.Item as="li"><Link className="" href="#!">Year</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div id="unresolved-issues">
                                <UnsolvedEvents />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={6} xl={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Distance Covered
                            </div>
                            <Dropdown className="">
                                <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="op-4 no-caret">
                                    <i className="bi bi-grid text-primary"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" className="dropdown-menu" role="menu">
                                    <Dropdown.Item as="li"><Link className="" href="#!">Day</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!">Week</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!">Year</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="distance-covered-content container">
                                <div className="row gy-3">
                                    <Col xl={5} sm={4} className="col-12">
                                        <div className="d-flex align-items-center gap-1">
                                            <div id="safe-zones">
                                                <SafeZone />
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fs-12">Safe Zone</span>
                                                <h4 className="fw-medium mb-1">32.17H</h4>
                                                <div className="progress rounded-0 custom-progress-padding progress-sm border border-primary border-opacity-10" role="progressbar" aria-label="Basic example" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                                                    <ProgressBar className="progress-bar bg-success" style={{ width: "65%" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={5} sm={4} className="col-12">
                                        <div className="d-flex align-items-center gap-1">
                                            <div id="danger-zones">
                                                <DangerZone />
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fs-12">Danger Zone</span>
                                                <h4 className="fw-medium mb-1">18.65H</h4>
                                                <div className="progress rounded-0 custom-progress-padding progress-sm border border-primary border-opacity-10" role="progressbar" aria-label="Basic example" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                                                    <div className="progress-bar bg-danger" style={{ width: "65%" }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </div>
                            </div>
                            <div id="distance-covered">
                                <DistanceCovered />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Skills Achieved
                            </div>
                            <Link href="#!" scroll={false} className="badge bg-primary-transparent border border-primary border-opacity-10 rounded-0">View All</Link>
                        </Card.Header>
                        <Card.Body className="">
                            <ul className="list-unstyled mb-0 skills-achieved-list">
                                {Skillachieved.map((idx) => (
                                    <li className="" key={Math.random()}>
                                        <Link href="#!" scroll={false}>
                                            <div className="d-flex align-items-center justify-content-between mb-1 fs-13">
                                                <div>
                                                    {idx.name}
                                                </div>
                                                <div>{idx.now}%</div>
                                            </div>
                                            <div>
                                                <ProgressBar className="progress rounded-0 progress-sm border border-primary border-opacity-10 custom-progress-padding" now={idx.now} />
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Energy Block
                            </div>
                            <Dropdown className="">
                                <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="op-4 no-caret">
                                    <i className="bi bi-grid text-primary"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" className="dropdown-menu" role="menu">
                                    <Dropdown.Item as="li"><Link className="" href="#!">Day</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!">Week</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!">Year</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body className=" px-1">
                            <div id="energy-block">
                                <Energyblock />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={3} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Air Support
                            </div>
                            <Dropdown className="">
                                <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="op-4 no-caret">
                                    <i className="bi bi-grid text-primary"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" className="dropdown-menu" role="menu">
                                    <Dropdown.Item as="li"><Link className="" href="#!">Day</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!">Week</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!">Year</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body className="">
                            <div id="air-support">
                                <AirSupport />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={5} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Player Statistics
                            </div>
                            <Badge className="bg-primary-transparent border border-primary border-opacity-10 rounded-0">View All</Badge>
                        </Card.Header>
                        <Card.Body className=" player-statistics">
                            <div className="table-responsive">
                                <table className="table text-nowrap table-borderless table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">Player</th>
                                            <th scope="col">Score</th>
                                            <th scope="col">Performance</th>
                                            <th scope="col">Objective </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Harshrath</th>
                                            <td>
                                                <span className="fs-15 fw-medium">1200</span>
                                            </td>
                                            <td><div id="player1-stats">
                                                <Player1 />
                                            </div></td>
                                            <td><span className="text-primary">Defeat Boss</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Zozo Hadid</th>
                                            <td>
                                                <span className="fs-15 fw-medium">950</span>
                                            </td>
                                            <td><div id="player2-stats">
                                                <Player2 />
                                            </div></td>
                                            <td><span className="text-primary">In Progress</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Martiana</th>
                                            <td>
                                                <span className="fs-15 fw-medium">1800</span>
                                            </td>
                                            <td><div id="player3-stats">
                                                <Player3 />
                                            </div></td>
                                            <td><span className="text-primary">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Reva Shaan</th>
                                            <td>
                                                <span className="fs-15 fw-medium">1100</span>
                                            </td>
                                            <td><div id="player4-stats">
                                                <Player4 />
                                            </div></td>
                                            <td><span className="text-primary">Pending</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Reva Shaan</th>
                                            <td>
                                                <span className="fs-15 fw-medium">1500</span>
                                            </td>
                                            <td><div id="player5-stats">
                                                <Player5 />
                                            </div></td>
                                            <td><span className="text-primary">Pending</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Total Time Spent
                            </div>
                            <Dropdown className="">
                                <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="op-4 no-caret">
                                    <i className="bi bi-grid text-primary"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" className="dropdown-menu" role="menu">
                                    <Dropdown.Item as="li"><Link className="" href="#!">Day</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!">Week</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!">Year</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body className="">
                            <div id="time-spent">
                                <TimeSpent />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card civilian-population">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Civilian Population
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="op-4 no-caret">
                                    <i className="bi bi-grid text-primary"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" className="dropdown-menu" role="menu">
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Day</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Week</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!" scroll={false}>Year</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body className="">
                            <div id="civilian-population-support">
                                <Civilianpopulationsupport />
                            </div>
                            <div id="civilian-population">
                                <Civilianpopulation />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Top Countries
                            </div>
                            <Dropdown className="">
                                <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="op-4 no-caret">
                                    <i className="bi bi-grid text-primary"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" className="dropdown-menu" role="menu">
                                    <Dropdown.Item as="li"><Link className="" href="#!">Day</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!">Week</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!">Year</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body className="Gaming-Countries">
                            <WorldMapCom />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <div className="top-left"></div>
                        <div className="top-right"></div>
                        <div className="bottom-left"></div>
                        <div className="bottom-right"></div>
                        <Card.Header className="justify-content-between">
                            <div className="card-title">
                                Top Players
                            </div>
                            <Dropdown className="">
                                <Dropdown.Toggle as="a" aria-label="anchor" href="#!" data-bs-toggle="dropdown" className="op-4 no-caret">
                                    <i className="bi bi-grid text-primary"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" className="dropdown-menu" role="menu">
                                    <Dropdown.Item as="li"><Link className="" href="#!">Day</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!">Week</Link></Dropdown.Item>
                                    <Dropdown.Item as="li"><Link className="" href="#!">Year</Link></Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body className="">
                            <div id="users-report">
                                <Usersreport />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );

};

export default Gaming;
