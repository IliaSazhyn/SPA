import React, { Component } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
// import HeaderNav from './components/HeaderNav';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Experience />
        <Testimonials />
        {/* <HeaderNav /> */}
        <Portfolio />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;