import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  MapPin,
  Clock,
  User,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const VolunteerDashboard = () => {
  const [aidRequests, setAidRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedUrgency, setSelectedUrgency] = useState("all");
  const [acceptedRequests, setAcceptedRequests] = useState(new Set());

  // Mock data for demonstration - replace with actual API call
  useEffect(() => {
    const mockRequests = [
      {
        _id: "1",
        type: "Medical",
        details:
          "Urgent need for insulin and medical supplies for diabetic patients",
        location: { coordinates: [40.7128, -74.006], address: "New York, NY" },
        urgency: "high",
        createdAt: "2025-06-12T10:30:00Z",
        requester: "Dr. Sarah Johnson",
        contact: "+1-555-0123",
      },
      {
        _id: "2",
        type: "Food",
        details:
          "Emergency food supplies needed for 50 families affected by flooding",
        location: {
          coordinates: [34.0522, -118.2437],
          address: "Los Angeles, CA",
        },
        urgency: "medium",
        createdAt: "2025-06-12T08:15:00Z",
        requester: "Community Center",
        contact: "+1-555-0456",
      },
      {
        _id: "3",
        type: "Shelter",
        details: "Temporary housing needed for displaced families after fire",
        location: { coordinates: [41.8781, -87.6298], address: "Chicago, IL" },
        urgency: "high",
        createdAt: "2025-06-12T06:45:00Z",
        requester: "Red Cross Volunteer",
        contact: "+1-555-0789",
      },
      {
        _id: "4",
        type: "Transportation",
        details: "Vehicle needed to transport elderly residents to safety",
        location: { coordinates: [29.7604, -95.3698], address: "Houston, TX" },
        urgency: "medium",
        createdAt: "2025-06-11T20:30:00Z",
        requester: "Local Fire Department",
        contact: "+1-555-0321",
      },
      {
        _id: "5",
        type: "Supplies",
        details: "Blankets, water, and basic supplies for storm victims",
        location: { coordinates: [25.7617, -80.1918], address: "Miami, FL" },
        urgency: "low",
        createdAt: "2025-06-11T15:20:00Z",
        requester: "Community Volunteer",
        contact: "+1-555-0654",
      },
    ];

    setAidRequests(mockRequests);
    setFilteredRequests(mockRequests);
  }, []);

  // Filter requests based on search and filters
  useEffect(() => {
    let filtered = aidRequests;

    if (searchTerm) {
      filtered = filtered.filter(
        (request) =>
          request.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
          request.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
          request.location.address
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType !== "all") {
      filtered = filtered.filter((request) => request.type === selectedType);
    }

    if (selectedUrgency !== "all") {
      filtered = filtered.filter(
        (request) => request.urgency === selectedUrgency
      );
    }

    setFilteredRequests(filtered);
  }, [searchTerm, selectedType, selectedUrgency, aidRequests]);

  const handleAccept = async (id) => {
    try {
      setAcceptedRequests((prev) => new Set([...prev, id]));
      console.log(`Request ${id} accepted`);
      // Here you would make an API call to update the request status
    } catch (error) {
      console.error("Error accepting the request:", error);
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "high":
        return "text-red-600 bg-red-50";
      case "medium":
        return "text-yellow-600 bg-yellow-50";
      case "low":
        return "text-green-600 bg-green-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "Medical":
        return "🏥";
      case "Food":
        return "🍽️";
      case "Shelter":
        return "🏠";
      case "Transportation":
        return "🚗";
      case "Supplies":
        return "📦";
      default:
        return "❓";
    }
  };

  const formatTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Volunteer Dashboard
              </h1>
              <p className="text-gray-600 mt-1">
                Help those in need by responding to aid requests
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-600 font-medium">
                  {filteredRequests.length} Active Requests
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search requests by type, location, or description..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Type Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                className="pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="all">All Types</option>
                <option value="Medical">Medical</option>
                <option value="Food">Food</option>
                <option value="Shelter">Shelter</option>
                <option value="Transportation">Transportation</option>
                <option value="Supplies">Supplies</option>
              </select>
            </div>

            {/* Urgency Filter */}
            <div className="relative">
              <AlertCircle className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                className="pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                value={selectedUrgency}
                onChange={(e) => setSelectedUrgency(e.target.value)}
              >
                <option value="all">All Urgencies</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Request Cards */}
        <div className="grid gap-6">
          {filteredRequests.length > 0 ? (
            filteredRequests.map((request) => (
              <div
                key={request._id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                          {getTypeIcon(request.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-xl font-semibold text-gray-800">
                              {request.type} Request
                            </h3>
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${getUrgencyColor(
                                request.urgency
                              )}`}
                            >
                              {request.urgency.toUpperCase()}
                            </span>
                          </div>
                          <div className="flex items-center text-gray-500 text-sm mt-1">
                            <Clock className="h-4 w-4 mr-1" />
                            {formatTimeAgo(request.createdAt)}
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {request.details}
                      </p>

                      {/* Location and Contact */}
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                          <span>{request.location.address}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <User className="h-5 w-5 mr-2 text-gray-400" />
                          <span>{request.requester}</span>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="text-sm text-gray-500">
                        Contact: {request.contact}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="ml-6">
                      {acceptedRequests.has(request._id) ? (
                        <div className="flex items-center space-x-2 bg-green-50 text-green-600 px-6 py-3 rounded-xl">
                          <CheckCircle className="h-5 w-5" />
                          <span className="font-medium">Accepted</span>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleAccept(request._id)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200 flex items-center space-x-2"
                        >
                          <span>Accept Request</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No requests found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filters to see more results.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
