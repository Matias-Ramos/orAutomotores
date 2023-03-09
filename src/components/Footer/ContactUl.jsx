//FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationCrosshairs, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const ContactUl = () => {
  const contactPhoneNumber = ["5491160380512", "5491146517300"];
  console.log(contactPhoneNumber[0])
  console.log(contactPhoneNumber[1])
  return (
    <ul>
      {/* Phone 1*/}
      <li>
        <div>
          <a
            href={`https://wa.me/${contactPhoneNumber[0]}`}
            aria-label="Link que redirecciona al whatsapp de la concesionaria"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} title="Teléfono con whatsapp" />
          </a>
          <span> 11-6038-0512</span>
        </div>
      </li>
      {/* Phone 2*/}
      <li>
        <div>
            <FontAwesomeIcon icon={faPhoneVolume} title="Teléfono de linea (no whatsapp)"/>
          <span> 4651-7300</span>
        </div>
      </li>
      <li>
        {/* mail */}
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <span> orautomotores@gmail.com</span>
        </div>
      </li>
      <li>
        <div>
          <FontAwesomeIcon icon={faLocationCrosshairs} />
          <span> Necochea 3530, CABA</span>
        </div>
      </li>
    </ul>
  );
};

export default ContactUl;
