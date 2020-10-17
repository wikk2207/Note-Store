import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';

const DetailsTemplate = () => (
  <UserPageTemplate>
    <h1>Note</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates fugit minima veritatis
      dolore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates fugit minima
      veritatis dolore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates fugit
      minima veritatis dolore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
      fugit minima veritatis dolore.
    </p>
    <Link to="/">go back</Link>
  </UserPageTemplate>
);

export default DetailsTemplate;
