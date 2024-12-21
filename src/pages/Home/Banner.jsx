import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import banner1 from '../../assets/banner/banner1.jpg'
import banner2 from '../../assets/banner/banner2.jpg'
import banner3 from '../../assets/banner/banner3.jpg'
import { Link } from 'react-router-dom';

import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
    return (
        <div className=''>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={2000}
                className='w-full md:h-screen h-[520px]' >
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: `url(${banner1})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-0"></div>
                    <div className="hero-content text-neutral-content">
                        <div className='flex justify-start items-center'>
                            <div className="md:w-2/3">
                                <p className="mb-5 text-xl font-bold uppercase">
                                    create a online Group study site
                                </p>
                                <h1 className="mb-12 text-6xl font-bold uppercase">so easy when <span className='text-[#1ba590]'>udetor</span> appears.</h1>
                                <Link to='/'>
                                    <button className="uppercase bg-customGreen py-2 px-12  text-white font-bold 
                                    border-[2px]
                                    border-transparent hover:border-[2px] hover:border-white hover:bg-transparent transition-all rounded-full">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                            <div className='md:w-1/3'>

                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: `url(${banner2})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-0"></div>
                    <div className="hero-content text-neutral-content">
                        <div className='flex justify-start items-center'>
                            <div className="md:w-2/3">
                                <p className="mb-5 text-xl font-bold uppercase">
                                    create a online group study site
                                </p>
                                <h1 className="mb-12 text-6xl font-bold uppercase">so easy when <span className='text-[#1ba590]'>udetor</span> appears.</h1>
                                <Link to='/'>
                                    <button className="uppercase bg-customGreen py-2 px-12  text-white font-bold 
                                    border-[2px]
                                    border-transparent hover:border-[2px] hover:border-white hover:bg-transparent transition-all rounded-full">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                            <div className='md:w-1/3'>

                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: `url(${banner3})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-0"></div>
                    <div className="hero-content text-neutral-content">
                        <div className='flex justify-start items-center'>
                            <div className="md:w-2/3">
                                <p className="mb-5 text-xl font-bold uppercase">
                                    create a online group study site
                                </p>
                                <h1 className="mb-12 text-6xl font-bold uppercase">so easy when <span className='text-[#1ba590]'>udetor</span> appears.</h1>
                                <Link to='/'>
                                    <button className="uppercase bg-customGreen py-2 px-12  text-white font-bold 
                                    border-[2px]
                                    border-transparent hover:border-[2px] hover:border-white hover:bg-transparent transition-all rounded-full">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                            <div className='md:w-1/3'>

                            </div>
                        </div>
                    </div>
                </div>

            </AutoplaySlider>

        </div>
    );
};

export default Banner;