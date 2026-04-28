import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
ChevronLeft,
ChevronRight,
Quote
} from "lucide-react";

const aboutData=[
{
id:1,
name:"Krish Sisodiya",
role:"Founder",
image:"/img/krish.png",
desc:"Our new website transformed the way we connect with clients and present our brand."
},

{
id:2,
name:"Kartik Prajapat",
role:"Developer",
image:"/img/kartik.jpeg",
desc:"The automation software improved productivity dramatically and streamlined operations."
},

{
id:3,
name:"Pawan Rajpoot",
role:"Designer",
image:"/img/pawan.png",
desc:"They built our product exactly as we imagined, with exceptional attention to detail."
}
];

export default function AboutSection(){

const [index,setIndex]=useState(0);

const nextSlide=()=>{
setIndex(prev=>(
prev===aboutData.length-1 ? 0 : prev+1
))
};

const prevSlide=()=>{
setIndex(prev=>(
prev===0 ? aboutData.length-1 : prev-1
))
};

const item=aboutData[index];

const nextIndex=(index+1)%aboutData.length;
const prevIndex=(index-1+aboutData.length)%aboutData.length;


return(

<section className="
relative overflow-hidden
py-24 md:py-32
bg-[#020617]
text-white
">

{/* Ambient Glow */}
<div className="
absolute top-0 left-[-120px]
w-[430px] h-[430px]
rounded-full
bg-cyan-500/10
blur-[170px]
"/>

<div className="
absolute bottom-[-100px] right-[-60px]
w-[500px] h-[500px]
rounded-full
bg-blue-500/10
blur-[190px]
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
viewport={{once:true}}
transition={{duration:.9}}
className="
text-center
max-w-4xl mx-auto
mb-20 md:mb-24
"
>

<span className="
inline-flex
px-5 py-2.5
rounded-full
bg-white/5
border border-cyan-400/20
text-cyan-300
text-sm
mb-7
">
Client Testimonials
</span>

<h2 className="
text-4xl
sm:text-5xl
md:text-7xl
font-bold
leading-[1.04]
tracking-[-0.04em]
">
Hear From

<span className="
block mt-2
bg-gradient-to-r
from-blue-400
to-cyan-300
bg-clip-text
text-transparent
">
Our Happy Clients
</span>

</h2>

<p className="
mt-8
text-slate-400
text-base md:text-xl
max-w-2xl mx-auto
leading-relaxed
">
Trusted by founders, startups
and ambitious growing businesses.
</p>

</motion.div>




<div className="
grid lg:grid-cols-2
gap-14 lg:gap-24
items-center
">

{/* LEFT VISUAL */}
<div className="
relative
flex justify-center items-center
min-h-[420px]
md:min-h-[520px]
">

{/* preview left */}
<motion.img
src={aboutData[prevIndex].image}
key={aboutData[prevIndex].id}
initial={{opacity:0}}
animate={{opacity:.25}}
className="
absolute
left-0 md:left-8

w-[120px] sm:w-[160px] md:w-[210px]
h-[170px] sm:h-[220px] md:h-[300px]

object-cover
rounded-[28px]

rotate-[-12deg]
"
/>


{/* preview right */}
<motion.img
src={aboutData[nextIndex].image}
key={aboutData[nextIndex].id}
initial={{opacity:0}}
animate={{opacity:.25}}
className="
absolute
right-0 md:right-8

w-[130px] sm:w-[180px] md:w-[260px]
h-[180px] sm:h-[250px] md:h-[360px]

object-cover
rounded-[28px]

rotate-[12deg]
"
/>



<AnimatePresence mode="wait">

<motion.div
key={item.id}

initial={{
opacity:0,
scale:.8,
rotate:-6
}}

animate={{
opacity:1,
scale:1,
rotate:0
}}

exit={{
opacity:0,
scale:.85,
rotate:6
}}

transition={{
duration:1,
type:"spring",
stiffness:75
}}

className="relative z-20"
>

<div className="
absolute inset-0
rounded-[40px]
bg-cyan-500/10
blur-3xl
"/>

<img
src={item.image}
alt={item.name}
className="
relative
w-full
max-w-[280px]
sm:max-w-[360px]
md:max-w-[430px]

h-[340px]
sm:h-[450px]
md:h-[500px]

object-cover
rounded-[34px]
shadow-2xl
"
/>

</motion.div>

</AnimatePresence>

</div>





{/* RIGHT CONTENT */}
<div className="max-w-lg">

<AnimatePresence mode="wait">

<motion.div
key={item.id+"text"}

initial={{
opacity:0,
x:90
}}

animate={{
opacity:1,
x:0
}}

exit={{
opacity:0,
x:-90
}}

transition={{
duration:.9,
type:"spring"
}}
>

<div className="
w-14 h-14 md:w-16 md:h-16
rounded-2xl
mb-6
bg-gradient-to-r
from-blue-500/20
to-cyan-400/20
flex items-center justify-center
">
<Quote size={30}/>
</div>


<h3 className="
text-3xl
md:text-5xl
font-bold
leading-tight
mb-3
">
{item.name}
</h3>


<p className="
text-cyan-300
text-base md:text-lg
font-medium
mb-8
">
{item.role}
</p>


<div className="
rounded-[26px]
bg-white/[0.03]
border border-white/8
backdrop-blur-xl
p-5 md:p-6
">

<p className="
text-base
md:text-2xl
leading-relaxed
font-light
text-slate-300
">
“{item.desc}”
</p>

</div>

</motion.div>

</AnimatePresence>



{/* Controls */}
<div className="
flex items-center gap-4
mt-8 md:mt-10
">

<button
onClick={prevSlide}
className="
w-14 h-14 md:w-16 md:h-16
rounded-full
bg-white/5
border border-white/10

flex items-center justify-center

hover:bg-cyan-500
hover:scale-110

transition
"
>
<ChevronLeft size={26}/>
</button>

<button
onClick={nextSlide}
className="
w-14 h-14 md:w-16 md:h-16
rounded-full
bg-white/5
border border-white/10

flex items-center justify-center

hover:bg-cyan-500
hover:scale-110

transition
"
>
<ChevronRight size={26}/>
</button>

</div>



{/* Indicators */}
<div className="flex gap-4 mt-8">

{aboutData.map((_,i)=>(

<button
key={i}
onClick={()=>setIndex(i)}

className={`
rounded-full h-3
transition-all duration-500

${index===i
? "w-12 bg-cyan-400"
: "w-3 bg-white/20"}
`}
/>

))}

</div>


</div>

</div>

</div>

</section>

)

}