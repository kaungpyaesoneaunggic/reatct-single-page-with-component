import { faFacebook, faLinkedin, faViber } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Footer() {
  return (
    <div className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-4 mt-3">
                <h5 className="text-uppercase">Keep in Touch with Us</h5>
                <p>Your concerns and ideas are our priorities</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>


            <div className="col-md-3 mb-md-2 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                    <li><FontAwesomeIcon icon={faFacebook}/> <a href="https://www.facebook.com/gicjpn/" target="_blank">Facebook</a></li>
                    <li><FontAwesomeIcon icon={faLinkedin}/> <a href="https://www.linkedin.com/company/global-innovation-consulting-inc-" target="_blank">LinkedIn</a></li>
                    <li><FontAwesomeIcon icon={faViber}/>  <a href="#!" target="_blank">Viber</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2024 Copyright:
        <a href="https://www.gicjp.com/english" target="_blank"> Global Innovation Consulting</a>
    </div>
    </div>
    
  ) 
}
