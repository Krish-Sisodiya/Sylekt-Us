import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
ChevronLeft,
ChevronRight,
Quote
} from "lucide-react";

const aboutData = [
{
id:1,
name:"Krish Sisodiya",
role:"Founder",
image:"../../public/img/krish.png",
desc:"Our new website has transformed the way we connect with our clients."
},

{
id:2,
name:"Kartik Parajapt",
role:"Devloper",
image:"../../public/img/kartik.jpeg",
desc:"The software automation solution improved productivity dramatically."
},

{
id:3,
name:"Pawan Rajpoot",
role:"Degainer",
image:"../../public/img/pawan.png",
desc:"They built our product exactly how we imagined."
}
];


export default function AboutSection(){

const [index,setIndex]=useState(0);

const nextSlide=()=>{
setIndex(prev=>
prev===aboutData.length-1 ? 0 : prev+1
)
}

const prevSlide=()=>{
setIndex(prev=>
prev===0 ? aboutData.length-1 : prev-1
)
}

const item=aboutData[index];

const nextIndex =
(index + 1) % aboutData.length;

const prevIndex =
(index - 1 + aboutData.length) % aboutData.length;


return(

<section className="
relative overflow-hidden
py-28 md:py-36
bg-[#030712]
text-white
">

{/* background glow */}

<div className="
absolute top-20 left-0
w-[420px] h-[420px]
bg-cyan-500/10
rounded-full blur-[180px]
"/>

<div className="
absolute bottom-0 right-0
w-[500px] h-[500px]
bg-blue-500/10
rounded-full blur-[180px]
"/>


<div className="
max-w-7xl mx-auto
px-6 md:px-10
relative z-10
">

{/* heading */}

<div className="
text-center
max-w-4xl mx-auto
mb-24
">

<p className="
inline-flex
px-6 py-3
rounded-full
border border-cyan-400/20
bg-white/5
text-cyan-300
text-sm md:text-base
mb-8
">
Client Testimonials
</p>


<h2 className="
text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl
font-bold
leading-[1.05]
tracking-[-0.03em]
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
text-lg md:text-xl
leading-relaxed
max-w-2xl mx-auto
">
Trusted by startups, founders and growing businesses.
</p>

</div>




<div className="
grid lg:grid-cols-2
gap-16 lg:gap-24
items-center
">


{/* LEFT IMAGE STACK */}

<div className="
relative
flex justify-center
items-center
min-h-[650px]
">


{/* back preview left */}
<motion.img
key={aboutData[prevIndex].id}
src={aboutData[prevIndex].image}
className="
absolute
left-0 md:left-8
w-[260px]
h-[360px]
rounded-[30px]
object-cover
opacity-30
rotate-[-10deg]
"
/>


{/* back preview right */}
<motion.img
key={aboutData[nextIndex].id}
src={aboutData[nextIndex].image}
className="
absolute
right-0 md:right-8
w-[260px]
h-[360px]
rounded-[30px]
object-cover
opacity-30
rotate-[10deg]
"
/>


<AnimatePresence mode="wait">

<motion.div
key={item.id}
initial={{
opacity:0,
scale:.82,
rotate:-4
}}

animate={{
opacity:1,
scale:1,
rotate:0
}}

exit={{
opacity:0,
scale:.85,
rotate:4
}}

transition={{
duration:.8,
type:"spring",
stiffness:90
}}

className="relative z-20"
>

<div className="
absolute inset-0
bg-cyan-400/10
blur-3xl rounded-[40px]
"/>

<img
src={item.image}
alt={item.name}
className="
relative
w-full
max-w-[560px]
h-[620px]
object-cover
rounded-[38px]
shadow-2xl
"
/>

</motion.div>

</AnimatePresence>

</div>





{/* RIGHT CONTENT */}

<div className="max-w-xl">

<AnimatePresence mode="wait">

<motion.div
key={item.id+"text"}

initial={{
opacity:0,
x:70
}}

animate={{
opacity:1,
x:0
}}

exit={{
opacity:0,
x:-70
}}

transition={{
duration:.7,
type:"spring"
}}
>

<div className="
w-20 h-20
rounded-3xl
bg-gradient-to-r
from-blue-500/20
to-cyan-400/20

flex items-center justify-center
mb-8
">
<Quote size={34}/>
</div>


<h3 className="
text-4xl md:text-6xl
font-bold
leading-tight
mb-4
">
{item.name}
</h3>

<p className="
text-cyan-300
text-lg md:text-xl
font-medium
mb-10
">
{item.role}
</p>


<p className="
text-xl md:text-3xl
leading-relaxed
text-slate-300
font-light
">
“{item.desc}”
</p>

</motion.div>

</AnimatePresence>




{/* controls */}

<div className="
flex items-center gap-5
mt-14
">

<button
onClick={prevSlide}
className="
w-16 h-16
rounded-full
bg-white/5
border border-white/10

flex items-center justify-center

hover:bg-cyan-500
hover:scale-105

transition
"
>
<ChevronLeft size={28}/>
</button>


<button
onClick={nextSlide}
className="
w-16 h-16
rounded-full
bg-white/5
border border-white/10

flex items-center justify-center

hover:bg-cyan-500
hover:scale-105

transition
"
>
<ChevronRight size={28}/>
</button>

</div>



{/* indicators */}

<div className="flex gap-4 mt-10">

{aboutData.map((_,i)=>(

<button
key={i}
onClick={()=>setIndex(i)}

className={`
rounded-full h-3
transition-all duration-500

${index===i
? "w-14 bg-cyan-400"
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