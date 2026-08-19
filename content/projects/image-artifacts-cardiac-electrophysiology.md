---
title: "Influence of Image Artifacts on Simulations of Cardiac Electrophysiology"
slug: "image-artifacts-cardiac-electrophysiology"
summary: >-
  Myocardial infarct patients face an increased risk of scar-based
  ventricular tachycardia, and computational electrophysiological models
  built from late gadolinium enhanced MR images can provide a personalized
  prediction of that risk. This work investigates how respiratory
  slice-alignment image artifacts affect such image-based simulations, using
  two model series: one from a clinical MR image with slice translations
  applied to artificially induce and correct misalignment, and one from
  computer-simulated MR images with and without slice misalignment, built
  from a mechanistic anatomical torso phantom. Personalized models built
  from these images had electrical stimuli applied to attempt to induce
  tachycardia, and the response of aligned versus misaligned models to
  different stimuli was used to assess risk. Slice misalignments were found
  to affect simulation outcomes, with the extent depending on infarct
  geometry: the number of inducible tachycardia patterns and stimuli
  locations varied with misalignment severity, and channel-dependent
  tachycardias could disappear entirely if the conducting channel was lost
  from the image.
year: 2021
status: "completed"
tags:
  - cardiac-mri
  - mri
  - simulation
  - medical-imaging
paperUrl: "https://www.sciencedirect.com/science/article/pii/S0010482521005679"
codeUrl: "https://github.com/sinaamirrajab/LGE_CMRI_Simulation"
draft: false
---

## Abstract

Myocardial infarct patients have an increased risk of scar-based ventricular tachycardia. Late gadolinium enhanced magnetic resonance (MR) imaging provides the geometric extent of myocardial infarct. Computational electrophysiological models based on such images can provide a personalized prediction of the patient's tachycardia risk. In this work, the effect of respiratory slice alignment image artifacts on image-based electrophysiological simulations is investigated in two series of models. For the first series, a clinical MR image is used in which slice translations are applied to artificially induce and correct for slice misalignment. For the second series, computer simulated MR images with and without slice misalignments are created using a mechanistic anatomical phantom of the torso. From those images, personalized models are created in which electrical stimuli are applied in an attempt to induce tachycardia. The response of slice-aligned and slice-misaligned models to different interval stimuli is used to assess tachycardia risk.

The presented results indicate that slice misalignments affect image-based simulation outcomes. The extent to which the assessed risk is affected is found to depend upon the geometry of the infarct area. The number of unidirectional block tachycardias varied from 1 to 3 inducible patterns depending on slice misalignment severity and, along with it, the number of tachycardia inducing stimuli locations varied from 2 to 4 from 6 different locations. For tachycardias sustained by conducting channels through the scar core, no new patterns are induced by altering the slice alignment in the corresponding image. However, it affected the assessed risk as tachycardia inducing stimuli locations varied from 1 to 5 from the 6 stimuli locations. In addition, if the conducting channel is not maintained in the image due to slice misalignments, the channel-dependent tachycardia is not inducible anymore in the image-based model.
