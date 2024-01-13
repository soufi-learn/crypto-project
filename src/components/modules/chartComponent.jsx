import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';


function ChartComponent({ type, data }) {

    return (
        <ResponsiveContainer width={'100%'} height={'100%'} className="chart-parent">
            <LineChart width={400} height={400} data={data}>
                <CartesianGrid stroke='#eee' />
                <Line type='monotoneX' dataKey={type} stroke='#3874ff' strokeWidth='2' dot={false} />
                <YAxis dataKey={type} domain={['auto', 'auto']} />
                <XAxis hide dataKey='date' />
                <Legend />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default ChartComponent
