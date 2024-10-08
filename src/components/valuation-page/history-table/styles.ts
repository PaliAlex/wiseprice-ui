import styled, {css} from "styled-components";

const commonStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


export const TableWrapper = styled.div`
  margin-left: 16px
`;

export const Header = styled.div`
  ${commonStyles};
  background-color: #3a4146;
  color: #fff;
  font-size: 1.75rem;
  border-radius: 10px;
  padding: 0 15px;
`;

export const Content = styled.div`
  ${commonStyles};
  font-size: 1.2rem;
  margin: 0 15px;
  padding-top: 10px;
  border-bottom: 1px solid black;
  
`;

export const HeaderItem = styled.div``;

export const EmptyContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin-top: 20px;
`;

export const EmptyContentLabel = styled.div`
    
`;
