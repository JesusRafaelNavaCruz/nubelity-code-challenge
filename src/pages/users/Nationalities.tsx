import * as React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../../components/Card';
import { getUserByNationality } from '../../services/userService';

const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto;
  position: relative;
`;

export default function Nationalities() {

  const [user, setUser] = React.useState({});
  const params = useParams<{nationality: string}>();
  
  React.useEffect(() => {
    if (params.nationality) {
      console.log(params.nationality);
      
      getUserByNationality(params.nationality).then((response) => setUser(response.results[0]));
    }
  },[])

  return (
    <Wrapper>
      {Object.keys(user).length > 0 && (<Card userInfo={user} />)}   
    </Wrapper>
  )
};
