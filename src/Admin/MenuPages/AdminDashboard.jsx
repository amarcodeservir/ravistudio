import React, { useEffect, useState } from "react";
// import { db, collection, getDocs, query, where } from '../../firebase';
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";
// import { Pie } from "react-chartjs-2";
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
import { Pie } from "react-chartjs-2";
import { Link } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const AdminDashboard = () => {
  const [ordersCount, setOrdersCount] = useState(0);
  const [liveOrdersCount, setLiveOrdersCount] = useState(0);
  const [ongoingOrdersCount, setOngoingOrdersCount] = useState(0);
  const [completedOrdersCount, setCompletedOrdersCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);

  const fetchDashboardData = async () => {
    try {
      const ordersSnapshot = await getDocs(collection(db, "orders"));
      setOrdersCount(ordersSnapshot.size);

      const liveOrdersSnapshot = await getDocs(
        query(collection(db, "orders"), where("status", "==", "Live"))
      );
      setLiveOrdersCount(liveOrdersSnapshot.size);

      const ongoingOrdersSnapshot = await getDocs(
        query(collection(db, "orders"), where("status", "==", "ongoing"))
      );
      setOngoingOrdersCount(ongoingOrdersSnapshot.size);

      const completedOrdersSnapshot = await getDocs(
        query(collection(db, "orders"), where("status", "==", "completed"))
      );
      setCompletedOrdersCount(completedOrdersSnapshot.size);

      const usersSnapshot = await getDocs(collection(db, "users"));
      setUsersCount(usersSnapshot.size);

      const itemsSnapshot = await getDocs(collection(db, "items"));
      setItemsCount(itemsSnapshot.size);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const orderData = {
    labels: ["Live Orders", "Ongoing Orders", "Completed Orders"],
    datasets: [
      {
        data: [liveOrdersCount, ongoingOrdersCount, completedOrdersCount],
        backgroundColor: ["#FFB64D", "#6FBF73", "#4D8BFF"],
        hoverBackgroundColor: ["#FF9F3F", "#4D8B4D", "#4D73FF"],
      },
    ],
  };

  // Options for the pie chart
  const orderOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.raw + " orders";
          },
        },
      },
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      {/* Header */}
      <h1 className="mb-6 text-4xl font-bold text-center text-blue-600">
        Admin Dashboard
      </h1>

      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Total Orders */}
        <div className="flex items-center justify-between p-6 transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl">
          <div>
            <Link
              to=""
              className="p-3 text-blue-600 bg-blue-100 rounded-xl text-2xl border border-gray-700 "
            >
              Add Products
            </Link>
          </div>
          <p className="text-3xl font-bold text-blue-600">{ordersCount}</p>
          <div className="p-3 text-blue-600 bg-blue-100 rounded-xl text-2xl border border-gray-700">
            <Link to="">All Products</Link>
          </div>
        </div>

        {/* Total Users */}
        <div className="flex items-center justify-between p-6 transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl">
          <div>
            <Link
              to=""
              className="p-3 text-blue-600 bg-blue-100 rounded-xl text-2xl border border-gray-700 "
            >
              Add Gallary
            </Link>
          </div>
          <p className="text-3xl font-bold text-green-600">{usersCount}</p>
          <div>
            <Link
              to=""
              className="p-3 text-blue-600 bg-blue-100 rounded-xl text-2xl border border-gray-700 "
            >
              All Gallary
            </Link>
          </div>
        </div>

        {/* Total Items */}
        <div className="flex items-center justify-between p-6 transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl">
          <div>
            <Link
              to=""
              className="p-3 text-blue-600 bg-blue-100 rounded-xl text-2xl border border-gray-700 "
            >
              Add Blog
            </Link>
          </div>{" "}
          <p className="text-3xl font-bold text-purple-600">{itemsCount}</p>
          <div>
            <Link
              to=""
              className="p-3 text-blue-600 bg-blue-100 rounded-xl text-2xl border border-gray-700 "
            >
              All Blog
            </Link>
          </div>
        </div>

        {/* Live Orders */}
        <div className="flex items-center justify-between p-6 transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl">
          <div>
            <Link
              to=""
              className="p-3 text-blue-600 bg-blue-100 rounded-xl text-2xl border border-gray-700 "
            >
              Add Photograph
            </Link>
          </div>
          <p className="text-3xl font-bold text-orange-600">
            {liveOrdersCount}
          </p>
          <div>
            <Link
              to=""
              className="p-3 text-blue-600 bg-blue-100 rounded-xl text-2xl border border-gray-700 "
            >
              All Photograph
            </Link>
          </div>
        </div>

        {/* Ongoing Orders */}
        <div className="flex items-center justify-between p-6 transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl">
          <div>
            <Link
              to=""
              className="p-3 text-blue-600 bg-blue-100 rounded-xl text-2xl border border-gray-700 "
            >
              Add Products
            </Link>
          </div>
          <p className="text-3xl font-bold text-yellow-600">
            {ongoingOrdersCount}
          </p>
          <div>
            <Link
              to=""
              className="p-3 text-blue-600 bg-blue-100 rounded-xl text-2xl border border-gray-700 "
            >
              Add Products
            </Link>
          </div>
        </div>

        {/* Completed Orders */}
        <div className="flex items-center justify-between p-6 transition duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl">
          <div>
            <Link
              to=""
              className="p-3 text-blue-600 bg-blue-100 rounded-xl text-2xl border border-gray-700 "
            >
              Add Products
            </Link>
          </div>
          <p className="text-3xl font-bold text-green-600">
            {completedOrdersCount}
          </p>
          <div>
            <Link
              to=""
              className="p-3 text-blue-600 bg-blue-100 rounded-xl text-2xl border border-gray-700 "
            >
              Add Products
            </Link>
          </div>
        </div>
      </div>

      {/* Order Status Chart */}
      <div className="p-6 mt-12 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          Order Status Overview
        </h2>
        <Pie data={orderData} options={orderOptions} />
      </div>
    </div>
  );
};

export default AdminDashboard;
