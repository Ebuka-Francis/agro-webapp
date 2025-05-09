'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function CommentForm() {
   const [comment, setComment] = useState('');
   const [sending, setSending] = useState(false);
   const [success, setSuccess] = useState(false);

   const sendEmail = async (e: React.FormEvent) => {
      e.preventDefault();
      setSending(true);

      const templateParams = {
         message: comment,
      };

      try {
         await emailjs.send(
            'service_37j9b4l',
            'template_gvxz8ct',
            templateParams,
            'fJkwVzNTL0atjNaht'
         );
         setSuccess(true);
         setComment('');
      } catch (error) {
         console.error('Failed to send:', error);
      } finally {
         setSending(false);
      }
   };

   return (
      <form onSubmit={sendEmail} className="space-y-4 max-w-md mx-auto m-4">
         <textarea
            placeholder="Write your comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="w-full p-3 border rounded"
         />
         <button
            type="submit"
            disabled={sending}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
         >
            {sending ? 'Sending...' : 'Send Comment'}
         </button>
         {success && (
            <p className="text-green-600">Message sent successfully!</p>
         )}
      </form>
   );
}
