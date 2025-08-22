import DashboardStats from "./DashboardStats";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  Calendar, 
  AlertCircle, 
  TrendingUp,
  Activity,
  Users,
  Pill
} from "lucide-react";

const Dashboard = () => {
  const upcomingAppointments = [
    { id: 1, patient: "John Doe", doctor: "Dr. Smith", time: "09:00 AM", type: "Consultation" },
    { id: 2, patient: "Jane Wilson", doctor: "Dr. Johnson", time: "10:30 AM", type: "Follow-up" },
    { id: 3, patient: "Mike Brown", doctor: "Dr. Davis", time: "11:15 AM", type: "Surgery" },
  ];

  const criticalAlerts = [
    { id: 1, message: "Medicine 'Amoxicillin' stock below 10 units", type: "warning" },
    { id: 2, message: "Patient John Doe vitals critical - Room 301", type: "emergency" },
    { id: 3, message: "Equipment maintenance due for CT Scanner", type: "info" },
  ];

  const recentActivities = [
    { id: 1, action: "New patient registered", user: "Dr. Smith", time: "5 min ago" },
    { id: 2, action: "Medicine stock updated", user: "Pharmacy", time: "12 min ago" },
    { id: 3, action: "Appointment scheduled", user: "Reception", time: "25 min ago" },
    { id: 4, action: "Lab report uploaded", user: "Lab Tech", time: "1 hour ago" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what's happening at your hospital today.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Last updated: 2 minutes ago</span>
        </div>
      </div>

      {/* Stats Grid */}
      <DashboardStats />

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Appointments */}
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              Upcoming Appointments
            </CardTitle>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingAppointments.map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                <div>
                  <p className="font-medium text-sm text-foreground">{appointment.patient}</p>
                  <p className="text-xs text-muted-foreground">{appointment.doctor}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-primary">{appointment.time}</p>
                  <Badge variant="secondary" className="text-xs">{appointment.type}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Critical Alerts */}
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-emergency" />
              Critical Alerts
            </CardTitle>
            <Badge variant="destructive" className="text-xs">
              {criticalAlerts.length}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-3">
            {criticalAlerts.map((alert) => (
              <div key={alert.id} className={`p-3 rounded-lg border-l-4 ${
                alert.type === 'emergency' ? 'border-l-emergency bg-emergency/5' :
                alert.type === 'warning' ? 'border-l-warning bg-warning/5' :
                'border-l-primary bg-primary/5'
              }`}>
                <p className="text-sm text-foreground">{alert.message}</p>
                <Button variant="ghost" size="sm" className="mt-2 h-6 px-2 text-xs">
                  Resolve
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Activity className="h-4 w-4 text-success" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-2">
                <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{activity.action}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-muted-foreground">{activity.user}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button className="h-16 flex-col bg-gradient-to-r from-primary to-primary-dark hover:shadow-medical">
              <Users className="h-5 w-5 mb-1" />
              <span>Add Patient</span>
            </Button>
            <Button variant="secondary" className="h-16 flex-col bg-gradient-to-r from-secondary to-secondary-light">
              <Calendar className="h-5 w-5 mb-1" />
              <span>Schedule Appointment</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col hover:bg-accent">
              <Pill className="h-5 w-5 mb-1" />
              <span>Manage Inventory</span>
            </Button>
            <Button variant="outline" className="h-16 flex-col hover:bg-accent">
              <TrendingUp className="h-5 w-5 mb-1" />
              <span>View Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;