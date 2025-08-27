import { useState } from "react";
import { ArrowLeft, Users, MessageSquare, Calendar, TrendingUp, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";

interface NGODashboardProps {
  onBack: () => void;
}

const NGODashboard = ({ onBack }: NGODashboardProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const mentorshipRequests = [
    {
      id: 1,
      name: "Sarah Akello",
      age: 22,
      location: "Gulu",
      interest: "Agricultural Business",
      status: "pending",
      requestedAt: "2 days ago"
    },
    {
      id: 2,
      name: "John Otim",
      age: 24,
      location: "Arua",
      interest: "Digital Marketing",
      status: "matched",
      requestedAt: "1 week ago"
    },
    {
      id: 3,
      name: "Grace Lamwaka",
      age: 20,
      location: "Lira",
      interest: "Fashion Design",
      status: "pending",
      requestedAt: "3 days ago"
    }
  ];

  const programs = [
    {
      id: 1,
      title: "Youth Agribusiness Accelerator",
      participants: 45,
      startDate: "March 1, 2024",
      duration: "6 months",
      status: "active"
    },
    {
      id: 2,
      title: "Digital Skills for Rural Youth",
      participants: 78,
      startDate: "February 15, 2024",
      duration: "3 months",
      status: "active"
    },
    {
      id: 3,
      title: "Women in Business Leadership",
      participants: 32,
      startDate: "April 1, 2024",
      duration: "4 months",
      status: "upcoming"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-amber-100 text-amber-800";
      case "matched": return "bg-green-100 text-green-800";
      case "active": return "bg-blue-100 text-blue-800";
      case "upcoming": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" onClick={onBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-foreground">NGO Dashboard</h1>
              <p className="text-muted-foreground">Support and mentor the next generation</p>
            </div>
          </div>
          <Button variant="accent">
            <Plus className="h-4 w-4 mr-2" />
            New Program
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-gradient-to-r from-primary to-primary-glow border-0">
            <CardContent className="p-4">
              <div className="text-white">
                <p className="text-sm opacity-90">Active Mentees</p>
                <p className="text-2xl font-bold">156</p>
                <p className="text-xs opacity-75">+12 this month</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-accent to-accent-light border-0">
            <CardContent className="p-4">
              <div className="text-white">
                <p className="text-sm opacity-90">Running Programs</p>
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs opacity-75">2 starting soon</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-trust to-blue-500 border-0">
            <CardContent className="p-4">
              <div className="text-white">
                <p className="text-sm opacity-90">Success Rate</p>
                <p className="text-2xl font-bold">87%</p>
                <p className="text-xs opacity-75">Program completion</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-green-500 to-green-600 border-0">
            <CardContent className="p-4">
              <div className="text-white">
                <p className="text-sm opacity-90">Impact Score</p>
                <p className="text-2xl font-bold">4.8</p>
                <p className="text-xs opacity-75">Based on feedback</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="mentorship" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="mentorship" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Mentorship Requests</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search mentees..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mentorshipRequests.map((request) => (
                <Card key={request.id} className="hover:shadow-medium transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{request.name}</CardTitle>
                        <CardDescription>
                          {request.age} years old • {request.location}
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(request.status)}>
                        {request.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Interest Area</p>
                        <p className="font-medium">{request.interest}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Requested {request.requestedAt}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          Message
                        </Button>
                        {request.status === "pending" && (
                          <Button size="sm" variant="outline" className="flex-1">
                            Accept
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="programs" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Training Programs</h3>
              <Button variant="accent">
                <Plus className="h-4 w-4 mr-2" />
                Create Program
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {programs.map((program) => (
                <Card key={program.id} className="hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{program.title}</CardTitle>
                        <CardDescription>
                          {program.duration} • Starting {program.startDate}
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(program.status)}>
                        {program.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Participants</span>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1 text-primary" />
                          <span className="font-medium">{program.participants}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          View Details
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          Manage
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                    Program Success Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Completion Rate</span>
                      <span className="font-bold text-green-600">87%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Job Placement Rate</span>
                      <span className="font-bold text-green-600">72%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Avg. Income Increase</span>
                      <span className="font-bold text-green-600">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Women Participation</span>
                      <span className="font-bold text-accent">68%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Regional Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {["Gulu", "Arua", "Lira", "Kitgum"].map((region) => (
                      <div key={region} className="flex justify-between items-center">
                        <span className="text-sm">{region} District</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${Math.random() * 80 + 20}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {Math.floor(Math.random() * 50 + 10)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default NGODashboard;