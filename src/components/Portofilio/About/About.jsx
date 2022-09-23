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
    description: ['•  Proposed 5 𝐔𝐈 𝐚𝐧𝐝 𝐔𝐗 design changes which led to a 30% increase in technical feasibility.',
      ' • Developed program logic with 𝐑𝐞𝐚𝐜𝐭 for new application conversion based on existing HTML application which 𝐞𝐧𝐡𝐚𝐧𝐜𝐞𝐝 𝐮𝐬𝐞𝐫 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞 and functionality by 20%.',
      ' • Designed several 𝐫𝐞𝐮𝐬𝐚𝐛𝐥𝐞 𝐜𝐨𝐦𝐩𝐨𝐧𝐞𝐧𝐭𝐬 which reduced production time by 1 week for the team.'
    ],
    icon: IconGauge,
  },
  {
    title: 'Devken',
    role: "Full Stack Developer",
    period: 'Apr 2019 - Present',
    description: ['• Develop well-functioning 𝐀𝐏𝐈s in Nodejs and manage databases.',
      ' • Design and creation of scalable React frontend applications from 𝐰𝐢𝐫𝐞𝐟𝐫𝐚𝐦𝐞𝐬 𝐔𝐈/𝐔𝐗.',
      ' • Test software to ensure 𝐫𝐞𝐬𝐩𝐨𝐧𝐬𝐢𝐯𝐞𝐧𝐞𝐬𝐬 and efficiency across all types of devices.'
    ],
    icon: IconUser,
  },
  {
    title: 'Laspotech ICT',
    role: "Front End Developer",
    period: 'May 2021 - Oct 2021',
    description:
      [
        ' •  Worked well with different developers to address challenges and solve problems 𝐜𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐯𝐞𝐥𝐲 on the organization\'s website',
        '• Tested web-based product functionality and delivered 𝐢𝐭𝐞𝐫𝐚𝐭𝐢𝐨𝐧𝐬 to customers in the 𝐬𝐩𝐫𝐢𝐧𝐭 𝐦𝐞𝐭𝐡𝐨𝐝'
      ],
    icon: IconCookie,
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
    <motion.span key={feature.title} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: .1, duration: 1 }}>
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} p="xl" style={{minHeight:330}}>
        <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
        <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text size="sm" color="dimmed" mt="sm">
          {feature.role}  <span style={{ fontSize: '1.2rem', display: 'inline-block', paddingLeft: '4rem' }}>{feature.period}</span>
        </Text>

        <Text size="1.2rem" color="dimmed" mt="sm" >
          <ul style={{ listStyleType: 'square' , textAlign:'justify'}}>{feature.description.map(x => <li>{x}</li>)}</ul>
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