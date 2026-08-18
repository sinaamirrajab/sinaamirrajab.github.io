# Asset Candidates from Public Notion CV

Source: <https://sinaamirrajab.notion.site/Sina-s-CV-09dd4bc112e843c298f23c1fb6bc9383>

Extracted: 2026-07-29

These assets were discovered in the public Notion CV. They are **not** currently used by the production site because Notion-hosted and S3-hosted file URLs can expire, move, or have unclear reuse constraints.

Before using any asset publicly:

1. Confirm Sina approves the asset for the public website.
2. Download it into `public/images/...` or another stable local path.
3. Use descriptive filenames.
4. Add useful alt text when the image is informative.
5. Keep decorative images hidden from assistive technology.
6. Do not hotlink the Notion/S3 URL directly.

## Profile and page-level assets

- Page icon candidate: `sina_crop.png`
- Page cover candidate: `Sina_Amirrajab_Cover.jpg`
- Social preview candidate: `SocialMediaPreviewImage.png`

## Project image candidates

- Report2CT: `image1.png`, `image.png`
- LLMs for clinical report analysis: `image.png`
- Cardiac MRI Simulation Framework: `IEEETMI.jfif`
- Cardiac Pathology Synthesis: `pathology_synch.png`
- Conditional Cardiac MR Image Synthesis: `Fig2synth.png`
- Influence of Image Artifacts on Simulations of Cardiac Electrophysiology: `Pipeline.jpg`
- Cardiac MR scar quantification: `Fig2.png`
- Cardiac MRI Synthesis for Reducing Segmentation Failures: `Fig12.png`
- On the Usability of Synthetic Data: `media.jpg`
- PhD Thesis: `thesis_cover.png`

## Award and certificate image candidates

- FOMO25 method-track certificate: `certificate.jpg`
- MICCAI 2025 VLM3D certificate: `MICCAI2025-Certificate-7715_page-0001.jpg`
- GANs Specialization certificate: `Coursera_BMKVLDQN37J7_(1).png`
- Philips Best Paper Award certificate/image
- CMRxMotion image-quality-assessment certificate
- CMRxMotion robust-CMR-segmentation certificate
- Edited MRS Challenge certificate
- Stress Perfusion Imaging King's College London certificate

## Current decision

The site now supports reviewed local media, but these candidates are still not published until Sina approves and copies them into stable local paths.

Recommended local paths:

- Profile image: `public/images/profile/SinaProfile.png` or another supported `sina-profile.*` extension.
- Project images: `public/images/projects/<project-slug>.<ext>`.
- Award/certificate images: `public/images/certificates/<descriptive-name>.<ext>`.
- Project videos: `public/videos/<project-slug>.<ext>`.
- Social image: `public/og/<reviewed-social-image>.<ext>`.

After an asset is reviewed and copied locally, add optional `media` frontmatter to the relevant project, writing, or note file. Do not hotlink the Notion/S3 URL directly.
