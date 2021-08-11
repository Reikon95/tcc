import { React, useState } from "react";
import Header from "../../components/header/header";
import "./jobs.css";
import Button from "@material-ui/core/Button";

export default function Jobs({ jobs }) {
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  return (
    <>
      <Header text="Jobs" />

      <div className="page-content">
        <div>
          We are currently in the process of setting up a job board, focused on
          companies keen to give people a start in tech. For a limited time, you
          can advertise on our board. Please get in touch for details.
        </div>

        {filteredJobs &&
          filteredJobs.length > 0 &&
          filteredJobs.map((job) => {
            console.log(job);
            return (
              <div className="job-panel">
                <div>Job Title</div>
                <div>{job.company}</div>
                <div>Job Logo</div>
                <div>Job Salary</div>
                <div>Job Description</div>

                <Button variant="contained" color="secondary">
                  Apply to this job
                </Button>
              </div>
            );
          })}
        {filteredJobs?.length === 0 ||
          (!filteredJobs && <div>no filteredJobs here</div>)}
      </div>
    </>
  );
}
