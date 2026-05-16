import { useParams } from 'react-router';
import { BellOff, Archive, Trash2 } from 'lucide-react';
import friendsData from '../../friends.json';
import callIcon from '../assets/call.png';
import textIcon from '../assets/text.png';
import videoIcon from '../assets/video.png';

const FriendDetails = () => {
  const { id } = useParams();
  const friend = friendsData.find((f) => f.id === parseInt(id));

  if (!friend) return <div className="p-10 text-center">Friend not found</div>;

  const { name, picture, days_since_contact, tags, status, bio, goal, next_due_date, email } = friend;

  
  const getStatusColor = () => {
    if (status === 'overdue') return 'bg-red-500';
    if (status === 'almost due') return 'bg-orange-400';
    if (status === 'on-track') return 'bg-[#2b4a3f]';
    return 'bg-gray-500';
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Left Side */}
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <img src={picture} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h2 className="text-2xl font-bold">{name}</h2>
            
            <div className={`text-white px-3 py-1 rounded-full text-sm inline-block my-2 capitalize ${getStatusColor()}`}>
              {status}
            </div>
            
            <div className="flex gap-2 justify-center mb-4">
              {tags?.map((tag, i) => (
                <span key={i} className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs uppercase">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-500 italic mb-2">"{bio}"</p>
            <p className="text-sm text-gray-400">Preferred: {email}</p>
          </div>

          <button className="btn btn-block bg-white shadow border-none text-gray-700">
            <BellOff size={18} /> Snooze 2 Weeks
          </button>
          
          <button className="btn btn-block bg-white shadow border-none text-gray-700">
            <Archive size={18} /> Archive
          </button>
          
          <button className="btn btn-block bg-white shadow border-none text-red-500">
            <Trash2 size={18} /> Delete
          </button>
        </div>

        {/* Right Side */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Top 3 Cards */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-[#2b4a3f]">{days_since_contact}</div>
              <div className="text-gray-500 mt-1">Days Since Contact</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl font-bold text-[#2b4a3f]">{goal}</div>
              <div className="text-gray-500 mt-1">Goal (Days)</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center flex flex-col justify-center">
              <div className="text-xl font-bold text-[#2b4a3f]">{formatDate(next_due_date)}</div>
              <div className="text-gray-500 mt-1">Next Due</div>
            </div>
          </div>

          {/* Goal Card */}
          <div className="bg-white p-6 rounded-lg shadow flex justify-between items-center">
            <div>
              <h3 className="font-bold mb-1">Relationship Goal</h3>
              <p className="text-gray-600">Connect every <span className="font-bold text-black">{goal} days</span></p>
            </div>
            <button className="btn btn-sm btn-outline">Edit</button>
          </div>

          {/* Check-In Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-bold mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-4">
              <button className="btn h-24 bg-gray-50 border-none flex flex-col gap-2">
                <img src={callIcon} alt="Call" className="w-6" /> Call
              </button>
              <button className="btn h-24 bg-gray-50 border-none flex flex-col gap-2">
                <img src={textIcon} alt="Text" className="w-6" /> Text
              </button>
              <button className="btn h-24 bg-gray-50 border-none flex flex-col gap-2">
                <img src={videoIcon} alt="Video" className="w-6" /> Video
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
