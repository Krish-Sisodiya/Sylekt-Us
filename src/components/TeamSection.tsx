import { motion } from "framer-motion";
import {
FaGithub,
FaLinkedin,
FaInstagram
} from "react-icons/fa";

const teamMembers = [
{
name:"Krish Sisodiya",
role:"Founder",
img:"/img/krish.png"
},
{
name:"Pawan Rajpoot",
role:"Lead Designer",
img:"/img/pawan.png"
},
{
name:"Kartik Prajapat",
role:"Lead Developer",
img:"/img/kartik.jpeg"
},
{
name:"Brajesh Kamle",
role:"Frontennd Engineer",
img:"/img/brajesh.jpeg"
}
];


export default function TeamSection(){

return(

<section className="
relative overflow-hidden
py-28 md:py-36
bg-[#030712]
">

{/* Background Glow */}

<div className="
absolute top-20 left-0
w-[420px] h-[420px]
bg-cyan-500/10 rounded-full
blur-[180px]
"/>

<div className="
absolute bottom-0 right-0
w-[500px] h-[500px]
bg-blue-500/10 rounded-full
blur-[180px]
"/>



<div className="
max-w-7xl mx-auto
px-6 md:px-10
relative z-10
">

{/* Heading */}

<motion.div
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:.8}}
viewport={{once:true}}
className="
text-center
max-w-4xl mx-auto
mb-24
"
>

<p className="
inline-flex
px-6 py-3
rounded-full
border border-cyan-400/20
bg-white/5
text-cyan-300
text-sm md:text-base
font-medium
mb-8
">
Meet Our Team
</p>


<h2 className="
text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl
font-bold
leading-[1.05]
tracking-[-0.03em]
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


<p className="
text-slate-400
mt-8
text-lg md:text-xl
leading-relaxed
max-w-2xl mx-auto
">
A passionate team crafting premium products,
digital experiences and scalable solutions.
</p>

</motion.div>




{/* Team Cards */}

<div className="
grid
md:grid-cols-2
xl:grid-cols-4
gap-8 lg:gap-10
">

{teamMembers.map((member,index)=>(

<motion.div
key={index}

initial={{
opacity:0,
y:70
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*.1,
duration:.7
}}

viewport={{once:true}}

whileHover={{
y:-12
}}

className="group relative"
>

{/* Outer Glow */}

<div className="
absolute -inset-1
rounded-[34px]

opacity-0
group-hover:opacity-100

bg-gradient-to-r
from-cyan-500/30
to-blue-500/30

blur-2xl
transition duration-700
"/>



<div className="
relative
overflow-hidden
rounded-[34px]
h-[580px]

bg-[#08172d]
border border-white/5

backdrop-blur-xl
">

{/* Image */}

<img
src={member.img}
alt={member.name}

className="
w-full h-full
object-cover

grayscale
group-hover:grayscale-0

group-hover:scale-[1.12]

transition duration-1000 ease-out
"
/>



{/* Overlays */}

<div className="
absolute inset-0
bg-gradient-to-t
from-black/95
via-black/30
to-transparent
"/>


<div className="
absolute inset-0
opacity-0
group-hover:opacity-100
transition duration-700

bg-gradient-to-t
from-cyan-500/10
to-transparent
"/>




{/* Glass Info Panel */}

<div className="
absolute
left-6 right-6 bottom-6

rounded-3xl
bg-white/5
backdrop-blur-xl

border border-white/10

px-6 py-6

transition duration-500
group-hover:-translate-y-3
">

<h3 className="
text-3xl md:text-[34px]
font-bold
leading-tight
text-white
mb-2
">
{member.name}
</h3>


<p className="
text-slate-300
group-hover:text-cyan-300
text-lg
transition
mb-6
">
{member.role}
</p>



{/* Social Icons */}

<div className="
flex gap-4
opacity-0
translate-y-5
group-hover:opacity-100
group-hover:translate-y-0
transition duration-500
">

<div className="
w-10 h-10 rounded-full
bg-white/10
hover:bg-cyan-500/20
flex items-center justify-center
transition
">
<FaLinkedin size={18}/>
</div>

<div className="
w-10 h-10 rounded-full
bg-white/10
hover:bg-cyan-500/20
flex items-center justify-center
transition
">
<FaGithub size={18}/>
</div>

<div className="
w-10 h-10 rounded-full
bg-white/10
hover:bg-cyan-500/20
flex items-center justify-center
transition
">
<FaInstagram size={18}/>
</div>

</div>
</div>



{/* Animated Border */}

<div className="
absolute inset-0
rounded-[34px]

border border-white/10

group-hover:border-cyan-400/50
transition duration-500
"/>

</div>

</motion.div>

))}

</div>




{/* Bottom CTA */}

<motion.div
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
className="
text-center
mt-24
"
>

<button className="
px-10 py-5
rounded-full

font-semibold
text-base md:text-lg

bg-gradient-to-r
from-blue-500
to-cyan-400

shadow-[0_0_40px_rgba(0,255,255,.2)]

hover:scale-105
transition
">
Meet Full Team
</button>

</motion.div>


</div>

</section>

)

}