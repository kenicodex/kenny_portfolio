
import { Image, Text, Container, ThemeIcon, Title, SimpleGrid, createStyles, Box } from '@mantine/core';
// import IMAGES from './images';

const project = [
  { project: 'Ecommerce Site', img: process.env.PUBLIC_URL + '/images/ecommerce.png', link: '/fakestore', description: 'Built Using React', },
  { project: 'Weather App', img: process.env.PUBLIC_URL + '/images/WeatherApp.png', link: '/weatherapp', description: 'Built Using React' },
  { project: 'Todolist App', img: process.env.PUBLIC_URL + '/images/todolist.png', link: '/todolist', description: 'Built Using React' },
  { project: 'Movie Trailer Finder', img: process.env.PUBLIC_URL + '/images/movies.png', link: '/movies', description: 'Built Using React' },
]
const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: '8rem',
    paddingBottom: '5rem',
  },

  item: {
    display: 'flex',
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },

  itemTitle: {
    marginBottom: theme.spacing.xs / 2,
  },

  supTitle: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    // letterSpacing: 'auto',
  },

  title: {
    // lineHeight: '',
    textAlign: 'center',
    marginTop: theme.spacing.xl,
  },

  description: {
    textAlign: 'center',
    marginTop: theme.spacing.xs,
  },

  highlight: {
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    padding: '.rem',
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: 'inline-block',
    color: theme.colorScheme === 'dark' ? theme.white : 'inherit',
  },
}));

export default function Project({ supTitle, description, data }) {
  const { classes } = useStyles();

  const items = project.map((item) => (
    <div className={classes.item} key={item.image} onClick={()=>{window.location.assign(item.link)}} style={{cursor:'pointer'}}>
      <ThemeIcon variant="light" className={classes.itemIcon} size={60} radius="md">
        <Image src={''} />
      </ThemeIcon>

      <div>
        <Text weight={700} size="lg" className={classes.itemTitle} >
          {item.project}
        </Text>
        <Text color="gray">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <Box sx={{ backgroundColor: "white", width: '100%', height:"auto", display:"flex", alignItems:'center', borderTop:'1px solid rgba(0, 0, 0, .1)' }}>
      <Container size={700} className={classes.wrapper}>
        <Text className={classes.supTitle}>{supTitle}</Text>

        <Title className={classes.title} order={2}>
          Here are  <span className={classes.highlight}>some</span> projects i've created
        </Title>

        <Container size={660} p={0}>
          <Text color="dimmed" className={classes.description}>
            {description}
          </Text>
        </Container>

        <SimpleGrid
          cols={2}
          spacing={50}
          breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
          style={{ marginTop: 30 }}
        >
          {items}
        </SimpleGrid>
      </Container>
    </Box>
  );
}