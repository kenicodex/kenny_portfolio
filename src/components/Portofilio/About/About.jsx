import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons';
import { motion } from 'framer-motion'

const mockdata = [
  {
    title: 'Matrizo Codtrix',
    role: "Front End Developer",
    period: 'Jan 2022 - Present',
    description: ['• Developed program logic for new applications based on fresh coding or revamped logic from       existing applications.',
      ' • Applied feedback from code review and implemented changes to meet standards.',
      ' • Improved coding of JavaScript and css to enhance user experience and functionality.'
    ],
    icon: IconGauge,
  },
  {
    title: 'Laspotech ICT',
    role: "Front End Developer",
    period: 'May 2021 - Oct 2021',
    description:
      [
        ' • Worked well with different developers to address challenges and solve problems collaboratively on the organization website',
        '• Tested web-based product functionality and delivered iterations to customers',
        '•	Tested web-based product functionality and delivered iterations to customer.'
      ],
    icon: IconCookie,
  },
  {
    title: 'Devken',
    role: "Full Stack Developer",
    period: 'Apr 2019 - Present',
    description: ['• Developed program logic for new applications based on fresh coding or revamped logic from       existing applications.',
      ' • Applied feedback from code review and implemented changes to meet standards.',
      ' • Improved coding of JavaScript and css to enhance user experience and functionality.'
    ],
    icon: IconUser,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  card: {
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export function About() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature, i) => (
    <motion.span key={feature.title} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: .5 * i, duration: 1 }}>
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} p="xl">
        <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
        <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text size="sm" color="dimmed" mt="sm">
          {feature.role}  <span style={{ fontSize: '1.2rem', display: 'inline-block', paddingLeft: '4rem' }}>{feature.period}</span>
        </Text>

        <Text size="1.2rem" color="dimmed" mt="sm">
          <ul style={{ listStyleType: 'square' }}>{feature.description.map(x => <li>{x}</li>)}</ul>
        </Text>
      </Card>
    </motion.span>
  ));
  return (
    <Container size="lg" py="xl" style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }}>
      <Group position="center">
        <Badge variant="filled" size="lg">
          Work Experience
        </Badge>
      </Group>

      <Title order={2} className={classes.title} align="center" mt="sm">
        I have been able to work in these organisations
      </Title>


      <Text color="dimmed" className={classes.description} align="center" mt="md">
        Full Stack Web Development
      </Text>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
}