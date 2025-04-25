import './../index.css';
import { Link } from 'react-router-dom';

interface TeamMemberProps {
  name: string;
  role: string;
  passion: string;
  socialLinks: {
    platform: string;
    link: string;
    handle: string;
    iconSrc: string;
  }[];
  imageSrc: string;
  linkToProfilePage: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, passion, socialLinks = [], imageSrc, linkToProfilePage }) => {
  return (
    <section className="container cards membrii">
      <div className="membrii__title">
        {/* Internal link using Link component */}
        <Link to={linkToProfilePage} className="membrii__link">
          {name}
        </Link>
      </div>

      <div className="membrii__description">
        <p>Rol: {role}</p>
        <p>Pasiune: {passion}</p>

        {/* External link example */}
        <div>
          <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
            Visit Example Website
          </a>
        </div>

        {/* Map through social links */}
        {socialLinks.map(({ platform, link, handle, iconSrc }, index) => (
          <div className="s" key={index}>
            {/* External social links */}
            <a href={link} className="membrii__tag" target="_blank" rel="noopener noreferrer">
              <img src={iconSrc} className="membrii__social" alt={`${platform} icon`} />
              {handle}
            </a>
          </div>
        ))}
      </div>

      {/* Member Image */}
      <img src={imageSrc} alt={`${name}`} />
    </section>
  );
};

export default TeamMember;