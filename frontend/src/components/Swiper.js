import styles from './styles/swiper.module.css';
import { useNavigate } from 'react-router-dom'
import { Rating, Box, Typography } from '@mui/material'
const Swiper = ({ items }) => {
    const navigate = useNavigate();

    return (
        <swiper-container className={styles.swiperContainer} slides-per-view="3" navigation="true" space-between="30" free-mode="true">
            {items.map((item) => {
                return (
                    <swiper-slide onClick={() => navigate(`/destination/${item.id}`)} className={styles.swiperSlide} key={item.id} lazy="true">
                        <div className={styles.swiperImage}>
                            <img loading="lazy" src={item.imageUrl} alt={item.name} style={{ height: '100%', width: '100%', objectFit: 'cover', borderRadius: "8px" }} />
                        </div>
                        <div className={styles.cardContent}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className={styles.placeName}>
                                    {item.name}
                                </div>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
                                    <Typography ml={1}>
                                        {item.rating}
                                    </Typography>
                                </Box>
                            </div>
                            <div className={styles.placeAddress}>
                                {item.city}
                            </div>
                        </div>
                    </swiper-slide>
                );
            })}
        </swiper-container>
    );
};

export default Swiper;