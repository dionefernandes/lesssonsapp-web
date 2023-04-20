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

export const Label = styled.div`
  color: #444;
  padding: 8px 0px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border: 1px solid #0077ff;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 20px;
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
  margin-top: 30px;
`;

export const SaveButton = styled.button`
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

export const CancelButton = styled.button`
  background-color: #ccc;
  color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
  transition: background-color 0.2s ease-in-out;
  margin-right: 10px;

  &:hover {
    background-color: #999;
  }
`;

export const Message = styled.span`
  color: #363;
  margin-top: 15px;
`;

export const Error = styled.span`
  color: #ff0000;
  margin-top: 15px;
`;