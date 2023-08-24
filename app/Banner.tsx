'use client'
// import React, { useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './globals.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import Image from 'next/image';
export default function Banner(params:any) {
    
    return (
        <>
        <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            pagination={{
            clickable: true,
            }}
            
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/MG-The-Witcher-1280x920-1.jpg" alt="aa" /></SwiperSlide>
            <SwiperSlide><img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/230519_Banner-Home-Arg_e.png" alt="df" /></SwiperSlide>
            <SwiperSlide><img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/230519_Banner-Home-Arg_a_novedades-1.jpg" alt="wg" /></SwiperSlide>
            <SwiperSlide><img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/230519_Banner-Home-Arg_a.png" alt="asfd" /></SwiperSlide>
            <SwiperSlide><img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/230519_Banner-Home-Arg_d.png" alt="asfd" /></SwiperSlide>
            <SwiperSlide><img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/APP_WEB_HOME_WEB_1280-x-920-Safe-Zone-1280x430-.jpg" alt="asfd" /></SwiperSlide>
            <SwiperSlide><img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Home-Web-1280-x-920-v1.jpg" alt="asfd" /></SwiperSlide>
            <SwiperSlide><img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Home-Web-1280-x-920-v2.jpg" alt="asfd" /></SwiperSlide>
            <SwiperSlide><img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Banner-Home-Arg_1920x1380_MM-3.jpg" alt="asfd" /></SwiperSlide>
            <SwiperSlide><img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Banner-Home-Arg_1920x1380_invitate-3.jpg" alt="asfd" /></SwiperSlide>
            <SwiperSlide><img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WEB_SEPTIEMBRE_NUGGETS-PLANT-BASE_HOME-BANNER_270922_1280x920_Mesa-de-trabajo-1.jpg" alt="asfd" /></SwiperSlide>
            <SwiperSlide><img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/HomeBanner_KINGVEGETAL.jpg" alt="asfd" /></SwiperSlide>
            <SwiperSlide><img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/wordpress/web/app/uploads/sites/5/BANNER-JPG-1280x920px_v4_slide_2.jpg" alt="asfd" /></SwiperSlide>
            <SwiperSlide><img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina/home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BannerHome_StackerFan_a.png" alt="asfd" /></SwiperSlide> 
            
        </Swiper>
        </>
    );
};
