// StyledComponents.tsx

import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TODOInput = styled.TextInput`
  width: 80%;
  margin: 10px;
  border-width: 2px;
  border-color: #000;
  height: 30px;
  border-radius: 6px;
  margin-bottom: 10px;
`;

export const TodoButton = styled.TouchableOpacity`
  background-color: #000;
  border-radius: 6px;
  width: 60%;
  align-items: center;
  margin-bottom: 40px;
  padding: 10px;
`;

export const TodoButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

export const TodoView = styled.View`
  border: 1px solid #1e90ff;
  border-radius: 5px;
  margin-bottom: 12px;
  width: 380px;
  flex-direction: row;
  align-items: center;
`;

export const TodoText = styled.Text`
  color: black;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 700;
  flex: 1;
`;
