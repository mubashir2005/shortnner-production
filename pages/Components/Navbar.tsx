import React from "react";
import {Navbar, Nav, Image} from "react-bootstrap";
import styles from "../../styles/Navbar.module.css";


function NavigationBar() {
        return (
            <div>
                <Navbar expand="lg">
                    <Navbar.Brand href="#" className={styles.brand}>
                        <Image src='/brand.png' alt="Short Shortnner"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">

                        <Nav.Link
                            className={styles.effects}
                            href="https://shortnner-blog.vercel.app/short-shortnner"
                            target="_blank"
                            style={{textDecoration: "none"}}
                            rel="noreferrer"
                        >
                            Why Short Shortnner?
                        </Nav.Link>

                        <Nav.Link
                            className={styles.effects}
                            href="https://shortnner-blog.vercel.app/newsletter"
                            target="_blank"
                            style={{textDecoration: "none"}}
                            rel="noreferrer"
                        >
                            Newsletter
                        </Nav.Link>
                        <Nav.Link
                            className={styles.effects}
                            href="https://shortnner-blog.vercel.app/pricing"
                            style={{textDecoration: "none"}}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Pricing
                        </Nav.Link>
                        <Nav.Link
                            className={styles.effects}
                            target="_blank"
                            href="https://shortnner-blog.vercel.app/contact-us"
                            style={{textDecoration: "none"}}
                            rel="noreferrer"
                        >
                            Contact Us
                        </Nav.Link>
                        <Nav.Link
                            className={styles.effects}
                            target="_blank"
                            href="https://shortnner-blog.vercel.app/donation"
                            style={{textDecoration: "none"}}
                            rel="noreferrer"
                        >
                            Donate
                        </Nav.Link>
                    </Navbar.Collapse>
                </Navbar>


            </div>

        );
}

export default NavigationBar;
