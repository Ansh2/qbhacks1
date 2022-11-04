import React from "react";
import { Header, Grid } from "semantic-ui-react";
import "./Team.css";
import Person from "./Person";
import Daniel from "./people/daniel-small.png";
import Jinal from "./people/jinal-small.png";
import Rohan from "./people/rohan-small.png";
import Darshil from "./people/darshil-new.jpg";
import Aarav from "./people/aarav-small.png";
import Naab from "./people/nabeel.jpg";
import Krish from "./people/krish.jpg";
export default class Team extends React.Component {
  render() {
    return (
      <section id={"Team"}>
        <div className={"teampage container"}>
          <div className={"Teamheader-contain"}>
            <Header className={"Team-head"}>Team</Header>
          </div>
          <div className={"teamgrid-contain"}>
            <Grid stackable={true} columns={3}>
              <Grid.Row>
                <Grid.Column>
                  <Person
                    image={
                      "https://react.semantic-ui.com/images/wireframe/square-image.png"
                    }
                    size={"small"}
                    image={Rohan}
                    name={"Vishal Kanala"}
                    role1={"President & Founder"}
                    role2={"Director of Technology"}
                    role3={"Website Developer"}
                    link={
                      "https://www.linkedin.com/in/rohan-deshpande-994b23160/"
                    }
                  ></Person>
                </Grid.Column>

                <Grid.Column>
                  <Person
                    image={
                      "https://react.semantic-ui.com/images/wireframe/square-image.png"
                    }
                    size={"small"}
                    image={Aarav}
                    name={"Aaravsinh Solanki"}
                    role1={"Organizer"}
                    role2={"Director of Logistics"}
                    link={
                      "https://www.linkedin.com/in/aaravsinh-solanki-652319195/"
                    }
                  ></Person>
                </Grid.Column>
                <Grid.Column>
                  <Person
                    image={
                      "https://react.semantic-ui.com/images/wireframe/square-image.png"
                    }
                    size={"small"}
                    name={"Darshil Patel"}
                    image={Darshil}
                    role1={"Organizer"}
                    role2={"Director of Marketing"}
                    link={
                      "https://www.linkedin.com/in/darshil-patel-62aa38194/"
                    }
                  ></Person>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <Person
                    size={"small"}
                    name={"Nabeel Ahmed"}
                    image={Naab}
                    link={"https://www.linkedin.com/in/nabeel-ahmed-773b78188/"}
                    role1={"Organizer"}
                    role2={"Director of UX/UI Design"}
                  ></Person>
                </Grid.Column>
                <Grid.Column>
                  <Person
                    size={"small"}
                    image={Daniel}
                    name={"Daniel Baumgartner"}
                    role1={"Organizer"}
                    role2={"Director of Finance"}
                    link={
                      "https://www.linkedin.com/in/daniel-baumgartner-93b6a8192/"
                    }
                  ></Person>
                </Grid.Column>
                <Grid.Column>
                  <Person
                    size={"small"}
                    name={"Jinal Shah"}
                    image={Jinal}
                    role1={"Organizer"}
                    role2={"Workshop Coordinator"}
                    link={"https://www.linkedin.com/in/jinalshah2002/"}
                  ></Person>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </section>
    );
  }
}
