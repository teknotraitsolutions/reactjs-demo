import React from 'react';
import {Doughnut} from 'react-chartjs-2';

export const Chart = () => {
    const data = {
        labels:[
            'Dawn',
            'Cascade',
            'Scotch',
            'Sun Triple',
            'Clorox',
            'Oil'
        ],
        datasets:[
            {
                label:'Our Products 2020',
                data:[3,4,2,1,5,8],
                backgroundColor:[
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 66, 1)',
                    'rgba(153, 102, 96, 1)',
                    'rgba(200, 88, 255, 1)'
                ],

            }
        ]
    }
    const options = {
        plugins:{
            legend: {
                position: 'right',
            }
        }
    }

    return (
        <div>
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default Chart;