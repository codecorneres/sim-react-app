import React from 'react';
import simLogoWhite from '../images/sim-logo-white.png';
import callOutlineIcon from '../images/call-outline.svg';
import envelopOutlineBold from '../images/envelope-outline-bold.svg';
import registerCharitySold from '../images/registered-charity-solid.svg';

export default function Footer() {
  return (
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
                        <a href="javascript:void(0);">
                          <i className='fa-brands fa-facebook-f'></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className='fa-brands fa-instagram'></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className='fa-brands fa-linkedin-in'></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className='fa-solid fa-rss'></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          <i className='fa-brands fa-youtube'></i>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
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
                          <a href="javascript:void(0);">1300 746 580</a>
                        </p>
                      </div>
                      <div className='data-single'>
                        <h6>International Call</h6>
                        <p>
                          <a href="javascript:void(0);"> +61 2 9580 1422</a>
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
                        <a href="javascript:void(0);">Explore Mission</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Donate</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Pray</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">About Us</a>
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
                        <a href="javascript:void(0);">Site Credits</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Contact Us</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Site Map</a>
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
                        <a href="javascript:void(0);">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Privacy Policy</a>
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
  )
}
