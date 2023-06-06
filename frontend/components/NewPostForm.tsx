"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import { CREATE_POST } from "@/utils/queries";
import { useMutation } from "@apollo/client";

const NewPostForm = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const [createPost] = useMutation<{ createPost: string }>(CREATE_POST);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createPost({
        variables: {
          data: {
            content: inputValue,
          },
        },
      });
      setInputValue("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" w-1/2 card card-side bg-gradient-to-r from-emerald-300 via-green-300 via-20% shadow-xl">
      <form className="w-full card-body" onSubmit={handleSubmit}>
        <div className="w-full flex row justify-center gap-10">
          <textarea
            placeholder="Bio"
            className=" textarea form-control textarea-bordered textarea-sm w-full max-h-2"
            name="content"
            value={inputValue}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn btn-active bg-green-200">
            Primary
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPostForm;
