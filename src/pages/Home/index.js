import React, { useEffect, useState } from "react";
import BoxStatistic from "../../components/BoxStatistic";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { scrollTop } from "../../utils/ScrollTop";
import { useDispatch, useSelector } from "react-redux";
import { getHome } from "../../redux/StatisticReducer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// const statistics = [
//   {
//     label: "Số hàng đã xuất",
//     image: "export.png",
//     quantity: 10,
//     percent: 5,
//   },
//   {
//     label: "Số hàng đã nhập",
//     image: "import.png",
//     quantity: 15,
//     percent: 12,
//   },
//   {
//     label: "Thu nhập",
//     image: "benefit.png",
//     quantity: 1500000,
//     percent: 50,
//   },
// ];

const Home = () => {
  const dispatch = useDispatch();
  const { home } = useSelector((state) => state.statistic);
  const [statistics, setStatistics] = useState([
    {
      label: "Số danh mục",
      image: "export.png",
      quantity: 10,
    },
    {
      label: "Số sản phẩm",
      image: "import.png",
      quantity: 15,
    },
    {
      label: "Số người dùng",
      image: "benefit.png",
      quantity: 1500000,
    },
  ]);
  useEffect(() => {
    scrollTop();
  }, []);

  useEffect(() => {
    setStatistics(
      statistics.map((item, index) => {
        if (index === 0) {
          return { ...item, quantity: home.category };
        }
        if (index === 1) {
          return { ...item, quantity: home.product };
        }
        if (index == 2) {
          return { ...item, quantity: home.staff };
        }
        return item;
      })
    );
  }, [home]);

  useEffect(() => {
    dispatch(getHome());
  }, []);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [1, 2, 3, 4],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [1, 2, 3, 4],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const dataPie = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className='py-[30px] px-[20px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
        <BoxStatistic statistic={statistics[0]} />
        <BoxStatistic statistic={statistics[1]} />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] mt-[20px]'>
        <div className='rounded-[10px] bg-white shadowBox px-3 py-5'>
          <Bar options={options} data={data} />;
        </div>
        <div className='grid grid-cols-1 gap-[20px]'>
          <BoxStatistic statistic={statistics[2]} />
          <div className='bg-white rounded-[10px] shadowBox w-full px-3 py-5'>
            <div className='w-[50%] mx-auto'>
              <Pie data={dataPie} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
