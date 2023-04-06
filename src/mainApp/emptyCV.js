import uniqid from "uniqid";

const emptyCV = {
  personalInfo: {
    firstName: "test",
    lastName: "",
    email: "",
    phoneNumber: "",
  },
  experience: [
    {
      id: uniqid(),
      position: "",
      company: "",
      tasks: "",
      to: "",
      from: "",
    },
  ],
  education: [
    {
      id: uniqid(),
      school: "",
      degree: "",
      to: "",
      from: "",
    },
  ],
};

export default emptyCV;
