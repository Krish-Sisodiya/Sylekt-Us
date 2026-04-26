import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";

interface FormData {
  name: string;
  mobile: string;
  email: string;
  linkedin: string;
  message: string;
}

export default function JoiningForm() {

const [form,setForm]=useState<FormData>({
name:"",
mobile:"",
email:"",
linkedin:"",
message:""
});

const maxWords=100;

const handleChange=(
e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>
)=>{
const {name,value}=e.target;

if(name==="message"){
const words=value.trim().split(/\s+/).filter(Boolean);
if(value.trim() && words.length>maxWords) return;
}

setForm({...form,[name]:value});
};

const wordCount=form.message.trim()
? form.message.trim().split(/\s+/).filter(Boolean).length
:0;

const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault();
alert("Submitted Successfully 🚀");
};

const inputStyle=`
w-full
bg-white/5
border border-cyan-500/20
rounded-2xl
px-14 py-5
text-white
outline-none
backdrop-blur-xl
transition duration-500
focus:border-cyan-400
focus:shadow-[0_0_25px_rgba(34,211,238,.25)]
`;

return(

<section className="min-h-screen bg-black relative overflow-hidden py-24">

{/* animated glowing background */}
<div className="absolute inset-0 opacity-30">

<motion.div
animate={{x:[-150,900,-150],y:[0,120,-50]}}
transition={{duration:18,repeat:Infinity,ease:"linear"}}
className="absolute h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
/>

<motion.div
animate={{x:[900,-200,900],y:[50,-80,50]}}
transition={{duration:22,repeat:Infinity,ease:"linear"}}
className="absolute right-0 top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
/>

</div>


<div className="max-w-5xl mx-auto px-6 relative z-10">

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
className="text-center mb-16"
>

<div className="inline-block px-6 py-3 rounded-full border border-cyan-400/30 text-cyan-300 mb-8">
Welcome To Sylekt Us
</div>

<h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
Let's Build Something
<span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
Amazing Together
</span>
</h1>

<p className="mt-6 text-slate-400 text-lg">
Tell us what you're looking for and we’ll contact you.
</p>

</motion.div>



<motion.form
onSubmit={handleSubmit}
initial={{opacity:0,scale:.95}}
whileInView={{opacity:1,scale:1}}
viewport={{once:true}}
className="
relative
rounded-[36px]
p-8 md:p-14
border border-white/10
bg-white/5
backdrop-blur-2xl
shadow-2xl
"
>

<div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"/>

<div className="relative z-10 grid md:grid-cols-2 gap-8">

<div className="relative">
<User className="absolute left-5 top-5 text-cyan-300"/>
<input
name="name"
value={form.name}
onChange={handleChange}
placeholder="Full Name"
className={inputStyle}
required
/>
</div>


<div className="relative">
<Phone className="absolute left-5 top-5 text-cyan-300"/>
<input
name="mobile"
value={form.mobile}
onChange={handleChange}
placeholder="Mobile Number"
className={inputStyle}
required
/>
</div>


<div className="relative">
<Mail className="absolute left-5 top-5 text-cyan-300"/>
<input
type="email"
name="email"
value={form.email}
onChange={handleChange}
placeholder="Email Address"
className={inputStyle}
required
/>
</div>


<div className="relative">
<FaLinkedinIn className="absolute left-5 top-5 text-cyan-300"/>
<input
name="linkedin"
value={form.linkedin}
onChange={handleChange}
placeholder="LinkedIn Profile Link"
className={inputStyle}
/>
</div>


<div className="md:col-span-2 relative">
<MessageSquare className="absolute left-5 top-5 text-cyan-300"/>

<textarea
name="message"
rows={6}
value={form.message}
onChange={handleChange}
placeholder="What are you looking for? (100 words max)"
className={inputStyle + " resize-none pt-5"}
required
/>

<div className="mt-3 text-right text-cyan-300 text-sm">
{wordCount}/{maxWords} words
</div>

</div>



<div className="md:col-span-2 flex justify-center pt-6">

<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:.97}}
className="
group
relative
overflow-hidden
px-12 py-5
rounded-full
text-xl font-semibold
bg-gradient-to-r
from-cyan-500
to-blue-600
text-white
shadow-[0_0_35px_rgba(34,211,238,.45)]
"
>

<motion.span
animate={{x:["-120%","120%"]}}
transition={{
repeat:Infinity,
duration:2.4,
ease:"linear"
}}
className="
absolute inset-y-0
w-24
bg-white/20
skew-x-12
"
/>

<span className="relative flex items-center gap-3">
Submit Request
<Send className="group-hover:translate-x-1 transition"/>
</span>

</motion.button>

</div>

</div>
</motion.form>

</div>

</section>

)

}