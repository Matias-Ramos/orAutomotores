//FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';

function ContactUl() {
  return (
    <ul>
    {/* Phone */}
    <li>
      <div>
      <a href="https://wa.me/5491160380546">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
        <span>  11-8980-4143</span>
      </div>
    </li>
    <li>
      {/* mail */}
      <div>
        <FontAwesomeIcon icon={faEnvelope} />
        <span> orautos@gmail.com</span>
      </div>
    </li>
    <li>
      <div>
      
        <FontAwesomeIcon icon={faLocationCrosshairs} />
        <span> Av. San juan 1733, CABA</span>
      </div>
    </li>
  </ul>
  )
}

export default ContactUl