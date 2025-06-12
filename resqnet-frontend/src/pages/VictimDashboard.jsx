import React, { useState, useEffect } from "react";
import {
  Plus,
  MapPin,
  Clock,
  AlertCircle,
  CheckCircle,
  Eye,
  Edit2,
  Trash2,
  X,
} from "lucide-react";

const VictimDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [showNewRequestForm, setShowNewRequestForm] = useState(false);
  const [editingRequest, setEditingRequest] = useState(null);
  const [newRequest, setNewRequest] = useState({
    type: "Medical",
    details: "",
    location: "",
    urgency: "medium",
    contact: "",
  });

  // Mock data for demonstration - replace with actual API call
  useEffect(() => {
    const mockRequests = [
      {
        _id: "1",
        type: "Medical",
        details: "Need insulin and medical supplies for diabetic family member",
        location: "123 Main St, Springfield, IL",
        urgency: "high",
        status: "pending",
        createdAt: "2025-06-12T10:30:00Z",
        contact: "+1-555-0123",
        responses: 2,
      },
      {
        _id: "2",
        type: "Food",
        details: "Family of 4 needs emergency food supplies after house fire",
        location: "456 Oak Ave, Springfield, IL",
        urgency: "medium",
        status: "accepted",
        createdAt: "2025-06-11T14:20:00Z",
        contact: "+1-555-0123",
        responses: 1,
        helper: "Community Food Bank",
      },
      {
        _id: "3",
        type: "Shelter",
        details:
          "Temporary housing needed for elderly couple after flood damage",
        location: "789 Pine St, Springfield, IL",
        urgency: "high",
        status: "completed",
        createdAt: "2025-06-10T09:15:00Z",
        contact: "+1-555-0123",
        responses: 3,
        helper: "Red Cross Shelter",
      },
    ];

    setRequests(mockRequests);
  }, []);

  const handleSubmitRequest = async () => {
    if (!newRequest.details || !newRequest.location || !newRequest.contact) {
      alert("Please fill in all required fields");
      return;
    }

    const requestData = {
      _id: Date.now().toString(),
      ...newRequest,
      status: "pending",
      createdAt: new Date().toISOString(),
      responses: 0,
    };

    if (editingRequest) {
      setRequests((prev) =>
        prev.map((req) =>
          req._id === editingRequest._id
            ? { ...requestData, _id: editingRequest._id }
            : req
        )
      );
      setEditingRequest(null);
    } else {
      setRequests((prev) => [requestData, ...prev]);
    }

    setNewRequest({
      type: "Medical",
      details: "",
      location: "",
      urgency: "medium",
      contact: "",
    });
    setShowNewRequestForm(false);
  };

  const handleEditRequest = (request) => {
    setNewRequest({
      type: request.type,
      details: request.details,
      location: request.location,
      urgency: request.urgency,
      contact: request.contact,
    });
    setEditingRequest(request);
    setShowNewRequestForm(true);
  };

  const handleDeleteRequest = (id) => {
    if (window.confirm("Are you sure you want to delete this request?")) {
      setRequests((prev) => prev.filter((req) => req._id !== id));
    }
  };

  const handleCancelForm = () => {
    setShowNewRequestForm(false);
    setEditingRequest(null);
    setNewRequest({
      type: "Medical",
      details: "",
      location: "",
      urgency: "medium",
      contact: "",
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "text-yellow-600 bg-yellow-50";
      case "accepted":
        return "text-blue-600 bg-blue-50";
      case "completed":
        return "text-green-600 bg-green-50";
      default:
        return "text-gray-600 bg-gray-50";
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

  const getStatusStats = () => {
    const pending = requests.filter((r) => r.status === "pending").length;
    const accepted = requests.filter((r) => r.status === "accepted").length;
    const completed = requests.filter((r) => r.status === "completed").length;
    return { pending, accepted, completed };
  };

  const stats = getStatusStats();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                My Aid Requests
              </h1>
              <p className="text-gray-600 mt-1">
                Request help and track your aid requests
              </p>
            </div>
            <button
              onClick={() => setShowNewRequestForm(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>New Request</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Requests</p>
                <p className="text-2xl font-bold text-gray-800">
                  {requests.length}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {stats.pending}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Accepted</p>
                <p className="text-2xl font-bold text-blue-600">
                  {stats.accepted}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Completed</p>
                <p className="text-2xl font-bold text-green-600">
                  {stats.completed}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* New Request Form */}
        {showNewRequestForm && (
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {editingRequest ? "Edit Request" : "Submit New Aid Request"}
              </h2>
              <button
                onClick={handleCancelForm}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Request Type
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={newRequest.type}
                    onChange={(e) =>
                      setNewRequest({ ...newRequest, type: e.target.value })
                    }
                  >
                    <option value="Medical">Medical</option>
                    <option value="Food">Food</option>
                    <option value="Shelter">Shelter</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Supplies">Supplies</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={newRequest.urgency}
                    onChange={(e) =>
                      setNewRequest({ ...newRequest, urgency: e.target.value })
                    }
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your address or location"
                  value={newRequest.location}
                  onChange={(e) =>
                    setNewRequest({ ...newRequest, location: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Information
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Phone number or email"
                  value={newRequest.contact}
                  onChange={(e) =>
                    setNewRequest({ ...newRequest, contact: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Details
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="4"
                  placeholder="Please describe your specific needs and situation..."
                  value={newRequest.details}
                  onChange={(e) =>
                    setNewRequest({ ...newRequest, details: e.target.value })
                  }
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleCancelForm}
                  className="px-6 py-3 border border-gray-200 text-gray-600 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmitRequest}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors"
                >
                  {editingRequest ? "Update Request" : "Submit Request"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Request Cards */}
        <div className="grid gap-6">
          {requests.length > 0 ? (
            requests.map((request) => (
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
                          <div className="flex items-center space-x-3 flex-wrap">
                            <h3 className="text-xl font-semibold text-gray-800">
                              {request.type} Request
                            </h3>
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                                request.status
                              )}`}
                            >
                              {request.status.toUpperCase()}
                            </span>
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

                      {/* Location and Status */}
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                          <span>{request.location}</span>
                        </div>
                        <div className="text-gray-600">
                          <span className="font-medium">
                            {request.responses}
                          </span>{" "}
                          volunteer response{request.responses !== 1 ? "s" : ""}
                        </div>
                      </div>

                      {/* Helper Info */}
                      {request.helper && (
                        <div className="bg-green-50 p-3 rounded-lg mb-4">
                          <p className="text-green-800 text-sm">
                            <span className="font-medium">Helped by:</span>{" "}
                            {request.helper}
                          </p>
                        </div>
                      )}

                      {/* Contact Info */}
                      <div className="text-sm text-gray-500">
                        Contact: {request.contact}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="ml-6 flex space-x-2">
                      {request.status === "pending" && (
                        <>
                          <button
                            onClick={() => handleEditRequest(request)}
                            className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit Request"
                          >
                            <Edit2 className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteRequest(request._id)}
                            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete Request"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                No requests yet
              </h3>
              <p className="text-gray-600 mb-6">
                Create your first aid request to get started.
              </p>
              <button
                onClick={() => setShowNewRequestForm(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                Create Request
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VictimDashboard;
