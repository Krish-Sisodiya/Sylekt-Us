import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import type { JSX } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero(): JSX.Element {

    const navigate = useNavigate();
return(

<section className="
relative min-h-screen
flex items-center
overflow-hidden
pt-36 md:pt-40
">

{/* Background glow blobs */}

<div className="
absolute top-20 left-20
w-72 h-72
rounded-full
bg-blue-500/10 blur-[120px]
"/>

<div className="
absolute bottom-10 right-20
w-80 h-80
rounded-full
bg-green-400/10 blur-[130px]
"/>



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
initial={{opacity:0,y:60}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

<p className="
inline-flex items-center gap-2
px-5 py-2 rounded-full
glass glow-border
text-cyan-300 mb-8
text-sm
">
Future Ready Digital Solutions
</p>


<h1 className="
text-5xl sm:text-6xl
md:text-7xl xl:text-8xl
font-bold
leading-tight
">

Build Your

<span className="
block
bg-gradient-to-r
from-blue-400
to-green-400
bg-clip-text
text-transparent
">

Business Online

</span>

</h1>


<p className="
mt-8
text-lg md:text-xl
text-slate-300
max-w-xl
leading-relaxed
">
Web Development, Mobile Apps,
Hosting and Custom Software
built to scale your business.
</p>



<div className="
flex flex-col sm:flex-row
gap-5 mt-10
">

<motion.button
onClick={()=>navigate("/booking")}

whileHover={{scale:1.05}}
whileTap={{scale:.95}}

className="
px-8 py-4
rounded-full
bg-gradient-to-r
from-blue-500
to-green-400

font-semibold
flex items-center gap-2

shadow-[0_0_30px_rgba(0,255,170,.25)]
"
>

Start Project
<ChevronRight size={20}/>

</motion.button>




<motion.button

onClick={()=>navigate("/portfolio")}

whileHover={{scale:1.04}}

className="
px-8 py-4
rounded-full

glass
border border-cyan-400/20

flex items-center gap-3
"
>

<Play size={18}/>
Watch Demo

</motion.button>

</div>



{/* Services mini row */}

<div className="
grid grid-cols-2 md:grid-cols-4
gap-4 mt-14
">

{[

].map((item,i)=>(

<div
key={i}
className="
glass
rounded-2xl
p-5 text-center
glow-border
hover:-translate-y-2
transition
"
>
<h4 className="font-semibold">
{item}
</h4>

</div>

))}

</div>


</motion.div>

</div>




{/* RIGHT SIDE */}

<div className="relative flex justify-center">


{/* Floating code block */}

<motion.div

animate={{y:[0,-20,0]}}

transition={{
repeat:Infinity,
duration:6
}}

className="
absolute
-top-12 left-0
z-20

glass
rounded-3xl
p-6

w-[320px]
hidden md:block
glow-border
"

>

<p className="text-cyan-300 mb-4">
function buildSuccess() {"{"}
</p>

<p className="text-slate-300">
let idea = \"Your Business\";
</p>

<p className="text-slate-300">
let solution = \"Sylect Us\";
</p>

<p className="text-green-400">
return success();
</p>

<p>{"}"}</p>

</motion.div>




{/* Main Laptop Mockup */}

<motion.div

animate={{y:[0,-25,0]}}

transition={{
repeat:Infinity,
duration:7
}}

className="
w-full max-w-2xl
rounded-[35px]
p-1

bg-gradient-to-r
from-blue-500
to-green-400

shadow-[0_0_50px_rgba(0,180,255,.2)]
"

>

<div className="
bg-[#08172d]
rounded-[35px]
p-8
min-h-[520px]
">

<div className="
flex gap-3 mb-8
">
<div className="w-4 h-4 rounded-full bg-red-400"/>
<div className="w-4 h-4 rounded-full bg-yellow-400"/>
<div className="w-4 h-4 rounded-full bg-green-400"/>
</div>


<div className="
grid grid-cols-2 gap-5
">

<div className="
h-40 rounded-3xl
bg-blue-500/20
"/>

<div className="
h-40 rounded-3xl
bg-green-400/20
"/>

<div className="
col-span-2
h-56 rounded-3xl
bg-white/5
p-8
">

<p className="text-cyan-300">
&lt;h1&gt;We Build Digital Success&lt;/h1&gt;
</p>

<p className="text-slate-400 mt-6">
&lt;p&gt;Your vision, our code&lt;/p&gt;
</p>

</div>

</div>


<div className="
mt-8 flex gap-4
">

<div className="
h-14 flex-1 rounded-full
bg-blue-500/20
"/>

<div className="
h-14 flex-1 rounded-full
bg-green-400/20
"/>

</div>


</div>

</motion.div>


{/* Floating badge */}

<motion.div

animate={{
y:[0,-15,0]
}}

transition={{
repeat:Infinity,
duration:4
}}

className="
absolute
bottom-10 -right-4

glass
rounded-2xl
p-5
glow-border
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