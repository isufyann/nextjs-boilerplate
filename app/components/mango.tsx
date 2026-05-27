"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Leaf,
  Users,
  Handshake,
  Globe,
  BadgeCheck,
} from "lucide-react";

export default function ResponsibleSourcingSection() {
  const cards = [
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: "Supplier Diversity",
      desc: "We actively engage businesses owned by underrepresented communities including women, minorities, veterans, LGBTQ+ individuals, and persons with disabilities.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Sustainability",
      desc: "Our suppliers are expected to follow environmentally responsible practices that reduce waste and support long-term sustainability.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: "Ethical Standards",
      desc: "We promote fair labor practices, human rights, and integrity while rejecting corruption and unethical behavior.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-orange-500" />,
      title: "Supplier Support",
      desc: "MangoApps supports supplier growth through mentoring, training, and development opportunities.",
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: "Global Commitment",
      desc: "This policy applies to all sourcing and procurement activities of MangoApps worldwide.",
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-purple-500" />,
      title: "Continuous Review",
      desc: "We regularly review supplier performance through audits and assessments to ensure policy compliance.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24 px-6 md:px-16 text-white">
      
      {/* Background Blur Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-pink-400 font-semibold tracking-[4px] uppercase mb-4">
            Our Commitment
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Responsible Sourcing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
              & Supplier Diversity
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed">
            MangoApps is dedicated to building a diverse, ethical, and sustainable
            supply chain by partnering with suppliers who share our commitment to
            inclusion, integrity, and environmental responsibility.
          </p>
        </motion.div>

        {/* Main Stats Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl text-center">
            <h3 className="text-5xl md:text-7xl font-extrabold text-pink-400 mb-4">
              25%
            </h3>
            <p className="text-2xl font-semibold mb-2">
              Procurement Spend Goal
            </p>
            <p className="text-slate-300 max-w-2xl mx-auto">
              MangoApps aims to ensure that at least 25% of procurement spending
              supports diverse suppliers and businesses from underrepresented communities.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 shadow-xl"
            >
              <div className="mb-6 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-pink-500 to-blue-500 p-[1px] rounded-full">
            <button className="bg-slate-900 hover:bg-slate-800 transition-all duration-300 px-8 py-4 rounded-full text-lg font-semibold">
              Explore Our Sustainability Vision
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}