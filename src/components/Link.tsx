import React from 'react';

interface ExternalLinkProps {
  href: string;
  text: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, text }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="external-link">
      {text}
    </a>
  );
};

export default ExternalLink;