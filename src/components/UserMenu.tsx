
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, LogOut, Settings } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useProfile } from "@/hooks/useProfile";

const UserMenu = () => {
  const { signOut } = useAuth();
  const { profile, mentorProfile, studentProfile, loading } = useProfile();

  if (loading) {
    return <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />;
  }

  if (!profile) {
    return null;
  }

  // Get display information based on profile type
  const getDisplayInfo = () => {
    if (profile.user_type === 'mentor' && mentorProfile) {
      return {
        name: mentorProfile.full_name || profile.full_name,
        email: mentorProfile.email || profile.email,
        phone: mentorProfile.phone_number || profile.phone_number
      };
    } else if (profile.user_type === 'student' && studentProfile) {
      return {
        name: studentProfile.full_name || profile.full_name,
        email: studentProfile.email || profile.email,
        phone: studentProfile.phone_number || profile.phone_number
      };
    }
    
    // Fallback to basic profile
    return {
      name: profile.full_name,
      email: profile.email,
      phone: profile.phone_number
    };
  };

  const displayInfo = getDisplayInfo();

  const getInitials = (name: string | null) => {
    if (!name) return "U";
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getUserTypeLabel = (userType: string) => {
    return userType === 'mentor' ? 'Mentor' : 'Student';
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-[#03045E] text-white">
              {getInitials(displayInfo.name)}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {displayInfo.name || 'User'}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {displayInfo.email}
            </p>
            <p className="text-xs leading-none text-blue-600">
              {getUserTypeLabel(profile.user_type)}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
