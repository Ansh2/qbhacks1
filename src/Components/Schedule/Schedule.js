import React from "react";
import { Header} from "semantic-ui-react";
import Table from 'react-bootstrap/Table'
import "./Schedule.css";
export default class Schedule extends React.Component {
  render() {
    {
      /*bot test comment*/
    }
    return (
      <section id={"schedule"}>
        <div className={"schedulepage container"}>
          <div className={"schedheader-contain"}>
            <Header className={"sched-head"}>Schedule</Header>
          </div>
          <div className={"schedule-contain"}>
            <Table responsive>
              <thead>
                <tr>
                  
                  <th>Time</th>
                  <th>Event</th>
                  <th>Day (Sat/Sun)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  
                  <td>Check-in</td>
                  <td>9:00am-10:00am</td>
                  <td>Sat</td>
                </tr>
                <tr>
                  
                  <td>Opening Ceremony</td>
                  <td>10:00am-10:30am</td>
                  <td>Sat</td>
                </tr>
                <tr>
                  
                  <td>Hackathon Commences!</td>
                  <td>10:30am</td>
                  <td>Sat</td>
                </tr>
                <tr>
                  <td>Introduction to Python</td>
                  <td>11:00am - 12:00pm</td>
                  <td>Sat</td>
                </tr>
                <tr>
                  <td>Introduction to Node.js</td>
                  <td>1:00pm-2:00pm</td>
                  <td>Sat</td>
                </tr>
                <tr>
                  
                  <td>Workshop: Machine Learning and Video Analysis on Microsoft Azure</td>
                  <td>3:00pm-4:00pm</td>
                  <td>Sat</td>
                </tr>
                <tr>
                  
                  <td>Intro to AI/ML</td>
                  <td>4:30pm - 5:30pm</td>
                  <td>Sat</td>
                </tr>
                <tr>
                  
                  <td>Mincreaft Server Opens!</td>
                  <td>6:00pm</td>
                  <td>Sat</td>
                </tr>

                <tr>
                  
                  <td>Mini-Event #1 - Scribble.io + Chess Competition</td>
                  <td>7:00pm - 8:00pm</td>
                  <td>Sat</td>
                </tr>
                <tr>
                  
                  <td>Mini-Event #2 - Movie Night + Chill</td>
                  <td>9:00pm-11:30pm</td>
                  <td>Sat</td>
                </tr>
                <tr>
                  
                  <td>Devpost Tutorial</td>
                  <td>10:30am - 11:00am</td>
                  <td>Sun</td>
                </tr>
                <tr>
                  
                  <td>Submission Time</td>
                  <td>12:00pm</td>
                  <td>Sun</td>
                </tr>
                <tr>
                    
                  <td>Closing Ceremony & Awards</td>
                  <td>5:00pm-6:00pm</td>
                  <td>Sun</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    );
  }
}
