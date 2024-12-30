"use client";

import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import Link from "next/link";

interface ContactLink {
  href: string
  icon: React.ReactNode
  label: string
}

const contactLinks: ContactLink[] = [
  {
    href: 'https://www.facebook.com/brianjames.delacruz',
    icon: <FaFacebook className="h-6 w-6" />,
    label: 'Facebook'
  },
  {
    href: 'https://www.instagram.com/yoao.bj/?hl=en',
    icon: <FaInstagram className="h-6 w-6" />,
    label: 'Instagram'
  },
  {
    href: 'https://github.com/be3jaay',
    icon: <FaGithub className="h-6 w-6" />,
    label: 'GitHub'
  }
]
export const ContactSection: React.FC = () => {
  return (
    <div className="w-full h-full flex items-start justify-center flex-col py-12">
      <div className="text-3xl md:text-4xl font-bold text-green-400">
        Contact Me
      </div>
      <p className="text-start text-xl mt-2 text-gray-400">
        I&apos;m always open to new opportunities and collaborations. Feel free to reach out through any of the platforms below.
      </p>
      <p className="text-start text-xl mt-2 text-gray-300 mb-8 ">Location: Calamba Laguna 📍</p>
      <div className="flex justify-center space-x-6">
        {contactLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 text-zinc-500 hover:text-slate-100 transition-colors duration-300"
          >
            {link.icon}
            <span className="text-sm">{link.label}</span>
          </Link>
        ))}
      </div>
    </div>

  )
}