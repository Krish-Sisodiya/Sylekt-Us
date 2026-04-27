import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
Code2,
User,
Phone,
Mail,
Building2,
MessageSquare,
ShieldCheck,
Send,
CheckCircle2,
Sparkles
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

export default function BookingPage(){
const [submitted,setSubmitted]=useState(false);
const [message,setMessage]=useState("");

return (
<div className='min-h-screen bg-[#030712] text-white overflow-hidden'>

<div className='absolute top-10 left-0 w-[28rem] h-[28rem] rounded-full bg-cyan-500/10 blur-[170px]' />
<div className='absolute bottom-0 right-0 w-[34rem] h-[34rem] rounded-full bg-blue-500/10 blur-[180px]' />

<section className='relative max-w-5xl mx-auto px-6 md:px-10 py-24'>

<motion.div
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
className='text-center max-w-4xl mx-auto mb-20'>

<div className='mx-auto mb-8 w-24 h-24 rounded-[28px] bg-gradient-to-br from-blue-500/20 to-cyan-400/20 border border-cyan-400/20 flex items-center justify-center shadow-[0_0_50px_rgba(0,255,255,.12)]'>
<Code2 size={44} className='text-cyan-300'/>
</div>

<h1 className='text-5xl md:text-7xl font-bold leading-[1.03]'>
Sylect Us
</h1>

<p className='mt-4 text-cyan-300 text-xl md:text-2xl font-medium'>Book Your Appointment</p>

<p className='mt-6 text-slate-400 text-lg md:text-xl max-w-2xl mx-auto'>
Schedule a consultation for websites, apps, software or digital growth solutions.
</p>

</motion.div>


<div className='rounded-[42px] p-[1px] bg-gradient-to-r from-cyan-400/40 to-blue-500/30'>
<div className='rounded-[42px] bg-[#08172d] border border-white/5 p-8 md:p-14'>

<div className='grid lg:grid-cols-2 gap-14 items-start'>

<div>
<div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 text-cyan-300 mb-8'>
<Sparkles size={16}/> Consultation Form
</div>

<h2 className='text-4xl md:text-6xl font-bold leading-tight'>Let's Discuss Your Project</h2>

<p className='mt-6 text-slate-400 text-lg leading-relaxed'>Fill the form and we will connect to understand your requirement and schedule your appointment.</p>

<div className='grid gap-5 mt-10'>
{['Fast response','Confidential discussion','Custom solutions','Free consultation'].map(item=>(
<div key={item} className='flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-4'>
<CheckCircle2 className='text-cyan-300'/>
<span>{item}</span>
</div>
))}
</div>
</div>


<AnimatePresence mode='wait'>
{!submitted ? (
<motion.form
key='form'
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
className='grid gap-5'
onSubmit={(e)=>{
e.preventDefault();
setSubmitted(true);
}}
>

<div className='relative'>
<User className='absolute left-5 top-5 text-cyan-300' size={18}/>
<input placeholder='Full Name' className='w-full pl-14 rounded-2xl bg-white/5 border border-white/10 py-4 pr-6 outline-none focus:border-cyan-400'/>
</div>

<div className='relative'>
<Phone className='absolute left-5 top-5 text-cyan-300' size={18}/>
<input placeholder='Mobile Number' className='w-full pl-14 rounded-2xl bg-white/5 border border-white/10 py-4 pr-6 outline-none focus:border-cyan-400'/>
</div>

<div className='relative'>
<Mail className='absolute left-5 top-5 text-cyan-300' size={18}/>
<input placeholder='Email Address' className='w-full pl-14 rounded-2xl bg-white/5 border border-white/10 py-4 pr-6 outline-none focus:border-cyan-400'/>
</div>

<div className='relative'>

<div className="
absolute left-5 top-5
w-5 h-5
text-cyan-300
flex items-center justify-center
">
<FaLinkedinIn size={16}/>
</div>

<input
placeholder='LinkedIn Profile (Optional)'
className='
w-full
pl-14
rounded-2xl
bg-white/5
border border-white/10
py-4 pr-6
outline-none
focus:border-cyan-400
'
/>

</div>
<div className='relative'>
<Building2 className='absolute left-5 top-5 text-cyan-300' size={18}/>
<input placeholder='Company Name' className='w-full pl-14 rounded-2xl bg-white/5 border border-white/10 py-4 pr-6 outline-none focus:border-cyan-400'/>
</div>

<div className='relative'>
<MessageSquare className='absolute left-5 top-5 text-cyan-300' size={18}/>
<textarea
rows={5}
maxLength={100}
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder='What work do you need or what is appointment regarding? (100 letters)'
className='w-full pl-14 rounded-2xl bg-white/5 border border-white/10 py-4 pr-6 outline-none focus:border-cyan-400'
/>
<div className='text-right text-sm text-slate-400 mt-2'>
{message.length}/100
</div>
</div>

<label className='flex items-start gap-3 rounded-2xl bg-white/5 border border-white/10 p-5 cursor-pointer'>
<input type='checkbox' className='mt-1'/>
<ShieldCheck className='text-cyan-300 shrink-0' size={18}/>
<span className='text-slate-300 text-sm'>I agree to be contacted regarding this appointment request and accept the privacy terms.</span>
</label>

<button type='submit' className='mt-3 rounded-full px-8 py-5 font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-105 transition inline-flex justify-center items-center gap-3'>
<Send size={18}/> Submit Request
</button>

</motion.form>
):(
<motion.div
key='success'
initial={{opacity:0,scale:.85}}
animate={{opacity:1,scale:1}}
className='rounded-[34px] bg-white/5 border border-cyan-400/20 p-10 text-center'>
<CheckCircle2 className='mx-auto text-cyan-300 mb-6' size={70}/>
<h3 className='text-4xl font-bold'>Appointment Requested</h3>
<p className='text-slate-400 mt-4'>Thanks! Our team will contact you soon to confirm your consultation.</p>
<button onClick={()=>setSubmitted(false)} className='mt-8 px-7 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400'>Submit Another</button>
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