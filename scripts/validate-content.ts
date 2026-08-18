import { getContentGraph } from "@/lib/content/loader";

const graph = getContentGraph({ includeDrafts: true });
const publicCount = getContentGraph().public.length;

console.log(
  `Validated ${graph.all.length} authored content files (${publicCount} public).`,
);
