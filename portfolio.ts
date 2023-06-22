import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Anirudh Muthusundaram',
  title: "Greetings, I'm Ani",
  description:
    "I'm a Master of Science Student pursuing Computer Science and Engineering at the University at Buffalo. I have experience in ML Research, Data Science and Full-Stack Development and I am confortable with Python, JavaScript, C++, C, Java, SQL and Solidity, I have worked in various web technologies and databases. I have a strong background in Machine Learning, Deep Learning, Computer Vision and the Internet of Things.",
  resumeLink:
    'https://drive.google.com/file/d/10_ODubrIKLbHcOVJwC8_u4nw8JAv8oaJ/view?usp=sharing',
};

export const openSource = {
  githubUserName: '1hanzla100',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  linkedin: 'https://www.linkedin.com/in/anirudhmuthusundaram/',
  github: 'https://github.com/anirudh-muthusundaram',
  instagram: 'https://www.instagram.com/anirudh_m_sundar/',
};

export const skillsSection: SkillsSectionType = {
  title: 'Modus Operandi',
  subTitle: 'PASSIONATE ML ENGINEER EAGER TO UNRAVEL THE INTRICACIES OF EVERY DATA SCIENCE STACK',
  data: [
    {
      title: 'Machine Learning',
      lottieAnimationFile: '/lottie/skills/deep-learning.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Developing predictive models with Python using scikit-learn & TensorFlow'
        ),
        emoji('⚡  Harnessing Big Data using Apache Spark for scalable machine learning'),
        emoji('⚡  Applying Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs) in PyTorch for image and video data processing'),
        emoji('⚡  Enhancing recommendation systems with collaborative filtering techniques'),
      ],
      softwareSkills: [
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Tensorflow',
          fontAwesomeClassName: 'logos:tensorflow',
        },
        {
          skillName: 'PyTorch',
          fontAwesomeClassName: 'logos:pytorch',
        },
        {
          skillName: 'Scikit-learn',
          fontAwesomeClassName: 'simple-icons:scikit-learn',
        },
        {
          skillName: 'Apache Spark',
          fontAwesomeClassName: 'devicon:apachespark-wordmark',
        },
        {
          skillName: 'Keras',
          fontAwesomeClassName: 'devicon:keras',
        },
        {
          skillName: 'Git',
          fontAwesomeClassName: 'skill-icons:git',
        },
        {
          skillName: 'spaCy',
          fontAwesomeClassName: 'simple-icons:spacy',
        },
        {
          skillName: 'Anaconda',
          fontAwesomeClassName: 'devicon:anaconda-wordmark',
        },
        {
          skillName: 'AWS Sagemaker',
          fontAwesomeClassName: 'logos:aws',
        },
      ],
    },
    {
      title: 'Data Science',
      lottieAnimationFile: '/lottie/skills/big-data-animation.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Conducting Exploratory Data Analysis (EDA) with Python using pandas, numpy, and seaborn'),
        emoji(
          '⚡ Implementing Natural Language Processing (NLP) techniques for text mining and sentiment analysis'
        ),
        emoji(
          '⚡ Deploying machine learning models with MLOps tools for robust and scalable solutions' 
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Matplotlib',
          fontAwesomeClassName: 'devicon:matplotlib',
        },
        {
          skillName: 'seaborn',
          fontAwesomeClassName: 'logos:seaborn-icon',
        },
        {
          skillName: 'Plotly',
          fontAwesomeClassName: 'devicon:plotly',
        },
        {
          skillName: 'SciPy',
          fontAwesomeClassName: 'simple-icons:scipy',
        },
        {
          skillName: 'Apache Hadoop',
          fontAwesomeClassName: 'devicon:hadoop-wordmark',
        },
        {
          skillName: 'Neo4j',
          fontAwesomeClassName: 'logos:neo4j',
        },
        {
          skillName: 'NetworkX',
          fontAwesomeClassName: 'devicon:networkx',
        },
        {
          skillName: 'Tableau ',
          fontAwesomeClassName: 'logos:tableau-icon',
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassName: 'devicon:mongodb',
        },
      ],
    },
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Creating real-time server applications using Node.js and Express.js'
        ),
        emoji('⚡ Architecting and building robust databases with MongoDB and MySQL'),
        emoji('⚡ Building RESTful APIs in Django & Django REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'TypeScript',
          fontAwesomeClassName: 'vscode-icons:file-type-typescript-official',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡  Proficiency in deploying and testing Smart Contracts using Remix & Metamask'
        ),
        emoji(
          '⚡ Capable of building NFT Smart Contracts with ERC-20 and ERC-721 Token Standards'
        ),
        emoji(
          '⚡ Experience in Dapp development with Next.js & Solidity using ethers.js, Ceramic & IPFS'
        ),
        emoji('⚡ Extensive knowledge of Openzeppelin libraries & utilizing Band Protocol Oracles'),
        emoji(
          '⚡  Proficient in crafting Smart Contracts using Truffle and Ganache on the Ethereum network'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassName: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassName: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassName: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassName: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          fontAwesomeClassName: 'logos:ganache-icon',
        },
        {
          skillName: 'Truffle Suite',
          fontAwesomeClassName: 'logos:truffle',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Alchemy',
          fontAwesomeClassName: 'simple-icons:alchemy',
        },
        

      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Machine Learning/ Deep Learning', //Insert stack or technology you have experience in
    progressPercentage: '85', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Frontend',
    progressPercentage: '70',
  },
  {
    Stack: 'Backend',
    progressPercentage: '75',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'University at Buffalo',
    subHeader: 'Master of Science in Computer Science and Engineering',
    duration: 'March 2024 (Expected)',
    desc: 'Related courses: Introduction to Machine Learning, Deep Learning, Introduction to Computer vision.',
    grade: '',
  },
  {
    schoolName: 'SRM Institute of Science and Technology',
    subHeader: 'Bachelor of Technology in Computer Science and Engineering: Specialization in Internet of Things',
    duration: 'June 2022',
    desc: 'Related courses: Artificial Neural Networks, Machine Learning, Software Engineering.',
    grade: '',
  },

];

export const experience: ExperienceType[] = [
  {
    role: 'Data Science Intern',
    company: 'Altimetrik India Pvt Ltd.',
    companyLogo: '/img/icons/common/Altimetrik.png',
    date: 'Feburary 2022 – May 2022',
    desc: 'Developed Knowledge Graph library for a Data and Digital Engineering Services Company. Optimized platform with CI/CD pipeline on Calibo Lazsa. Organized Edge Network using Neo4j for efficient analysis. Collaborated with data science team to develop cutting-edge prototype leveraging NetworkX and GraphML frameworks. Implemented robust Graph Similarity Pipeline on Calibo Lazsa. Optimized model using Wikipedia API for 15% more Knowledge and 10% more Results.',
  },
  {
    role: 'Research Intern',
    company: 'National Institute of Technology',
    companyLogo: '/img/icons/common/nit.png',
    date: 'June 2021 – August 2021',
    desc: 'Experimented innovative NLP and Web Automation approaches to address real-world challenges. Integrated knowledge-based techniques with AI and machine learning configurations. Achieved outstanding 92% model accuracy and ensured high result relevance. Spearheaded recommendation system design for Tags and Blogs, yielding highly accurate models with 90% precision. Contributed to scientific community with Research papers and Conference insights.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Ecstasy Creatives',
    companyLogo: '/img/icons/common/ecs.jpeg',
    date: 'March 2021 – May 2021',
    desc: 'Leveraging Flasks microservice architecture on the back-end mainframe, I built a robust help-desk portal, fetching data asynchronously from a MongoDB datastore. Insights derived from extensive EDA (Exploratory Data Analysis) shaped website design, enhancing the UX/UI. Utilizing a MERN stack (MongoDB, Express.js, ReactJS, NodeJS) for seamless front-end/back-end integration, we achieved superior website fluidity, clocking a 20% improvement over industry standards, thanks to meticulous HTTP/2 protocol optimization and progressive web app (PWA) implementation.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Finger Vein Detection',
    desc: 'Designed a Finger Vein Detection system using finger deformations and spoofing data to provide a secure authorization process using VGG16 Neural Network that yielded 81.21 accuracy score.',
    github: 'https://github.com/anirudh-muthusundaram/Finger-vein-detection',
  },
  {
    name: 'Cyberbully Profiling',
    desc: 'Trained bidirectional LSTM for sentiment analysis on cyberbullying content on Web 3.0. Integrated Gradient Boosting to increase performance through semantic similarity through 7 different NLP techniques.',
    github: 'https://github.com/RamUB18/DeepLearningProjectCSE676',
  },
  {
    name: 'NFT Project - SneakTag',
    desc: '"I have designed and developed an automated NFT minting website that allows users to create unique NFTs that are directly linked to their high-end sneaker collection. Our platform seamlessly integrates blockchain technology for secure and transparent transactions.',
    github: 'https://github.com/anirudh-muthusundaram/SneakTag-NFT',
  },
  {
    name: 'Video Games Sales Prediction',
    desc: 'I have developed a website that seamlessly integrates a machine learning model capable of predicting video game sales. The model is trained on a comprehensive video game sales database, resulting in exceptional performance and accuracy.',
    github: 'https://github.com/anirudh-muthusundaram/VideoGameSales_prediction',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'ISBRNM: Integrative Approach for Semantically Driven Blog Recommendation Using Novel Measures.',
    feedback:
      'Presented in ICDTA 2022 conference and Published in Springer Book Chapter.',
  },
  {
    name: 'SIITR: A Semantic Infused Intelligent Approach for Tag Recommendation.',
    feedback:
      'Showcased in ANTIC 2021 and Featured in Springer Book Chapter.',
  },
  {
    name: 'FCROS: An Approach for Favorable Crop Recommendation Using Ontology Semantics and Selective Knowledge Stackmendation.',
    feedback:'Showcased and Featured in NeuroQuantology Journal.',
  },
  {
    name: 'A Data-Driven Approach for Detecting Attacks in Finger Vein Recognition Using Deep Neural Networks.',
    feedback:
      'Showcased in CAJMNS 2022 and Featured in Central Asian Journal of Medical and Natural Science Book Chapter.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Anirudh Muthusundaram',
  description:
    'A passionate Machine Learning Developer and Blockchain Developer.',
  author: 'Anirudh Muthusundaram',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Hanzla',
    'Hanzla Tauqeer',
    '@1hanzla100',
    '1hanzla100',
    'Portfolio',
    'Hanzla Portfolio ',
    'Hanzla Tauqeer Portfolio',
  ],
};
