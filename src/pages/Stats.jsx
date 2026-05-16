import { Pie, PieChart, Legend } from 'recharts';

// #region Sample data
const data = [
    { name: 'Text', value: 400, fill: '#8b5cf6' },
    { name: 'Call', value: 300, fill: '#1f4236' },
    { name: 'Video', value: 300, fill: '#22c55e' },
];

// #endregion
export default function Stats({ isAnimationActive = true }) {
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