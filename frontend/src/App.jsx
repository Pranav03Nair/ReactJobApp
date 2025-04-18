import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { toast } from "react-toastify";

import Mainlayout from "./layouts/Mainlayout";
import Homepage from "./pages/Homepage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

import axios from "./api/axios.js";

const App = () => {
  // Add New Job
  const addJob = async (newJob) => {
    try {
      await axios.post("/jobs", newJob);
      toast.success("Job Added Successfully");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Failed to create Job ";
      toast.success(errorMessage);
      console.error("Error adding Job - ", errorMessage);
    }
  };

  // Delete Job
  const deleteJob = async (id) => {
    try {
      await axios.delete(`/jobs/${id}`);
      toast.success("Job Deleted Successfully");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Failed to create Job";
      toast.success(errorMessage);
      console.error("Error deleting Job", errorMessage);
    }
  };

  // Update Job
  const updateJob = async (updatedJob) => {
    try {
      await axios.put(`jobs/${updatedJob.id}`, updatedJob);
      toast.success("Job Updated Successfully");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Failed to create Job";
      toast.success(errorMessage);
      console.error("Error updating Job", errorMessage);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Homepage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
