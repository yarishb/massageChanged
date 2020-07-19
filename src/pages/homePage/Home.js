import React from 'react';
import './home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Parallax } from 'react-parallax';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../components/navBar/Navbar'
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = () => {   
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
        Aos.init()

    return (
        <>
        <div className="homePage">
        <Parallax 
            className="parallaxPhoto"
            bgImage={'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spa-woman-female-enjoying-massage-in-spa-centre-royalty-free-image-492676582-1549988720.jpg'}
            blur={3}
            strength={700}
        >
        <Navbar />
        <div className="heading">
                Професійний масаж
                <div className="headingsubtxt">
                    Не потрібно ходити по салонах,- ми приїдемо до Вас зі своїм обладнанням!
                    <p className="headingsubNum">+380975033922</p>                
                </div>
            </div>
            </Parallax>
           </div>   
            <div  className="education">
                <img  className="eduPhoto" alt="img" src="https://scontent.flwo3-1.fna.fbcdn.net/v/t1.0-9/94473674_662490607628093_5741547139247374336_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_ohc=7_5HB8aX0xoAX8Y9GYT&_nc_ht=scontent.flwo3-1.fna&oh=79a96c66798a8b5ea6597cfe01e5d70f&oe=5F1B6316"/>
              <div className="eduTextAll">
               <div data-aos ="fade-left" data-aos-duration="1000"  className="eduHeading">
                   Освіта
                </div> 
                <div  data-aos ="fade-left" data-aos-duration="1150" className="eduText">
                    Я кваліфікований масажист.<br />
                    Успішно пройшла інтернаціональний курс PROFMED<br />
                    та отримала диплом спеціаліста. 
                </div>
            </div>
            </div>
            <div className="items">
            <div className="itemsTextAll">
            <div data-aos="fade-right" data-aos-duration="1000" className="itemHeading">
                Обладнання
                <div data-aos="fade-right" data-aos-duration="1150"  class="itemText">
                    Лише у себе вдома Ви зможете відчути справжню цінність масажу, його лікувальний та релаксуючий ефект. <br />
                    Саме тому, ми приїдемо до Вас зі своїм професійним столом та олійками.
                </div>
            </div>
            </div>
            <Slider data-aos="fade-up-left" className="testimonial" {...settings}>
                <img className="testimonialImage" alt="img" src="https://scontent.flwo3-1.fna.fbcdn.net/v/t1.0-9/94427882_662490594294761_1349499129792823296_o.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_ohc=5bg8qZusmg0AX9LG_DG&_nc_ht=scontent.flwo3-1.fna&oh=bbe308047b55469a96914ff775ac85ba&oe=5F1B6D02"/>
                <img className="testimonialImage" alt="img" src="https://cdn.cdnparenting.com/articles/2019/04/07111451/155027159-H.jpg"/>
            </Slider>
            </div>
            
        </>
    );
}

export default Home;