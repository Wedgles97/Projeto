import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.common.black};
  padding: 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 24px;
  color: ${({ theme }) => theme.palette.common.white};
  margin-bottom: 20px;
`;
