import JobModel from "../models/jobModel.js";

// @desc    Test Route
// @route   GET api/jobs/test
// @access  public
export const testRoute = (req, res) => {
  res.send("Controller is working");
};

// @desc    Fetch all jobs
// @route   GET api/jobs/
// @access  public
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await JobModel.find({});
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Failed to Fetch Jobs" });
  }
};

// @desc    Fetch A job
// @route   GET api/jobs/id
// @access  public
export const getAJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await JobModel.findById(jobId);

    if (!job) {
      return res.status(404).json({ error: "Job Not Found" });
    }

    return res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: "Failed to view Job" });
  }
};

// @desc    Add a job
// @route   POST api/jobs/
// @access  public
export const addJob = async (req, res) => {
  try {
    const newJob = new JobModel(req.body);
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc    Update job
// @route   PUT api/jobs/id
// @access  public
export const updateJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const updatedData = req.body;

    const updatedJob = await JobModel.findByIdAndUpdate(jobId, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedJob) {
      return res.status(404).json({ error: "Job not found" });
    }

    return res.status(200).json({ updatedJob });
  } catch (error) {
    res.status(400).json({ error: "Failed to update Job" });
  }
};

// @desc    Delete a Job
// @route   DELELTE api/jobs/id
// @access  public
export const deleteJob = async (req, res) => {
  try {
    const job = await JobModel.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });

    res.status(200).json({ message: "Job deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
