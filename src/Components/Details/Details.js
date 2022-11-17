import React from "react";
import { Grid, Header} from "semantic-ui-react";
import "./Details.css";
import Fade from 'react-reveal/Fade';
export default class About extends React.Component {
  render() {
    return (
      <section id={"details"}>
          <div className={"detailpage container"}>

          <div className={"detailheader-contain"}>
          <Header className={"Detail-head"}>Event Details</Header>
        </div>
        <Grid columns={2} className={"detail-grid"} stackable={true}>
          <Grid.Column>
            <Fade Botton>
            <Grid.Row>
              
              <Header className={"details-text"}>Date: January 7 - 8, 2023</Header>
           
            </Grid.Row>
            <Grid.Row>
            
              <Header className={"details-text"} >Time: 9:00am Saturday - 12:00pm Sunday </Header>
            
            </Grid.Row>
            <Grid.Row>
            
              <Header  className={"details-text"}>
                Location: 4044 Quakerbridge Rd, Mercerville, NJ 08619
              </Header>
              
            </Grid.Row>
            <Grid.Row>
            
              <Header  className={"details-text"}>
                Participation: Anyone from high school and University, who love STEM
                 can participate in this event.
              </Header>
              
            </Grid.Row>
            </Fade>
          </Grid.Column>

          <Grid.Column>
          <div className={"map-contain"}>
            <iframe
              className={"map"}
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: "0" }}
              src="https://maps.google.com/maps?q=4044%20Quakerbridge%20Rd%2C%20Mercerville%2C%20NJ%2008619&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
            />
          </div>
          </Grid.Column>
        </Grid>
        </div>
      </section>
    );
  }
}
