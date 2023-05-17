import Modal from "./Modal";
import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { projects } from "../constants"
import {fadeIn ,textVariant} from "../utils/motion"
import { useState } from "react";

const ProjectCard=({index,name,description,tags,image,source_code_link}) =>{
  const [modalOn, setModalOn] = useState(false);
  const clickedModal = () => {
    console.log("hello")
    setModalOn(true)
  }
  return(
    <motion.div  variants={fadeIn("up","spring",index*0.5,0.75)} 
   >
<Tilt 
options={{
  max:45,
  scale:1,
  speeed:450
}}
className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full "
>
<div className="relative w-full h-[230px]"  onClick={clickedModal}>
  <img
  src={image}
  alt={name}
  className="w-full h-full object-contain rounded-2xl"
 />
  <div className="absolute inset-0 flex justify-end card-img_hover">
    <div onClick={()=>{window.open(source_code_link,"_blank")}}
  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center curser-pointer">
    <img src={github} alt="github" className="w-1/2 h-1/2 object-contain"/>
  </div>

  </div>
</div>
<div className="mt-5 ">
  <h3 className="text-white font-bold text-[24px] ">{name}</h3>
  <p className="mt-2 text-secoundary text-[14px]">{description}</p>
</div>
<div className="mt-4 flex flex-wrap gap-2">
  {tags.map((tag)=>{
    return (
      <p key={tag.name} className={`text-[14px] ${tag.color}`}>{tag.name}</p>
    )
  })}

</div>
</Tilt>

{modalOn && < Modal setModalOn={setModalOn} name={name} />}

    </motion.div>

  )

}










const Works = () => {
  return (
    <div className="ml-12" >
    <motion.div  id="projects" variants={textVariant()}>
      <p className={styles.sectionSubText}>
        My Work
      </p>
      <h2 className={styles.sectionHeadText}>Projects</h2>
    </motion.div>
  <div className="w-full flex">
    <motion.p variants={fadeIn("","",0.1,1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
Following projects showcases my skills and experience through my last projects  while learning in Meraki bootCamp.Each project is briefly described with links to code repositories 
    </motion.p>

  </div>
  <div className="mt-20 flex flex-wrap gap-7">
    {projects.map((project,index)=>{
     return(
      <ProjectCard key={`project-${index}`}
      index={index}
      {...project}/>
     )
    })}
  </div>
    </div>
  )
}

export default Works