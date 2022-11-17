import React from "react";
import { Grid, Header, Button,Image } from "semantic-ui-react";
import "./HomePage.css";
import Logo from './logo1.png';
import Fade from 'react-reveal/Fade';
export default class HomePage extends React.Component {
  render() {
    return (
      <section id="home">
        <div className={"homepage container"}>
          <Grid columns={2} className={"home-grid"} stackable={true}>
            <Grid.Row>
              <Grid.Column>
              <Fade bottom>
                <Image className={"logo"} src={Logo}>

                </Image>
                </Fade>
              </Grid.Column>
              <Grid.Column>
                <Fade bottom>
                <div className={"container"}>
                  <Grid.Row>
                   
                    <Header className={"hook"}>Think Big. Code Big.</Header>
                 
                  </Grid.Row>

                  <Grid.Row>
                  
                    <Header className={"name"}>QuakerBridgeHacks</Header>
                    
                  </Grid.Row>

                  <Grid.Row>
                    <Header className={"date"}>January 7, 2023</Header>
                  </Grid.Row>
                  <Grid.Row>
                    <div className={"reg-button-contain"}>
                      <Button target={"blank"} href={"https://forms.gle/MbxJGD3WkwRG6Xxy9"}className={"reg-button"}>Register</Button>
                    </div>
                  </Grid.Row>
                </div>
                </Fade>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </section>
    );
  }
}
