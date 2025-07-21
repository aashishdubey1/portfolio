'use client';
import Link from 'next/link';
import { Twitter, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const contactMethods = [
  {
    href: 'https://x.com/aashish__x',
    icon: <Twitter />,
    label: 'Twitter',
  },
  {
    href: "https://www.linkedin.com/in/aashishdubey03/",
    icon: <Linkedin />,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:aashishdubey.dev@gmail.com',
    icon: <Mail />,
    label: 'Email',
  },
];

export default function ContactMe() {
  return (
    <motion.div
      className="mx-auto mt-10 flex flex-col items-center text-center"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl text-slate-100">Reach out to me.</h2>
      <p className="text-base tracking-tight">
        Feel free to reach out to me via email, LinkedIn, or Twitter for any
        queries, collaboration opportunities, or further details.
      </p>
      <div className="mt-2 mb-4">
        <div className="mt-4 flex flex-wrap gap-4 justify-center">
          {contactMethods.map((method, index) => (
            <Link key={index} href={method.href} target="_blank" rel="noopener noreferrer">
              <div className="bg-slate-100 text-slate-800 px-2 py-1 border rounded shadow text-sm font-semibold flex items-center hover:bg-white/80 hover:text-black transition-all duration-200 cursor-pointer hover:scale-105">
                {method.icon}
                <span className="ml-2">{method.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}