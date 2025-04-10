import React from 'react';
import Image from 'next/image';

type TeamProps = {
   imgUrl: string;
   title: string;
   position: string;
   contactInfo: string;
};

const TeamData = [
   {
      imgUrl: '/human.png',
      title: 'John Doe',
      position: 'CEO',
      contactInfo: 'Reach me ',
   },
   {
      imgUrl: '/human.png',
      title: 'Frank Doe',
      position: 'CEO',
      contactInfo: 'Reach me ',
   },
   {
      imgUrl: '/human.png',
      title: 'dan Doe',
      position: 'CEO',
      contactInfo: 'Reach me ',
   },
   {
      imgUrl: '/human.png',
      title: 'mag Doe',
      position: 'CEO',
      contactInfo: 'Reach me ',
   },
   {
      imgUrl: '/human.png',
      title: 'mosses Doe',
      position: 'CEO',
      contactInfo: 'Reach me ',
   },
   {
      imgUrl: '/human.png',
      title: 'mat Doe',
      position: 'CEO',
      contactInfo: 'Reach me ',
   },
];

function OurTeam() {
   return (
      <div className="max-w-6xl mx-auto">
         <h2 className=" m-4 text-[30px] text-center ">Meet Our Team</h2>
         <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-5 overflow-hidden">
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
      <div className="flex flex-col ">
         <Image src={imgUrl} alt={imgUrl} width={300} height={200} />
         <h4>{title}</h4>
         <p>{position}</p>
         <button>{contactInfo}</button>
      </div>
   );
}
