import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../card";


type StatisticsKey = "products" | "categories" | "users";
interface CardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  counters?: number; 
  key: StatisticsKey;
}

const AppCard: React.FC<CardProps> = ({
  title,
  icon,
  children,
  counters,
}) => {
  console.log("All Data" , counters)
  return (
    <Card
      className={`flex-1 max-w-sm  transition-all duration-300 ease-in-out  transform hover:scale-300`}
    >
      <CardHeader className=" flex gap-2  pb-4">
        {icon && (
          <span role="img" aria-label="icon" className="text-4xl flex justify-between">
            {icon} 
            <h1 className="font-semibold">{counters}</h1>
          </span>
        )}
        <div>
          <CardTitle className="text-md font-semibold ">{title}</CardTitle>
          {/* <CardDescription className=" text-md opacity-80">
            {description}
          </CardDescription> */}
        </div>
      </CardHeader>
      <CardContent className="text-white">{children}</CardContent>
    </Card>
  );
};

export default AppCard;
