import React, { useRef } from 'react'
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { UserContext } from '../context/UserContext';
import { useState, useContext } from 'react';
import axios from 'axios';
import { URL, token } from "../url"

const Comments = ({ c, authorId, comments, setComments }) => {
    const { user } = useContext(UserContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editedComment, setEditedComment] = useState(c.comment);
    const commentRef = useRef();
    const config = {headers: {'Authorization': `Bearer ${token}`}};

    const handleDeleteComment = async (id) => {
        try {
            await axios.delete(URL + "/api/comments/" + id, config);
            setComments(comments.filter(comment => comment._id !== id));
        } catch (err) {
            console.log(err);
        }
    }
    const handleUpdateComment = async (id) => {
        try {
            await axios.put(URL + "/api/comments/" + id, { comment: editedComment }, config);
            setComments(comments.map(comment => (comment._id === id ? { ...comment, comment: editedComment } : comment)));
            setIsEditing(false);
        } catch (err) {
            console.log(err);
        }
    }
    const handleEditComment = (c) => {
        setIsEditing(true);
        commentRef.current.focus();
        const length = editedComment.length;
        commentRef.current.setSelectionRange(length, length);
    }

    return (
        <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-600">@{c.author}</h3>
                <div className="flex justify-center items-center space-x-2">
                    <p className="text-gray-500 text-sm">{new Date(c.updatedAt).toString().slice(4, 15)}</p>
                    <p className="text-gray-500 text-sm">{new Date(c.updatedAt).toString().slice(16, 24)}</p>
                    <div className="flex items-center justify-center pr-1 space-x-2" >
                        {user?._id === c.userId && !isEditing && (
                            <p onClick={() => handleEditComment(c)} className="text-lg md:text-xl hover:scale-110 cursor-pointer"><FiEdit /></p>
                        )}
                        {user?._id === c.userId && isEditing && (
                            <>
                                <p onClick={() => handleUpdateComment(c._id)} className="text-sm md:text-md border-2 border-gray-400 p-1 rounded-xl cursor-pointer hover:bg-gray-300 transition duration-300">Save</p>
                                <p onClick={() => setIsEditing(false)} className="text-sm md:text-md border-2 border-gray-400 p-1 rounded-xl cursor-pointer hover:bg-gray-300 transition duration-300">Cancel</p>
                            </>
                        )}
                        {
                            (user?._id === authorId) | (user?._id === c.userId) ? <p onClick={() => handleDeleteComment(c._id)} className="text-lg md:text-xl hover:scale-110 cursor-pointer"><MdDelete /></p> : null
                        }
                    </div>
                </div>
            </div>
            <input ref={commentRef} value={editedComment} onChange={(e) => setEditedComment(e.target.value)} type='text' className="px-4 mt-2 bg-gray-200 w-full outline-none overflow-auto"/>
        </div>
    )
}

export default Comments
