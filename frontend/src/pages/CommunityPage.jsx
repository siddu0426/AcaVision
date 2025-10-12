import React, { useState } from 'react';
import { mockPosts } from '../data/communityData';
import PostCard from '../components/community/PostCard';

function CommunityPage(){
    const [posts, setPosts] = useState(mockPosts);

      return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-black">Community Feed</h1>
          <button className="bg-orange-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-orange-600">
            Create Post
          </button>
        </div>
        <div className="space-y-6">
          {posts.map(post => <PostCard key={post.id} post={post} />)}
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;