'use client';
import React from 'react';
import Image from 'next/image';
import WhatsAppButton from '../button-certificate/WhatsapButton';

type TeamProps = {
   imgUrl: string;
   title: string;
   position: string;
   contactInfo: string;
};

const TeamData = [
   {
      imgUrl: '/fred.jpeg',
      title: 'Fre Eni',
      position: 'C.E.O/Managing Director',
      contactInfo: '+49 1521 3491691',
   },
   {
      imgUrl: '/michela.jpeg',
      title: 'Frank Doe',
      position: 'Assistant C.E.O/ Head Of Sales',
      contactInfo: '+4917655025872',
   },
   {
      imgUrl: '/patience.jpeg',
      title: 'Patience Eke',
      position: 'General Manager/ Head of Operation',
      contactInfo: '+2348033073931 ',
   },
];

function OurTeam() {
   return (
      <div className="max-w-6xl mx-auto">
         <h2 className=" m-4 text-[30px] text-center ">Meet Our Team</h2>
         <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-5 overflow-hidden m-[30px]">
            {TeamData.map((team) => (
               <TeamCards
                  key={team.title}
                  imgUrl={team.imgUrl}
                  title={team.title}
                  position={team.position}
                  contactInfo={team.contactInfo}
               />
            ))}
         </div>
      </div>
   );
}

export default OurTeam;

export function TeamCards({ imgUrl, title, position, contactInfo }: TeamProps) {
   return (
      <div className="flex flex-col items-center gap-3 ">
         <div className="max-w-[inherit] mx-auto rounded-[20px]">
            <Image
               src={imgUrl}
               alt={imgUrl}
               width={400}
               height={200}
               className="rounded-[20px]"
            />
         </div>
         <div className="w-[100%] flex flex-col items-center gap-2 ">
            <h4 className="text-[25px] text-center font-bold ">{title}</h4>
            <p className="text-[20px] text-center">{position}</p>
            {/* <Button className="cursor-pointer bg-green-800 w-[100%] text-[18px] font-bold p-[25px] ">
               {contactInfo}
            </Button> */}
            <WhatsAppButton
               phoneNumber={contactInfo}
               message={'I want to get your products '}
            />
         </div>
      </div>
   );
}
