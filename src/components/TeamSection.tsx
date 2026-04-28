import { motion } from "framer-motion";
import {
FaGithub,
FaLinkedin,
FaInstagram
} from "react-icons/fa";

const teamMembers = [
{
name:"Krish Sisodiya",
role:"Founder & Lead Developer",
img:"/img/krish.png",
linkedin:"https://linkedin.com/in/krish-sisodiya",
github:"https://github.com/krishsisodiya",
instagram:"https://www.instagram.com/masterkrish2.0/"
},
{
name:"Pawan Rajpoot",
role:"Full Stack Developer",
img:"/img/pawan.png",
linkedin:"https://www.linkedin.com/in/pawan-rajpoot-160394351/",
github:"https://github.com/pr771434-lgtm",
instagram:"https://www.instagram.com/pawan_rajpoot.316"
},
{
name:"Kartik Prajapat",
role:"Backend Developer",
img:"/img/kartik.jpeg",
linkedin:"https://linkedin.com/in/kartik",
github:"https://github.com/kartik",
instagram:"https://instagram.com/kartik"
},
{
name:"Brajesh Kamle",
role:"Co-Founder & UI/UX",
img:"/img/brajesh.jpeg",
linkedin:"https://linkedin.com/in/brajesh",
github:"https://github.com/brajesh",
instagram:"https://instagram.com/brajesh"
}
];

export default function TeamSection(){

return(

<section className="
relative overflow-hidden
py-24 md:py-32
bg-[#020617]
">

{/* Background Glow */}
<div className="
absolute top-0 left-[-100px]
w-[400px] h-[400px]
bg-cyan-500/10
rounded-full blur-[160px]
"/>

<div className="
absolute bottom-[-120px] right-[-80px]
w-[500px] h-[500px]
bg-blue-500/10
rounded-full blur-[180px]
"/>


<div className="
relative z-10
max-w-7xl mx-auto
px-4 md:px-8
">

{/* Heading */}
<motion.div
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:.8}}
className="text-center max-w-4xl mx-auto mb-20"
>

<h2 className="
text-4xl md:text-7xl
font-bold
leading-[1.03]
tracking-[-0.04em]
text-white
">
Creative Minds Behind

<span className="
block mt-2
bg-gradient-to-r
from-cyan-300
to-blue-500
bg-clip-text
text-transparent
">
Digital Innovation
</span>

</h2>

</motion.div>




{/* Team Grid */}
<div className="
grid
grid-cols-2
md:grid-cols-2
xl:grid-cols-4
gap-3 sm:gap-5 md:gap-8
">

{teamMembers.map((member,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:70}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{
duration:.8,
delay:index*.1
}}
whileHover={{y:-10}}
className="group relative"
>

{/* Glow */}
<div className="
absolute -inset-2
rounded-[30px]
opacity-0
group-hover:opacity-100
transition duration-700
bg-gradient-to-r
from-cyan-500/20
to-blue-500/20
blur-2xl
"/>


<div className="
relative
h-[260px]
sm:h-[320px]
md:h-[470px]
overflow-hidden
rounded-[22px] md:rounded-[30px]
border border-white/10
bg-[#08172d]
">

<img
src={member.img}
alt={member.name}
className="
w-full h-full
object-cover
grayscale
group-hover:grayscale-0
group-hover:scale-110
transition duration-[1200ms]
"
/>

{/* subtle overlay */}
<div className="
absolute inset-0
bg-gradient-to-t
from-black/20
to-transparent
"/>


{/* Info Panel */}
<div className="
absolute
left-2 right-2
sm:left-3 sm:right-3
md:left-4 md:right-4

bottom-2 sm:bottom-3 md:bottom-4

rounded-xl md:rounded-2xl
bg-black/30 md:bg-white/8
backdrop-blur-lg
border border-white/10

px-3 sm:px-4 md:px-5
py-3 sm:py-4 md:py-5

translate-y-0
md:translate-y-40
md:group-hover:translate-y-0

opacity-100
md:opacity-0
md:group-hover:opacity-100

transition duration-700
z-50
">

<h3 className="
text-[13px]
sm:text-base
md:text-2xl
font-bold
text-white
mb-1
leading-tight
">
{member.name}
</h3>

<p className="
text-[10px]
sm:text-xs
md:text-base
text-cyan-300
mb-2 md:mb-4
leading-tight
">
{member.role}
</p>


<div className="
flex gap-2 md:gap-3
relative z-[999]
pointer-events-auto
">

<a
href={member.linkedin}
target="_blank"
rel="noopener noreferrer"
onClick={(e)=>e.stopPropagation()}
className="
w-6 h-6
sm:w-7 sm:h-7
md:w-10 md:h-10

rounded-full
bg-white/10
border border-white/10
hover:bg-cyan-500/20

flex items-center justify-center
transition
pointer-events-auto
"
>
<FaLinkedin size={10}/>
</a>


<a
href={member.github}
target="_blank"
rel="noopener noreferrer"
onClick={(e)=>e.stopPropagation()}
className="
w-6 h-6
sm:w-7 sm:h-7
md:w-10 md:h-10

rounded-full
bg-white/10
border border-white/10
hover:bg-cyan-500/20

flex items-center justify-center
transition
pointer-events-auto
"
>
<FaGithub size={10}/>
</a>


<a
href={member.instagram}
target="_blank"
rel="noopener noreferrer"
onClick={(e)=>e.stopPropagation()}
className="
w-6 h-6
sm:w-7 sm:h-7
md:w-10 md:h-10

rounded-full
bg-white/10
border border-white/10
hover:bg-cyan-500/20

flex items-center justify-center
transition
pointer-events-auto
"
>
<FaInstagram size={10}/>
</a>

</div>

</div>



<div className="
absolute inset-0
rounded-[22px] md:rounded-[30px]
border border-white/10
group-hover:border-cyan-400/50
transition duration-500
pointer-events-none
"/>

</div>

</motion.div>

))}

</div>

</div>

</section>

)

}