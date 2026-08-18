import { getSearchRecords } from "@/lib/search/records";

export const dynamic = "force-static";

export function GET() {
  return Response.json(getSearchRecords());
}
