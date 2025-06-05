import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '../contexts/AuthContext';

export const useApplications = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const submitApplication = async (jobId: string, applicationData: {
    name: string;
    email: string;
    phone?: string;
    coverLetter?: string;
  }) => {
    if (!user) {
      throw new Error('You must be logged in to apply');
    }

    try {
      setLoading(true);
      
      const { error } = await supabase
        .from('applications')
        .insert({
          job_id: jobId,
          user_id: user.id,
          applicant_name: applicationData.name,
          applicant_email: applicationData.email,
          applicant_phone: applicationData.phone,
          cover_letter: applicationData.coverLetter
        });

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          throw new Error('You have already applied for this job');
        }
        throw error;
      }

      return { success: true };
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { submitApplication, loading };
};
