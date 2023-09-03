// src/components/CommentList.js
import React from "react";

function CommentList({ selectedPost }) {
    return (
        <div className="comment-list">
            <h2>Comments for Post #{selectedPost.postId}</h2>
            <ul>
                {selectedPost.comments.map((comment) => (
                    <div key={comment.id}>
                        <p>{comment.body}</p>
                        {/* You can add more details if needed, like the commenter's name, email, etc. */}
                    </div>
                ))}

            </ul>
        </div>
    );
}

export default CommentList;
