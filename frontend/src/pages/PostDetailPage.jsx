import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { mockPosts } from '../data/communityData';

function PostDetailPage(){
    const { postId } = useParams();
    const post = mockPosts.find(p => p.id === parseInt(postId));

    if (!post) {
       return <div className="text-center p-8">Post not found.</div>;
    }

    const roleColor = post.authorRole === 'mentor' ? 'text-purple-500' : 'text-blue-500';

      return (
    <div className="bg-white min-h-screen p-8">
      <div className="container mx-auto max-w-3xl">
        <Link to="/community" className="inline-flex items-center gap-2 text-orange-500 font-semibold mb-6">
          <ArrowLeftIcon className="h-5 w-5" />
          Back to Feed
        </Link>
        
        {/* Post Content */}
        <div>
          <p className="text-sm text-gray-500">
            Posted by <span className={`font-semibold ${roleColor}`}>{post.authorName} ({post.authorRole})</span> • {post.timestamp}
          </p>
          <h1 className="text-4xl font-bold text-black my-3">{post.title}</h1>
          <p className="text-gray-800 whitespace-pre-wrap">{post.content}</p>
        </div>

        <hr className="my-8" />

        {/* Comments Section */}
        <div>
          <h2 className="text-2xl font-bold text-black mb-6">{post.comments.length} Comments</h2>
          {/* Add Comment Form */}
          <div className="mb-8">
            <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500" rows="3" placeholder="Add your comment..."></textarea>
            <button className="bg-orange-500 text-white font-bold py-2 px-5 rounded-lg mt-2 hover:bg-orange-600">
              Post Comment
            </button>
          </div>
          {/* Comments List */}
          <div className="space-y-6">
            {post.comments.map(comment => {
              const commentRoleColor = comment.authorRole === 'mentor' ? 'text-purple-500' : 'text-blue-500';
              return (
                <div key={comment.id} className="border-l-4 border-gray-200 pl-4">
                  <p className="text-sm font-semibold mb-1">
                    <span className={commentRoleColor}>{comment.authorName} ({comment.authorRole})</span>
                  </p>
                  <p className="text-gray-800">{comment.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetailPage;