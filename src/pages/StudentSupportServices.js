import React from 'react';
import { Phone, Mail, MapPin, Clock, BookOpen, Users, Shield, Home, Info, Book, HeartPulse, ClipboardCheck } from 'lucide-react';

const StudentSupportServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto py-12 px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6" style={{ color: '#3554a5' }}>
            Student Support Services
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600">
              Your success is our priority at Ridge International College
            </p>
          </div>
        </div>

        {/* Quick Access Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Phone, title: "Contact Us", desc: "+61 03 9620 7738" },
            { icon: MapPin, title: "Location", desc: "Level 5, 85 Queen St, Melbourne" },
            { icon: Mail, title: "Email Us", desc: "admin@ridge.edu.au" },
            { icon: Clock, title: "Business Hours", desc: "Monday - Friday" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <item.icon className="w-8 h-8 mb-4" style={{ color: '#3554a5' }} />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Sections */}
        <div className="space-y-12">
          {/* Introduction Section */}
          <section className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <Info className="w-8 h-8" style={{ color: '#3554a5' }} />
              <h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p className="text-base leading-relaxed">
                <strong>Unique Student Identifiers</strong>
                <br />
                Student Support Services are available for all students in the campus from Level 5, 85 Queen Street, Melbourne VIC 3000 Australia. Reception is the first point of contact for any queries.
                <br /><br />
                Ridge International College will comply with all laws relevant to the operation of the training premises, including workplace health and safety and fire safety regulations.
                <br /><br />
                Ridge International College will ensure that training facilities, equipment and other resource materials are adequate for the Training Programs being delivered and are maintained in good order and repair.
                <br /><br />
                Ridge International College has clearly documented procedures for managing and monitoring all Education and Training operations and reviewing Student/employer satisfaction.
              </p>
            </div>
          </section>

          {/* Student Orientation */}
          <section className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <Book className="w-8 h-8" style={{ color: '#3554a5' }} />
              <h2 className="text-2xl font-bold text-gray-800">Student Orientation</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p className="text-base leading-relaxed">
                Orientation is conducted prior to the commencement of all courses. The objective is to fully inform new students of all aspects of life at Ridge International College. It also provides an introduction to studying at Ridge International College, local costs of living, transportation, facilities, banking and accommodation. It is a good opportunity to ask questions, meet fellow students and Ridge International College staff.
              </p>
            </div>
          </section>

          {/* Student Needs */}
          <section className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-8 h-8" style={{ color: '#3554a5' }} />
              <h2 className="text-2xl font-bold text-gray-800">How student needs are proactively identified</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p className="text-base leading-relaxed">
                Ridge International College will ensure that student needs are proactively identified, prior to enrolment, via:
                <br />
                <strong>Pre-Training Review/LLN</strong>
              </p>
            </div>
          </section>

          {/* Monitoring and Response */}
          <section className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <ClipboardCheck className="w-8 h-8" style={{ color: '#3554a5' }} />
              <h2 className="text-2xl font-bold text-gray-800">How student needs are systematically monitored and responded to</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p className="text-base leading-relaxed">
                If student needs are identified, Ridge International College will create an individual learning plan that will include:
              </p>
              <ul className="list-disc pl-8 mt-4 space-y-2">
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
              <p className="mt-4">
                All individual learning plans will be monitored by the Student Support Officer with respective trainers/assessors and management.
              </p>
            </div>
          </section>

          {/* Support for Learning Outcomes */}
          <section className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <BookOpen className="w-8 h-8" style={{ color: '#3554a5' }} />
              <h2 className="text-2xl font-bold text-gray-800">Support for positive learning outcomes</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p className="text-base leading-relaxed">
                Ridge International College  provides support to all students to ensure positive learning outcomes via a range of strategies:
              </p>
              <ul className="list-disc pl-8 mt-4 space-y-2">
                <li>Students facing personal difficulties that may affect their learning should approach the Counsellor or PEO for personal/career advice and counsel;</li>
                <li>Assistance may include a deferment of study, help with a Special Consideration application, or referral to further student support service or external counsellor;</li>
                <li>Students who specifically require assistance with study skills can obtain practical advice on assignment writing; course-specific language and learning skills; and assistance with any language, literacy or numeracy problems;</li>
                <li>Students will be given adequate time to work on assessments and projects;</li>
                <li>All assessments/projects will be assessed at the completion of each unit;</li>
                <li>Ridge International College can organise information and assistance regarding any disability related matters as per Commonwealth Disability Discrimination Act;</li>
              </ul>
              <p className="mt-4">Staff available to students with learning needs:</p>
              <ul className="list-disc pl-8 mt-4 space-y-2">
                <li>Student Support Officer</li>
                <li>Trainers and assessors</li>
                <li>RIC administration and management</li>
              </ul>
            </div>
          </section>

          {/* Student Obligations */}
          <section className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-8 h-8" style={{ color: '#3554a5' }} />
              <h2 className="text-2xl font-bold text-gray-800">Student Obligations</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <div className="space-y-6">
                <div>
                  <strong>Overseas Student Health Cover</strong>
                  <p>
                    Overseas Student Health Cover (OSHC) is a health insurance that covers the cost of visits to the doctor, some hospital treatment, ambulance cover, and some pharmaceuticals. International students must have OSHC while in Australia for the duration of their course of study. The OSHC must be paid before a student visa is issued.
                    <br /><br />
                    Ridge International College can organise your OSHC cover. Contact our Student Services. You can find out more about OSHC at www.health.gov.au or at www.study.vic.gov.au
                  </p>
                </div>
                <div>
                  <strong>Full Time Study</strong>
                  <p>
                    Australian law requires international students to undertake a full-time study load. A full-time study load is normally a minimum of 20 hours per week for at least 40 weeks each calendar year or continuous 12-month period.
                  </p>
                </div>
                <div>
                  <strong>Attendance</strong>
                  <p>
                    International students studying VET courses are expected to attend all classes to facilitate effective learning. Ridge International College monitors student attendance in accordance with its Attendance Policy and requires students to attend 80% of their scheduled classes. However, students in VET courses at Ridge International College will be reported to the Department of Home affairs (DHA) only on the basis of unsatisfactory course progress (see Academic Progress).
                    <br /><br />
                    Please refer to attendance policy at www.ridge.edu.au/policies
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Change of Address */}
          <section className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <Home className="w-8 h-8" style={{ color: '#3554a5' }} />
              <h2 className="text-2xl font-bold text-gray-800">Change of Address</h2>
            </div>
            <div className="prose max-w-none text-gray-600">
              <p className="text-base leading-relaxed">
                Upon arriving in Australia, you are required to advise Ridge International College of your residential address, email address, mobile phone number and emergency contact details. Any changes to these details must be notified to Ridge International College within 7 days of the change. It is extremely important that students notify Ridge International College of a change of address as, under Section 20 of the ESOS Act 2000, Ridge International College is obliged to serve a notice at your last known address if you breach a student visa condition relating to attendance or academic performance.
                <br /><br />
                Ridge International College may also send warning notices to you to help prevent breaches of your visa conditions. As per Tuition Protection Service (TPS) update, international students are required to update their current address at least every six months. It is your responsibility and in your own interests to ensure that your address details are always up to date.
              </p>
            </div>
          </section>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <section className="rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300" style={{ background: '#3554a5' }}>
              <div className="flex items-center gap-4 mb-6">
                <HeartPulse className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Student Support</h2>
              </div>
              <p className="mb-6">Need assistance with your studies? Our support team is here to help.</p>
              <button className="px-6 py-2 bg-white rounded-lg font-semibold hover:bg-blue-50 transition-colors" style={{ color: '#3554a5' }}>
                Contact Support
              </button>
            </section>

            <section className="rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300" style={{ background: '#3554a5' }}>
              <div className="flex items-center gap-4 mb-6">
                <Phone className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Emergency Contact</h2>
              </div>
              <p className="mb-6">24/7 emergency support available for urgent assistance.</p>
              <button className="px-6 py-2 bg-white rounded-lg font-semibold hover:bg-blue-50 transition-colors" style={{ color: '#3554a5' }}>
                Emergency Line
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentSupportServices;