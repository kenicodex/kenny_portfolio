import { createStyles, Overlay, Container, Title, Button, Text } from '@mantine/core';

import { motion } from 'framer-motion';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://img.freepik.com/free-vector/gradient-black-background-with-wavy-lines_23-2149161864.jpg?w=900&t=st=1662695737~exp=1662696337~hmac=7339ac4312c0b540be0256328bf6f7a93bea30ef2d1a89432e8dc336a0059954)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'flex-start',
    // paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: '95vh',
      // paddingBottom: theme.spacing.xl * 3,
    },
  },

  title: {
    color: theme.white,
    fontSize: '7em',
    fontWeight: 300,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 60,
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 48,
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600, opacity: .6,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan('sm')]: {
      width: '60%',
    },
  },
}));

const myname = 'Kehinde Salaudeen'
// const Show = ({text}) => <Typography color={'blue'} sx={{display:'inline', fontSize:'inherit'}}>{` ${text} `}</Typography>
export default function Header() {
  const { classes } = useStyles();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container}>
        <Title className={classes.title}>
          {myname.split('').map((x, i) => <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: i * .15 }}>{x}</motion.span>)}
        </Title>
        <Text className={classes.description} size="xl" mt="xl">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8, duration: 1 }}>Software Developer</motion.span>
        </Text>
        <Text className={'text-white w-75'} size="1.5rem" mt="xl" style={{ textAlign: 'justify' }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 2 }}>
            {/* Detail-oriented and qualified 𝐅𝐫𝐨𝐧𝐭𝐞𝐧𝐝 Developer able to collaborate with a team, 
            <Show text='3+ 𝐲𝐞𝐚𝐫s' /> experience with JavaScript libraries 𝐑𝐞𝐚𝐜𝐭, React native,
             jQuery, and Bootstrap, able to work in an 𝐚𝐠𝐢𝐥𝐞 𝐬𝐜𝐫𝐮𝐦 environment. 
             I help companies like ReachAfrika (Fintech), Tourbounty (Social Media), 
             and Quantum Analytics(EdTech) to build client-side web applications and to 
             translate UI/UX wireframes (like 𝐅𝐢𝐠𝐦𝐚) for company and customer needs into functional, 
             user-friendly, and appealing interactive applications. */}


             {/* Passionate Frontend Developer with over 3.5 years of experience specializing in React.js, Vue.js, and React Native. I am dedicated to creating seamless user experiences across web and mobile platforms. I excel in creating responsive, optimized, and cost-friendly applications,  that exceed client expectations and creating very developer-friendly codebase and coding writing.  With a keen eye for detail and a passion for innovation. My ability to adapt to evolving technologies (like Firebase,  Graphql,  aws) and frameworks allows me to stay at the forefront of frontend development trends. */}
             A results-driven Software Developer with 5 years of experience in designing and building innovative mobile and web applications. Skilled in front-end development using React.js, Vue.js, React Native, and Flutter, and proficient in back-end technologies such as Firebase, AWS, and MongoDB.  <br />
In my role as a Senior Software Developer at UrbanEats, a cloud kitchen food delivery company serving over 15,000 users, I led the development of a robust web application using Vue.js to enhance the user experience and streamline business operations. <br />
I also contributed to the Oil and Gas industry with New Cross, where I played a key role in digitizing oil and gas volume data at drainage points and building real-time analytical dashboards using React.js to help management track performance and operational efficiency.   <br />
Additionally, I have worked in the Fintech industry, where I led the frontend team in creating dynamic user interfaces and optimizing financial applications using React.js. My expertise in both mobile and web development, combined with my leadership experience, enables me to build scalable, user-centric solutions that drive business growth.
I am passionate about delivering high-quality solutions in fast-paced environments and continually expanding my technical skillset to stay ahead of industry trends.
          </motion.span>
        </Text>

        <motion.div initial={{ x: '100' }} animate={{ x: 0 }} transition={{ delay: 0, duration: 1, repeat: 4 }} style={{ width: '100%' }}>
          <Button variant="gradient" size="xl" radius="xl" className={classes.control} component='a' style={{ margin: '1.2rem 0' }} href='/resume'>
            View My Resume
          </Button>
        </motion.div>

      </Container>
    </div>
  );
}