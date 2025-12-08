import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../contexts/AppContext";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { AlertCircle } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const { login, isLoading, error, setError } = useApp();
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [step, setStep] = useState<"role" | "form">("role");

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
    setStep("form");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      // For demo purposes, signup just logs them in with a new account
      await login(formData.email, formData.password, selectedRole);
      const dashboardMap: Record<string, string> = {
        provider: "/provider",
        beneficiary: "/beneficiary",
        donor: "/donor",
      };
      navigate(dashboardMap[selectedRole]);
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">DirectAid</h1>
          <p className="text-gray-600">Create your account</p>
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
              Choose your role:
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
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <Input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <Input
                type="password"
                name="password"
                placeholder="At least 6 characters"
                value={formData.password}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Create Account"}
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
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Login
            </button>
          </p>
        </div>
      </Card>
    </div>
  );
}
