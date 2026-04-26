import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
Code2,
Smartphone,
Palette,
Layout,
Bot,
Globe,
Server,
Rocket,
Database,
GraduationCap,
Megaphone,
ChevronDown,
CheckCircle2,
Sparkles
} from "lucide-react";

const services = [
{
 title:'Web Development',
 icon:Code2,
 short:'Business websites, portals and web applications.',
 details:[
 'Custom business websites',
 'Admin dashboards & portals',
 'E-commerce solutions',
 'Responsive performance optimization'
 ]
},
{
 title:'App Development',
 icon:Smartphone,
 short:'Android, iOS and cross-platform mobile apps.',
 details:[
 'React Native apps',
 'Native integrations',
 'App deployment support',
 'Maintenance & upgrades'
 ]
},
{
 title:'Graphics Design',
 icon:Palette,
 short:'Branding, posters, social creatives and UI graphics.',
 details:[
 'Logo & identity',
 'Marketing creatives',
 'Presentation design',
 'Digital assets'
 ]
},
{
 title:'UI / UX Design',
 icon:Layout,
 short:'Premium interfaces and product experiences.',
 details:[
 'Wireframing',
 'Figma prototypes',
 'Design systems',
 'User experience flows'
 ]
},
{
 title:'AI Integrations',
 icon:Bot,
 short:'Automation, chatbots and AI-powered workflows.',
 details:[
 'Chatbot integration',
 'Workflow automation',
 'AI assistants',
 'Custom AI features'
 ]
},
{
 title:'Hosting & Deployment',
 icon:Server,
 short:'Deployment pipelines and cloud hosting setup.',
 details:[
 'VPS setup',
 'Cloud deployment',
 'CI/CD pipelines',
 'Security hardening'
 ]
},
{
 title:'Domain Services',
 icon:Globe,
 short:'Domain registration and business email setup.',
 details:[
 'Domain purchase help',
 'DNS management',
 'SSL setup',
 'Professional mail'
 ]
},
{
 title:'Custom Software',
 icon:Database,
 short:'ERP, CRM and custom business software.',
 details:[
 'Management systems',
 'Automation software',
 'Enterprise tools',
 'Custom integrations'
 ]
},
{
 title:'College Projects',
 icon:GraduationCap,
 short:'Academic and major project guidance.',
 details:[
 'Final year projects',
 'Documentation',
 'Live demos',
 'Deployment support'
 ]
},
{
 title:'Social Media Handling',
 icon:Megaphone,
 short:'Content planning and digital growth support.',
 details:[
 'Posting strategy',
 'Brand growth',
 'Ad creatives',
 'Campaign support'
 ]
},
{
 title:'Product Launch Support',
 icon:Rocket,
 short:'Launch strategy and product go-to-market support.',
 details:[
 'Landing pages',
 'Launch campaigns',
 'Tech setup',
 'Growth optimization'
 ]
}
];

export default function ServicesPage(){
const [openCard,setOpenCard]=useState<number | null>(null);

return (
<div className='min-h-screen bg-[#030712] text-white overflow-hidden'>

<div className='absolute top-10 left-0 w-[28rem] h-[28rem] bg-cyan-500/10 rounded-full blur-[170px]' />
<div className='absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-blue-500/10 rounded-full blur-[190px]' />

<section className='relative max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-28'>

<motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
className='text-center max-w-5xl mx-auto mb-24'>

<div className='inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/20 bg-white/5 text-cyan-300 mb-8'>
<Sparkles size={16}/> Our Services
</div>

<h1 className='text-5xl md:text-7xl font-bold leading-[1.03] tracking-[-0.03em]'>
Solutions We Offer
<span className='block mt-2 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent'>For Modern Businesses</span>
</h1>

<p className='mt-8 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto'>
Explore our services. Click any card to view detailed scope and offerings.
</p>

</motion.div>


<div className='grid md:grid-cols-2 xl:grid-cols-3 gap-8'>

{services.map((service,index)=>{
const Icon = service.icon;
const open = openCard===index;

return(
<motion.div
key={service.title}
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{delay:index*.06}}
viewport={{once:true}}
whileHover={{y:-8}}
className='rounded-[34px] p-[1px] bg-gradient-to-br from-cyan-400/40 to-blue-500/30'>

<div className='rounded-[34px] bg-[#08172d] border border-white/5 p-8'>

<div className='w-16 h-16 rounded-3xl bg-cyan-500/10 flex items-center justify-center mb-8'>
<Icon size={32}/>
</div>

<h3 className='text-3xl font-bold'>
{service.title}
</h3>

<p className='text-slate-400 mt-5 leading-relaxed'>
{service.short}
</p>

<button
onClick={()=>setOpenCard(open ? null : index)}
className='mt-8 w-full rounded-full px-7 py-4 font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 inline-flex justify-center items-center gap-3'>
View Details
<motion.div animate={{rotate:open ? 180 : 0}}>
<ChevronDown size={18}/>
</motion.div>
</button>


<AnimatePresence>
{open &&(
<motion.div
initial={{height:0,opacity:0}}
animate={{height:'auto',opacity:1}}
exit={{height:0,opacity:0}}
className='overflow-hidden'>

<div className='mt-8 border-t border-white/10 pt-8 grid gap-4'>
{service.details.map(item=>(
<div key={item} className='flex gap-4 items-center bg-white/5 border border-white/10 rounded-2xl p-4'>
<CheckCircle2 className='text-cyan-300'/>
<span>{item}</span>
</div>
))}

<div className='mt-4 rounded-2xl bg-cyan-500/5 border border-cyan-400/20 p-5 text-slate-300 leading-relaxed'>
This service can be customized based on business requirements, project scope and technology stack.
</div>

</div>

</motion.div>
)}
</AnimatePresence>


</div>

</motion.div>
)
})}

</div>

</section>

</div>
)
}
