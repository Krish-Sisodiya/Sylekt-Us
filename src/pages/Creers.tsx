import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
Briefcase,
Code2,
PenTool,
Database,
Share2,
Video,
Send,
Upload,
Sparkles,
CheckCircle2
} from "lucide-react";
import { FaFigma } from "react-icons/fa";

const jobs = [
{
title:"React Developer",
icon:Code2,
type:"Full Time",
location:"Remote / Hybrid",
exp:"1-3 Years",
desc:"Build modern React & TypeScript interfaces with premium UX."
},

{
title:"UI/UX Designer",
icon:FaFigma,
type:"Full Time",
location:"Remote",
exp:"2+ Years",
desc:"Design product experiences and scalable design systems."
},

{
title:"Graphic Designer",
icon:PenTool,
type:"Contract",
location:"Remote",
exp:"1+ Years",
desc:"Create visual assets and digital campaign creatives."
},

{
title:"Full Stack Developer",
icon:Briefcase,
type:"Full Time",
location:"Hybrid",
exp:"2-4 Years",
desc:"Work across frontend, backend and deployment pipelines."
},

{
title:"Backend Developer",
icon:Database,
type:"Full Time",
location:"Remote",
exp:"2+ Years",
desc:"Build APIs and scalable backend services."
},

{
title:"Social Media Handler",
icon:Share2,
type:"Part Time",
location:"Remote",
exp:"1+ Years",
desc:"Manage social growth and brand communication."
},

{
title:"Video Editor",
icon:Video,
type:"Contract",
location:"Remote",
exp:"1+ Years",
desc:"Create premium reels and storytelling videos."
}

];

export default function CareersPage(){

const [selected,setSelected]=useState<string | null>(null);
const [submitted,setSubmitted]=useState(false);


return(

<div className="min-h-screen bg-[#030712] text-white overflow-hidden">

<div className="absolute top-10 left-0 w-[28rem] h-[28rem] bg-cyan-500/10 rounded-full blur-[170px]" />
<div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-blue-500/10 rounded-full blur-[190px]" />



<section className="relative max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-24">

<motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
className="text-center max-w-5xl mx-auto mb-24"
>

<div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/20 bg-white/5 text-cyan-300 mb-8">
<Sparkles size={16}/>
Join Our Team
</div>

<h1 className="text-5xl md:text-7xl font-bold leading-[1.03]">
Build Your Career With

<span className="block mt-2 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
Creative Tech Minds
</span>

</h1>

<p className="mt-8 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
We are hiring designers, developers and creators.
</p>

</motion.div>



<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

{jobs.map((job,i)=>{

const IconComponent = job.icon;

return(

<motion.div
key={job.title}
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{delay:i*.08}}
viewport={{once:true}}
whileHover={{y:-10}}
className="group rounded-[34px] p-[1px] bg-gradient-to-br from-cyan-400/40 to-blue-500/30"
>

<div className="rounded-[34px] bg-[#08172d] border border-white/5 p-8 h-full flex flex-col">

<div className="w-16 h-16 rounded-3xl bg-cyan-500/10 flex items-center justify-center mb-8">
<IconComponent size={32}/>
</div>

<h3 className="text-3xl font-bold">
{job.title}
</h3>

<p className="text-slate-400 mt-5 flex-grow">
{job.desc}
</p>


<div className="flex flex-wrap gap-3 mt-7">

<span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-300">
{job.type}
</span>

<span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
{job.exp}
</span>

<span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
{job.location}
</span>

</div>


<button
onClick={()=>{
setSelected(job.title);

setTimeout(()=>{
document
.getElementById("apply-form")
?.scrollIntoView({behavior:"smooth"});
},150)

}}

className="mt-8 rounded-full px-7 py-4 font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-105 transition"
>

Apply Now

</button>

</div>

</motion.div>

)

})}

</div>

</section>



{/* Application Form */}

<section
id="apply-form"
className="max-w-6xl mx-auto px-6 md:px-10 pb-28"
>

<div className="rounded-[42px] p-[1px] bg-gradient-to-r from-cyan-400/40 to-blue-500/30">

<div className="rounded-[42px] bg-[#08172d] border border-white/5 p-8 md:p-14">

<div className="grid lg:grid-cols-2 gap-14">

<div>

<div className="inline-flex px-6 py-3 rounded-full bg-white/5 text-cyan-300 mb-8">
Application Form
</div>

<h2 className="text-4xl md:text-6xl font-bold">
{selected
? `Apply for ${selected}`
: "Select A Role To Apply"}
</h2>

<p className="mt-6 text-slate-400">
Share your details and resume.
</p>

</div>



<AnimatePresence mode="wait">

{!submitted ? (

<motion.form
key="form"
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
className="grid gap-5"
onSubmit={(e)=>{
e.preventDefault();
setSubmitted(true);
}}
>

<input
placeholder="Full Name"
className="rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-white outline-none"
/>

<input
placeholder="Education"
className="rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-white outline-none"
/>

<input
placeholder="LinkedIn URL"
className="rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-white outline-none"
/>

<input
placeholder="What are you looking for?"
className="rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-white outline-none"
/>

<textarea
rows={5}
placeholder="Why should we hire you?"
className="rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-white outline-none"
/>


<label className="rounded-2xl border border-dashed border-cyan-400/30 bg-white/5 p-6 flex items-center gap-3 cursor-pointer">
<Upload size={18}/>
Upload Resume

<input
type="file"
className="hidden"
/>

</label>



<button
type="submit"
className="mt-2 rounded-full px-8 py-5 font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 inline-flex justify-center items-center gap-3"
>
<Send size={18}/>
Submit Application
</button>

</motion.form>

):(

<motion.div
key="success"
initial={{opacity:0,scale:.8}}
animate={{opacity:1,scale:1}}
className="rounded-[32px] p-10 bg-white/5 border border-cyan-400/20 text-center"
>

<CheckCircle2
size={70}
className="mx-auto text-cyan-300 mb-6"
/>

<h3 className="text-4xl font-bold">
Application Submitted
</h3>

<p className="text-slate-400 mt-4">
Thanks for applying.
</p>

<button
onClick={()=>setSubmitted(false)}
className="mt-8 px-7 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
>
Submit Another
</button>

</motion.div>

)}

</AnimatePresence>


</div>

</div>

</div>

</section>

</div>

)

}