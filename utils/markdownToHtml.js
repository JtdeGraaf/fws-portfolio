import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkImages from 'remark-images'

export default async function markdownToHtml(markdown) {
  const result = await remark()
      .use(gfm)
      .use(remarkUnwrapImages)
      .use(remarkImages)
      .use(html)
      .process(markdown);
  return result.toString();
}
