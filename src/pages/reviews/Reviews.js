import React, { Component, useState } from 'react'
import './reviews.css'
import Navbar from '../../components/navBar/Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Aos from 'aos';
import 'aos/dist/aos.css';



class Reviews extends Component{
    constructor(props){
        super(props);
        this.state = {hover: false}
    }

    settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

      componentDidMount(){
        const timeout = setTimeout(() => {
            clearTimeout(timeout)
        }, 10)
      }

    render(){
        Aos.init()
    return (
    <>
        <div className="fullReviews">
            <Navbar />
            <div className={this.state.hover? "reviewsTopHover" : "reviewsTop"}  onMouseOut={() => {this.setState({hover:false})}} onMouseOver={() => {this.setState({hover: true})}}>
            <img alt="img" src="https://scontent.flwo3-1.fna.fbcdn.net/v/t31.0-8/17635470_108258269717999_5368874794586933674_o.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=nxkSySa9V_0AX-gugdp&_nc_ht=scontent.flwo3-1.fna&oh=c9e954cdc26a0ca7e63fe7e9c559db2f&oe=5F1D25D3" className="reviewsMainPhoto"/>
            </div>   
            <div data-aos ="fade-right" data-aos-duration="1000" className="reviewsHeading" onMouseOut={() => {this.setState({hover:false})}} onMouseOver={() => {this.setState({hover:true})}}>
                На моєму рахунку близько ста щасливих клієнтів, результат яких видно неозброєним оком.
            </div>
            <div onMouseOut={() => {this.setState({hover:false})}} onMouseOver={() => {this.setState({hover:true})}}>
            <Slider {...this.settings} className="reviewPhoto" >
                <img className="reviewPhotoInSlider"   alt="img" src="https://scontent.flwo3-1.fna.fbcdn.net/v/t1.0-9/61854887_454124955131327_4764855242376347648_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=gqfveY5CqZIAX-hrEeF&_nc_ht=scontent.flwo3-1.fna&oh=fda7fc33da8dd8d1beadd99892c9a48d&oe=5F1C98E8"/>
                <img className="reviewPhotoInSlider"  alt="img" src="https://scontent.flwo3-1.fna.fbcdn.net/v/t1.0-9/93879680_662490494294771_8063192960935657472_o.jpg?_nc_cat=108&_nc_sid=8bfeb9&_nc_ohc=X0EGGodUI-gAX-XBiKU&_nc_ht=scontent.flwo3-1.fna&oh=833837c0c89e684f3d65ca515d738258&oe=5F1DC713"/>
                <img className="reviewPhotoInSlider" alt="img" src="https://scontent.flwo3-1.fna.fbcdn.net/v/t1.0-9/94473674_662490607628093_5741547139247374336_o.jpg?_nc_cat=107&_nc_sid=8bfeb9&_nc_ohc=7_5HB8aX0xoAX8Y9GYT&_nc_ht=scontent.flwo3-1.fna&oh=79a96c66798a8b5ea6597cfe01e5d70f&oe=5F1B6316"/>
                <img className="reviewPhotoInSlider"  alt="img"src="https://scontent.flwo3-1.fna.fbcdn.net/v/t1.0-9/94427882_662490594294761_1349499129792823296_o.jpg?_nc_cat=106&_nc_sid=8bfeb9&_nc_ohc=5bg8qZusmg0AX9LG_DG&_nc_ht=scontent.flwo3-1.fna&oh=bbe308047b55469a96914ff775ac85ba&oe=5F1B6D02"/>            
            </Slider>
            </div>
        </div>
        <div className="reviews">
                <a className="reviewsAdd" href="https://www.facebook.com/pg/MassageInSambir/reviews"><div className="reviewsAddText">Залишити відгук</div></a>
        </div>
        <div class="fb-comments" data-href="https://www.facebook.com/pg/MassageInSambir/reviews/" data-numposts="1" data-mobile="true" data-width="100%"></div> 
        </>
    )}
}

export default Reviews 