import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  return (
    <div ref={ref} className={inView ? 'visible' : 'hidden'}>
      {children}
    </div>
  );
};

export default AnimatedSection;
