import { useState } from "react";
import { motion } from "framer-motion";
import {
Send,
User,
Mail,
Phone,
MessageSquare,
Sparkles
} from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";

interface FormData{
name:string;
mobile:string;
email:string;
linkedin:string;
message:string;
}

export default function JoiningForm(){

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
?form.message.trim().split(/\s+/).filter(Boolean).length
:0;

const handleSubmit=(e:React.FormEvent)=>{
e.preventDefault();
alert("Submitted Successfully 🚀");
};

const inputStyle=`
w-full
bg-white/[0.03]
border border-cyan-500/15

rounded-2xl
px-14 py-5

text-white
placeholder:text-slate-500

outline-none
backdrop-blur-xl

transition duration-500

focus:border-cyan-400
focus:shadow-[0_0_30px_rgba(34,211,238,.18)]
`;

return(

<section className="
relative overflow-hidden
min-h-screen
bg-[#020617]
py-24 md:py-32
">

{/* Ambient glows */}
<div className="absolute inset-0 opacity-30">

<motion.div
animate={{
x:[-150,900,-150],
y:[0,120,-60]
}}
transition={{
duration:18,
repeat:Infinity,
ease:"linear"
}}
className="
absolute
h-72 w-72
rounded-full
bg-cyan-500/20
blur-3xl
"/>

<motion.div
animate={{
x:[900,-200,900],
y:[50,-80,50]
}}
transition={{
duration:22,
repeat:Infinity,
ease:"linear"
}}
className="
absolute right-0 top-32
h-96 w-96
rounded-full
bg-blue-500/20
blur-3xl
"/>

</div>



<div className="
relative z-10
max-w-7xl mx-auto
px-6 md:px-10
grid lg:grid-cols-2
gap-16 items-center
">

{/* Left Intro */}
<motion.div
initial={{opacity:0,x:-60}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
transition={{duration:.9}}
>

<div className="
inline-flex items-center gap-2

px-5 py-2.5
rounded-full

bg-white/5
border border-cyan-400/20

text-cyan-300
mb-8
">

<Sparkles size={14}/>
Join Sylekt Us

</div>


<h1 className="
text-5xl
sm:text-6xl
md:text-7xl

font-bold
leading-[1.03]
tracking-[-0.04em]
text-white
">

Let's Build Something

<span className="
block mt-2
bg-gradient-to-r
from-cyan-300
to-blue-500
bg-clip-text
text-transparent
">
Amazing Together
</span>

</h1>


<p className="
mt-8
text-base md:text-xl
text-slate-400
leading-relaxed
max-w-xl
">
Tell us your project vision,
startup idea or digital requirement
and we'll get back to you.
</p>


<div className="
grid grid-cols-2
gap-4 mt-12
max-w-lg
">

{[
"Fast Response",
"Expert Team",
"Custom Solutions",
"End-to-End Support"
].map((item,i)=>(

<div
key={i}
className="
rounded-2xl
bg-white/[0.03]
border border-white/8
p-5
text-sm md:text-base
font-medium
"
>
{item}
</div>

))}

</div>

</motion.div>




{/* Form Card */}
<motion.form
onSubmit={handleSubmit}

initial={{opacity:0,scale:.96}}
whileInView={{opacity:1,scale:1}}
viewport={{once:true}}

className="
relative
rounded-[36px]

p-8 md:p-12

border border-white/10
bg-white/[0.04]
backdrop-blur-2xl

shadow-2xl
overflow-hidden
"
>

{/* animated glow border */}
<div className="
absolute inset-0
rounded-[36px]

bg-gradient-to-r
from-cyan-500/10
to-blue-500/10
animate-pulse
"/>


<div className="
relative z-10
grid md:grid-cols-2
gap-7
">

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
<FaLinkedinIn
className="
absolute left-5 top-5
text-cyan-300
"
/>

<input
name="linkedin"
value={form.linkedin}
onChange={handleChange}
placeholder="LinkedIn Profile"
className={inputStyle}
/>

</div>


<div className="md:col-span-2 relative">

<MessageSquare
className="
absolute left-5 top-5
text-cyan-300
"
/>

<textarea
name="message"
rows={6}
value={form.message}
onChange={handleChange}
placeholder="Describe your requirement (100 words max)"
className={inputStyle+" resize-none"}
required
/>

<div className="
mt-3
text-right
text-cyan-300
text-sm
">
{wordCount}/{maxWords} words
</div>

</div>




<div className="
md:col-span-2
flex justify-center
pt-4
">

<motion.button
whileHover={{
scale:1.04,
y:-4
}}
whileTap={{scale:.97}}

className="
group
relative
overflow-hidden

px-12 py-5
rounded-full

text-lg font-semibold
text-white

bg-gradient-to-r
from-cyan-500
to-blue-600

shadow-[0_0_35px_rgba(34,211,238,.3)]
"
>

<motion.span
animate={{x:["-120%","120%"]}}
transition={{
repeat:Infinity,
duration:2.5,
ease:"linear"
}}
className="
absolute inset-y-0
w-24
bg-white/20
skew-x-12
"/>

<span className="
relative flex items-center gap-3
">
Submit Request
<Send className="
group-hover:translate-x-1
transition
"/>
</span>

</motion.button>

</div>


</div>

</motion.form>

</div>

</section>

)

}