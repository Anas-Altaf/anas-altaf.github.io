import React from 'react'
import SocialHandle from './SocialHandle'


const Socials = () => {
  let socialHandles = [
    {
      iconName: "medium",
      link: "https://medium.com/@anasaltaf",
    },
    {
      iconName: "linkedin",
      link: "https://www.linkedin.com/in/anasaltaf/",
    },
    {
      iconName: "github",
    link: "https://github.com/Anas-Altaf"
    },
    {
      iconName: "whatsapp",
      link: "https://wa.me/923104889407",
    },
    {
      iconName: "x-twitter",
      link: "https://x.com/anas0altaf",
    },
  ];
  return (
    <div className="flex flex-row justify-between  items-center gap-10 mt-2  backdrop:blur-xl bg-black/40 px-7.5 py-3 rounded-xl border-1 border-fg-s border-opacity-50">
      {socialHandles.map((handle, index) => (
        <SocialHandle key={index} iconName={handle.iconName} link={handle.link} />
      ))}
  </div>
  )
}

export default Socials