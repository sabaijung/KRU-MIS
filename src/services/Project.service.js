import projectData from "../data/project.json";

import { pagination } from "../helper/pagination";

export function getProject(search = "", pagesize = 10, currentpage = 1) {
  let project = projectData;

  if (search) {
    project = project.filter((a) => a.name.includes(search));
  }

  return pagination(pagesize, currentpage, project);
}
