import React from "react";
import { SubjectData } from "../Data/Subject";
import { Heading } from "./Heading";
import { Search } from "./search";
import { SubjectTable } from "./Table";

export const Subject = () => {
  const columns = Object.keys(SubjectTable[0]);
  return (
    <>
      <Heading />
      <Search />
      <Table columns={columns} dataSource={SubjectData} />
    </>
  );
};
