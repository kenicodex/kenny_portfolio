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
import { motion } from 'framer-motion'

const mockdata = [
  {
    title: 'ReachAfrika ',
    link: 'https://merchant.reachafrika.com.ng/',
    role: "Front End Developer",
    period: '2021-11 – present ',
    description: ['• Conducted code reviews and provided feedback to other developersto ensure high-quality code.',
      ' • Developed and maintained design systems and component librariesto enhance efficiency and consistency',
      ' • Led frontend team and assign tasks to junior developers'
    ],
    icon: 'https://media.licdn.com/dms/image/C4D0BAQH_vtJbyN4PlQ/company-logo_200_200/0/1594374859161?e=1691625600&v=beta&t=LZsjGqREDvWV7Wm45gwmlgsHF_ZYlRh2HftDJaJTwRk',
  },
  {
    title: 'Quantum Analytics NG',
    link: 'https://www.quantumanalyticsco.org/',
    role: "Mid-level Frontend Developer",
    period: '2020-07 – 2021-09',
    description: [" • Worked with designersto ensure that the website's UI/UX design met the needs of the target audience",
      ' • Designed several reusable components which reduced production time by 1 week for the team',
      ' • Optimized website performance through SEO and user experience enhancements'
    ],
    icon: 'https://media.licdn.com/dms/image/C4E0BAQGIqQlr8PF60Q/company-logo_200_200/0/1669911867380?e=1691625600&v=beta&t=7sSUF8ng_b_PhdmOiN7bNzJJUAk7MVIiFgDdFlNVRbk',
  },
  {
    title: 'StoryBay',
    link: 'https://staging-tourbounty-webapp.vercel.app/',
    role: "Front End Developer",
    period: '2019-02 – 2020-06',
    description:
      [
        ' •  Worked well with different developers to address challenges and solve problems 𝐜𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐯𝐞𝐥𝐲 on the organization\'s website',
        '• Worked closely with cross-functional teamsto deliver projects on time and within budget',
        '• Collaborated with designersto implement UI/UX design into functional web pages'
      ],
    icon: 'https://media.licdn.com/dms/image/D4D0BAQEwu8lowh749Q/company-logo_200_200/0/1664434763589?e=1691625600&v=beta&t=2c-BNs8wAXHgFgdXZJCecGH3qI4Jtfx0TjCqPlr_5gg',
  },
];
const openSite = (link) => window.open(link)

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
    cursor: 'pointer'
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
  const { classes } = useStyles();
  const features = mockdata.map((feature, i) => (
    <motion.span key={feature.title} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: .1, duration: 1 }}>
      <Card onClick={() => openSite(feature.link)} key={feature.title} shadow="md" radius="md" className={classes.card} p="xl" style={{ minHeight: 330 }}>
        {/* <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} /> */}
        <img src={feature.icon} height={100} width={100} alt='' />
        <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text size="sm" color="dimmed" mt="sm">
          {feature.role}  <span style={{ fontSize: '1.2rem', display: 'inline-block', paddingLeft: '4rem' }}>{feature.period}</span>
        </Text>

        <Text size="1.2rem" color="dimmed" mt="sm" >
          <ul style={{ listStyleType: 'square', textAlign: 'justify' }}>{feature.description.map(x => <li>{x}</li>)}</ul>
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
        Software Engineer (Frontend)
      </Text>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
}