import React from 'react';

import './perfundo-lightbox.css';

export interface LightboxProps {
  index: number;
  imageUrl?: string;
}

// TODO: deal with possibly empty/undefined asset.image_url -> render placeholder
export const Lightbox: React.FC<LightboxProps> = ({ imageUrl, index }) => {
  return (
    <div id={`lightbox-${index}`} className="perfundo__overlay fadeIn">
      <figure className="perfundo__content perfundo__figure">
        <img className="perfundo__image" src={imageUrl} loading="lazy" />
      </figure>
      <a
        href="#lightbox-untarget"
        className="perfundo__close perfundo__control"
      >
        Close
      </a>
      <a
        className="perfundo__prev perfundo__control"
        href={`#lightbox-${index - 1}`}
      >
        Prev
      </a>
      <a
        className="perfundo__next perfundo__control"
        href={`#lightbox-${index + 1}`}
      >
        Next
      </a>
    </div>
  );
};