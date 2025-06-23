import React from 'react';
import { useAuth } from '@/context/auth/AuthContext';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { Navbar } from '@/components/layout/Navbar';
import { ABACComponent } from '@/components/auth/ABACComponent';
import { InviteUserForm } from '@/components/auth/InviteUserForm';
import { CreditDisplay } from '@/components/auth/CreditDisplay';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Dashboard: React.FC = () => {
  const { user, organization, consumeCredits, checkQuota } = useAuth();
  
  useAuthGuard({ requireAuth: true });

  const handleConsumeCredits = async () => {
    const success = await consumeCredits(10);
    if (success) {
      console.log('Credits consumed successfully');
    } else {
      console.log('Insufficient credits');
    }
  };

  if (!user || !organization) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome, {user.firstName}!
          </h1>
          <p className="text-gray-600">
            Organization: {organization.name} ({organization.plan})
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="team">Team Management</TabsTrigger>
            <TabsTrigger value="abac">ABAC Demo</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <CreditDisplay />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Credit System Demo</CardTitle>
                  <CardDescription>
                    Test the credit consumption system
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Current Credits: {user.credits}</p>
                  <Button onClick={handleConsumeCredits}>
                    Consume 10 Credits
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quota System</CardTitle>
                  <CardDescription>
                    Check your current usage limits
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    API Calls: {checkQuota('apiCalls') ? '✅ Available' : '❌ Limit Reached'}
                  </div>
                  <div>
                    Storage: {checkQuota('storage') ? '✅ Available' : '❌ Limit Reached'}
                  </div>
                  <div>
                    Projects: {checkQuota('projects') ? '✅ Available' : '❌ Limit Reached'}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <InviteUserForm />
          </TabsContent>

          <TabsContent value="abac" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ABACComponent
                resource={{
                  type: 'document',
                  sensitivity: 'internal',
                  department: user.attributes.department,
                  organizationId: organization.id
                }}
                action="read"
                fallback={
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-red-600">❌ Access Denied: Internal document</p>
                    </CardContent>
                  </Card>
                }
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Internal Document</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>✅ Access Granted: You can view this internal document from your department.</p>
                  </CardContent>
                </Card>
              </ABACComponent>

              <ABACComponent
                resource={{
                  type: 'document',
                  sensitivity: 'confidential',
                  department: 'HR',
                  organizationId: organization.id
                }}
                action="read"
                fallback={
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-red-600">❌ Access Denied: HR confidential document</p>
                    </CardContent>
                  </Card>
                }
              >
                <Card>
                  <CardHeader>
                    <CardTitle>HR Confidential Document</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>✅ Access Granted: You can view this HR confidential document.</p>
                  </CardContent>
                </Card>
              </ABACComponent>

              <ABACComponent
                resource={{
                  type: 'project',
                  project: 'project-alpha',
                  sensitivity: 'internal',
                  organizationId: organization.id
                }}
                action="write"
                fallback={
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-red-600">❌ Access Denied: Project Alpha</p>
                    </CardContent>
                  </Card>
                }
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Project Alpha</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>✅ Access Granted: You can edit Project Alpha resources.</p>
                  </CardContent>
                </Card>
              </ABACComponent>

              <ABACComponent
                resource={{
                  type: 'document',
                  sensitivity: 'secret',
                  organizationId: organization.id
                }}
                action="read"
                fallback={
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-red-600">❌ Access Denied: Secret document (network/clearance)</p>
                    </CardContent>
                  </Card>
                }
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Secret Document</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>✅ Access Granted: You can view this secret document.</p>
                  </CardContent>
                </Card>
              </ABACComponent>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
