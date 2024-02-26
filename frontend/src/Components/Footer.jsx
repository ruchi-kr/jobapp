import React from 'react'

const Footer = () => {
  return (
    <>
      
      <div className="container-fluid mb-0 bg-light">
        {/* promotion section */}
        <div className="row bgcolor my-3 p-5 d-flex  promotion ">
          <div className="col-lg-4 col-md-12 justify-content-center col-12 my-2">
            <h5 className="fw-bold my-2 text-secondary">DOWNLOAD OUR APP</h5>
            <div className="d-flex gap-2">
              <a target="_blank" rel="noreferrer" aria-label="googleplay" href="https://play.google.com/store/apps?hl=en-IN"><img src="https://adn-static1.nykaa.com/nykdesignstudio-images/tr:h-66,/pub/media/wysiwyg/homepagemiddle/googlePlay.png" width="150px" alt="googleplay" /></a>
              <a target="_blank" rel="noreferrer" aria-label="appstore" href="https://www.apple.com/in/app-store/"><img src="https://adn-static1.nykaa.com/nykdesignstudio-images/tr:h-66,/pub/media/wysiwyg/homepagemiddle/appleStore.png" width="150px" alt="appstore" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 my-2">
            <h5 className="fw-bold my-2 text-secondary">SUBSCRIBE TO NEWSLETTER</h5>
            <div className="input-group mt-3">
              <input type="text" className="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-outline-secondary" type="button" id="button-addon2">SUBMIT</button>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 my-2">
            <h5 className="fw-bold my-2 text-secondary">FOR ANY HELP, YOU MAY CALL US AT</h5>
            <h6>1800-266-3333</h6>
            <h6>(Monday to Saturday: 10 am - 10 pm, Sunday: 10 am - 7 pm)</h6>
          </div>
        </div>
        <hr className='mx-5 ' />
      {/* last footer section */}
        <div class="container">
            <div class="row mb-4 text-secondary">
                <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                    <p>Terms of Use</p>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                    <p>Privacy Policy</p>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                    <p>Global Privacy Policy</p>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                    <p>Interest-Based Ads</p>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                    <p>License Agreement</p>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-4">
                    <p>©2023 STYLEUP</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer