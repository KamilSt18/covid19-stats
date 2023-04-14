import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { DatasetType } from '../../core/models/DatasetType';

type Props = { dataset: DatasetType; labels: string[] };

const VerticalBarChart = ({ dataset, labels }: Props) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Line Chart',
      },
    },
  };

  const data = {
    labels,
    datasets: dataset,
  };

  return <Bar options={options} data={data} className="my-3 mb-5" />;
};

export default VerticalBarChart;
