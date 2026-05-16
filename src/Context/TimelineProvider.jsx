import { useState } from "react";
import { TimelineContext } from "./Context";

const TimelineProvider = ({ children }) => {

    const [timelines, setTimelines] = useState([]);  

    return (
        <TimelineContext.Provider value={{timelines, setTimelines}}>
            {children}
        </TimelineContext.Provider>
    );
};

export default TimelineProvider;  