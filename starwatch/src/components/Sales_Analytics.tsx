// components/SalesAnalyticsChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface Dataset {
    label: string;
    data: number[];
    fill?: boolean;
    borderColor: string;
    tension: number;
    pointBackgroundColor?: string;
    pointBorderColor: string;
    pointBorderWidth: number;
    pointStyle: string;
}

interface Data {
    labels: string[];
    datasets: Dataset[];
}

const Sales_Analytics: React.FC = () => {
    const data: Data = {
        labels: ['2015', '2016', '2017', '2018', '2019'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [25, 50, 30, 50, 80],
                fill: false,
                borderColor: 'rgb(0, 102, 204)',
                tension: 0.4,
                pointBackgroundColor: 'rgb(0, 102, 204)',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointStyle: 'circle',
            },
            {
                label: 'Dataset 2',
                data: [20, 45, 28, 32, 80],
                fill: false,
                borderColor: 'rgb(0, 204, 153)',
                tension: 0.4,
                pointBackgroundColor: 'rgb(0, 204, 153)',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointStyle: 'circle',
            }
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Sales Analytics',
                font: {
                    size: 18,
                },
                color: '#333',
                align: 'start',
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
            },
            zoom: {
                enabled: true,
                mode: 'x'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
                ticks: {
                    stepSize: 25,
                    callback: function (value: number) {
                        return value.toString();
                    }
                }
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="bg-white shadow-lg rounded-lg w-full mt-6 p-6 overflow-x-auto">
            <div className="text-gray-900 text-lg font-medium mb-4">
                <div className="m-4 h-96">
                    <Line aria-label="Sales Analytics Chart" data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default Sales_Analytics;
