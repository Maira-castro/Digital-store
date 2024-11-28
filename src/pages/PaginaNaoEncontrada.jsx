import { Link } from "react-router-dom";
import styled from 'styled-components';
const Container = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   margin-top:20%;
`;
const h3 = styled.h3`
  color:#C92071;
`
const PaginaNaoEncontrada = () => {
    return ( 
        <Container>
        <h1 style={{color:"#C92071", fontSize:"45px"}}>Página não encontrada!</h1>
        <h3 style={{color:"#666666", fontSize:"20px", cursor:"pointer"}}><Link to={"/"}>Voltar</Link></h3>
        </Container>
     );
}
 
export default PaginaNaoEncontrada;