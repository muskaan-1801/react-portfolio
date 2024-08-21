import { FaReact } from 'react-icons/fa';    // React icon
import { SiMongodb } from 'react-icons/si';  // MongoDB icon
import { FaNodeJs } from 'react-icons/fa';   // Node.js icon
import { FaJava } from 'react-icons/fa';     // Java icon
import { SiMysql } from 'react-icons/si';    // SQL (MySQL) icon
import { SiPython } from 'react-icons/si';      // Python icon
import { SiCplusplus } from 'react-icons/si';   // C++ icon

import {animate, motion} from "framer-motion";

const iconVariants = (duration) => ({
  initial : {y:-10},
  animate : {
    y: [10,-10],
    transition : {
      duration : duration,
      ease : "linear",
      repeat : Infinity,
      repeatType : "reverse"
    },
  },
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial = {{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial = {{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(3)}
        initial = "inital"
        animate = "animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaReact className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial = "inital"
        animate = "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial = "inital"
        animate = "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-[#339933]"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial = "inital"
        animate = "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-7xl text-blue-700"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial = "inital"
        animate = "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl text-[#4479A1]"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial = "inital"
        animate = "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPython className="text-7xl text-yellow-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial = "inital"
        animate = "animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCplusplus className="text-7xl text-[#00599C]"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
