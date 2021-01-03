import fs from "fs";
import path from "path";

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), "content", "blog");
// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
  console.log(POSTS_PATH, postFilePaths);

// PROJECTS_PATH is useful when you want to get the path to a specific file
export const PROJECTS_PATH = path.join(process.cwd(), "content", "products");

// projectsFilePaths is the list of all mdx files inside the PROJECTS_PATH directory
export const projectsFilePaths = fs
  .readdirSync(PROJECTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

// SERVICES_PATH is useful when you want to get the path to a specific file
export const SERVICES_PATH = path.join(process.cwd(), "content", "services");

// servicesFilePaths is the list of all mdx files inside the SERVICES_PATH directory
export const servicesFilePaths = fs
  .readdirSync(SERVICES_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
