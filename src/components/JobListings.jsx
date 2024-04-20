import { useEffect, useState } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]); //Why empty array ? Because we want input, we'll be filling this array
  const [loading, setLoading] = useState(true); //For Loading symbol while fetching

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs.json";

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data); //This will put the values into 'jobs'
      } catch (error) {
        console.log("Error fetching Data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []); //UseEffect takes in a function and a dependency array // Chat GPT with and without dependency array, you'll know
  // We use dependency array here since we only want the data to load once when module loads

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {/* Loading Screen Functionality */}
        {loading ? (
          <Spinner loading />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => {
                return <JobListing key={job.id} job={job} />;
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default JobListings;
