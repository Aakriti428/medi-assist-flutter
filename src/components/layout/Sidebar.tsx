import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  Calendar, 
  Pill, 
  FileText, 
  CreditCard, 
  Microscope,
  UsersRound,
  BarChart3,
  ChevronLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: string;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = {
  admin: [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "patients", label: "Patients", icon: Users },
    { id: "doctors", label: "Doctors", icon: UserCheck },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "pharmacy", label: "Pharmacy", icon: Pill },
    { id: "prescriptions", label: "Prescriptions", icon: FileText },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "laboratory", label: "Laboratory", icon: Microscope },
    { id: "staff", label: "Staff", icon: UsersRound },
    { id: "reports", label: "Reports", icon: BarChart3 },
  ],
  doctor: [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "patients", label: "My Patients", icon: Users },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "prescriptions", label: "Prescriptions", icon: FileText },
    { id: "laboratory", label: "Lab Reports", icon: Microscope },
  ],
  pharmacist: [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "pharmacy", label: "Medicine Stock", icon: Pill },
    { id: "prescriptions", label: "Prescriptions", icon: FileText },
    { id: "billing", label: "Sales", icon: CreditCard },
  ],
  nurse: [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "patients", label: "Patients", icon: Users },
    { id: "appointments", label: "Appointments", icon: Calendar },
  ],
  receptionist: [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "patients", label: "Patients", icon: Users },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "billing", label: "Billing", icon: CreditCard },
  ],
};

const Sidebar = ({ isOpen, onClose, userRole, activeTab, onTabChange }: SidebarProps) => {
  const roleMenuItems = menuItems[userRole as keyof typeof menuItems] || menuItems.admin;

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-full bg-card border-r border-border z-50 transition-transform duration-300 ease-in-out md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "w-64"
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">H+</span>
              </div>
              <div>
                <h2 className="font-semibold text-foreground">HospitalCare</h2>
                <p className="text-xs text-muted-foreground">HMS</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="md:hidden"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {roleMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  onClick={() => {
                    onTabChange(item.id);
                    onClose();
                  }}
                  className={cn(
                    "w-full justify-start gap-3 h-11",
                    isActive && "bg-gradient-to-r from-primary to-primary-dark text-primary-foreground shadow-medical"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              System Online
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;