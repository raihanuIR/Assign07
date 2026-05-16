import { useContext } from "react";
import { TimelineContext } from "../Context/Context";

const Timeline = () => {

    const { timelines } = useContext(TimelineContext);
    console.log(timelines); 

    return (
        <div className="container mx-auto px-4 py-8">
            {timelines.map((timeline, index) => (
                <div key={`${timeline.id}-${index}`}>
                    <h1>{timeline.name}</h1>
                    <p>Action: {timeline.action}</p>
                    <p>Time: {timeline.time}</p>
                </div>
            ))}
        </div>
    );
};

export default Timeline;  