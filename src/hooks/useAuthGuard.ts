import { useAuth } from '@/context/auth/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface UseAuthGuardOptions {
  requireAuth?: boolean;
  requiredRoles?: string[];
  requiredPermissions?: Array<{ resource: string; action: string }>;
  redirectTo?: string;
  onUnauthorized?: () => void;
}

export const useAuthGuard = (options: UseAuthGuardOptions = {}) => {
  const {
    requireAuth = true,
    requiredRoles = [],
    requiredPermissions = [],
    redirectTo = '/login',
    onUnauthorized
  } = options;

  const { isAuthenticated, isLoading, user, hasRole, hasPermission } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) return;

    // Check if authentication is required but user is not authenticated
    if (requireAuth && !isAuthenticated) {
      if (onUnauthorized) {
        onUnauthorized();
      } else {
        navigate(redirectTo, { replace: true });
      }
      return;
    }

    // Check if user is authenticated but shouldn't be (e.g., login page)
    if (!requireAuth && isAuthenticated) {
      navigate('/dashboard', { replace: true });
      return;
    }

    // Check role requirements
    if (isAuthenticated && requiredRoles.length > 0) {
      const hasRequiredRole = requiredRoles.some(role => hasRole(role));
      if (!hasRequiredRole) {
        if (onUnauthorized) {
          onUnauthorized();
        } else {
          navigate('/unauthorized', { replace: true });
        }
        return;
      }
    }

    // Check permission requirements
    if (isAuthenticated && requiredPermissions.length > 0) {
      const hasRequiredPermission = requiredPermissions.some(
        ({ resource, action }) => hasPermission(resource, action)
      );
      if (!hasRequiredPermission) {
        if (onUnauthorized) {
          onUnauthorized();
        } else {
          navigate('/unauthorized', { replace: true });
        }
        return;
      }
    }
  }, [
    isLoading,
    isAuthenticated,
    user,
    requireAuth,
    requiredRoles,
    requiredPermissions,
    redirectTo,
    onUnauthorized,
    navigate,
    hasRole,
    hasPermission
  ]);

  return {
    isAuthenticated,
    isLoading,
    user,
    hasRole,
    hasPermission
  };
};
