// import React from "react";
// import { Laptop, GitBranch, ExternalLink } from "lucide-react";
// import { motion } from "framer-motion";

// const Projects = () => {

//   // slide-up

//   const slideUp = {
//     hidden: {
//       opacity: 0,
//       y: 60,
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };

//   // left

//   const slideLeft = {
//     hidden: {
//       opacity:0,
//       x:-80,
//       scale: 0.96,
//     },
//     show:{
//       opacity:1,
//       x:0,
      
//       transition:{
//         duration:0.7,
//         ease: [0.22, 1, 0.36, 1],
//       },
//     },
//   };

//   // right

//   const slideRight ={
//     hidden:{
//       opacity:0,
//       x:80,
//       scale: 0.96,
//     },
//     show:{
//       opacity:1,
//       x:0,
//       scale: 1,
//       transition:{
//         duration:0.7,
//         ease:[0.22, 1, 0.36, 1],
//       },
//     },
//   };

//   const container = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };


//     return (
//         <section id='projects' className="pt-28 pb-20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 min-h-screen">
//             <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col items-center justify-center mb-16 text-center px-4">

//                 <motion.span variants={slideUp} className='text-blue-500 tracking-wider text-base sm:text-lg md:text-xl'>MY WORK</motion.span>

//                 <motion.h2 variants={slideUp} className='text-2xl sm:text-3xl md:text-5x md:text-5xl mt-2 mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-wider font-semibold'>Featured Projects</motion.h2>

//                 <motion.div variants={slideUp} className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></motion.div>

//             </motion.div>

//             {/* grid */}

//             <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch">

//                 {/* grid-1 */}

//                 <motion.div variants={slideLeft} className="relative group">

//                     {/* glow */}

//                     <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>

//                 <div className=" relative h-full p-5 sm:p-6 md:p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700">

//                     {/* icon */}

//                     <div className="flex flex-row justify-between">

//                     <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-4 text-white">
//                         <Laptop className='w-6 h-6'/>
//                     </div>

//                     <div className="flex gap-2">
//                         <a href="https://rolematchstudio.netlify.app/" target="_blank" rel="noopener noreferrer"
//                            className="w-10 h-10 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-xl mb-4 text-white hover:border-blue-500 hover:rotate-5 hover:scale-110 transition-all duration-300">
//                             <ExternalLink className='w-4 h-4' />
//                             </a>
//                     <a href="https://github.com/kushB645/ORDER" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-xl mb-4 text-white hover:border-purple-500 hover:rotate-5 hover:scale-110 transition-all duration-300">
//                         <GitBranch className='w-4 h-4'/>
//                     </a>
//                     </div>

//                     </div>

//                     <h3 className='text-white text-xl mb-3 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 '>RoleMatchStudio - Career Recommendation System</h3>

//                     <p className='text-slate-400 mb-6 leading-relaxed tracking-wider text-left'>Developed a web-based career guidance platform that recommends suitable career paths based on users’ skills, interests, and personality traits.</p>

//                     <div className='flex flex-wrap gap-2'>

//                         <div className="text-slate-300 text-sm border border-slate-700 bg-slate-800/50 px-3 py-1 rounded-full">React.js</div>

//                         <div className="text-slate-300 text-sm border border-slate-700 bg-slate-800/50 px-3 py-1 rounded-full">JavaScript</div>

//                         <div className="text-slate-300 text-sm border border-slate-700 bg-slate-800/50 px-3 py-1 rounded-full">CSS3</div>

//                         <div className="text-slate-300 text-sm border border-slate-700 bg-slate-800/50 px-3 py-1 rounded-full">REST API</div>
//                     </div>
//                 </div>
//             </motion.div>



//             {/* githuvb */}

//             <motion.div initial="hidden" whileInView="show" viewport={{ once: true,             margin: "-100px" }} variants={slideUp} className="mt-12 text-center">

//                 <motion.a href="https://github.com/Arohiyadav1008" target="_blank" rel="noopener noreferrer" className="inline-flex gap-2 justify-center items-center border border-slate-700 rounded-full px-8 py-3 text-white hover:border-blue-500 hover:bg-slate-800/50 hover:scale-105 transition-all duration-300">
//                 <GitBranch className="w-5 h-5  text-white"/>
//                 View More on GitHub
//                 </motion.a>

//             </motion.div>

//         </section>
//     )
// };

// export default Projects;
