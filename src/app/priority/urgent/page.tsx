import React from "react";
import ReusablePriorityPage from "../reusablePriorityPage";
import { Priority } from "@/app/state/api";

type Props = {};

const UrgentPriorityPage = (props: Props) => {
  return <ReusablePriorityPage priority={Priority.Urgent} />;
};

export default UrgentPriorityPage;
