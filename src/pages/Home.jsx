import FriendCard from '../components/FriendCard';
import friendsData from '../../friends.json';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
          Friends to keep close in your life
        </h1>
        <p className="text-slate-500 text-lg mb-8 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className="bg-[#2b4a3f] hover:bg-[#1e342c] text-white px-6 py-2.5 rounded-md font-medium transition-colors shadow-sm">
          + Add a Friend
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
        <div className="bg-white rounded-xl shadow-sm p-8 text-center flex flex-col justify-center">
          <div className="text-4xl font-bold text-[#2b4a3f] mb-2 tracking-tight">10</div>
          <div className="text-sm text-slate-500">Total Friends</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-8 text-center flex flex-col justify-center">
          <div className="text-4xl font-bold text-[#2b4a3f] mb-2 tracking-tight">3</div>
          <div className="text-sm text-slate-500">On Track</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-8 text-center flex flex-col justify-center">
          <div className="text-4xl font-bold text-[#2b4a3f] mb-2 tracking-tight">6</div>
          <div className="text-sm text-slate-500">Need Attention</div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-8 text-center flex flex-col justify-center">
          <div className="text-4xl font-bold text-[#2b4a3f] mb-2 tracking-tight">12</div>
          <div className="text-sm text-slate-500">Interactions This Month</div>
        </div>
      </div>

      {/* Your Friends Section */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-6">Your Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {friendsData.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
}
