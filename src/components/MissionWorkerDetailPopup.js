import React, { useEffect, useRef } from 'react';
import closeSvg from '../images/close.svg';

const MissionWorkerDetailPopup = ({ closePopup, singleWorker }) => {
  const popupRef = useRef(null);
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div ref={popupRef} className='mission-worker-popup'>
      <div className='closeIcon' onClick={closePopup}>
        <img src={closeSvg} />
      </div>
      <section className='get-connected-image-with-content worker-single-block'>
        <div className='container'>
          <div className='row justify-content-between '>
            <div className='col-md-4'>
              <div className='media-cover br-25'>
                <img src={singleWorker.image} alt={singleWorker.image} />
              </div>
            </div>
            <div className='col-md-8'>
              <div className='content ShadeTertiary'>
                <h2>{singleWorker.name}</h2>
                <div className='post-tag'>
                  DURATION: {singleWorker.duration}
                </div>
                <h5>Location: {singleWorker.location}</h5>
                <p>{singleWorker.desc}</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionWorkerDetailPopup;
