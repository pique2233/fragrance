'use client'
import { useState } from 'react';

export default function CommentSection() {
  const [comments, setComments] = useState([
    {
      username: '沁识',
      text: '欢迎留言！',
      time: '2023-09-15 10:00'
    }
  ]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      username: '你',
      text: newComment,
      time: new Date().toLocaleString('zh-CN')
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  return (
    <div className="comment-container">
      <div className="comment-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment-item">
            <div className="user-avatar">{comment.username[0]}</div>
            <div className="comment-content">
              <div className="user-name">{comment.username}</div>
              <p className="comment-text">{comment.text}</p>
              <div className="comment-time">{comment.time}</div>
            </div>
          </div>
        ))}
      </div>

      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="输入你的评论..."
          required
        />
        <button type="submit" className="submit-btn">发表评论</button>
      </form>

      <style jsx>{`
        .comment-container {
          width: 100%;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          padding: 2rem;
          margin-bottom: 2rem;
        }
        .comment-list {
          margin-bottom: 2rem;
        }
        .comment-item {
          display: flex;
          gap: 1rem;
          padding: 1.2rem 0;
          border-bottom: 1px solid #eee;
        }
        .comment-item:last-child {
          border-bottom: none;
        }
        .user-avatar {
          width: 40px;
          height: 40px;
          background:rgb(0, 0, 0);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          flex-shrink: 0;
        }
        .comment-content {
          flex-grow: 1;
        }
        .user-name {
          font-weight: 600;
          color: #333;
          margin-bottom: 0.4rem;
        }
        .comment-text {
          color: #555;
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }
        .comment-time {
          color: #999;
          font-size: 0.85rem;
        }
        .comment-form textarea {
          width: 100%;
          height: 100px;
          padding: 1rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          resize: vertical;
          font-size: 1rem;
          margin-bottom: 1rem;
        }
        .comment-form textarea:focus {
          outline: none;
          border-color:rgb(71, 47, 5);
          box-shadow: 0 0 0 3px rgba(182, 129, 50, 0.1);
        }
        .submit-btn {
          background:#2a2825;
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s;
        }
        .submit-btn:hover {
          background:rgb(97, 56, 18);
          transform: translateY(-1px);
        }
        @media (max-width: 768px) {
          .comment-container {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
}