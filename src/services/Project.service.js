import projectData from "../data/project.json";

import { pagination } from "../helpers/Pagination";

export function getProject(
  prmProjectName = "",
  pagesize = 10,
  currentpage = 1
) {
  let project = projectData;

  if (prmProjectName) {
    project = project.filter((a) => a.projectName.includes(prmProjectName));
  }

  return pagination(pagesize, currentpage, project);
}
