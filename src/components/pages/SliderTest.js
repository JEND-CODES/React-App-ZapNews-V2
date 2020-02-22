import React, { Component } from 'react';

import styled from 'styled-components';

// Slider Test from Démo Codepen https://codepen.io/ChahanaTyagi/pen/yLBGGJm

const images = [
  {
    large: 'https://stimg.cardekho.com/images/car-images/large/Skoda/Skoda-Rapid/1464/1549455048226/Candy-White.jpg',
    small: 'https://stimg.cardekho.com/images/car-images/large/Skoda/Skoda-Rapid/1464/1549455048226/Candy-White.jpg',
  },
  {
    large: 'https://www.ericsson.com/4ade1c/assets/content/74caa85fd1c140b6bd150639a23c495a/en/volvo-interior-view.jpg?w=1212',
    small: 'https://www.ericsson.com/4ade1c/assets/content/74caa85fd1c140b6bd150639a23c495a/en/volvo-interior-view.jpg?w=1212',
  },
  {
    large: 'https://www.mgmotor.co.in/content/dam/mgmotor/mghector/overviewOption-mobilePortrait.jpg',
    small: 'https://www.mgmotor.co.in/content/dam/mgmotor/mghector/overviewOption-mobilePortrait.jpg',
  },
  {
    large: 'https://imgd.aeplcdn.com/642x361/cw/ec/40842/Vision-M-Next-Concept-161133.jpg?wm=1&q=85',
    small: 'https://imgd.aeplcdn.com/642x361/cw/ec/40842/Vision-M-Next-Concept-161133.jpg?wm=1&q=85',
  },
  {
    large: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiZ6vKno7zjAhULbisKHdTxDN4QjRx6BAgBEAU&url=https%3A%2F%2Fshift.com%2Fbuy&psig=AOvVaw2k1OPyk7Id0s7v9_iDcssP&ust=1563463932603306',
    small: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiZ6vKno7zjAhULbisKHdTxDN4QjRx6BAgBEAU&url=https%3A%2F%2Fshift.com%2Fbuy&psig=AOvVaw2k1OPyk7Id0s7v9_iDcssP&ust=1563463932603306',
  },
  {
    large: 'https://shift.com/images/car_diagram/car_inspection@2x.2L3fzwdF.png',
    small: 'https://shift.com/images/car_diagram/car_inspection@2x.2L3fzwdF.png',
  },
  {
    large: 'https://image.cnbcfm.com/api/v1/image/106010244-1562708838619bencon-1.jpg',
    small: 'https://image.cnbcfm.com/api/v1/image/106010244-1562708838619bencon-1.jpg',
  },
  {
    large: 'http://silodrome.com/wp-content/uploads/2013/09/iPhone-4-4S.jpg',
    small: 'http://silodrome.com/wp-content/uploads/2013/09/iPhone-4-4S.jpg',
  },
  {
    large: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4-Rwo5Agz9jjlIepyZhO9DPVivJOlvVsHdiqpk9ZWO-_fvvv',
    small: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4-Rwo5Agz9jjlIepyZhO9DPVivJOlvVsHdiqpk9ZWO-_fvvv',
  },
  {
    large: 'https://i.pinimg.com/736x/57/01/4b/57014bd04a3726198d343be1e8b2c193--aston-martin-db-classic-aston-martin.jpg',
    small: 'https://i.pinimg.com/736x/57/01/4b/57014bd04a3726198d343be1e8b2c193--aston-martin-db-classic-aston-martin.jpg',
  },
  {
    large: 'https://d2eohwa6gpdg50.cloudfront.net/wp-content/uploads/2019/05/30163913/Ferrari_SF90_Stradale_3.jpg',
    small: 'https://d2eohwa6gpdg50.cloudfront.net/wp-content/uploads/2019/05/30163913/Ferrari_SF90_Stradale_3.jpg',
  },
  {
    large: 'https://d2eohwa6gpdg50.cloudfront.net/wp-content/uploads/2019/05/30163930/Ferrari_SF90_Stradale_7.jpg',
    small: 'https://d2eohwa6gpdg50.cloudfront.net/wp-content/uploads/2019/05/30163930/Ferrari_SF90_Stradale_7.jpg',
  },
  {
    large: 'https://d2eohwa6gpdg50.cloudfront.net/wp-content/uploads/2019/05/30163707/Ferrari_SF90_Stradale_5.jpg',
    small: 'https://d2eohwa6gpdg50.cloudfront.net/wp-content/uploads/2019/05/30163707/Ferrari_SF90_Stradale_5.jpg',
  },
  {
    large: 'https://miro.medium.com/max/5040/1*aJfK7a2mbXb6uT8yMKS1uw.jpeg',
    small: 'https://miro.medium.com/max/5040/1*aJfK7a2mbXb6uT8yMKS1uw.jpeg',
  },
];
class CarouselTypes extends React.Component {
  state={
    activeImage:0
  };
onNextClick=()=>{
  const{activeImage}=this.state;
  var length=images.length
  if(activeImage < length-1){
    this.setState({activeImage:activeImage + 1})
  }else{
    this.setState({activeImage: 0})
  }
};

onPreviousClick=()=>{
  const{activeImage}=this.state;
  var length=images.length
  if(activeImage > 0){
    this.setState({activeImage:activeImage -1})
  }else{
    this.setState({activeImage: length-1})
  }
};
  render(){
    const{activeImage}=this.state;
    return(
      <div class="carouselType">
     
        
       <div class="container">
         <h2>Click event on Carousel</h2>
        <div class="image-section">
            <img class="largeImage"src= {images[activeImage].large}/>
         </div>
         <button class="next btn" onClick={this.onNextClick}>next</button>
         <button class="past btn" onClick={this.onPreviousClick}>Prev</button>
       </div>
        </div>
      
      
    )
  }
}
 

class SliderTest extends Component {
    constructor() {
        super()
        this.state = {
          data: null,

          button: true,
          
        }
        this.handleClick = this.handleClick.bind(this);
      }

    

      handleClick(){
        this.setState({
          button:!this.state.button
        })
      }

    
    getData() {

        let data = fetch('https://newsapi.org/v2/top-headlines?country=fr&category=technology&apiKey=09554bc11b0b4e4cb4d22c519e42604b')

        .then((res) => {
            res.json().then((resp) => {
                console.log(resp.articles)
                this.setState({ data: resp.articles })
            })
        });
        const billy = data;
    }

    


  
    
    
    
    render() {
        return (
<CardFlipApiLoops>
<CarouselTypes/>
</CardFlipApiLoops>
            
        )
    }
}

export default SliderTest;

const CardFlipApiLoops = styled.section `
.carouselType{
  display:flex;
}
.container{
  position:relative;
  width:400px;
  height:300px;
   margin-right:auto;
  margin-left:auto;
   &:hover{
    .btn{display:inline-block;transition:all 20s ease-in-out;}
     
  }
}
.image-section{
  position:absolute;
  height:100%;
  width:100%;
  display:flex;
  border:1px solid #f1f1f1;
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.4);
}
.scroll{
  overflow-y:hidden;
  overflow-x:auto;
 overflow: -moz-scrollbars-none;
}
.image-section ::-webkit-scrollbar { width: 0 !important };
  
.largeImage{
  width:100%;
  height:100%;
  object-fit:cover;
 
}
.btn{
  display:none;
  width:40px;
  height:40px;
  background: #ffffff;
  color: #555555;
  box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  cursor:pointer;
  position:absolute;
 z-inder:9;
 top:50%
}
.next{
 right:0;  
 };
 .past{
   left:0
};
`;



