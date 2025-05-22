// Example: Simple greeting in console
console.log("Welcome to Mansoor Dairkee’s personal website!");

const certData = [
  {
    title: "NPTEL Certification",
    description:   "Successfully completed an 8-week online certification course in Data Mining offered by the Indian Institute of Technology Kharagpur through NPTEL. The course covered a comprehensive range of topics including data preprocessing, classification algorithms like decision trees and Naive Bayes, association rule mining (Apriori, FP-Growth), clustering techniques (K-means, DBSCAN), and various evaluation metrics. Scoring a consolidated 53%, with dedicated performance in both assignments and the proctored exam, Mansoor demonstrated a strong grasp of core data mining concepts. This achievement reflects his ability to engage with academically rigorous material, work consistently over several weeks, and apply theoretical concepts to practical data analysis problems — skills that are increasingly essential in data science and machine learning roles.",
    img: "thumbnails/NPTEL_DM_thumbnail.jpg",
    pdf: "certificates/NPTEL_DM_CERTIFICATE.pdf"
  },
  {
    title: "ICAT Participation Certificate",
    description:   "To benchmark his preparedness for internship opportunities, I participated in the Internship Common Aptitude Test (iCAT) on 19th May 2025. Organized to assess a candidate’s technical aptitude, logical reasoning, and analytical skills, iCAT is designed to help students evaluate their strengths and areas for improvement. My decision to take part in this national-level test highlights his proactive attitude toward career development and industry readiness. The certificate not only marks his completion of the test but also symbolizes his commitment to continuous self-evaluation and learning. This experience has helped him identify skill gaps, strengthen problem-solving abilities, and set focused goals for upcoming internship applications and technical interviews.",
    img: "thumbnails/ICAT_thumbnail.jpg",
    pdf: "certificates/Mansoor Dairkee - Participation Certificate.pdf"
  },
  {
    title: "Innovative IQ Award",
    description:   "In April 2025, I played a key organizational role as a Student Coordinator in Innovative IQ, a multifaceted event jointly conducted by the Department of Computer Applications, E-Cell, AIC-MUJ, and the Bureau of Indian Standards at Manipal University Jaipur. The event was held on the 21st and 22nd of April and emphasized technical innovation and entrepreneurial thinking. As a coordinator, I took on responsibilities such as managing communications between departments, ensuring smooth scheduling of sessions, and assisting participants and guests. This hands-on experience greatly enhanced his leadership, teamwork, and event management skills. It also gave him firsthand exposure to how collaborative efforts between academia, industry, and government bodies function, reinforcing his understanding of professional coordination and technical community building.",
    img: "thumbnails/INNOVATIVE_IQ_thumbnail.jpg",
    pdf: "certificates/Innovative_IQ_2025.pdf"
  },
  {
    title: "TECHSPIRE Event Certificate",
    description:   "Participated in Techspire, a flagship tech talk event hosted by the DevForge student club at Manipal University Jaipur. Held in November 2024, the event brought together technology enthusiasts and industry professionals to discuss emerging trends and innovations across software development, AI, cybersecurity, and cloud computing. Involvement in Techspire gave me the opportunity to engage with cutting-edge discussions and broaden my understanding of real-world applications of technology. Attending sessions led by experts allowed me to gain valuable insights into how the theoretical knowledge from his coursework is implemented in industry, encouraging me to think critically and stay informed about the future of tech. This exposure also strengthened my motivation to explore areas like data engineering and full-stack development further.",
    img: "thumbnails/TECHSPIRE_thumbnail.jpg",
    pdf: "certificates/TECHSPIRE_CERTIFICATE.pdf"
  },
  {
    title: "Code2servive by LearnIT",
    description:     "On 19th February 2025, I participated in Code2Survive, a competitive coding event organized by LearnIT at Manipal University Jaipur, in collaboration with IEEE societies such as AESS, MTT-S, and AP-S. The event featured a series of progressively challenging rounds that tested participants' programming logic, algorithmic thinking, and problem-solving speed. Successfully navigating these rounds required not just theoretical understanding but also the ability to write optimized and error-free code under time constraints. My active involvement and performance in this event underscore my enthusiasm for programming and my capability to tackle technical challenges head-on. It also provided an opportunity to engage with peers from various domains, boosting his collaborative and competitive spirit in the field of software development. ",
    img: "thumbnails/LearnIT_thumbnail.png",
    pdf: "certificates/LearnIT_certificate.pdf"
  }
];

let currentIndex = 0;

const certImg = document.getElementById("certImg");
const certTitle = document.getElementById("certTitle");
const certDescription = document.getElementById("certDescription");
const certLink = document.getElementById("certLink");

function updateCertificate(index) {
  const cert = certData[index];
  certImg.src = cert.img;
  certImg.alt = cert.title;
  certTitle.textContent = cert.title;
  certDescription.textContent = cert.description;
  certLink.href = cert.pdf;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % certData.length;
  updateCertificate(currentIndex);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + certData.length) % certData.length;
  updateCertificate(currentIndex);
});

// Auto-slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % certData.length;
  updateCertificate(currentIndex);
}, 5000);

// Initial load
updateCertificate(currentIndex);
