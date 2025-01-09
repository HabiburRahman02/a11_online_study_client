import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Heading from '../../components/Heading';


const Feedback = () => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch('/feedback.json')
            .then(res => res.json())
            .then(data => setFeedback(data))
    }, [])

    return (
        <div id='feedback' className='pt-12 pb-24 max-w-[1400px] mx-auto px-6
         md:px-0'>
            <Heading
                title="Candidates Feedback"
            ></Heading>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper h-full"
                breakpoints={{
                    640: {
                        slidesPerView: 1, // Show 1 slide on small screens
                    },
                    768: {
                        slidesPerView: 2, // Show 2 slides on medium screens
                    },
                    1024: {
                        slidesPerView: 3, // Show 3 slides on larger screens
                    },
                }}
            >
                <div >

                    {
                        feedback.map(feed =>
                            <SwiperSlide key={feed.id}>
                                <div className="card hover:scale-105 duration-500 h-full rounded-none shadow-lg border">
                                    <figure>
                                        <img
                                            src={feed.img}
                                            className='h-32 w-32 mt-8 object-cover rounded-full'
                                            alt="Shoes" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            {feed.name}
                                            <div className="badge badge-secondary">{feed.rating}</div>
                                        </h2>
                                        <p>{feed.description.slice(0, 150)}...</p>
                                        <p>Date: {feed.date}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }

                </div>
            </Swiper>
        </div>
    );
};

export default Feedback;