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

{ name:"React", icon:SiReact },
{ name:"TypeScript", icon:SiTypescript },
{ name:"JavaScript", icon:SiJavascript },
{ name:"Spring", icon:SiSpring },
{ name:"Node.js", icon:SiNodedotjs },
{ name:"Python", icon:SiPython },
{ name:"MySQL", icon:SiMysql },
{ name:"PostgreSQL", icon:SiPostgresql },
{ name:"MongoDB", icon:SiMongodb },
{ name:"Docker", icon:SiDocker },
{ name:"Kubernetes", icon:SiKubernetes },
{ name:"Flutter", icon:SiFlutter },
{ name:"Tailwind", icon:SiTailwindcss }

];



type RowProps={
items:TechItem[];
reverse?:boolean;
};



function TechRow(
{
items,
reverse=false
}:RowProps
):JSX.Element{

return(

<div className="marquee-wrap">

<div
className={
reverse
? "marquee-track reverse"
: "marquee-track"
}
>

{[...items,...items].map((tech,index)=>{

const Icon=tech.icon;

return(

<div
key={index}
className="tech-card"
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
py-28
overflow-hidden
relative
">

<div className="
max-w-7xl mx-auto
px-6 md:px-10
text-center mb-16
">

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
>

<p className="
inline-block
px-5 py-2
rounded-full
glass glow-border
text-cyan-300
mb-6
">
Top Technologies We Use
</p>


<h2 className="
text-5xl md:text-7xl
font-bold
leading-tight
">

Powered By

<span className="
block
bg-gradient-to-r
from-blue-400
to-green-400
bg-clip-text
text-transparent
">

Modern Tech Stack

</span>

</h2>


<p className="
mt-6
text-lg
text-slate-400
max-w-2xl mx-auto
">
Original technology logos with
continuous motion animation.
</p>

</motion.div>

</div>



<TechRow items={technologies}/>

<div className="mt-8">

<TechRow
items={technologies}
reverse
/>

</div>


</section>

)

}