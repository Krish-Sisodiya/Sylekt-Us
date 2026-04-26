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

interface ServiceItem{
title:string;
desc:string;
icon:JSX.Element;
}

const services:ServiceItem[] = [

{
title:"Web Development",
desc:"High-performance business websites and scalable modern web applications.",
icon:<Code2 size={30}/>
},

{
title:"App Development",
desc:"Android, iOS and cross-platform mobile applications built for growth.",
icon:<Smartphone size={30}/>
},

{
title:"Domain & Hosting",
desc:"Fast hosting, domain setup and secure deployment solutions.",
icon:<Globe size={30}/>
},

{
title:"Custom Software",
desc:"ERP, CRM and enterprise-grade custom software systems.",
icon:<Database size={30}/>
},

{
title:"Cloud Solutions",
desc:"Cloud infrastructure, backups and DevOps automation services.",
icon:<Cloud size={30}/>
},

{
title:"Cyber Security",
desc:"Security hardening, monitoring and protected deployments.",
icon:<ShieldCheck size={30}/>
},

{
title:"UI / UX Design",
desc:"Premium futuristic interfaces with intuitive product experiences.",
icon:<Palette size={30}/>
},

{
title:"AI Integrations",
desc:"Chatbots, automations and intelligent AI-powered workflows.",
icon:<Cpu size={30}/>
}

];


export default function Services():JSX.Element{

return(

<section
id="services"
className="
relative overflow-hidden
py-28 md:py-36
"
>

{/* Glow Background */}

<div className="
absolute top-24 left-10
w-80 h-80 rounded-full
bg-blue-500/10 blur-[150px]
"/>

<div className="
absolute bottom-10 right-10
w-[420px] h-[420px]
rounded-full
bg-green-400/10 blur-[170px]
"/>


<div className="
relative z-10
max-w-7xl mx-auto
px-6 md:px-10
">

{/* Header */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:.8}}
viewport={{once:true}}
className="text-center max-w-4xl mx-auto mb-24"
>

<p className="
inline-flex items-center
px-6 py-3
rounded-full
glass glow-border
text-cyan-300
text-sm md:text-base
font-medium tracking-wide
mb-8
">
Our Services
</p>


<h2 className="
font-bold
text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl
leading-[1.08]
tracking-[-0.03em]
"
>
Digital Solutions For

<span className="
block mt-2
bg-gradient-to-r
from-blue-400
to-green-400
bg-clip-text
text-transparent
">
Future Businesses
</span>

</h2>


<p className="
mt-8
text-base md:text-xl
leading-relaxed
text-slate-400
max-w-2xl mx-auto
">
Everything you need to build, launch,
scale and grow your digital presence.
</p>

</motion.div>




{/* Service Grid */}

<div className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-8 lg:gap-10
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

whileHover={{
y:-12,
scale:1.025
}}

viewport={{once:true}}

className="
group
relative
rounded-[32px]
p-[1px]

bg-gradient-to-br
from-blue-500/40
via-cyan-400/20
to-green-400/30
"
>

<div className="
relative overflow-hidden
h-full min-h-[360px]

rounded-[32px]
bg-[#08172d]

p-8 md:p-9

border border-white/5
backdrop-blur-xl

flex flex-col
">

{/* hover glow */}
<div className="
absolute inset-0
opacity-0
group-hover:opacity-100
transition duration-500

bg-gradient-to-br
from-blue-500/5
to-green-400/5
"/>

<div className="relative z-10 flex flex-col h-full">

<div className="
w-18 h-18
w-[72px] h-[72px]
rounded-3xl

flex items-center justify-center

bg-gradient-to-r
from-blue-500/20
to-green-400/20

mb-8

group-hover:scale-110
transition duration-500
">

{service.icon}

</div>


<h3 className="
text-2xl md:text-[28px]
font-semibold
leading-tight
mb-5
">
{service.title}
</h3>


<p className="
text-slate-400
leading-8
text-[15px] md:text-base
flex-grow
">
{service.desc}
</p>


<div className="
mt-10
inline-flex items-center gap-2

text-cyan-300
font-medium
text-sm tracking-wide

group-hover:translate-x-2
transition
">
Learn More →
</div>

</div>

</div>

</motion.div>

))}

</div>




{/* Bottom CTA */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.7}}
className="mt-24 text-center"
>

<button
className="
px-10 md:px-12
py-4 md:py-5

rounded-full
font-semibold
text-base md:text-lg

bg-gradient-to-r
from-blue-500
to-green-400

shadow-[0_0_40px_rgba(0,255,170,.25)]

hover:scale-105
hover:shadow-[0_0_60px_rgba(0,255,170,.35)]

transition duration-300
"
>
Explore All Solutions
</button>

</motion.div>

</div>

</section>

)

}