import '../App.css';
import * as React from 'react'
import styled from 'styled-components'
const Inicio = () => {
    return (
        <CenterDiv>
            <FormDiv>
                <form>
                    <div className='incio'>
                    <h3>Apresentação</h3>
                    <p>Este site foi desenvolvido por Arthur Cortez.</p>
                    <p>Este site foi desenvolvido através do uso de ReactJS e suas EPI's, HTML, CSS e JS.</p>
                    </div>
                </form>
            </FormDiv>
        </CenterDiv>
    );
}
export default Inicio;
const CenterDiv = styled.div`
    max-width: 1000px;
    margin: 10px auto;
    padding: 0 2%;
    display: flex;
    flex-direction: column;
    text-align: center;
`;
const FormDiv = styled.div`
    padding: 10px;
    justify-content: center;
    text-align: center;
    border-style: groove;
    border-color: gray;
`;