"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
interface IssueForm {
  title: string;
  description: string;
}

const NewIssue = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  console.log(register);

  return (
    <form
      className="max-w-lg space-y-3"
      onSubmit={handleSubmit(async (data) => {
        console.log(data);
        await axios.post("/api/issues", data);
        router.push("/issues");
      })}
    >
      <TextField.Root>
        <TextField.Input
          placeholder="Title"
          {...register("title")}
        ></TextField.Input>
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextArea placeholder="Description" {...field}></TextArea>
        )}
      ></Controller>
      <Button>Submit</Button>
    </form>
  );
};

export default NewIssue;
