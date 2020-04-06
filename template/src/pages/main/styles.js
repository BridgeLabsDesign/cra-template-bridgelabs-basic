import styled from 'styled-components';

export const Container = styled.div`
max-width: 1000px;
margin: 0 auto;
padding: 20px 30px;
@media (max-width: 650px) {
    padding: 20px 15px !important;
}
`;

export const Content = styled.div`
padding: 10px;
border-radius: 4px;
background-color: #f7f7f7;
text-align: center;
`;
