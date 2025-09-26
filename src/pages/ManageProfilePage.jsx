import React from 'react';
import { UserProfile } from '@clerk/clerk-react';

function ManageProfilePage(){
      return (
    <div className="flex justify-center items-center py-12">
      <UserProfile 
        path="/profile/manage" 
        routing="path" 
        appearance={{
          elements: {
            card: "shadow-none border border-gray-200",
            headerTitle: "text-black",
            headerSubtitle: "text-gray-600",
            formButtonPrimary: "bg-orange-500 hover:bg-orange-600",
          }
        }}
      />
    </div>
  );
}

export default ManageProfilePage;