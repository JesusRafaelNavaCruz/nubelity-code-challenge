import * as React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import { getUserByNationality } from '../../services/userService';

const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto;
  position: relative;
`;

export default function Home() {
  const [user, setUser] = React.useState({})

  React.useEffect(() => {
    getUserByNationality().then((response) => setUser(response.results[0]));
  }, []);

  return (
    <Wrapper>
        <Card userInfo={user} />    
    </Wrapper>
  );
}
