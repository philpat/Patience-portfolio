import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import TimelineItem from './TimelineItem';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Timeline = ({ data }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const totalItems = data.length; // Calculate the total number of items

  return (
    <Element name="timeline">
      <div className="mt-10">
        {data.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <TimelineItem number={item.number} context={item.context} totalItems={totalItems} />
          </div>
        ))}
      </div>
    </Element>
  );
};

export default Timeline;
