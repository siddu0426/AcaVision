import { SignUp } from "@clerk/clerk-react";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SignUpPage() {
  const [searchParams] = useSearchParams();

  const [selectedRole, setSelectedRole] = useState('mentee');

  useEffect(() => {
    const roleFromUrl = searchParams.get('role');
    if (roleFromUrl === 'mentor') {
      setSelectedRole('mentor');
    }
  }, []); 


  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignUp
       path="/sign-up" 
       routing="path" 
       signInUrl="/sign-in"
       fallbackRedirectUrl = "/dashboard"
       unsafeMetadata={{
          role: selectedRole,
          onboardingComplete: selectedRole === 'mentor' ? true : false
       }}

      />
    </div>
  );
}

export default SignUpPage;