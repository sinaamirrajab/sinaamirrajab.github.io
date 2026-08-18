---
title: "Report2CT: Radiology Report-Conditional 3D CT Generation"
slug: "report2ct"
summary: "A research framework for 3D latent diffusion conditioned on complete radiology reports."
problem: "Medical image generation from rich clinical language is technically difficult because reports contain findings, context, and uncertainty that must be translated into spatial image structure."
contribution: "The project combines complete-report conditioning with multiple pretrained medical text encoders for 3D chest CT synthesis."
year: 2025
status: "completed"
featured: true
order: 1
tags:
  - generative-ai
  - medical-imaging
  - ct
  - diffusion-models
  - radiology-reports
  - vision-language-models
paperUrl: "https://arxiv.org/abs/2509.14780"
codeUrl: "https://github.com/sinaamirrajab/report2ct"
related:
  publications: []
draft: false
---

## Research Context

I describe Report2CT in my public CV as radiology-report-conditional 3D CT generation. The project addresses a limitation in medical text-to-image synthesis: many approaches use simplified prompts rather than the richer semantic detail available in full radiology reports.

## Approach

The source description presents Report2CT as a radiology-report-conditional latent diffusion framework for synthesizing 3D chest CT volumes directly from free-text radiology reports, including both findings and impression sections.

The described conditioning stack uses multiple pretrained medical text encoders, including BiomedVLP CXR BERT, MedEmbed, and ClinicalBERT, to capture clinical context. The report and voxel-spacing information condition a 3D latent diffusion model.

## Evaluation Context

The source description reports training on 20,000 CT volumes from the CT-RATE dataset and evaluation with distributional and semantic-alignment metrics, including FID and CLIP-based metrics, with comparisons against GenerateCT.

## Status

Report2CT ranked first in the VLM3D Challenge at MICCAI 2025 on text-conditional CT generation. The paper and code are now public.
