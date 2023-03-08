// import projectData from "../data/project.json";

import Instance from "../helpers/KRU.Axios";

//import { pagination } from "../helpers/Pagination";

export const getProject = async (pageSize, currentPage, prmProjectName) => {
  try {
    const response = await Instance.get(
      `Get/getProject?pagesize=${pageSize}&currentpage=${currentPage}&search=${prmProjectName}`
    );

    return await response.data;
  } catch (error) {
    console.log("error", error);
  }
};

// export function getProject(
//   prmProjectName = "",
//   pagesize = 10,
//   currentpage = 1
// ) {
//   let project = projectData;

//   if (prmProjectName) {
//     project = project.filter((a) => a.projectName.includes(prmProjectName));
//   }

//   return pagination(pagesize, currentpage, project);
// }
