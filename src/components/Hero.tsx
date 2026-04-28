import { motion } from "framer-motion";
import {
ChevronRight,
Play,
Sparkles,
Database,
Code2,
Smartphone,
ShieldCheck
} from "lucide-react";

import type { JSX } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero():JSX.Element{

const navigate=useNavigate();

return(

<section className="
relative min-h-screen
flex items-center
overflow-hidden
pt-32 md:pt-40
">

{/* Ambient Glow */}
<div className="
absolute top-20 left-10
w-72 h-72
rounded-full
bg-blue-500/10
blur-[130px]
"/>

<div className="
absolute bottom-0 right-10
w-80 h-80
rounded-full
bg-cyan-400/10
blur-[150px]
"/>


{/* floating particles */}
<div className="absolute inset-0 opacity-20">
<div className="absolute top-40 left-1/4 w-2 h-2 rounded-full bg-cyan-300"/>
<div className="absolute top-64 right-1/3 w-3 h-3 rounded-full bg-blue-400"/>
<div className="absolute bottom-32 left-1/3 w-2 h-2 rounded-full bg-green-400"/>
</div>


<div className="
max-w-7xl mx-auto
px-6 md:px-10
grid lg:grid-cols-2
gap-20
items-center
relative z-10
">

{/* LEFT CONTENT */}
<div>

<motion.div
initial={{opacity:0,y:80}}
animate={{opacity:1,y:0}}
transition={{
duration:1.1,
type:"spring",
stiffness:70
}}
>

{/* Premium Badge */}
<motion.div
initial={{opacity:0,scale:.9}}
animate={{opacity:1,scale:1}}
transition={{delay:.25}}
className="
inline-flex items-center gap-2

px-5 py-2.5
rounded-full

bg-white/[0.04]
border border-cyan-400/20
backdrop-blur-xl

text-cyan-300
text-sm font-medium

mb-8

shadow-[0_0_30px_rgba(0,255,255,.06)]
"
>

<div className="
w-6 h-6
rounded-full
bg-cyan-400/15
flex items-center justify-center
">
<Sparkles size={12}/>
</div>

Future Ready Digital Solutions

</motion.div>



{/* Heading */}
<h1 className="
text-5xl
sm:text-6xl
md:text-7xl
xl:text-[88px]

font-bold
leading-[1]
tracking-[-0.05em]
">

Build Your

<span className="
block mt-2

bg-gradient-to-r
from-blue-400
via-cyan-300
to-green-300

bg-clip-text
text-transparent
">
Business Online
</span>

</h1>



<p className="
mt-7
text-base md:text-xl
text-slate-300
max-w-xl
leading-relaxed
">
Web development, mobile apps,
hosting and custom software
engineered to scale your business.
</p>



{/* Buttons */}
<div className="
flex flex-col sm:flex-row
gap-4 md:gap-5
mt-10
">

<motion.button
onClick={()=>navigate("/booking")}
whileHover={{scale:1.05,y:-5}}
whileTap={{scale:.95}}
className="
group
px-8 py-4
rounded-full
font-semibold
text-white

bg-gradient-to-r
from-blue-500
to-cyan-400

flex items-center justify-center gap-2

shadow-[0_0_35px_rgba(0,255,255,.18)]
"
>
Start Project

<ChevronRight
size={18}
className="group-hover:translate-x-1 transition"
/>

</motion.button>



<motion.button
onClick={()=>navigate("/portfolio")}
whileHover={{scale:1.04,y:-5}}
className="
group
px-8 py-4
rounded-full
border border-cyan-400/20

bg-white/[0.03]
backdrop-blur-xl

flex items-center justify-center gap-3
"
>

<div className="
w-8 h-8
rounded-full
bg-white/5
flex items-center justify-center
group-hover:scale-110
transition
">
<Play size={14}/>
</div>

Watch Demo

</motion.button>

</div>



{/* Compact Premium Stats */}
<div className="
grid grid-cols-2 md:grid-cols-4
gap-3 md:gap-4
mt-12
">

{[
{
number:"50+",
label:"Websites",
icon:<Code2 size={20}/>
},
{
number:"20+",
label:"Apps",
icon:<Smartphone size={20}/>
},
{
number:"100+",
label:"Clients",
icon:<Sparkles size={20}/>
},
{
number:"24/7",
label:"Support",
icon:<ShieldCheck size={20}/>
}

].map((item,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{
delay:i*.1,
duration:.6
}}

whileHover={{
y:-6,
scale:1.03
}}

className="
group
relative
rounded-[20px]
p-[1px]

bg-gradient-to-br
from-blue-500/25
to-cyan-400/15
"
>

<div className="
relative
rounded-[20px]
bg-[#0b1730]
border border-white/8

px-4 py-5 md:px-5 md:py-6
text-center
overflow-hidden
">

<div className="
absolute inset-0
opacity-0
group-hover:opacity-100
transition duration-500

bg-gradient-to-br
from-blue-500/5
to-cyan-400/5
"/>

<div className="relative z-10">

<div className="
w-10 h-10
md:w-11 md:h-11

mx-auto mb-3
rounded-xl

flex items-center justify-center

bg-blue-500/15
text-cyan-300

group-hover:scale-110
transition
">
{item.icon}
</div>

<h3 className="
text-xl md:text-3xl
font-bold
mb-1
text-white
">
{item.number}
</h3>

<p className="
text-[11px]
md:text-sm
font-medium
text-slate-400
tracking-wide
">
{item.label}
</p>

</div>


<div className="
absolute bottom-0 left-0
h-[2px] w-0
group-hover:w-full

bg-gradient-to-r
from-blue-500
to-cyan-400

transition-all duration-500
"/>

</div>

</motion.div>

))}

</div>

</motion.div>
</div>

{/* RIGHT SIDE */}
<div className="relative flex justify-center">


{/* floating code card */}
<motion.div
animate={{y:[0,-18,0]}}
transition={{
repeat:Infinity,
duration:6
}}
className="
absolute
-top-10 left-0
z-20

rounded-3xl
bg-[#0b1e39]
border border-cyan-400/10
backdrop-blur-xl

p-6
w-[320px]
hidden md:block
"
>

<p className="text-cyan-300 mb-4">
function buildSuccess() {"{"}
</p>

<p className="text-slate-300">
const brand = "Your Vision";
</p>

<p className="text-slate-300">
const tech = "Sylect Us";
</p>

<p className="text-green-400">
return scale(brand);
</p>

<p>{"}"}</p>

</motion.div>




{/* Main Mockup */}
<motion.div
animate={{y:[0,-20,0]}}
transition={{
repeat:Infinity,
duration:7
}}
className="
w-full max-w-2xl
rounded-[35px]
p-[1px]

bg-gradient-to-r
from-blue-500
to-cyan-400

shadow-[0_0_50px_rgba(0,180,255,.18)]
"
>

<div className="
bg-[#08172d]
rounded-[35px]
p-8
min-h-[520px]
">

<div className="flex gap-3 mb-8">
<div className="w-4 h-4 rounded-full bg-red-400"/>
<div className="w-4 h-4 rounded-full bg-yellow-400"/>
<div className="w-4 h-4 rounded-full bg-green-400"/>
</div>



<div className="grid grid-cols-2 gap-5">

{/* box 1 */}
<div className="
rounded-3xl
bg-blue-500/10
p-6
">
<Code2 className="mb-4 text-cyan-300"/>
<p className="text-sm text-slate-300">
Frontend Systems
</p>
<p className="text-cyan-300 mt-2">
React + TypeScript
</p>
</div>


{/* box2 */}
<div className="
rounded-3xl
bg-green-400/10
p-6
">
<Database className="mb-4 text-green-300"/>
<p className="text-sm text-slate-300">
Backend APIs
</p>
<p className="text-green-300 mt-2">
Spring / Node
</p>
</div>



{/* big code box */}
<div className="
col-span-2
rounded-3xl
bg-white/[0.03]
border border-white/5
p-8
">

<p className="text-cyan-300">
&lt;h1&gt;We Build Digital Success&lt;/h1&gt;
</p>

<p className="text-slate-400 mt-6">
&lt;p&gt;Your vision, our code.&lt;/p&gt;
</p>

<div className="
mt-8 h-[2px]
bg-gradient-to-r
from-blue-500
to-cyan-400
"/>

</div>

</div>



<div className="
mt-8 flex gap-4
">

<div className="
flex-1 rounded-full
bg-blue-500/10
p-4 flex items-center gap-3
">
<ShieldCheck size={18}/>
Secure
</div>

<div className="
flex-1 rounded-full
bg-green-400/10
p-4 flex items-center gap-3
">
⚡ Fast
</div>

</div>


</div>

</motion.div>



{/* floating badge */}
<motion.div
animate={{y:[0,-15,0]}}
transition={{
repeat:Infinity,
duration:4
}}
className="
absolute
bottom-10 -right-4

rounded-2xl
bg-white/[0.03]
border border-white/8

p-5
"
>

<p className="text-green-400 font-semibold">
100+ Projects Delivered
</p>

</motion.div>


</div>

</div>

</section>

)

}