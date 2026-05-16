
import { Link } from 'react-router';

const FriendCard = ({ friend }) => {
  const { name, picture, days_since_contact, tags, status } = friend;

  const getStatusColor = () => {
    if (status === 'overdue') return 'bg-red-500';
    if (status === 'almost due') return 'bg-orange-400';
    if (status === 'on-track') return 'bg-[#2b4a3f]';
    return 'bg-gray-500';
  };

  return (
    <Link to={`/friend/${friend.id}`} className="block bg-white rounded-xl shadow-sm p-6 flex flex-col items-center hover:shadow-md transition-shadow">
      <img
        src={picture}
        alt={name}
        className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-slate-50"
      />
      <h3 className="font-semibold text-lg text-gray-900 leading-tight mb-1 text-center">{name}</h3>
      <p className="text-xs text-gray-400 mb-4">{days_since_contact}d ago</p>

      <div className="flex flex-wrap justify-center gap-2 mb-5 min-h-[24px]">
        {tags && tags.map((tag, idx) => (
          <span key={idx} className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase rounded-full tracking-wider">{tag}</span>
        ))}
      </div>

      <div className="mt-auto">
        <span className={`px-4 py-1 text-xs font-semibold text-white rounded-full capitalize ${getStatusColor()}`}>
          {status}
        </span>
      </div>
    </Link>
  );
};

export default FriendCard;
