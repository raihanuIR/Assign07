import { useContext } from 'react';
import { Pie, PieChart, Legend } from 'recharts';
import { TimelineContext } from '../Context/Context';

export default function Stats({ isAnimationActive = true }) {
    const { timelines } = useContext(TimelineContext);

    // Calculate actual interactions
    let textCount = 0, callCount = 0, videoCount = 0;
    timelines.forEach(t => {
        if (t.action === 'text') textCount++;
        if (t.action === 'call') callCount++;
        if (t.action === 'video') videoCount++;
    });

    const data = [
        { name: 'Text', value: textCount, fill: '#8b5cf6' },
        { name: 'Call', value: callCount, fill: '#1f4236' },
        { name: 'Video', value: videoCount, fill: '#22c55e' },
    ];

    return (
        <div className="max-w-5xl mx-auto px-4 py-12 w-full">
            <h1 className="text-3xl font-bold mb-8">Friendship Analytics</h1>
            <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col items-center">
                <h2 className="w-full text-left text-gray-700 font-medium text-xl mb-8">By Interaction Type</h2>

                <PieChart width={250} height={200}>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={isAnimationActive}
                    />
                    <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px',}} />
                </PieChart>
            </div>
        </div>
    );
}