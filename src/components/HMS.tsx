import { useState } from "react";
import LoginForm from "./auth/LoginForm";
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Dashboard from "./dashboard/Dashboard";
import { useToast } from "@/hooks/use-toast";

const HMS = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [userName, setUserName] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const { toast } = useToast();

  const handleLogin = (email: string, password: string, role: string) => {
    // Simulate authentication
    setIsAuthenticated(true);
    setUserRole(role);
    setUserName(email.split("@")[0]);
    
    toast({
      title: "Login Successful",
      description: `Welcome back! You are logged in as ${role}.`,
    });
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole("");
    setUserName("");
    setActiveTab("dashboard");
    setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "patients":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Patient Management</h2>
            <div className="bg-card rounded-lg p-6 shadow-card">
              <p className="text-muted-foreground">Patient management module will be implemented here.</p>
              <p className="text-sm text-muted-foreground mt-2">Features: Add/Edit patients, medical history, OPD/IPD tracking</p>
            </div>
          </div>
        );
      case "doctors":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Doctor Management</h2>
            <div className="bg-card rounded-lg p-6 shadow-card">
              <p className="text-muted-foreground">Doctor management module will be implemented here.</p>
              <p className="text-sm text-muted-foreground mt-2">Features: Doctor profiles, specializations, schedules, availability</p>
            </div>
          </div>
        );
      case "appointments":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Appointment Scheduling</h2>
            <div className="bg-card rounded-lg p-6 shadow-card">
              <p className="text-muted-foreground">Appointment scheduling module will be implemented here.</p>
              <p className="text-sm text-muted-foreground mt-2">Features: Calendar view, booking/canceling, patient-doctor linking</p>
            </div>
          </div>
        );
      case "pharmacy":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Pharmacy & Medicine Stock</h2>
            <div className="bg-card rounded-lg p-6 shadow-card">
              <p className="text-muted-foreground">Pharmacy management module will be implemented here.</p>
              <p className="text-sm text-muted-foreground mt-2">Features: Stock management, batch tracking, expiry alerts, vendor management</p>
            </div>
          </div>
        );
      case "prescriptions":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Prescriptions</h2>
            <div className="bg-card rounded-lg p-6 shadow-card">
              <p className="text-muted-foreground">Prescription management module will be implemented here.</p>
              <p className="text-sm text-muted-foreground mt-2">Features: Create prescriptions, medicine selection, dosage instructions</p>
            </div>
          </div>
        );
      case "billing":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Billing & Invoicing</h2>
            <div className="bg-card rounded-lg p-6 shadow-card">
              <p className="text-muted-foreground">Billing management module will be implemented here.</p>
              <p className="text-sm text-muted-foreground mt-2">Features: Auto-generate bills, payment options, PDF invoices</p>
            </div>
          </div>
        );
      case "laboratory":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Laboratory & Diagnostics</h2>
            <div className="bg-card rounded-lg p-6 shadow-card">
              <p className="text-muted-foreground">Laboratory management module will be implemented here.</p>
              <p className="text-sm text-muted-foreground mt-2">Features: Order tests, upload results, report notifications</p>
            </div>
          </div>
        );
      case "staff":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Staff Management</h2>
            <div className="bg-card rounded-lg p-6 shadow-card">
              <p className="text-muted-foreground">Staff management module will be implemented here.</p>
              <p className="text-sm text-muted-foreground mt-2">Features: Employee profiles, attendance, shifts, payroll</p>
            </div>
          </div>
        );
      case "reports":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Reports & Analytics</h2>
            <div className="bg-card rounded-lg p-6 shadow-card">
              <p className="text-muted-foreground">Reports and analytics module will be implemented here.</p>
              <p className="text-sm text-muted-foreground mt-2">Features: Patient reports, revenue analytics, medicine reports, export to PDF/Excel</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen bg-background">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={closeSidebar}
        userRole={userRole}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Main Content */}
      <div className="md:ml-64 flex flex-col h-full">
        {/* Navbar */}
        <Navbar
          onMenuClick={toggleSidebar}
          userRole={userRole}
          userName={userName}
        />

        {/* Content */}
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default HMS;