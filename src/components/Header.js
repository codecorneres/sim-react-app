import React, {useState, useRef} from 'react'
import searchIcon from '../images/search.svg';
import contactIcon from '../images/phone-flip.svg';
import personIcon from '../images/person.svg';
import simLogo from '../images/sim-logo.png';
import closeSearchCollapse from '../images/close.svg';
import exploreIcon from '../images/compass-black.svg';
import tourIcon from '../images/tour-shade-primary.svg';
import queryIcon from '../images/query.svg';
import missionWorkerIcon from '../images/mission-workers.svg';
import skillIcon from '../images/design-tools.svg';
import dealIcon from '../images/deal.svg';
import openBookIcon from '../images/open-book.svg';
import reminderIcon from '../images/reminder.svg';
import churchIcon from '../images/church-primry.svg';
import contactMenuIcon from '../images/contact-icon.svg';
import faqIcon from '../images/faq-icon.svg';
import leaderIcon from '../images/leader-icon.svg';
import missionIcon from '../images/mission-icon.svg';
import storyIcon from '../images/story-icon.svg';
import prayMegaIcon from '../images/prayer-hands.svg';
import currentPrayerIcon from '../images/task-list-yellow.svg';
import joinPrayerIcon from '../images/chat-base.svg';
import careIcon from '../images/care.svg';
import bequestIcon from '../images/gift-yellow.svg';
import chartYellowIcon from '../images/round-yellow.svg';

export default function Header() {
    const [show, setShow] = useState(false);
  const contentEl = useRef();
  return (
    <header className='site-main-header'>
        <div className='search-form-main bg-gray-secondary' ref={contentEl} style={show ? {height: contentEl.current.scrollHeight, transition: 'all 0.3s', overflow: 'hidden'} : {height: '0px', overflow: 'hidden', transition: 'all 0.3s' }}>
          <div className='container'>
            <div className='search-form-inner'>
              <form action=''>
                <div className='form-group'>
                  <input type='text' placeholder='Search' />
                </div>
                <button type='button' className='btn-default'>
                  Search
                </button>
              </form>
              <div className='close-btn' onClick={() => setShow(false)}>
                <img src={closeSearchCollapse} alt='' />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Navbar --> */}
        <nav className='navbar navbar-light navbar-expand-lg p-0'>
          <div className='container'>
            <div className='site-logo-box'>
              <a className='navbar-brand p-0' href='#'>
                <img src={simLogo} alt='' className='' />
              </a>
            </div>
            <div className='responsive-menubar-items'>
              <button class="navbar-toggler collapsed" type="button" data-bs-toggle='collapse'
                  data-bs-target='#navbarText' aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  Menu <img src="https://simausdevsite.flywheelsites.com/wp-content/themes/sim/images/mobile-menu.svg" alt="" />
              </button>
            </div>
            {/* <!-- <div className="header-right"> --> */}

            <div
              className='collapse navbar-collapse flex-column align-items-end'
              id='navbarText'
            >
              <div className='top-nav text-end d-lg-block d-none'>
                <div className='quick-approach-nav'>
                  <div className='nav-item search-link'>
                    <span onClick={() => setShow(true)}>
                      <img src={searchIcon} alt='' />
                      Search
                    </span>
                  </div>
                  <div className='nav-item'>
                    <a href='#'>
                      <img src={contactIcon} alt='' />
                      Contact
                    </a>
                  </div>
                  <div className='nav-item'>
                    <a href='#'>
                      <img src={personIcon} alt='' />
                      Account
                    </a>
                  </div>
                </div>
              </div>
              <ul className='navbar-nav me-0 ms-auto mb-2 mb-lg-0'>
                <li className='nav-item menu-item-has-children'>
                  <a className=' active' href='#'>
                    Explore Mission
                  </a>
                  <div className="mega-menu">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="megamenu-grid-nav">
                                <div className="megamenu-feature-nav">
                                  <div className="nav-content">
                                      <div className="nav-icon">
                                        <img src={exploreIcon} alt="" />
                                      </div>
                                      <div className="nav-text">
                                        <h4>Explore Mission</h4>
                                        <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                                      </div>
                                  </div>
                                  <div className="nav-thumb">
                                      <div className="media-cover br-25">
                                        <img src={require('../images/help.jpg')} alt="" />
                                      </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="icon-with-content">
                                <ul className="menu list-unstyled">
                                    <li className="listing-content">
                                        <a href="#">
                                            <div className="multiple-box">
                                              <div className="nav-icon">
                                                  <img src={tourIcon} alt="" />
                                              </div>
                                              <div className="content">
                                                <span>Go</span>
                                                <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                                              </div>
                                            </div>
                                        </a>
                                        <ul className="sub-menu list-unstyled">
                                            <li className="menu-item "><a href="#v">Talk to a Mobiliser</a></li>
                                        </ul>
                                    </li>
                                    <li className="listing-content">
                                        <a href="#">
                                            <div className="multiple-box">
                                              <div className="nav-icon">
                                                  <img src={queryIcon} alt="" />
                                              </div>
                                              <div className="content">
                                                <span>Why Mission?</span>
                                                <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                                              </div>
                                            </div>
                                        </a>
                                        <ul className="sub-menu list-unstyled">
                                            <li className="menu-item "><a href="#">Why Serve with SIM?</a></li>
                                            <li className="menu-item "><a href="#">Is Mission For Me?</a></li>
                                            <li className="menu-item "><a href="#">Types of service</a></li>
                                            <li className="menu-item "><a href="#">How does my church fit in?</a></li>
                                        </ul>
                                    </li>
                                    <li className="listing-content">
                                        <a href="#">
                                            <div className="multiple-box">
                                            <div className="nav-icon">
                                                <img src={skillIcon} alt="" />
                                            </div>
                                            <div className="content">
                                            <span>Skills & Interests</span>
                                            <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                                tempor invidunt ut labore et dolore magna</p>
                                            </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="listing-content">
                                        <a href="#">
                                            <div className="multiple-box">
                                            <div className="nav-icon">
                                                <img src={missionWorkerIcon} alt="" />
                                            </div>
                                            <div className="content">
                                            <span>Our Mission Workers</span>
                                            <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                                tempor invidunt ut labore et dolore magna</p>
                                            </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  </div>
                </li>
                <li className='nav-item menu-item-has-children'>
                  <a className='' href='/'>
                    Connect
                  </a>
                  <div className="mega-menu">
                    <div className="row">
                        <div className="col-md-4">
                          <div className="megamenu-grid-nav">
                                <div className="megamenu-feature-nav">
                                  <div className="nav-content">
                                      <div className="nav-icon">
                                        <img src={dealIcon} alt="" />
                                      </div>
                                      <div className="nav-text">
                                        <h4>Connect</h4>
                                        <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                                      </div>
                                  </div>
                                  <div className="nav-thumb">
                                      <div className="media-cover br-25">
                                        <img src={require('../images/donation-banner.jpg')} alt="" />
                                      </div>
                                  </div>
                                </div>
                          </div>
                        </div>
                        <div className="col-md-8">
                            <div className="icon-with-content">
                                <ul className="menu list-unstyled">
                                    <li className="listing-content">
                                        <a href="#">
                                            <div className="multiple-box">
                                            <div className="nav-icon">
                                                <img src={churchIcon} alt="" />
                                            </div>
                                            <div className="content">
                                            <span>Churches</span>
                                            <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                                            </div>
                                            </div>
                                        </a>
                                        <ul className="sub-menu list-unstyled">
                                            <li className="menu-item "><a href="#">Church Resources</a></li>
                                            <li className="menu-item "><a href="#">Sending Church Partners</a></li>
                                            <li className="menu-item "><a href="#">Invite SIM to share</a></li>
                                        </ul>
                                    </li>
                                    <li className="listing-content">
                                        <a href="#">
                                            <div className="multiple-box">
                                            <div className="nav-icon">
                                                <img src={reminderIcon} alt="" />
                                            </div>
                                            <div className="content">
                                            <span>Events</span>
                                            <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                                            </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="listing-content">
                                        <a href="#">
                                            <div className="multiple-box">
                                            <div className="nav-icon">
                                                <img src={openBookIcon} alt="" />
                                            </div>
                                            <div className="content">
                                            <span>SIM Stories</span>
                                            </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  </div>
                </li>
                <li className='nav-item menu-item-has-children'>
                  <a className='' href='/'>
                    Who We Are
                  </a>
                  <div className="mega-menu">
                    <div className="row">
                        <div className="col-md-4">
                          <div className="megamenu-grid-nav">
                            <div className="megamenu-feature-nav">
                              <div className="nav-content">
                                  <div className="nav-icon">
                                    <img src={dealIcon} alt="" />
                                  </div>
                                  <div className="nav-text">
                                    <h4>Who We Are</h4>
                                    <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                                  </div>
                              </div>
                              <div className="nav-thumb">
                                  <div className="media-cover br-25">
                                    <img src={require('../images/mission-thumb.jpg')} alt="" />
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8">
                            <div className="icon-with-content">
                                <ul className="menu list-unstyled">
                                    <li className="listing-content">
                                        <a href="#">
                                            <div className="multiple-box">
                                            <div className="nav-icon">
                                                <img src={contactMenuIcon} alt="" />
                                            </div>
                                            <div className="content">
                                            <span>Contact Us</span>
                                            <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                                            </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="listing-content">
                                        <a href="#">
                                            <div className="multiple-box">
                                            <div className="nav-icon">
                                                <img src={faqIcon} alt="" />
                                            </div>
                                            <div className="content">
                                            <span>FAQs</span>
                                            <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                                            </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="listing-content">
                                        <a href="#">
                                            <div className="multiple-box">
                                            <div className="nav-icon">
                                                <img src={leaderIcon} alt="" />
                                            </div>
                                            <div className="content">
                                            <span>Our Leaders</span>
                                            <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                                            </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="listing-content">
                                        <a href="#">
                                            <div className="multiple-box">
                                            <div className="nav-icon">
                                                <img src={missionIcon} alt="" />
                                            </div>
                                            <div className="content">
                                            <span>Our Mission</span>
                                            <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                                            </div>
                                            </div>
                                        </a>
                                        <ul className="sub-menu list-unstyled">
                                            <li className="menu-item "><a href="#">SIM Aid</a></li>
                                        </ul>
                                    </li>
                                    <li className="listing-content">
                                        <a href="#">
                                            <div className="multiple-box">
                                            <div className="nav-icon">
                                                <img src={storyIcon} alt="" />
                                            </div>
                                            <div className="content">
                                            <span>Our Story</span>
                                            <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                                            </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  </div>
                </li>
                <li className='nav-item menu-item-has-children nav-btn'>
                  <a className='' href='/'>
                    Pray
                  </a>
                  <div className="mega-menu">
                    <div className="row">
                        <div className="col-md-4">
                          <div className="megamenu-grid-nav">
                            <div className="megamenu-feature-nav">
                              <div className="nav-content">
                                  <div className="nav-icon">
                                    <img src={prayMegaIcon} alt="" />
                                  </div>
                                  <div className="nav-text">
                                    <h4>Pray</h4>
                                    <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                                  </div>
                              </div>
                              <div className="nav-thumb">
                                  <div className="media-cover br-25">
                                    <img src={require('../images/mission-thumb.jpg')} alt="" />
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8">
                            <div className="icon-with-content">
                                <ul className="menu list-unstyled">
                                    <li className="listing-content">
                                        <a href="#">
                                            <div className="multiple-box">
                                            <div className="nav-icon">
                                                <img src={currentPrayerIcon} alt="" />
                                            </div>
                                            <div className="content">
                                            <span>Current Prayer Needs</span>
                                            <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                                            </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="listing-content">
                                        <a href="#">
                                            <div className="multiple-box">
                                            <div className="nav-icon">
                                                <img src={joinPrayerIcon} alt="" />
                                            </div>
                                            <div className="content">
                                            <span>Join a prayer group</span>
                                            <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                                            </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  </div>
                </li>
                <li className='nav-item menu-item-has-children nav-btn'>
                  <a className='' href='/'>
                    Give
                  </a>
                  <div className="mega-menu">
                    <div className="row">
                        <div className="col-md-4">
                        <div className="megamenu-grid-nav">
                            <div className="megamenu-feature-nav">
                              <div className="nav-content">
                                  <div className="nav-icon">
                                    <img src={careIcon} alt="" />
                                  </div>
                                  <div className="nav-text">
                                    <h4>Give</h4>
                                    <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                                  </div>
                              </div>
                              <div className="nav-thumb">
                                  <div className="media-cover br-25">
                                    <img src={require('../images/mission-thumb.jpg')} alt="" />
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-8">
                            <div className="icon-with-content">
                                <ul className="menu list-unstyled">
                                    <li className="listing-content">
                                        <a href="#">
                                          <div className="multiple-box">
                                            <div className="nav-icon circul"></div>
                                            <div className="content">
                                              <span>All Projects</span>
                                            </div>
                                          </div>
                                        </a>
                                        <ul className="sub-menu list-unstyled">
                                            <li className="menu-item "><a href="#">SIM Ministries & Projects</a></li>
                                        </ul>
                                    </li>
                                    <li className="listing-content">
                                        <a href="#">
                                            <div className="multiple-box">
                                            <div className="nav-icon">
                                                <img src={bequestIcon} alt="" />
                                            </div>
                                            <div className="content">
                                            <span>Make a Bequest</span>
                                            <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                                            </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="listing-content">
                                        <a href="#">
                                            <div className="multiple-box">
                                                <div className="nav-icon">
                                                    <img src={chartYellowIcon} alt="" />
                                                </div>
                                                <div className="content">
                                                <span>Where does my money go?</span>
                                                <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- </div> --> */}
          </div>
        </nav>
      </header>
  )
}
