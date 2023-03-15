import * as React from "react";
import styled from "styled-components";
import { MdEmail, MdCalendarMonth, MdAccountCircle, MdMap, MdPhoneInTalk, MdOutlineLock } from "react-icons/md";
import * as moment from 'moment';

const CardContainer = styled.div`
    position: relative;
    padding: 20px 0;
    backgroud: #fff;
    border-radius: 3px;
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
    &:after {
        position: absolute;
        width: 100%;
        height: 130px;
        top: 0;
        background: #f9f9f9;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
`;

const CardContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Avatar = styled.div`
    border-radius: 50%;
    padding: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    img {
        border-radius: 50%;
        width: 150px;
    }
`;

const Title = styled.h1`
    color: #999;
    font-size: 18px;
    margin: 0;
    font-family: Ubuntu, sans-serif;
`;

const SubTitle = styled.h2`
    color: #2c2e31;
    text-transform: capitalize;
    font-size: 38px;
    margin: 5px;
    font-family: Ubuntu, sans-serif;
`;

const CardActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    button {
      background: transparent;
      border: none;
      font-size: 32px;
      color: rgba(0, 0, 0, 0.2);
      margin: 20px;
    }

    & .active {
        button {
         color: #83ba43;
        }
    }

`

type Props = {
    userInfo: any,
}
export default function Card({userInfo}: Props) {

  const [info, setInfo] = React.useState({title: 'Hi, My name is', subTitle: `${userInfo.name.first} ${userInfo.name.last}`})

  const showProfile = () => {
    setInfo({
        title: 'Hi, My name is',
        subTitle: `${userInfo?.name?.first} ${userInfo?.name?.last}`,
    });
  }; 
  
  const showEmail = () => {
    setInfo({
        title: 'Hi, email address is',
        subTitle: userInfo?.email,
    });
  };
  
  const showBirthday = () => {
    setInfo({
        title: 'My birthday is',
        subTitle: moment(userInfo?.dob.date).format('DD/MM/YYYY'),
    });
  };  
  
  const showAddress = () => {
    setInfo({
        title: 'My address is',
        subTitle: `${userInfo?.location?.street?.number} ${userInfo?.location?.street?.name}`,
    });
  };  

  const showPhone = () => {
    setInfo({
        title: 'My phone number is',
        subTitle: userInfo?.phone,
    });
  };

  const showPassword = () => {
    setInfo({
        title: 'My password is',
        subTitle: userInfo?.login?.password,
    });
  };


  return (
    <CardContainer>
        <CardContent>
            <Avatar>
                <img src={userInfo?.picture?.large} alt="" />
            </Avatar>
            <Title>{info.title}</Title>
            <SubTitle>
                {info.subTitle}
            </SubTitle>
        </CardContent>
        <CardActions>
            <button onMouseEnter={() => showProfile()}>
              <MdAccountCircle/>
            </button>
            <button onMouseEnter={() => showEmail()}>
              <MdEmail/>
            </button>
            <button onMouseEnter={() => showBirthday()}>
              <MdCalendarMonth/>
            </button>
            <button onMouseEnter={() => showAddress()}>
              <MdMap/>
            </button>
            <button onMouseEnter={() => showPhone()}>
              <MdPhoneInTalk />
            </button>
            <button onMouseEnter={() => showPassword()}>
              <MdOutlineLock/>
            </button>
        </CardActions>

    </CardContainer>
  )
}
