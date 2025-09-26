import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpIcon, ArrowDownIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';

function PostCard({ post }){
      const roleColor = post.authorRole === 'mentor' ? 'text-purple-500' : 'text-blue-500';

       return (
    <div className="flex gap-4 bg-white border border-gray-200 rounded-lg p-4 hover:border-orange-500 transition-colors">
      {/* Vote Section */}
      <div className="flex flex-col items-center gap-1 text-gray-500">
        <button className="hover:text-orange-500"><ArrowUpIcon className="w-6 h-6" /></button>
        <span className="font-bold text-black">{post.votes}</span>
        <button className="hover:text-blue-500"><ArrowDownIcon className="w-6 h-6" /></button>
      </div>
      {/* Content Section */}
      <div className="w-full">
        <p className="text-xs text-gray-500">
          Posted by <span className={`font-semibold ${roleColor}`}>{post.authorName} ({post.authorRole})</span> • {post.timestamp}
        </p>
        <Link to={`/community/post/${post.id}`}>
          <h3 className="text-xl font-bold text-black my-2 hover:underline">{post.title}</h3>
        </Link>
        <p className="text-gray-700 text-sm mb-3 line-clamp-2">{post.content}</p>
        <Link to={`/community/post/${post.id}`} className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-orange-500">
          <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
          {post.comments.length} Comments
        </Link>
      </div>
    </div>
  );
}

export default PostCard;