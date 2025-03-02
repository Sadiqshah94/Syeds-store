import { useEffect } from "react";
import { useGetProfileQuery } from "@/store/services/dashboard/profile";
import { useGetAllProductsQuery } from "@/store/services/dashboard/products";
import { useGetAllCategoriesQuery } from "@/store/services/dashboard/categories";

import AppCard from "@/components/ui/core/AppCard";
import SkeletonLoader from "@/components/ui/core/loaders/LoaderSkeletons";
import StatisticsData from "@/constants/Statistics";
import { Card } from "@/modules/auth";

const Dashboard = () => {
  const token = localStorage.getItem("access_token");

  const {
    data: ProfileData,
    error,
    isLoading: ProfileLoading,
    refetch,
  } = useGetProfileQuery(undefined, { skip: !token });

  const { data: ProductData, isLoading: ProductLoading } = useGetAllProductsQuery();
  const { data: CategoryData } = useGetAllCategoriesQuery();

  useEffect(() => {
    if (token) {
      refetch();
    }
  }, [token, refetch]);

  if (error) return <p>Error fetching profile</p>;

  const CountData = {
    products: ProductData?.length,
    categories: CategoryData?.length,
    users: 30,
    profit: 190000,
  };

  return (
    <>
      {ProfileLoading ? (
        <SkeletonLoader variant="rectangle" height="20px" width="50%" />
      ) : (
        <h1 className="text-md font-semiBold text-gray-800">
          <i className="fas fa-hand-wave text-md mr-2"></i> Hi, Welcome to{" "}
          <span className="font-bold">{ProfileData?.name}!</span> 👋
        </h1>
      )}

      <div className="my-6 flex gap-3">
        {ProductLoading ? (
          StatisticsData.length > 0 ? (
            StatisticsData.map((_, index) => (
              <Card
                key={index}
                className="flex-1 max-w-sm transition-all duration-300 ease-in-out transform hover:scale-300"
              >
                <SkeletonLoader variant="rectangle" height="150px" width="100%" />
              </Card>
            ))
          ) : (
            <p>No statistics data available.</p>
          )
        ) : (
          StatisticsData.map((data) => (
            <AppCard
              key={data.key}
              counters={CountData[data.key]}
              icon={data.icon}
              description={data.description}
              title={data.title}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Dashboard;
