import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    const marksArray = [
        {
            "id": 1,
            "name": "John Doe",
            "physics": 85,
            "chemistry": 90,
            "math": 78
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "physics": 92,
            "chemistry": 88,
            "math": 95
        },
        {
            "id": 3,
            "name": "Mike Johnson",
            "physics": 78,
            "chemistry": 86,
            "math": 80
        },
        {
            "id": 4,
            "name": "Sarah Brown",
            "physics": 89,
            "chemistry": 94,
            "math": 91
        },
        {
            "id": 5,
            "name": "David Wilson",
            "physics": 76,
            "chemistry": 82,
            "math": 79
        },
        {
            "id": 6,
            "name": "Lisa Davis",
            "physics": 93,
            "chemistry": 89,
            "math": 97
        },
        {
            "id": 7,
            "name": "Chris Lee",
            "physics": 88,
            "chemistry": 91,
            "math": 83
        },
        {
            "id": 8,
            "name": "Emily White",
            "physics": 85,
            "chemistry": 87,
            "math": 92
        },
        {
            "id": 9,
            "name": "Kevin Moore",
            "physics": 77,
            "chemistry": 80,
            "math": 75
        },
        {
            "id": 10,
            "name": "Olivia Martin",
            "physics": 90,
            "chemistry": 93,
            "math": 88
        },
        {
            "id": 11,
            "name": "Daniel Hall",
            "physics": 84,
            "chemistry": 85,
            "math": 89
        },
        {
            "id": 12,
            "name": "Ava Turner",
            "physics": 79,
            "chemistry": 84,
            "math": 81
        }
    ]


    return (
        <div>
            <LineChart
                 width={500}
                 height={300}
                 data={marksArray}
            >
                <Line dataKey="physics"></Line>
                <Line stroke='stroke="#8884d8"' dataKey="math"></Line>
            </LineChart>
        </div>
    );
};

export default Dashboard;