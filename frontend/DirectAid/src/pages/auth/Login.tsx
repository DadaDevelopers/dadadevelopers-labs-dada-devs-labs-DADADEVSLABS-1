import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../contexts/AppContext";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { AlertCircle, LogIn } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const { login, isLoading, error, setError } = useApp();
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState<"role" | "credentials">("role");

  const roles = [
    {
      id: "provider",
      label: "Provider",
      description: "Upload invoices & verify services",
    },
    {
      id: "beneficiary",
      label: "Beneficiary",
      description: "Create campaigns & receive aid",
    },
    {
      id: "donor",
      label: "Donor",
      description: "Fund campaigns & track impact",
    },
  ];

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    setStep("credentials");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);
      await login(email, password, selectedRole);
      // Navigate to appropriate dashboard
      const dashboardMap: Record<string, string> = {
        provider: "/provider",
        beneficiary: "/beneficiary",
        donor: "/donor",
      };
      navigate(dashboardMap[selectedRole]);
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const handleDemoLogin = async (roleId: string) => {
    try {
      setError(null);
      await login("demo@example.com", "demo", roleId);
      // Navigate to appropriate dashboard
      const dashboardMap: Record<string, string> = {
        provider: "/provider",
        beneficiary: "/beneficiary",
        donor: "/donor",
      };
      navigate(dashboardMap[roleId]);
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">DirectAid</h1>
          <p className="text-gray-600">Login to your account</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded flex gap-2 items-start">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {step === "role" ? (
          <div className="space-y-3 mb-6">
            <p className="text-sm font-medium text-gray-700 mb-4">
              Select your role:
            </p>
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => handleRoleSelect(role.id)}
                className="w-full p-4 border border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition text-left"
              >
                <div className="font-medium text-gray-900">{role.label}</div>
                <div className="text-sm text-gray-600">{role.description}</div>
              </button>
            ))}
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                type="email"
                placeholder="demo@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <Input
                type="password"
                placeholder="demo"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => handleDemoLogin(selectedRole)}
              disabled={isLoading}
            >
              Quick Demo Login
            </Button>

            <button
              type="button"
              onClick={() => setStep("role")}
              className="w-full text-center text-indigo-600 hover:text-indigo-700 text-sm font-medium"
              disabled={isLoading}
            >
              Change Role
            </button>
          </form>
        )}

        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Sign up
            </button>
          </p>
        </div>
      </Card>
    </div>
  );
}
