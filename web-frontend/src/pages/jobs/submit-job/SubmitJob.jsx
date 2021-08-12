import React, { useState } from "react";
import { useForm } from "react-hook-form";
export default function SubmitJob() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));
  return (
    <>
      Thank you very much for your interest in advertising with The Coder
      Career. We are currently offering all job posting for{" "}
      <strong>free</strong> until 2022, and if you already posted a job by then,
      you'll get to post jobs free, forever, as a thank you for helping us.
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First name" />
        <input {...register("lastName")} placeholder="Last name" />
        <select {...register("category")}>
          <option value="">Select...</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
        </select>

        <p>{result}</p>
        <input type="submit" />
      </form>
    </>
  );
}
