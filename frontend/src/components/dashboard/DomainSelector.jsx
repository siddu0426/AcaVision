import React from "react";
import { Link } from "react-router-dom";

const domains = [
  { name: 'C', description: 'Procedural Language' },
  { name: 'Python', description: 'Versatile & Powerful' },
  { name: 'Java', description: 'Object-Oriented' },
  { name: 'Web Dev', description: 'HTML, CSS, JS' },
];

const DomainCard = ({ name, description }) => (
  <Link 
    to={`/domain/${name.toLowerCase().replace(' ', '-')}`} // 3. Create a dynamic URL
    className="block text-left w-full p-4 bg-white border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all duration-300"
  >
    <h4 className="font-bold text-lg text-black">{name}</h4>
    <p className="text-sm text-gray-600">{description}</p>
  </Link>
);

function DomainSelector(){
    return (
            <div className="my-8">
      <h3 className="text-xl font-bold mb-4 text-black">Choose Your Domain</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {domains.map((domain) => (
          <DomainCard key={domain.name} name={domain.name} description={domain.description} />
        ))}
      </div>
    </div>
    );
}

export default DomainSelector;