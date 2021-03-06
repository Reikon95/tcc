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
          can advertise on our board for free (and if you are among our first
          advertisers, we will never charge!) Please get in touch for details.
        </div>

        {filteredJobs &&
          filteredJobs.length > 0 &&
          filteredJobs.map((job) => {
            return (
              <div className="job-panel">
                <div>
                  <div className="job-title">{job.title}</div>
                  <div className="job-company">{job.company}</div>
                  <div>Remote: {job.remote}</div>
                  <div>Location: {job.location}</div>
                  <div>{job.salary}</div>
                </div>
                <div className="desc-and-apply">
                  <div className="job-description">{job.description}</div>
                </div>
                <div>
                  <img
                    src="https://avatars.githubusercontent.com/u/38852603?v=4"
                    width="100"
                    height="100"
                    alt="picture of cam"
                    className="cam-picture"
                  />
                  <Button variant="contained" color="secondary">
                    Apply
                  </Button>
                </div>
              </div>
            );
          })}
        {filteredJobs?.length === 0 ||
          (!filteredJobs && (
            <div>We currently don't have any jobs available, sorry!</div>
          ))}
      </div>
    </>
  );
}
