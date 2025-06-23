import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { LogOut, User, Mail, Calendar } from 'lucide-react';

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await logout();
      toast({
        title: "Signed out",
        description: "You have been successfully signed out",
      });
    } catch (error) {
      console.error('Logout error:', error);
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      });
    }
  };

  const getInitials = (name: string | null) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const formatDate = (date: string | null) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-blue-600 hover:bg-blue-700 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <Avatar className="w-20 h-20 mx-auto mb-4">
                <AvatarImage src={currentUser?.photoURL || ''} />
                <AvatarFallback className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  {getInitials(currentUser?.displayName)}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-2xl">Welcome back!</CardTitle>
              <CardDescription>
                {currentUser?.displayName || 'User'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-gray-600">{currentUser?.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <User className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium">User ID</p>
                  <p className="text-sm text-gray-600 font-mono">{currentUser?.uid.slice(0, 8)}...</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium">Member since</p>
                  <p className="text-sm text-gray-600">{formatDate(currentUser?.metadata.creationTime || null)}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>
                Your account details and authentication status
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm font-medium">Email Verified</span>
                  <span className={`text-sm px-2 py-1 rounded ${
                    currentUser?.emailVerified 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {currentUser?.emailVerified ? 'Verified' : 'Unverified'}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm font-medium">Authentication Provider</span>
                  <span className="text-sm text-gray-600">
                    {currentUser?.providerData[0]?.providerId === 'password' ? 'Email/Password' : 
                     currentUser?.providerData[0]?.providerId === 'google.com' ? 'Google' :
                     currentUser?.providerData[0]?.providerId === 'github.com' ? 'GitHub' : 'Unknown'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-medium">Last Sign In</span>
                  <span className="text-sm text-gray-600">
                    {formatDate(currentUser?.metadata.lastSignInTime || null)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
