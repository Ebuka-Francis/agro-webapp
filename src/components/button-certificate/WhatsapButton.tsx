import React from 'react';
import { Button } from '../ui/button';

interface WhatsAppButtonProps {
   phoneNumber: string;
   message: string;
   label?: string;
   className?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
   phoneNumber,
   message,
   label = 'Send A Message',
   className = '',
}) => {
   const handleClick = () => {
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
   };

   return (
      <Button
         onClick={handleClick}
         className={`bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-full p-4 w-[100%] text-white font-bold border-none cursor-pointer ${className}`}
      >
         {label}
      </Button>
   );
};

export default WhatsAppButton;
