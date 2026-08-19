---
title: "Privacy-preserving open-source LLMs for clinical CMR report analysis"
slug: "clinical-cmr-report-llms"
summary: >-
  We investigated the utilization of privacy-preserving, locally-deployed,
  open-source large language models to extract diagnostic information from
  free-text cardiovascular magnetic resonance (CMR) reports. Nine open-source
  LLMs were evaluated on their ability to identify diagnoses and classify
  patients into cardiac diagnostic categories based on descriptive findings
  in 109 clinical CMR reports, scored with accuracy, precision, recall, and
  F1, with confusion matrices used to examine misclassification patterns.
  Most models performed exceptionally well: Google's Gemma2 achieved the
  highest average F1 score of 0.98, followed by Qwen2.5:32B and
  DeepseekR1-32B at 0.96 and 0.95. All other evaluated models scored above
  0.93, apart from Mistral and DeepseekR1-7B. The top four LLMs outperformed
  a board-certified cardiologist (F1 score of 0.94) across every evaluation
  metric. These findings demonstrate the feasibility of using open-source,
  privacy-preserving LLMs in clinical settings for automated, accurate, fast,
  and resource-efficient diagnostic categorization of imaging reports.
year: 2025
paperUrl: "https://arxiv.org/abs/2506.00060"
codeUrl: "https://github.com/sinaamirrajab/llm_CMR_report_analysis"
status: "active"
featured: true
order: 2
tags:
  - llms
  - cmr
  - cardiac-mri
  - radiology-reports
  - privacy-preserving-ai
  - open-source
  - clinical-decision-support
draft: false
---

## Abstract

Purpose: We investigated the utilization of privacy-preserving, locally-deployed, open-source Large Language Models (LLMs) to extract diagnostic information from free-text cardiovascular magnetic resonance (CMR) reports.

Materials and Methods: We evaluated nine open-source LLMs on their ability to identify diagnoses and classify patients into various cardiac diagnostic categories based on descriptive findings in 109 clinical CMR reports. Performance was quantified using standard classification metrics including accuracy, precision, recall, and F1 score. We also employed confusion matrices to examine patterns of misclassification across models.

Results: Most open-source LLMs demonstrated exceptional performance in classifying reports into different diagnostic categories. Google's Gemma2 model achieved the highest average F1 score of 0.98, followed by Qwen2.5:32B and DeepseekR1-32B with F1 scores of 0.96 and 0.95, respectively. All other evaluated models attained average scores above 0.93, with Mistral and DeepseekR1-7B being the only exceptions. The top four LLMs outperformed our board-certified cardiologist (F1 score of 0.94) across all evaluation metrics in analyzing CMR reports.

Conclusion: Our findings demonstrate the feasibility of implementing open-source, privacy-preserving LLMs in clinical settings for automated analysis of imaging reports, enabling accurate, fast and resource-efficient diagnostic categorization.
