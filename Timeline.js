import React from 'react';
import timelineData from '../data';
import TimlineItem from './Timelineitem'

const Timeline = () => timelineData.length > 0 && (
    <div className="timeline-container">
         {timelineData.map((data, idx) =>(
             <TimlineItem data={data} key={idx} />
         ))}    
    </div>
);

export default Timeline;