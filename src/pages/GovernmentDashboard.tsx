import { useState } from "react";
import { ArrowLeft, BarChart3, Users, MapPin, TrendingUp, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Header from "@/components/Header";

interface GovernmentDashboardProps {
  onBack: () => void;
}

const GovernmentDashboard = ({ onBack }: GovernmentDashboardProps) => {
  const regionalData = [
    { district: "Gulu", youth: 1245, women: 68, pwd: 12, programs: 8, completion: 87 },
    { district: "Arua", youth: 892, women: 72, pwd: 8, programs: 6, completion: 91 },
    { district: "Lira", youth: 756, women: 64, pwd: 15, programs: 5, completion: 83 },
    { district: "Kitgum", youth: 543, women: 59, pwd: 7, programs: 4, completion: 89 }
  ];

  const keyMetrics = [
    { label: "Total Youth Enrolled", value: "3,436", change: "+12%", trend: "up" },
    { label: "Women Participation", value: "68%", change: "+5%", trend: "up" },
    { label: "PWD Inclusion", value: "12%", change: "+3%", trend: "up" },
    { label: "Program Success Rate", value: "87%", change: "+2%", trend: "up" }
  ];

  const impactReports = [
    {
      title: "Q1 2024 Youth Entrepreneurship Report",
      date: "March 31, 2024",
      type: "Quarterly",
      status: "Published"
    },
    {
      title: "Women in Business - Northern Uganda",
      date: "February 28, 2024",
      type: "Special Report",
      status: "Published"
    },
    {
      title: "PWD Inclusion Assessment",
      date: "March 15, 2024",
      type: "Assessment",
      status: "Draft"
    }
  ];

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
              <h1 className="text-2xl font-bold text-foreground">Government Dashboard</h1>
              <p className="text-muted-foreground">Monitor impact and track inclusion metrics</p>
            </div>
          </div>
          <Button variant="trust">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="bg-gradient-to-br from-card to-card/50 border border-border">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                    <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                    <div className="flex items-center mt-1">
                      <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                      <span className="text-xs text-green-500">{metric.change}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="regional">Regional Data</TabsTrigger>
            <TabsTrigger value="inclusion">Inclusion Metrics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-primary" />
                    Program Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Agriculture Programs</span>
                        <span className="text-sm font-medium">89%</span>
                      </div>
                      <Progress value={89} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Digital Skills Training</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Business Development</span>
                        <span className="text-sm font-medium">84%</span>
                      </div>
                      <Progress value={84} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm">Market Access Programs</span>
                        <span className="text-sm font-medium">87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Monthly Enrollment Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {["Jan", "Feb", "Mar", "Apr"].map((month, index) => (
                      <div key={month} className="flex justify-between items-center">
                        <span className="text-sm">{month} 2024</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${70 + index * 10}%` }}
                            ></div>
                          </div>
                          <span className="text-xs text-muted-foreground w-12">
                            {300 + index * 50}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="regional" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              {regionalData.map((district) => (
                <Card key={district.district} className="hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-primary" />
                        {district.district} District
                      </div>
                      <Badge variant="outline">{district.programs} programs</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-primary">{district.youth}</p>
                        <p className="text-xs text-muted-foreground">Total Youth</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-accent">{district.women}%</p>
                        <p className="text-xs text-muted-foreground">Women</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-trust">{district.pwd}%</p>
                        <p className="text-xs text-muted-foreground">PWD</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-600">{district.completion}%</p>
                        <p className="text-xs text-muted-foreground">Success Rate</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="inclusion" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-accent">Women Participation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-accent">68%</p>
                      <p className="text-sm text-muted-foreground">Overall participation</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Agriculture</span>
                        <span>72%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Technology</span>
                        <span>45%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Business</span>
                        <span>78%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-trust/10 to-trust/5 border-trust/20">
                <CardHeader>
                  <CardTitle className="text-trust">Rural Youth Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-trust">85%</p>
                      <p className="text-sm text-muted-foreground">Rural coverage</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Remote areas</span>
                        <span>67%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Semi-urban</span>
                        <span>91%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Urban</span>
                        <span>96%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
                <CardHeader>
                  <CardTitle className="text-green-600">PWD Inclusion</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-green-600">12%</p>
                      <p className="text-sm text-muted-foreground">PWD participation</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Physical disabilities</span>
                        <span>8%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Visual impairments</span>
                        <span>3%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Hearing impairments</span>
                        <span>1%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Impact Reports</h3>
              <Button variant="trust">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Report
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {impactReports.map((report, index) => (
                <Card key={index} className="hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{report.title}</CardTitle>
                        <CardDescription>{report.date}</CardDescription>
                      </div>
                      <Badge 
                        variant={report.status === "Published" ? "default" : "secondary"}
                      >
                        {report.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Type</span>
                        <span className="text-sm font-medium">{report.type}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GovernmentDashboard;