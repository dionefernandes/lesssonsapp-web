import styled from 'styled-components';

export const LessonsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 64px;
  margin-bottom: 64px;
  padding: 0 12px;
`;

export const LessonsListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 24px 0;
`;

export const LessonsListTitle = styled.h1`
  color: #333;
  font-size: 36px;
  font-weight: 600;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  border: 1px solid #d5d5d5;
  padding: 6px 16px;
  font-size: 16px;
  width: 300px;

  &:focus {
    outline: none;
    border: 1px solid #0077ff;
  }
`;

export const SearchButton = styled.button`
  background-color: #0077ff;
  color: #fff;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
`;

export const NewLessonButton = styled.button`
  background-color: #0077ff;
  color: #fff;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const LessonsTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 24px;
`;

export const TableHeader = styled.th`
  background-color: #0077ff;
  color: #fff;
  padding: 16px;
  text-align: left;
`;

export const TableData = styled.td`
  border: 1px solid #d5d5d5;
  padding: 16px;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ViewButton = styled.button`
  background-color: #090;
  color: #fff;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  a {
    color: #fff;
  }
`;

export const EditButton = styled.button`
  background-color: #0077ff;
  color: #fff;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  a {
    color: #fff;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: #fff;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  a {
    color: #fff;
  }
`;

export const TableRow = styled.tr`
  background-color: #fff;

  &:hover {
    background-color: #FFC;
  }
`;

export const ExpiredTokensLink = styled.a`
  margin-top: 24px;
  color: #0077ff;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;

  a {
    color: #0077ff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
