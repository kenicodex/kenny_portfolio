import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';

import RepeatIcon from '@mui/icons-material/Repeat';


const experiences = [
    {
        title: 'ReachAfrika ',
        link: 'https://merchant.reachafrika.com.ng/',
        role: "Lead Front End Developer",
        period: '2022-08 – present ',
        description: [
            '• Conducted code reviews and provided feedback to other developersto ensure high-quality code.',
            '• Developed and maintained design systems and component librariesto enhance efficiency and consistency',
            '• Led frontend team and assign tasks to junior developers'
        ],
        icon: 'https://media.licdn.com/dms/image/C4D0BAQH_vtJbyN4PlQ/company-logo_200_200/0/1594374859161?e=1691625600&v=beta&t=LZsjGqREDvWV7Wm45gwmlgsHF_ZYlRh2HftDJaJTwRk',
    },
    {
        title: 'Urban Eats',
        link: 'https://www.urbaneatsapp.com/',
        role: "Senior Frontend Developer",
        period: '2023-07 – present',
        description: [
            '• Scaled 90% of web and mobile  application queries and data downloads which reduced database bill from 400pounds to 30pounds monthly average',
            '• Optimized website performance and speed by reducing loading times and caching customers and orders data.',
            '• Worked with designers to ensure that the website\'s UI/UX design met the needs of the target audience',
            '• Designed several reusable components which reduced production time by 1 week for the team',
        ],
        icon: 'https://media.licdn.com/dms/image/C4E0BAQGIqQlr8PF60Q/company-logo_200_200/0/1669911867380?e=1691625600&v=beta&t=7sSUF8ng_b_PhdmOiN7bNzJJUAk7MVIiFgDdFlNVRbk',
    },
    {
        title: 'Quantum Analytics UK',
        link: 'https://staging-tourbounty-webapp.vercel.app/',
        role: "Front End Developer",
        period: '2022-02 – 2022-08',
        description:
            [
                '• Implemented payment gate on website which drove 70% of payment traffic to the platform and increased revenue by 45%',
                '• Improved user experience by implementing region/country specific content to users(students) ',
                '• Worked well with different developers to address challenges and solve problems 𝐜𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐯𝐞𝐥𝐲 on the organization\'s website',
            ],
        icon: 'https://media.licdn.com/dms/image/D4D0BAQEwu8lowh749Q/company-logo_200_200/0/1664434763589?e=1691625600&v=beta&t=2c-BNs8wAXHgFgdXZJCecGH3qI4Jtfx0TjCqPlr_5gg',
    },
    {
        title: 'Tourbounty',
        link: 'https://staging-tourbounty-webapp.vercel.app/',
        role: "Front End Developer Intern",
        period: '2020-06 – 2022-07',
        description:
            [
                '• Developed a responsive website UI using HTML, CSS, and JavaScript that reduced overall page load speed by 15%',
                '• Worked closely with cross-functional teams to deliver projects on time and within budget',
                '• Achieved web snap scroll (tiktok,youtube shorts) easing user experiences to view users feed ',
                '• Collaborated with designers to implement UI/UX design into functional web pages',
            ],
        icon: 'https://media.licdn.com/dms/image/D4D0BAQEwu8lowh749Q/company-logo_200_200/0/1664434763589?e=1691625600&v=beta&t=2c-BNs8wAXHgFgdXZJCecGH3qI4Jtfx0TjCqPlr_5gg',
    },
];

export default function WorkExperience() {
    return (
        <Timeline position="alternate">
            {
                experiences.map((experience, index) => {
                    // const isE
                    return (<>



                        <TimelineItem>
                            <TimelineSeparator position='alternate'>
                                <TimelineConnector sx={{ bgcolor: 'blue' }} />
                                <TimelineDot color="grey">
                                    <img src={experience.icon} alt="" />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h5" color={'black'} component="span">
                                    {experience.title}
                                </Typography>
                                <Typography>{experience.role}</Typography>

                                {experience.description.map(description => (<Typography variant='h6'>{description}</Typography>))}
                                <Typography>{experience.period}</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </>)
                })
            }

        </Timeline>
    );
}