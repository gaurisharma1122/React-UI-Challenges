import React, { useEffect, useState } from 'react'
import Accordion from './Accordion';

const AccordionGroup = () => {
  const data = [
    {
      title: 'Title 1', content: 'Content 1', isVisible: true
    },
    {
      title: 'Title 2', content: 'Content 2', isVisible: false
    },
    {
      title: 'Title 3', content: 'Content 3', isVisible: false
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const index = data.findIndex(item => item.isVisible === true);
    setActiveIndex(index);
  }, []);

  return (
    <div>
      {
        data.map((item, index) => {
          return <Accordion key={index}
            index={index}
            title={item.title}
            content={item.content}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        })
      }
    </div>
  )
}

export default AccordionGroup