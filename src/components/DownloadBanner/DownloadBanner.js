import React from  'react';
import styled from 'styled-components';
import {PropTypes} from 'prop-types';
import {ColorConfig , fontConfig} from '../../Config';
import apple from '../../assets/svg/apple.svg';
import bazaar from '../../assets/svg/bazaar.svg';
import google from '../../assets/svg/google.svg';
import sibapp from '../../assets/svg/sibapp.svg';
import nexus from '../../assets/Images/mediumSize/nexus@2x.jpg'
import iphone from '../../assets/Images/mobileSize/iphone.png'

const StyledBanner = styled.div`
     position: relative;
     z-index: 100;
     
     .animate{
        animation-delay: 3s;
        animation-duration: 2s;
        animation-fill-mode: both;
        animation-timing-function: ease-in-out;
     }
     
     @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translate3d(100%, 0, 0);
          }
        
          to {
            opacity: 1;
            transform: none;
          }
    }
     
     @keyframes fadeInLeft{
          from {
            opacity: 0;
            transform: translate3d(-100%, 0, 0);
          }
        
          to {
            opacity: 1;
            transform: none;
          }
    }
    
     .fadeInLeft {
          animation-name: fadeInLeft;
        }
        
      .fadeInRight {
          animation-name: fadeInRight;
        }
                   
    
     .rec-back {
               width: 40vw;
               height: 34vw;
               box-shadow: 0 0 200px 0 rgba(0, 0, 0, 0.27);
               background-color: #ffffff;
               display: flex;
               flex-direction: column;
               align-items: center;
               justify-content: space-evenly;
               border-radius: 8%;
               z-index: 100;
               
               @media  (min-width : 993px) and (max-width: 1300px){
                     width:47vw;
                     height:60vh;
                }
               
               
                @media  (min-width : 769px) and (max-width: 992px){
                     width: 50vw;
                     height: 55vh;
                }
               
               
                @media  (max-width : 768px){
                     width: 95vw;
                     height: 65vh;
                }
             
             .Download-Takhfifan-A {
                    text-align: center;
                    width: 519px;
                    height: auto;
                    margin: 0 ;
                    
                 p{
                    font-family: "sans-serif";
                    font-size: ${fontConfig.headerFont};
                    font-weight: 300;
                    margin: 0;
                    
                     @media  (min-width : 993px) and (max-width: 1300px){
                        font-size: 3rem !important;
                    }
                    
                     @media  (max-width : 1200px){
                          font-size: 2rem;
                        }
                 }
                 
                
              }
              
             .Takhfifan-is-the-fir {
                margin: 0 20px;
                 
                 p{
                    color: ${ColorConfig.lightGrey};
                    font-family: "sans-serif";  
                    font-size: 1.1rem;
                    margin: 0 !important;
                    font-weight: normal;
                    line-height: 1.8;
                    word-spacing: -1px;
                    text-align: -webkit-center;
                    
                      @media  (max-width : 1200px){
                          font-size: 1rem;
                        }
                 }
           
             }
             
             .rec-button {
                  width: 316px;
                  height: 66px;
                  background-color:  ${ColorConfig.lightRed};
                  border-radius: 33px;
                  outline: none !important;
                  border: none !important;
                  color: white;
                  font-size: ${fontConfig.contentFont};
                  font-weight: 400;
                }
            }
            
     .wrapper {
                min-width: 30vw;
                position: absolute;
                left: 97%;
                top: 50%;
                z-index:-1;
                
                img{
                   margin: 0 .5vw;
                   width: 4.5vw;
                  }

                 @media  (max-width : 768px){
                   display: none;
                }
            }
            
    .leftwrapper{
        position: absolute;
        right: 97%;
        bottom: 0;
        z-index:-1;
    
        img:first-child{
          width: 17vw;
        }

        img:nth-child(2){
          position: absolute;
          left: -14vw;
          width: 15vw;
          bottom: 0;
        }
        
           @media  (max-width : 768px){
                   display: none;
                }
              
            }
`;


export default class DownloadBanner extends React.Component{

    static propTypes = {
        onDowClick :PropTypes.func,
        show:PropTypes.bool
    };

    static defaultProps = {
        show: false
    };

    state ={
        show :this.props.show
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.show !== this.state.show){
            this.setState({show:nextProps.show});
            return true
        }
    }

    handleDownLoadApp = () =>{
     if(this.props.onDownCick){
         this.props.onDownCick();
     }
    };

    render() {
        return(
            <StyledBanner style={this.state.show ? {display: 'block'} : {display : 'none'}}>
                <div className='wrapper animate fadeInLeft'>
                    <img src={sibapp} alt='sibapp'/>
                    <img src={bazaar} alt='bazaar'/>
                    <img src={google} alt='google'/>
                    <img src={apple}  alt='apple'/>
                </div>
                <div className='rec-back'>
                    <div className='Download-Takhfifan-A'>
                        <p>
                            Download
                            <br/>
                            Takhfifan App
                        </p>
                    </div>
                    <div className='Takhfifan-is-the-fir'>
                        <p>
                            Takhfifan is the first Group BUying website founded on 2010.
                            Takhfifan is Offeirng 50-90% daily deals restaurants,retailers and service providers.
                            Takhfifan's Application for both IOS and Android platforms
                        </p>
                    </div>
                    <button className='rec-button' onClick={this.handleDownLoadApp}>
                        Download App
                    </button>
                </div>
                <div className='leftwrapper animate fadeInRight'>
                    <img src={nexus} alt='nexus'/>
                    <img src={iphone} alt='iphone'/>
                </div>
            </StyledBanner>
        )
    }
}