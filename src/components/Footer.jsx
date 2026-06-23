import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-col footer-brand">
          <div className="footer-logo">
            <img src="/images/smartCanteenLogo.png" alt="Smart Canteen" />
            <span>Smart Canteen</span>
          </div>
          <p className="footer-tag">
            Preorder &rarr; Pay online &rarr; Scan QR &rarr; Collect.
            No queue, no cash, no confusion.
          </p>
          <p className="footer-college">
            <i className="fa-solid fa-graduation-cap"></i>
            <span>Built by CSE students at <strong>RSR Rungta College</strong>, Bhilai</span>
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/card">My Cart</Link></li>
            <li><Link to="/orderhistory">Order History</Link></li>
            <li><Link to="/foodreview">Reviews</Link></li>
            <li><Link to="/message">My Orders</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Recognition</h4>
          <ul className="footer-awards">
            <li>
              <a
                href="https://www.linkedin.com/posts/takeshwar06_hackathonwinners-smartcanteen-innovation-activity-7191347080416608256-mZ9-"
                target="_blank"
                rel="noreferrer"
              >
                <span className="award-badge">2024</span>
                <div>
                  <strong>Chairman's Trophy <i className="fa-solid fa-arrow-up-right-from-square"></i></strong>
                  <span>Avishkar 2.0 &mdash; Top Award</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/posts/takeshwar06_hackathonchampions-innovation-techforgood-activity-7167120226189230080-JI4t"
                target="_blank"
                rel="noreferrer"
              >
                <span className="award-badge silver">2023</span>
                <div>
                  <strong>Runner-up <i className="fa-solid fa-arrow-up-right-from-square"></i></strong>
                  <span>Avishkar 2023</span>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">The Team</h4>
          <ul className="footer-team">
            <li>
              <a href="https://lokeshwardewangan.in" target="_blank" rel="noreferrer">
                Lokeshwar Dewangan <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </li>
            <li>
              <a href="https://takeshwarcrafts.onrender.com" target="_blank" rel="noreferrer">
                Takeshwar Janghel <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>&copy; {year} Smart Canteen &middot; All rights reserved</span>
          <span className="footer-made">
            Made with <i className="fa-solid fa-heart" style={{ color: 'var(--primary)' }}></i> &amp; long canteen nights
          </span>
        </div>
      </div>
    </footer>
  );
}
