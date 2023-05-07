import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
} from '@mantine/core';
import { Box, Typography } from '@mui/material';
import { IconBrandTwitter, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons';
import { motion } from 'framer-motion'
import { useState } from 'react';
export const social = [{ Icon: IconBrandTwitter, link: 'https://www.twitter.com/just_khenny' }, { Icon: IconBrandLinkedin, link: 'https://www.linkedin.com/in/kehnydev/' }, { Icon: IconBrandGithub, link: 'https://www.github.com/kenicodex' }];

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: 'border-box',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][6]} 0%, ${theme.colors[theme.primaryColor][7]
      } 100%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    '&:hover': {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    '&::placeholder': {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));



export default function ContactUs() {
  const { classes } = useStyles();

  const icons = social.map(({ Icon, link }, index) => (
    <ActionIcon component='a' href={link} key={index} size={28} className={classes.social} variant="transparent">
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));
  const [fields, setFields] = useState({}) 
  const info = (e) => {
      setFields({
        ...fields, [e.target.name] : e.target.value
      })
  }
  return (
    <Box className={classes.wrapper} sx={{ width: { xs: "95%", md: "90%" }, mx: "auto", my: "20px" }}>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave a message and i get back to you in less than 12 hours
          </Text>
          <Box>
            <Typography href="mailto:kehindesalaudeen222@gmail.com" component={'a'} fontSize="18px" sx={{ mt: '10px' }} color={'white'}> @ Email <br /> <span style={{ fontSize: "15px" }}>kehindesalaudeen222@gmail.com</span> </Typography>
            <br /> <Typography href="tel:+2348056499531" component={'a'} fontSize="18px" sx={{ mt: '10px' }} color={'white'}> <i className='fa fa-phone'></i> Phone <br /> <span style={{ fontSize: "15px" }}>+234-805-649-9531</span> </Typography>
          </Box>
          {/* <ContactIconsList variant="white" /> */}

          <Group mt="xl">{icons}</Group>
        </div>
        <motion.div intial={{ opacity: 0 }} animate={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .3 }} >
          <form className={classes.form} action={"mailto:kehindesalaudeen222@gmail.com?subject="+fields.subject+"&body="+fields.message}>
            <motion.div intial={{ opacity: 0 }} animate={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .3 }} >
              <TextInput onChange={(e) => { info(e) }}
                label="Name" name='name' value={fields.name}
                placeholder="John Doe"
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
              /></motion.div>
            <TextInput onChange={(e) => { info(e) }}
              label="Email" name='email' value={fields.email}
              placeholder="your@email.com"
              required
              mt="md"
              aria-autocomplete='inline'
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput onChange={(e) => { info(e) }}
              label="Subject" name='subject' value={fields.subect}
              placeholder="Request to join a project"
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea onChange={(e) => { info(e) }}
              required name='message' value={fields.message}
              label="Your message"
              placeholder="Hello kehinde, i would like you to join my team on a project"
              minRows={4}
              mt="md"
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group position="right" mt="md">
              <Button className={classes.control} type='submit'>Send message</Button>
            </Group>
          </form>
        </motion.div>
      </SimpleGrid>
    </Box>
  );
}