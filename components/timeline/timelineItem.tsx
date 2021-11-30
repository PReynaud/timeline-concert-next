import { Card, CardContent, CardHeader, Typography } from "@mui/material";

export interface TimelineItemProps {
  title: string;
  subTitle: string;
}

export default function TimelineItem({ title, subTitle }: TimelineItemProps) {

  return <Card>
    <CardHeader title={title} />
    <CardContent>
      <Typography variant="body1">
        {subTitle}
      </Typography>
    </CardContent>
  </Card>
}