import React, { useState, useRef } from 'react';
import btnArrowLight from './images/btn-arrow-light.svg';
import btnArrowDark from './images/btn-arrow.svg';
import playVideoBtn from './images/play_vdo.svg';

import searchIcon from './images/search-icon.svg';

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
      <section ref={sectionRef} className='index-communities-wrapper layout-secondary'>
        <div className='custom-shape-divider'>
          <svg
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='__web-inspector-hide-shortcut__'
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
                    href="javascript:void(0);"
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
      <section className='icon-content-grid-block'>
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
                    <a href="javascript:void(0);">
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
                    <a href="javascript:void(0);">
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
                    <a href="javascript:void(0);">
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
              href="javascript:void(0);"
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
              href="javascript:void(0);"
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
                    href="javascript:void(0);"
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
                <a href="javascript:void(0);">
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
                  <a href="javascript:void(0);">
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
                  <a href="javascript:void(0);">
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
                  <a href="javascript:void(0);">
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
              <a href="javascript:void(0);" className='btn-default'>
                Discover more stories
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}

      <section className="inner-page-map-wrapper bg-gray-secondary ">
        <div className="custom-shape-divider">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M412.367 32.9358C382.209 41.0326 352.057 49.1279 321.39 54.8329C213.613 74.6574 102.466 64.5971 0 25.7429V118.393H1200V94.2229C1132.19 117.313 1055.71 109.703 985.66 91.2229C950.293 81.8964 914.144 68.5263 877.827 55.0945C833.034 38.5274 787.987 21.8663 743.84 12.5829C661.58 -4.75711 575.78 -3.74711 493.39 12.9729C466.132 18.5009 439.247 25.7189 412.367 32.9358Z" fill="currentColor"></path>
            </svg>
        </div>
        <div className="container">
            <div className="section-title text-center">
              <h2>Our Reach</h2>
            </div>
            <div className="map-frame">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 408" fill="none">
              <g id="Frame" clip-path="url(#clip0_834_8758)">
                <g id="Asia" data-area="asia">
                <path id="Vector" d="M416.642 118.458C415.066 118.925 413.462 119.391 411.887 119.829C412.558 122.892 413.229 125.955 413.9 129.018C411.508 128.551 408.736 124.35 406.403 127.938C408.416 131.264 405.469 125.225 408.999 126.946C409.874 128.843 412.12 129.659 410.516 130.155C410.283 130.651 408.678 129.922 407.949 129.951C407.424 128.317 407.22 133.743 409.291 132.314C410.312 133.801 407.949 133.481 410.224 134.356C411.012 135.843 412.062 140.248 411.303 140.131C407.453 141.59 402.611 139.84 400.481 136.66C400.219 134.677 401.065 134.181 401.648 131.468C404.711 131.905 398.935 130.068 399.081 128.084C398.002 127.501 396.689 130.622 395.289 128.113C392.956 126.451 394.385 128.813 394.764 129.455C392.839 128.668 389.251 128.872 388.463 129.893C388.93 131.73 389.863 132.022 391.089 133.101C388.493 134.472 394.618 140.744 391.293 139.402C388.609 138.585 386.188 139.519 383.125 139.927C380.967 141.473 376.066 139.14 375.629 141.356C374.462 142.261 373.966 143.778 374.578 146.199C373.382 148.824 372.303 152.295 371.953 154.891C372.449 156.321 373.382 158.508 373.528 159.092C371.866 162.855 376.474 163.817 377.612 167.464C378.983 171.635 383.767 173.414 383.563 178.227C384.321 182.224 388.872 183.945 389.98 188.028C393.014 189.983 391.701 193.687 392.664 195.35C393.451 198.15 393.218 202.672 397.244 201.067C399.227 198.851 403.544 198.88 406.082 197.042C408.591 194.796 413.375 195.292 413.9 191.616C416.204 190.041 419.675 191.295 420.2 188.145C422.826 188.583 422.301 184.878 424.897 185.141C424.284 183.449 424.663 180.823 426.268 181.494C427.434 179.102 430.176 176.594 426.851 174.785C424.517 172.918 419.821 172.131 420.404 168.31C421.017 164.313 417.546 171.052 416.204 172.072C415.387 172.831 410.049 172.16 410.574 172.393C408.561 171.489 411.741 167.493 408.824 167.639C408.007 168.251 408.999 172.189 407.92 169.447C406.899 166.297 404.74 164.313 402.815 161.513C401.269 161.571 403.253 160.579 401.473 159.179C400.831 159.033 402.115 157.925 401.181 157.254C403.428 158.771 402.932 154.804 404.594 157.342C408.066 157.283 407.803 163.584 411.858 163.847C414.25 166.939 417.721 166.034 420.696 164.692C421.688 168.98 426.326 169.097 430.031 169.505C432.393 169.943 435.165 169.826 437.002 169.068C438.286 170.206 441.64 168.922 442.049 168.835C441.436 168.397 444.003 170.789 444.586 171.781C444.791 173.443 446.541 173.21 446.628 172.948C448.204 171.46 450.683 172.247 452.725 171.635C451.646 169.214 450.712 167.172 448.583 165.655C448.437 163.146 450.216 162.301 451.879 163.001C454.825 161.688 455.788 157.779 457.275 155.475C458.325 154.395 456.634 152.47 458.792 151.712C456.692 151.158 454.883 148.97 455.438 147.365C452.871 145.674 457.188 145.586 458.821 145.936C460.922 145.353 463.664 143.165 459.784 143.223C458.063 142.727 456.955 139.46 454.621 139.81C454.942 139.344 455.7 138.294 454.329 136.748C453.337 135.26 451.121 136.164 451.004 133.685C448.554 134.793 447.095 133.335 444.995 133.626C443.536 133.801 440.444 132.985 443.274 131.818C445.082 132.664 447.445 131.439 448.466 130.943C450.362 130.097 445.053 128.755 445.695 129.018C444.586 129.98 440.999 127.909 444.499 126.801C441.961 126.509 440.211 130.214 439.365 130.651C438.49 128.347 435.077 130.447 434.61 127.355C433.444 125.313 431.518 122.163 428.135 123.388C425.247 124.175 423.409 122.542 421.455 120.704C420.755 123.242 417.342 122.133 416.583 120.325C416.262 119.8 417.079 118.75 416.729 118.487L416.642 118.458ZM401.561 158.129C402.377 159.588 401.852 156.35 401.561 158.129ZM417.137 118.575C417.721 120.471 417.283 120.179 418.1 121.375C418.333 121.112 419.325 119.041 417.137 118.575ZM391.614 129.513C392.576 130.184 391.964 129.484 391.614 129.513ZM443.507 129.688C443.741 129.834 442.836 130.301 443.507 129.688ZM392.693 130.155C393.043 130.184 392.605 130.564 392.693 130.155ZM441.582 130.33C442.136 130.301 441.29 130.505 441.582 130.33ZM444.441 131.76C444.791 131.73 444.499 131.847 444.441 131.76ZM393.101 140.919C393.772 141.59 392.956 141.181 393.101 140.919ZM374.199 153.608C374.228 153.695 373.937 153.666 374.199 153.608ZM373.703 159.121C375.57 159.704 375.395 159.471 373.703 159.121ZM399.606 159.879C401.094 161.017 400.89 160.084 399.606 159.879ZM405.236 164.138C406.228 164.167 404.915 164.517 405.236 164.138ZM419.588 165.013C418.8 166.793 416.321 166.063 419.588 165.013ZM413.229 165.451C413.929 165.276 413.579 165.713 413.229 165.451ZM415.008 166.18C415.358 166.238 414.833 166.413 415.008 166.18ZM407.599 166.968C408.62 168.63 407.132 167.989 407.599 166.968ZM415.125 171.985C416.204 172.043 414.25 172.452 415.125 171.985ZM410.924 172.977C412.47 174.785 411.974 174.464 410.924 172.977ZM426.851 180.911C427.055 182.632 425.801 182.428 426.851 180.911ZM390.184 190.362C390.651 190.887 389.601 190.566 390.184 190.362ZM389.98 190.683C391.118 192.112 390.972 190.858 389.98 190.683ZM392.43 197.713C392.722 198.384 391.847 197.684 392.43 197.713ZM393.247 201.038C390.943 201.476 388.522 206.522 392.926 205.297C395.143 203.284 390.184 204.51 393.335 203.168C394.531 202.818 393.656 201.563 393.247 201.038ZM416.292 201.067C420.93 200.601 415.737 203.664 416.292 201.067ZM413.52 202.322C414.22 202.672 412.733 202.234 413.52 202.322Z" fill="#213B84"/>
                <path id="Vector_2" d="M532.884 98.856C528.275 98.6518 532.126 105.565 527.4 106.849C526.467 111.662 532.826 112.887 535.13 114.491C531.426 119.363 522.616 118.458 522.091 125.284C515.849 126.713 509.256 125.984 502.956 125.197C495.576 123.563 488.429 121.2 481.253 118.867C478.307 114.52 469.76 106.499 467.572 114.841C462.438 114.229 466.201 120.763 461.272 121.638C465.035 127.326 457.975 129.747 454.008 132.139C448.204 133.277 456.109 136.835 456.575 140.161C461.213 142.29 463.314 145.703 456.75 146.403C453.017 147.22 459.872 153.491 456.371 156.992C453.862 161.046 447.008 165.509 452.258 170.323C450.479 173.181 444.557 172.219 449.283 175.311C449.72 178.286 455.379 181.699 456.429 177.732C457.859 184.703 458.792 192.025 462.701 198.122C465.064 202.789 465.881 208.914 470.869 211.598C477.578 207.864 472.735 198.53 476.615 193.017C481.778 188.787 485.424 182.282 490.15 177.907C492.571 177.673 496.713 178.753 494.846 174.173C498.813 176.944 500.126 181.961 503.685 184.149C505.085 184.82 506.018 192.404 506.485 192.463C507.01 194.825 513.632 186.249 513.457 194.038C515.528 199.317 517.482 204.276 516.17 210.023C516.345 213.465 521.887 219.007 524.454 218.132C523.404 215.186 519.874 215.04 519.962 211.248C516.199 208.944 518.678 200.251 520.72 199.493C523.229 201.914 526.087 203.839 528.45 206.464C532.563 206.989 529.471 214.778 533.351 208.769C537.172 205.677 542.218 202.147 538.572 196.225C536.122 190.829 527.021 187.504 531.484 180.59C537.435 179.219 526.496 174.844 532.388 177.907C535.48 176.915 537.93 178.548 538.835 180.999C541.985 177.732 545.485 174.669 550.182 175.369C555.607 172.306 557.066 166.355 559.72 161.367C557.999 157.517 557.649 154.687 553.945 152.033C561.179 153.958 550.386 146.52 550.969 143.107C550.678 141.298 554.849 137.04 549.569 139.198C544.815 139.636 539.71 131.993 547.206 131.906C550.999 137.069 556.687 128.493 558.583 135.785C555.987 138.352 565.875 137.39 562.725 140.54C565.263 143.165 564.358 148.153 569.084 144.915C574.568 138.819 556.308 135.289 564.504 129.922C564.592 125.809 563.075 124.846 563.513 120.529C567.888 117.554 564.767 110.553 559.37 113.003C552.399 111.137 546.798 106.324 541.343 101.802C538.951 99.8186 535.714 99.7603 532.855 98.856M506.514 192.492C506.252 191.792 505.989 194.184 506.514 192.492ZM582.356 118.721C586.09 121.259 582.123 127.501 586.265 128.172C581.656 123.971 595.891 127.938 592.566 123.3C589.328 121.375 585.419 121.084 582.356 118.75V118.721ZM562.404 124.992C561.908 126.83 563.046 126.451 562.404 124.992ZM561.937 126.538C560.129 126.976 561.5 127.909 561.937 126.538ZM558.641 127.997C559.429 128.988 562.229 128.259 558.641 127.997ZM587.519 128.639C584.661 130.301 590.874 138.731 584.865 139.781C584.136 137.973 583.844 146.17 580.081 143.603C576.202 143.69 572.876 149.466 578.943 146.461C582.561 144.361 585.419 149.612 588.103 145.382C596.854 146.403 591.866 136.252 590.261 131.847C589.532 130.622 588.628 129.514 587.519 128.609M575.268 147.57C570.834 149.612 580.11 158.334 578.302 150.137C577.981 148.707 576.61 147.832 575.268 147.57ZM557.445 128.639C555.607 130.622 556.745 131.556 557.445 128.639ZM564.942 145.966C565.613 146.199 564.125 146.578 564.942 145.966ZM581.306 146.491C586.324 153.258 574.072 149.378 581.306 146.491ZM567.042 148.474C567.684 148.999 564.971 149.612 567.042 148.474ZM575.239 165.539C575.122 168.514 573.985 166.209 575.239 165.539ZM561.85 169.272C556.92 170.935 562.258 181.757 562.492 173.765C562.404 172.423 563.688 169.972 561.85 169.272ZM498.172 174.61C496.918 174.698 498.434 175.369 498.172 174.61ZM495.78 175.602C496.392 176.39 495.692 178.811 495.78 175.602ZM500.126 177.119C500.009 177.848 500.622 177.498 500.126 177.119ZM500.506 178.753C500.243 179.394 500.943 179.394 500.506 178.753ZM540.906 181.553C535.889 181.436 537.493 184.674 541.402 182.457L540.906 181.553ZM563.279 186.045C561.937 190.654 562.025 196.313 566.692 198.647C569.23 198.297 575.297 201.826 569.843 198.092C562.754 197.246 571.068 187.183 563.309 186.045H563.279ZM535.422 194.884C534.839 195.35 535.772 195.759 535.422 194.884ZM572.264 197.713C572.935 199.405 572.089 198.763 572.264 197.713ZM564.884 198.734C563.163 200.047 568.88 203.051 565.292 199.405L564.884 198.734ZM503.51 199.026C503.802 202.672 503.043 201.739 503.51 199.026ZM572.555 199.638C573.08 199.668 572.205 199.813 572.555 199.638ZM568.18 201.009C568.938 201.826 567.567 201.622 568.18 201.009ZM574.043 201.184C571.855 203.401 576.406 210.169 575.589 203.576L574.801 202.38L574.014 201.184M571.039 201.33C573.839 202.585 569.668 203.81 571.039 201.33ZM514.799 201.651C515.236 201.505 514.565 202.293 514.799 201.651ZM515.003 201.972C515.615 202.089 514.828 202.38 515.003 201.972ZM524.425 202.264C525.183 202.643 524.133 202.876 524.425 202.264ZM515.878 202.409C516.87 202.555 515.703 203.372 515.878 202.409ZM568.151 202.876C571.593 206.202 567.363 205.968 568.151 202.876ZM515.878 203.197C516.666 203.985 515.761 203.868 515.878 203.197ZM526.058 204.101C526.467 203.955 526.087 204.831 526.058 204.101ZM562.725 204.451C562.025 207.485 555.695 213.902 561.208 208.943C562.404 207.66 563.717 206.231 562.725 204.451ZM572.672 204.801C572.409 209.264 571.33 207.514 572.672 204.801ZM532.272 205.122C531.367 205.239 533.409 205.443 532.272 205.122ZM515.44 205.21C516.316 205.822 515.12 205.852 515.44 205.21ZM530.842 205.239C530.055 205.997 531.746 205.326 530.842 205.239ZM570.98 205.356C572.643 212.59 567.334 207.835 570.98 205.356ZM528.538 206.522C529.763 208.156 527.371 206.931 528.538 206.522ZM573.605 207.281C572.614 207.864 572.555 209.06 573.605 207.281ZM515.878 207.485C515.936 208.36 515.295 207.485 515.878 207.485ZM475.448 208.098C474.777 210.11 475.448 221.224 479.678 215.653C479.97 213.027 477.549 209.614 475.448 208.098ZM576.406 208.389C576.231 213.115 568.588 210.985 569.667 214.69C574.189 211.481 575.297 221.778 578.652 215.244C579.002 212.765 578.885 209.76 576.435 208.389M519.874 208.71C519.903 209.235 519.903 209.206 519.874 208.71ZM565.234 219.357C564.475 220.582 564.563 219.62 565.234 219.357Z" fill="#213B84"/>
                <path id="Vector_3" d="M385.663 38.7949C384.467 39.1158 384.03 39.2325 385.663 38.7949ZM390.972 38.9699C393.743 38.9991 388.289 39.2033 390.972 38.9699ZM384.292 39.2616C387.297 40.0492 379.479 39.1158 384.292 39.2616ZM383.417 39.495C386.422 39.5242 378.663 40.2534 383.417 39.495ZM387.589 39.67C388.289 39.6409 386.947 39.7575 387.589 39.67ZM436.04 39.67C432.598 40.0492 432.481 41.7994 433.765 41.4494C432.54 41.5369 433.619 42.7037 435.369 41.9453C435.077 41.5369 443.712 41.3035 437.236 39.9909C436.828 39.8742 436.448 39.7575 436.04 39.67ZM429.477 39.7284C432.86 39.9617 425.655 39.7867 429.477 39.7284ZM384.526 39.8159C383.796 39.8742 383.33 39.9034 384.526 39.8159ZM386.363 39.8159C387.268 39.8159 386.538 39.8159 386.363 39.8159ZM394.123 39.845C397.069 40.4868 387.414 40.7785 394.123 39.845ZM385.517 39.9326C385.605 40.1367 385.051 39.845 385.517 39.9326ZM385.517 39.9909C385.197 39.9326 384.351 40.3701 385.517 39.9909ZM389.747 39.9617C388.434 40.1076 386.743 40.2826 389.747 39.9617ZM381.084 39.9909C379.217 40.7201 389.076 40.5743 382.805 40.0201C384.613 40.3993 382.688 40.0784 381.084 39.9909ZM383.621 40.5743C382.25 40.6035 381.054 40.6326 383.621 40.5743ZM415.096 40.1951C417.692 40.5743 412.15 40.3993 415.096 40.1951ZM390.214 40.2534C392.548 41.7994 382.921 40.4576 390.214 40.2534ZM374.52 40.2826C369.416 41.5661 372.362 41.6828 376.066 40.8368C377.321 40.7785 374.637 40.1367 374.52 40.2826ZM385.984 40.3118C385.284 40.4284 385.051 40.4868 385.984 40.3118ZM380.53 40.3409C384.322 40.3993 379.217 40.5451 380.53 40.3409ZM372.245 40.4284C367.053 40.9535 366.907 40.7493 372.245 40.4284ZM385.168 40.691C384.963 40.7785 384.03 40.8368 385.168 40.691ZM379.158 40.7785C379.421 41.216 378.779 40.7201 379.158 40.7785ZM381.288 40.8952C381.142 40.9535 380.53 41.4786 381.288 40.8952ZM385.08 40.9243C390.768 41.0994 382.601 41.8869 385.08 40.9243ZM383.855 41.1285C384.788 41.0994 381.988 41.9745 383.855 41.1285ZM378.984 41.1577C381.667 41.0702 376.533 41.7411 378.984 41.1577ZM440.591 41.5369C435.165 41.6536 435.69 43.0246 440.999 43.5788C445.054 44.6873 448.291 43.1413 443.333 41.9453C441.787 41.9161 441.991 42.237 440.591 41.5369ZM387.88 41.5952C389.251 41.3911 386.48 42.1495 387.88 41.5952ZM376.183 41.7119C377.758 41.5661 375.454 42.0328 376.183 41.7119ZM386.889 41.8869C387.472 41.8869 387.005 41.8869 386.889 41.8869ZM432.919 42.2662C434.173 42.412 433.298 42.4995 432.919 42.2662ZM412.004 42.4412C414.863 42.7329 414.425 42.8204 412.004 42.4412ZM449.4 42.8204C445.433 46.35 451.821 45.0956 454.388 44.7456C455.088 42.9954 449.983 44.8915 449.4 42.8204ZM457.159 44.8915C457.276 45.4165 456.372 44.6581 457.159 44.8915ZM458.53 45.0373C460.805 45.6207 456.167 45.154 458.53 45.0373ZM455.088 45.9707C448.787 49.5295 441.32 49.3836 434.436 51.2797C438.87 53.2924 430.148 52.709 429.943 55.8885C429.943 56.997 425.364 59.3889 423.409 57.5804C417.605 55.3051 421.368 59.9432 424.489 61.6642C428.397 63.2394 426.064 69.3651 421.951 68.0233C417.575 68.7233 418.392 68.4025 422.418 67.5857C420.959 63.2394 419.209 59.0389 415.738 55.8594C410.75 55.3635 410.837 59.2431 412.792 62.5976C417.284 66.1564 409.029 62.3351 406.899 62.4518C402.786 60.089 401.94 65.5146 397.594 64.0853C393.481 64.6395 389.076 62.5976 385.634 65.748C382.221 69.5693 380.296 64.5229 376.504 64.7854C374.316 64.8146 379.334 70.4735 372.858 70.4152C368.336 70.6777 367.928 74.9366 365.507 73.1572C362.882 72.1362 357.923 69.1026 357.719 67.7899C361.89 68.2275 366.09 68.665 370.262 69.0734C368.832 65.1354 365.594 63.7644 361.686 63.3561C357.894 61.8684 354.102 62.2184 350.397 63.7936C351.651 67.9358 353.606 72.778 356.173 76.6868C352.001 79.5746 354.306 82.5499 352.205 84.5627C353.401 88.4714 353.081 93.4012 357.544 95.093C362.007 96.2307 361.015 101.131 364.428 102.648C369.153 104.982 373.791 107.432 378.254 110.174C376.125 112.916 375.6 117.116 374.025 119.012C377.554 122.192 383.009 122.221 387.326 124.117C390.185 124 395.756 129.105 396.106 126.947C396.077 123.913 392.868 119.129 395.173 117.146C397.973 116.241 398.673 115.045 402.145 114.987C405.412 113.558 407.133 120.675 403.953 118.75C401.269 119.888 403.02 121.171 401.065 121.492C402.32 123.855 406.374 124.759 406.082 126.684C407.045 127.122 411.362 126.422 413.579 128.959C414.046 126.276 410.4 120.967 412.85 119.421C417.021 118.371 419.997 115.804 420.988 120.092C422.709 122.863 425.86 123.796 429.068 123.3C432.919 122.6 433.59 126.626 435.369 128.755C438.753 129.426 439.686 131.672 441.495 127.88C443.945 126.101 444.995 124.146 448.671 126.101C448.175 121.988 453.717 126.042 456.109 124.934C459.055 123.971 463.664 128.814 462.176 124.759C463.927 122.542 456.809 118.954 462.526 118.983C466.756 121.521 461.039 112.478 466.26 114.812C470.811 115.687 466.523 110.495 470.286 109.678C472.59 111.37 476.411 112.099 478.657 114.199C480.903 116.504 480.641 120.413 485.075 119.8C489.013 120.15 492.338 122.309 494.788 125.313C498.464 125.809 502.314 125.167 505.844 126.13C508.586 126.976 512.174 128.93 514.828 127.209C517.774 125.43 522.325 127.384 524.017 123.796C524.192 121.638 522.062 118.458 527.05 120.354C529.967 118.837 530.755 116.65 533.847 115.629C539.419 116.329 534.022 111.982 531.455 112.508C527.634 114.054 525.854 111.662 526.613 107.869C520.808 106.849 525.038 107.461 528.626 108.336C532.155 106.148 528.188 99.731 530.201 99.8477C537.668 102.59 545.573 104.427 551.962 109.415C554.966 111.982 558.321 113.062 562.2 111.895C566.051 114.141 563.63 117.408 562.288 120.471C563.484 125.78 565.234 124.759 568.822 121.9C573.518 120.763 572.935 116.854 572.41 112.974C572.672 108.832 571.622 105.04 569.172 101.685C567.509 97.66 561.734 99.9061 558.612 97.4266C554.47 96.7557 553.333 92.2635 556.075 89.3174C557.941 86.5462 561.208 83.8334 564.796 84.8835C569.026 84.446 573.839 87.6547 577.135 83.8917C579.79 81.3831 582.123 78.0869 586.207 79.6038C586.47 77.416 592.129 76.5992 589.737 81.9082C589.97 85.1461 586.266 89.2882 589.007 91.7968C592.916 95.9098 596.825 99.9936 600.734 104.107C602.747 100.781 603.884 98.2725 601.201 94.743C599.713 90.3091 596.329 87.0713 593.296 83.6584C597.525 83.2208 602.222 82.8125 605.897 80.8289C606.335 77.766 616.165 78.8745 612.343 76.6576C609.164 74.8199 606.014 72.953 602.338 72.3696C609.047 73.8573 602.805 68.5483 608.551 70.7069C612.548 71.407 616.515 72.3113 620.424 73.3614C622.291 70.036 618.119 68.1691 614.502 68.3733C607.268 67.3232 600.53 64.1728 593.237 63.2102C588.453 61.9851 583.611 61.1975 578.652 61.4308C583.669 65.6313 575.735 62.831 573.081 62.8893C559.692 60.9641 546.128 59.6515 533.001 56.4719C528.655 57.2012 531.805 55.3635 525.65 55.801C519.379 54.5176 527.196 59.8848 520.05 57.9888C516.17 56.7636 512.495 61.4308 509.082 58.3388C503.889 55.4802 498.026 53.1174 492.076 54.7217C488.925 55.3051 486.533 54.3717 482.77 54.2842C477.695 53.3216 472.736 54.0217 467.719 54.8676C468.71 54.7509 475.478 49.0628 469.936 49.1503C464.714 48.8877 460.076 46.6125 455.001 45.9124M459.434 46.35C460.251 46.525 458.588 46.525 459.434 46.35ZM460.572 46.5833C462.176 46.525 460.63 47.1667 460.572 46.5833ZM434.815 46.6125C436.011 46.7292 433.648 46.9334 434.815 46.6125ZM445.258 46.8458C444.091 47.8376 443.157 46.875 445.258 46.8458ZM434.115 46.9042C434.727 46.6708 433.969 47.5459 434.115 46.9042ZM435.632 46.9334C436.857 47.1667 435.894 46.875 435.632 46.9334ZM403.282 47.1375C398.79 49.0336 393.627 48.3043 389.193 50.6379C388.755 52.7674 387.793 53.6133 387.209 54.4884C383.301 55.6552 386.188 59.1848 389.397 59.3014C394.298 61.0516 395.144 59.1848 390.622 56.5595C389.922 54.1675 392.489 52.5923 395.202 51.2213C398.294 49.4128 402.086 49.3545 405.47 48.3335C404.74 47.9835 404.157 47.1084 403.282 47.1375ZM445.316 47.3126C446.074 47.4584 444.499 47.3417 445.316 47.3126ZM447.27 47.6334C448.087 47.8376 446.512 47.6334 447.27 47.6334ZM522.908 47.6334C522.179 47.8376 522.062 47.8668 522.908 47.6334ZM444.149 47.7501C445.024 48.071 443.303 47.7793 444.149 47.7501ZM444.791 47.7501C445.783 47.7793 444.966 47.896 444.791 47.7501ZM446.104 47.7501C445.491 47.8376 445.053 47.896 446.104 47.7501ZM469.381 47.9251C471.394 48.5085 468.594 47.9835 469.381 47.9251ZM471.219 48.2752C472.502 48.246 471.073 48.7419 471.219 48.2752ZM447.533 48.4502C448.35 48.5085 447.154 49.1503 447.533 48.4502ZM446.774 48.4794C448.816 49.4128 443.041 48.3043 446.774 48.4794ZM444.441 48.596C445.374 48.8586 443.682 48.7419 444.441 48.596ZM529.88 48.7127C530.346 49.0044 529.88 48.8294 529.88 48.7127ZM509.577 48.7711C507.127 50.988 514.653 52.0381 516.52 51.2213C523.9 52.0673 515.557 49.5878 517.278 50.2004C523.171 51.9798 520.137 48.6544 516.024 49.4711C512.524 48.596 514.77 50.6088 509.577 48.8002V48.7711ZM448.583 48.9169C447.97 49.0628 447.533 49.1503 448.583 48.9169ZM426.997 49.0919C429.302 49.267 426.355 49.3253 426.997 49.0919ZM425.684 49.2086C426.822 49.3836 426.53 49.3545 425.684 49.2086ZM506.048 49.4711C507.127 49.7337 506.923 50.7838 506.048 49.4711ZM523.054 49.967C523.725 51.6881 533.118 51.5714 528.83 50.6671C526.904 50.4338 524.921 50.5213 523.054 49.967ZM426.91 50.0254C428.602 50.988 425.918 50.4338 426.91 50.0254ZM435.077 51.2213C435.194 51.1338 435.136 51.4839 435.077 51.2213ZM433.181 51.3672C434.727 51.7172 431.606 51.4547 433.181 51.3672ZM423.993 51.7172C424.897 51.9506 424.78 52.0964 423.993 51.7172ZM473.757 51.8923C473.232 53.2924 478.074 52.359 474.632 51.9798L474.048 51.9214L473.786 51.8923M432.539 51.9798C433.385 52.3006 431.723 52.0673 432.539 51.9798ZM480.145 52.2715C480.787 52.3881 480.057 52.5632 480.145 52.2715ZM517.687 52.3881C519.787 53.8175 516.461 52.7674 517.687 52.3881ZM509.869 52.5048C512.524 53.2341 511.998 53.0882 509.869 52.5048ZM429.827 52.6507C430.789 53.1466 429.039 52.6215 429.827 52.6507ZM430.906 52.6507C432.802 52.9424 428.922 52.8549 430.906 52.6507ZM432.569 52.9132C433.706 53.2632 431.168 52.8549 432.569 52.9132ZM520.254 53.1757C515.907 54.6634 529.121 54.9843 522.529 53.8175C521.77 53.6133 521.012 53.3799 520.254 53.1757ZM420.667 53.8175C419.821 54.1383 419.588 54.2259 420.667 53.8175ZM421.134 53.8758C423.351 54.3134 420.405 53.9342 421.134 53.8758ZM499.718 53.905C501.906 54.0508 498.697 53.9633 499.718 53.905ZM412.587 53.9633C417.4 54.8384 409.233 55.276 412.587 53.9633ZM388.347 54.1675C388.551 54.4009 389.98 54.1383 388.347 54.1675ZM421.805 54.6051C422.913 54.5759 420.58 54.6926 421.805 54.6051ZM418.946 54.7217C421.28 55.1301 417.05 55.276 418.946 54.7217ZM426.151 54.8676C428.572 55.4802 424.926 55.7427 426.151 54.8676ZM503.072 55.101C504.064 55.1301 503.247 55.2176 503.072 55.101ZM424.693 55.7427C427.96 55.9177 421.396 56.8512 424.693 55.7427ZM521.245 57.6387C522.062 57.8138 520.429 57.7263 521.245 57.6387ZM587.607 57.8138C583.465 60.3807 596.183 59.0972 589.795 58.0471C589.066 57.9304 588.366 57.7263 587.607 57.8138ZM520.166 57.8429C522.47 58.4555 517.862 57.9596 520.166 57.8429ZM386.917 58.3388C388.259 59.1264 387.034 59.4181 386.917 58.3388ZM558 59.2139C559.021 59.564 558.612 59.4181 558 59.2139ZM397.506 60.3224C397.74 62.656 402.232 61.1391 397.652 60.3516L397.506 60.3224ZM573.431 61.0808C578.827 62.5393 572.993 61.6642 573.431 61.0808ZM411.8 62.0434C412.558 62.4518 410.779 62.2476 411.8 62.0434ZM382.717 62.1893C378.604 64.0853 387.88 63.6769 383.038 62.2768L382.717 62.1893ZM398.381 62.5393C399.431 63.0644 399.286 62.9769 398.381 62.5393ZM410.166 63.0352C411.683 63.5019 411.595 63.5019 410.166 63.0352ZM393.16 63.4144C393.977 63.4727 392.401 63.4727 393.16 63.4144ZM427.61 63.6186C432.802 64.1437 431.664 68.2275 427.697 63.7061L427.61 63.6186ZM599.479 64.2895C601.842 64.9021 600.88 64.6687 599.479 64.2895ZM386.626 64.377C388.347 64.2312 384.992 64.7562 386.626 64.377ZM421.309 67.8482C422.272 68.8984 418.042 68.7233 421.309 67.8482ZM363.669 71.5237C364.515 71.5528 362.823 71.6403 363.669 71.5237ZM362.911 71.6112C364.398 72.5446 361.919 71.582 362.911 71.6112ZM620.803 72.2529C622.553 72.1946 620.161 73.0405 620.803 72.2529ZM363.056 76.9785C368.949 79.2245 362.969 82.6666 364.048 77.9994C364.661 77.5035 363.202 77.2993 363.056 76.9785ZM596.854 85.0877C599.334 87.188 593.324 86.4587 596.854 85.0877ZM503.831 93.197C504.56 96.8432 506.748 101.16 501.76 102.386C500.039 103.844 504.444 97.0474 503.598 94.5096C503.685 94.0721 503.743 93.6345 503.831 93.197ZM609.222 94.1888C615.056 97.3391 609.105 94.6846 609.222 94.1888ZM340.391 94.2471C339.866 94.7138 339.575 94.9763 340.391 94.2471ZM341.121 94.2763C337.941 95.6181 338.233 95.7056 338.729 96.464C342.112 97.0474 348.063 96.3765 341.121 94.2763ZM556.687 94.5388C559.75 95.9098 556.191 96.5515 556.687 94.5388ZM555.899 94.7722C557.066 95.4139 554.353 95.5597 555.899 94.7722ZM612.868 95.3264C616.194 96.7265 614.765 96.114 612.868 95.3264ZM558.437 96.2015C559.137 96.1723 558.058 96.8724 558.437 96.2015ZM567.917 96.5807C568.676 98.3017 569.726 102.736 573.081 104.136C576.173 108.365 578.477 113.237 581.948 117.087C585.128 115.279 582.648 115.687 579.469 112.157C575.093 105.915 585.653 111.982 580.752 108.92C577.223 105.857 573.839 102.619 570.805 99.381C571.126 99.0893 568.705 97.1058 567.917 96.6099M599.275 104.865C600.413 105.361 598.634 105.04 599.275 104.865ZM601.171 104.982C602.571 106.061 600.063 105.332 601.171 104.982ZM600.588 105.273C602.542 107.694 599.217 107.228 600.588 105.273ZM600.384 107.957C600.675 109.065 600.617 108.832 600.384 107.957ZM600.442 112.478C601.084 112.741 600.034 112.828 600.442 112.478ZM393.539 112.653C397.623 117.233 396.631 113.908 393.539 112.653ZM599.946 114.141C600.238 114.899 598.867 115.425 599.946 114.141ZM598.021 116.416C597.817 118.342 596.125 117.787 598.021 116.416ZM417.167 118.166C417.575 119.596 419.034 119.042 417.254 118.137ZM595.95 118.108C592.712 123.359 593.558 118.4 595.95 118.108ZM592.362 120.646C594.958 119.858 590.612 125.751 592.362 120.646Z" fill="#213B84"/>
                <circle id="Ellipse 956" cx="502.5" cy="131.5" r="7.5" fill="#031927"/>
                </g>
                <g id="South America" data-area="south-america">
                <path id="Vector_4" d="M130.372 165.276C130.751 166.939 132.56 168.601 130.635 165.48L130.372 165.276ZM129.322 165.743C131.16 165.918 125.355 166.939 129.322 165.743ZM132.093 168.893C133.727 171.052 132.822 170.789 132.093 168.893ZM128.739 169.622C130.722 171.693 127.309 172.393 128.739 169.622ZM130.372 169.972C130.547 170.235 129.847 170.264 130.372 169.972ZM134.018 170.964C134.427 173.414 134.193 172.073 134.018 170.964ZM129.322 171.985C129.847 172.744 129.001 173.998 129.322 171.985ZM136.41 172.393C136.235 172.802 136.177 172.248 136.41 172.393ZM133.843 173.531C135.389 176.711 133.843 174.902 133.843 173.531ZM119.317 174.669C117.216 174.727 113.337 176.973 113.366 178.023C114.649 177.673 120.425 174.96 119.171 176.623C122.35 177.819 125.909 178.373 128.388 180.999C128.009 183.77 129.147 182.778 133.143 182.749C137.694 182.865 132.414 180.094 131.014 179.715C129.03 178.286 127.513 177.294 124.976 176.04C123.196 175.135 121.242 174.756 119.287 174.669M136.294 175.573C136.789 176.39 136.76 175.748 136.294 175.573ZM137.023 175.981C136.469 177.819 135.652 177.206 137.023 175.981ZM126.988 176.331C127.834 176.477 126.842 176.827 126.988 176.331ZM127.513 176.565C128.155 177.469 127.98 176.565 127.513 176.565ZM138.831 176.565C139.561 177.09 139.327 176.915 138.831 176.565ZM128.009 176.915C128.33 177.673 128.213 177.411 128.009 176.915ZM128.33 177.411C128.622 178.227 128.476 177.819 128.33 177.411ZM117.158 177.819C118.587 178.577 115.7 179.628 117.158 177.819ZM138.54 179.394C136.877 180.794 136.76 180.415 138.54 179.394ZM138.656 182.515C139.24 182.574 138.569 182.778 138.656 182.515ZM137.956 182.836C136.819 183.215 141.194 187.649 136.498 186.395C133.085 185.607 135.885 188.262 138.306 187.183C141.223 189.079 140.873 187.095 143.644 187.153C146.24 186.978 149.741 185.957 145.249 184.761C146.882 184.178 141.398 182.107 140.231 183.245C139.473 183.099 138.715 182.953 137.927 182.836M137.431 185.257C138.919 185.899 137.139 186.016 137.431 185.257ZM140.056 186.103C139.706 186.016 140.027 186.278 140.056 186.103ZM150.908 186.337C148.137 189.05 157.092 187.066 152.016 186.395C151.637 186.366 151.258 186.366 150.908 186.337ZM127.28 186.395C123.984 187.416 129.351 188.845 130.401 187.737C129.701 186.716 128.418 186.512 127.28 186.395ZM104.09 186.424C102.894 189.691 99.2476 186.745 97.5558 189.05C98.11 191.529 98.8392 192.579 95.3388 193.279C92.9469 195.875 95.543 198.238 98.4017 198.296C99.7727 198.821 103.127 201.213 103.798 198.617C105.052 200.338 103.419 200.922 105.957 203.109C108.845 204.51 106.103 207.427 108.699 208.768C107.882 205.414 111.032 209.76 111.849 210.781C112.607 212.269 112.87 212.298 115.466 212.386C116.895 213.144 119.433 216.499 119.375 213.027C118.85 210.052 123.634 210.431 123.488 211.54C124.363 211.773 123.43 214.457 125.384 216.353C125.034 219.824 126.697 224.579 123.08 226.971C121.679 229.596 120.833 230.092 119.112 232.834C117.625 234.526 115.758 239.747 119.287 239.251C120.717 241.001 117.129 243.743 116.662 245.406C116.254 249.869 121.534 251.327 122.613 255.295C125.413 260.749 128.388 266.321 131.801 271.338C135.973 273.643 139.677 276.676 143.528 279.36C143.382 279.097 144.199 284.144 144.782 286.04C145.015 291.845 145.103 297.766 145.453 303.6C144.753 309.434 146.357 315.064 147.086 320.781C145.774 326.907 148.487 332.712 150.12 338.487C153.125 337.233 151.899 341.55 152.862 343.592C154.116 346.13 153.854 346.393 153.825 350.36C150.908 347.326 149.158 351.439 153.212 351.001C155.75 352.752 154.933 356.164 156.362 357.069C157.733 356.369 156.917 362.261 158.725 360.365C159.6 363.544 163.188 366.607 163.567 365.849C165.23 366.899 165.755 365.149 166.076 367.162C168.264 368.095 172.348 363.924 168.76 362.699C168.41 359.461 167.214 358.411 169.722 356.252C172.056 353.568 169.81 350.768 168.293 348.376C166.018 346.042 170.452 344.234 168.497 341.2C173.019 341.9 166.28 336.941 167.389 335.775C171.706 336.3 170.977 333.266 171.152 331.02C173.485 330.028 178.619 331.749 178.823 328.686C179.611 325.623 178.94 322.94 176.752 320.635C173.923 316.085 176.111 320.11 179.028 320.373C181.478 321.948 186.933 321.277 185.591 317.398C186.32 316.493 187.691 316.027 188.187 312.089C189.616 305.584 188.77 316.143 189.908 311.505C191.279 308.676 193.496 305.234 193.788 302.521C192.912 299.721 192.592 296.483 195.8 295.228C198.28 293.536 200.584 290.678 203.735 291.115C207.089 290.561 208.023 287.527 209.248 284.815C212.106 280.031 210.94 274.197 211.756 268.888C211.056 265.358 214.732 262.762 216.248 259.816C217.795 257.278 220.857 255.12 219.574 251.823C219.486 248.615 219.195 245.523 215.636 244.531C212.048 242.314 208.577 239.718 204.143 239.893C202.364 238.989 197.988 239.747 198.426 240.535C198.28 240.01 198.571 235.809 195.625 236.217C193.554 235.342 190.666 233.475 189.354 236.626C188.362 240.126 185.562 238.697 184.161 236.334C183.024 235.955 182.674 234.73 182.499 236.48C179.874 236.509 187.108 231.842 185.591 229.421C184.92 226.737 183.199 223.791 182.411 221.574C181.303 222.245 180.107 218.395 177.773 218.628C176.869 221.516 176.519 216.528 174.535 218.278C172.493 218.482 170.51 219.095 169.343 216.965C166.835 217.199 167.418 212.473 165.259 212.24C165.959 211.248 158.871 211.977 161.671 211.219C164.063 210.344 160.913 207.543 159.717 208.36C156.596 207.252 161.817 205.181 157.004 206.114C155.954 207.456 152.775 207.514 150.353 206.377C146.999 207.543 145.453 205.443 143.615 203.08C143.236 203.664 136.935 205.997 139.59 209.323C136.381 209.089 139.444 204.014 139.327 202.818C138.19 201.359 134.543 204.335 132.793 205.326C129.584 206.464 129.38 210.11 127.047 212.269C125.151 210.985 123.109 208.36 120.863 209.148C118.412 210.723 116.312 211.19 114.854 209.848C114.124 207.981 110.799 205.822 112.403 203.284C112.287 200.601 112.899 202.38 113.278 198.646C114.066 196.167 114.883 194.533 112.316 194.008C113.395 193.454 108.261 192.142 106.832 193.25C105.198 193.046 100.064 194.008 102.427 192.112C104.382 190.975 103.565 188.204 104.061 186.395M183.52 235.663C183.666 234.409 184.599 235.021 183.52 235.663ZM184.366 236.684C186.641 236.305 191.366 235.517 187.078 233.33C186.583 232.921 183.841 235.255 184.366 236.684ZM193.729 302.433C193.846 303.338 193.817 303.104 193.729 302.433ZM156.333 357.74C154.642 354.064 153.679 358.585 154.758 358.381C155.867 357.244 155.633 359.898 156.333 357.74ZM146.97 187.387C147.728 187.883 147.203 187.27 146.97 187.387ZM136.119 187.591C136.264 187.474 136.527 187.912 136.119 187.591ZM107.853 191.762C106.949 192.433 106.861 192.083 107.853 191.762ZM100.677 196.604C99.627 196.896 100.91 197.13 100.677 196.604ZM101.815 197.567C102.136 198.092 102.515 197.946 101.815 197.567ZM99.6853 197.596C99.6561 197.83 98.9269 197.917 99.6853 197.596ZM102.281 198.121C102.486 198.15 102.165 198.296 102.281 198.121ZM103.361 198.18C103.682 198.092 103.332 198.296 103.361 198.18ZM107.824 202.701C111.703 204.451 107.094 206.639 107.765 202.818L107.824 202.701ZM163.568 204.626C163.072 205.093 162.868 205.239 163.568 204.626ZM156.129 205.122C155.808 206.551 155.283 205.355 156.129 205.122ZM109.924 205.326C109.428 205.56 110.274 205.268 109.924 205.326ZM162.255 205.881C162.867 209.877 158.725 207.047 162.255 205.881ZM136.323 206.435C135.944 207.543 135.914 207.631 136.323 206.435ZM113.774 211.481C113.541 211.919 113.949 211.598 113.774 211.481ZM125.792 211.656C126.259 212.881 126.201 212.765 125.792 211.656ZM114.766 212.298C114.999 212.269 114.474 212.385 114.766 212.298ZM163.83 213.056C163.422 213.465 163.013 213.581 163.83 213.056ZM125.909 213.523C125.53 213.902 125.297 214.136 125.909 213.523ZM116.05 213.844C116.896 215.069 115.087 214.369 116.05 213.844ZM117.537 214.019C117.158 214.252 116.808 214.486 117.537 214.019ZM163.276 215.069C163.947 215.652 163.538 215.011 163.276 215.069ZM185.795 231.608C185.62 232.25 185.562 232.484 185.795 231.608ZM185.299 231.783C185.183 233.096 185.183 232.979 185.299 231.783ZM186.291 232.454C186.028 233.125 185.941 233.329 186.291 232.454ZM93.7346 233.009C96.3307 235.313 92.3636 236.13 93.7346 233.009ZM184.599 233.271C184.366 233.825 184.22 234.088 184.599 233.271ZM183.607 233.563C183.082 234.496 182.936 234.759 183.607 233.563ZM95.3098 233.592C95.8932 234.292 95.689 234.059 95.3098 233.592ZM93.7054 233.855C93.7346 234.613 93.7346 234.467 93.7054 233.855ZM183.928 233.884C184.337 234.671 183.432 234.671 183.928 233.884ZM184.395 234.088C184.074 234.555 183.87 234.817 184.395 234.088ZM96.2433 234.438C96.3599 235.342 96.3308 235.05 96.2433 234.438ZM98.4893 234.875C98.1101 235.546 98.0226 235.692 98.4893 234.875ZM188.77 237.063C188.595 237.588 188.508 237.909 188.77 237.063ZM118.967 242.956C118.675 243.393 118.471 243.685 118.967 242.956ZM118.704 244.035C119.608 244.152 119.346 244.122 118.704 244.035ZM119.754 244.181C121.038 245.377 121.154 244.618 119.754 244.181ZM212.369 265.65C212.136 266.204 211.99 266.467 212.369 265.65ZM149.683 338.516C150.762 342.542 151.229 342.221 150.324 339.683C150.062 339.333 150.295 338.458 149.683 338.516ZM153.416 338.662C154.146 339.45 153.475 340.208 153.416 338.662ZM151.579 343.913C152.191 344.526 151.958 344.292 151.579 343.913ZM151.404 344.175C152.25 344.555 151.112 344.671 151.404 344.175ZM151.666 344.905C151.754 344.992 151.579 345.284 151.666 344.905ZM151.666 345.459C151.491 345.926 151.345 346.276 151.666 345.459ZM150.908 345.78C151.579 346.334 151.258 346.071 150.908 345.78ZM152.075 345.984C152.6 346.48 152.541 346.422 152.075 345.984ZM153.241 347.647C153.708 348.463 153.621 348.318 153.241 347.647ZM151.87 347.705C152.104 348.58 152.045 348.318 151.87 347.705ZM152.775 348.288C153.183 348.959 153.066 348.784 152.775 348.288ZM153.504 348.522C154.233 349.193 153.096 348.959 153.504 348.522ZM154.583 353.422C155.167 354.064 153.883 353.685 154.583 353.422ZM153.329 353.597C154.321 354.21 152.541 354.414 153.329 353.597ZM152.716 354.181C154.087 354.472 153.737 356.456 152.716 354.181ZM154.262 354.239C154.787 354.852 154.642 354.677 154.262 354.239ZM154.058 354.443C155.663 356.485 154.233 355.289 154.058 354.443ZM154.904 354.647C156.217 355.347 155.079 354.997 154.904 354.647ZM152.716 355.027C153.212 355.552 153.154 355.493 152.716 355.027ZM158.784 356.019L158.463 356.223ZM153.621 355.814C154.204 356.485 153.971 356.223 153.621 355.814ZM153.3 355.931C154.321 356.485 153.737 357.302 153.3 355.931ZM158.084 358.06C159.28 360.015 158.638 358.994 158.084 358.06ZM155.167 358.848C156.304 359.548 155.4 359.84 155.167 358.848ZM155.546 359.956C155.896 360.832 155.808 360.627 155.546 359.956ZM156.625 360.336C158.142 361.707 156.771 361.619 156.625 360.336ZM157.734 360.948C158.58 362.027 158.375 361.765 157.734 360.948ZM186.145 361.707C187.02 361.794 186.7 361.765 186.145 361.707ZM157.355 361.736C157.267 362.319 157.238 362.494 157.355 361.736ZM188.304 361.794C186.816 363.369 187.604 364.799 189.033 363.515C189.004 363.078 191.279 362.144 188.946 362.173L188.741 361.882L188.304 361.794ZM185.358 361.823C185.854 361.794 185.241 362.261 185.358 361.823ZM156.713 361.911C156.888 362.844 156.859 362.64 156.713 361.911ZM187.02 361.969C183.783 362.173 185.854 362.523 185.62 363.34C182.295 363.894 187.75 364.449 187.02 361.969ZM162.751 364.215C162.372 363.544 161.001 364.274 160.972 363.34ZM157.85 362.815C158.58 363.923 157.967 364.274 157.85 362.815ZM158.725 362.961C159.542 363.515 159.426 363.457 158.725 362.961ZM184.308 363.048C184.862 363.69 184.133 363.398 184.308 363.048ZM159.717 363.428C161.234 364.507 160.272 364.099 159.717 363.428ZM159.455 363.778C161.263 364.682 159.892 364.624 159.455 363.778ZM187.05 363.953C187.37 364.39 187.108 364.069 187.05 363.953ZM160.738 364.653C160.913 365.528 160.855 365.265 160.738 364.653ZM169.197 364.944C165.493 365.557 172.26 369.116 169.343 368.999C166.922 369.582 168.118 370.662 171.794 370.137C173.66 369.933 178.474 370.924 179.174 370.341C176.257 368.737 172.844 367.861 170.802 365.09C171.677 366.17 169.518 364.857 169.227 364.944M169.11 368.912C168.468 368.591 168.293 368.503 169.11 368.912ZM159.338 365.382C165.026 367.774 161.438 366.257 159.338 365.382ZM161.613 365.615C162.343 365.965 162.109 365.849 161.613 365.615ZM162.634 366.87C162.634 367.132 161.526 367.541 162.634 366.87ZM163.422 367.132C167.097 370.633 161.642 366.986 163.422 367.132ZM166.076 368.124C167.331 368.066 166.806 369.349 166.076 368.124ZM181.828 370.049C180.515 370.837 180.224 370.166 181.828 370.049ZM168.468 370.399C169.314 370.662 168.964 370.545 168.468 370.399ZM175.002 370.487C178.182 370.574 175.148 372.412 175.002 370.487ZM169.839 370.545C171.531 371.683 168.41 370.866 169.839 370.545ZM173.281 370.603C177.453 372.033 162.868 370.078 173.281 370.603Z" fill="#213B84"/>
                <circle id="Ellipse 953" cx="168.5" cy="263.5" r="7.5" fill="#E01D2F"/>
                </g>
                <g id="Africa" data-area="africa">
                <path id="Vector_5" d="M319.36 139.023C317.318 140.54 315.451 139.84 313.176 139.927C310.23 140.919 307.254 139.665 304.279 140.861C301.566 140.773 299.495 142.786 296.899 143.223C295.09 145.965 292.844 143.34 290.802 144.332C287.915 143.573 286.339 141.707 284.998 145.849C283.977 149.116 279.134 148.853 278.697 152.558C276.947 154.891 278.609 158.1 275.867 159.967C274 162.505 270.004 161.834 269.129 165.101C266.329 167.318 266.212 171.256 263.47 173.473C264.17 174.056 260.582 177.79 260.903 180.036C260.932 179.657 263.441 183.332 261.895 184.266C263.412 186.774 262.391 190.041 261.545 192.725C261.749 194.242 257.724 196.167 260.757 198.238C262.42 196.488 259.678 200.105 263.295 199.23C260.261 199.113 259.678 201.651 262.799 201.359C260.291 201.068 261.049 203.197 263.003 202.905C264.053 203.868 264.17 202.614 264.083 204.976C265.512 206.61 266.912 208.36 268.546 210.081C269.129 211.948 268.05 211.452 269.742 213.698C271.054 215.069 275.43 218.482 278.201 220.932C280.885 223.733 283.568 220.174 286.602 220.291C286.018 220.203 289.84 219.824 290.452 219.941C291.94 221.195 294.536 221.224 296.753 219.678C299.408 218.599 300.895 217.199 303.812 217.199C305.3 216.323 309.238 217.549 309.675 219.59C309.996 221.837 312.417 222.537 315.218 221.516C317.201 220.961 318.747 223.033 319.126 223.703C320.322 225.483 319.739 228.517 318.601 230.354C320.643 231.463 318.485 232.98 317.93 235.138C318.076 237.559 318.397 236.305 318.835 238.493C320.76 241.439 323.764 243.802 324.873 246.777C326.069 249.315 327.79 246.835 325.573 249.548C326.302 251.269 328.344 255.178 326.798 255.849C327.207 258.795 329.482 261.683 327.615 264.571C324.96 266.904 325.135 270.784 323.969 273.73C323.006 280.147 328.344 285.252 329.773 290.999C329.569 294.382 330.619 297.562 331.057 300.916C331.611 304.213 335.082 305.496 335.257 308.938C336.308 311.388 338.583 314.247 336.716 316.552C338.349 319.352 337.27 319.877 340.625 320.956C342.492 319.673 345.117 320.344 346.925 319.031C349.492 319.439 352.468 319.264 354.451 318.418C360.023 316.289 363.436 310.863 366.79 306.255C369.736 303.921 368.482 300.246 370.816 297.62C372.012 295.053 376.183 294.47 375.454 291.028C375.804 288.519 373.558 285.34 374.462 282.919C377.496 280.877 379.362 277.58 382.98 276.355C387.209 274.663 388.464 269.792 387.559 265.679C387.093 262.995 388.259 259.991 385.955 258.124C385.109 255.003 384.934 251.736 384.584 248.585C384.409 245.085 385.372 244.764 386.801 241.76C387.997 238.959 389.193 238.697 390.68 236.597C393.947 231.025 400.015 227.729 403.953 222.653C406.782 218.453 408.037 213.727 410.545 209.439C411.158 206.551 411.537 206.668 410.837 203.518C408.824 203.576 406.024 205.385 403.369 205.064C400.89 205.793 398.148 207.135 395.639 206.347C393.743 203.022 392.401 207.018 390.447 204.597C391.06 201.563 394.618 201.622 391.235 198.938C389.426 196.984 387.034 195.175 385.138 194.154C383.709 191.354 383.621 187.795 380.588 186.016C379.654 182.049 379.275 177.586 375.629 175.106C376.445 172.248 374.199 171.46 372.916 168.222C371.428 165.276 370.349 162.417 368.395 159.675C367.49 155.037 369.766 161.805 371.37 162.738C373.062 163.438 373.733 158.158 372.42 156.554C372.566 152.995 368.336 155.241 367.082 154.95C367.315 152.937 364.048 154.104 363.465 153.812C362.736 154.775 359.906 156.029 357.893 154.571C356.056 153.345 352.847 154.571 351.534 152.558C348.326 153.229 346.78 148.941 343.6 150.574C339.662 151.683 342.842 155.475 339.4 156.875C337.241 155.037 334.003 154.833 331.845 153.462C330.999 150.516 327.44 150.399 324.873 150.283C322.889 149.057 320.235 148.912 320.702 146.87C323.239 144.332 320.147 142.144 321.985 139.781C320.235 141.502 320.439 139.198 319.331 139.052M316.151 141.152C316.589 141.473 316.589 141.473 316.151 141.152ZM321.752 147.686C322.248 148.941 320.906 148.095 321.752 147.686ZM269.362 159.588C269.858 160.23 267.437 161.017 269.362 159.588ZM260.145 160.434C260.524 161.951 259.59 161.163 260.145 160.434ZM268.604 160.667C268.079 163.642 266.475 162.271 268.604 160.667ZM263.791 161.075C262.478 163.992 260.961 161.28 263.791 161.075ZM264.987 162.155C265.016 163.905 264.433 162.68 264.987 162.155ZM259.678 163.001C260.349 162.738 259.182 164.167 259.678 163.001ZM261.049 179.482C260.553 180.094 261.282 179.452 261.049 179.482ZM262.187 183.07C262.012 183.682 261.953 183.945 262.187 183.07ZM381.842 188.845C381.171 189.195 380.996 189.283 381.842 188.845ZM242.643 189.779C243.109 190.245 241.651 190.887 242.643 189.779ZM380.354 189.895C379.421 190.07 380.5 190.45 380.354 189.895ZM247.427 190.654C247.397 191.558 247.397 191.266 247.427 190.654ZM244.393 191.179C246.289 191.179 243.255 192.2 244.393 191.179ZM262.274 191.5C261.749 191.879 262.566 191.441 262.274 191.5ZM247.485 192.229C247.747 193.133 247.689 192.871 247.485 192.229ZM386.101 193.192C387.501 193.688 385.721 194.213 386.101 193.192ZM245.589 194.563C246.143 196.05 246.026 195.7 245.589 194.563ZM243.955 195.263C244.568 195.146 243.664 196.575 243.955 195.263ZM383.913 196.4C383.505 196.721 383.942 196.546 383.913 196.4ZM384.555 196.692C384.73 196.634 384.496 196.867 384.555 196.692ZM380.967 197.451C380.675 197.392 381.025 197.83 380.967 197.451ZM261.72 198.851C265.162 198.851 263.208 198.851 261.72 198.851ZM262.858 199.755C263.062 199.901 262.712 199.93 262.858 199.755ZM261.895 199.872C263.033 199.901 261.137 199.93 261.895 199.872ZM390.68 200.513C390.768 200.893 391.497 201.126 390.68 200.513ZM263.82 200.747C263.091 201.593 263.033 201.71 263.82 200.747ZM261.749 203.081C262.041 203.46 261.691 203.168 261.749 203.081ZM266.387 203.693C267.933 203.547 264.899 204.072 266.387 203.693ZM261.632 204.043C261.953 204.276 261.137 204.189 261.632 204.043ZM265.22 204.189C264.87 204.772 264.754 205.006 265.22 204.189ZM263.091 204.627C262.828 205.443 262.799 204.627 263.091 204.627ZM263.791 204.802C264.287 205.21 263.529 204.918 263.791 204.802ZM261.953 205.006C262.362 204.802 261.807 205.822 261.953 205.006ZM269.742 209.119C269.45 209.527 269.246 209.848 269.742 209.119ZM269.538 213.844C271.288 214.311 267.758 214.165 269.538 213.844ZM303.987 214.748C303.958 215.974 303.841 216.119 303.987 214.748ZM298.212 217.753C299.116 217.957 298.824 217.899 298.212 217.753ZM288.002 219.766C285.698 220.174 288.848 219.824 288.002 219.766ZM291.648 220.174C291.678 220.32 291.24 220.145 291.648 220.174ZM317.318 223.616C317.551 225.979 315.568 224.55 317.318 223.616ZM312.505 232.075C313.088 232.921 311.484 233.826 312.505 232.075ZM317.697 234.672C318.076 235.401 317.551 234.847 317.697 234.672ZM324.231 242.402L324.085 242.431ZM386.218 245.552C387.326 246.719 385.547 245.931 386.218 245.552ZM385.226 247.711C386.218 248.906 384.555 248.644 385.226 247.711ZM386.247 252.669C385.926 253.282 385.809 253.369 386.247 252.669ZM406.928 263.491C405.907 265.854 403.895 268.363 402.845 270.288C401.94 272.709 399.344 272.622 396.894 273.934C394.327 275.13 394.881 279.389 395.056 281.927C396.135 285.427 391.206 287.673 392.839 291.261C393.102 294.032 394.064 298.087 397.652 296.891C401.94 295.783 402.29 290.532 403.778 286.973C405.353 282.189 407.366 277.435 407.541 272.33C410.4 273.905 408.591 267.692 408.008 266.029C407.658 265.183 407.424 264.279 406.928 263.491ZM377.671 280.556C377.933 280.439 377.758 281.227 377.671 280.556ZM375.658 287.469C375.571 288.082 375.542 288.373 375.658 287.469ZM335.841 304.563C335.724 305.03 335.987 304.65 335.841 304.563Z" fill="#213B84"/>
                <circle id="Ellipse 954" cx="345.5" cy="201.5" r="7.5" fill="#66A2D1"/>
                </g>
                <g id="Australia" data-area="australia">
                <path id="Vector_6" d="M558.323 214.748C558.819 215.565 557.215 215.069 558.323 214.748ZM558.323 215.623C556.806 215.448 554.677 221.574 553.831 220.699C551.293 223.178 546.626 225.687 545.459 228.458C546.889 232.163 538.721 225.045 543.388 230.442C538.488 225.687 541.784 235.75 542.892 238.084C544.759 243.772 551.264 239.601 554.59 243.189C559.023 240.213 557.215 231.492 562.815 230.937C559.636 227.466 558.527 222.595 559.782 222.361C562.436 222.157 560.482 220.611 563.195 219.649C559.607 218.365 560.19 218.54 558.352 215.623H558.323ZM558.79 216.352C559.169 216.061 558.878 216.498 558.79 216.352ZM542.367 235.867C542.105 237.267 541.171 235.225 542.367 235.867ZM545.955 226.854C545.78 227.641 545.634 225.22 545.955 226.854ZM520.811 216.411C520.606 221.34 523.378 227.087 528.162 229.654C532.274 230.062 526.674 222.974 527.257 219.765C524.049 214.602 524.311 221.953 520.811 216.411ZM519.877 216.907C520.402 217.607 518.915 217.198 519.877 216.907ZM509.609 218.336C510.28 218.307 509.784 218.89 509.609 218.336ZM510.251 219.153C512.293 224.608 519.381 230.062 521.744 236.567C523.29 241.38 532.508 252.961 533.441 244.676C535.25 238.405 527.374 237.88 528.628 232.221C525.449 232.425 526.265 227.875 524.953 229.683C523.582 227.729 518.331 225.599 515.385 220.845C514.597 219.415 511.797 220.203 510.251 219.182V219.153ZM521.015 219.444C521.219 220.349 520.315 219.444 521.015 219.444ZM554.152 219.649C554.619 219.824 553.773 220.028 554.152 219.649ZM580.142 221.836C580.901 223.732 579.18 223.324 580.142 221.836ZM556.252 222.099C557.39 221.953 553.306 224.841 556.252 222.099ZM557.682 222.128C559.636 222.391 556.369 222.157 557.682 222.128ZM559.898 222.42C561.386 223.266 559.519 223.032 559.898 222.42ZM559.694 222.828C560.365 222.741 559.723 223.441 559.694 222.828ZM538.75 222.886C539.713 224.403 537.525 223.587 538.75 222.886ZM579.763 223.12C580.142 223.178 579.938 224.287 579.763 223.12ZM577.313 223.878C578.655 224.637 576.963 225.337 577.313 223.878ZM559.607 224.491C560.278 224.52 559.461 225.308 559.607 224.491ZM559.344 224.724C559.928 224.549 559.198 225.162 559.344 224.724ZM554.823 225.278C554.677 228.312 553.831 225.541 554.823 225.278ZM533.237 225.57C533.675 225.628 532.887 226.445 533.237 225.57ZM540.209 225.599C540.792 225.833 539.742 225.949 540.209 225.599ZM529.853 225.891C530.262 226.241 529.328 226.183 529.853 225.891ZM511.068 225.978C514.043 227.087 512.089 227.612 511.068 225.978ZM577.138 226.154C577.517 226.183 577.08 226.708 577.138 226.154ZM584.022 226.62C585.772 227.437 581.718 229.391 584.022 226.62ZM514.306 227.554C515.239 227.7 514.043 228.225 514.306 227.554ZM582.709 227.933C580.084 230.091 584.664 239.017 583.059 232.133C585.364 234.234 584.81 226.533 582.447 230.792C583.089 230.091 583.439 228.691 582.68 227.933H582.709ZM576.7 228.837C572.908 233.388 563.399 226.912 564.449 235.43C561.299 239.951 564.07 243.597 564.507 247.389C566.783 245.843 565.557 235.634 567.774 242.985C571.129 248.673 571.829 239.98 568.387 237.938C574.513 235.459 571.741 233.183 567.191 236.655C559.607 227.029 577.109 236.392 576.7 228.837ZM517.369 228.866C517.719 229.158 516.814 229.012 517.369 228.866ZM548.989 229.071C551.527 230.004 546.743 229.304 548.989 229.071ZM552.402 229.45C553.452 229.391 550.185 229.975 552.402 229.45ZM514.393 229.537C517.31 230.15 515.239 233.388 514.393 229.537ZM529.678 230.15C530.291 230.529 529.007 230.675 529.678 230.15ZM530.408 230.179C531.954 230.296 530.087 231.608 530.408 230.179ZM526.703 230.237C529.212 231.287 525.099 231.317 526.703 230.237ZM528.045 230.266C528.745 230.558 527.782 230.617 528.045 230.266ZM545.722 230.442C547.968 230.792 542.98 231.025 545.722 230.442ZM529.416 230.558C529.649 231.025 528.745 230.442 529.416 230.558ZM529.824 230.85C530.408 230.996 529.445 231.171 529.824 230.85ZM528.22 230.996C528.891 231.258 527.928 231.667 528.22 230.996ZM581.688 231.2C582.009 231.054 581.747 231.842 581.688 231.2ZM527.811 231.346C528.424 231.754 527.286 231.929 527.811 231.346ZM530.816 232.542C531.895 233.096 530.699 233.067 530.816 232.542ZM517.689 232.629C518.74 232.95 516.814 232.921 517.689 232.629ZM530.495 232.658C531.137 232.892 530.174 232.979 530.495 232.658ZM516.902 233.067C517.748 233.475 517.077 234.321 516.902 233.067ZM530.699 233.067C533.12 233.329 530.291 234.496 530.699 233.067ZM589.477 233.213C591.927 234.321 585.568 233.913 589.477 233.213ZM528.599 233.709C529.562 233.796 527.753 234.204 528.599 233.709ZM581.338 233.738C581.805 234.934 580.347 233.971 581.338 233.738ZM517.077 233.767C517.835 234.584 516.289 234.875 517.077 233.767ZM582.009 233.854C584.285 236.071 580.288 234.817 582.009 233.854ZM569.525 233.884C570.516 234.029 568.883 234.292 569.525 233.884ZM530.641 233.942C531.662 235.342 529.007 234.234 530.641 233.942ZM569.233 234.088C570.137 234.204 568.562 234.554 569.233 234.088ZM588.923 234.117C589.36 234.584 587.843 234.292 588.923 234.117ZM593.269 234.204C585.86 234.817 591.315 238.638 596.069 238.697C594.056 240.534 590.702 239.105 593.677 243.014C595.632 240.505 599.249 245.143 603.653 246.077C608.583 249.606 604.149 252.815 609.779 255.09C609.662 256.928 619.493 256.636 614.184 253.982C618.268 254.011 616.43 251.94 619.726 252.29C623.752 254.769 626.406 260.837 631.978 259.699C631.365 257.89 628.798 257.045 627.135 254.186C625.268 251.998 623.722 250.219 626.698 249.11C622.41 245.552 615.613 240.155 611.529 239.426C606.454 236.334 602.662 237.326 598.753 241.38C595.573 239.601 598.753 233.854 593.327 234.175L593.269 234.204ZM596.594 243.014C596.886 243.451 596.128 242.81 596.594 243.014ZM581.368 234.613C582.243 235.255 580.755 235.08 581.368 234.613ZM599.511 234.671C600.911 234.35 599.745 235.867 599.511 234.671ZM588.981 235.021C590.294 235.371 587.435 235.371 588.981 235.021ZM598.432 235.43C599.074 236.071 597.761 235.867 598.432 235.43ZM517.835 235.634C520.665 236.976 517.223 239.017 517.835 235.634ZM587.26 235.925C587.493 236.421 586.531 235.896 587.26 235.925ZM582.126 236.013C582.884 236.159 581.222 236.305 582.126 236.013ZM572.646 236.071C573.667 238.434 570.166 235.605 572.646 236.071ZM589.914 236.13C590.06 236.1 589.739 236.451 589.914 236.13ZM631.219 236.596C632.765 236.946 630.402 237.617 631.219 236.596ZM582.447 236.626C585.072 237.092 579.967 237.88 582.447 236.626ZM599.307 236.713C599.774 237.005 598.315 236.859 599.307 236.713ZM540.384 236.917C541.113 236.801 540.092 237.53 540.384 236.917ZM533.908 236.946C529.299 237.384 538.459 243.422 534.433 238.697L534.229 237.267L533.908 236.946ZM599.803 237.092C603.42 236.655 602.895 238.959 599.803 237.092ZM576.088 237.209C578.859 238.026 572.442 237.997 576.088 237.209ZM587.697 237.413C590.177 238.142 585.976 238.288 587.697 237.413ZM597.032 237.442C597.207 238.434 596.536 237.617 597.032 237.442ZM578.334 237.501C581.018 238.347 574.95 237.442 578.334 237.501ZM625.181 237.967C628.535 238.463 621.972 239.076 625.181 237.967ZM578.538 238.026C579.472 239.484 577.809 239.105 578.538 238.026ZM597.265 238.113C597.586 237.967 597.178 238.667 597.265 238.113ZM519.702 238.23C521.773 238.667 519.177 239.98 519.702 238.23ZM627.135 238.755C627.514 238.901 626.756 239.134 627.135 238.755ZM632.357 239.076C634.34 239.397 631.277 240.243 632.357 239.076ZM520.606 239.426C521.89 239.893 520.081 240.651 520.606 239.426ZM537.817 239.484C541.375 239.863 536.125 242.722 537.817 239.484ZM634.049 239.776C636.441 241.234 640.787 247.856 637.228 242.022C636.353 241.059 635.099 240.388 634.049 239.776ZM586.151 239.951C578.596 240.534 587.581 242.664 588.923 241.614C588.252 240.768 587.289 240.009 586.151 239.951ZM537.321 240.155C537.408 240.622 536.592 240.097 537.321 240.155ZM521.248 240.301C522.765 241.38 520.694 242.226 521.248 240.301ZM535.862 240.33C536.475 240.797 535.162 240.476 535.862 240.33ZM634.049 240.418C634.632 240.476 633.144 240.709 634.049 240.418ZM637.841 240.826C638.307 241.584 637.549 240.972 637.841 240.826ZM579.501 240.972C584.518 241.643 576.555 243.16 579.501 240.972ZM582.389 240.972C583.059 241.147 581.893 241.409 582.389 240.972ZM582.068 241.264C582.739 241.439 581.718 241.643 582.068 241.264ZM556.894 241.293C557.827 244.822 555.202 242.022 556.894 241.293ZM557.215 241.614C557.682 242.489 556.631 241.789 557.215 241.614ZM584.285 241.818C585.131 241.905 584.168 242.489 584.285 241.818ZM583.964 241.876C584.635 241.818 583.526 242.46 583.964 241.876ZM583.526 241.964C583.643 242.868 582.126 242.08 583.526 241.964ZM590.439 243.014C590.702 242.868 590.556 243.597 590.439 243.014ZM571.887 243.043C573.258 243.568 570.954 244.035 571.887 243.043ZM635.653 243.656C634.107 248.294 631.89 245.96 628.215 246.806C629.702 250.773 636.791 247.856 637.17 244.443C637.286 242.868 636.178 244.356 635.653 243.656ZM571.917 244.093C572.179 248.614 568.416 246.339 571.917 244.093ZM622.906 244.472C623.489 245.114 622.147 244.939 622.906 244.472ZM630.811 244.764C631.073 245.114 630.256 244.764 630.811 244.764ZM642.1 245.756C643.062 247.156 640.933 247.039 642.1 245.756ZM569.379 245.785C570.166 247.01 568.358 246.456 569.379 245.785ZM625.181 246.164C626.202 246.281 624.773 247.477 625.181 246.164ZM525.332 246.368C526.411 246.748 524.807 247.01 525.332 246.368ZM594.202 246.543C593.852 248.644 592.54 248.673 594.202 246.543ZM642.304 246.748C647.496 250.802 642.129 251.736 642.304 246.748ZM597.324 246.835C598.986 250.335 594.815 249.314 597.324 246.835ZM626.96 246.864C628.215 247.681 626.085 247.914 626.96 246.864ZM593.327 247.039C593.648 246.893 593.269 247.593 593.327 247.039ZM593.269 247.302C594.086 248.381 592.306 247.477 593.269 247.302ZM548.668 247.418C548.96 247.944 548.055 247.623 548.668 247.418ZM566.024 247.564C566.549 249.723 565.324 248.789 566.024 247.564ZM573.813 247.827C574.454 248.06 573.404 248.148 573.813 247.827ZM536.008 247.914C527.695 250.219 541.142 253.311 545.459 253.778C548.872 255.382 556.165 253.748 549.543 252.494C545.605 246.543 541.025 253.194 536.008 247.914ZM596.273 248.527C598.257 250.802 594.99 250.773 596.273 248.527ZM597.499 249.227C597.994 249.577 597.003 249.402 597.499 249.227ZM532.012 249.431C532.245 249.927 531.283 249.402 532.012 249.431ZM645.921 249.635C645.921 251.211 649.304 252.582 647.058 250.335L645.921 249.635ZM554.269 250.19C555.727 249.84 553.656 251.152 554.269 250.19ZM550.564 250.277C553.043 251.561 545.138 250.365 550.564 250.277ZM611.238 250.306C611.734 250.831 610.975 253.311 611.238 250.306ZM566.17 250.656C566.87 250.715 565.674 251.327 566.17 250.656ZM644.258 250.685C644.929 250.948 643.5 250.861 644.258 250.685ZM583.876 250.773C584.285 251.152 583.205 251.036 583.876 250.773ZM590.614 250.89C590.439 254.594 588.106 252.261 590.614 250.89ZM590.848 250.89C591.519 250.773 591.402 251.561 590.848 250.89ZM566.987 251.24C566.87 251.619 565.966 250.977 566.987 251.24ZM648.225 251.561C648.488 252.056 647.613 251.502 648.225 251.561ZM648.517 251.59C649.071 251.765 648.225 251.969 648.517 251.59ZM589.389 251.619C589.098 252.231 588.981 251.561 589.389 251.619ZM606.22 251.619C607.475 256.403 599.978 253.836 606.22 251.619ZM588.981 251.823C588.981 252.231 588.602 251.794 588.981 251.823ZM581.163 251.881C581.543 252.29 580.405 252.436 581.163 251.881ZM650.18 251.911C654.701 253.953 652.572 256.082 650.18 251.911ZM646.037 252.056C647.175 253.165 645.192 252.902 646.037 252.056ZM649.975 252.056C651.084 252.436 649.421 252.202 649.975 252.056ZM578.742 252.231C580.755 253.223 575.096 253.223 578.742 252.231ZM586.035 252.611C587.493 252.64 585.422 253.836 586.035 252.611ZM646.854 252.757C648.021 252.64 646.3 254.857 646.854 252.757ZM647.963 253.048C650.325 255.353 646.125 253.953 647.963 253.048ZM617.305 253.252C617.538 253.544 616.751 253.223 617.305 253.252ZM582.389 253.282C583.264 253.894 580.988 253.486 582.389 253.282ZM552.343 253.34C556.806 252.494 554.152 257.249 552.343 253.34ZM562.611 253.457C562.874 253.953 562.028 253.719 562.611 253.457ZM574.571 253.457C578.159 252.961 573.462 255.382 574.571 253.457ZM559.344 253.486C559.928 254.273 558.265 254.011 559.344 253.486ZM559.578 253.515C562.815 255.674 554.152 254.04 558.527 255.79C561.24 255.469 564.507 254.069 559.578 253.515ZM581.659 253.515C582.243 253.311 581.426 254.04 581.659 253.515ZM589.156 253.515C589.71 254.04 587.085 254.244 589.156 253.515ZM582.797 253.573C582.768 254.128 582.359 253.602 582.797 253.573ZM584.43 253.573C585.101 254.069 583.876 253.544 584.43 253.573ZM572.85 253.602C574.046 254.798 569.495 254.857 572.85 253.602ZM556.748 253.632C558.382 256.257 553.102 255.265 556.748 253.632ZM570.983 253.632C568.329 254.828 559.898 254.098 568.037 255.294C568.504 255.032 571.654 255.032 570.983 253.632ZM606.22 253.661C607.475 253.953 605.258 254.273 606.22 253.661ZM573.988 253.69C574.221 254.944 572.354 254.215 573.988 253.69ZM571.8 253.719C572.121 254.594 570.691 253.923 571.8 253.719ZM654.905 253.894C657.589 257.395 654.847 258.182 654.905 253.894ZM580.142 253.982C575.096 253.165 574.046 258.736 579.472 255.148C580.288 256.199 581.338 253.427 580.142 253.982ZM575.709 256.169C573.433 253.953 569.991 262.003 575.621 256.84L575.709 256.169ZM616.926 254.011C617.334 254.682 617.217 253.807 616.926 254.011ZM616.78 254.098C617.48 254.39 616.022 254.303 616.78 254.098ZM647.554 254.157C647.817 255.586 646.883 254.769 647.554 254.157ZM563.311 254.186C564.041 254.623 562.32 255.294 563.311 254.186ZM571.275 254.186C571.362 254.944 570.545 254.361 571.275 254.186ZM633.611 254.215C634.019 254.798 632.999 254.448 633.611 254.215ZM616.255 254.303C617.509 254.915 616.955 255.148 616.255 254.303ZM648.925 254.419C649.655 254.886 648.109 255.207 648.925 254.419ZM563.691 254.594C564.449 254.74 563.107 255.644 563.691 254.594ZM633.611 254.623C634.107 255.907 633.144 254.886 633.611 254.623ZM554.677 254.798C555.085 255.499 554.035 254.857 554.677 254.798ZM648.021 254.944C648.254 255.353 647.438 254.915 648.021 254.944ZM636.995 255.586C638.716 256.053 636.295 256.549 636.995 255.586ZM653.593 255.615C654.059 255.469 653.709 256.519 653.593 255.615ZM651.259 255.644C651.667 255.499 650.851 256.344 651.259 255.644ZM654.001 255.907C654.526 255.936 653.067 256.374 654.001 255.907ZM631.54 256.14C632.532 257.19 630.548 256.811 631.54 256.14ZM652.542 256.286C657.064 257.22 652.105 259.086 652.542 256.286ZM563.341 256.49C570.516 258.736 559.403 258.503 563.341 256.49ZM632.153 256.607C634.34 257.132 630.927 257.978 632.153 256.607ZM656.218 256.636C657.18 257.745 655.984 258.095 656.218 256.636ZM573.725 256.84C573.929 256.84 573.579 256.957 573.725 256.84ZM632.619 257.54C634.136 258.153 633.407 259.261 632.619 257.54ZM613.425 258.328C613.863 258.591 612.842 258.591 613.425 258.328ZM613.659 258.474C614.125 258.678 613.163 258.911 613.659 258.474ZM571.8 258.503C572.062 259.174 571.041 258.911 571.8 258.503ZM656.014 258.707C659.543 259.903 656.364 260.807 656.014 258.707ZM568.358 259.232C568.795 259.991 567.278 259.436 568.358 259.232ZM571.421 259.466C571.625 260.837 568.97 259.991 571.421 259.466ZM632.619 259.495C632.969 260.078 631.978 259.495 632.619 259.495ZM613.338 259.641C613.921 259.582 612.93 260.632 613.338 259.641ZM636.645 259.699C637.637 259.757 635.828 260.02 636.645 259.699ZM666.252 259.787C667.332 260.049 664.356 260.662 666.252 259.787ZM614.009 260.107C609.808 264.833 611.588 282.918 602.049 274.43C594.436 272.038 599.716 266.962 600.416 263.258C598.228 266.262 588.923 258.007 591.723 263.462C585.364 261.333 585.976 271.104 582.826 270.463C580.317 271.6 578.538 265.008 575.971 269.413C573.696 270.813 572.267 274.167 570.516 274.897C570.487 279.535 568.329 270.9 567.133 277.143C564.507 285.573 553.569 282.743 548.172 288.431C545.605 287.644 544.818 296.103 545.138 299.254C542.367 295.782 545.751 306.05 544.963 311.33C544.905 315.997 538.079 321.977 547.297 321.073C553.86 317.456 561.211 318.797 567.424 314.276C573.112 312.526 583.905 310.776 584.372 318.068C582.097 326.382 595.865 309.025 589.594 319.031C585.831 322.59 587.843 321.51 590.469 319.643C589.098 322.794 588.835 322.852 591.169 322.619C588.427 327.169 595.311 333.732 600.066 328.511C599.19 333.295 611.092 328.424 613.046 324.486C618.326 317.047 628.069 312.001 629.002 302.141C631.686 295.928 625.852 290.094 624.598 287.761C623.722 281.927 616.926 280.468 618.793 273.38C619.026 268.1 613.6 269.296 614.913 263.024C614.301 262.295 615.001 260.632 614.009 260.078V260.107ZM590.964 323.377C591.052 323.115 590.498 322.56 590.964 323.377ZM591.927 260.632C592.627 261.799 591.227 261.741 591.927 260.632ZM637.432 261.158C637.782 261.77 637.695 260.924 637.432 261.158ZM589.098 261.187C589.302 264.337 585.393 260.632 589.098 261.187ZM639.824 261.478C640.758 261.624 638.628 261.741 639.824 261.478ZM587.172 261.595C588.339 263.754 584.693 262.441 587.172 261.595ZM637.899 261.624C639.853 261.799 637.345 262.704 637.899 261.624ZM652.659 261.916C654.526 262.616 653.476 262.908 652.659 261.916ZM667.682 262.091C668.557 262.353 667.098 262.47 667.682 262.091ZM668.353 267.429C668.79 268.304 667.623 268.187 668.353 267.429ZM668.294 268.567C668.761 269.413 667.244 268.771 668.294 268.567ZM665.844 269.938C668.178 271.104 665.29 274.78 665.844 269.938ZM669.169 270.579C669.724 271.104 668.323 272.913 669.169 270.579ZM668.761 271.367C668.528 272.621 667.565 271.338 668.761 271.367ZM669.053 271.863C669.636 272.505 668.119 274.722 669.053 271.863ZM666.806 272.242C667.186 272.913 666.077 272.33 666.806 272.242ZM666.806 272.913C669.373 275.509 665.961 274.722 666.806 272.913ZM668.819 273.526C669.753 274.867 666.952 273.409 668.819 273.526ZM694.547 273.613C689.384 274.663 692.068 276.501 694.518 274.342C691.951 276.151 695.189 273.526 694.547 273.613ZM668.469 274.751C669.753 275.247 668.207 275.568 668.469 274.751ZM690.026 276.588C694.285 279.71 682.587 279.214 690.026 276.588ZM668.411 277.026C669.811 277.959 666.69 277.755 668.411 277.026ZM691.222 277.318C691.834 277.259 690.843 277.93 691.222 277.318ZM692.097 278.047C692.622 278.076 691.951 279.126 692.097 278.047ZM619.405 278.893C620.339 279.885 618.413 279.33 619.405 278.893ZM693.205 279.564C693.614 279.505 692.826 280.147 693.205 279.564ZM669.315 279.739C670.686 280.818 668.323 281.081 669.315 279.739ZM689.355 280.556C690.843 280.643 686.846 281.635 689.355 280.556ZM669.549 281.489C670.074 282.831 668.673 281.897 669.549 281.489ZM657.326 283.443C657.385 286.01 662.548 290.736 662.11 288.169C660.389 286.652 659.31 284.494 657.326 283.443ZM624.393 283.589C624.802 283.823 623.897 284.581 624.393 283.589ZM670.074 283.589C670.569 283.764 669.519 283.91 670.074 283.589ZM663.715 284.989C665.319 286.244 662.985 286.652 663.715 284.989ZM665.144 286.623C666.573 287.294 663.889 287.819 665.144 286.623ZM663.394 289.686C663.889 289.802 662.956 290.094 663.394 289.686ZM663.423 319.527C661.877 322.852 664.444 324.544 663.044 326.557C662.11 330.874 656.101 330.932 658.756 335.045C652.367 341.083 665.523 331.982 667.127 330.699C672.261 326.848 668.265 329.007 665.173 327.578C667.711 322.415 661.964 328.919 664.677 323.494C666.223 321.598 663.481 321.744 663.364 319.556L663.423 319.527ZM587.172 322.852C591.344 323.931 581.513 323.727 587.172 322.852ZM666.252 323.669C666.34 324.777 665.611 324.165 666.252 323.669ZM664.502 325.419C665.348 325.39 663.977 325.769 664.502 325.419ZM596.098 332.507C596.215 334.112 594.202 334.287 596.098 332.507ZM604.033 333.032C604.849 334.695 602.399 334.462 604.033 333.032ZM603.858 334.403C604.558 335.278 602.253 334.578 603.858 334.403ZM603.478 334.841C603.187 334.724 603.158 335.541 603.478 334.841ZM653.797 334.841C647.992 339.712 641.02 342.746 634.253 346.159C632.182 347.967 629.411 348.551 633.29 349.484C638.249 352.139 643.062 342.542 648.4 343.067C652.105 338.954 658.143 335.716 653.768 335.833C652.309 335.424 654.497 334.812 653.797 334.841ZM655.897 335.278C655.372 336.27 655.022 335.483 655.897 335.278ZM601.728 335.687C597.119 335.366 593.736 336.474 594.377 341.783C597.44 342.6 601.553 339.975 602.399 335.949L601.728 335.716V335.687ZM669.403 342.921C669.928 343.884 667.623 343.913 669.403 342.921ZM669.023 344.088C669.198 344.321 668.411 344.555 669.023 344.088ZM632.386 350.33C632.619 352.022 628.769 351.935 632.386 350.33ZM621.389 359.781C620.251 361.356 619.872 359.606 621.389 359.781Z" fill="#213B84"/>
                <circle id="Ellipse 955" cx="590.5" cy="290.5" r="7.5" fill="#67B292"/>
                </g>
                <g id="Europe" data-area="europe">
                <path id="Vector_7" d="M348.761 143.253C347.507 145.615 357.891 144.799 351.882 144.011C350.482 143.924 349.753 143.778 348.761 143.253ZM371.514 143.194C368.83 143.223 364.513 146.082 369.297 145.47C371.397 144.536 369.122 144.565 371.514 143.194ZM355.995 142.961C356.316 144.215 355.528 144.215 355.995 142.961ZM347.069 141.444C347.798 142.057 346.544 142.115 347.069 141.444ZM357.833 141.327C358.883 142.844 355.324 142.698 357.833 141.327ZM350.074 140.569C350.92 140.627 349.344 140.89 350.074 140.569ZM351.911 140.54C352.378 140.715 351.649 140.861 351.911 140.54ZM323.967 140.336C324.404 140.102 324.025 140.948 323.967 140.336ZM355.82 140.19C356.404 140.306 354.537 140.948 355.82 140.19ZM353.282 140.161C353.778 140.161 351.911 140.919 353.282 140.161ZM285.987 140.131C286.396 140.044 285.608 140.452 285.987 140.131ZM350.628 139.898C350.978 140.219 350.278 140.044 350.628 139.898ZM355.353 139.84C355.733 140.044 354.945 140.102 355.353 139.84ZM351.62 139.577C352.086 139.956 351.153 140.015 351.62 139.577ZM352.291 139.49C352.816 140.336 351.24 140.073 352.291 139.49ZM351.911 138.615C352.32 138.877 351.474 138.877 351.911 138.615ZM353.691 138.235C354.099 138.644 352.436 138.644 353.691 138.235ZM349.724 138.235C350.161 138.265 349.169 139.052 349.724 138.235ZM351.095 138.206C351.999 138.235 351.27 138.935 351.095 138.206ZM347.828 137.944C348.236 137.798 347.828 138.673 347.828 137.944ZM354.566 137.885C355.995 137.623 354.508 138.935 354.566 137.885ZM342.169 137.681C343.452 137.944 341.614 138.906 342.169 137.681ZM350.511 137.477C351.27 137.506 351.153 139.169 350.511 137.477ZM331.405 136.66C329.625 137.71 322.391 136.369 326.621 138.79C329.013 140.452 331.463 141.532 330.909 137.827L331.609 136.689L331.405 136.66ZM341.76 136.31C343.306 137.564 340.593 137.214 341.76 136.31ZM341.964 136.281C342.256 137.156 342.139 136.339 341.964 136.281ZM353.02 135.902C354.099 137.244 352.261 136.952 353.02 135.902ZM302.147 135.581C302.76 135.552 301.826 136.048 302.147 135.581ZM341.964 135.318C342.635 135.785 341.323 136.135 341.964 135.318ZM349.869 135.027C350.715 135.464 349.694 135.727 349.869 135.027ZM347.157 134.852C346.865 136.018 352.32 138.585 348.469 135.581C347.915 135.523 347.711 134.852 347.157 134.852ZM302.352 134.647C303.168 135.348 300.776 135.464 302.352 134.647ZM348.09 134.502C348.499 134.677 347.944 134.852 348.09 134.502ZM353.02 134.122C355.762 134.764 352.116 135.231 353.02 134.122ZM339.923 132.926C341.294 134.093 339.689 134.093 339.923 132.926ZM305.969 132.489C307.894 134.618 301.71 133.831 305.969 132.489ZM351.27 132.372C352.466 133.189 349.607 132.606 351.27 132.372ZM307.456 132.256C309.352 132.781 306.698 133.014 307.456 132.256ZM352.407 131.818C353.224 132.11 351.561 132.314 352.407 131.818ZM351.766 131.118C352.407 131.264 351.474 131.526 351.766 131.118ZM349.724 130.476C350.832 130.535 349.286 131.468 349.724 130.476ZM318.308 129.368C314.69 129.689 317.52 133.772 316.849 134.764C319.358 136.048 319.824 131.205 318.949 129.834C319.095 129.543 318.483 129.484 318.308 129.368ZM386.77 128.58C387.411 128.697 386.565 128.813 386.77 128.58ZM335.022 125.546C336.218 125.984 335.314 125.517 335.022 125.546ZM320.758 125.255C321.312 126.305 318.92 125.138 320.758 125.255ZM318.862 125.196C320.058 131.789 314.224 127.034 318.862 125.196ZM333.884 124.963C335.43 125.138 332.222 125.371 333.884 124.963ZM333.301 124.467C336.422 124.759 331.784 124.613 333.301 124.467ZM332.98 123.971C334.526 123.942 332.718 124.73 332.98 123.971ZM380.615 123.388C381.431 124.35 384.64 126.976 384.728 128.697C389.074 128.463 383.007 128.434 382.073 129.922C378.952 129.747 374.985 130.622 372.885 128.23C370.755 127.501 366.496 126.655 363.521 129.28C360.108 129.484 358.416 129.951 359.379 130.71C358.387 132.46 356.024 130.476 353.632 131.993C351.795 134.21 356.054 133.772 354.449 135.814C355.762 136.981 351.882 135.814 355.149 137.477C356.579 138.935 354.77 140.511 357.862 140.044C354.741 141.94 358.679 139.752 359.525 141.211C362.588 144.069 363.609 137.448 366.934 142.319C370.055 142.523 372.505 139.577 374.46 140.89C372.826 143.661 376.093 142.553 375.685 140.481C379.36 141.736 383.882 139.198 387.411 139.694C389.336 138.235 393.975 141.532 391.028 137.827C390.416 135.698 390.474 133.276 390.941 132.751C388.491 132.489 385.924 127.53 390.853 129.309C393.362 128.843 395.316 130.301 393.479 127.355C391.699 124.992 389.249 126.276 386.886 124.846C384.873 124.088 382.686 124 380.556 123.388H380.615ZM329.801 122.192C330.53 122.688 330.034 122.629 329.801 122.192ZM314.982 122.075C315.624 122.425 314.486 122.367 314.982 122.075ZM328.692 120.967C329.159 121.754 328.925 121.054 328.692 120.967ZM329.421 120.792C330.734 121.638 330.063 121.9 329.421 120.792ZM329.275 120.413C329.713 120.442 329.188 120.763 329.275 120.413ZM313.699 120.383C314.399 120.442 313.349 121.608 313.699 120.383ZM328.546 119.625C329.188 121.171 328.43 120.704 328.546 119.625ZM328.925 119.508C330.092 120.004 328.78 120.383 328.925 119.508ZM327.904 118.75C329.1 118.808 327.321 119.042 327.904 118.75ZM297.451 117.612C298.297 117.875 297.072 118.371 297.451 117.612ZM297.276 117.029C298.151 117.233 296.984 117.116 297.276 117.029ZM295.876 115.133C296.226 115.512 295.234 115.045 295.876 115.133ZM293.863 114.141C294.592 114.433 293.834 114.403 293.863 114.141ZM298.093 105.944C299.493 106.178 297.188 106.498 298.093 105.944ZM307.981 104.69C308.565 104.777 308.477 104.777 307.981 104.69ZM308.127 103.494C309.848 103.902 307.194 103.698 308.127 103.494ZM308.419 103.29C309.907 103.756 307.806 103.552 308.419 103.29ZM311.628 101.452C312.853 102.269 309.207 102.444 311.628 101.452ZM310.169 100.081C310.373 100.694 309.557 100.548 310.169 100.081ZM282.166 98.1266C282.924 98.3892 281.553 98.185 282.166 98.1266ZM327.029 97.9808C328.809 99.7602 327.992 98.2141 327.029 97.9808ZM322.012 96.8432C323.266 97.339 321.166 97.1057 322.012 96.8432ZM317.199 96.2889C317.491 96.639 316.616 96.4056 317.199 96.2889ZM317.17 95.9389C317.812 95.9972 316.528 95.9972 317.17 95.9389ZM320.262 95.7639C320.991 96.814 320.641 95.7055 320.262 95.7639ZM316.937 95.7055C317.141 96.2014 316.207 96.639 316.937 95.7055ZM321.05 95.618C321.487 95.9681 320.437 95.7347 321.05 95.618ZM319.387 95.618C320.729 95.6472 319.679 96.5515 319.387 95.618ZM321.604 95.5013C321.575 96.8432 320.699 96.2889 321.604 95.5013ZM329.013 95.1805C330.355 95.618 328.05 95.8514 329.013 95.1805ZM287.621 95.0055C287.737 95.5013 283.799 95.8805 285.9 96.8723C285.17 98.4183 281.758 96.4348 282.603 98.36C283.041 98.7392 281.145 100.052 284.062 100.081C279.599 102.385 286.921 100.694 282.428 101.773C280.824 102.823 281.378 102.531 281.816 103.494C281.524 103.669 283.041 104.807 285.112 103.202C286.891 102.59 290.188 102.852 289.283 99.6727C289.458 97.4266 292.93 95.5888 288.175 95.4722C285.695 96.8723 289.779 94.6846 287.592 95.0346L287.621 95.0055ZM321.108 94.2762C322.916 97.3682 316.528 94.1887 321.108 94.2762ZM324.871 94.1887C324.958 94.7721 324.287 94.0137 324.871 94.1887ZM291.675 94.072C292.755 94.5387 290.829 94.8888 291.675 94.072ZM289.692 93.7511C291.442 94.5387 288.467 94.072 289.692 93.7511ZM320.904 93.4011C321.516 93.6928 320.787 94.2179 320.904 93.4011ZM290.742 93.1677C290.713 94.2762 289.692 93.8386 290.742 93.1677ZM323.996 95.7639C325.279 95.2971 323.733 96.6098 323.996 95.7639ZM324.142 93.1094C324.112 95.1513 321.4 92.2051 322.333 95.268C325.162 96.0556 319.679 95.9972 323.558 96.7557C323.296 95.7055 325.6 93.9553 324.142 93.1094ZM289.663 91.7384C289.488 92.176 289.138 91.9718 289.663 91.7384ZM317.928 91.1258C317.958 92.4385 316.411 91.505 317.928 91.1258ZM290.013 90.98C290.538 91.0675 289.575 91.2133 290.013 90.98ZM321.954 90.2507C321.983 90.7758 320.904 90.2216 321.954 90.2507ZM332.98 90.1924C331.609 94.8013 331.172 91.7092 332.98 90.1924ZM288.379 90.1632C288.817 91.3884 287.65 90.5716 288.379 90.1632ZM288.321 89.9007C288.729 89.9007 288.146 90.2507 288.321 89.9007ZM290.246 89.5507C292.9 91.8259 288.379 90.7758 290.246 89.5507ZM288.642 89.434C289.429 90.1632 287.241 89.7548 288.642 89.434ZM321.079 89.2881C317.957 90.9216 314.807 92.4385 319.824 90.8341C321.312 91.3592 320.699 89.8715 321.079 89.2881ZM336.218 88.8797C336.247 92.8177 332.863 90.3383 336.218 88.8797ZM336.597 88.7339C337.414 88.7922 335.897 89.1131 336.597 88.7339ZM290.509 87.6254C290.1 90.1632 287.241 88.7922 290.509 87.6254ZM342.723 87.3337C345.494 88.3839 339.047 88.9673 342.723 87.3337ZM295.876 87.1587C293.455 86.6045 290.479 89.6382 291.646 90.3966C291.179 91.7676 289.458 92.3801 290.859 92.5552C293.717 88.9381 288.933 98.3017 292.113 92.9344C292.025 93.5761 293.951 93.5178 291.734 96.0264C292.9 97.1349 296.518 94.247 294.972 97.6016C297.772 99.6435 293.075 99.906 292.959 100.169C292.2 100.781 294.213 102.56 291.209 103.173C290.684 104.982 298.764 102.852 294.68 104.836C292.084 104.282 287.504 109.736 292.346 106.907C295.234 105.682 300.426 106.907 303.489 104.632C299.522 104.865 307.806 100.373 301.943 100.898C302.147 100.635 299.201 98.0975 301.301 98.7976C299.172 96.7265 298.443 92.7885 294.651 93.1969C297.976 93.2844 299.668 87.2462 294.33 89.609C293.396 88.4714 296.576 89.0548 295.934 87.1587H295.876ZM343.773 87.1295C344.561 87.6838 343.219 87.3629 343.773 87.1295ZM296.693 86.7212C297.072 86.9837 296.284 87.0129 296.693 86.7212ZM295.992 86.5753C296.955 86.8378 295.38 87.1879 295.992 86.5753ZM343.656 86.2544C344.123 86.0794 343.51 86.7212 343.656 86.2544ZM342.664 86.1961C344.677 87.3629 339.981 86.6628 342.664 86.1961ZM296.168 86.0794C298.239 86.5461 295.497 86.9837 296.168 86.0794ZM296.751 85.5835C297.247 86.1378 296.313 85.671 296.751 85.5835ZM311.511 85.5252C311.715 86.4295 311.044 85.7294 311.511 85.5252ZM335.43 85.146C335.81 85.0293 334.759 85.671 335.43 85.146ZM325.804 97.3391C327.846 97.8641 325.658 95.5889 325.804 97.3391ZM324.462 97.3099C325.629 97.1349 325.221 96.9015 324.462 97.3099ZM347.711 84.971C345.377 85.0876 343.744 86.2544 344.356 87.1004C347.594 87.3337 345.815 93.7803 342.869 89.3756C339.485 89.7257 339.368 94.8888 342.344 95.3847C350.482 98.1266 337.531 97.3682 337.21 97.3391C334.818 94.3637 329.509 99.6726 326.621 97.8641C324.812 96.1722 323.354 98.8851 321.429 98.1558C321.779 96.8432 318.774 96.8432 318.92 95.7055C319.562 94.3929 319.912 93.1094 320.962 93.1969C322.508 91.4759 318.833 92.526 320.262 91.0383C318.133 91.9134 318.133 91.505 316.441 92.7302C316.674 93.9262 317.141 94.8013 317.432 96.0556C317.491 97.5432 318.512 98.7684 319.066 99.0017C316.207 98.3892 317.695 99.9935 314.515 99.2059C315.391 100.577 308.886 99.0309 308.623 103.144C312.065 104.369 305.385 103.815 308.915 104.515C305.648 104.136 304.393 106.382 301.593 108.278C300.776 111.662 295.001 106.003 297.509 111.195C293.396 110.057 288.496 112.216 293.309 113.324C295.817 113.82 296.897 115.774 297.743 118.429C300.397 121.258 296.605 117.525 297.451 121.317C297.714 126.48 292.492 123.417 289.313 123.913C285.462 123.563 283.741 123.067 281.612 124.555C280.124 125.926 283.537 127.063 282.195 126.742C280.562 128.901 283.974 126.217 281.553 128.347C282.983 130.622 279.482 133.714 280.036 135.96C281.378 134.764 279.803 137.01 280.999 136.66C279.57 139.811 281.699 140.715 284.791 139.49C285.9 141.882 287.358 143.632 289.838 140.977C294.563 141.823 296.897 138.906 299.493 135.96C296.926 131.118 304.131 130.039 305.969 127.413C304.948 124.409 309.031 122.688 311.598 124.846C314.749 123.738 319.941 118.867 321.05 125.284C323.208 127.384 326.038 129.368 328.867 130.739C329.742 131.614 333.943 134.006 332.105 136.456C330.413 140.015 337.122 133.889 333.272 133.131C333.651 129.047 339.806 135.552 335.751 130.826C331.93 128.755 332.105 128.084 328.284 126.247C326.884 123.534 323.033 120.296 324.929 118.954C328.43 117.496 326.213 118.925 327.817 120.558C329.275 117.729 330.617 122.542 331.084 123.009C333.826 124.234 336.305 125.751 335.226 125.517C337.618 126.538 339.66 127.18 339.222 130.272C338.581 131.935 341.06 134.443 342.869 135.26C339.835 137.01 350.22 136.952 345.669 137.331C340.798 135.843 345.29 142.815 346.573 140.802C347.594 141.911 346.223 137.885 347.478 138.76C346.136 136.631 351.503 139.373 347.769 136.456C344.415 134.181 349.169 135.756 345.727 131.993C346.048 129.572 348.382 134.531 347.623 131.993C348.936 133.306 348.003 131.205 349.257 131.993C346.398 129.514 352.845 130.622 354.303 131.06C351.328 133.889 357.366 128.901 358.825 129.659C355.703 128.347 354.653 125.546 357.337 123.505C357.775 121.083 356.929 120.471 359.146 120.208C358.475 117.233 360.662 119.304 360.021 116.825C360.925 116.679 365.155 115.045 363.638 116.504C359.933 116.941 370.959 117.233 365.038 118.925C366.759 119.567 367.021 123.009 369.909 120.646C372.389 119.742 373.906 119.1 370.376 119.158C369.268 118.225 370.93 120.267 369.297 118.4C368.363 117.729 365.971 117 368.626 117.262C368.655 118.633 370.23 115.804 369.938 117.233C371.776 114.987 375.422 116.125 376.298 113.383C379.215 113.587 378.252 111.049 377.931 110.174C379.71 107.49 373.701 108.92 373.03 106.878C370.259 108.103 366.438 104.777 366.584 103.581C364.921 100.606 359.641 104.165 360.662 100.081C365.359 100.11 359.525 98.0683 358.825 96.2306C359.466 92.2051 353.545 95.093 352.874 91.6509C350.978 90.5133 352.203 86.4295 351.736 85.2627C350.336 85.5252 349.024 84.9418 347.623 84.9418L347.711 84.971ZM311.54 84.4751C312.123 85.1168 310.548 84.7376 311.54 84.4751ZM342.752 84.0375C343.802 83.5708 343.044 84.7376 342.752 84.0375ZM312.269 83.9792C311.598 85.1752 311.103 84.1542 312.269 83.9792ZM337.851 83.8625C338.843 84.0084 337.326 84.0084 337.851 83.8625ZM337.035 83.3666C337.531 83.8333 336.568 83.5708 337.035 83.3666ZM341.702 83.3374C342.431 83.4833 340.885 83.4541 341.702 83.3374ZM342.023 83.2499C342.373 83.425 341.614 83.3083 342.023 83.2499ZM337.385 83.1624C339.077 83.6 336.539 83.9792 337.385 83.1624ZM311.044 83.0166C311.657 83.2791 311.044 83.8625 311.044 83.0166ZM341.002 82.9582C341.731 83.1624 340.973 83.5416 341.002 82.9582ZM334.789 82.9291C335.897 83.425 334.614 83.3666 334.789 82.9291ZM299.785 82.7249C301.243 84.3876 298.443 84.5918 299.785 82.7249ZM340.156 82.6957C340.739 82.8124 339.835 82.9582 340.156 82.6957ZM300.718 82.6374C301.272 82.6374 300.456 82.9874 300.718 82.6374ZM311.073 82.4915C311.773 82.3748 311.307 82.8124 311.073 82.4915ZM300.31 82.4915C300.806 82.8707 299.843 83.1333 300.31 82.4915ZM300.689 82.3165C301.243 82.2873 300.31 82.7249 300.689 82.3165ZM311.073 81.2372C311.657 81.5581 310.665 81.7331 311.073 81.2372ZM311.044 79.7204C311.861 80.1871 311.803 79.7204 311.044 79.7204ZM311.307 79.4578C311.89 79.3995 311.103 79.837 311.307 79.4578ZM312.328 78.7286C313.261 78.6119 312.182 79.4578 312.328 78.7286ZM312.911 78.5536C313.465 78.7578 312.532 79.1078 312.911 78.5536ZM314.311 77.8243C314.69 77.766 314.574 78.1744 314.311 77.8243ZM314.486 77.5034C315.04 77.4451 314.428 77.766 314.486 77.5034ZM315.799 77.0951C316.674 77.1534 314.982 77.4743 315.799 77.0951ZM316.149 77.0076C316.441 77.0367 315.945 77.4743 316.149 77.0076ZM316.674 76.8034C317.432 76.9492 315.886 76.8909 316.674 76.8034ZM317.141 76.6575C317.957 76.8034 316.674 77.0951 317.141 76.6575ZM339.368 76.5992C340.039 77.0076 338.581 76.7742 339.368 76.5992ZM317.374 76.3658C317.753 76.22 317.607 76.745 317.374 76.3658ZM316.557 76.2491C317.578 76.5117 315.711 76.745 316.557 76.2491ZM317.753 75.8699C319.124 76.3658 315.566 76.4242 317.753 75.8699ZM317.666 75.5199C318.687 75.7532 316.266 75.8116 317.666 75.5199ZM342.081 75.374C342.256 75.7824 341.439 75.199 342.081 75.374ZM322.304 73.653C322.916 73.4488 322.216 74.0906 322.304 73.653ZM322.041 73.4196C322.596 73.5363 321.866 73.7989 322.041 73.4196ZM321.545 73.0113C322.362 72.6321 322.158 73.3321 321.545 73.0113ZM321.575 72.8946C322.362 72.8654 320.641 73.2446 321.575 72.8946ZM344.94 72.6321C346.252 72.7487 343.831 73.0113 344.94 72.6321ZM322.887 72.5154C323.529 72.4279 321.837 73.1279 322.887 72.5154ZM323.062 71.2611C323.646 71.4069 322.771 71.757 323.062 71.2611ZM324.608 70.6193C325.688 70.8235 322.975 70.8819 324.608 70.6193ZM324.171 70.2109C324.754 70.386 323.967 70.5902 324.171 70.2109ZM276.361 69.4817C274.698 70.4735 272.365 70.7943 272.248 70.6193C270.002 70.2401 269.477 71.1444 267.902 71.4944C266.122 73.0988 268.048 70.561 266.268 69.9776C263.672 68.8108 266.647 71.9611 264.081 70.1818C262.797 71.0569 264.256 71.1736 262.914 71.4361C260.318 72.2237 265.51 71.2027 265.597 71.8445C265.685 71.6694 266.035 73.0113 264.985 72.7779C262.097 72.8946 261.63 73.5072 265.218 73.4196C265.043 74.3531 266.793 73.3321 265.16 74.3823C267.785 74.0322 260.726 75.9866 266.093 75.4032C267.756 74.9365 268.66 77.3576 271.956 75.9283C273.415 75.1115 277.586 74.9365 278.432 73.303C280.387 72.8654 279.336 72.6029 280.036 71.6403C276.915 71.7278 279.686 69.3942 276.915 69.8317L276.769 69.54L276.332 69.4525L276.361 69.4817ZM328.313 66.3022C329.275 66.5355 327.525 66.5647 328.313 66.3022ZM325.046 66.0688C325.163 66.7105 324.346 66.4772 325.046 66.0688ZM325.338 65.9813C326.096 66.098 324.754 66.5355 325.338 65.9813ZM326.008 65.6021C327.642 65.7188 325.133 66.273 326.008 65.6021ZM326.592 65.5437C326.913 66.1855 326.913 65.2812 326.592 65.5437ZM327.788 65.3104C328.809 65.8063 325.133 66.0396 327.788 65.3104ZM330.209 65.1062C330.676 65.7188 329.334 65.2229 330.209 65.1062ZM327.496 65.077C328.4 64.8728 327.7 65.5437 327.496 65.077ZM328.255 64.4936C329.363 65.1645 325.513 64.6686 328.255 64.4936ZM329.45 64.3478C326.417 66.623 332.718 63.9686 329.363 64.9603L329.625 64.4936L329.45 64.3478ZM327.904 64.2894C328.284 64.4936 327.467 64.4645 327.904 64.2894ZM330.471 64.2603C331.201 64.3478 329.771 64.4645 330.471 64.2603ZM329.509 63.706C330.296 64.3186 327.904 64.2311 329.509 63.706ZM332.309 63.006C334.293 64.7562 328.225 63.0351 332.309 63.006ZM333.855 62.4226C334.701 63.2685 332.455 63.0935 333.855 62.4226ZM351.97 62.2475C352.553 62.7143 351.211 62.2475 351.97 62.2475ZM337.21 62.2184C337.093 62.8018 336.48 62.1309 337.21 62.2184ZM348.849 62.1017C351.328 62.8309 349.344 62.4809 348.849 62.1017ZM335.605 62.0433C336.305 62.3642 333.826 62.5392 335.605 62.0433ZM337.326 61.985C338.085 62.16 336.743 62.1017 337.326 61.985ZM333.943 61.7808C333.593 62.9184 336.48 61.8392 334.351 61.9558L333.943 61.7808ZM336.947 61.5183C337.531 62.2767 335.751 61.6641 336.947 61.5183ZM334.555 61.4891C334.993 62.0433 334.059 61.6933 334.555 61.4891ZM335.139 61.4016C336.568 61.7225 335.46 62.1892 335.139 61.4016ZM340.01 61.3433C341.439 61.4308 339.018 61.635 340.01 61.3433ZM340.885 60.8182C342.927 60.9057 339.339 61.8683 340.885 60.8182ZM340.681 60.4682C342.81 60.5265 336.889 61.4016 340.681 60.4682ZM342.052 59.9431C342.664 60.2056 341.556 60.1765 342.052 59.9431ZM342.052 60.9641C342.548 60.2931 341.06 60.9057 342.052 60.9641ZM329.217 66.2438C329.859 66.3605 328.459 66.4188 329.217 66.2438ZM326.767 68.4024C327.292 68.0524 326.358 67.994 326.767 68.4024ZM322.012 73.9447C322.771 74.0322 321.545 73.6238 322.012 73.9447ZM323.091 88.7339C322.712 88.4422 322.391 89.5798 323.091 88.7339ZM332.747 78.5536C332.951 78.6119 332.718 79.1078 332.747 78.5536ZM340.973 76.7742C341.206 76.395 340.331 76.6867 340.973 76.7742ZM342.869 83.6875C341.848 83.1041 341.673 85.2918 342.869 83.6875ZM347.857 59.8556C346.427 61.9558 346.048 59.5639 344.065 61.5183C344.969 58.1929 339.893 63.3852 338.318 61.6933C340.36 62.2767 335.314 63.8227 336.043 62.5392C335.139 62.7143 331.726 64.3769 330.909 65.1937C333.68 65.6604 328.021 66.2147 329.421 66.4188C326.504 66.7981 331.288 67.5856 327.409 67.7315C329.946 67.9357 322.275 69.8609 326.125 70.1526C323.996 70.561 324.025 73.0988 323.004 73.2446C321.195 74.2364 318.22 77.0367 321.079 75.5199C323.821 75.9866 316.266 76.5992 316.762 77.6493C317.257 78.116 313.524 77.2409 315.857 78.2035C313.203 78.3785 313.699 78.3202 314.603 79.0495C313.611 78.8453 309.965 79.8079 312.94 80.0121C309.994 80.6246 311.598 82.5207 315.245 81.1205C313.553 81.7914 309.206 82.2873 312.736 83.8042C315.974 82.5207 309.323 85.9627 313.115 86.1086C312.736 86.0794 311.132 88.5297 314.778 88.7339C318.949 88.8506 321.575 82.0248 322.45 88.238C323.325 87.9463 322.537 88.3839 323.296 90.3383C326.329 91.8551 323.354 96.3473 327.846 94.8013C327.496 92.3801 332.98 93.8095 331.842 89.959C332.688 88.5297 330.355 87.2171 332.688 87.3921C332.922 86.6628 336.276 86.2253 334.293 85.6127C337.064 85.3502 334.964 83.2208 333.213 82.8124C331.901 81.7623 332.251 79.9537 332.805 80.1871C332.397 78.116 334.147 77.2117 334.059 77.4159C335.897 76.2783 340.535 75.2574 338.522 73.2446C340.36 71.7861 340.068 70.8819 342.256 71.2611C345.757 70.6485 347.157 73.7697 343.015 75.024C341.41 76.3658 340.477 76.57 339.397 77.6785C340.273 79.837 338.727 83.2208 342.023 83.425C343.481 84.5626 343.19 84.8835 347.011 83.775C348.586 83.1041 352.261 83.5708 354.303 80.8288C357.162 79.2245 357.745 76.5408 354.041 75.7824C355.645 73.9739 351.649 72.6321 353.195 70.6777C349.461 68.9858 354.945 66.3897 350.132 65.7479C348.09 63.181 356.316 63.356 350.365 62.0142C355.937 61.7225 349.111 60.1181 348.353 60.7599C348.528 60.1765 349.578 59.7973 347.74 59.9139L347.857 59.8556ZM344.998 59.7097C346.019 60.439 343.102 59.9431 344.998 59.7097ZM291.15 59.7097C289.546 61.3141 288.7 60.0598 291.15 59.7097ZM333.534 52.8548C334.322 53.5549 332.134 52.9131 333.534 52.8548ZM336.626 45.7373C332.251 47.8667 343.831 47.4583 338.581 45.9998L337.531 45.7957L336.626 45.7665V45.7373ZM335.664 45.0372C339.543 45.7373 331.405 45.7957 335.664 45.0372ZM320.991 44.8622C324.258 45.6498 322.45 46.3791 320.991 44.8622ZM343.569 44.7747C344.298 45.1831 342.256 44.8914 343.569 44.7747ZM346.048 44.3955C349.724 44.5997 342.373 44.8039 346.048 44.3955ZM334.351 44.1913C336.422 44.1038 333.884 44.658 334.351 44.1913ZM333.884 43.6954C333.534 43.8413 332.63 43.6371 333.884 43.6954ZM320.962 42.9662C321.895 43.0828 320.058 43.2579 320.962 42.9662ZM329.159 42.7328C327.759 44.483 328.575 43.4329 325.863 43.2287C326.067 44.7747 322.391 42.7328 324.958 42.9662C318.074 41.9452 323.675 47.8376 327.554 45.0081C333.272 45.1247 320.816 46.6708 327.788 46.5541C331.755 46.3791 324.696 46.7874 328.225 47.1083C323.062 46.8749 327.788 48.8293 328.138 48.3918C331.317 49.2377 332.455 44.2205 335.635 44.658C333.184 44.8914 331.434 42.937 329.159 42.7328ZM344.531 42.2953C345.348 42.2953 343.744 42.5286 344.531 42.2953ZM351.795 42.1786C349.986 42.8495 348.09 42.2661 351.795 42.1786ZM331.58 41.9744C331.463 42.6161 330.121 41.8869 331.58 41.9744ZM333.126 41.8869C326.708 43.1704 340.943 42.8495 334.03 43.2579C335.605 45.1539 347.74 42.937 340.331 42.0327C337.881 41.9452 335.547 42.6161 333.126 41.8869ZM334.409 41.5077C334.847 41.5952 334.001 41.6243 334.409 41.5077ZM334.351 41.3618C335.839 41.4785 333.243 41.4493 334.351 41.3618Z" fill="#213B84"/>
                <circle id="Ellipse 957" cx="338.5" cy="108.5" r="7.5" fill="#750977"/>
                </g>
                <g id="North America" data-area="north-america">
                <path id="Vector_8" d="M264.112 36.4901C258.19 36.4318 253.319 37.6861 247.339 37.1902C254.077 37.8611 251.364 38.6779 245.618 38.2695C240.98 37.2194 237.304 39.6405 232.666 38.9112C226.774 38.357 219.773 40.4281 214.756 41.0698C215.923 43.6076 208.922 43.4909 204.867 44.6577C197.75 45.4161 213.064 47.3705 204.138 47.6622C201.979 49.2374 211.314 48.1289 213.122 49.2082C216.331 50.375 221.173 53.3795 218.869 54.3713C218.577 58.1342 219.511 58.2801 221.844 58.951C225.52 61.6346 213.881 60.0886 222.165 61.693C221.815 65.1934 212.218 66.7102 218.169 66.156C217.206 67.2061 215.31 67.1478 215.048 67.5853C212.481 70.3856 223.624 66.4477 217.235 69.1605C212.656 70.794 215.748 74.9945 217.148 73.536C214.581 73.2443 215.31 77.4448 216.827 80.391C217.235 83.3663 223.186 80.7118 223.303 83.7455C226.366 83.3663 227.27 79.6617 229.341 77.2698C232.783 75.9863 232.491 72.6026 234.446 73.5943C235.262 70.8815 241.68 69.073 245.268 69.1022C252.152 65.4851 259.124 64.2599 266.533 62.1014C266.562 59.9136 257.198 61.8972 262.361 60.3803C262.682 57.1133 259.269 57.5217 266.124 59.4177C272.133 62.6556 269.012 55.3048 264.637 55.5673C264.17 52.9712 271.725 54.663 273.942 52.767C275.692 52.8545 273.738 49.2666 273.3 47.8664C276.13 47.9247 279.776 42.4408 278.959 41.7115C281.701 41.0406 280.593 40.3697 286.631 39.6988C292.465 38.7654 280.213 39.6988 277.909 39.6113C273.417 41.2448 270.266 37.7736 265.92 38.882C259.736 39.1446 271.521 38.6487 273.884 38.3278C282.08 37.5986 263.995 37.2777 271.871 36.6943C269.304 36.6068 266.708 36.5484 264.141 36.4609L264.112 36.4901ZM229.458 77.2698C229.195 77.2989 228.787 77.9407 229.458 77.2698ZM224.645 83.3663C225.578 84.3872 222.603 83.658 224.645 83.3663ZM254.281 36.811C257.432 37.0443 252.735 37.7444 254.281 36.811ZM263.674 37.161C273.242 37.0443 261.34 37.2485 261.603 37.336C262.303 37.2777 262.974 37.2194 263.674 37.161ZM214.989 37.2485C208.63 37.1902 203.059 38.0069 196.758 38.4153C192.528 38.4737 188.24 39.3488 183.952 39.3488C184.011 40.1364 190.107 40.1072 188.824 40.2239C181.648 40.6906 191.128 40.5739 193.637 40.8948C199.179 39.6405 202.3 40.7489 195.037 41.3907C192.587 42.2366 195.008 42.8492 188.24 42.1491C188.59 44.5119 186.461 44.1618 182.931 45.2119C182.815 46.4079 188.736 45.2119 185.586 45.9995C182.436 46.4954 176.631 47.0496 175.347 48.304C180.831 49.4124 186.228 47.9247 191.682 47.6039C182.844 47.108 189.786 46.5246 194.57 45.9412C202.563 45.1828 193.024 43.4326 198.217 43.3451C204.867 41.624 211.781 40.9239 218.519 39.5238C212.481 40.078 211.081 40.3697 215.339 39.4654C218.869 38.7945 228.845 37.8903 219.948 37.7152C218.286 37.5986 216.623 37.4527 214.96 37.3069M198.217 38.6195C197.341 38.5028 197.021 38.4445 198.217 38.6195ZM245.443 37.7444C243.663 37.9778 243.08 38.3278 245.443 37.7444ZM237.159 38.3862C238.763 39.0862 236.488 39.0279 237.159 38.3862ZM279.134 38.6195C280.272 39.3196 278.376 38.9112 279.134 38.6195ZM179.723 39.8738C177.418 41.9741 167.938 42.47 175.522 43.1992C177.36 43.3742 176.164 46.7579 182.873 44.2493C190.078 43.4909 181.152 41.624 179.723 39.8738ZM174.589 40.8073C176.66 40.9823 176.281 40.9531 174.589 40.8073ZM168.697 41.7699C166.946 42.2658 166.363 42.4408 168.697 41.7699ZM159.216 43.3742C153.149 45.5911 169.892 45.1828 160.237 43.6951L159.508 43.4617L159.216 43.3742ZM157.524 44.7452C156.387 44.7452 156.066 44.7452 157.524 44.7452ZM167.267 44.3368C166.538 47.9831 165.167 43.8993 167.267 44.3368ZM149.357 44.4827C145.127 44.2202 143.406 46.087 149.357 44.4827ZM180.423 44.8327C179.606 45.1828 179.169 45.387 180.423 44.8327ZM147.461 45.3578C142.881 45.0077 141.131 48.7123 147.461 45.3578ZM158.487 45.8537C159.916 45.8537 159.566 45.8537 158.487 45.8537ZM168.901 45.9704C172.809 45.7662 170.972 47.4289 168.901 45.9704ZM152.799 46.1745C153.091 47.6039 153.032 47.2538 152.799 46.1745ZM135.822 46.5829C133.634 46.9913 123.337 48.0706 127.246 49.7041C130.425 49.3541 133.372 48.7998 135.822 46.5829ZM165.925 47.4289C166.042 51.5418 171.001 53.0003 175.551 52.2711C178.089 52.2711 190.195 50.9293 183.34 50.55C179.256 50.0542 173.539 51.5418 171.03 48.5081C169.367 47.8956 167.676 47.5455 165.925 47.4289ZM173.48 47.7789C173.014 48.654 172.955 48.7707 173.48 47.7789ZM146.586 47.8664C142.473 49.8791 138.039 49.4124 133.926 49.2374C134.334 50.2875 128.384 51.4543 135.822 50.6667C133.167 53.6129 138.972 51.571 143.319 50.8417C145.448 49.7625 151.574 51.0459 146.586 47.8664ZM157.845 48.0123C159.1 48.0123 158.691 48.0123 157.845 48.0123ZM277.938 48.0706C277.734 49.004 277.646 49.4416 277.938 48.0706ZM153.178 48.0998C149.765 49.1791 152.449 50.2292 153.966 49.2374C152.974 49.6749 153.936 48.1873 153.178 48.0998ZM160.558 48.1873C157.524 47.8081 148.307 50.7542 155.658 50.2292C152.157 52.4461 161.9 50.1708 160.558 48.1873ZM274.846 48.2164C275.371 48.3915 274.146 48.479 274.846 48.2164ZM275.342 48.5373C276.042 48.5957 274.292 49.004 275.342 48.5373ZM131.505 49.1499C127.829 50.2 127.158 50.4042 131.505 49.1499ZM163.154 50.025C159.42 50.3167 168.026 51.1626 163.213 50.025H163.154ZM149.678 50.4917C149.298 51.1043 148.978 51.6585 149.678 50.4917ZM218.694 51.9502C219.511 52.2127 217.09 52.4169 218.694 51.9502ZM119.487 52.2127C116.686 53.9629 106.827 55.684 111.64 58.8343C117.066 57.23 122.52 55.6548 127.946 54.0504C125.117 53.5254 122.345 52.4169 119.487 52.2419V52.2127ZM164.613 53.0003C162.25 52.9712 152.478 58.9802 158.341 56.0923C160.033 54.5172 165.78 56.2965 164.613 53.0003ZM155.132 53.0878C152.916 54.0796 142.531 55.2172 148.044 57.0258C152.536 58.1342 155.162 55.5381 154.928 53.467C156.095 53.0878 157.174 53.0295 155.103 53.0878H155.132ZM173.451 53.5546C171.205 55.3048 160.179 57.8134 164.7 59.0093C159.946 59.3302 167.092 62.218 171.118 61.3429C175.347 60.497 180.481 62.1305 182.115 64.0849C178.848 69.3647 191.537 69.3355 184.157 68.8688C179.694 70.1523 175.347 71.99 170.651 72.3984C175.056 73.361 178.41 73.0401 180.306 76.4822C186.024 79.2825 186.811 77.3864 186.869 75.8988C191.362 77.9115 193.783 73.0985 189.641 71.0274C192.003 67.0603 195.125 74.9945 198.45 69.6856C201.717 66.2435 195.095 68.9563 195.65 65.4267C189.728 64.5516 192.441 63.3265 194.366 62.9765C194.016 61.8972 192.12 60.8179 189.786 59.4177C191.041 58.1051 184.594 59.1552 186.14 57.2591C184.069 55.7131 175.318 59.0677 179.402 55.684C173.947 54.1963 173.422 55.2172 169.572 59.0677C164.292 61.2554 176.31 54.488 173.451 53.5546ZM143.464 53.6712C141.743 54.1088 137.66 55.1881 143.464 53.6712ZM181.677 53.9046C189.961 54.0504 180.335 58.1342 181.677 53.9046ZM217.585 53.9629C218.84 53.9629 218.431 53.9629 217.585 53.9629ZM139.643 54.5172C135.968 58.6301 132.847 56.0923 128.529 54.6922C125.904 56.034 114.469 58.951 122.55 58.3968C116.57 58.8635 118.495 60.9054 124.679 60.4678C121.091 61.8388 112.107 60.0303 119.049 64.6975C125.846 64.9017 132.322 61.4305 139.176 63.2098C137.105 63.1223 145.798 57.6967 140.022 54.6922L139.643 54.5172ZM269.275 55.1297C272.046 54.8089 266.533 58.8635 269.275 55.1297ZM219.219 55.2756C219.336 55.0422 217.965 56.1215 219.219 55.2756ZM155.833 57.58C149.999 59.126 154.462 63.5599 149.707 64.96C143.435 70.0356 148.307 63.9974 141.568 65.7476C136.989 67.2061 132.555 65.0767 128.325 64.5516C125.087 65.9226 134.305 63.5015 126.692 66.8269C124.533 69.7439 120.829 66.4185 117.707 64.5225C112.019 63.3265 105.923 63.7057 100.818 60.7595C96.9091 61.5471 88.7415 63.8807 96.9383 61.1679C90.1417 63.0056 83.1117 63.0056 76.1109 63.064C76.461 60.9929 67.9725 61.4596 64.8513 60.7595C59.8924 60.7887 57.2379 58.8635 55.4002 59.2135C47.466 60.7887 39.7068 62.8306 31.9767 65.4267C36.994 68.8105 35.1271 69.3355 30.4599 69.4814C28.0388 69.7439 17.5376 69.8022 22.6715 72.6317C28.7972 73.7402 28.9139 73.4485 22.7298 75.9863C18.9086 76.9197 13.5413 77.7948 11.4119 81.0327C12.5203 81.6161 8.05733 85.2915 14.4456 82.6662C8.17401 86.5167 13.9205 88.0335 18.121 86.8084C14.6498 89.5795 9.34081 91.4756 4.99448 93.5758C0.414792 93.78 -5.53589 96.8428 2.86507 94.3926C9.74919 93.3424 15.8457 89.492 22.6132 87.7126C27.0762 83.8914 33.1144 82.2578 38.6275 80.741C36.2939 82.2287 27.0178 86.7208 34.427 84.2997C37.5774 84.0955 42.4779 79.37 43.7614 82.5787C47.8452 84.5039 53.475 82.5495 55.1377 87.2459C55.7503 86.925 61.9343 83.6288 58.5214 89.9004C59.5716 93.3133 55.2836 97.1637 60.155 94.0425C60.5925 93.7508 58.4047 98.418 57.8505 100.693C58.7548 102.881 55.9836 104.515 57.0338 104.748C56.3629 105.448 60.5633 106.381 54.6127 105.535C50.8206 106.644 61.3509 114.141 58.4339 109.065C56.1295 103.669 60.5633 106.031 61.1467 109.619C62.7219 110.786 57.0338 116.153 58.5506 113.966C61.0884 114.374 58.4923 109.328 55.9545 112.828C54.3793 116.474 56.1295 115.978 53.8542 117.583C51.4331 121.812 47.4077 124.379 46.27 129.163C44.1406 131.234 43.4405 136.047 44.9282 137.681C46.3575 137.068 43.2072 140.627 45.3366 143.952C44.4323 147.394 51.5498 147.015 50.4997 151.362C51.7248 155.416 53.4167 160.025 51.9582 163.467C56.0712 165.48 55.2252 173.006 59.6882 172.86C57.238 167.143 55.5461 161.192 53.7959 155.241C59.5132 152.353 58.5506 161.134 60.68 164.488C62.9553 172.072 69.6352 177.673 70.0436 185.957C75.8192 188.903 81.1574 193.308 88.0123 192.433C92.4461 193.425 95.1006 198.15 98.8344 192.375C97.9009 186.191 105.893 188.758 106.564 183.303C111.436 176.477 102.889 182.778 99.6803 183.857C96.5299 186.541 90.9293 186.861 87.8081 185.257C85.7662 180.94 83.8993 176.273 86.408 171.693C87.8956 169.214 87.6914 165.042 88.4499 164.051C89.5 161.338 90.4042 162.067 91.8044 161.104C92.1253 162.65 95.5965 157.4 96.1216 158.654C96.9675 158.625 98.3676 157.108 101.314 158.596C103.21 158.917 104.668 159.646 106.652 159.471C108.986 160.463 103.56 155.445 107.177 157.021C111.173 155.591 111.552 156.729 113.098 156.466C115.636 155.475 114.761 158.508 116.832 158.012C120.42 154.774 121.324 162.709 120.537 162.855C120.449 163.409 120.858 166.413 122.287 168.572C123.629 171.168 124.854 169.505 125.175 165.509C125.496 162.563 124.679 160.871 125.204 161.688C124.504 158.537 124.329 153.783 126.225 153.053C127.158 151.012 130.017 150.632 131.826 148.824C133.167 146.84 139.731 145.557 137.164 144.682C137.718 143.807 142.064 143.136 139.147 142.465C138.681 141.473 141.714 141.852 140.722 141.502C137.951 137.623 140.518 141.444 139.76 137.243C140.897 136.485 138.885 135.551 141.043 136.514C141.423 132.984 144.748 132.984 141.627 135.143C142.91 135.376 139.818 141.56 142.939 137.36C145.215 134.414 143.406 131.788 145.156 134.589C148.453 132.518 146.469 129.922 151.34 129.192C154.257 127.909 158.633 128.376 156.124 127.209C155.658 125.225 160.091 121.667 159.8 122.629C161.9 120.821 163.154 121.871 165.809 120.208C170.913 118.341 172.576 118.808 167.646 122.046C167.092 122.892 178.935 119.77 175.843 118.75C169.367 118.808 175.96 108.365 171.088 110.144C168.171 109.153 159.07 116.445 162.746 113.178C167.238 110.494 171.088 105.973 176.806 106.965C182.581 107.198 187.949 105.973 192.878 102.939C200.492 99.5265 188.678 96.6678 190.778 97.1054C197.633 95.8511 184.828 94.1884 188.474 91.0672C187.599 89.667 188.94 81.4702 185.732 84.4164C182.756 86.1666 177.331 89.9295 177.623 85.4374C178.527 82.0828 178.206 80.0993 172.489 78.7283C167.996 79.545 163.679 81.4411 162.308 86.2541C160.704 90.7171 158.837 95.0343 154.345 97.2512C151.049 98.2138 149.707 108.54 147.023 103.756C146.352 99.7307 149.123 93.6633 142.735 94.0425C138.856 92.0298 132.555 92.4382 132.467 87.4793C132.438 84.1831 137.339 80.1576 140.839 78.6408C145.156 75.3154 143.173 74.3528 149.444 74.4111C156.649 72.7192 153.266 71.1441 152.595 70.5315C156.387 70.6482 161.346 67.6437 164.234 69.4522C164.846 67.877 174.531 63.5307 170.184 62.3639C166.684 61.4888 163.446 66.4185 159.45 67.1769C159.304 64.3183 154.403 62.4514 156.708 57.9592L156.008 57.7259L155.833 57.6675M124.912 161.717C125.087 161.746 124.766 161.979 124.912 161.717ZM125.233 163.467C125.058 161.804 125.496 164.809 125.233 163.467ZM86.7579 170.351C86.087 171.985 85.5328 173.297 86.7579 170.351ZM262.565 59.126C263.12 60.0011 257.023 61.4888 262.565 59.126ZM217.323 60.8471C218.14 63.3848 214.931 63.7057 217.323 60.8471ZM171.468 61.7805C171.905 62.2472 170.476 61.8972 171.468 61.7805ZM175.522 61.9847L175.056 62.5681L175.055 62.5684L175.522 61.985L175.522 61.9847ZM146.673 62.1597C147.052 67.8187 144.515 61.868 146.673 62.1597ZM148.277 62.1889C149.561 62.5973 149.036 62.4222 148.277 62.1889ZM88.1581 62.2472C84.7452 62.9181 81.9741 64.3183 87.0788 62.5681L87.8081 62.3347L88.1581 62.218M179.577 64.8725C177.068 65.2809 174.18 68.8688 179.577 64.8725ZM182.115 65.5434C183.456 65.7476 182.931 65.6893 182.115 65.5434ZM200.258 67.352C199.5 67.702 199.033 67.9354 200.258 67.352ZM104.756 67.8187C107.614 69.7147 105.602 70.6482 100.147 71.7566C99.5927 71.8441 95.9757 71.6983 95.859 71.4066C99.3886 69.6564 96.6757 68.5479 103.997 67.9645L104.756 67.8479H104.785L104.756 67.8187ZM159.8 70.2106C153.586 73.2735 155.512 76.1613 161.812 75.1695C165.809 73.6527 160.879 72.0483 159.8 70.2106ZM170.33 75.0237C171.409 75.8696 170.972 75.5196 170.33 75.0237ZM160.15 76.628C156.62 77.9698 156.095 78.1449 160.15 76.628ZM111.815 76.8906C108.898 79.4867 103.122 79.195 99.1552 80.6827C93.6712 82.0828 104.785 77.0364 107.352 78.2907C108.898 78.2032 110.211 77.0072 111.815 76.9197M109.452 77.5615C113.011 77.0364 110.677 77.9698 109.452 77.5615ZM179.664 76.9489C180.977 77.2989 180.423 77.1531 179.664 76.9489ZM163.971 77.9698C162.746 79.37 161.637 80.6243 163.971 77.9698ZM188.095 79.5742C189.524 79.9242 189.261 79.8659 188.095 79.5742ZM164.292 81.6453C163.504 81.7911 162.95 81.9078 164.292 81.6453ZM15.6998 81.9661C15.4081 82.4912 14.1538 82.462 15.6998 81.9661ZM6.83214 82.6079C9.1074 81.7619 4.38186 85.9333 6.83214 82.6079ZM41.3694 82.637C40.3776 83.2788 40.1443 83.4246 41.3694 82.637ZM53.3291 82.7246C56.3628 82.8996 50.558 83.0746 53.3291 82.7246ZM55.0793 83.3371C55.0793 85.7582 55.0793 85.1748 55.0793 83.3371ZM26.8428 83.9497C25.1509 84.7373 23.6924 85.029 26.8428 83.9497ZM58.7839 84.4748C55.2543 85.8749 54.6418 86.1083 58.7839 84.4748ZM60.5633 84.854C60.7092 88.3544 61.0008 87.6251 60.5633 84.854ZM58.2588 87.3626C58.288 91.3589 54.2917 91.1255 58.2588 87.3626ZM55.896 87.6251C59.6006 88.6461 50.9371 91.5339 55.896 87.6251ZM23.9841 88.1502C18.5293 90.4254 19.9003 90.863 25.005 89.0544C23.0506 88.7627 25.18 88.6169 23.9841 88.1502ZM55.2251 89.3461C53.4166 92.8174 53.1541 91.4756 55.2251 89.3461ZM60.2132 89.9879C61.73 92.4382 58.7547 92.0006 60.2132 89.9879ZM57.4712 90.3379C56.0128 93.4883 53.5624 90.6005 57.4712 90.3379ZM155.745 91.6506C157.203 93.4591 150.99 93.5758 155.745 91.6506ZM156.27 92.234C157.349 91.6798 157.058 91.8256 156.27 92.234ZM155.162 91.7381C154.286 92.3215 153.966 92.5257 155.162 91.7381ZM188.007 91.8548C189.349 92.4965 188.269 91.5047 188.007 91.8548ZM56.567 92.0881C55.2543 98.3597 53.7083 93.1091 56.567 92.0881ZM60.0965 92.584C59.3964 93.1966 59.0464 93.4883 60.0965 92.584ZM155.92 92.6715C155.337 93.3424 155.103 93.5758 155.92 92.6715ZM0.677183 94.8009C0.764693 94.8009 0.618843 94.9176 0.677183 94.8009ZM-3.61081 95.0635C-4.04836 95.7635 -6.46947 96.8428 -3.61081 95.0635ZM-8.54054 96.8428C-8.83224 97.4554 -9.29896 97.5721 -8.54054 96.8428ZM52.6873 97.3096C57.1795 96.9012 45.0156 100.372 52.6873 97.3096ZM191.478 97.4846C187.949 98.9139 187.248 99.2056 191.478 97.4846ZM-11.4575 97.5137C-15.483 99.4098 -16.5915 99.9349 -11.4575 97.5137ZM115.694 97.8346C114.878 101.685 113.186 109.794 114.936 101.481C115.199 100.256 115.432 99.0598 115.694 97.8346ZM55.6335 98.5347C55.721 99.8765 55.6918 99.3223 55.6335 98.5347ZM-15.308 98.5639C-16.7373 99.439 -18.2833 100.431 -15.308 98.5639ZM146.79 99.3515C148.307 99.5265 148.073 99.4973 146.79 99.3515ZM51.4913 99.3806C52.7749 100.985 49.5661 101.86 51.4913 99.3806ZM51.6954 100.606C52.2788 100.343 51.4621 101.043 51.6954 100.606ZM57.5295 101.598C58.0545 101.627 56.8586 102.414 57.5295 101.598ZM56.9461 101.86C57.2962 102.181 56.6836 102.735 56.9461 101.86ZM193.899 103.406C191.274 106.323 186.461 108.394 185.09 111.749C189.728 113.353 190.924 113.616 194.92 114.17C195.883 111.982 196.437 108.423 192.82 108.19C189.582 105.886 195.212 105.156 193.899 103.406ZM59.0755 106.031C58.638 106.469 58.1129 106.031 59.0755 106.031ZM58.988 106.206C59.863 105.711 57.5003 108.744 58.988 106.206ZM176.951 107.519C180.219 110.582 179.168 107.694 176.951 107.519ZM59.338 107.636C59.9506 108.715 59.7756 108.394 59.338 107.636ZM116.19 109.444C115.694 110.844 118.232 111.049 116.19 109.444ZM129.492 109.736C133.401 112.42 136.201 116.474 140.577 118.429C138.185 119.275 130.105 127.005 134.626 125.575C139.206 125.225 142.21 120.937 147.023 121.171C152.361 117.437 146.265 123.446 143.902 123.767C140.051 122.425 138.768 127.413 134.48 127.53C130.746 129.863 128.909 127.209 132.409 125.546C135.705 120.208 128.85 124.496 133.692 119.275C130.921 115.803 129.2 120.791 127.888 119.975C125.729 121.696 124.591 129.513 121.733 126.83C122.87 122.571 125.262 119.829 125.087 119.45C127.917 116.416 128.442 117.641 132.905 116.97C134.626 114.141 128.821 116.328 126.079 114.87C124.883 114.053 119.049 115.978 119.049 114.724C123.6 112.595 123.629 111.924 127.158 110.699C125.7 111.807 129.346 109.357 129.521 109.736M128.15 110.232C127.508 110.903 127.217 111.253 128.15 110.232ZM119.662 110.757C119.807 111.515 120.624 111.515 119.662 110.757ZM120.974 111.603C122.754 111.311 121.033 112.39 120.974 111.603ZM127.129 111.632C125.467 112.361 124.912 112.595 127.129 111.632ZM179.839 112.77C178.323 113.791 177.798 114.141 179.839 112.77ZM194.162 112.886C193.549 113.616 193.433 113.761 194.162 112.886ZM164.321 114.141C165.517 114.316 165.196 114.257 164.321 114.141ZM163.154 114.52C162.133 115.278 162.075 115.395 163.154 114.52ZM180.569 115.191C180.773 118.633 175.114 120.296 180.569 115.191ZM173.218 115.395C179.373 115.978 174.56 118.283 173.218 115.395ZM161.783 115.716C161.112 116.883 160.033 117.495 161.783 115.716ZM165.955 116.474C165.75 119.245 165.05 118.195 165.955 116.474ZM160.616 117.058C160.266 117.495 158.399 119.683 160.616 117.058ZM136.785 117.524C137.776 118.312 136.522 119.012 136.785 117.524ZM159.1 118.691C158.312 119.275 158.779 119.129 159.1 118.691ZM165.634 118.808C164.846 120.004 166.596 119.275 165.634 118.808ZM153.237 119.741C149.444 119.916 163.067 119.741 153.237 119.741ZM152.011 129.367C149.824 130.476 149.503 130.913 152.011 129.367ZM147.578 130.738C147.111 131.263 147.811 130.709 147.578 130.738ZM140.839 143.252C140.46 144.186 140.285 144.536 140.839 143.252ZM55.5754 150.603C51.8416 150.107 55.167 151.595 55.5754 150.603ZM55.2545 158.683C55.7796 160.113 55.7213 159.908 55.2545 158.683ZM57.4715 159.588C57.3256 160.492 57.2673 160.959 57.4715 159.588ZM89.2959 162.942C88.9167 163.555 88.5958 164.109 89.2959 162.942ZM121.791 165.742C121.266 166.092 121.645 166.122 121.791 165.742ZM55.1087 169.739C54.8462 171.139 54.3211 170.176 55.1087 169.739ZM-49.6701 177.119C-49.8451 177.935 -49.9326 178.461 -49.6701 177.119ZM-46.7823 178.519C-45.6155 180.473 -48.5908 178.84 -46.7823 178.519ZM-45.2946 179.686C-42.7276 179.511 -46.6364 180.794 -45.2946 179.686ZM-44.2737 180.152C-41.765 180.648 -44.5945 182.253 -44.2737 180.152ZM-45.1488 180.415C-44.4778 181.494 -45.6738 180.386 -45.1488 180.415ZM108.169 181.407C107.585 182.136 107.469 182.311 108.169 181.407ZM-42.9027 182.136C-38.7022 184.207 -46.1697 186.745 -42.9027 182.136Z" fill="#213B84"/>
                <circle id="Ellipse 958" cx="90.5" cy="106.5" r="7.5" fill="#EEAC06"/>
                </g>
              </g>
              <defs>
              <clipPath id="clip0_834_8758">
              <rect width="700" height="407.167" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </div>
            <div className="region-data-row">
              <div className="row align-items-center">
                  <div className="col-md-4">
                    <div className="region-data-box">
                        <div className="data-list">
                          <ul className="list-unstyled m-0">
                              <li>
                                <div className="data-single">
                                    <p>Total number of Regions</p>
                                    <h1>6</h1>
                                </div>
                              </li>
                              <li>
                                <div className="data-single">
                                    <p>Total number of Countries</p>
                                    <h1>40+</h1>
                                </div>
                              </li>
                          </ul>
                        </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="region-list-main">
                        <ul className="list-unstyled m-0">
                          <li className="south-america" data-area="south-america">
                              <div className="region-single">
                                <span className="color" style={{backgroundColor: '#e01d2f'}}></span>
                                <span className="text">South America</span>
                              </div>
                          </li>
                          <li className="africa" data-area="africa">
                              <div className="region-single">
                                <span className="color" style={{backgroundColor:'#66a2d1'}}></span>
                                <span className="text">Africa</span>
                              </div>
                          </li>
                          <li className="north-america" data-area="north-america">
                              <div className="region-single">
                                <span className="color" style={{backgroundColor:'#eeac06'}}></span>
                                <span className="text">North America</span>
                              </div>
                          </li>
                          <li className="europe" data-area="europe">
                              <div className="region-single">
                                <span className="color" style={{backgroundColor:'#82026e'}}></span>
                                <span className="text">Europe</span>
                              </div>
                          </li>
                          <li className="asia" data-area="asia">
                              <div className="region-single">
                                <span className="color" style={{backgroundColor:'#031927'}}></span>
                                <span className="text">Asia</span>
                              </div>
                          </li>
                          <li className="australia" data-area="australia">
                              <div className="region-single">
                                <span className="color" style={{backgroundColor:'#67b292'}}></span>
                                <span className="text">Australia</span>
                              </div>
                          </li>
                        </ul>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div className="custom-shape-divider bottom">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M412.367 32.9358C382.209 41.0326 352.057 49.1279 321.39 54.8329C213.613 74.6574 102.466 64.5971 0 25.7429V118.393H1200V94.2229C1132.19 117.313 1055.71 109.703 985.66 91.2229C950.293 81.8964 914.144 68.5263 877.827 55.0945C833.034 38.5274 787.987 21.8663 743.84 12.5829C661.58 -4.75711 575.78 -3.74711 493.39 12.9729C466.132 18.5009 439.247 25.7189 412.367 32.9358Z" fill="currentColor"></path>
            </svg>
        </div>
      </section>

      {/* Map Section Ends */}

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
