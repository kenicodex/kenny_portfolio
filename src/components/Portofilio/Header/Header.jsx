import { createStyles, Overlay, Container, Title, Button, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(https://img.freepik.com/free-vector/gradient-black-background-with-wavy-lines_23-2149161864.jpg?w=900&t=st=1662695737~exp=1662696337~hmac=7339ac4312c0b540be0256328bf6f7a93bea30ef2d1a89432e8dc336a0059954)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  container: {
    height: '95vh',
    display: 'flex', 
    flexDirection: 'column',
    justifyContent:"center",
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
    fontSize: 70,
    fontWeight: 300,
    lineHeight: 1.1, marginTop:"22vh",

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
    maxWidth: 600, opacity:.6,

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
        <Title className={classes.title}>Kehinde Salaudeen</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Frontend Developer
        </Text>
        <Text className={'text-white w-75'} size="md" mt="xl">
         I'm a frontend developer interested in makin your digital experience exquisite. Basically, my aim is ti allow users easily navigate a web page and have smooth interactions.
        </Text>

        <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
          Lets Discuss
        </Button>
      </Container>
    </div>
  );
}