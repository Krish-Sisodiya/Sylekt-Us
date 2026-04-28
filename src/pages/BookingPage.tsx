import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
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
import logo from "/img/sylektusicon.png"; // path adjust kar lena

export default function BookingPage(){

const API_URL=import.meta.env.VITE_API_URL;

const [submitted,setSubmitted]=useState(false);

const [formData,setFormData]=useState({
fullName:"",
mobile:"",
email:"",
linkedin:"",
companyName:"",
message:""
});



const handleChange = (
e: React.ChangeEvent<
HTMLInputElement | HTMLTextAreaElement
>
) => {

const {name,value}=e.target;

setFormData(prev=>({
...prev,
[name]:value
}));

};



const handleSubmit = async (
e: React.FormEvent<HTMLFormElement>
) => {

e.preventDefault();

try{

const response=await fetch(
`${API_URL}/api/appointments`,
{
method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(formData)

}
);

if(response.ok){

setSubmitted(true);

setFormData({
fullName:"",
mobile:"",
email:"",
linkedin:"",
companyName:"",
message:""
});

}

}catch(error){

console.error(error);
alert("Submission Failed");

}

};



return (

<div className='min-h-screen bg-[#030712] text-white overflow-hidden'>

<div className='absolute top-10 left-0 w-[28rem] h-[28rem] rounded-full bg-cyan-500/10 blur-[170px]' />
<div className='absolute bottom-0 right-0 w-[34rem] h-[34rem] rounded-full bg-blue-500/10 blur-[180px]' />

<section className='relative max-w-5xl mx-auto px-6 md:px-10 py-24'>

<motion.div
initial={{ opacity:0, y:30 }}
animate={{ opacity:1, y:0 }}
className="text-center max-w-4xl mx-auto mb-20"
>

<div className="
mx-auto 
w-20 h-20
flex items-center justify-center
overflow-hidden
"
>

{/* Logo Image */}
<img
src={logo}
alt="Sylect Us Logo"
className="w-20 h-20 object-contain"
/>

</div>

<h1 className="text-5xl md:text-7xl font-bold">
Sylect Us
</h1>

<p className="mt-4 text-cyan-300 text-xl">
Book Your Appointment
</p>

</motion.div>



<div className='rounded-[42px] p-[1px] bg-gradient-to-r from-cyan-400/40 to-blue-500/30'>

<div className='rounded-[42px] bg-[#08172d] p-8 md:p-14'>

<div className='grid lg:grid-cols-2 gap-14'>

<div>

<div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 text-cyan-300 mb-8'>
<Sparkles size={16}/>
Consultation Form
</div>

<h2 className='text-4xl md:text-6xl font-bold'>
Let's Discuss Your Project
</h2>

<div className='grid gap-5 mt-10'>
{[
'Fast response',
'Confidential discussion',
'Custom solutions',
'Free consultation'
].map(item=>(
<div
key={item}
className='flex items-center gap-4 rounded-2xl bg-white/5 p-4'
>
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
onSubmit={handleSubmit}
>


<div className='relative'>
<User className='absolute left-5 top-5 text-cyan-300'/>
<input
name="fullName"
value={formData.fullName}
onChange={handleChange}
placeholder='Full Name'
required
className='w-full pl-14 rounded-2xl bg-white/5 border border-white/10 py-4'
/>
</div>



<div className='relative'>
<Phone className='absolute left-5 top-5 text-cyan-300'/>
<input
name="mobile"
value={formData.mobile}
onChange={handleChange}
placeholder='Mobile Number'
required
className='w-full pl-14 rounded-2xl bg-white/5 border border-white/10 py-4'
/>
</div>



<div className='relative'>
<Mail className='absolute left-5 top-5 text-cyan-300'/>
<input
name="email"
type="email"
value={formData.email}
onChange={handleChange}
placeholder='Email Address'
required
className='w-full pl-14 rounded-2xl bg-white/5 border border-white/10 py-4'
/>
</div>



<div className='relative'>

<div className='absolute left-5 top-5 text-cyan-300'>
<FaLinkedinIn/>
</div>

<input
name="linkedin"
value={formData.linkedin}
onChange={handleChange}
placeholder='LinkedIn Profile (Optional)'
className='w-full pl-14 rounded-2xl bg-white/5 border border-white/10 py-4'
/>

</div>



<div className='relative'>
<Building2 className='absolute left-5 top-5 text-cyan-300'/>
<input
name="companyName"
value={formData.companyName}
onChange={handleChange}
placeholder='Company Name'
className='w-full pl-14 rounded-2xl bg-white/5 border border-white/10 py-4'
/>
</div>



<div className='relative'>
<MessageSquare className='absolute left-5 top-5 text-cyan-300'/>

<textarea
name="message"
rows={5}
maxLength={100}
value={formData.message}
onChange={handleChange}
placeholder='Project Requirement'
required
className='w-full pl-14 rounded-2xl bg-white/5 border border-white/10 py-4'
/>

<div className='text-right text-sm text-slate-400 mt-2'>
{formData.message.length}/100
</div>

</div>



<label className='flex items-start gap-3 rounded-2xl bg-white/5 p-5'>
<input type='checkbox' required/>
<ShieldCheck className='text-cyan-300'/>
<span className='text-sm'>
I agree to privacy terms
</span>
</label>



<button
type='submit'
className='rounded-full px-8 py-5 bg-gradient-to-r from-blue-500 to-cyan-400 flex justify-center items-center gap-3'
>
<Send size={18}/>
Submit Request
</button>


</motion.form>

):(

<motion.div
key='success'
initial={{opacity:0,scale:.85}}
animate={{opacity:1,scale:1}}
className='rounded-[34px] bg-white/5 p-10 text-center'
>

<CheckCircle2
className='mx-auto text-cyan-300 mb-6'
size={70}
/>

<h3 className='text-4xl font-bold'>
Appointment Requested
</h3>

<p className='text-slate-400 mt-4'>
Our team will contact you soon.
</p>

<button
onClick={()=>setSubmitted(false)}
className='mt-8 px-7 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400'
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