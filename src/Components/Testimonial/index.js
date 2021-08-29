import React from "react";
import styles from "./testimonial.module.css";
import { Carousel } from "react-bootstrap";
import { TestimonialData } from "./testimonialData";
import MainImage from "../../Assets/cover-img.jpg";
const Testimonials = () => {
  return (
    <div className={styles.testimonial_div}>
      <h2 className={styles.testimonial_mainHeading}>
        Overheard from travelers
      </h2>
      <Carousel variant="light" className={styles.carousel}>
        {TestimonialData.map((data) => {
          return (
            <Carousel.Item key={data.id} className={styles.carousel__item}>
              <img
                className={styles.main_img + " d-block w-100"}
                src={MainImage}
                alt="First slide"
              />
              <Carousel.Caption className={styles.carousel__caption}>
                <h2 className={styles.testimonial__name}>{data.name}</h2>
                <h4 className={styles.testimonial__designation}>
                  {data.designation}
                </h4>
                <p className={styles.testimonial__description}>
                  "{data.description}"
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Testimonials;
