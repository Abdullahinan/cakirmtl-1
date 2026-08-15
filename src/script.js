* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #f4f4f4;
  color: #111;
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  width: min(1180px, 92%);
  margin: auto;
}


/* NAVBAR */

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(10, 10, 10, .94);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,.08);
}

.nav-inner {
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
}

.logo-icon {
  width: 45px;
  height: 45px;
  display: grid;
  place-items: center;
  background: #f2b705;
  color: #111;
  font-weight: 900;
  border-radius: 7px;
  font-size: 14px;
}

.logo strong {
  display: block;
  font-size: 18px;
  letter-spacing: 1px;
}

.logo small {
  display: block;
  color: #aaa;
  font-size: 9px;
  letter-spacing: 2px;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  color: #ccc;
  font-size: 14px;
  transition: .3s;
}

.nav-links a:hover {
  color: #f2b705;
}

.nav-call {
  background: #f2b705;
  color: #111;
  padding: 12px 18px;
  border-radius: 5px;
  font-weight: 800;
  font-size: 13px;
}

.menu-btn {
  display: none;
  border: 0;
  background: #f2b705;
  color: #111;
  font-size: 23px;
  padding: 7px 12px;
  border-radius: 5px;
}

.mobile-menu {
  display: none;
}


/* HERO */

.hero {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;

  background:
    linear-gradient(90deg, rgba(0,0,0,.96), rgba(0,0,0,.65)),
    radial-gradient(circle at 80% 40%, #393939, #080808 60%);

  overflow: hidden;
}

.hero::after {
  content: "";
  position: absolute;
  width: 600px;
  height: 600px;
  right: -200px;
  top: 100px;
  border: 100px solid rgba(242,183,5,.08);
  border-radius: 50%;
}

.hero-content {
  position: relative;
  z-index: 2;
  padding-top: 80px;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: #f2b705;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 1.5px;
  margin-bottom: 25px;
}

.status span,
.open-status span {
  width: 9px;
  height: 9px;
  background: #35d06f;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 12px #35d06f;
}

.hero h1 {
  color: white;
  font-size: clamp(48px, 8vw, 88px);
  line-height: .98;
  max-width: 850px;
  letter-spacing: -3px;
}

.hero h1 span {
  color: #f2b705;
}

.hero p {
  max-width: 600px;
  color: #aaa;
  font-size: 18px;
  margin: 28px 0;
}

.hero-buttons {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 52px;
  padding: 0 25px;
  border-radius: 5px;
  font-weight: 800;
  transition: .3s;
}

.btn-primary {
  background: #f2b705;
  color: #111;
}

.btn-primary:hover {
  transform: translateY(-3px);
}

.btn-whatsapp {
  background: #16a765;
  color: white;
}

.btn-whatsapp:hover {
  transform: translateY(-3px);
}

.btn-dark {
  background: #111;
  color: white;
}

.hero-info {
  display: flex;
  gap: 45px;
  margin-top: 65px;
  border-top: 1px solid rgba(255,255,255,.12);
  padding-top: 25px;
}

.hero-info div {
  display: flex;
  flex-direction: column;
}

.hero-info strong {
  color: #f2b705;
  font-size: 25px;
}

.hero-info span {
  color: #888;
  font-size: 12px;
}


/* GENERAL */

.section {
  padding: 110px 0;
}

.section-title {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
}

.section-title > span,
.eyebrow {
  color: #d39e00;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 3px;
}

.section-title h2 {
  font-size: clamp(32px, 5vw, 50px);
  line-height: 1.05;
  margin: 15px 0;
}

.section-title p {
  color: #777;
}


/* SERVICES */

.services {
  background: #f4f4f4;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.service-card {
  background: white;
  min-height: 270px;
  padding: 32px;
  border: 1px solid #e7e7e7;
  position: relative;
  overflow: hidden;
  transition: .3s;
}

.service-card:hover {
  transform: translateY(-7px);
  border-color: #f2b705;
  box-shadow: 0 20px 45px rgba(0,0,0,.08);
}

.service-icon {
  width: 55px;
  height: 55px;
  display: grid;
  place-items: center;
  background: #111;
  color: #f2b705;
  font-size: 24px;
  margin-bottom: 28px;
}

.service-card h3 {
  font-size: 21px;
  margin-bottom: 12px;
}

.service-card p {
  color: #777;
  font-size: 14px;
}

.service-card > span {
  position: absolute;
  right: 25px;
  bottom: 15px;
  font-size: 55px;
  font-weight: 900;
  color: #f1f1f1;
}


/* ABOUT */

.about {
  background: #fff;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-visual {
  min-height: 480px;
  background:
    linear-gradient(135deg, #292929, #090909);
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.about-visual::before {
  content: "";
  position: absolute;
  width: 330px;
  height: 330px;
  border: 55px solid rgba(242,183,5,.1);
  border-radius: 50%;
}

.metal-box {
  width: 210px;
  height: 210px;
  border: 2px solid #f2b705;
  transform: rotate(45deg);
  display: grid;
  place-items: center;
  z-index: 2;
}

.metal-symbol {
  color: #f2b705;
  font-size: 55px;
  font-weight: 900;
  transform: rotate(-45deg);
}

.experience {
  position: absolute;
  left: 25px;
  bottom: 25px;
  background: #f2b705;
  padding: 18px 25px;
  color: #111;
}

.experience strong {
  display: block;
  font-size: 28px;
}

.experience span {
  font-size: 11px;
  font-weight: bold;
}

.about-content h2 {
  font-size: clamp(40px, 5vw, 60px);
  line-height: .98;
  margin: 15px 0 25px;
}

.about-content p {
  color: #666;
  margin-bottom: 15px;
}

.check-list {
  display: grid;
  gap: 10px;
  margin: 25px 0 30px;
}

.check-list div {
  font-weight: bold;
  font-size: 14px;
}


/* CTA */

.cta {
  background: #111;
  color: white;
  padding: 75px 0;
}

.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.cta span {
  color: #f2b705;
  font-weight: 900;
  font-size: 12px;
  letter-spacing: 3px;
}

.cta h2 {
  font-size: clamp(30px, 5vw, 48px);
  line-height: 1;
  margin: 12px 0;
}

.cta p {
  color: #888;
}


/* CONTACT */

.contact {
  background: #f4f4f4;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.contact-card {
  background: white;
  padding: 25px;
  display: flex;
  align-items: center;
  gap: 18px;
  border: 1px solid #e8e8e8;
  transition: .3s;
}

.contact-card:hover {
  border-color: #f2b705;
  transform: translateY(-3px);
}

.contact-icon {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  background: #111;
  color: #f2b705;
  font-size: 21px;
}

.contact-card small,
.address-card small {
  display: block;
  color: #999;
  font-size: 10px;
  letter-spacing: 2px;
  font-weight: bold;
}

.contact-card strong {
  font-size: 16px;
}

.address-card {
  margin-top: 15px;
  background: #111;
  color: white;
  padding: 28px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.address-icon {
  width: 55px;
  height: 55px;
  display: grid;
  place-items: center;
  background: #f2b705;
  color: #111;
  font-size: 25px;
}

.address-card small {
  color: #f2b705;
}

.address-card p {
  color: #888;
  font-size: 13px;
}

.open-status {
  margin-left: auto;
  color: #35d06f;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  gap: 7px;
  align-items: center;
}


/* FOOTER */

footer {
  background: #080808;
  color: white;
  padding: 30px 0;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-logo strong,
.footer-logo small {
  display: block;
}

.footer-logo small {
  color: #777;
  font-size: 8px;
  letter-spacing: 2px;
}

footer p {
  color: #666;
  font-size: 12px;
}

footer a {
  color: #f2b705;
}


/* WHATSAPP */

.floating-whatsapp {
  position: fixed;
  right: 22px;
  bottom: 22px;
  width: 60px;
  height: 60px;
  background: #16a765;
  color: white;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 25px;
  z-index: 900;
  box-shadow: 0 10px 30px rgba(0,0,0,.25);
}


/* MOBILE */

@media (max-width: 850px) {

  .nav-links,
  .nav-call {
    display: none;
  }

  .menu-btn {
    display: block;
  }

  .mobile-menu {
    background: #111;
    padding: 15px 5%;
    border-top: 1px solid #222;
  }

  .mobile-menu a {
    display: block;
    color: white;
    padding: 14px 0;
    border-bottom: 1px solid #222;
  }

  .mobile-menu.active {
    display: block;
  }

  .hero {
    min-height: 800px;
  }

  .hero h1 {
    font-size: 52px;
  }

  .hero p {
    font-size: 16px;
  }

  .hero-info {
    gap: 20px;
  }

  .service-grid {
    grid-template-columns: 1fr;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .about-visual {
    min-height: 350px;
  }

  .cta-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .address-card {
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .open-status {
    margin-left: 0;
    width: 100%;
  }

  .footer-inner {
    flex-direction: column;
    text-align: center;
  }

}

@media (max-width: 500px) {

  .nav-inner {
    height: 70px;
  }

  .logo strong {
    font-size: 15px;
  }

  .hero h1 {
    font-size: 43px;
    letter-spacing: -2px;
  }

  .hero-info {
    flex-wrap: wrap;
  }

  .hero-info div {
    min-width: 75px;
  }

  .section {
    padding: 80px 0;
  }

  .section-title {
    margin-bottom: 40px;
  }

  .btn {
    width: 100%;
  }

  .hero-buttons {
    width: 100%;
  }

}