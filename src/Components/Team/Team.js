import React from "react";
import { Header, Grid } from "semantic-ui-react";
import "./Team.css";
import Person from "./Person";
import Daniel from "./people/logoxx.png";
import Jinal from "./people/logoxx.png";
import Rohan from "./people/rohan-small.png";
import Darshil from "./people/logoxx.png";
import Aarav from "./people/aarav-small.png";
import Naab from "./people/nabeel.jpg";
import Krish from "./people/krish.jpg";
import Ansh from "./people/ansh1.png";
import Vishal from "./people/vishal1.png";
import Advitiya from "./people/advitiya.png"; 

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
                    image={Vishal}
                    name={"Vishal Kanala"}
                    role1={"President"}
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
                    image={Ansh}
                    name={"Ansh Tandon"}
                    role1={"Director of Logistics"}
                    role2={"Website Developer"}
                    link={
                      "https://www.linkedin.com/in/vishal-kanala-287b731b0/"
                    }
                  ></Person>
                </Grid.Column>
                <Grid.Column>
                  <Person
                    image={
                      "https://react.semantic-ui.com/images/wireframe/square-image.png"
                    }
                    size={"small"}
                    name={"Vishnu Yelimeli"}
                    image={Darshil}
                    role1={"Director of Outreach"}
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
                    name={"Advitiya Jadhav"}
                    image={Advitiya}
                    link={"https://www.linkedin.com/in/nabeel-ahmed-773b78188/"}
                    role1={"Director of Technology"}
                  ></Person>
                </Grid.Column>
                <Grid.Column>
                  <Person
                    size={"small"}
                    image={Daniel}
                    name={"Rajin Sutradhar"}
                    role1={"Director of Finance"}
                    link={
                      "https://www.linkedin.com/in/daniel-baumgartner-93b6a8192/"
                    }
                  ></Person>
                </Grid.Column>
                <Grid.Column>
                  <Person
                    size={"small"}
                    name={"Lingesh Ranjith"}
                    image={Jinal}
                    role1={"Workshop Coordinator"}
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
