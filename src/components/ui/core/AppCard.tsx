import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../card";


// type StatisticsKey = "products" | "categories" | "users";
interface CardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  counters?: number; 
  key: string;
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
      className={` relative flex-1 max-w-sm  transition-all duration-300 ease-in-out  transform hover:scale-300`}
    >
      <CardHeader className=" flex gap-2  pb-2">
        {icon && (
          <span role="img" aria-label="icon" className="absolute bottom-0 right-0 text-4xl flex justify-between">
            {icon} 
          </span>
        )}
        <h1 className="text-2xl font-semibold">{counters}</h1>
        <div>
          <CardTitle className="text-lg leading-0 font-semibold  ">{title}</CardTitle>
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
