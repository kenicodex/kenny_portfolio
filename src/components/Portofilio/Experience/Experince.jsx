import { Box } from '@mui/material';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

export const Experience = () => (
    <Tabs>
            <TabList style={{display:'flex'}}>
                <Tab><Box className='bg-secondary ' sx={{width:"100px"}}>  Laspotect</Box></Tab>
                <Tab><Box className='bg-secondary ' sx={{width:"100px"}}>  Gemson</Box></Tab>
            </TabList>

            <TabPanel>
                <Box className='bg-success'>
                    <h1>jhj</h1>
                </Box>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
        
    </Tabs>
);