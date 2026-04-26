import { useEffect, useState, type JSX } from "react";
import { Menu,X,ChevronRight,Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const links = [
{name:"Home", path:"/"},
{name:"Services", path:"/services"},
{name:"Our Clients", path:"/clients"},
{name:"About", path:"/about"},
{name:"Careers", path:"/careers"},
];

export default function Navbar():JSX.Element{

const [open,setOpen]=useState(false);
const [scrolled,setScrolled]=useState(false);

useEffect(()=>{

const onScroll=()=>{
setScrolled(window.scrollY > 50);
};

window.addEventListener("scroll",onScroll);

return ()=>window.removeEventListener("scroll",onScroll);

},[]);



return(

<>

<motion.header
initial={{y:-100,opacity:0}}
animate={{y:0,opacity:1}}
transition={{duration:1}}

className={`
fixed top-0 left-0
w-full z-50
transition-all duration-500

${scrolled
? "bg-[#041120]/85 backdrop-blur-2xl border-b border-cyan-400/20 shadow-[0_0_35px_rgba(0,170,255,.15)]"
: "bg-transparent"
}
`}
>

<div className="
absolute inset-0
bg-gradient-to-r
from-blue-500/5
via-transparent
to-green-400/5
"/>


<div className="
max-w-7xl mx-auto
px-6 md:px-10
py-5

flex items-center justify-between
relative
">

{/* Logo */}

<Link to="/">

<motion.div
whileHover={{scale:1.05}}
className="flex items-center gap-3 cursor-pointer"
>

<motion.div
animate={{
boxShadow:[
'0 0 10px rgba(0,170,255,.4)',
'0 0 30px rgba(0,255,170,.5)',
'0 0 10px rgba(0,170,255,.4)'
]
}}

transition={{
repeat:Infinity,
duration:4
}}

className="
p-3 rounded-xl
border border-cyan-400/30
bg-[#08172d]
"
>

<Code2 className="text-cyan-400"/>

</motion.div>


<div>

<h1 className="text-2xl md:text-3xl font-bold">
<span className="text-white">Sylect</span>{" "}

<span className="
bg-gradient-to-r
from-blue-400
to-green-400
bg-clip-text
text-transparent
">
Us
</span>

</h1>

<p className="
text-[11px]
tracking-[3px]
uppercase
text-slate-400
">
We Code Your Success
</p>

</div>

</motion.div>

</Link>




{/* Desktop Menu */}

<nav className="hidden lg:flex gap-10">

{links.map((item,index)=>(

<motion.div
key={index}
whileHover={{y:-4}}
>

<Link
to={item.path}
className="
relative
font-medium
text-slate-200
group
"
>

{item.name}

<span className="
absolute left-0 -bottom-2
h-[2px]
w-0
group-hover:w-full
transition-all duration-500

bg-gradient-to-r
from-blue-400
to-green-400
"/>

</Link>

</motion.div>

))}

</nav>




<div className="flex items-center gap-4">

<Link to="/booking">

<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:.95}}

className="
hidden md:flex
items-center gap-2

px-6 py-3 rounded-full

bg-gradient-to-r
from-blue-500
to-green-400

font-semibold

shadow-[0_0_25px_rgba(0,255,170,.25)]
"
>

Book a Call

<ChevronRight size={18}/>

</motion.button>

</Link>




<motion.button
whileTap={{scale:.9,rotate:90}}
onClick={()=>setOpen(!open)}

className="
lg:hidden
p-2 rounded-xl
border border-cyan-400/20
bg-white/5
"
>

{open ? <X/> : <Menu/>}

</motion.button>

</div>

</div>

</motion.header>




<AnimatePresence>

{open && (

<motion.div
initial={{opacity:0,y:-40}}
animate={{opacity:1,y:0}}
exit={{opacity:0,y:-40}}

className="
fixed top-24 left-4 right-4
z-40

rounded-3xl overflow-hidden

border border-cyan-400/20
backdrop-blur-2xl
bg-[#07192e]/95

shadow-[0_0_40px_rgba(0,170,255,.15)]
"
>

<div className="
p-8 flex flex-col gap-6
">

{links.map((item,index)=>(

<motion.div
key={index}
initial={{x:-30,opacity:0}}
animate={{x:0,opacity:1}}
transition={{delay:index*.08}}
whileHover={{x:10}}
>

<Link
to={item.path}
onClick={()=>setOpen(false)}

className="
block
text-xl pb-4
border-b border-white/5
hover:text-cyan-300
"
>
{item.name}
</Link>

</motion.div>

))}


<Link to="/contact">

<motion.button
whileHover={{scale:1.03}}
className="
mt-4 py-4 rounded-full

bg-gradient-to-r
from-blue-500
to-green-400

font-semibold
w-full
"
>
Book a Call
</motion.button>

</Link>

</div>

</motion.div>

)}

</AnimatePresence>



<div className="
fixed top-0 left-0
w-full h-[2px]

bg-gradient-to-r
from-transparent
via-cyan-400
to-transparent

opacity-60
"/>

</>

)

}