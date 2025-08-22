import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, UserCheck, Shield } from "lucide-react";

interface LoginFormProps {
  onLogin: (email: string, password: string, role: string) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      onLogin(email, password, role);
      setIsLoading(false);
    }, 1000);
  };

  const roles = [
    { value: "admin", label: "Administrator" },
    { value: "doctor", label: "Doctor" },
    { value: "pharmacist", label: "Pharmacist" },
    { value: "nurse", label: "Nurse" },
    { value: "receptionist", label: "Receptionist" },
    { value: "lab_tech", label: "Lab Technician" },
    { value: "accountant", label: "Accountant" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light via-background to-accent p-4">
      <Card className="w-full max-w-md shadow-floating">
        <CardHeader className="text-center pb-2">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <UserCheck className="h-8 w-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold text-foreground">HospitalCare HMS</CardTitle>
          <p className="text-muted-foreground">Sign in to your account</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="doctor@hospital.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select value={role} onValueChange={setRole} required>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((roleOption) => (
                    <SelectItem key={roleOption.value} value={roleOption.value}>
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        {roleOption.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button 
              type="submit" 
              className="w-full h-11 bg-gradient-to-r from-primary to-primary-dark hover:shadow-medical transition-all duration-300"
              disabled={isLoading || !email || !password || !role}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Demo credentials: Use any email/password with a role
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;