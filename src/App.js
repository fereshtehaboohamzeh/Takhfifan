import React from 'react';
import styled from 'styled-components';
import DownloadBanner from './components/DownloadBanner/DownloadBanner';
import AppSelect from './components/AppSelect/AppSelect'
import {ColorConfig } from './Config'

const StyledWrapper = styled.div`
     width:100%;
     height: 100vh;
     margin: 0 auto;
     background-color: ${ColorConfig.backLight} ;
     display: flex;
     flex-direction: column;
    justify-content: center;
    align-items: center;

    
   
`;



export default class App extends React.Component{

    state ={
        show:true
    };


    render() {
    return(
        <StyledWrapper>
          <DownloadBanner show={this.state.show} onDownCick={() =>{
              this.setState({show:false})
          }}/>
          <AppSelect showAppSelect={!this.state.show}/>
        </StyledWrapper>
    )
  }

}