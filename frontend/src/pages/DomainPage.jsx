import React, { useEffect,useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { allMentors } from "../data/mentors.js";
import MentorCard from "../components/mentors/MentorCard.jsx";

function DomainPage(){
    const { domainName } = useParams();

    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        const filteredMentors = allMentors.filter(mentor => mentor.domain === domainName);
        setMentors(filteredMentors);
    }, [domainName]);

    const title = domainName.charAt(0).toUpperCase() + domainName.slice(1).replace('-', ' ');

      return (
    <div className="bg-white min-h-screen p-8">
      <div className="container mx-auto">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-orange-500 font-semibold mb-6">
          <ArrowLeftIcon className="h-5 w-5" />
          Back to Dashboard
        </Link>
        
        {/* <h1 className="text-5xl font-bold text-black mb-4"> */}
          {/* {title} Domain */}
        {/* </h1> */}
        {/* <p className="text-lg text-gray-600 mb-8"> */}
          {/* This is the dedicated page for your {title} learning path. All your roadmaps, resources, and quests for this domain will appear here. */}
        {/* </p> */}

        {/* You can add domain-specific components here later */}
        {/* <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg"> */}
          {/* <p className="text-center text-gray-500">Domain-specific content coming soon...</p> */}
        {/* </div> */}

         <h1 className="text-5xl font-bold text-black mb-4">
          {title} Domain
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          Connect with experienced mentors in the {title} field to guide you on your journey.
        </p>

        {/* 4. Render the list of mentors */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">Mentors for this Domain</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mentors.length > 0 ? (
              mentors.map(mentor => <MentorCard key={mentor.id} mentor={mentor} />)
            ) : (
              <p className="text-gray-500 lg:col-span-2">No mentors found for this domain yet.</p>
            )}
          </div>
        </div>



      </div>
    </div>
  );

}


export default DomainPage;