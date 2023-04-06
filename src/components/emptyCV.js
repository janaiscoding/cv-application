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
      year: "",
    },
  ],
  education: [
    {
      id: uniqid(),
      school: "",
      degree: "",
      year: "",
    },
  ],
};

export default emptyCV;
