import { motion } from "framer-motion";

import {
SiReact,
SiTypescript,
SiJavascript,
SiSpring,
SiMysql,
SiMongodb,
SiDocker,
SiKubernetes,
SiFlutter,
SiPython,
SiNodedotjs,
SiTailwindcss,
SiPostgresql
} from "react-icons/si";

import type { IconType } from "react-icons";
import type { JSX } from "react";

interface TechItem{
name:string;
icon:IconType;
}

const technologies:TechItem[]=[
{name:"React",icon:SiReact},
{name:"TypeScript",icon:SiTypescript},
{name:"JavaScript",icon:SiJavascript},
{name:"Spring",icon:SiSpring},
{name:"Node.js",icon:SiNodedotjs},
{name:"Python",icon:SiPython},
{name:"MySQL",icon:SiMysql},
{name:"PostgreSQL",icon:SiPostgresql},
{name:"MongoDB",icon:SiMongodb},
{name:"Docker",icon:SiDocker},
{name:"Kubernetes",icon:SiKubernetes},
{name:"Flutter",icon:SiFlutter},
{name:"Tailwind",icon:SiTailwindcss}
];


type RowProps={
items:TechItem[];
reverse?:boolean;
};

function TechRow({items,reverse=false}:RowProps):JSX.Element{

return(

<div className="overflow-hidden py-3">

<div className={reverse ? "marquee-track reverse":"marquee-track"}>

{[...items,...items].map((tech,index)=>{

const Icon=tech.icon;

return(
<div
key={index}
className="
tech-pill
group
"
>

<Icon className="tech-icon"/>

<span>
{tech.name}
</span>

</div>
)

})}

</div>

</div>

)

}



export default function TechStack():JSX.Element{

return(

<section className="
relative overflow-hidden
py-24 md:py-32
">

{/* background glow */}
<div className="
absolute top-0 left-[-100px]
w-[350px] h-[350px]
bg-blue-500/10
rounded-full
blur-[150px]
"/>

<div className="
absolute bottom-0 right-[-100px]
w-[420px] h-[420px]
bg-cyan-400/10
rounded-full
blur-[180px]
"/>


<div className="
relative z-10
max-w-7xl mx-auto
px-4 md:px-8
text-center
mb-14 md:mb-20
">

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.8}}
>

<p className="
inline-flex
px-5 py-2.5
rounded-full
border border-cyan-400/20
bg-white/5
text-cyan-300
text-sm
mb-6
">
Top Technologies We Use
</p>


<h2 className="
text-4xl
sm:text-5xl
md:text-7xl
font-bold
leading-[1.05]
tracking-[-0.04em]
">

Powered By

<span className="
block mt-2
bg-gradient-to-r
from-blue-400
to-cyan-400
bg-clip-text
text-transparent
">
Modern Tech Stack
</span>

</h2>


<p className="
mt-7
text-slate-400
text-base md:text-xl
max-w-2xl mx-auto
leading-relaxed
">
Built using modern technologies powering
high-performance digital products.
</p>

</motion.div>

</div>



<TechRow items={technologies}/>

<div className="mt-5 md:mt-8">
<TechRow
items={technologies}
reverse
/>
</div>


<style>{`

.marquee-track{
display:flex;
width:max-content;
gap:22px;
animation:scrollLeft 32s linear infinite;
}

.marquee-track.reverse{
animation:scrollRight 34s linear infinite;
}

@keyframes scrollLeft{
0%{transform:translateX(0)}
100%{transform:translateX(-50%)}
}

@keyframes scrollRight{
0%{transform:translateX(-50%)}
100%{transform:translateX(0)}
}

.tech-pill{
display:flex;
align-items:center;
gap:12px;

padding:14px 22px;
border-radius:18px;

background:rgba(255,255,255,.04);
backdrop-filter:blur(16px);

border:1px solid rgba(255,255,255,.08);

min-width:max-content;

transition:.4s ease;
}

.tech-pill:hover{
transform:translateY(-6px) scale(1.03);
border-color:rgba(34,211,238,.45);
box-shadow:0 0 30px rgba(34,211,238,.08);
}

.tech-icon{
font-size:28px;
color:#67e8f9;
transition:.4s ease;
}

.tech-pill:hover .tech-icon{
transform:rotate(12deg) scale(1.12);
}

.tech-pill span{
font-weight:600;
font-size:15px;
color:white;
white-space:nowrap;
}

@media(max-width:768px){

.marquee-track{
gap:14px;
animation-duration:20s;
}

.tech-pill{
padding:10px 15px;
border-radius:14px;
gap:9px;
}

.tech-icon{
font-size:20px;
}

.tech-pill span{
font-size:12px;
}

}

`}</style>


</section>

)

}