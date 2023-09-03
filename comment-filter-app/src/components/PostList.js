// src/components/PostList.js
import React, { useEffect, useState } from "react";
import { fetchComments } from "./CommentService";

function PostList({ onPostSelect }) {
    const [comments, setComments] = useState([]);
    const [filteredComments, setFilteredComments] = useState([]);
    const [postIdFilter, setPostIdFilter] = useState("");

    useEffect(() => {
        fetchComments()
            .then((data) => {
                setComments(data);
                setFilteredComments(data);
            })
            .catch((error) => {
                console.error("Error fetching comments:", error);
            });
    }, []);

    useEffect(() => {
        if (postIdFilter === "") {
            setFilteredComments(comments);
        } else {
            setFilteredComments(
                comments.filter((comment) => comment.postId.toString() === postIdFilter)
            );
        }
    }, [postIdFilter, comments]);

    const handlePostSelect = (comment) => {
        onPostSelect(comment);
    };

    return (
        <div className="post-list">
            <input
                type="text"
                placeholder="Filter by postId"
                value={postIdFilter}
                onChange={(e) => setPostIdFilter(e.target.value)}
            />
            <ul>
                {filteredComments.map((comment) => (
                    <li key={comment.id} onClick={() => handlePostSelect(comment)}>
                        {comment.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;
