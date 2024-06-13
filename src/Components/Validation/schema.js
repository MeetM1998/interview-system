import * as Yup from "yup";

const schema = Yup.object().shape({
  date: Yup.date().nullable().required("Please Select Date!"),

  name: Yup.string()
    .min(4, "Name at least 4 character required!")
    .required("Please Enter Candidate Name!"),

  interviewer: Yup.string().required("Please Select Interviewer Name!"),

  technology: Yup.array()
    .min(1, "Select Atleast One Technology")
    .required("Please Select Technology!"),

  experienceInYear: Yup.number()
    .integer()
    .typeError("Please Enter Valid Year!")
    .required("Please Enter experience In Year!"),

  experienceInMonth: Yup.number()
    .min(0, "Minimum Value 0!")
    .max(11, "Max Value 11!")
    .integer()
    .typeError("Please Enter Valid Month!")
    .required("Please Enter experience In Month!"),

  round: Yup.string().optional().required("Please Select Round!"),

  communication: Yup.string().when("round", {
    is: (round) => round === "Technical",
    then: Yup.string().required("Please Select Communication level!"),
  }),

  practical: Yup.number().when("round", {
    is: (round) => round === "Practical",
    then: Yup.number()
      .typeError("Please Enter Only Digit!")
      .required("Please Enter Practical Completion!"),
  }),

  coding: Yup.number().when("round", {
    is: (round) => round === "Practical",
    then: Yup.number()
      .typeError("Please Enter Only Digit!")
      .required("Please Enter Coding Standard!"),
  }),

  technical: Yup.number().when("round", {
    is: (round) => round === "Technical",
    then: Yup.number()
      .typeError("Please Enter Only Digit!")
      .required("Please Enter Technical Completion!"),
  }),

  notes: Yup.string().required("Please Write Feedback Of Interview!"),
});

export default schema;
