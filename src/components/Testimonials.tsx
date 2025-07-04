"use client"
import { LiaQuoteRightSolid } from "react-icons/lia";
import { SlUserFemale } from "react-icons/sl";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaRegUser } from "react-icons/fa";

const data = [
    {
        quote: "Abdurrahman is a skilled Next.js developer who delivers precise, high-quality work. He solves complex problems efficiently and is reliable, communicative, and proactive. Highly recommended for any frontend role.",
        author: "Khaled H.",
        position: "Project manager",
        isMale: true
    },
    {
        quote: "Abdurrahman is a highly skilled and reliable Senior Frontend Developer. He consistently delivers high-quality work, communicates well, and is a strong team player. I highly recommend him for any frontend project.",
        author: "Ali B.",
        position: "Software Engineer",
        isMale: true
    }
]

export function Testimonials() {
    return (
        <section className="testimonials scale-animation">
            <div className="spacer-45"></div>
            <h5 className="underline-title">What The People Saying</h5>
            <div className="spacer-60"></div>
            {/* <!-- Swiper --> */}
            <Swiper
                className="testimonial-carousel"
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={2}
            >
                <div className="swiper-wrapper">
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialItem
                                quote={item.quote}
                                author={item.author}
                                position={item.position}
                                isMale={item.isMale}
                            />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
            <div className="spacer-60"></div>
        </section>
    );
}

type TestimonialItemProps = {
    quote: string;
    author: string;
    position: string;
    isMale: boolean;
}

export function TestimonialItem({ author, position, quote, isMale }: TestimonialItemProps) {
    return (
        <>
            <div className="left ">
                <LiaQuoteRightSolid className="text-5xl" />
            </div>
            <div className="right">
                <p className="little-p">
                    {quote}
                </p>
                <div className="comment-author flex items-center">
                    <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-600">
                        {isMale ? <FaRegUser /> : <SlUserFemale />}
                    </span>
                    <div className="author-info">
                        <h4>{author}</h4>
                        <span>{position}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
