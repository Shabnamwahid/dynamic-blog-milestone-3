
// import React, { useState } from "react";
// import { Card, CardContent } from "../components/userinterface/card";
// import { Button } from "../components/userinterface/button";

// interface Comment {
//   id: string;
//   author: string;
//   text: string;
// }

// interface CommentSectionProps {
//   postid?: string; // Rename the property here
// }

// export default function CommentSection({ postid }: CommentSectionProps) {
//   const [comments, setComments] = useState<Comment[]>([]);
//   const [newComment, setNewComment] = useState("");
//   const [authorName, setAuthorName] = useState("");
//   const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

//   const handleAddComment = () => {
//     if (!authorName.trim() || !newComment.trim()) {
//       alert("Please fill in both your name and comment.");
//       return;
//     }

//     const newCommentObj: Comment = {
//       id: new Date().toISOString(),
//       author: authorName,
//       text: newComment,
//     };
//     setComments([...comments, newCommentObj]);
//     setNewComment("");
//     setAuthorName("");
//   };

//   const handleEditComment = (commentId: string) => {
//     const commentToEdit = comments.find((comment) => comment.id === commentId);
//     if (commentToEdit) {
//       setNewComment(commentToEdit.text);
//       setAuthorName(commentToEdit.author);
//       setEditingCommentId(commentId);
//     }
//   };

//   const handleSaveEditedComment = () => {
//     if (!authorName.trim() || !newComment.trim()) {
//       alert("Please fill in both your name and comment.");
//       return;
//     }

//     if (editingCommentId) {
//       const updatedComments = comments.map((comment) =>
//         comment.id === editingCommentId
//           ? { ...comment, text: newComment, author: authorName }
//           : comment
//       );
//       setComments(updatedComments);
//       setNewComment("");
//       setAuthorName("");
//       setEditingCommentId(null);
//     }
//   };

//   return (
//     <div className="mt-8">
//       <h2 className="text-2xl font-semibold bg-stone-400 w-32 rounded px-2">
//         Comments
//       </h2>
//       {postid && (
//         <p className="text-sm text-gray-500 mt-2">
//           Viewing comments for post ID: {postid}
//         </p>
//       )}
//       <div className="mt-4 space-y-4">
//         {comments.length > 0 ? (
//           comments.map((comment) => (
//             <Card key={comment.id}>
//               <CardContent className="p-4">
//                 <div className="font-semibold">{comment.author}</div>
//                 <p>{comment.text}</p>
//                 <button
//                   onClick={() => handleEditComment(comment.id)}
//                   className="mt-2 text-stone-500 hover:underline"
//                 >
//                   Edit
//                 </button>
//               </CardContent>
//             </Card>
//           ))
//         ) : (
//           <p className="text-slate-400">No Comments Yet</p>
//         )}
//       </div>
//       <div className="mt-6">
//         <input
//           type="text"
//           value={authorName}
//           onChange={(e) => setAuthorName(e.target.value)}
//           placeholder="Your Name"
//           className="w-full mb-2 p-2 border rounded focus:outline-none focus:ring focus:ring-stone-400"
//         />
//         <input
//           type="text"
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           placeholder="Add a Comment"
//           className="w-full mb-2 p-2 border rounded focus:outline-none focus:ring focus:ring-stone-400"
//         />
//         <Button
//           onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
//           className="mt-4 bg-stone-400 font-semibold text-white px-4 py-2 rounded hover:bg-stone-500 transition"
//         >
//           {editingCommentId ? "Save" : "Submit"}
//         </Button>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { Card, CardContent } from "../components/userinterface/card";
import { Button } from "../components/userinterface/button";

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postid?: string; // Ensure the postid is optional for proper handling.
}

export default function CommentSection({ postid }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddComment = () => {
    if (!authorName.trim() || !newComment.trim()) {
      alert("Please fill in both your name and comment.");
      return;
    }

    const newCommentObj: Comment = {
      id: new Date().toISOString(),
      author: authorName,
      text: newComment,
    };
    setComments([...comments, newCommentObj]);
    setNewComment("");
    setAuthorName("");
  };

  const handleEditComment = (commentId: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentId);
    }
  };

  const handleSaveEditedComment = () => {
    if (!authorName.trim() || !newComment.trim()) {
      alert("Please fill in both your name and comment.");
      return;
    }

    if (editingCommentId) {
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: newComment, author: authorName }
          : comment
      );
      setComments(updatedComments);
      setNewComment("");
      setAuthorName("");
      setEditingCommentId(null);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold bg-stone-400 w-32 rounded px-2">Comments</h2>
      {postid && <p className="text-sm text-gray-500 mt-2">Viewing comments for post ID: {postid}</p>}
      
      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <div className="font-semibold">{comment.author}</div>
                <p>{comment.text}</p>
                <button
                  onClick={() => handleEditComment(comment.id)}
                  className="mt-2 text-stone-500 hover:underline"
                >
                  Edit
                </button>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-slate-400">No Comments Yet</p>
        )}
      </div>

      <div className="mt-6">
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your Name"
          className="w-full mb-2 p-2 border rounded focus:outline-none focus:ring focus:ring-stone-400"
        />
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a Comment"
          className="w-full mb-2 p-2 border rounded focus:outline-none focus:ring focus:ring-stone-400"
        />
        <Button
          onClick={editingCommentId ? handleSaveEditedComment : handleAddComment}
          className="mt-4 bg-stone-400 font-semibold text-white px-4 py-2 rounded hover:bg-stone-500 transition"
        >
          {editingCommentId ? "Save" : "Submit"}
        </Button>
      </div>
    </div>
  );
}
