
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';

interface Profile {
  id: string;
  full_name: string | null;
  email: string | null;
  phone_number: string | null;
  user_type: 'student' | 'mentor';
  created_at: string;
}

interface MentorProfile {
  company: string | null;
  years_of_experience: string | null;
}

export const useProfile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [mentorProfile, setMentorProfile] = useState<MentorProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      setMentorProfile(null);
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        // Fetch basic profile
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (profileError) {
          console.error('Error fetching profile:', profileError);
          return;
        }

        setProfile(profileData);

        // If user is a mentor, fetch mentor-specific data
        if (profileData?.user_type === 'mentor') {
          const { data: mentorData, error: mentorError } = await supabase
            .from('mentor_profiles')
            .select('*')
            .eq('id', user.id)
            .single();

          if (mentorError) {
            console.error('Error fetching mentor profile:', mentorError);
          } else {
            setMentorProfile(mentorData);
          }
        }
      } catch (error) {
        console.error('Error in fetchProfile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  return { profile, mentorProfile, loading };
};
