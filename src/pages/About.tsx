import React from "react";
import { motion } from "framer-motion";
import { Code2, Rocket, Users, Sparkles, Award, Send } from "lucide-react";

const coders = [
  {
    name: "Pawan Rajpoot",
    role: "Full Stack Architect",
    skills: ["React", "Spring Boot", "Cloud"],
    image: "../../public/img/pawan.png"
  },
  {
    name: "Brajesh Kamle",
    role: "Lead Frontend Engineer",
    skills: ["TypeScript", "UI/UX", "Animation"],
    image: "../../public/img/brajesh.jpeg"
  },
  {
    name: "Kartik Prajapat",
    role: "Backend & DevOps",
    skills: ["Java", "Docker", "AWS"],
    image: "../../public/img/kartik.jpeg"
  }
];

function Glow(){
return <>
<div className='absolute -top-20 left-0 w-96 h-96 rounded-full blur-[160px] bg-cyan-500/10'/>
<div className='absolute bottom-0 right-0 w-[34rem] h-[34rem] rounded-full blur-[180px] bg-blue-500/10'/>
</>
}

export default function AboutPage(){
 return (
<div className='min-h-screen bg-[#030712] text-white overflow-hidden'>
<Glow/>

{/* HERO */}
<section className='relative max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-24'>
<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:.8}}
className='grid lg:grid-cols-2 gap-14 items-center'>

<div>
<div className='inline-flex px-6 py-3 rounded-full border border-cyan-400/20 bg-white/5 text-cyan-300 mb-8'>About Our Vision</div>
<h1 className='text-5xl md:text-7xl font-bold leading-[1.02] tracking-[-0.03em]'>
Building Digital
<span className='block bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent'>Innovation With Purpose</span>
</h1>
<p className='mt-8 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl'>
We combine education, software engineering and innovation to create products that solve real problems. Our vision is to empower businesses and communities through meaningful technology.
</p>

<div className='grid sm:grid-cols-3 gap-5 mt-10'>
{[
['10+','Products'],['50+','Clients'],['24/7','Support']
].map(([n,t])=>(
<div key={t} className='rounded-3xl p-6 bg-white/5 border border-white/10'>
<div className='text-3xl font-bold text-cyan-300'>{n}</div>
<div className='text-slate-400 mt-2'>{t}</div>
</div>
))}
</div>
</div>

<motion.div whileHover={{y:-8}} className='relative'>
<div className='rounded-[36px] p-[1px] bg-gradient-to-br from-cyan-400/40 to-blue-500/30'>
<div className='rounded-[36px] bg-[#08172d] p-8 border border-white/5'>
<div className='grid gap-6'>
{[
[Rocket,'Innovation First'],
[Users,'Community Driven'],
[Award,'Quality Focused'],
[Code2,'Modern Engineering']
].map(([Icon,label],i)=>(
<div key={i} className='flex items-center gap-5 rounded-3xl bg-white/5 p-5'>
<div className='w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center'>
{React.createElement(Icon,{size:28})}
</div>
<div>
<div className='font-semibold text-xl'>{label}</div>
<div className='text-slate-400'>Premium execution and scalable solutions.</div>
</div>
</div>
))}
</div>
</div>
</div>
</motion.div>

</motion.div>
</section>

{/* TOP CODERS */}
<section className='max-w-7xl mx-auto px-6 md:px-10 py-16'>
<div className='text-center mb-20'>
<div className='inline-flex px-6 py-3 rounded-full border border-cyan-400/20 bg-white/5 text-cyan-300 mb-8'>Top Coders</div>
<h2 className='text-4xl md:text-6xl font-bold'>Meet Our Core Engineering Team</h2>
</div>

<div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'>
{coders.map((coder,i)=>(
<motion.div
key={coder.name}
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*.1}}
viewport={{once:true}}
whileHover={{y:-10}}
className='group rounded-[34px] p-[1px] bg-gradient-to-br from-cyan-400/40 to-blue-500/30'>
<div className='rounded-[34px] overflow-hidden bg-[#08172d] border border-white/5'>
<div className='h-[380px] overflow-hidden'>
<img src={coder.image} className='w-full h-full object-cover group-hover:scale-110 transition duration-1000'/>
</div>
<div className='p-8'>
<h3 className='text-3xl font-bold'>{coder.name}</h3>
<p className='text-cyan-300 mt-2'>{coder.role}</p>
<div className='flex flex-wrap gap-3 mt-6'>
{coder.skills.map(s=><span key={s} className='px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300'>{s}</span>)}
</div>
</div>
</div>
</motion.div>
))}
</div>
</section>

{/* JOIN FORM */}
<section className='max-w-6xl mx-auto px-6 md:px-10 py-24'>
<div className='rounded-[40px] p-[1px] bg-gradient-to-r from-cyan-400/40 to-blue-500/30'>
<div className='rounded-[40px] bg-[#08172d] border border-white/5 p-8 md:p-14'>
<div className='grid lg:grid-cols-2 gap-14 items-center'>

<div>
<div className='inline-flex gap-2 items-center px-5 py-3 rounded-full bg-white/5 text-cyan-300 mb-8'>
<Sparkles size={18}/> Join Our Team
</div>
<h2 className='text-4xl md:text-6xl font-bold leading-tight'>Want To Build With Us?</h2>
<p className='mt-6 text-slate-400 text-lg leading-relaxed'>Join our developer community and work on impactful projects. Fill the form and our team will connect with you.</p>
</div>

<form className='grid gap-5'>
<input className='bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400' placeholder='Full Name'/>
<input className='bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400' placeholder='Email Address'/>
<input className='bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400' placeholder='Tech Stack (React, Java, etc)'/>
<textarea rows={5} className='bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400' placeholder='Why do you want to join?' />
<button className='mt-3 inline-flex items-center justify-center gap-3 rounded-full px-8 py-5 font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-105 transition'>
<Send size={18}/> Submit Application
</button>
</form>

</div>
</div>
</div>
</section>

</div>
 )
}
