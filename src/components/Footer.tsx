import { motion } from "framer-motion";
import {
FaLinkedinIn,
FaGithub,
FaInstagram,
FaXTwitter
} from "react-icons/fa6";

import {
Mail,
Phone,
MapPin,
ArrowUpRight
} from "lucide-react";

const services=[
"Web Development",
"App Development",
"UI/UX Design",
"Custom Software",
"Cloud Solutions"
];

const links=[
"About",
"Projects",
"Pricing",
"Process",
"Contact"
];

export default function Footer(){

return(

<footer className="relative bg-black text-white overflow-hidden pt-28">

{/* Animated background */}
<div className="absolute inset-0 opacity-20">

<motion.div
animate={{
x:[-200,900,-200],
y:[0,120,-50]
}}
transition={{
duration:22,
repeat:Infinity,
ease:"linear"
}}
className="absolute h-80 w-80 bg-cyan-500/20 rounded-full blur-3xl"
/>

<motion.div
animate={{
x:[900,-300,900],
y:[50,-100,50]
}}
transition={{
duration:28,
repeat:Infinity,
ease:"linear"
}}
className="absolute right-0 top-20 h-96 w-96 bg-blue-500/20 rounded-full blur-3xl"
/>

</div>


<div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">


{/* CTA Section */}
<div className="
rounded-[40px]
border border-white/10
bg-white/5
backdrop-blur-2xl
p-10 md:p-16
mb-20
flex flex-col lg:flex-row
justify-between items-center gap-8
">

<div>

<h2 className="text-4xl md:text-6xl font-bold leading-tight">
Let's Build Your

<span className="
block
bg-gradient-to-r
from-cyan-400
to-blue-500
bg-clip-text
text-transparent
">
Next Big Idea
</span>

</h2>

<p className="text-slate-400 mt-5 text-lg max-w-xl">
We build scalable products and premium digital experiences.
</p>

</div>


<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:.96}}
className="
group
px-10 py-5
rounded-full
bg-gradient-to-r
from-cyan-500
to-blue-600
shadow-[0_0_30px_rgba(34,211,238,.35)]
flex items-center gap-3
font-semibold
"
>

Start Project

<ArrowUpRight
className="
group-hover:translate-x-1
group-hover:-translate-y-1
transition
"
/>

</motion.button>

</div>



{/* Footer Grid */}
<div className="
grid md:grid-cols-2 lg:grid-cols-4
gap-14
pb-16
border-b border-white/10
">


{/* Brand */}
<div>

<h3 className="text-3xl font-bold mb-5">
Sylekt <span className="text-cyan-400">Us</span>
</h3>

<p className="text-slate-400 leading-relaxed mb-8">
Building futuristic software products and digital solutions.
</p>


<div className="flex gap-4">

{[
<FaLinkedinIn/>,
<FaGithub/>,
<FaInstagram/>,
<FaXTwitter/>
].map((icon,i)=>(

<motion.a
key={i}
whileHover={{y:-6}}
className="
w-12 h-12
rounded-full
bg-white/5
border border-white/10
hover:border-cyan-400
flex items-center justify-center
text-cyan-300
transition
"
>

{icon}

</motion.a>

))}

</div>

</div>



{/* Services */}
<div>

<h4 className="text-xl font-semibold mb-6">
Services
</h4>

<ul className="space-y-4 text-slate-400">
{services.map((item,i)=>(
<li
key={i}
className="hover:text-cyan-300 cursor-pointer transition"
>
{item}
</li>
))}
</ul>

</div>



{/* Links */}
<div>

<h4 className="text-xl font-semibold mb-6">
Quick Links
</h4>

<ul className="space-y-4 text-slate-400">
{links.map((item,i)=>(
<li
key={i}
className="hover:text-cyan-300 cursor-pointer transition"
>
{item}
</li>
))}
</ul>

</div>



{/* Contact */}
<div>

<h4 className="text-xl font-semibold mb-6">
Contact
</h4>

<div className="space-y-5 text-slate-400">

<div className="flex gap-3 items-center">
<Mail size={18} className="text-cyan-400"/>
hello@sylektus.com
</div>

<div className="flex gap-3 items-center">
<Phone size={18} className="text-cyan-400"/>
+91 7389812435
</div>

<div className="flex gap-3 items-start">
<MapPin size={18} className="text-cyan-400 mt-1"/>
Indore, India
</div>

</div>


<div className="mt-8">

<p className="mb-4 text-slate-300">
Newsletter
</p>

<div className="
flex
rounded-full
overflow-hidden
border border-white/10
bg-white/5
">

<input
placeholder="Your email"
className="
flex-1
bg-transparent
px-5 py-4
outline-none
"
/>

<button className="
px-6
bg-cyan-500
hover:bg-cyan-400
transition
">
Join
</button>

</div>

</div>

</div>

</div>



{/* Bottom */}
<div className="
py-8
flex flex-col md:flex-row
justify-between items-center
gap-4
text-slate-500 text-sm
">

<p>
© 2026 Sylekt Us. All Rights Reserved.
</p>

<div className="flex gap-8">
<span className="hover:text-cyan-300 transition cursor-pointer">
Privacy
</span>

<span className="hover:text-cyan-300 transition cursor-pointer">
Terms
</span>

<span className="hover:text-cyan-300 transition cursor-pointer">
Cookies
</span>
</div>

</div>

</div>

</footer>

)

}