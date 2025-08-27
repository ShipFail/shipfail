import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 text-center">
    <div className="container" style={{textAlign: "right !important"}}>
        <span className="text-muted" > Copyright © <span id="year"> 2025 </span> <Link
                href="#!" scroll={false} className="text-dark fw-medium">ship.fail</Link>.
            Designed with <span className="ri-heart-fill text-danger"></span> by <Link href="#!" scroll={false}>
                <span className="fw-medium text-primary text-decoration-underline">h.s.l.</span>
            </Link> 
        </span>
    </div>
</footer>
  );
};

export default Footer;
