// Seed script: Run with `npm run seed` to populate MongoDB from existing data
// Usage: MONGODB_URI=your-connection-string node scripts/seed.js

const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('Please set MONGODB_URI environment variable');
  process.exit(1);
}

const publications = [
  {
    "title": "Ab initio study of point defects in disordered solid electrolytes  for all solid-state Li-ion batteries",
    "authors": "Tanmoy Paul",
    "journal": "Physical Review Materials",
    "date": "2026",
    "link": "https://link.aps.org/doi/10.1103/9bsm-klkq"
  },
  {
    "title": "First‐Principles Investigation of Point Defects in Na‐Antiperovskite Cathodes",
    "authors": "Arnab Kumar Das and Tanmoy Paul",
    "journal": "Advanced Theory and Simulations",
    "date": "2026",
    "link": "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adts.202502286"
  },
  {
    "title": "Designing layered oxides as cathodes for sodium-ion batteries: Machine learning and density functional theory based modeling",
    "authors": "Nishant Mishra and Rajdeep Boral and Tanmoy Paul",
    "journal": "Materials Today Physics",
    "date": "2025",
    "link": "https://www.sciencedirect.com/science/article/pii/S2542529324003109"
  },
  {
    "title": "Rate performance enhancement in lithium-ion batteries using TiNb2-xAlxO7 anodes with self-generated protective layers",
    "authors": "Jia-Hui Wang and Tanmoy Paul and Prem Chandan and Suhendro Purbo Prakoso and Po-Wei Chi and Kuo-Wei Yeh and Chung-Chieh Chang and Maw-Kuen Wu and Yu-Cheng Chiu",
    "journal": "Chemical Engineering Journal",
    "date": "2025",
    "link": "https://www.sciencedirect.com/science/article/pii/S1385894724099558"
  },
  {
    "title": "Theoretical Design of Na-Rich Antiperovskites as Cathode Material for Sodium-Ion Batteries",
    "authors": "Rajdeep Boral and Tanmoy Paul",
    "journal": "ACS Applied Energy Materials",
    "date": "2025",
    "link": "https://pubs.acs.org/doi/abs/10.1021/acsaem.5c02021"
  },
  {
    "title": "Optimizing solid electrolytes with 3d transition metal doped Li3YCl6 for Li-ion batteries",
    "authors": "Tanmoy Paul and Abhik Banerjee and GP Das and Biplab Sanyal",
    "journal": "Journal of Physics D: Applied Physics",
    "date": "2024",
    "link": "https://iopscience.iop.org/article/10.1088/1361-6463/ad1b0a/meta"
  },
  {
    "title": "Si@ C core–shell nanostructure-based anode for li-ion transport",
    "authors": "Jia-Hui Wang and Chia-Huan Chung and Po-Wei Chi and Tanmoy Paul and Prem Chandan and Kuo-Wei Yeh and Chung-Chieh Chang and Suhendro Purbo Prakoso and Yu-Cheng Chiu and Maw-Kuen Wu",
    "journal": "ACS Applied Nano Materials",
    "date": "2023",
    "link": "https://pubs.acs.org/doi/abs/10.1021/acsanm.3c02440"
  },
  {
    "title": "A green recyclable Li3VO4-pectin electrode exhibiting pseudocapacitive effect as an advanced anode for lithium-ion battery",
    "authors": "Yu-Hsuan Su and Chin-Yi Chung and Yan-Ruei Chen and Feng-Yu Wu and Ya-Huei Lin and Po-Wei Chi and Phillip M Wu and Tanmoy Paul and Hwai-En Lin and Kuei-Shu Chang-Liao and Sea-Fue Wang and Maw-Kuen Wu",
    "journal": "Journal of Energy Storage",
    "date": "2023",
    "link": "https://www.sciencedirect.com/science/article/pii/S2352152X23018510"
  },
  {
    "title": "The evolution of structure–property relationship of P2-type Na0. 67Ni0. 33Mn0. 67O2 by vanadium substitution and organic electrolyte combinations for sodium-ion batteries",
    "authors": "Debanjana Pahari and Arghadeep Chowdhury and Dhrubajyoti Das and Tanmoy Paul and Sreeraj Puravankara",
    "journal": "Journal of Solid State Electrochemistry",
    "date": "2023",
    "link": "https://link.springer.com/article/10.1007/s10008-023-05466-1"
  },
  {
    "title": "Carrier transport and thermoelectric property enhancement of polypyrrole-Nio/single-walled carbon nanotube composite system—experimental and DFT study",
    "authors": "Prasenjit Chakraborty and Tanmoy Paul and Kajari Kargupta and Dipali Banerjee",
    "journal": "Journal of Materials Science: Materials in Electronics",
    "date": "2023",
    "link": "https://link.springer.com/article/10.1007/s10854-023-11682-2"
  },
  {
    "title": "Ultrafine Mix-Phase SnO-SnO2 Nanoparticles Anchored on Reduced Graphene Oxide Boost Reversible Li-Ion Storage Capacity beyond Theoretical Limit",
    "authors": "Navpreet Kamboj and Bharati Debnath and Sakshi Bhardwaj and Tanmoy Paul and Nikhil Kumar and Satishchandra Ogale and Kingshuk Roy and Ramendra Sundar Dey",
    "journal": "ACS nano",
    "date": "2022",
    "link": "https://pubs.acs.org/doi/abs/10.1021/acsnano.2c07008"
  },
  {
    "title": "A study on Ti-doped Fe3O4 anode for Li ion battery using machine learning, electrochemical and distribution function of relaxation times (DFRTs) analyses",
    "authors": "Po-Wei Chi and Tanmoy Paul and Yu-Hsuan Su and Kai-Han Su and Cherng-Yuh Su and Phillip M Wu and Sea-Fue Wang and Maw-Kuen Wu",
    "journal": "Scientific Reports",
    "date": "2022",
    "link": "https://www.nature.com/articles/s41598-022-08584-4"
  },
  {
    "title": "Vibrational and electrochemical studies of pectin—a candidate towards environmental friendly lithium-ion battery development",
    "authors": "Phillip M Wu and Ching Yi Chung and Yan Ruei Chen and Yu Hsuan Su and Kuei Shu Chang-Liao and Po Wei Chi and Tanmoy Paul and Yun Ju Chen and Yeng Long Chen and Sea Fue Wang and Pooja Badgujar and Bo-Nian Chen and Chia Liang Cheng and Maw Kuen Wu",
    "journal": "PNAS nexus",
    "date": "2022",
    "link": "https://academic.oup.com/pnasnexus/article-abstract/1/4/pgac127/6649657"
  },
  {
    "title": "Computation of distribution of relaxation times by Tikhonov regularization for Li ion batteries: usage of L-curve method",
    "authors": "T Paul and PW Chi and Phillip M Wu and MK Wu",
    "journal": "Scientific reports",
    "date": "2021",
    "link": "https://www.nature.com/articles/s41598-021-91871-3"
  },
  {
    "title": "Lithiation and delithiation induced magnetic switching and electrochemical studies in α-LiFeO2 based Li ion battery",
    "authors": "KH Su and PW Chi and T Paul and CH Chung and WM Chen and YS Su and PM Wu and CY Su and MK Wu",
    "journal": "Materials Today Physics",
    "date": "2021",
    "link": "https://www.sciencedirect.com/science/article/pii/S2542529321000341"
  },
  {
    "title": "Electrochemical Performance of Orthorhombic CsPbI3 Perovskite in Li-Ion Batteries",
    "authors": "Phillip M. Wu Nahid Kaisar and Tanmoy Paul and Po-Wei Chi and Yu-Hsun Su and A Singh and Chih-Wei Chu and Maw-Kuen Wu",
    "journal": "Materials",
    "date": "2021",
    "link": "https://www.mdpi.com/1996-1944/14/19/5718"
  },
  {
    "title": "Influence of Isovalent ‘W’ Substitutions on the Structure and Electrical Properties of La2Mo2O9 Electrolyte for Intermediate-Temperature Solid Oxide Fuel Cells",
    "authors": "Tanmoy Paul and Yoed Tsur",
    "journal": "Ceramics",
    "date": "2021",
    "link": "https://www.mdpi.com/2571-6131/4/3/37"
  },
  {
    "title": "Flash‐sintering mechanism studied through interrupted experiments",
    "authors": "Mattan Ze'ev Becker and Sioma Baltianski and Larisa Popilevsky and Rinat Attias and Tanmoy Paul and Yoed Tsur",
    "journal": "Advanced Engineering Materials",
    "date": "2021",
    "link": "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/adem.202001499"
  },
  {
    "title": "Electronic structures of trivalent cations doped bulk and cubic La2Mo2O9 oxide ion conductors",
    "authors": "Smritijit Sen and Tanmoy Paul",
    "journal": "Journal of Solid State Chemistry",
    "date": "2021",
    "link": "https://www.sciencedirect.com/science/article/pii/S0022459620307490"
  },
  {
    "title": "Electrochemical Activation of Li2MnO3 Electrodes at 0 °C and Its Impact on the Subsequent Performance at Higher Temperatures",
    "authors": "Francis Amalraj Susai and Michael Talianker and Jing Liu and Rosy and Tanmoy Paul and Yehudit Grinblat and Evan Erickson and Malachi Noked and Larisa Burstein and Anatoly I Frenkel and Yoed Tsur and Boris Markovsky and Doron Aurbach",
    "journal": "Materials",
    "date": "2020",
    "link": "https://www.mdpi.com/1996-1944/13/19/4388"
  },
  {
    "title": "Modeling of the impedance data of gadolinia doped ceria based actuators: a distribution function of relaxation times and machine learning approach",
    "authors": "Tanmoy Paul",
    "journal": "Journal of Physics D: Applied Physics",
    "date": "2020",
    "link": "https://iopscience.iop.org/article/10.1088/1361-6463/ab9c68/meta"
  },
  {
    "title": "Electro‐chemomechanical contribution to mechanical actuation in Gd‐doped ceria membranes",
    "authors": "Eran Mishuk and Andrei Ushakov and Evgeniy Makagon and Sidney R Cohen and Ellen Wachtel and Tanmoy Paul and Yoed Tsur and Vladimir Ya Shur and Andrei Kholkin and Igor Lubomirsky",
    "journal": "Advanced Materials Interfaces",
    "date": "2019",
    "link": "https://advanced.onlinelibrary.wiley.com/doi/abs/10.1002/admi.201801592"
  },
  {
    "title": "Determination of grain boundary conductivity using distribution function of relaxation times (DFRT) analysis at room temperature in 10 mol% Gd doped ceria: A non-classical electrostrictor",
    "authors": "Tanmoy Paul and Nimrod Yavo and Igor Lubomirsky and Yoed Tsur",
    "journal": "Solid State Ionics",
    "date": "2019",
    "link": "https://www.sciencedirect.com/science/article/pii/S016727381830866X"
  },
  {
    "title": "Femtosecond laser processing of ceria-based micro actuators",
    "authors": "Eran Mishuk and Jenny Shklovsky and Yuval Berg and Niv Vengerovsky and Tanmoy Paul and Zvi Kotler and Yoed Tsur and Yosi Shacham-Diamand and Slava Krylov and Igor Lubomirsky",
    "journal": "Microelectronic engineering",
    "date": "2019",
    "link": "https://www.sciencedirect.com/science/article/pii/S0167931719302825"
  },
  {
    "title": "Tuning of bipolar resistive switching and memory characteristics of cadmium sulphide nanorods embedded in PMMA matrix",
    "authors": "Koustav Kashyap Gogoi and Rajdeep Das and Tanmoy Paul and Sharmistha Ghosh and Avijit Chowdhury",
    "journal": "Materials Research Express",
    "date": "2019",
    "link": "https://iopscience.iop.org/article/10.1088/2053-1591/ab4a6f/meta"
  },
  {
    "title": "Effect of isovalent doping on grain boundary conductivity for La2Mo2O9 oxide ion conductor: A distribution function of relaxation times approach",
    "authors": "T Paul and Y TSur",
    "journal": "Solid State Ionics",
    "date": "2018",
    "link": "https://www.sciencedirect.com/science/article/pii/S0167273817307348"
  },
  {
    "title": "Transport of oxygen ions in Er doped La2Mo2O9 oxide ion conductors: Correlation with microscopic length scales",
    "authors": "T Paul and A Ghosh",
    "journal": "Journal of Applied Physics",
    "date": "2018",
    "link": "https://pubs.aip.org/aip/jap/article/123/4/045107/347103"
  },
  {
    "title": "Thermal and structural investigations of xLi2O‐(1‐x) Bi2O3 (0.25≤ x≤ 0.35) glasses",
    "authors": "T Paul and G Mountjoy and A Ghosh",
    "journal": "International Journal of Applied Glass Science",
    "date": "2018",
    "link": "https://ceramics.onlinelibrary.wiley.com/doi/abs/10.1111/ijag.12342"
  },
  {
    "title": "A protocol to detect the phase transition in La2Mo2O9 oxide ion conductor",
    "authors": "Tanmoy Paul and Yoed Tsur",
    "journal": "Materials Letters",
    "date": "2018",
    "link": "https://www.sciencedirect.com/science/article/pii/S0167577X1830329X"
  },
  {
    "title": "Structure and electrical conductivity of Ta doped La2Mo2O9 oxide ion conductors",
    "authors": "T Paul and A Ghosh",
    "journal": "Journal of Applied Physics",
    "date": "2018",
    "link": "https://pubs.aip.org/aip/jap/article/124/22/225102/155609"
  },
  {
    "title": "Data for new protocol to detect the monoclinic phase of La2Mo2O9 and related oxide ion conductors",
    "authors": "Tanmoy Paul and Yoed Tsur",
    "journal": "Data in brief",
    "date": "2018",
    "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5998216/"
  },
  {
    "title": "Structural and electrical transport properties of La2Mo2O9 thin films prepared by pulsed laser deposition",
    "authors": "T Paul and A Ghosh",
    "journal": "Journal of Applied Physics",
    "date": "2017",
    "link": "https://pubs.aip.org/aip/jap/article/121/13/135106/976587"
  },
  {
    "title": "Structural and electrical properties of Er doped La2Mo2O9 oxide ion conductors",
    "authors": "T Paul and A Ghosh",
    "journal": "Journal of Applied Physics",
    "date": "2016",
    "link": "https://pubs.aip.org/aip/jap/article/119/6/065104/142561"
  },
  {
    "title": "Morphological, optical, and raman characteristics of ZnO nanoflowers on ZnO-seeded Si substrates synthesized by chemical method",
    "authors": "Nandini Roy and Avijit Chowdhury and Tanmoy Paul and Asim Roy",
    "journal": "Journal of Nanoscience and Nanotechnology",
    "date": "2016",
    "link": "https://www.ingentaconnect.com/contentone/asp/jnn/2016/00000016/00000009/art00101"
  },
  {
    "title": "Correlation between structure and oxygen ion dynamics in Y substituted La2Mo2O9 ionic conductors",
    "authors": "T Paul and A Ghosh",
    "journal": "AIP Advances",
    "date": "2016",
    "link": "https://pubs.aip.org/aip/adv/article/6/9/095015/861636"
  },
  {
    "title": "Data for phase angle shift with frequency",
    "authors": "T Paul and D Banerjee and K Kargupta",
    "journal": "Data in brief",
    "date": "2016",
    "link": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4845075/"
  },
  {
    "title": "Characteristic length scale dependence on conductivity for La2-xErxMo2O9 (0.05 ≤ x ≤ 0.3) oxide ion conductors",
    "authors": "T Paul and A Ghosh",
    "journal": "AIP Conference Proceedings",
    "date": "2016",
    "link": "https://pubs.aip.org/aip/acp/article-abstract/1731/1/140007/884437"
  },
  {
    "title": "Data for phase angle shift with frequency Q2",
    "authors": "T Paul and D Banerjee and K Kargupta",
    "journal": "",
    "date": "2016",
    "link": "https://cyberleninka.org/article/n/1352880.pdf"
  },
  {
    "title": "Conductivity of phosphoric acid: an in situ comparative study of proton in phosphoric acid fuel cell",
    "authors": "T Paul and D Banerjee and K Kargupta",
    "journal": "Ionics",
    "date": "2015",
    "link": "https://link.springer.com/article/10.1007/s11581-015-1426-y"
  },
  {
    "title": "Correlation of structure and ion conduction in La2− xYxMo2O9 (0≤ x≤ 0.2) oxygen ion conductors",
    "authors": "T Paul and A Ghosh",
    "journal": "Journal of Applied Physics",
    "date": "2015",
    "link": "https://pubs.aip.org/aip/jap/article/117/23/235101/138563"
  },
  {
    "title": "Crystal structure and electron density distribution of La1.9Bi0.1Mo2O9-δ fast oxide ion conductor",
    "authors": "T Paul and A Ghosh",
    "journal": "Solid State Physics",
    "date": "2015",
    "link": "https://ui.adsabs.harvard.edu/abs/2015AIPC.1665n0001P/abstract"
  },
  {
    "title": "Structure and vibrational properties of La2− xBixMo2O9 (0.05⩽ x⩽ 0.4) oxygen ion conductors",
    "authors": "T Paul and A Ghosh",
    "journal": "Journal of alloys and compounds",
    "date": "2014",
    "link": "https://www.sciencedirect.com/science/article/pii/S0925838814013462"
  },
  {
    "title": "Ionic conductivity and dielectric relaxation in Y doped La2Mo2O9 oxide-ion conductors",
    "authors": "T Paul and A Ghosh",
    "journal": "Journal of Applied Physics",
    "date": "2014",
    "link": "https://pubs.aip.org/aip/jap/article/116/14/144102/138685"
  },
  {
    "title": "Dielectric properties of La2− xBixMo2O9 (0≤ x≤ 0.4) ionic conductors",
    "authors": "T Paul and A Ghosh",
    "journal": "Materials Research Bulletin",
    "date": "2014",
    "link": "https://www.sciencedirect.com/science/article/pii/S0025540814004334"
  },
  {
    "title": "Analysis of drying and dilution in phosphoric acid fuel cell (PAFC) using galvanometric study and electrochemical impedance spectroscopy",
    "authors": "Tanmoy Paul and Mrinal Seal and Dipali Banerjee and Saibal Ganguly and Kajari Kargupta and Pavitra Sandilya",
    "journal": "Journal of Fuel Cell Science and Technology",
    "date": "2014",
    "link": "https://asmedigitalcollection.asme.org/electrochemical/article-abstract/11/4/041001/439803"
  },
  {
    "title": "Conduction and relaxation mechanisms in bismuth doped La2Mo2O9 ionic conductors",
    "authors": "T Paul and A Ghosh",
    "journal": "Journal of Applied Physics",
    "date": "2013",
    "link": "https://pubs.aip.org/aip/jap/article/114/16/164101/395116"
  },
  {
    "title": "Structure and transport properties of La2-xBixMo2O9-δ oxygen ion conductor",
    "authors": "T Paul and A Ghosh",
    "journal": "",
    "date": "2013",
    "link": "https://inis.iaea.org/records/ejxsw-pn933"
  }
];

const teamMembers = [
  {
    "name": "Rajdeep Boral",
    "title": "Doctoral Candidate",
    "image": "/images/rb.jpeg",
    "links": {
      "github": "https://github.com/WalterWhite1611",
      "scholar": "https://scholar.google.com/citations?user=sVygeGkAAAAJ&hl=en",
      "linkedin": "https://www.linkedin.com/in/rajdeep-boral-6621b9213"
    },
    "research": {
      "image": "/images/rajdeep.jpg",
      "description": "has a background in Theoretical Condensed Matter Physics. He completed his Master's degree at Ramakrishna Mission Residential College. His research interests center on the design of battery materials, specifically examining their electronic and magnetic properties in strongly correlated systems. Rajdeep employs Density Functional Theory (DFT) and Machine Learning (ML) to explore these complex materials. In addition, he is developing machine-learning-based force fields to reduce the reliance on computationally expensive ab initio Molecular Dynamics (AIMD) simulations. Rajdeep joined TCG Crest in 2023 as a Junior Research Fellow."
    }
  },
  {
    "name": "Pritish Joshi",
    "title": "Alumnus (PhD: Uppsala University, Sweden)",
    "image": "/images/pj.jpeg",
    "links": {
      "github": "https://github.com/DrtSinX98",
      "scholar": "https://scholar.google.com/citations?user=jUdY7OcAAAAJ&hl=en",
      "linkedin": "https://linkedin.com/in/pritish-joshi-b870bb242"
    },
    "research": {
      "image": "/images/pritish.jpg",
      "description": "has a background in Computational Chemistry and Biophysics. He did his Master's from Indian Institute of Technology Dhanbad. His research interest lies on Inverse material design for cathodes using Deep Neural Networks and DFT studies. He is also studying rection dynamics of Solid Electrolyte Interfaces using ab initio Molecular Dynamics (AIMD). He joined TCG Crest in 2024 and has previously worked on Computational drug discovery using Machine Learning (ML) and Classical Molecular Dynamics (CMD)."
    }
  },
  {
    "name": "Nishant Mishra",
    "title": "Alumnus (PhD: Penn State, USA)",
    "image": "/images/nm.jpeg",
    "links": {
      "github": "https://github.com/nishantaMishra",
      "scholar": "https://scholar.google.com/citations?hl=hi&user=uSReHc8AAAAJ",
      "linkedin": "https://www.linkedin.com/in/%E0%A4%A8%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%A8%E0%A5%8D%E0%A4%A4-%E0%A4%AE%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%BE"
    }
  }
];

const researchTopics = [
  {
    "title": "Battery Materials Discovery",
    "image": "/images/bmd.png",
    "description": "Cathode material discovery involves the employment of the Density Functional Theory (DFT) via packages such as VASP integrated with machine learning to concoct some promising candidate materials that can be used as cathodes in Na/Li-ion batteries. Our group has addressed the unique problem of predicting the properties of non-stoichimetric compounds. The work involves running DFT simulations to calculate crystal structures, stability, etc. At the same time, the ML model is trained on data acquired from sources such as Materials Project and ICSD. Using ML reduces the time and resources required.",
    "order": 0
  },
  {
    "title": "Machine Learning & Neural Networks",
    "image": "/images/mlnn.webp",
    "description": "Our research group specializes in creating cutting-edge predictive models using advanced machine learning techniques and neural networks. These models enable us to predict key material properties with remarkable accuracy, which plays a crucial role in discovering novel materials for batteries. Our regression models have accurately predicted average voltage performance in various materials. In parallel, our generative neural network models are yielding promising results, showing great potential for accelerating the discovery of novel materials.",
    "order": 1
  },
  {
    "title": "Machine Learning Force Fields",
    "image": "/images/mlff.png",
    "description": "Our group utilizes machine learning force fields, with a particular emphasis on Moment Tensor Potentials (MTPs), to enhance the accuracy and efficiency of atomistic simulations. MTPs allow us to model interatomic interactions with high precision, bridging the gap between computational speed and quantum-level accuracy. These force fields are especially useful in studying complex material systems where traditional methods fall short. By integrating MTPs, we can perform large-scale molecular dynamics simulations, enabling the prediction of material behavior under various conditions, from mechanical properties to phase transitions.",
    "order": 2
  },
  {
    "title": "Electronic Structure Studies",
    "image": "/images/esc.png",
    "description": "The study of electronic structure, including the distribution of electronic states and spin configurations, is crucial for understanding the behavior of battery materials such as cathodes and solid electrolytes. A material's suitability for energy storage relies heavily on its electronic properties, such as the presence of a band-gap, which determines ionic conductivity and stability. Through advanced Density Functional Theory (DFT) calculations, we analyze electronic density, band structures, and charge transfer, ensuring that materials predicted by neural networks are viable candidates for battery applications with optimal performance and stability.",
    "order": 3
  },
  {
    "title": "Reaction Dynamics Studies",
    "image": "/images/rds.png",
    "description": "To better predict the efficiency and lifespan of an electrochemical cell, a deep understanding of reaction dynamics, including interface reactions and site-specific processes, is essential. Computationally, we achieve this by conducting extensive molecular dynamics (MD) simulations. These simulations, both classical and Ab initio, allow us to model the interactions and transformations at the atomic level. By analyzing the resulting distribution curves, we can gain insights into the reaction pathways, energetics, and progression of chemical reactions, enabling us to make accurate predictions about the performance and stability of battery materials and interfaces.",
    "order": 4
  }
];

const posters = [
  {
    "image": "/images/pos1.jpg",
    "order": 0
  },
  {
    "image": "/images/pos2.jpg",
    "order": 1
  },
  {
    "image": "/images/pos3.jpg",
    "order": 2
  },
  {
    "image": "/images/pos4.jpg",
    "order": 3
  }
];

const marquee = {
  "text": "CSIR-HRDG Invites Applications For Direct SRF & RA Fellowships - Apply Online",
  "link": "https://csirhrdg.res.in/SiteContent/ManagedContent/ATContent/Inviting_Applications_for_direct_SRF_RA_2024.pdf"
};

const events = [
  {
    "name": "Science Outreach Program",
    "images": [
      "/images/evn1.jpg",
      "/images/evn2.jpg",
      "/images/evn3.jpg",
      "/images/evn4.jpg",
      "/images/evn5.jpg",
      "/images/evn6.jpg",
      "/images/evn7.jpg",
      "/images/evn8.jpg",
      "/images/evn9.jpg"
    ],
    "order": 0
  }
];

const homepage = {
  "bio": {
    "name": "Dr.Tanmoy Paul",
    "title": "Assistant Professor",
    "description": "Tanmoy Paul is an assistant professor at the Research Institute for Sustainable Energy <span className=\"sec\">(RISE) </span> of TCG Centres for Research and Education in Science and Technology <span className=\"sec\">(TCG-CREST)</span>. \nDr. Paul received his B.Sc degree from <span className=\"sec\">University of Calcutta</span> with honours in Physics and M.Sc. from <span className=\"sec\">Indian Institute of Engineering Science and Technology</span>, Shibpur (formerly Bengal Engineering and Science University) in Applied Physics with a distinction, and his PhD in Science from <span className=\"sec\">Indian Association for the Cultivation of Science</span>. \nFollowing postdoctoral appointments from Indian Association for the Cultivation of Science, Technion-Israel Institute of Technology, National Taiwan University, Academia Sinica and S N Bose National Centre for Basic Sciences, he joined <span className=\"sec\">TCG CREST</span> in August of 2022.\u0000",
    "profileImage": "/images/pfp.jpg"
  },
  "typewriter": [
    "Welcome to ",
    "Materials Modelling Laboratory"
  ],
  "catchText": "At the forefront of computational materials science, our lab pioneers the use of advanced computational techniques to design and discover cutting-edge materials for next-generation batteries and energy storage devices. Applying ab initio molecular dynamics, Density Functional Theory (DFT), and advanced methods including machine learning and neural networks, allows us to investigate material behavior at the atomic level. Our interdisciplinary team of computational physicists and chemists pushes the boundaries of materials innovation, leveraging AI/ML-driven models and high-performance simulations to accelerate the discovery of sustainable energy solutions.",
  "machines": [
    {
      "name": "NVIDIA RTX A5000 GPU",
      "specs": "24 GB Graphics Memory"
    },
    {
      "name": "NVIDIA RTX 4060 GPU",
      "specs": "8 GB DDR6 Graphics Memory"
    },
    {
      "name": "AMD EPIC 7453 CPU",
      "specs": "256 GB DDR5 Memory | 56 Cores"
    },
    {
      "name": "Intel Xeon Cascadelake 8268 CPU",
      "specs": "PARAM Brahma (IISER Pune)"
    },
    {
      "name": "Intel Xeon Skylake 6148 CPU",
      "specs": ""
    },
    {
      "name": "Intel Xeon Gold 6130 CPU",
      "specs": "Tetralith"
    }
  ],
  "carousel": [
    {
      "pic": "/images/car1.png",
      "caption": "The Team"
    },
    {
      "pic": "/images/car2.png",
      "caption": "Computational Facilities"
    },
    {
      "pic": "/images/car3.png",
      "caption": "Computational Facilities"
    },
    {
      "pic": "/images/car4.png",
      "caption": "Computational Facilities"
    },
    {
      "pic": "/images/car5.png",
      "caption": "Classroom Facilities"
    },
    {
      "pic": "/images/car6.png",
      "caption": "Classroom Facilities"
    },
    {
      "pic": "/images/car7.png",
      "caption": "And much more..."
    },
    {
      "pic": "/images/car8.png",
      "caption": "And much more..."
    }
  ],
  "gallery": [
    "/images/gal1.jpg",
    "/images/gal2.jpg",
    "/images/gal3.jpg",
    "/images/gal4.jpg",
    "/images/gal5.jpg",
    "/images/gal6.jpg",
    "/images/gal7.jpg",
    "/images/gal8.jpg",
    "/images/gal9.jpeg"
  ]
};

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
    await db.collection('homepage').deleteMany({});

    console.log('Seeding publications...');
    if (publications.length > 0) await db.collection('publications').insertMany(publications);

    console.log('Seeding team members...');
    if (teamMembers.length > 0) await db.collection('team').insertMany(teamMembers);

    console.log('Seeding research topics...');
    if (researchTopics.length > 0) await db.collection('research_topics').insertMany(researchTopics);

    console.log('Seeding posters...');
    if (posters.length > 0) await db.collection('posters').insertMany(posters);

    console.log('Seeding marquee...');
    await db.collection('marquee').insertOne(marquee);

    console.log('Seeding events...');
    if (events.length > 0) await db.collection('events').insertMany(events);

    console.log('Seeding homepage...');
    await db.collection('homepage').insertOne(homepage);

    console.log('✅ Seed complete!');
  } catch (error) {
    console.error('Seed failed:', error);
  } finally {
    await client.close();
  }
}

seed();
