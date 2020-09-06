import React from 'react';
import {PropTypes} from "prop-types";
import styled from 'styled-components';
import {ColorConfig , fontConfig} from '../../Config';
import category from "../../assets/Images/mediumSize/category@2x.png";
import search from "../../assets/Images/mediumSize/search@2x.png";
import logo from "../../assets/svg/logo.svg";
import arrow from '../../assets/Images/arrow.png';
import apple from '../../assets/svg/apple.svg';
import bazaar from '../../assets/svg/bazaar.svg';
import google from '../../assets/svg/google.svg';
import sibapp from '../../assets/svg/sibapp.svg';

const AppSelectWrapper =styled.div`

    width: 100vw;
    height: 100vh;
    background: ${props =>props['data-showBack'] ? `${ColorConfig.lightRed}` : 'transparent'};
    
    &:before {
      width:5vw;
      height:5vw;
      position: absolute;
      border-radius: 50%;
      background: ${ColorConfig.lightRed};
      display: inline-block;
      content: '';
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      animation-name: radial-animate;      
      animation-duration: 7s;
      animation-fill-mode: both;
        animation-timing-function: ease-in-out;
    }
    
     .animate{
        animation-delay: 0s;
        animation-duration: 2s;
        animation-fill-mode: both;
        animation-timing-function: ease-in-out;
     }

    @keyframes radial-animate{
      from {
         transform: scale(2);
      }
      to {
        transform:  scale(100,100);
        
      }
    }
     
     @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translate3d(-100%, 0, 0);
          }
        
          to {
            opacity: 1;
            transform: none;
          }
    }
     
     @keyframes fadeInLeft{
          from {
            opacity: 0;
            transform: translate3d(100%, 0, 0);
          }
        
          to {
            opacity: 1;
            transform: none;
          }
    }
    
    @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translate3d(0, -100%, 0);
          }
        
          to {
            opacity: 1;
            transform: none;
          }
    }
    
    @keyframes fadeInUp{
          from {
            opacity: 0;
            transform: translate3d(0, 100%, 0);
          }
        
          to {
            opacity: 1;
            transform: none;
          }
    }
    
     .fadeInRight {
          animation-name: fadeInRight;
     }
    
     .fadeInDown{
       animation-name: fadeInDown;
     }
     
     .fadeInUp{
       animation-name: fadeInUp;
     }
     
    .fadeInLeft {
          animation-name: fadeInLeft;
        }
    
    .onload{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    
     .rightSide ,.leftSide {
       width: 20vw;
       float: left;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
            img{
              width: 12vw;
            }
            
              @media  (max-width : 768px){
                  visibility: hidden;
                }
     }
     
     .leftSide {
        float: right;
        text-align: right;
          
     }
   
     .content{
       height: 70vh;
       margin: 12.5vh 0;
        width: 59vw;
        float: left;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        
         p{
            font-family: "sans-serif";
            font-size: ${fontConfig.ash4};
            font-weight: 400;
            margin: 0;
            color:white;
            text-align: center;
            line-height: 1.5;
            
               @media  (max-width : 768px){
                   font-size: 1.7rem;
                }
         }
         
       
         
         .btns{
           display: flex;
           flex-direction: row;
           justify-content: center;
           
              button{
                width: 20vw;
                height: 5vw;
                background: white;
                outline: none;
                border: none;
                border-radius: 50px;
                font-size: 1.2rem;
                font-weight: bold;
                margin: 1vw 1vw 0.5vw 1vw;
                position: relative;
                cursor: pointer;
                
                   
                @media  (min-width : 769px) and (max-width: 1500px){
                     width: 33vw;
                     height: 10vh;
                     max-height: 100px;
                }
               
                
                
                  @media  (max-width : 768px){
                    height: 80px;
                     width: 45vw;
                     font-size: 0.7rem;
                }
                   
   
            
               img{
                 width: 30px;
                position: ABSOLUTE;
                right: 10%;
                top: 35%;
                
                     @media  (min-width : 769px) and (max-width: 1500px){
                     right: 5%;
                     }
               
                
                
                 @media (max-width: 768px){
                    width: 27px;
                    position: ABSOLUTE;
                    right: 7%;
                    top: 31%;
                 }
               }
            }
            
             .options-wrapper{
                position: relative;
               
                 .options {
                      position: absolute;
                      height: 150px;
                      padding: 10px 20px;
                      left: 0 ;
                      right: 0;
                      background: white;
                      color:${ColorConfig.lightGrey}
                      top: 100%;
                      border-radius: 10px;
                      margin: 0 10px;
                       transition: opacity 0.5s ease-in-out;
                      
                           @media (max-width: 768px){
                               height: auto;
                             }
                      
                         div{
                            border-bottom: 1px solid grey;
                            padding: 5px 0;
                            
                              &.noBorder{
                               border-bottom: none;
                              }
                         }
                      
                         img{
                           width: 60px;
                           
                               @media (max-width: 768px){
                                width: 25px;
                             }
                         }
                      
                        p{
                           display: inline-block;
                            font-size: 1.2rem;
                            vertical-align: top;
                             margin: 18px 18px;
                            color: ${ColorConfig.lightGrey};
                            
                            
                             @media (max-width: 768px){
                                display: inline-block;
                                font-size: 0.7rem;
                                vertical-align: super;
                                margin: 0px 9px;
                             
                             }
                        }
                    }
             
               }
            
            
         }
     
     }
`;

export default class AppSelect extends React.Component{

    static propTypes = {
        showAppSelect:PropTypes.bool
    };

    state ={
        show :this.props.showAppSelect,
        showAndroid:false,
        showIOS:false
    };


    componentDidMount() {
        setTimeout(()=>{
            this.setState({showBack:true})
        },7000)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.showAppSelect !== this.state.show){
            this.setState({show:nextProps.showAppSelect})
        }
    }


    handleBtnAndroid = () =>{
        this.setState({showAndroid: !this.state.showAndroid})
    };

    handleBtnIOS = () => {
        this.setState({showIOS: !this.state.showIOS})
    };

    render() {
        return(
            <AppSelectWrapper style={this.state.show ? {display: 'block'} : {display : 'none'}} data-showBack={this.state.showBack}>
                    <div className='rightSide  animate fadeInRight'>
                        <div>
                            <img src={search} alt='search'/>
                        </div>
                    </div>
                    <div className='content'>
                        <div className='logo'>
                            <img src={logo} alt='takhfifan-logo'/>
                        </div>
                        <p  className='animate fadeInDown'>
                            DOWNLOAD
                            <br/>
                            Takhfifan APP
                        </p>
                        <div className='btns animate fadeInUp'>
                            <div className='options-wrapper '>
                                <button onClick={this.handleBtnAndroid}>
                                    <img src={arrow} alt='arrow'/>
                                    DOWNLOAD ANDROID
                                </button>
                                <div className='options'
                                     style={this.state.showAndroid ? {opacity:1} : {opacity:0}}>
                                    <div>
                                        <img src={google} alt='apple'/>
                                        <p>  PLAY STORE</p>
                                    </div>
                                    <div className='noBorder'>
                                        <img src={bazaar} alt=''/>
                                        <p>  BAZAAR</p>
                                    </div>
                                </div>
                            </div>

                            <div className='options-wrapper'>
                                <button onClick={this.handleBtnIOS}>
                                    <img src={arrow} alt='arrow'/>
                                    DOWNLOAD IOS
                                </button>
                                <div className='options'
                                     style={this.state.showIOS ?  {opacity:1} : {opacity:0}}
                                   >
                                    <div>
                                        <img src={apple} alt='apple'/>
                                        <p>  APP STORE</p>
                                    </div>
                                    <div className='noBorder'>
                                        <img src={sibapp} alt=''/>
                                        <p>  Sib App</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='leftSide  animate fadeInLeft' >
                        <img src={category} alt='category' style={{position:'absolute',right:0}}/>
                    </div>
            </AppSelectWrapper>
        )
    }
}