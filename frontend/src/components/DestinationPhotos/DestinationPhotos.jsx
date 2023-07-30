import React,{useState} from 'react'
import "./swipper.css"


function DestinationPhotos(props) {
    const [slides, setSlides] = useState([]);
    console.log(props)
    const renderPhotos = () =>{
        if(props.images){
          props.images.map((e)=>{
            slides.push(
            <swiper-slide>
                    <img style={{width:"100%",height:"100%",objectFit:"cover"}} src= {e.url} />
            </swiper-slide>
            )
          })
        }
      }
  renderPhotos();
  return (
    <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" navigation="true" space-between="30"
          centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">
          {
            slides.length? slides : <swiper-slide>No Images Available</swiper-slide>
          }
          
    </swiper-container>
  )
}

export default DestinationPhotos