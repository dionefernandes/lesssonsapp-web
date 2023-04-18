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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 16px;

  &:focus {
    outline: none;
    border: 1px solid #0077ff;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 16px;
  height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
    border: 1px solid #0077ff;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SaveButton = styled.button`
  background-color: #0077ff;
  color: #fff;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;
`;

export const CancelButton = styled.button`
  background-color: #ccc;
  color: #333;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Message = styled.span`
  color: #363;
  margin-top: 15px;
`;

export const Error = styled.span`
  color: #ff0000;
  margin-top: 15px;
`;