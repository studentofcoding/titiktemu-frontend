import React from 'react';
import './SkeletonChat.css';

const SkeletonChat = () => (
  <div className="skeleton_chat">
    <div className="skeleton__avatar"></div>
    <div className="skeleton__author"></div>
    <div className="skeleton__details"></div>
  </div>
)

export default SkeletonChat;