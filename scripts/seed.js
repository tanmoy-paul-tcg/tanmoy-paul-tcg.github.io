// Seed script: Run with `npm run seed` to populate MongoDB from existing data
// Usage: MONGODB_URI=your-connection-string node scripts/seed.js

const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('Please set MONGODB_URI environment variable');
  process.exit(1);
}

const publications = [
  { title: "Ab initio study of point defects in disordered solid electrolytes Li3ACl6 (A = Y, Er, In) for all solid-state Li-ion batteries", authors: "T Paul", journal: "Physical Review Materials", date: "2026", link: "https://journals.aps.org/prmaterials/accepted/10.1103/9bsm-klkq" },
  { title: "First-Principles Investigation of Point Defects in Na-Antiperovskite Cathodes", authors: "A K Das, T Paul", journal: "Advanced Theory and Simulations", date: "2026", link: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/adts.202502286" },
  { title: "Theoretical Design of Na-Rich Antiperovskites as Cathode Material for Sodium-Ion Batteries", authors: "R Boral, T Paul", journal: "ACS Applied Energy Materials", date: "2025", link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:tKAzc9rXhukC" },
  { title: "Designing layered oxides as cathodes for sodium-ion batteries: Machine learning and density functional theory based modeling", authors: "N Mishra, R Boral, T Paul", journal: "Materials Today Physics", date: "2024", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:7T2F9Uy0os0C" },
  { title: "Rate performance enhancement in lithium-ion batteries using TiNb2-xAlxO7 anodes with self-generated protective layers", authors: "JH Wang, T Paul, P Chandan, SP Prakoso, PW Chi, KW Yeh, CC Chang, MK Wu, YC Chiu", journal: "Chemical Engineering Journal", date: "2024", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:NJ774b8OgUMC" },
  { title: "Optimizing solid electrolytes with 3d transition metal doped Li3YCl6 for Li-ion batteries", authors: "T Paul, A Banerjee, GP Das, B Sanyal", journal: "Journal of Physics D: Applied Physics 57 (14), 145503", date: "2024", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:kzcrU_BdoSEC" },
  { title: "Carrier transport and thermoelectric property enhancement of polypyrrole-Nio/single-walled carbon nanotube composite system—experimental and DFT study", authors: "P Chakraborty, T Paul, K Kargupta, D Banerjee", journal: "Journal of Materials Science: Materials in Electronics 34 (36), 2265", date: "2023", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:W5xh706n7nkC" },
  { title: "A green recyclable Li3VO4-pectin electrode exhibiting pseudocapacitive effect as an advanced anode for lithium-ion battery", authors: "YH Su, CY Chung, YR Chen, FY Wu, YH Lin, PW Chi, PM Wu, T Paul, ...", journal: "Journal of Energy Storage 72, 108454", date: "2023", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:uLbwQdceFCQC" },
  { title: "The evolution of structure-property relationship of P2-type Na 0.67Ni 0.33Mn 0.67O 2 by vanadium substitution and organic electrolyte combinations for sodium-ion …", authors: "D Pahari, A Chowdhury, D Das, T Paul, S Puravankara", journal: "Journal of Solid State Electrochemistry 27 (8), 2067-2082", date: "2023", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:JQOojiI6XY0C" },
  { title: "Si@ C Core-Shell Nanostructure-Based Anode for Li-Ion Transport", authors: "JH Wang, CH Chung, PW Chi, T Paul, P Chandan, KW Yeh, CC Chang, ...", journal: "ACS Applied Nano Materials 6 (13), 12578-12587", date: "2023", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:_Ybze24A_UAC" },
  { title: "Ultrafine Mix-Phase SnO-SnO 2 Nanoparticles Anchored on Reduced Graphene Oxide Boost Reversible Li-Ion Storage Capacity beyond Theoretical Limit", authors: "N Kamboj, B Debnath, S Bhardwaj, T Paul, N Kumar, S Ogale, K Roy, ...", journal: "ACS nano 16 (9), 15358-15368", date: "2022", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:UHK10RUVsp4C" },
  { title: "Vibrational and electrochemical studies of pectin—a candidate towards environmental friendly lithium-ion battery development", authors: "PM Wu, CY Chung, YR Chen, YH Su, KS Chang-Liao, PW Chi, T Paul, ...", journal: "PNAS nexus 1 (4), pgac127", date: "2022", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:dQ2og3OwTAUC" },
  { title: "A study on Ti-doped Fe 3O 4 anode for Li ion battery using machine learning, electrochemical and distribution function of relaxation times (DFRTs) analyses", authors: "PW Chi, T Paul, YH Su, KH Su, CY Su, PM Wu, SF Wang, MK Wu", journal: "Scientific Reports 12 (1), 4851", date: "2022", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:hkOj_22Ku90C" },
  { title: "Electrochemical Performance of Orthorhombic CsPbI3 Perovskite in Li-Ion Batteries", authors: "PMW Nahid Kaisar, Tanmoy Paul, Po-Wei Chi,Yu-Hsun Su, A Singh ,Chih-Wei Chu ...", journal: "Materials 14 (19), 5718", date: "2021", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:1yQoGdGgb4wC" },
  { title: "Influence of Isovalent 'W' Substitutions on the Structure and Electrical Properties of La 2Mo 2O 9 Electrolyte for Intermediate-Temperature Solid Oxide Fuel Cells", authors: "T Paul, Y Tsur", journal: "Ceramics 4 (3), 502-515", date: "2021", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:ZuybSZzF8UAC" },
  { title: "Flash-sintering mechanism studied through interrupted experiments", authors: "MZ Becker, S Baltianski, L Popilevsky, R Attias, T Paul, Y Tsur", journal: "Advanced Engineering Materials 23 (7), 2001499", date: "2021", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:ye4kPcJQO24C" },
  { title: "Computation of distribution of relaxation times by Tikhonov regularization for Li ion batteries: usage of L-curve method", authors: "T Paul, PW Chi, PM Wu, MK Wu", journal: "Scientific reports 11 (1), 12624", date: "2021", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:N5tVd3kTz84C" },
  { title: "Lithiation and delithiation induced magnetic switching and electrochemical studies in α-LiFeO2 based Li ion battery", authors: "KH Su, PW Chi, T Paul, CH Chung, WM Chen, YS Su, PM Wu, CY Su, ...", journal: "Materials Today Physics 18, 100373", date: "2021", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:VL0QpB8kHFEC" },
  { title: "Electronic structures of trivalent cations doped bulk and cubic La2Mo2O9 oxide ion conductors", authors: "S Sen, T Paul", journal: "Journal of Solid State Chemistry 295, 121918", date: "2021", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:LjlpjdlvIbIC" },
  { title: "Electrochemical Activation of Li 2MnO 3 Electrodes at 0 °C and Its Impact on the Subsequent Performance at Higher Temperatures", authors: "FA Susai, M Talianker, J Liu, Rosy, T Paul, Y Grinblat, E Erickson, ...", journal: "Materials 13 (19), 4388", date: "2020", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:WqliGbK-hY8C" },
  { title: "Modeling of the impedance data of gadolinia doped ceria based actuators: a distribution function of relaxation times and machine learning approach", authors: "T Paul", journal: "Journal of Physics D: Applied Physics 53 (41), 415503", date: "2020", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:5awf1xo2G04C" },
  { title: "Tuning of bipolar resistive switching and memory characteristics of cadmium sulphide nanorods embedded in PMMA matrix", authors: "KK Gogoi, R Das, T Paul, S Ghosh, A Chowdhury", journal: "Materials Research Express 6 (11), 115107", date: "2019", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:SdhP9T11ey4C" },
  { title: "Femtosecond laser processing of ceria-based micro actuators", authors: "E Mishuk, J Shklovsky, Y Berg, N Vengerovsky, T Paul, Z Kotler, Y Tsur, ...", journal: "Microelectronic engineering 217, 111126", date: "2019", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:9vf0nzSNQJEC" },
  { title: "Electro-chemomechanical contribution to mechanical actuation in Gd-doped ceria membranes", authors: "E Mishuk, A Ushakov, E Makagon, SR Cohen, E Wachtel, T Paul, Y Tsur, ...", journal: "Advanced Materials Interfaces 6 (6), 1801592", date: "2019", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:dTyEYWd-f8wC" },
  { title: "Determination of grain boundary conductivity using distribution function of relaxation times (DFRT) analysis at room temperature in 10 mol% Gd doped ceria: A non-classical …", authors: "T Paul, N Yavo, I Lubomirsky, Y Tsur", journal: "Solid State Ionics 331, 18-21", date: "2019", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:f2IySw72cVMC" },
  { title: "Structure and electrical conductivity of Ta doped La2Mo2O9 oxide ion conductors", authors: "T Paul, A Ghosh", journal: "Journal of Applied Physics 124 (22)", date: "2018", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:TFP_iSt0sucC" },
  { title: "Data for new protocol to detect the monoclinic phase of La2Mo2O9 and related oxide ion conductors", authors: "T Paul, Y Tsur", journal: "Data in brief 18, 1637-1641", date: "2018", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:iH-uZ7U-co4C" },
  { title: "A protocol to detect the phase transition in La2Mo2O9 oxide ion conductor", authors: "T Paul, Y Tsur", journal: "Materials Letters 220, 325-327", date: "2018", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:r0BpntZqJG4C" },
  { title: "Effect of isovalent doping on grain boundary conductivity for La2Mo2O9 oxide ion conductor: A distribution function of relaxation times approach", authors: "T Paul, Y TSur", journal: "Solid State Ionics 323, 37-43", date: "2018", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:bEWYMUwI8FkC" },
  { title: "Transport of oxygen ions in Er doped La2Mo2O9 oxide ion conductors: Correlation with microscopic length scales", authors: "T Paul, A Ghosh", journal: "Journal of Applied Physics 123 (4)", date: "2018", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:j3f4tGmQtD8C" },
  { title: "Thermal and structural investigations of xLi2O-(1-x) Bi2O3 (0.25≤ x≤ 0.35) glasses", authors: "T Paul, G Mountjoy, A Ghosh", journal: "International Journal of Applied Glass Science", date: "2018", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:4JMBOYKVnBMC" },
  { title: "Structural and electrical transport properties of La2Mo2O9 thin films prepared by pulsed laser deposition", authors: "T Paul, A Ghosh", journal: "Journal of Applied Physics 121 (13)", date: "2017", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:4DMP91E08xMC" },
  { title: "Correlation between structure and oxygen ion dynamics in Y substituted La2Mo2O9 ionic conductors", authors: "T Paul, A Ghosh", journal: "AIP Advances 6 (9)", date: "2016", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:qxL8FJ1GzNcC" },
  { title: "Morphological, optical, and raman characteristics of ZnO nanoflowers on ZnO-seeded Si substrates synthesized by chemical method", authors: "N Roy, A Chowdhury, T Paul, A Roy", journal: "Journal of Nanoscience and Nanotechnology 16 (9), 9738-9745", date: "2016", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:M3ejUd6NZC8C" },
  { title: "Data for phase angle shift with frequency", authors: "T Paul, D Banerjee, K Kargupta", journal: "Data in brief 7, 1389-1392", date: "2016", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:ULOm3_A8WrAC" },
  { title: "Characteristic length scale dependence on conductivity for La2-xErxMo2O9 (0.05≤ x≤ 0.3) oxide ion conductors", authors: "T Paul, A Ghosh", journal: "AIP Conference Proceedings 1731 (1)", date: "2016", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:YOwf2qJgpHMC" },
  { title: "Structural and electrical properties of Er doped La2Mo2O9 oxide ion conductors", authors: "T Paul, A Ghosh", journal: "Journal of Applied Physics 119 (6)", date: "2016", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:Zph67rFs4hoC" },
  { title: "Data for phase angle shift with frequency Q2", authors: "T Paul, D Banerjee, K Kargupta", journal: "", date: "2016", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:D_sINldO8mEC" },
  { title: "Conductivity of phosphoric acid: an in situ comparative study of proton in phosphoric acid fuel cell", authors: "T Paul, D Banerjee, K Kargupta", journal: "Ionics 21, 2583-2590", date: "2015", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:LkGwnXOMwfcC" },
  { title: "Correlation of structure and ion conduction in La2-xYxMo2O9 (0≤ x≤ 0.2) oxygen ion conductors", authors: "T Paul, A Ghosh", journal: "Journal of Applied Physics 117 (23)", date: "2015", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:Se3iqnhoufwC" },
  { title: "Crystal structure and electron density distribution of La 1.9Bi 0.1Mo 2O 9-δ fast oxide ion conductor", authors: "T Paul, A Ghosh", journal: "Solid State Physics 1665 (1), 140001", date: "2015", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:UebtZRa9Y70C" },
  { title: "Structure and vibrational properties of La2-xBixMo2O9 (0.05⩽ x⩽ 0.4) oxygen ion conductors", authors: "T Paul, A Ghosh", journal: "Journal of alloys and compounds 613, 146-152", date: "2014", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:IjCSPb-OGe4C" },
  { title: "Dielectric properties of La2-xBixMo2O9 (0≤ x≤ 0.4) ionic conductors", authors: "T Paul, A Ghosh", journal: "Materials Research Bulletin 59, 416-420", date: "2014", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:zYLM7Y9cAGgC" },
  { title: "Ionic conductivity and dielectric relaxation in Y doped La2Mo2O9 oxide-ion conductors", authors: "T Paul, A Ghosh", journal: "Journal of Applied Physics 116 (14)", date: "2014", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:W7OEmFMy1HYC" },
  { title: "Analysis of drying and dilution in phosphoric acid fuel cell (PAFC) using galvanometric study and electrochemical impedance spectroscopy", authors: "T Paul, M Seal, D Banerjee, S Ganguly, K Kargupta, P Sandilya", journal: "Journal of fuel cell science and technology 11 (4), 041001", date: "2014", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:hC7cP41nSMkC" },
  { title: "Conduction and relaxation mechanisms in bismuth doped La2Mo2O9 ionic conductors", authors: "T Paul, A Ghosh", journal: "Journal of Applied Physics 114 (16)", date: "2013", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:u5HHmVD_uO8C" },
  { title: "Structure and transport properties of La_2_-_xBi_xMo_2O_9_-_δ oxygen ion conductor", authors: "T Paul, A Ghosh", journal: "Proceedings of the tenth national conference on solid state ionics: abstract …", date: "2013", link: "https://scholar.google.co.in/citations?view_op=view_citation&hl=en&user=8YG_SSAAAAAJ&cstart=20&pagesize=80&sortby=pubdate&citation_for_view=8YG_SSAAAAAJ:aqlVkmm33-oC" },
];

const teamMembers = [
  {
    name: "Rajdeep Boral",
    title: "Doctoral Candidate",
    image: "/images/rb.jpeg",
    links: {
      github: "https://github.com/WalterWhite1611",
      scholar: "https://scholar.google.com/citations?user=sVygeGkAAAAJ&hl=en",
      linkedin: "https://www.linkedin.com/in/rajdeep-boral-6621b9213"
    },
    research: {
      image: "/images/rajdeep.jpg",
      description: "has a background in Theoretical Condensed Matter Physics. He completed his Master's degree at Ramakrishna Mission Residential College. His research interests center on the design of battery materials, specifically examining their electronic and magnetic properties in strongly correlated systems. Rajdeep employs Density Functional Theory (DFT) and Machine Learning (ML) to explore these complex materials. In addition, he is developing machine-learning-based force fields to reduce the reliance on computationally expensive ab initio Molecular Dynamics (AIMD) simulations. Rajdeep joined TCG Crest in 2023 as a Junior Research Fellow."
    }
  },
  {
    name: "Pritish Joshi",
    title: "Project Associate",
    image: "/images/pj.jpeg",
    links: {
      github: "https://github.com/DrtSinX98",
      scholar: "https://scholar.google.com/citations?user=jUdY7OcAAAAJ&hl=en",
      linkedin: "https://linkedin.com/in/pritish-joshi-b870bb242"
    },
    research: {
      image: "/images/pritish.jpg",
      description: "has a background in Computational Chemistry and Biophysics. He did his Master's from Indian Institute of Technology Dhanbad. His research interest lies on Inverse material design for cathodes using Deep Neural Networks and DFT studies. He is also studying rection dynamics of Solid Electrolyte Interfaces using ab initio Molecular Dynamics (AIMD). He joined TCG Crest in 2024 and has previously worked on Computational drug discovery using Machine Learning (ML) and Classical Molecular Dynamics (CMD)."
    }
  },
  {
    name: "Nishant Mishra",
    title: "Alumnus (PhD: Penn State, USA)",
    image: "/images/nm.jpeg",
    links: {
      github: "https://github.com/nishantaMishra",
      scholar: "https://scholar.google.com/citations?hl=hi&user=uSReHc8AAAAJ",
      linkedin: "https://www.linkedin.com/in/%E0%A4%A8%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%A8%E0%A5%8D%E0%A4%A4-%E0%A4%AE%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%BE"
    }
  }
];

const researchTopics = [
  { title: "Battery Materials Discovery", image: "/images/bmd.png", description: "Cathode material discovery involves the employment of the Density Functional Theory (DFT) via packages such as VASP integrated with machine learning to concoct some promising candidate materials that can be used as cathodes in Na/Li-ion batteries. Our group has addressed the unique problem of predicting the properties of non-stoichimetric compounds. The work involves running DFT simulations to calculate crystal structures, stability, etc. At the same time, the ML model is trained on data acquired from sources such as Materials Project and ICSD. Using ML reduces the time and resources required.", order: 0 },
  { title: "Machine Learning & Neural Networks", image: "/images/mlnn.webp", description: "Our research group specializes in creating cutting-edge predictive models using advanced machine learning techniques and neural networks. These models enable us to predict key material properties with remarkable accuracy, which plays a crucial role in discovering novel materials for batteries. Our regression models have accurately predicted average voltage performance in various materials. In parallel, our generative neural network models are yielding promising results, showing great potential for accelerating the discovery of novel materials.", order: 1 },
  { title: "Machine Learning Force Fields", image: "/images/mlff.png", description: "Our group utilizes machine learning force fields, with a particular emphasis on Moment Tensor Potentials (MTPs), to enhance the accuracy and efficiency of atomistic simulations. MTPs allow us to model interatomic interactions with high precision, bridging the gap between computational speed and quantum-level accuracy. These force fields are especially useful in studying complex material systems where traditional methods fall short. By integrating MTPs, we can perform large-scale molecular dynamics simulations, enabling the prediction of material behavior under various conditions, from mechanical properties to phase transitions.", order: 2 },
  { title: "Electronic Structure Studies", image: "/images/esc.png", description: "The study of electronic structure, including the distribution of electronic states and spin configurations, is crucial for understanding the behavior of battery materials such as cathodes and solid electrolytes. A material's suitability for energy storage relies heavily on its electronic properties, such as the presence of a band-gap, which determines ionic conductivity and stability. Through advanced Density Functional Theory (DFT) calculations, we analyze electronic density, band structures, and charge transfer, ensuring that materials predicted by neural networks are viable candidates for battery applications with optimal performance and stability.", order: 3 },
  { title: "Reaction Dynamics Studies", image: "/images/rds.png", description: "To better predict the efficiency and lifespan of an electrochemical cell, a deep understanding of reaction dynamics, including interface reactions and site-specific processes, is essential. Computationally, we achieve this by conducting extensive molecular dynamics (MD) simulations. These simulations, both classical and Ab initio, allow us to model the interactions and transformations at the atomic level. By analyzing the resulting distribution curves, we can gain insights into the reaction pathways, energetics, and progression of chemical reactions, enabling us to make accurate predictions about the performance and stability of battery materials and interfaces.", order: 4 },
];

const posters = [
  { image: "/images/pos1.jpg", order: 0 },
  { image: "/images/pos2.jpg", order: 1 },
  { image: "/images/pos3.jpg", order: 2 },
  { image: "/images/pos4.jpg", order: 3 },
];

const marquee = {
  text: "CSIR-HRDG Invites Applications For Direct SRF & RA Fellowships - Apply Online",
  link: "https://csirhrdg.res.in/SiteContent/ManagedContent/ATContent/Inviting_Applications_for_direct_SRF_RA_2024.pdf"
};

const events = [
  {
    name: "Science Outreach Program",
    images: [
      "/images/evn1.jpg", "/images/evn2.jpg", "/images/evn3.jpg",
      "/images/evn4.jpg", "/images/evn5.jpg", "/images/evn6.jpg",
      "/images/evn7.jpg", "/images/evn8.jpg", "/images/evn9.jpg"
    ],
    order: 0
  }
];

async function seed() {
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    const db = client.db('tcg-lab');

    console.log('Clearing existing data...');
    await db.collection('publications').deleteMany({});
    await db.collection('team').deleteMany({});
    await db.collection('research_topics').deleteMany({});
    await db.collection('posters').deleteMany({});
    await db.collection('marquee').deleteMany({});
    await db.collection('events').deleteMany({});

    console.log('Seeding publications...');
    await db.collection('publications').insertMany(publications);

    console.log('Seeding team members...');
    await db.collection('team').insertMany(teamMembers);

    console.log('Seeding research topics...');
    await db.collection('research_topics').insertMany(researchTopics);

    console.log('Seeding posters...');
    await db.collection('posters').insertMany(posters);

    console.log('Seeding marquee...');
    await db.collection('marquee').insertOne(marquee);

    console.log('Seeding events...');
    await db.collection('events').insertMany(events);

    console.log('✅ Seed complete!');
  } catch (error) {
    console.error('Seed failed:', error);
  } finally {
    await client.close();
  }
}

seed();
