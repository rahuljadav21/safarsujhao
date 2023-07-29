import './styles/swiper.css';

const Swiper = ({ items }) => {
    return (
        <div>
            <div className="filterTitle">
                <h2>
                    Explore Top Destination
                </h2>
            </div>
            <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" slides-per-view="3" navigation="true"
                space-between="30" free-mode="true">
                {items.map((item) => {
                    return (
                        <swiper-slide key={item.title} lazy="true">
                            <div className='placeImage'>
                                <img loading="lazy" src={item.img} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className='cardContent'>
                                <div className='placeName'>
                                    Place Name
                                </div>
                                <div className='placeAddress'>
                                    address
                                </div>
                            </div>
                        </swiper-slide>
                    );
                })}
            </swiper-container>
        </div>
    );
};

export default Swiper;