import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  UserCheck, 
  Calendar, 
  Pill, 
  DollarSign,
  TrendingUp,
  Clock,
  AlertTriangle
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  trendUp?: boolean;
  className?: string;
}

const StatCard = ({ title, value, icon, trend, trendUp, className }: StatCardProps) => (
  <Card className={`${className} shadow-card hover:shadow-floating transition-shadow duration-300`}>
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
          {trend && (
            <div className={`flex items-center gap-1 mt-2 text-sm ${
              trendUp ? 'text-success' : 'text-destructive'
            }`}>
              <TrendingUp className={`h-3 w-3 ${!trendUp && 'rotate-180'}`} />
              <span>{trend}</span>
            </div>
          )}
        </div>
        <div className="p-3 rounded-xl bg-primary/10">
          {icon}
        </div>
      </div>
    </CardContent>
  </Card>
);

const DashboardStats = () => {
  const stats = [
    {
      title: "Patients Today",
      value: "156",
      icon: <Users className="h-6 w-6 text-primary" />,
      trend: "+12% from yesterday",
      trendUp: true,
      className: "border-l-4 border-l-primary"
    },
    {
      title: "Doctors on Duty",
      value: "24",
      icon: <UserCheck className="h-6 w-6 text-secondary" />,
      className: "border-l-4 border-l-secondary"
    },
    {
      title: "Appointments",
      value: "89",
      icon: <Calendar className="h-6 w-6 text-warning" />,
      trend: "32 pending",
      className: "border-l-4 border-l-warning"
    },
    {
      title: "Medicine Stock",
      value: "1,245",
      icon: <Pill className="h-6 w-6 text-success" />,
      trend: "15 expiring soon",
      className: "border-l-4 border-l-success"
    },
    {
      title: "Today's Revenue",
      value: "$12,450",
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      trend: "+8.2% from yesterday",
      trendUp: true,
      className: "border-l-4 border-l-primary"
    },
    {
      title: "Avg Wait Time",
      value: "18 min",
      icon: <Clock className="h-6 w-6 text-muted-foreground" />,
      trend: "-3 min from avg",
      trendUp: true,
      className: "border-l-4 border-l-muted"
    },
    {
      title: "Critical Alerts",
      value: "3",
      icon: <AlertTriangle className="h-6 w-6 text-emergency" />,
      trend: "Requires attention",
      className: "border-l-4 border-l-emergency"
    },
    {
      title: "Bed Occupancy",
      value: "84%",
      icon: <Users className="h-6 w-6 text-warning" />,
      trend: "168/200 beds",
      className: "border-l-4 border-l-warning"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats;