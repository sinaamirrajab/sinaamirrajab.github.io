import fs from "node:fs";
import path from "node:path";
import { siteConfig, withBasePath } from "@/lib/site";

export const cvPdfPaths = [
  "/cv/sina-amirrajab-cv.pdf",
  "/cv/CV_Sina_Amirrajab.pdf",
] as const;

export const cvPdfPath = cvPdfPaths[0];

export type CvLink = {
  href: string;
  label: string;
};

export type CvEntry = {
  details?: readonly string[];
  institution?: string;
  links?: readonly CvLink[];
  location?: string;
  period: string;
  title: string;
};

export type CvSkillGroup = {
  items: readonly string[];
  title: string;
};

export const cvData = {
  source: {
    label: "Public Notion CV",
    href: "https://sinaamirrajab.notion.site/Sina-s-CV-09dd4bc112e843c298f23c1fb6bc9383",
    extractedAt: "2026-07-29",
  },
  summary:
    "I am an AI and Generative AI researcher working in radiology, medical imaging, and clinical translation, grounded in electrical and biomedical engineering.",
  currentWork:
    "I am a postdoctoral researcher at Maastricht University working on AI and Generative AI in medical imaging, including conditional image synthesis, foundation models, and multimodal vision-language models.",
  trajectory: [
    "Electrical engineering",
    "Biomedical engineering",
    "MRI",
    "Medical image analysis",
    "Deep learning",
    "Translational clinical AI",
  ],
  education: [
    {
      period: "2018 - 2023",
      title: "PhD Candidate",
      institution: "Eindhoven University of Technology",
      location: "Eindhoven, The Netherlands",
      details: [
        "Supervisor: Prof. Dr. Ir. Marcel Breeuwer",
        "Focus: cardiovascular MRI simulation and synthesis for medical image analysis",
        "Project: OpenGTN, Marie Curie ITN-EID",
        "Thesis: Realistic Cardiovascular Magnetic Resonance Image Simulation and Synthesis for Medical Image Analysis",
      ],
      links: [
        {
          label: "Thesis",
          href: "https://research.tue.nl/en/publications/simulation-and-synthesis-for-cardiac-magnetic-resonance-image-ana",
        },
        { label: "OpenGTN", href: "https://opengtn.eu/" },
      ],
    },
    {
      period: "2014 - 2017",
      title: "MSc in Biomedical Engineering",
      institution: "Amirkabir University of Technology",
      location: "Tehran, Iran",
      details: [
        "Supervisor: Dr. Abbas Nasiraei Moghaddam",
        "Focus: metal artifact estimation and correction in MRI with foreign metallic objects",
        "GPA: 17.46/20 (3.8/4)",
      ],
    },
    {
      period: "2009 - 2013",
      title: "BSc in Electrical Engineering (Electronics)",
      institution: "University of Guilan",
      location: "Rasht, Iran",
      details: [
        "Supervisor: Dr. Seyed Mohsen Hosseini-Golgoo",
        "Focus: design and production of a solid-state relay",
      ],
    },
  ] satisfies readonly CvEntry[],
  experience: [
    {
      period: "2024 - present",
      title: "Postdoctoral Researcher",
      institution: "Maastricht University",
      location: "Maastricht, The Netherlands",
      details: [
        "Focus: AI and Generative AI in medical imaging",
        "Responsibilities include grant writing, project definition, and PhD supervision on conditional image synthesis, foundation models, and multimodal vision-language models.",
      ],
    },
    {
      period: "2023 - 2024",
      title: "Postdoctoral Researcher",
      institution: "Eindhoven University of Technology",
      location: "Eindhoven, The Netherlands",
      details: [
        "Focus: artificial intelligence for magnetic resonance spectroscopy",
        "Project: Spectralligence, ITEA4-funded",
      ],
      links: [
        { label: "Spectralligence", href: "https://spectralligence.eu/" },
      ],
    },
    {
      period: "2018 - 2024",
      title: "AI Researcher in Medical Image Analysis",
      institution: "Eindhoven University of Technology",
      location: "Eindhoven, The Netherlands",
    },
    {
      period: "2017 - 2018",
      title: "Undergraduate Research Advisor",
      institution: "Amirkabir University of Technology",
      location: "Tehran, Iran",
      details: [
        "Advised work on the design and production of a smart contrast-agent injection pump for MR angiography.",
      ],
    },
    {
      period: "2016 - 2018",
      title: "MR Researcher",
      institution: "Amiran Negar Teb Company",
      location: "Tehran, Iran",
      details: [
        "Researcher in MR physics",
        "Established quality assurance procedures for MRI based on the ACR Accreditation Program",
        "Performed quality control and acceptance testing for newly purchased MRI scanners for institutes and hospitals",
      ],
    },
    {
      period: "2014 - 2017",
      title: "Research Assistant",
      institution: "Advanced Medical Imaging Research Lab (AMIRLab)",
      location: "Tehran, Iran",
      details: [
        "Simulated magnetic-field perturbation in the presence of metal using ANSYS Maxwell and MRI procedures with static-field inhomogeneity.",
        "Worked with pulse-sequence simulation using JEMRIS and MRiLab.",
        "Designed a specific phantom for MRI experiments on metal-related artifacts.",
      ],
    },
    {
      period: "2013 - 2015",
      title: "Electronics Research and Development Engineer",
      institution: "Persian Electronics Company",
      location: "Tehran, Iran",
      details: [
        "Industrial project advising and planning design",
        "Electrical PCB design for advanced control systems",
        "Product management and quality control",
      ],
    },
  ] satisfies readonly CvEntry[],
  teaching: [
    {
      period: "2024 - present",
      title: "Graduate Teaching",
      institution: "Maastricht University",
      details: [
        "Course: Medical Informatics MIE1004",
        "Lecture on medical image analysis with deep learning and radiomics as part of the MSc Molecular Imaging and Engineering course in FHML.",
      ],
    },
    {
      period: "2021 - 2022",
      title: "Graduate Teaching",
      institution: "Eindhoven University of Technology",
      details: [
        "Course: Machine Learning in Medical Imaging and Biology, Medical Image Analysis group, Biomedical Engineering Department",
        "Held practical sessions for solving assignments.",
      ],
    },
    {
      period: "2016 - 2017",
      title: "Undergraduate Teaching Assistant and Lecturer Assistant",
      institution: "Amirkabir University of Technology",
      details: [
        "Course: The Principles of Radiology and Radiography Systems, Department of Biomedical Engineering",
        "Held 11 weekly classes reviewing course content.",
        "Taught the MRI section of the course.",
        "Graded final projects and seminars.",
      ],
    },
    {
      period: "2015 - 2016",
      title: "Graduate Teaching Assistant",
      institution: "Amirkabir University of Technology",
      details: [
        "Course: Medical Imaging Systems",
        "Prepared and graded homework solutions.",
        "Held four assignment-solving classes.",
        "Graded final projects.",
      ],
    },
  ] satisfies readonly CvEntry[],
  skillGroups: [
    {
      title: "Programming and technical",
      items: [
        "Python",
        "PyTorch",
        "TensorFlow",
        "MONAI",
        "PyTorch Lightning",
        "Hugging Face",
        "NumPy",
        "SciPy",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "scikit-learn",
        "scikit-image",
        "Gradio",
        "Weights & Biases",
        "Ollama",
        "OpenCV",
        "SimpleITK",
        "DICOM and medical data handling",
      ],
    },
    {
      title: "Medical imaging",
      items: [
        "Medical image analysis with CT and MR",
        "Cardiac MR acquisition, reconstruction, quantitative mapping, and disease characterization",
        "Oncologic CT and MR imaging",
        "Image simulation, synthesis, and radiomics",
      ],
    },
    {
      title: "Artificial intelligence and machine learning",
      items: [
        "Deep learning",
        "Classical machine learning",
        "Feature engineering",
        "Generative AI: GANs, VAEs, diffusion models, and latent diffusion",
        "Foundation models and large language models",
        "Retrieval-augmented generation",
        "Multimodal vision-language models and multimodal data fusion",
        "Clinical AI applications in diagnosis, segmentation, anomaly detection, risk stratification, prognosis, survival analysis, and treatment-response prediction",
      ],
    },
    {
      title: "Professional",
      items: [
        "Interdisciplinary teamwork across engineering, radiology, and clinical research",
        "Problem solving in complex translational AI workflows",
        "Grant writing and research proposal development",
        "Mentoring and supervision of PhD and MSc students",
        "Communicating technical concepts to clinical and scientific stakeholders",
      ],
    },
  ] satisfies readonly CvSkillGroup[],
  interests: [
    "Cardiac magnetic resonance imaging",
    "Medical image acquisition, reconstruction, and quantitative imaging",
    "Oncologic imaging and AI for cancer detection, staging, and treatment monitoring",
    "AI for cardiovascular disease diagnosis, risk prediction, and precision cardiology",
    "Deep generative modeling for medical image synthesis, simulation, and data augmentation",
    "Multimodal AI integrating imaging, clinical text, and EHR data",
    "Foundation models, LLMs, and vision-language models for medical applications",
    "Clinically deployable AI systems and real-world translation",
  ],
  awards: [
    {
      period: "2025",
      title:
        "1st place in the VLM3D Challenge of MICCAI 2025 for generating high-resolution synthetic CT images from radiological reports",
    },
    {
      period: "2025",
      title:
        "3rd place in the Method Track of the FOMO25 Foundation Model Challenge for Brain MRI",
    },
    {
      period: "2023",
      title: "Edited Magnetic Resonance Spectroscopy Challenge 2nd Place",
    },
    {
      period: "2022",
      title:
        "CMRxMotion Challenge STACOM Workshop 3rd Place Award: Image Quality Assessment",
    },
    {
      period: "2022",
      title:
        "CMRxMotion Challenge STACOM Workshop 3rd Place Award: Robust CMR Segmentation",
    },
    {
      period: "2021",
      title: "Philips Best Paper Award on Scientific Impact Computer Vision",
    },
    {
      period: "2021",
      title: "GANs Specialization, Coursera",
      links: [
        {
          label: "Credential",
          href: "https://coursera.org/share/63ec77ecb7413546b9a5a181abc87466",
        },
      ],
    },
    {
      period: "2021",
      title: "Stress Perfusion Imaging, King's College London",
    },
  ] satisfies readonly CvEntry[],
  contact: siteConfig.social,
} as const;

export function hasReviewedCvPdf() {
  return getExistingCvPdfPath() !== undefined;
}

export function getCvPdfHref() {
  return withBasePath(getExistingCvPdfPath() ?? cvPdfPath);
}

export function getExistingCvPdfPath() {
  return cvPdfPaths.find((candidatePath) =>
    fs.existsSync(path.join(process.cwd(), "public", candidatePath)),
  );
}
