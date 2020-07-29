import React, { useContext } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

import ProfileContext from './Profile.context';

const ProfilePage = () => {

  const {
    name,
    email,
    image,
  } = useContext(ProfileContext);

  return (
    <div>
      <style>
        {`
          .vdfs {
            border-radius: 150px;
          }
        `}
      </style>
      <Container className="mt-5">
        <Jumbotron>
          <div className="ml-5 pl-5">
            <h1>Profile</h1>
            <h3>Nama: {name}</h3>
            <h3>Email: {email}</h3>
            <div><img src={image} alt="picture" width="30%" className="vdfs" /></div>
          </div>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default ProfilePage;