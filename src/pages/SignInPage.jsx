import { SignIn } from "@clerk/clerk-react";

function SignInPage(){
    return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn path="/sign-in" routing="path" signUpUrl="/choose-role" fallbackRedirectUrl="/dashboard" />
    </div>
  );
}
export default SignInPage;