import { useContext } from "react";
import { TimelineContext } from "../Context/Context";
import callIcon from '../assets/call.png';
import textIcon from '../assets/text.png';
import videoIcon from '../assets/video.png';

const Timeline = () => {
    const { timelines } = useContext(TimelineContext);

    const getIcon = (action) => {
        if (action === 'call') return callIcon;
        if (action === 'text') return textIcon;
        if (action === 'video') return videoIcon;
        return null;
    };

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-12 w-full">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Timeline</h1>
            
            <div className="dropdown dropdown-start mb-5 w-44 ">
                <div tabindex="0" role="button" class="btn m-1 w-full justify-between flex">Filter timeline <span className="text-md font-bold">⬇️</span></div> 
                <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-45 p-2 shadow-sm">
                    <li><a>Call</a></li> 
                    <li><a>Text</a></li> 
                    <li><a>Video</a></li>
                </ul> 
            </div>

            <div className="space-y-4">
                {timelines.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-sm p-10 text-center text-gray-500">
                        No activity logged yet. Check in with a friend to get started!
                    </div>
                ) : (
                    [...timelines].reverse().map((timeline, index) => (
                        <div key={`${timeline.id}-${index}`} className="bg-white rounded-xl shadow-sm p-6 flex items-center hover:shadow-md transition-shadow">
                            <div className="mr-6 flex items-center justify-center w-12 h-12 rounded-full bg-slate-50">
                                <img src={getIcon(timeline.action)} alt={timeline.action} className="w-6 h-6 opacity-80" />
                            </div>
                            <div>
                                <h3 className="text-slate-800 text-lg">
                                    <span className="font-bold capitalize">{timeline.action}</span> with {timeline.name}
                               </h3>
                                <p className="text-sm text-slate-500 mt-1">{formatDate(timeline.time)}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Timeline;