import React from 'react';
import { LineChart as Lchart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const studentsMarksData = [
        { student: "Student 1", math: 78, physics: 82, chemistry: 74 },
        { student: "Student 2", math: 85, physics: 88, chemistry: 79 },
        { student: "Student 3", math: 92, physics: 91, chemistry: 84 },
        { student: "Student 4", math: 67, physics: 75, chemistry: 70 },
        { student: "Student 5", math: 88, physics: 89, chemistry: 85 },
        { student: "Student 6", math: 74, physics: 80, chemistry: 78 },
        { student: "Student 7", math: 81, physics: 83, chemistry: 76 },
        { student: "Student 8", math: 90, physics: 95, chemistry: 88 },
        { student: "Student 9", math: 79, physics: 78, chemistry: 72 },
        { student: "Student 10", math: 95, physics: 92, chemistry: 89 }
    ];

    return (
        <div>
            <Lchart width={600} height={400} data={studentsMarksData}>
                <XAxis dataKey="student"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
                <Line dataKey="chemistry" stroke='white'></Line>
            </Lchart>
        </div>
    );
};

export default LineChart;