import { describe, expect, it } from "vitest";
import {
  getCertificateImageAssets,
  getProfileImagePath,
  profileImageCandidates,
} from "@/lib/assets";
import { getCvPdfHref, hasReviewedCvPdf } from "@/lib/cv";

describe("CV data", () => {
  it("detects the reviewed PDF download when the file exists", () => {
    expect(hasReviewedCvPdf()).toBe(true);
    expect(getCvPdfHref()).toBe("/cv/CV_Sina_Amirrajab.pdf");
  });

  it("detects the reviewed profile image added to public assets", () => {
    expect(profileImageCandidates).toContain("/images/profile/SinaProfile.png");
    expect(getProfileImagePath()).toBeDefined();
  });

  it("detects only image assets in the certificate image folder", () => {
    const assets = getCertificateImageAssets();

    expect(
      assets.every((asset) => asset.src.startsWith("/images/certificates/")),
    ).toBe(true);
    expect(assets.some((asset) => asset.src.endsWith(".gitkeep"))).toBe(false);
  });
});
