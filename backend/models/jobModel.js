import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Company description is required"],
      trim: true,
    },
    contactEmail: {
      type: String,
      required: [true, "Company email is required"],
      // match: [/\S + @ + \S + \. + \S/, "Enter valid email address"],
      match: [
        /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-z]{2,}$/,
        "Please provide a valid email address",
      ],
    },
    contactPhone: {
      type: String,
      required: [true, "Company contact number is required"],
      match: [
        /^[7-9][0-9]{9}$/,
        "Enter a valid phone number, containing only ten digits",
      ],
    },
  },
  {
    _id: false,
  }
);

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
      match: [/^[a-zA-Z0-9-\s]+$/, "Please enter the title correctly"],
    },
    type: {
      type: String,
      required: [true, "Job type is required"],
      enum: ["Full-Time", "Part-Time", "Remote", "Internship"],
    },
    description: {
      type: String,
      required: [true, "Job description is required"],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Job location is required"],
      trim: true,
    },
    salary: {
      type: String,
      required: [true, "Salary range is required"],
      enum: [
        "Under $50K",
        "$50K - $60K",
        "$60K - $70K",
        "$70K - $80K",
        "$80K - $90K",
        "$90K - $100K",
        "$100K - $125K",
        "$125K - $150K",
        "$150K - $175K",
        "$175K - $200K",
        "Over $200K",
      ],
    },
    company: {
      type: companySchema,
      required: [true, "Company is required"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const JobModel = mongoose.model("Job", jobSchema);

export default JobModel;
