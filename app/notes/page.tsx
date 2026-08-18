import type { Metadata } from "next";
import { WritingIndex } from "@/components/content/WritingIndex";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { getWritingArchiveEntries } from "@/lib/content/writing-archive";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing",
  description: "Legacy notes route for the combined writing and notes archive.",
  alternates: { canonical: absoluteUrl("/writing") },
  robots: { follow: true, index: false },
};

export default function NotesPage() {
  const items = getWritingArchiveEntries();

  return (
    <div data-pagefind-ignore>
      <PageHeader
        eyebrow="Writing"
        title="Notes have moved into Writing."
        description="Short notes and longer essays now share the same public archive."
      />
      <Container className="pb-10">
        <div className="mb-4">
          <Button href="/writing" variant="primary">
            Open Writing
          </Button>
        </div>
        <WritingIndex items={items} />
      </Container>
    </div>
  );
}
