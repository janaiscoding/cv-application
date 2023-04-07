import uniqid from "uniqid";

const emptyCV = {
  personalInfo: {
    firstName: "Jana",
    lastName: "IsCoding",
    email: "jana.istrate@gmail.com",
    phoneNumber: "ABCD-XYZ-ZYX",
  },
  experience: [
    {
      id: uniqid(),
      position: "Intern",
      company: "FrontEnders",
      tasks: "Creating apps using React",
      to: "2022",
      from: "2023",
    },
  ],
  education: [
    {
      id: uniqid(),
      school: "Engineering",
      degree: "Bachelor's Degree",
      to: "2016",
      from: "2020",
    },
  ],
};

export default emptyCV;
