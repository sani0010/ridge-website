import React from 'react';
import { Container, Grid, Paper, Typography, Box, Divider, Button } from '@mui/material';
import { styled } from '@mui/system';

const SectionTitle = styled(Typography)({
  fontSize: '2.5rem',
  fontWeight: '600',
  color: '#3554a5',
  marginBottom: '40px',
});

const SubsectionTitle = styled(Typography)({
  fontSize: '1.8rem',
  fontWeight: '600',
  color: '#3554a5',
  marginBottom: '20px',
});

const InfoText = styled(Typography)({
  fontSize: '1.1rem',
  color: '#3554a5',
  lineHeight: '1.6',
  fontWeight: '500',
  marginBottom: '20px',
});

const InfoCard = styled(Paper)({
  padding: '20px',
  margin: '10px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  background: '#fff',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
});

const StudentSupportServices = () => {
  return (
    <Container sx={{ py: 5 }}>
      <SectionTitle align="center">Student Support Services</SectionTitle>

      {/* Introduction Section */}
      <InfoText>
        <b>Unique Student Identifiers</b>
        <br />
        Student Support Services are available for all students in the campus from Level 5, 85 Queen Street, Melbourne VIC 3000 Australia. Reception is the first point of contact for any queries.
        <br />
        Ridge International College will comply with all laws relevant to the operation of the training premises, including workplace health and safety and fire safety regulations.
        <br />
        Ridge International College will ensure that training facilities, equipment and other resource materials are adequate for the Training Programs being delivered and are maintained in good order and repair.
        <br />
        Ridge International College has clearly documented procedures for managing and monitoring all Education and Training operations and reviewing Student/employer satisfaction.
      </InfoText>

      <Divider sx={{ my: 4 }} />

      {/* Student Orientation Section */}
      <SubsectionTitle>Student Orientation</SubsectionTitle>
      <InfoText>
        Orientation is conducted prior to the commencement of all courses. The objective is to fully inform new students of all aspects of life at Ridge International College. It also provides an introduction to studying at Ridge International College, local costs of living, transportation, facilities, banking and accommodation. It is a good opportunity to ask questions, meet fellow students and Ridge International College staff.
      </InfoText>

      <Divider sx={{ my: 4 }} />

      {/* Student Needs and Support Section */}
      <SubsectionTitle>How student needs are proactively identified</SubsectionTitle>
      <InfoText>
        Ridge International College will ensure that student needs are proactively identified, prior to enrolment, via:
        <br />
        <b>Pre-Training Review/LLN</b>
      </InfoText>

      <Divider sx={{ my: 4 }} />

      {/* Monitoring and Response to Student Needs */}
      <SubsectionTitle>How student needs are systematically monitored and responded to</SubsectionTitle>
      <InfoText>
        If student needs are identified, Ridge International College will create an individual learning plan that will include:
        <br />
        <ul>
          <li>Learning goals to be achieved;</li>
          <li>Contingency plans;</li>
          <li>Logistics of the learning relationship, e.g., duration;</li>
          <li>Frequency of meetings and the length of meetings;</li>
          <li>Locations of meetings;</li>
          <li>The nature of contacts (i.e., what are they for?);</li>
          <li>The structure of the learning relationship, e.g., the activities that we will do;</li>
          <li>How progress will be monitored;</li>
          <li>The equipment and/or resources that are needed;</li>
          <li>WHS</li>
        </ul>
        All individual learning plans will be monitored by the Student Support Officer with respective trainers/assessors and management.
      </InfoText>

      <Divider sx={{ my: 4 }} />

      {/* Support for Learning Outcomes */}
      <SubsectionTitle>Support for positive learning outcomes</SubsectionTitle>
      <InfoText>
        Ridge International College provides support to all students to ensure positive learning outcomes via a range of strategies:
        <br />
        <ul>
          <li>Students facing personal difficulties that may affect their learning should approach the Counsellor or PEO for personal/career advice and counsel;</li>
          <li>Assistance may include a deferment of study, help with a Special Consideration application, or referral to further student support service or external counsellor;</li>
          <li>Students who specifically require assistance with study skills can obtain practical advice on assignment writing; course-specific language and learning skills; and assistance with any language, literacy or numeracy problems;</li>
          <li>Students will be given adequate time to work on assessments and projects;</li>
          <li>All assessments/projects will be assessed at the completion of each unit;</li>
          <li>Ridge International College can organise information and assistance regarding any disability related matters as per Commonwealth Disability Discrimination Act;</li>
        </ul>
        Staff available to students with learning needs:
        <ul>
          <li>Student Support Officer</li>
          <li>Trainers and assessors</li>
          <li>RIC administration and management</li>
        </ul>
      </InfoText>

      <Divider sx={{ my: 4 }} />

      {/* Assistance Availability */}
      <SubsectionTitle>How assistance is available to students</SubsectionTitle>
      <InfoText>
        Assistance is available to all students via numerous modes:
        <br />
        <ul>
          <li>Telephone Ridge International College +61 3 9620 7738 to speak with student support officer;</li>
          <li>Discussion with trainer/assessor in class or after the class hours;</li>
          <li>Email a specific query to their trainer/assessor;</li>
          <li>Telephone Ridge International College helpdesk at +61 3 9620 7738 or email admin@ridge.edu.au for all other inquiries;</li>
        </ul>
        <b>Primary Point of Contact:</b> In case of emergency, student should contact Student Administration and Support Officer on (03) 9620 7738, during business hours.
        <br />
        After hour contact will be: Kishor Raj Aryal, CEO at kishor@ridge.edu.au
      </InfoText>

      <Divider sx={{ my: 4 }} />

      {/* Student Obligations */}
      <SubsectionTitle>Student Obligations</SubsectionTitle>
      <InfoText>
        <b>Overseas Student Health Cover</b><br />
        Overseas Student Health Cover (OSHC) is a health insurance that covers the cost of visits to the doctor, some hospital treatment, ambulance cover, and some pharmaceuticals. International students must have OSHC while in Australia for the duration of their course of study. The OSHC must be paid before a student visa is issued.
        <br />
        Ridge International College can organise your OSHC cover. Contact our Student Services. You can find out more about OSHC at www.health.gov.au or at www.study.vic.gov.au
        <br />
        <b>Full Time Study</b><br />
        Australian law requires international students to undertake a full-time study load. A full-time study load is normally a minimum of 20 hours per week for at least 40 weeks each calendar year or continuous 12-month period.
        <br />
        <b>Attendance</b><br />
        International students studying VET courses are expected to attend all classes to facilitate effective learning. Ridge International College monitors student attendance in accordance with its Attendance Policy and requires students to attend 80% of their scheduled classes. However, students in VET courses at Ridge International College will be reported to the Department of Home affairs (DHA) only on the basis of unsatisfactory course progress (see Academic Progress).
        <br />
        Please refer to attendance policy at www.ridge.edu.au/policies
      </InfoText>

      <Divider sx={{ my: 4 }} />

      {/* Contact Section */}
      <SubsectionTitle>Change of Address</SubsectionTitle>
      <InfoText>
        Upon arriving in Australia, you are required to advise Ridge International College of your residential address, email address, mobile phone number and emergency contact details. Any changes to these details must be notified to Ridge International College within 7 days of the change. It is extremely important that students notify Ridge International College of a change of address as, under Section 20 of the ESOS Act 2000, Ridge International College is obliged to serve a notice at your last known address if you breach a student visa condition relating to attendance or academic performance.
        <br />
        Ridge International College may also send warning notices to you to help prevent breaches of your visa conditions. As per Tuition Protection Service (TPS) update, international students are required to update their current address at least every six months. It is your responsibility and in your own interests to ensure that your address details are always up to date.
      </InfoText>

      <Divider sx={{ my: 4 }} />

      {/* Support Contact Cards */}
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <InfoCard>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <InfoText><b>Student Support</b></InfoText>
              <Button variant="outlined" color="primary">Contact</Button>
            </Box>
          </InfoCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <InfoCard>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <InfoText><b>Emergency Contact</b></InfoText>
              <Button variant="outlined" color="primary">Contact</Button>
            </Box>
          </InfoCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StudentSupportServices;
