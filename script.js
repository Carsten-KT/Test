/* Grundeinstellungen */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #fff;
  color: #333;
}

/* HEADER */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1C3549; /* dunkler Blauton */
  padding: 1rem 2rem;
}

.header h1 {
  color: #fff;
  font-size: 1.5rem;
}

.header-nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.header-nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

.header-nav ul li a:hover {
  text-decoration: underline;
}

/* SLIDER CONTAINER */
.slider-container {
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
  background-color: #000;
}

/* SLIDER WRAPPER */
.slider-wrapper {
  display: flex;
  width: 300%;
  height: 100%;
  transition: transform 0.6s ease;
}

/* EINZELNE SLIDE */
.slide {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-content {
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  padding: 2rem;
  text-align: center;
  max-width: 600px;
  border-radius: 4px;
}

.slide-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.slide-content p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
}

.btn {
  display: inline-block;
  background-color: #ffb400; /* z.B. ein sonniges Gelb */
  color: #333;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  font-weight: bold;
  border-radius: 3px;
}

.btn:hover {
  background-color: #ffc933; 
}

/* SLIDER NAVIGATION (PFEILE) */
.slider-nav {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  pointer-events: none; /* Pfeile nur anklickbar machen */
}

.nav-arrow {
  cursor: pointer;
  font-size: 2rem;
  color: #fff;
  background-color: rgba(0,0,0,0.4);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  pointer-events: auto; /* Klick aktivieren */
  transition: background-color 0.3s ease;
}

.nav-arrow:hover {
  background-color: rgba(0,0,0,0.7);
}

/* SLIDER INDICATOR DOTS */
.indicator-dots {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: 20px;
}

.indicator-dots .dot {
  display: inline-block;
  height: 12px;
  width: 12px;
  margin: 0 5px;
  background-color: #bbb;
  border-radius: 50%;
  cursor: pointer;
}

.indicator-dots .dot.active {
  background-color: #ffb400;
}

/* MAIN CONTENT */
.main-content {
  padding: 2rem;
}

.info-section {
  max-width: 800px;
  margin: 2rem auto;
}

.info-section h2 {
  margin-bottom: 1rem;
}

.info-section p,
.info-section ul {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

/* FOOTER */
.footer {
  background-color: #1C3549;
  text-align: center;
  color: #fff;
  padding: 1rem;
}
