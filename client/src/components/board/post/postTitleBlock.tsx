import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'theme';

import ProfileIcon from 'assets/icons/defaultProfileIcon';
import CountIcon from 'assets/icons/countIcon';
import CalElapsedTime from './calElapsedTime';

interface Data {
  freeId?: number;
  questionId?: number;
  category?: string;
  subjectTags?: [{ subjectTag: string }];
  selected?: boolean;
  member: {
    memberId: number;
    iconImageUrl?: string;
    displayName: string;
    state: string;
  };
  title: string;
  content: string;
  viewCount: number;
  voteCount: number;
  createdAt: string;
  modifiedAt?: string;
  commentsListNum: number;
}

interface PageInfo {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

type Props = {
  ele: Data;
};

function PostTitleBlock({ ele }: Props) {
  console.log('ele', ele);
  const urlData = useLocation().pathname;
  console.log(urlData);
  const calTime: string = CalElapsedTime(ele.createdAt);
  let category = '';

  if (urlData === '/free') {
    if (ele.category) {
      category = ele.category;
    }
  } else if (urlData === '/qna') {
    if (ele.subjectTags) {
      category = ele.subjectTags[0].subjectTag;
    }
  }

  return (
    <Container className={category === '공지' ? 'notice' : ''}>
      <Top>
        <Category>{category}</Category>
        {ele.selected ? <SelectedAnswer>답변채택</SelectedAnswer> : null}
      </Top>
      {urlData === '/free' ? (
        <Link to={`articles/${ele.freeId}`}>
          <Title>{ele.title}</Title>
        </Link>
      ) : (
        <Link to={`articles/${ele.questionId}`}>
          <Title>{ele.title}</Title>
        </Link>
      )}
      <UserData>
        <ProfileImg>
          <ProfileIcon.Mini />
        </ProfileImg>
        <div>{ele.member.displayName}</div>
        <div> · {calTime}</div>
      </UserData>
      <Count>
        <div>
          <CountIcon.View />
          {ele.viewCount}
        </div>
        <div>
          <CountIcon.Comment />
          {ele.commentsListNum}
        </div>
        <div>
          <CountIcon.Vote />
          {ele.voteCount}
        </div>
      </Count>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100px;
  padding: 1rem ${theme.gap.px20};
  border-bottom: 1px solid ${theme.colors.gray};

  &.notice {
    background-color: ${theme.colors.palePurple};
  }
`;

const Top = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  height: 18px;
  padding: 0 calc(${theme.gap.px10} / 2);
  border: 1px solid ${theme.colors.pointColor};
  border-radius: 5px;
  font-size: ${theme.fontSizes.sm};
  font-weight: bold;
  color: ${theme.colors.pointColor};
  background-color: ${theme.colors.white};
`;

const SelectedAnswer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 18px;
  border: 1px solid ${theme.colors.pointColor};
  border-radius: 5px;
  font-size: ${theme.fontSizes.sm};
  font-weight: bold;
  color: ${theme.colors.white};
  background-color: ${theme.colors.pointColor};
  padding: 3px 8px;
  margin-left: 5px;
`;

const Title = styled.div`
  display: flex;
  font-size: ${theme.fontSizes.md};
  font-weight: bold;
  margin-bottom: 6px;

  &:hover {
    color: ${theme.colors.pointColor};
  }
`;

const UserData = styled.div`
  display: flex;
`;

const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
`;

const Count = styled.div`
  display: flex;
  position: absolute;
  right: ${theme.gap.px20};
  bottom: 1rem;
  color: ${theme.colors.gray};
`;

export default PostTitleBlock;
