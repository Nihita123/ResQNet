import React, { useState, useEffect } from "react";
import {
  Building2,
  Users,
  MapPin,
  Phone,
  Mail,
  Globe,
  Calendar,
  Activity,
  AlertCircle,
  CheckCircle,
  Clock,
  Search,
  Filter,
  Plus,
  Edit,
  Eye,
  TrendingUp,
  Heart,
  Package,
  Truck,
  UserCheck,
  FileText,
  Settings,
  Bell,
  BarChart3,
} from "lucide-react";

const OrganizationDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [requests, setRequests] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Mock data initialization
  useEffect(() => {
    const mockRequests = [
      {
        id: 1,
        type: "Medical Emergency",
        location: "Mumbai, Bandra West",
        severity: "high",
        status: "active",
        timestamp: "2 hours ago",
        description: "Urgent medical supplies needed for flood victims",
        requiredItems: ["Medicines", "First Aid Kits", "Oxygen Cylinders"],
        assignedVolunteers: 3,
      },
      {
        id: 2,
        type: "Food Distribution",
        location: "Delhi, Rohini",
        severity: "medium",
        status: "in-progress",
        timestamp: "4 hours ago",
        description: "Food supplies for earthquake relief",
        requiredItems: ["Rice", "Dal", "Water Bottles"],
        assignedVolunteers: 5,
      },
      {
        id: 3,
        type: "Shelter Assistance",
        location: "Chennai, Anna Nagar",
        severity: "high",
        status: "completed",
        timestamp: "1 day ago",
        description: "Temporary shelter setup for cyclone victims",
        requiredItems: ["Tents", "Blankets", "Tarpaulins"],
        assignedVolunteers: 8,
      },
    ];

    const mockVolunteers = [
      {
        id: 1,
        name: "Rajesh Kumar",
        role: "Medical Aid",
        status: "available",
        experience: "5 years",
        location: "Mumbai",
      },
      {
        id: 2,
        name: "Priya Sharma",
        role: "Food Distribution",
        status: "busy",
        experience: "3 years",
        location: "Delhi",
      },
      {
        id: 3,
        name: "Amit Singh",
        role: "Logistics",
        status: "available",
        experience: "7 years",
        location: "Bangalore",
      },
      {
        id: 4,
        name: "Sneha Patel",
        role: "Rescue Operations",
        status: "busy",
        experience: "4 years",
        location: "Ahmedabad",
      },
    ];

    const mockNotifications = [
      {
        id: 1,
        type: "urgent",
        message: "New high-priority request in Mumbai",
        time: "10 min ago",
      },
      {
        id: 2,
        type: "info",
        message: "5 volunteers registered today",
        time: "1 hour ago",
      },
      {
        id: 3,
        type: "success",
        message: "Chennai relief operation completed",
        time: "3 hours ago",
      },
    ];

    setRequests(mockRequests);
    setVolunteers(mockVolunteers);
    setNotifications(mockNotifications);
  }, []);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "high":
        return "text-red-600 bg-red-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "low":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "text-red-600 bg-red-100";
      case "in-progress":
        return "text-blue-600 bg-blue-100";
      case "completed":
        return "text-green-600 bg-green-100";
      case "available":
        return "text-green-600 bg-green-100";
      case "busy":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const StatCard = ({ icon: Icon, title, value, change, color }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
          {change && (
            <p
              className={`text-sm mt-1 ${
                change.startsWith("+") ? "text-green-600" : "text-red-600"
              }`}
            >
              {change} from last week
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  const RequestCard = ({ request }) => (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-lg text-gray-900">
            {request.type}
          </h3>
          <div className="flex items-center text-gray-600 mt-1">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{request.location}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(
              request.severity
            )}`}
          >
            {request.severity.toUpperCase()}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
              request.status
            )}`}
          >
            {request.status.toUpperCase()}
          </span>
        </div>
      </div>

      <p className="text-gray-700 mb-4">{request.description}</p>

      <div className="mb-4">
        <p className="text-sm font-medium text-gray-900 mb-2">
          Required Items:
        </p>
        <div className="flex flex-wrap gap-2">
          {request.requiredItems.map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex items-center text-gray-600">
          <Users className="w-4 h-4 mr-1" />
          <span className="text-sm">
            {request.assignedVolunteers} volunteers assigned
          </span>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-sm shadow-md">
            View Details
          </button>
          <button className="px-4 py-2 border border-purple-300 text-purple-700 rounded-full hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 text-sm">
            Assign Volunteers
          </button>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <span className="text-xs text-gray-500">{request.timestamp}</span>
      </div>
    </div>
  );

  const VolunteerCard = ({ volunteer }) => (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold text-gray-900">{volunteer.name}</h4>
          <p className="text-sm text-gray-600">{volunteer.role}</p>
          <p className="text-xs text-gray-500 mt-1">{volunteer.location}</p>
        </div>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
            volunteer.status
          )}`}
        >
          {volunteer.status.toUpperCase()}
        </span>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-600">
          Experience: {volunteer.experience}
        </p>
        <div className="flex gap-2 mt-2">
          <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700">
            Contact
          </button>
          <button className="px-3 py-1 border border-gray-300 text-gray-700 rounded text-xs hover:bg-gray-50">
            Assign
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600 mr-4">
                ResQNet
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Organization Dashboard
                </h1>
                <p className="text-purple-600 font-medium">
                  Red Cross International
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:text-purple-600 transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg">
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: "overview", label: "Overview", icon: BarChart3 },
              { id: "requests", label: "Active Requests", icon: AlertCircle },
              { id: "volunteers", label: "Volunteers", icon: Users },
              { id: "resources", label: "Resources", icon: Package },
              { id: "reports", label: "Reports", icon: FileText },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-purple-600 hover:bg-purple-50 border border-gray-200 hover:border-purple-300"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                icon={AlertCircle}
                title="Active Requests"
                value="34"
                change="+12%"
                color="bg-gradient-to-br from-red-500 to-pink-600"
              />
              <StatCard
                icon={Users}
                title="Total Volunteers"
                value="1,250"
                change="+8%"
                color="bg-gradient-to-br from-blue-500 to-purple-600"
              />
              <StatCard
                icon={CheckCircle}
                title="Completed Requests"
                value="187"
                change="+23%"
                color="bg-gradient-to-br from-green-500 to-emerald-600"
              />
              <StatCard
                icon={TrendingUp}
                title="Response Rate"
                value="94%"
                change="+5%"
                color="bg-gradient-to-br from-purple-500 to-indigo-600"
              />
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Recent Notifications
                </h3>
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className="flex items-start gap-3 p-3 rounded-lg bg-gray-50"
                    >
                      <div
                        className={`p-1 rounded-full ${
                          notification.type === "urgent"
                            ? "bg-red-100"
                            : notification.type === "success"
                            ? "bg-green-100"
                            : "bg-blue-100"
                        }`}
                      >
                        {notification.type === "urgent" && (
                          <AlertCircle className="w-4 h-4 text-red-600" />
                        )}
                        {notification.type === "success" && (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        )}
                        {notification.type === "info" && (
                          <Activity className="w-4 h-4 text-blue-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                    <Plus className="w-6 h-6 text-blue-600 mb-2" />
                    <h4 className="font-medium text-gray-900">
                      Create Request
                    </h4>
                    <p className="text-sm text-gray-600">
                      Start new relief operation
                    </p>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                    <UserCheck className="w-6 h-6 text-green-600 mb-2" />
                    <h4 className="font-medium text-gray-900">Add Volunteer</h4>
                    <p className="text-sm text-gray-600">Register new helper</p>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                    <Package className="w-6 h-6 text-purple-600 mb-2" />
                    <h4 className="font-medium text-gray-900">
                      Manage Resources
                    </h4>
                    <p className="text-sm text-gray-600">Update inventory</p>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                    <FileText className="w-6 h-6 text-orange-600 mb-2" />
                    <h4 className="font-medium text-gray-900">
                      Generate Report
                    </h4>
                    <p className="text-sm text-gray-600">View analytics</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Requests Tab */}
        {activeTab === "requests" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Active Requests
              </h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                New Request
              </button>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search requests..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="grid gap-6">
              {requests.map((request) => (
                <RequestCard key={request.id} request={request} />
              ))}
            </div>
          </div>
        )}

        {/* Volunteers Tab */}
        {activeTab === "volunteers" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">Volunteers</h2>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Volunteer
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {volunteers.map((volunteer) => (
                <VolunteerCard key={volunteer.id} volunteer={volunteer} />
              ))}
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === "resources" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Resource Management
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center py-12">
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Resource Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Track and manage your organization's resources and inventory
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Setup Resource Tracking
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reports Tab */}
        {activeTab === "reports" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Reports & Analytics
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center py-12">
                <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Analytics Dashboard
                </h3>
                <p className="text-gray-600 mb-4">
                  Generate detailed reports on your organization's impact and
                  performance
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrganizationDashboard;
