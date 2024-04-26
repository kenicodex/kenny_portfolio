// import { Box, Typography } from '@mui/material'
import React from 'react'
import { TbBrandHtml5, TbBrandCss3, TbBrandJavascript,  } from 'react-icons/tb'
import { GrReactjs } from 'react-icons/gr'
import { SiRedux, SiTypescript } from 'react-icons/si'
// import { motion } from "framer-motion";
import './style.css'

function Skills() {
  // const dots = ['.', '.', '.']
  const skills = [
    { icon: <TbBrandHtml5 size={'8rem'} />, lang: 'HTML', des: "" },
    { icon: <TbBrandCss3 size={'8rem'} />, lang: 'CSS', des: "" },
    { icon: <TbBrandJavascript size={'8rem'} />, lang: 'JavaScript', des: "" },
    { icon: <SiTypescript size={'8rem'} />, lang: 'TypeScript', des: "" },
    { icon: <GrReactjs size={'8rem'} />, lang: 'React', des: "" },
    { icon: <SiRedux size={'8rem'} />, lang: 'Redux Toolkit' }]
  return (

    // <motion.div
    //     initial={{ y: 400, opacity: 0, rotate: 90 }} whileInView={{ y: 0, opacity: 1, rotate: 0 }} viewport={{ once: true }} transition={{ delay: .5, ease: "easeInOut", }} >
    //     <Box component="div" sx={{ width: { xs: "95%", md: "95%" }, p: "10px", mx: "auto", height: "auto", my: "10px" }} className="rounded border">
    //         <Typography sx={{ transform: "rotate('-90deg')" }} fontSize="30px" color={'white'} fontFamily={"open sans"}>
    //             I can use {dots.map((x, i) => <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5, duration: 2 * i, repeat: 100 }}>{x}</motion.span>)}
    //         </Typography>
    //         <Box sx={{ pl: 10 }} >
    //             {skills.map(x => {
    //                 return (<Typography color='white' contentEditable> <span className='text-primary'>{`>`} </span> console.<span className='text-warning'>log</span>
    //                     <span className='text-primary'>(</span>'{x}'<span className='text-primary'>)</span>;
    //                     <div className='pl-3' contentEditable={false}>{x}</div>
    //                 </Typography>)
    //             })}
    //         </Box>

    //     </Box>
    // </motion.div>
    <>
      {/* ======= Featured Services Section ======= */}
      <section id="featured-services" className="featured-services">
        <div className="container" data-aos="fade-up">
          <div className="flex justify-evenly ">
            {skills.map(x => {
              return (
               <>
                {/* <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                  <div className="icon-box" data-aos="fade-up" data-aos-delay={100} style={{ height: '80%', width: '100%', margin: '1rem' }}> */}
                    <div className="icon  " style={{ textAlign: 'center' }}>
                      {x.icon}
                    </div>
                    <h4 className="title" style={{ textAlign: 'center' }}>
                      {/* <a href="/">{x.lang}</a> */}
                    </h4>
             
                  {/* </div>
                </div> */}
               </>
              )
            })}
            {/* <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
            <div className="icon">
              <i className="bx bxl-dribbble" />
            </div>
            <h4 className="title">
              <a href="">Lorem Ipsum</a>
            </h4>
            <p className="description">
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
            <div className="icon">
              <i className="bx bx-file" />
            </div>
            <h4 className="title">
              <a href="">Sed ut perspiciatis</a>
            </h4>
            <p className="description">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
            <div className="icon">
              <i className="bx bx-tachometer" />
            </div>
            <h4 className="title">
              <a href="">Magni Dolores</a>
            </h4>
            <p className="description">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
            <div className="icon">
              <i className="bx bx-world" />
            </div>
            <h4 className="title">
              <a href="">Nemo Enim</a>
            </h4>
            <p className="description">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis
            </p>
          </div>
        </div> */}
          </div>
        </div>
      </section>
      {/* End Featured Services Section */}
    </>

  )
}

export default Skills