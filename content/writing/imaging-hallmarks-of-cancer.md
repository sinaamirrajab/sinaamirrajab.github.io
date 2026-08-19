---
title: "A Field Guide to Imaging the Hallmarks of Cancer"
slug: "imaging-hallmarks-of-cancer"
description: "A 12-author review maps all 14 biological hallmarks of cancer onto the PET, MRI, CT, ultrasound and AI tools that can see each one at work."
publishedAt: "2026-08-19"
cover: "/images/writing/imaging-hallmarks-of-cancer/imaging-hallmarks-of-cancer.webp"
tags:
  - oncologic-imaging
  - medical-imaging
  - radiology
  - clinical-translation
featured: false
draft: true
---

**Paper:** Imaging the hallmarks of cancer
**Authors:** Jan Grimm et al.
**Published in:** Nature Reviews Cancer, 2026

![Infographic summary of Imaging the hallmarks of cancer](/images/writing/imaging-hallmarks-of-cancer/imaging-hallmarks-of-cancer.webp)

## The Paper in One Sentence

This review works through all 14 biological "hallmarks" that define a cancer cell and asks which non-invasive technique, PET, MRI, CT, ultrasound, optoacoustic imaging, or AI-driven radiomics (patterns extracted from scans), can see it at work, in a patient where human data exist, or the best animal model where they don't.

> **Main takeaway:** Almost every cancer hallmark can now be probed non-invasively, but few of the resulting biomarkers guide routine treatment yet.

## 🔍 Why Does This Paper Matter?

Hanahan and Weinberg's "hallmarks of cancer" framework, updated since 2000 to 14 hallmarks, organizes tumour biology into acquired capabilities (sustained proliferation, evading cell death, inducing blood vessels, and more), and drugs increasingly target them directly, including "hallmark co-targeting."

Acting on that needs biomarkers that stratify a patient for a hallmark-targeted therapy, plus a repeatable, non-invasive check it's hitting its target, something a single biopsy can't do in an evolving, heterogeneous tumour. The authors' aim: review which imaging approaches exist for each hallmark today.

## 🧩 What Did They Do?

This is a synthesis, not a new experiment. A 12-author panel, including Douglas Hanahan himself, catalogued the most advanced imaging approach for each hallmark, favoring human-tested methods.

- **Data:** ~350 cited imaging studies, organized against the hallmarks framework.
- **Task:** Map each hallmark to the modality/probe that detects it, and its clinical stage.
- **Comparison:** Standard CT/MRI/[18F]FDG-PET versus hallmark-specific probes and AI radiomics.
- **Evaluation:** Translational stage, not one metric.

### The Method in Three Steps

1. **Input:** a cancer hallmark (e.g., proliferation, angiogenesis, immune evasion).
2. **Processing:** match a molecular correlate to a tracer, contrast agent, or AI feature, and check the human evidence.
3. **Output:** a hallmark-to-modality map (Fig. 1), a probe table (Table 1), and example scans.

## 📊 What Did They Find?

The headline isn't one number but a landscape: almost every hallmark has a preclinical approach, yet clinical maturity varies enormously.

- Senescence PET tracer [18F]FPyGal moved from mouse tumours into an ongoing phase I/II trial (NCT04536454); phase II data already show PET signal correlating with ex vivo senescence markers.
- [177Lu]PSMA-617 (the therapeutic half of a theranostic pair with PSMA PET tracers like [68Ga]PSMA-11) won FDA and EMA approval in 2022, one of the clearest hallmark-to-clinic successes.
- Annexin A5 apoptosis imaging, by contrast, has run in patients for two decades without reaching practice, hurt by sensitivity/specificity issues shared across cell-death tracers and no evidence it changes treatment.

Unlike a single biopsy, these approaches are repeatable and whole-body: that longitudinal view, not any one tracer, is the meaningful advance.

## 💡 So What?

The review tells drug developers, radiologists and imaging researchers which hallmark-targeted therapies already have a matching biomarker, and which remain invisible to imaging. It could help:

- Drug developers pair a therapy with an imaging biomarker earlier in trial design.
- Radiologists read a routine [18F]FDG-PET scan knowing which hallmark drives the signal.
- Radiomics researchers spot hallmarks relying only on indirect surrogates, since no probe exists yet.

The novel element, in my own reading, is treating AI image analysis as one more entry in the hallmark-to-imaging map, beside PET tracers and MRI agents: a preclinical, foundation-model signature for homologous recombination deficiency, a genome-instability marker.

## ⚠️ What Are the Limitations?

- As a narrative, not systematic, review, the "most advanced" example per hallmark reflects panel judgment, and several authors disclose patents or ties to tracers discussed here.
- Table 1 lists only human-tested probes, spanning Phase I to full approval with no scale between them. Replicative immortality (telomerase imaging) and epigenetic reprogramming (epigenetic MRI) have no entry at all; both remain preclinical.
- For decades-old cell-death tracers and others, the review admits there's no solid evidence imaging changes treatment.

The paper does not show any single biomarker is ready to replace biopsy-based stratification.

**Now what?** The review's bottom line: clinical success for a hallmark-specific tracer will be decided by trials proving cost-efficient impact on management and outcome, not a new probe alone. Radiomics builders should watch the Radiomics Quality Score (RQS 2.0) and the harmonization gap flagged as unresolved.

## 👥 Who Should Read This?

This is particularly relevant for:

- Molecular and nuclear medicine researchers scouting a hallmark that still lacks a good probe
- Radiologists and oncologists wanting one map from scans they order to tumour biology
- AI and radiomics researchers picking which hallmark's phenotype suits a new model
- Trainees wanting a structured overview instead of piecing this together paper by paper

Skip it for head-to-head numbers on one technique: this is a field map, not a meta-analysis.

## My Take

| | |
|---|---|
| Novelty | ★★★☆☆ |
| Technical quality | ★★★★☆ |
| Practical relevance | ★★★★★ |
| Reproducibility | ★★☆☆☆ |

**What I liked:** The conclusion is candid: hallmark-specific tracers will likely lose to cheap options like FDG-PET unless they justify their added cost.

**What concerned me:** Table 1 mixes an FDA-approved drug with Phase I-only agents under one title, with no cue for the gap between them.

**Final verdict:** Less a study to critically evaluate than a reference to keep bookmarked: the most complete map of what cancer biology can be seen from outside the body. I'd point a colleague here before any single cited trial.

---

**Citation:** Grimm, J. et al. Imaging the hallmarks of cancer. *Nat. Rev. Cancer* 26, 661-688 (2026).
**Paper:** [Imaging the hallmarks of cancer](https://doi.org/10.1038/s41568-026-00950-y)
**Code:** Not available
**Data:** Not applicable
