import React, { useState, useRef } from 'react';
import btnArrowLight from './images/btn-arrow-light.svg';
import btnArrowDark from './images/btn-arrow.svg';
import playVideoBtn from './images/play_vdo.svg';
import simLogo from './images/sim-logo.png';
import searchIcon from './images/search-icon.svg';
import contactIcon from './images/phone-flip.svg';
import personIcon from './images/person.svg';
import splashImage from './images/Image/yannis-h-uaPaEM7MiQQ-unsplash.jpg';
import arrowDownIcon from './images/icons/arrow-down-light.svg';
import member2Image from './images/send.jpg';
import member2Image2 from './images/member2.jpg';
import missionThumb from './images/mission-thumb.jpg';
import filterBannerScalled from './images/filter-banner.jpg';
import compassShadePrimary from './images/compass-shade-primary.svg';
import handCtaShade from './images/hands-cta-shade.svg';
import careSecondaryShade from './images/care-secondary-shade.svg';
import member3Image from './images/member3.jpg';
import member4Image from './images/member4.jpg';
import member5Image from './images/member5.jpg';
import sliderArrowLeftIcon from './images/slider-arrow-left.svg';
import sliderArrowRightIcon from './images/slider-arrow-right.svg';
import dashedCurl from './images/dashed-curl.svg';
import scribbleImage from './images/speech-bubble.svg';
import helpImage from './images/help.jpg';
import communityImage from './images/community.jpg';
import simLogoWhite from './images/sim-logo-white.png';
import callOutlineIcon from './images/call-outline.svg';
import envelopOutlineBold from './images/envelope-outline-bold.svg';
import registerCharitySold from './images/registered-charity-solid.svg';
import MissionWorkerDetailPopup from './components/MissionWorkerDetailPopup';

const Home = () => {
  const sectionRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [singleWorker, setSingleWorker] = useState({});

  const missionWorkersData = [
    {
      id: 1,
      name: 'Joy Feliz',
      location: 'The Philippines',
      image: member2Image2,
      class: '',
      duration: 'Long Term',
      desc: 'Has God given you a heart for teaching and a desire to use your gifts cross-culturally? By serving as a teacher with SIM, you can help students grasp the life-changing good news of Jesus Christ while equipping them to navigate their world.',
    },
    {
      id: 2,
      name: 'Sally Edwards',
      location: 'Zimbabwe',
      image: member3Image,
      class: 'theme-optional-primary',
      duration: 'Long Term',
      desc: 'Has God given you a heart for teaching and a desire to use your gifts cross-culturally? By serving as a teacher with SIM, you can help students grasp the life-changing good news of Jesus Christ while equipping them to navigate their world.',
    },
    {
      id: 3,
      name: 'John Smith',
      location: 'Regional NSW',
      image: member4Image,
      class: 'theme-optional-secondary',
      duration: 'Long Term',
      desc: 'Has God given you a heart for teaching and a desire to use your gifts cross-culturally? By serving as a teacher with SIM, you can help students grasp the life-changing good news of Jesus Christ while equipping them to navigate their world.',
    },
    {
      id: 4,
      name: 'Andrew',
      location: 'Canada',
      image: member5Image,
      class: 'theme-dark-shade',
      duration: 'Long Term',
      desc: 'Has God given you a heart for teaching and a desire to use your gifts cross-culturally? By serving as a teacher with SIM, you can help students grasp the life-changing good news of Jesus Christ while equipping them to navigate their world.',
    },
    {
      id: 5,
      name: 'Sally Edwards',
      location: 'Zimbabwe',
      image: member3Image,
      class: 'theme-optional-tertiary',
      duration: 'Long Term',
      desc: 'Has God given you a heart for teaching and a desire to use your gifts cross-culturally? By serving as a teacher with SIM, you can help students grasp the life-changing good news of Jesus Christ while equipping them to navigate their world.',
    },
    {
      id: 6,
      name: 'Andrew',
      location: 'Canada',
      image: member5Image,
      class: 'theme-optional-secondary-varied',
      duration: 'Long Term',
      desc: 'Has God given you a heart for teaching and a desire to use your gifts cross-culturally? By serving as a teacher with SIM, you can help students grasp the life-changing good news of Jesus Christ while equipping them to navigate their world.',
    },
  ];

  const handlePopup = (workerId) => {
    setOpen(true);
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'hidden';
    }
    let getWorker = missionWorkersData.find((item) => item.id === workerId);
    if (getWorker) {
      setSingleWorker(getWorker);
    }
  };
  const closePopup = () => {
    setOpen(false);
    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = '';
    }
  };

  const handleClickDownArrow = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className='site-main-header'>
        <div className='search-form-main collapse bg-gray-secondary'>
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
              <div className='close-btn'>
                <img src='images/close.svg' alt='' />
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
              <button
                className='navbar-toggler collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarText'
                aria-controls='navbarText'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
            </div>
            {/* <!-- <div className="header-right"> --> */}

            <div
              className='collapse navbar-collapse flex-column align-items-end'
              id='navbarText'
            >
              <div className='top-nav text-end d-lg-block d-none'>
                <div className='quick-approach-nav'>
                  <div className='nav-item'>
                    <a href='#'>
                      <img src={searchIcon} alt='' />
                      Search
                    </a>
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
                </li>
                <li className='nav-item menu-item-has-children'>
                  <a className='' href='#'>
                    Connect
                  </a>
                </li>
                <li className='nav-item menu-item-has-children'>
                  <a className='' href='#'>
                    Who We Are
                  </a>
                </li>
                <li className='nav-item menu-item-has-children nav-btn'>
                  <a className='' href='#'>
                    Pray
                  </a>
                </li>
                <li className='nav-item menu-item-has-children nav-btn'>
                  <a className='' href='#'>
                    Give
                  </a>
                </li>
              </ul>
            </div>
            {/* <!-- </div> --> */}
          </div>
        </nav>
      </header>
      <section
        className='index-page-banner-block layout-secondary bg-cover'
        style={{ backgroundImage: `url(${splashImage})` }}
        // style='background-image: url(images/Image/yannis-h-uaPaEM7MiQQ-unsplash.jpg);'
      >
        <div className='banner-inner-relative'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-7'>
                <div className='banner-content text-left text-light'>
                  <h1>
                    Making Christ known in communities where He is least known.
                  </h1>
                  <div className='play-video-button d-md-none'>
                    <a
                      href='#banner_video_modal'
                      data-bs-toggle='modal'
                      style={{ backgroundImage: `url(${playVideoBtn})` }}
                      className='btn-default'
                    >
                      Play video{' '}
                    </a>
                  </div>
                  <div onClick={handleClickDownArrow} className='down-arrow'>
                    <div className='rotate-icon'>
                      <img src={arrowDownIcon} alt='' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-5 d-md-block d-none'>
                <div className='play-video-button'>
                  <a
                    href='#banner_video_modal'
                    data-bs-toggle='modal'
                    className='btn-default'
                    style={{ backgroundImage: `url(${playVideoBtn})` }}
                  >
                    Play video{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='banner-modal'>
          <div
            className='modal fade'
            id='banner_video_modal'
            data-bs-backdrop='static'
            data-bs-keyboard='false'
            tabindex='-1'
            aria-labelledby='staticBackdropLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog modal-dialog-centered'>
              <div className='modal-box'>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
                <div className='modal-video'>
                  <div className='media-cover'>
                    <iframe
                      width='560'
                      height='315'
                      src='https://www.youtube.com/embed/FrK0KIH_3NA?si=gv8HCAlOl1ffEBDA'
                      title='YouTube video player'
                      frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='index-communities-wrapper layout-secondary'>
        <div className='custom-shape-divider'>
          <svg
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            class='__web-inspector-hide-shortcut__'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M412.367 32.9358C382.209 41.0326 352.057 49.1279 321.39 54.8329C213.613 74.6574 102.466 64.5971 0 25.7429V118.393H1200V94.2229C1132.19 117.313 1055.71 109.703 985.66 91.2229C950.293 81.8964 914.144 68.5263 877.827 55.0945C833.034 38.5274 787.987 21.8663 743.84 12.5829C661.58 -4.75711 575.78 -3.74711 493.39 12.9729C466.132 18.5009 439.247 25.7189 412.367 32.9358Z'
              fill='url(#waveGradient)'
            ></path>

            <defs>
              <linearGradient id='waveGradient' gradientTransform='rotate(0)'>
                <stop
                  offset='40.6%'
                  style={{ stopColor: '#f8f8f8', stopOpacity: '1' }}
                ></stop>
                <stop
                  offset='40.5%'
                  style={{ stopColor: '#FFD772', stopOpacity: '1' }}
                ></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 shade-base'>
              <div className='communities-item-list'>
                <div className='communities-item'>
                  <div className='icon'>
                    <img src={member2Image} alt='' />
                  </div>
                  <div className='content'>
                    <p>
                      We make disciples who will<b> trust and obey Jesus</b>
                    </p>
                  </div>
                </div>
                <div className='communities-item'>
                  <div className='icon'>
                    <img src={missionThumb} alt='' />
                  </div>
                  <div className='content'>
                    <p>
                      We work together with churches{' '}
                      <b> to fulfil God’s mission</b>
                    </p>
                  </div>
                </div>
                <div className='communities-item'>
                  <div className='icon'>
                    <img src={filterBannerScalled} alt='' />
                  </div>
                  <div className='content'>
                    <p>
                      We facilitate the participation in{' '}
                      <b> cross-cultural ministry</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='communities-content'>
                <h2>
                  Our heart is to make disciples of Jesus in communities where
                  He is least known.
                </h2>
                <p>
                  We cross barriers to proclaim the crucified and risen Christ,
                  expressing His love and compassion among those who live and
                  die without Him.
                </p>
                <div className='btn-find'>
                  <a
                    style={{ backgroundImage: `url(${btnArrowDark})` }}
                    href='#'
                    className='btn-default'
                  >
                    Find out more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={sectionRef} className='icon-content-grid-block'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-sm-6'>
              <div className='grid-single text-center grid-shade-primary'>
                <div className='icon'>
                  <img src={compassShadePrimary} alt='' />
                </div>
                <div className='content'>
                  <h4>Explore Mission</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat.
                  </p>
                  <div className='cta-btn'>
                    <a href='#'>
                      <img src={btnArrowLight} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6'>
              <div className='grid-single text-center grid-shade-base'>
                <div className='icon'>
                  <img src={handCtaShade} alt='' />
                </div>
                <div className='content'>
                  <h4>Pray</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat.
                  </p>
                  <div className='cta-btn'>
                    <a href='#'>
                      <img src={btnArrowLight} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4 col-sm-6'>
              <div className='grid-single text-center grid-shade-secondary'>
                <div className='icon'>
                  <img src={careSecondaryShade} alt='' />
                </div>
                <div className='content'>
                  <h4>Give</h4>
                  <p>
                    SIM sends people, prayer and funds for cross-cultural
                    mission to reach the least reached with the Gospel of Jesus
                    Christ.
                  </p>
                  <div className='cta-btn'>
                    <a href='#'>
                      <img src={btnArrowLight} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='index-filter-slider-block'>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>Meet our mission workers</h2>
          </div>
          <div className='filter-flex-outer'>
            <form action=''>
              <div className='form-group input-icon'>
                <span className='icon'>
                  <img src={searchIcon} alt='' />
                </span>
                <input
                  type='text'
                  name=''
                  id=''
                  placeholder='Search for a missionary'
                />
              </div>
              <div className='btn-submit'>
                <button
                  style={{ backgroundImage: `url(${btnArrowDark})` }}
                  type='button'
                  className='btn-default'
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='container-fluid p-0'>
          <div className='worker-slider-main'>
            <div className='worker-slider'>
              {missionWorkersData.map((item) => (
                <div key={item.id} className={`slide-item ${item.class}`}>
                  <div className='grid-image-title-slide'>
                    <div className='slide-single'>
                      <div className='thumb media-cover br-25'>
                        <img src={item.image} alt={item.image} />
                        <div
                          onClick={() => handlePopup(item.id)}
                          className='cta-arrow'
                        >
                          <svg
                            width='27'
                            height='23'
                            viewBox='0 0 27 23'
                            fill='currentColor'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <g clip-path='url(#clip0_658_8206)'>
                              <path
                                d='M16.5884 0.330217L27.0254 10.7672C27.1331 10.8748 27.2186 11.0027 27.277 11.1434C27.3353 11.2841 27.3653 11.4349 27.3653 11.5872C27.3653 11.7395 27.3353 11.8903 27.277 12.031C27.2186 12.1717 27.1331 12.2996 27.0254 12.4072L16.5884 22.8442C16.3708 23.0618 16.0756 23.1841 15.7679 23.1841C15.4601 23.1841 15.165 23.0618 14.9474 22.8442C14.7298 22.6266 14.6075 22.3315 14.6075 22.0237C14.6075 21.716 14.7298 21.4208 14.9474 21.2032L23.4054 12.7472L0.692352 12.7472C0.390728 12.7383 0.104427 12.6123 -0.10579 12.3958C-0.316007 12.1793 -0.433593 11.8895 -0.433593 11.5877C-0.433593 11.2859 -0.316007 10.9961 -0.10579 10.7796C0.104427 10.5631 0.390728 10.4371 0.692352 10.4282L23.4064 10.4282L14.9484 1.97122C14.7308 1.75362 14.6085 1.45842 14.6085 1.15072C14.6085 0.843018 14.7308 0.547817 14.9484 0.330217C15.166 0.112617 15.4611 -0.00968241 15.7689 -0.00968239C16.0766 -0.00968236 16.3708 0.112617 16.5884 0.330217Z'
                                fill='currentColor'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_658_8206'>
                                <rect
                                  width='23'
                                  height='27'
                                  fill='white'
                                  transform='translate(27) rotate(90)'
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                      <div className='content text-center'>
                        <h5>{item.name}</h5>
                        <p>{item.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='worker-slider-controls text-center'>
              <div className='slider-controls'>
                <span className='arrow arrow-left'>
                  <img src={sliderArrowLeftIcon} alt='' />
                </span>
                <div className='dots'></div>
                <span className='arrow arrow-right'>
                  <img src={sliderArrowRightIcon} alt='' />
                </span>
              </div>
            </div>
          </div>
          <div className='cta-btn'>
            <a
              href='#'
              style={{ backgroundImage: `url(${btnArrowDark})` }}
              className='btn-default'
            >
              See all our mission workers
            </a>
          </div>
        </div>
      </section>
      <section className='solid-bg-banner-block text-center'>
        <div className='banner-shape banner-shape-left'>
          <img src={dashedCurl} alt='' />
        </div>
        <div className='container'>
          <div className='content text-light'>
            <h2>Connect</h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore.
            </p>
          </div>
          <div className='cta-btn'>
            <a
              href='#'
              style={{ backgroundImage: `url(${btnArrowDark})` }}
              className='btn-default'
            >
              Find out more
            </a>
          </div>
        </div>
        <div className='banner-shape banner-shape-right'>
          <img src={scribbleImage} alt='' />
        </div>
      </section>
      <section className='posts-grid-featured-block'>
        <div className='container'>
          <div className='grid-title'>
            <div className='row align-items-center'>
              <div className='col-md-6'>
                <div className='section-title'>
                  <h2>Resources and Stories</h2>
                </div>
              </div>
              <div className='col-md-6 d-md-block d-none'>
                <div className='cta-btn'>
                  <a
                    style={{ backgroundImage: `url(${btnArrowDark})` }}
                    href='#'
                    className='btn-default'
                  >
                    Discover more stories
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='posts-grid-featured'>
            <div className='row'>
              <div className='col-md-7'>
                <a href='#'>
                  <div className='featured-post br-25'>
                    <div className='thumb media-cover br-25'>
                      <img src={helpImage} alt='' />
                    </div>
                    <div className='post-content text-light'>
                      <div className='post-content-inner'>
                        <div className='post-tag'>FEATURED RESOURCE</div>
                        <h2> Impacting the Next Generation</h2>
                        <h6>Monday, 12 July 2023</h6>
                      </div>
                      <div className='cta-arrow'>
                        <svg
                          width='27'
                          height='23'
                          viewBox='0 0 27 23'
                          fill='currentColor'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g clip-path='url(#clip0_658_8206)'>
                            <path
                              d='M16.5884 0.330217L27.0254 10.7672C27.1331 10.8748 27.2186 11.0027 27.277 11.1434C27.3353 11.2841 27.3653 11.4349 27.3653 11.5872C27.3653 11.7395 27.3353 11.8903 27.277 12.031C27.2186 12.1717 27.1331 12.2996 27.0254 12.4072L16.5884 22.8442C16.3708 23.0618 16.0756 23.1841 15.7679 23.1841C15.4601 23.1841 15.165 23.0618 14.9474 22.8442C14.7298 22.6266 14.6075 22.3315 14.6075 22.0237C14.6075 21.716 14.7298 21.4208 14.9474 21.2032L23.4054 12.7472L0.692352 12.7472C0.390728 12.7383 0.104427 12.6123 -0.10579 12.3958C-0.316007 12.1793 -0.433593 11.8895 -0.433593 11.5877C-0.433593 11.2859 -0.316007 10.9961 -0.10579 10.7796C0.104427 10.5631 0.390728 10.4371 0.692352 10.4282L23.4064 10.4282L14.9484 1.97122C14.7308 1.75362 14.6085 1.45842 14.6085 1.15072C14.6085 0.843018 14.7308 0.547817 14.9484 0.330217C15.166 0.112617 15.4611 -0.00968241 15.7689 -0.00968239C16.0766 -0.00968236 16.3708 0.112617 16.5884 0.330217Z'
                              fill='currentColor'
                            ></path>
                          </g>
                          <defs>
                            <clipPath id='clip0_658_8206'>
                              <rect
                                width='23'
                                height='27'
                                fill='white'
                                transform='translate(27) rotate(90)'
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className='col-md-5'>
                <div className='post-list-vertical'>
                  <a href='#'>
                    <div className='post-single-box'>
                      <div className='post-thumb'>
                        <div className='thumb media-cover br-25'>
                          <img src={helpImage} alt='' />
                        </div>
                      </div>
                      <div className='post-content'>
                        <span className='post-tag'>PODCAST</span>
                        <h4>Responding to "Sound of Freedom"</h4>
                        <h6>Monday, 12 July 2023</h6>
                      </div>
                    </div>
                  </a>
                  <a href='#'>
                    <div className='post-single-box theme-optional-primary'>
                      <div className='post-thumb'>
                        <div className='thumb media-cover br-25'>
                          <img src={helpImage} alt='' />
                        </div>
                      </div>
                      <div className='post-content'>
                        <span className='post-tag'>BLOG</span>
                        <h4>Reaching the Least Reached in Chad</h4>
                        <h6>Monday, 12 July 2023</h6>
                      </div>
                    </div>
                  </a>
                  <a href='#'>
                    <div className='post-single-box theme-optional-secondary'>
                      <div className='post-thumb'>
                        <div className='thumb media-cover br-25'>
                          <img src={helpImage} alt='' />
                        </div>
                      </div>
                      <div className='post-content'>
                        <span className='post-tag'>APPEAL</span>
                        <h4>A Journey to Healing</h4>
                        <h6>Monday, 12 July 2023</h6>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className='cta-btn d-md-none d-block text-center mt-4'>
              <a href='#' className='btn-default'>
                Discover more stories
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='two-column-image-form-grid-block'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-5'>
              <div className='grid-thumb media-cover br-25'>
                <img src={communityImage} alt='' />
              </div>
            </div>
            <div className='col-md-7'>
              <div className='form-grid'>
                <div className='section-title'>
                  <h1>Join our Community</h1>
                  <p>Don’t miss our special SIM mission and project updates</p>
                </div>
                <div className='grid-form'>
                  <form action=''>
                    <div className='form-group'>
                      <label for=''>YOUR NAME</label>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='input-field'>
                            <input
                              type='text'
                              name=''
                              id=''
                              placeholder='First name'
                            />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='input-field'>
                            <input
                              type='text'
                              name=''
                              id=''
                              placeholder='Last name'
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='form-group'>
                      <label for=''>YOUR EMAIL</label>
                      <div className='input-field'>
                        <input
                          type='text'
                          name=''
                          id=''
                          placeholder='you@example.com'
                        />
                      </div>
                    </div>
                    <div className='btn-submit'>
                      <button
                        style={{ backgroundImage: `url(${btnArrowLight})` }}
                        type='button'
                        className='btn-default btn-accent'
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className='site-footer'>
        <div className='container'>
          <div className='footer-blocks-flex text-light'>
            <div className='footer-top'>
              <div className='row align-items-center'>
                <div className='col-md-6'>
                  <div className='footer-logo'>
                    <img src={simLogoWhite} alt='' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='footer-social'>
                    <ul className='list-unstyled mb-0'>
                      <li>
                        <a href='#'>
                          <i className='fa-brands fa-facebook-f'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa-brands fa-instagram'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa-brands fa-linkedin-in'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa-solid fa-rss'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa-brands fa-youtube'></i>
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          <i className='fa-brands fa-vimeo-v'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='footer-middle'>
              <div className='row'>
                <div className='col-lg-3 col-6'>
                  <div className='footer-contact-info'>
                    <div className='icon'>
                      <img src={callOutlineIcon} alt='' />
                    </div>
                    <div className='info-data'>
                      <div className='data-single'>
                        <h6>Within Australia</h6>
                        <p>
                          <a href='#'>1300 746 580</a>
                        </p>
                      </div>
                      <div className='data-single'>
                        <h6>International Call</h6>
                        <p>
                          <a href='#'> +61 2 9580 1422</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 col-6'>
                  <div className='footer-contact-info'>
                    <div className='icon'>
                      <img src={envelopOutlineBold} alt='' />
                    </div>
                    <div className='info-data'>
                      <div className='data-single'>
                        <h6>Postal Address</h6>
                        <p>PO Box 42</p>
                        <p>Penshurst NSW 2222</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 d-lg-block d-none'>
                  <div className='footer-nav-list text-end'>
                    <div className='list-title'>
                      <h6>GET INVOLVED</h6>
                    </div>
                    <ul>
                      <li>
                        <a href='#'>Explore Mission</a>
                      </li>
                      <li>
                        <a href='#'>Donate</a>
                      </li>
                      <li>
                        <a href='#'>Pray</a>
                      </li>
                      <li>
                        <a href='#'>About Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-3 d-lg-block d-none'>
                  <div className='footer-nav-list text-end'>
                    <div className='list-title'>
                      <h6>MORE</h6>
                    </div>
                    <ul>
                      <li>
                        <a href='#'>Site Credits</a>
                      </li>
                      <li>
                        <a href='#'>Contact Us</a>
                      </li>
                      <li>
                        <a href='#'>Site Map</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='footer-bottom'>
              <div className='row align-items-center'>
                <div className='col-lg-6 d-lg-block d-none'>
                  <div className='copyright-nav-col'>
                    <div className='text'>
                      <p>&copy; 2023 SIM Australia</p>
                    </div>
                    <ul>
                      <li>
                        <a href='#'>Terms & Conditions</a>
                      </li>
                      <li>
                        <a href='#'>Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='company-number-info'>
                    <div className='sponsor-log'>
                      <img src={registerCharitySold} alt='' />
                    </div>
                    <div className='info-list'>
                      <ul className='list-unstyled'>
                        <li>
                          <b>ACN</b> 002 679 441
                        </li>
                        <li>
                          <b>ABN</b> 46 002 679 441
                        </li>
                        <li className='d-lg-none'>&copy; 2023 SIM Australia</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {open && (
        <>
          <div className='popup-overlay'></div>
          <MissionWorkerDetailPopup
            singleWorker={singleWorker}
            closePopup={closePopup}
          />
        </>
      )}
    </>
  );
};

export default Home;
