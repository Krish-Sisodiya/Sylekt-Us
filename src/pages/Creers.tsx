import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  PenTool,
  Video,
  Share2,
  Layers3,
  Sparkles,
  Send,
  Upload,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Cpu,
  Bug,
  GraduationCap,
  Palette,
  Globe,
} from "lucide-react";



const services = [
  {
    title: "UI/UX Designer",
    icon: Palette,
    type: "Full Time",
    desc: "Design premium product experiences and scalable systems.",
  },
  {
    title: "Frontend Developer",
    icon: Code2,
    type: "Full Time",
    desc: "Build high-performance React interfaces.",
  },
  {
    title: "Backend Developer",
    icon: Database,
    type: "Full Time",
    desc: "Create scalable APIs and backend systems.",
  },
  {
    title: "Full Stack Developer",
    icon: Layers3,
    type: "Full Time",
    desc: "Work across frontend, backend and deployment.",
  },
  {
    title: "Java Spring Boot Developer",
    icon: Cpu,
    type: "Remote",
    desc: "Build enterprise-grade Java applications.",
  },
  {
    title: "Graphic Designer",
    icon: PenTool,
    type: "Contract",
    desc: "Craft premium visual assets.",
  },
  {
    title: "Video Editor",
    icon: Video,
    type: "Contract",
    desc: "Create reels and storytelling videos.",
  },
  {
    title: "Social Media Handler",
    icon: Share2,
    type: "Part Time",
    desc: "Handle social growth and campaigns.",
  },
  {
    title: "Animation Designer",
    icon: Sparkles,
    type: "Remote",
    desc: "Create motion graphics and interactions.",
  },
  {
    title: "MySQL Specialist",
    icon: Database,
    type: "Remote",
    desc: "Database architecture and optimization.",
  },
  {
    title: "Debugging Expert",
    icon: Bug,
    type: "Freelance",
    desc: "Fix issues and optimize performance.",
  },
  {
    title: "Internship Program",
    icon: GraduationCap,
    type: "Internship",
    desc: "Learn and grow with live projects.",
  },
];

const perks = [
  {
    icon: Rocket,
    title: "Fast Growth",
    text: "Real-world projects with rapid career growth.",
  },
  {
    icon: ShieldCheck,
    title: "Creative Freedom",
    text: "Work where innovation is valued.",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    text: "Build products for modern digital audiences.",
  },
];

export default function JoinSylectus() {
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);


  type FormType = {
fullName:string;
mobile:string;
email:string;
education:string;
linkedin:string;
lookingFor:string;
coverLetter:string;
};

const [formData,setFormData]=useState<FormType>({
fullName:"",
mobile:"",
email:"",
education:"",
linkedin:"",
lookingFor:"",
coverLetter:""
})

const [resume,setResume]=useState<File | null>(null);

const handleChange = (
e: React.ChangeEvent<
HTMLInputElement | HTMLTextAreaElement
>
) => {

const {name,value}=e.target;

setFormData(prev=>({
...prev,
[name]:value
}));

};

const handleFileChange=(e:React.ChangeEvent<HTMLInputElement>)=>{

if(e.target.files && e.target.files[0]){

const file=e.target.files[0];

if(file.size > 2*1024*1024){
alert("Max file size 2MB");
return;
}

setResume(file);

}
};

const API_URL=import.meta.env.VITE_API_URL;

const handleSubmit=async(
e:React.FormEvent<HTMLFormElement>
)=>{

e.preventDefault();

try{

const data=new FormData();

data.append("fullName",formData.fullName);
data.append("mobile",formData.mobile);
data.append("email",formData.email);
data.append("education",formData.education);
data.append("linkedin",formData.linkedin);
data.append("lookingFor",formData.lookingFor);
data.append("coverLetter",formData.coverLetter);

if(resume){
data.append("resume",resume);
}

const res=await fetch(
`${API_URL}/api/careers`,
{
method:"POST",
body:data
}
);

if(res.ok){
setSubmitted(true);
}

}catch(err){
console.error(err);
alert("Failed");
}

};

  return (
    <div className="relative min-h-screen bg-[#030712] text-white overflow-hidden">
      <div className="fixed top-0 left-0 w-[35rem] h-[35rem] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[35rem] h-[35rem] bg-blue-500/10 blur-[180px] rounded-full pointer-events-none -z-10" />

      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="inline-flex gap-2 items-center px-6 py-3 rounded-full bg-white/5 border border-cyan-400/20 text-cyan-300">
            <Sparkles size={18} /> Join Sylectus Team
          </div>

          <h1 className="mt-10 text-5xl md:text-7xl font-bold leading-tight">
            Build With
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-[length:200%_200%] bg-clip-text text-transparent"
            >
              Creative Tech Minds
            </motion.span>
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mt-20">
          {[
            ["20+", "Open Roles"],
            ["50+", "Projects"],
            ["100%", "Remote"],
            ["∞", "Growth"],
          ].map((item, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4 + i }}
              className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center"
            >
              <h2 className="text-5xl font-bold text-cyan-300">{item[0]}</h2>
              <p className="mt-3 text-slate-400">{item[1]}</p>
            </motion.div>
          ))}
        </div>
      </section>


{/* Card */}

     <section className="max-w-7xl mx-auto px-6 pb-28">

<motion.div
initial="hidden"
whileInView="show"
viewport={{once:true}}
variants={{
hidden:{opacity:0},
show:{
opacity:1,
transition:{
staggerChildren:.08
}
}
}}
className="grid md:grid-cols-2 xl:grid-cols-3 gap-10"
>

{services.map((service)=>{

const Icon=service.icon;

return(

<motion.div
key={service.title}
variants={{
hidden:{opacity:0,y:70},
show:{opacity:1,y:0}
}}
whileHover={{
y:-18,
rotateX:6,
rotateY:-6,
scale:1.03
}}
transition={{
type:"spring",
stiffness:160,
damping:15
}}
className="
group
h-full
rounded-[38px]
p-[1px]
bg-gradient-to-br
from-cyan-400/40
via-blue-500/20
to-cyan-300/20
"
>

<div className="
relative
h-full
min-h-[470px]
rounded-[38px]
bg-[#08172d]/95
backdrop-blur-xl
border border-cyan-400/10
overflow-hidden
p-9
flex flex-col
">

{/* animated top glow */}
<div className="
absolute top-0 left-0
w-full h-[3px]
bg-gradient-to-r
from-transparent
via-cyan-400
to-transparent
opacity-70
"/>


{/* hover sweep */}
<div className="
absolute inset-0
opacity-0
group-hover:opacity-100
transition duration-700
bg-gradient-to-br
from-cyan-500/10
via-transparent
to-blue-500/10
"/>


{/* floating orb */}
<div className="
absolute -right-10 -top-10
w-32 h-32
rounded-full
bg-cyan-400/5
blur-3xl
group-hover:scale-125
transition duration-700
"/>


<div className="
relative z-10
w-20 h-20
rounded-[28px]
bg-gradient-to-br
from-cyan-500/20
to-blue-500/10
border border-cyan-400/20
flex items-center justify-center
mb-8
group-hover:scale-110
transition duration-500
">

<motion.div
animate={{
y:[0,-4,0]
}}
transition={{
repeat:Infinity,
duration:3
}}
>
<Icon size={34}/>
</motion.div>

</div>


<div className="relative z-10 flex-grow">

<h3 className="
text-3xl
font-bold
leading-snug
tracking-tight
">
{service.title}
</h3>

<p className="
text-slate-400
mt-5
leading-relaxed
text-[15px]
">
{service.desc}
</p>


<div className="flex flex-wrap gap-3 mt-7">

<span className="
px-4 py-2
rounded-full
bg-white/5
border border-white/10
text-cyan-300
text-sm
">
{service.type}
</span>

<span className="
px-4 py-2
rounded-full
bg-white/5
border border-white/10
text-sm
">
Growth Role
</span>

</div>

</div>



<motion.button
whileHover={{
scale:1.06,
boxShadow:"0 0 35px rgba(34,211,238,.18)"
}}
whileTap={{scale:.96}}
onClick={()=>{
setSelected(service.title);

setTimeout(()=>{
document
.getElementById("apply-form")
?.scrollIntoView({
behavior:"smooth"
});
},150)

}}
className="
relative z-10
mt-9
rounded-full
px-7 py-4
font-semibold
bg-gradient-to-r
from-blue-500
to-cyan-400
shadow-xl shadow-cyan-500/10
"
>

Apply Now →

</motion.button>

</div>

</motion.div>

)

})}

</motion.div>

</section>




      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {perks.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="rounded-3xl bg-white/5 border border-white/10 p-10"
              >
                <Icon size={45} className="text-cyan-300" />
                <h3 className="text-3xl font-bold mt-6">{item.title}</h3>
                <p className="text-slate-400 mt-4">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Premium Join Form */}

<section id="apply-form" className="max-w-7xl mx-auto px-6 pb-32">

<motion.div
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:1}}
className="
rounded-[42px]
p-[1px]
bg-gradient-to-r
from-cyan-400/40
via-blue-500/30
to-cyan-400/30
shadow-2xl shadow-cyan-500/10
"
>

<div className="
rounded-[42px]
bg-[#08172d]/95
backdrop-blur-xl
p-10 md:p-16
border border-white/5
">

<div className="grid lg:grid-cols-2 gap-16 items-start">

{/* LEFT SIDE */}
<motion.div
initial={{opacity:0,x:-50}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
transition={{delay:.2}}
>

<div className="
inline-flex
items-center
gap-2
px-6 py-3
rounded-full
bg-cyan-500/10
border border-cyan-400/20
text-cyan-300
mb-8
">
<Sparkles size={16}/>
Join Sylectus
</div>


<h2 className="text-5xl md:text-6xl font-bold leading-tight">
{selected
? `Apply for ${selected}`
: "Join The Future Builders"}
</h2>

<p className="mt-6 text-slate-400 text-lg leading-relaxed">
Become part of a creative ecosystem where developers,
designers and innovators build products that matter.
Grow with meaningful projects and ambitious people.
</p>


<div className="grid sm:grid-cols-2 gap-5 mt-10">

{[
"Remote Friendly",
"Flexible Hours",
"Growth Opportunities",
"Live Projects"
].map((item,i)=>(

<motion.div
key={i}
whileHover={{scale:1.04}}
className="
rounded-2xl
bg-white/5
border border-white/10
p-5
flex items-center gap-3
"
>
<CheckCircle2
size={18}
className="text-cyan-300"
/>

<span>{item}</span>

</motion.div>

))}

</div>


<motion.div
animate={{y:[0,-8,0]}}
transition={{repeat:Infinity,duration:5}}
className="
mt-10
rounded-3xl
bg-gradient-to-r
from-cyan-500/10
to-blue-500/10
border border-cyan-400/10
p-7
"
>

<h4 className="text-2xl font-semibold">
Why Join Us?
</h4>

<p className="text-slate-400 mt-4">
Work with premium clients, modern technologies,
creative branding and next-gen digital products.
</p>

</motion.div>

</motion.div>



{/* FORM */}

<AnimatePresence mode="wait">

{!submitted ? (

<motion.form
key="form"
initial={{opacity:0,x:50}}
whileInView={{opacity:1,x:0}}
viewport={{once:true}}
transition={{delay:.3}}
className="grid gap-5"
onSubmit={handleSubmit}
>

{(
[
{name:"fullName",placeholder:"Full Name"},
{name:"mobile",placeholder:"Mobile Number"},
{name:"email",placeholder:"Email"},
{name:"education",placeholder:"Education"},
{name:"linkedin",placeholder:"LinkedIn Profile"},
{name:"lookingFor",placeholder:"What are you looking for?"}
] as {
name: keyof FormType;
placeholder: string;
}[]
).map((field)=>(
<input
key={field.name}
name={field.name}
value={formData[field.name]}
onChange={handleChange}
placeholder={field.placeholder}
required
className="rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-white outline-none focus:border-cyan-400"
/>
))}

<textarea
name="coverLetter"
value={formData.coverLetter}
onChange={handleChange}
rows={5}
required
placeholder="Why should we hire you?"
className="rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-white outline-none focus:border-cyan-400"
/>

<label
className="
rounded-2xl
border-2 border-dashed
border-cyan-400/30
bg-white/5
p-6
flex justify-between
items-center
cursor-pointer
hover:border-cyan-400
transition
"
>

<div className="flex gap-3 items-center">
<Upload size={18}/>
Upload Resume
</div>

<span className="text-cyan-300 text-sm">
PDF / DOC
</span>

<input
type="file"
accept=".pdf,.doc,.docx"
onChange={handleFileChange}
className="hidden"
/>

</label>

<motion.button
type="submit"
whileHover={{
scale:1.03,
boxShadow:'0 0 40px rgba(34,211,238,.25)'
}}
whileTap={{scale:.98}}
className="
rounded-full
py-5
bg-gradient-to-r
from-blue-500
to-cyan-400
font-semibold
inline-flex
items-center
justify-center
gap-3
shadow-xl
"
>
<Send size={18}/>
Submit Application
</motion.button>

</motion.form>

):(

<motion.div
key="success"
initial={{opacity:0,scale:.7}}
animate={{opacity:1,scale:1}}
className="
text-center
rounded-[32px]
bg-white/5
p-14
border border-cyan-400/20
"
>

<CheckCircle2
size={85}
className="mx-auto text-cyan-300 mb-6"
/>

<h3 className="text-4xl font-bold">
Application Submitted
</h3>

<p className="text-slate-400 mt-5">
Thanks for applying.
Our team will review your profile soon.
</p>

<button
onClick={()=>setSubmitted(false)}
className="
mt-8
px-8 py-4
rounded-full
bg-gradient-to-r
from-blue-500
to-cyan-400
"
>
Submit Another
</button>

</motion.div>

)}

</AnimatePresence>


</div>

</div>

</motion.div>

</section>
      
    </div>
  );
}
