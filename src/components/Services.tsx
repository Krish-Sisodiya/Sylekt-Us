import { motion } from "framer-motion";
import {
Code2,
Smartphone,
Globe,
Database,
Cloud,
ShieldCheck,
Palette,
Cpu
} from "lucide-react";

import type { JSX } from "react";
import { useNavigate } from "react-router-dom";

interface ServiceItem{
title:string;
desc:string;
icon:JSX.Element;
}

const services:ServiceItem[]=[

{
title:"Web Development",
desc:"Scalable modern business websites.",
icon:<Code2 size={26}/>
},

{
title:"App Development",
desc:"Android and iOS apps for growth.",
icon:<Smartphone size={26}/>
},

{
title:"Domain & Hosting",
desc:"Secure hosting and deployment.",
icon:<Globe size={26}/>
},

{
title:"Custom Software",
desc:"Enterprise software systems.",
icon:<Database size={26}/>
},

{
title:"Cloud Solutions",
desc:"Cloud and DevOps automation.",
icon:<Cloud size={26}/>
},

{
title:"Cyber Security",
desc:"Protected secure deployments.",
icon:<ShieldCheck size={26}/>
},

{
title:"UI / UX Design",
desc:"Premium futuristic interfaces.",
icon:<Palette size={26}/>
},

{
title:"AI Integrations",
desc:"Automation and AI workflows.",
icon:<Cpu size={26}/>
}

];

export default function Services():JSX.Element{
    
    const navigate = useNavigate();

return(

<section
id="services"
className="
relative overflow-hidden
py-24 md:py-32
"
>

{/* Background Glow */}

<div className="
absolute top-10 left-0
w-[350px] h-[350px]
rounded-full
bg-blue-500/10
blur-[150px]
"/>

<div className="
absolute bottom-0 right-0
w-[420px] h-[420px]
rounded-full
bg-cyan-400/10
blur-[170px]
"/>


<div className="
relative z-10
max-w-7xl mx-auto
px-4 md:px-8
">

{/* Header */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:.8}}
viewport={{once:true}}
className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
>

<p className="
inline-flex
px-5 py-2.5
rounded-full
border border-cyan-400/20
bg-white/5
text-cyan-300
text-sm
font-medium
mb-7
">
Our Services
</p>

<h2 className="
font-bold
text-4xl
sm:text-5xl
md:text-7xl
leading-[1.05]
tracking-[-0.04em]
">
Digital Solutions For

<span className="
block mt-2
bg-gradient-to-r
from-blue-400
to-cyan-400
bg-clip-text
text-transparent
">
Future Businesses
</span>

</h2>

<p className="
mt-8
text-slate-400
max-w-2xl mx-auto
text-base md:text-xl
leading-relaxed
">
Everything needed to build,
launch and scale digitally.
</p>

</motion.div>




{/* Services Grid */}

<div className="
grid
grid-cols-2
lg:grid-cols-4
gap-4 md:gap-7
">

{services.map((service,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{
delay:index*.08,
duration:.6
}}
viewport={{once:true}}

whileHover={{
y:-10,
scale:1.03
}}

className={`
group relative
rounded-[26px]
p-[1px]

bg-gradient-to-br
from-blue-500/30
via-cyan-400/15
to-green-400/25

${index>5 ? "hidden lg:block" : ""}
`}
>

<div className="
relative
overflow-hidden
rounded-[26px]

bg-[#08172d]
border border-white/5

p-5 md:p-7

min-h-[250px]
md:min-h-[310px]

flex flex-col
">

{/* Hover Glow */}
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
w-[58px] h-[58px]
md:w-[68px] md:h-[68px]

rounded-2xl
mb-6

flex items-center justify-center

bg-gradient-to-r
from-blue-500/20
to-cyan-400/20

group-hover:scale-110
group-hover:rotate-6

transition duration-500
">

{service.icon}

</div>


<h3 className="
text-lg
md:text-2xl
font-semibold
leading-tight
mb-4
group-hover:text-cyan-300
transition
">
{service.title}
</h3>


<p className="
text-slate-400
text-sm md:text-base
leading-6 md:leading-7
">
{service.desc}
</p>

</div>


{/* bottom accent line */}
<div className="
absolute bottom-0 left-0
h-[3px] w-0
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




{/* CTA */}

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
className="text-center mt-16 md:mt-24"
>

<button
onClick={()=>navigate("/services")}
className="
px-9 md:px-12
py-4 md:py-5

rounded-full
font-semibold
text-base md:text-lg
text-white

bg-gradient-to-r
from-blue-500
to-cyan-400

shadow-[0_0_40px_rgba(0,255,255,.2)]

hover:scale-105
hover:shadow-[0_0_60px_rgba(0,255,255,.3)]

transition
"
>
Explore Solutions →
</button>

</motion.div>

</div>

</section>

)

}