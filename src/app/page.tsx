import { Task } from "gantt-task-react";
import HomePage from "./HomePage/page";
import { useAppSelector } from "./redux";
import { Priority, useGetProjectsQuery, useGetTasksQuery } from "./state/api";

export default function Home() {
  return <HomePage />;
}
