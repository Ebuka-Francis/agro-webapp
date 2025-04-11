import React from 'react';
import { Button } from '../ui/button';

function ButtonCertificate() {
   const phoneNumber = '2348133842387';
   const message = 'product certificate';

   const handleClick = () => {
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
   };

   return (
      <Button
         onClick={handleClick}
         className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 rounded-full p-4 max-w-[160px] text-white font-bold border-none cursor-pointer "
      >
         Product Certificate
      </Button>
   );
}

export default ButtonCertificate;
