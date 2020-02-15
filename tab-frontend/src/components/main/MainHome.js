import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import { Helmet } from 'react-helmet-async';

import Contents from './Contents';

// 이미지
import study from '../../images/study.svg';
import tent from '../../images/tent.svg';
import picnic from '../../images/picnic.svg';
import pt from '../../images/pt.svg';

const MainHomeBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const MainHomeContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const annual_events = [
  [
    '스터디',
    study,
    '학회원들끼리 관심있는 주제로 함께 공부하거나 세미나를 진행합니다. ex) 기초프로그래밍, 깃, 인공지능, 블록체인',
  ],
  [
    '야유회',
    picnic,
    '봄에 서울 올림픽 공원에서 졸업한 학회 선배님들과 함께 네트워킹 할 수 있는 야유회를 개최합니다. ',
  ],
  [
    '발표',
    pt,
    '개인 혹은 팀으로 진행한 프로젝트, 개인이 공부한 주제를 갖고 학기 중에 발표하는 기회를 갖습니다.',
  ],
  [
    '캠핑',
    tent,
    '여름과 가을 사이 난지캠핑장에서 MT를 진행하여 학회원 간의 친목도모 하는 기회를 갖습니다.',
  ],
];

const MainHome = () => {
  return (
    <MainHomeBlock>
      <Helmet>
        <title>TAB</title>
      </Helmet>
      {/* About TAB */}
      <PostHead>
        <h1>About TAB</h1>
      </PostHead>
      <MainHomeContent
        dangerouslySetInnerHTML={{
          __html:
            '<b>TAB</b>은 <b>Talking and Books</b>의 약자입니다. ' +
            '서로간에 이야기를 나누며 유대감을 형성하고 책을 통해 지식을 쌓아가자는 뜻으로 1985년 9월 7일 토요일부터 처음 모임이 시작되었습니다. ' +
            '또한 Key Board 의 Tab 키 처럼 순간순간 자신을 한단계 도약시켜 나가자는데 의의가 있습니다. ' +
            '대학 4년의 정해진 기간동안 알찬시간을 보낼 수 있도록 실력있는 선배님이 진행하는 정기학회세미나와 프로젝트, 방학스터디등의 학술모임과 MT, 야유회 방중모임등의 친목모임이 이루어 지고 있습니다. ' +
            '더욱이 TAB 은 재학생뿐만아니라 졸업하신 선배님들과도 주기적인 모임을 가지면서 많은것을 보고 배울 수 있는 기회가 무한합니다. ' +
            '알찬 대학생활을 보내시고 싶은 학우분들은 TAB을 두드려 주십시요. <br /><br /><br /><br />',
        }}
      />

      {/* Annul Event */}
      {/* <PostHead>
        <h1>Annul Event</h1>
      </PostHead>
      <MainHomeContent>
        <Contents
          id="annual_events"
          // contentsName="ANNUAL EVENTS"
          items={annual_events}
        />
      </MainHomeContent> */}
      <PostHead>
        <h1>Apply</h1>
      </PostHead>
      <MainHomeContent dangerouslySetInnerHTML={{ __html: '<p>지원</p>' }} />
    </MainHomeBlock>
  );
};

export default MainHome;
