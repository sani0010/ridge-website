import React, { useState, useEffect } from 'react';

const DomesticStudents = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const enrollmentContent = {
    title: "Check Your Eligibility and Enrol",
    description: "Follow these simple steps to check your eligibility and enroll at Ridge International College:",
    features: [
      {
        title: "Step 1",
        description: "Get familiar with Smart & Skilled by visiting their website."
      },
      {
        title: "Step 2",
        description: "Go to the Course Finder and click on Calculate your Fee to find out if you are eligible and to get an estimate of your fees. The level of subsidy you are entitled to will vary depending on your circumstances. The fee you are required to pay is set and will not change if you choose another provider. If you are unsure of this process, you can contact us, and we can advise you of your eligibility and any concessions of exemption or if you qualify for a fee-free scholarship. If you are not eligible for a full subsidy, don't stress as we can work out a flexible payment plan for you."
      },
      {
        title: "Step 3",
        description: "Select your Training Provider. You will be able to find Ridge International College listed under Malekhu Investments Pty Ltd on page 15."
      },
      {
        title: "Step 4",
        description: "Click on Malekhu Investments Pty Ltd hyperlink. You will be directed to the Ridge International College website."
      },
      {
        title: "Step 5",
        description: "Go to Domestic Programs and click on the NSW Smart & Skilled Funding. Follow the prompts to read full information about the qualification of your choice. Once you have made an informed decision and are ready to enroll, simply contact us or go to the Resources tab on our website and complete the 'Consent Form' and a declaration that all information provided is true and correct."
      },
      {
        title: "Step 6",
        description: "Gather all required documents for eligibility and enrollment. You will need to provide proof of the following:",
        items: [
          "Australian Citizenship, Permanent Residency, New Zealand Citizen, Approved Visa Holders (Other than Student Visa)",
          "Be 15 Years or Over",
          "Have 100 Points of your Personal ID",
          "Obtain USI, Police Check, Working with Children Check",
          "Have Immunisation Records/Evidence (COVID-19, Flu Vaccines are required in all Accredited Residential Care Facilities; if you are not vaccinated, the facility may not accept you for work placement)"
        ]
      },
      {
        title: "Step 7",
        description: "Ridge International College will generate and maintain a hard copy or electronic copy of the Notification of Enrollment report and provides a copy of this to prospective students. Successful completion of the Notification of Enrollment process will result in the issuance of a Commitment ID. Prospective students must confirm (by reading and signing the enrollment form) that all information provided by the student to the provider, in connection with the Notification of Enrollment process, is true, accurate, complete, and not misleading in any way."
      },
      {
        title: "Step 8",
        description: "Prospective students will be enrolled into our Student Management System and Learning Management System and be sent a notification upon successful enrollment in the systems via email. The notification also contains login details for prospective students."
      },
      {
        title: "Step 9",
        description: "Prospective students will receive a link for completion of an LLN test on our Learning Management System (Moodle). Once you have completed the LLN test, the results will be generated, and support strategies will be determined if there are areas that need to be strengthened."
      },
      {
        title: "Step 10",
        description: "Prospective students will receive a Training Plan from Ridge International College as soon as enrollment in the Student Management System is successful. Students will also be given an opportunity to have input into developing the Training Plan. The contact details of your trainer and student services staff will also be provided in your Training Plan."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-[#3554a5] overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className={`max-w-2xl transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl font-bold text-white mb-6">
              Domestic Students
            </h1>
            <p className="text-xl text-white/90">
              Your pathway to success starts here. Join Ridge International College
              and benefit from quality education.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 mt-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {enrollmentContent.title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            {enrollmentContent.description}
          </p>

          {enrollmentContent.features.map((feature, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold text-[#3554a5] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {feature.description}
              </p>
              {feature.items && (
                <ul className="list-disc ml-6 text-gray-600">
                  {feature.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DomesticStudents;