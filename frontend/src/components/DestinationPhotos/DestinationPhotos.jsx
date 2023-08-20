import React, { useState } from 'react'
import styles from './destination.module.css'

function DestinationPhotos(props) {
  const [slides, setSlides] = useState([]);
  console.log(props)

  const renderPhotos = () => {
    if (props.images) {
      props.images.map((e) => {
        slides.push(
          <swiper-slide>
            <img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={e.url} alt={e.alt} />
          </swiper-slide>
        )
      })
    }
  }
  renderPhotos();

  return (
    <div className={styles.swiperBox}>
      <swiper-container pagination="true" pagination-clickable="true" navigation="true" space-between="30"
        centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">
        {
          slides.length ? slides : <swiper-slide className={styles.swiperSlide}>No Images Available</swiper-slide>
        }
      </swiper-container>
    </div>
  )
}

export default DestinationPhotos