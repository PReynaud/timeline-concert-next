import { Container } from "@mui/material"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CustomTimelineItem from "./timelineItem";

import JSONData from '../../content/data.json';
import Show from "../../models/Show.model";

export default function TimelineContainer() {
  const shows = JSONData.results.map(Show.fromJson);

  return <Container>
    <Timeline>
      {shows.map(show => <TimelineItem key={show.id}>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <CustomTimelineItem title={show.band.name} subTitle={'test d un sous titre'}/>
        </TimelineContent>
      </TimelineItem>)
      }
    </Timeline>
  </Container>
}