import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const projectsDiretory = path.join(
  process.cwd(),
  'content/projects.md',
);

export async function getProjectsData() {
  const fullPath = path.join(projectsDiretory);
  const fileContents = fs.readFileSync(
    fullPath,
    'utf8',
  );

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    ...matterResult.data,
    contentHtml,
  };
}
