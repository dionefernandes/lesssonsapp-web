import styled from 'styled-components';

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  background-color: #f2f2f2;
  font-size: 18px;
  font-weight: bold;
  color: #333;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #0077ff;
    color: #fff;
    font-size: 20px;
  }

  span {
    margin-right: 8px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 16px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 32px;
`;

export const ContentImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const LessonImage = styled.img`
  max-width: 500px;
  max-height: 300px;
`;

export const LessonTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const LessonDescription = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

export const LessonDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 20px;

  p {
    font-size: 18px;
    margin-bottom: 10px;

    strong {
      font-weight: 500;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

export const EditButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #0077cc;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  border-radius: 5px;
  margin-right: 10px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #0099dd;
  }
`;

export const DeleteButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #f33;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  border-radius: 5px;
  margin-right: 10px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #f55;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #666;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  border-radius: 5px;
  margin-right: 10px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #999;
  }
`;

export const Warning = styled.div`
  background-color: #ff6;
  color: #333;
  border-radius: 5px;
  margin-right: 10px;
  font-weight: 500;
  width: 75%;
  justify-content: center;
  padding: 20px;
  margin: 50px auto 40px 75px;
  font-size: 18px;

  div {
    color: #f33;
    display: block;
    float: left;
    font-weight: bold;
    margin-bottom: 15px;
    font-size: 24px;
    width: 100%;
  }
`;

export const Error = styled.span`
  color: #ff0000;
  margin-top: 15px;
`;

export const Success = styled.div`
  color: #060;
  display: block;
  margin-top: 15px;
  text-align: center;
  width: 100%;
`;