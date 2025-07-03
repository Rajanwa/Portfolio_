import { Project, Experience, SkillCategory, StatItem } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Students Database Management System',
    description: 'Web-based platform that allows Students to enter their details in form and submit, when any admin wants to fetch the data of particular students then admin fills their details and fetches it.',
    image: '/carrent.jpg',
    technologies: ['React', 'MongoDB', 'Node.js', 'Express'],
    features: [
      'Student registration and data entry',
      'Admin dashboard for data retrieval',
      'Search and filter functionality',
      'Data validation and security',
      'Responsive design for all devices'
    ],
    challenges: 'Implementing secure authentication and efficient data retrieval with proper validation.',
    results: 'Successfully created a comprehensive database management system with 40% performance boost and identified $2M revenue opportunities.',
    metrics: [
      { label: 'Performance Boost', value: '40%', icon: 'trending-up' },
      { label: 'Revenue Identified', value: '$2M', icon: 'dollar-sign' }
    ],
    status: 'completed',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Excel to MySQL Uploader',
    description: 'A Python application which used for Data Uploader from Excel to MySQL with all validations like Changed Date Format, Remove Commas, With Keeping Scientific Notations.',
    image: '/jobit.jpg',
    technologies: ['Python', 'MySQL', 'Pandas', 'Openpyxl'],
    features: [
      'Automated Excel to MySQL data migration',
      'Data format validation and conversion',
      'Scientific notation preservation',
      'Error handling and logging',
      'Batch processing capabilities'
    ],
    challenges: 'Handling various Excel formats and ensuring data integrity during conversion.',
    results: 'Improved data upload efficiency by 80% and increased campaign effectiveness by 28%.',
    metrics: [
      { label: 'Campaign Boost', value: '80%', icon: 'target' },
      { label: 'Retention Increase', value: '28%', icon: 'users' }
    ],
    status: 'completed'
  },
  {
    id: 3,
    title: 'VBA Data Uploader',
    description: 'A Macros code for uploading Data from Active excel sheet to Database with Load File Active for fast uploading.',
    image: '/tripguide.jpg',
    technologies: ['VBA', 'Excel', 'MySQL', 'ADO'],
    features: [
      'One-click data upload from Excel',
      'Fast loading with optimized queries',
      'Progress tracking and status updates',
      'Error handling and rollback functionality',
      'User-friendly interface'
    ],
    challenges: 'Optimizing upload speed while maintaining data accuracy and handling large datasets.',
    results: 'Achieved 92% efficiency boost in data processing workflows.',
    metrics: [
      { label: 'Efficiency Boost', value: '92%', icon: 'zap' }
    ],
    status: 'completed'
  },
  {
    id: 4,
    title: 'Automatic Message Sender',
    description: 'An application with Python for automatic message send to any particular person with number or in any added group with its link.',
    image: '/auto.jpg',
    technologies: ['Python', 'Tkinter', 'Selenium', 'WhatsApp API'],
    features: [
      'Automated WhatsApp messaging',
      'Individual and group messaging',
      'Scheduled message sending',
      'Contact management',
      'Message templates and customization'
    ],
    challenges: 'Integrating with WhatsApp API while maintaining compliance and user privacy.',
    results: 'Reduced communication time by 60% and improved budget accuracy by 25%.',
    metrics: [
      { label: 'Time Reduction', value: '60%', icon: 'clock' },
      { label: 'Budget Accuracy', value: '25%', icon: 'pie-chart' }
    ],
    status: 'completed'
  },
  {
    id: 5,
    title: 'Robotic Arms Defect Detection Model',
    description: 'A Prediction Model of Robotic Arms detection with their corresponding materials as inputs field with accuracy of 99%.',
    image: '/deploye.jpg',
    technologies: ['Python', 'Logistic Regression', 'Random Forest', 'Decision Trees', 'XGBoost'],
    features: [
      'High-accuracy defect detection',
      'Multiple machine learning algorithms',
      'Feature engineering and selection',
      'Cross-validation and hyperparameter tuning',
      'Model interpretability analysis'
    ],
    challenges: 'Achieving high accuracy while maintaining model interpretability and handling imbalanced data.',
    results: 'Achieved 99% prediction accuracy and reduced manufacturing costs by 22%.',
    metrics: [
      { label: 'Accuracy', value: '99%', icon: 'target' },
      { label: 'Cost Reduction', value: '22%', icon: 'trending-down' }
    ],
    status: 'completed'
  },
  {
    id: 6,
    title: 'LinkedIn Post Generator',
    description: 'Automated generated the post content for LinkedIn with the help of OpenAI in real time given topic by the Users.',
    image: '/Linkidin.jpg',
    technologies: ['Python', 'OpenAI API', 'Tkinter', 'Natural Language Processing'],
    features: [
      'AI-powered content generation',
      'Real-time topic processing',
      'Customizable post templates',
      'Content optimization suggestions',
      'User-friendly interface'
    ],
    challenges: 'Integrating OpenAI API efficiently and generating relevant, engaging content.',
    results: 'Increased content creation speed by 75% and improved quality by 80%.',
    metrics: [
      { label: 'Speed Increase', value: '75%', icon: 'zap' },
      { label: 'Quality Boost', value: '80%', icon: 'shield' }
    ],
    status: 'completed'
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Data Analyst',
    company: 'K G R S Business Consultants Private Limited',
    period: 'Jan 2025 - Present',
    location: 'Remote',
    type: 'full-time',
    description: 'Currently working as a Data Analyst and Automation Engineer with 3 months of experience in KGRS Consultancy Company, focusing on data analysis and business intelligence solutions.',
    achievements: [
      'Pizza Sales Analysis: Explored sales trends to identify the best-selling pizza types, peak ordering hours, and customer preferences',
      'Coffee Sales Analysis: Analyzed monthly sales data to uncover seasonal demand patterns, top-performing products, and customer purchasing behavior',
      'Churn Analysis: Conducted in-depth analysis to understand why customers leave a service or subscription',
      'Built visual dashboards and used exploratory data techniques to highlight churn patterns, segment high-risk customers, and suggest retention strategies',
      'Demonstrated ability to clean, process, visualize, and interpret complex datasets using Python libraries like Pandas, NumPy, Matplotlib, and Seaborn'
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SQL', 'Data Visualization']
  },
  {
    id: 2,
    title: 'Python Developer',
    company: 'K G R S Business Consultants Private Limited',
    period: 'Jan 2025 - Present',
    location: 'Remote',
    type: 'full-time',
    description: 'Developing Python applications and automation solutions for business process optimization and data workflow management.',
    achievements: [
      'Developed an application to upload Excel data directly into MySQL databases, streamlining data workflows',
      'Created a WhatsApp automation script that sends scheduled messages to individuals or groups using group links',
      'Built an application to download files from websites in backend and save at the file location where the application file exists',
      'Implemented efficient backend processing with automated file management capabilities',
      'Delivered solutions that improve operational efficiency and reduce manual work'
    ],
    technologies: ['Python', 'MySQL', 'Excel Integration', 'WhatsApp API', 'Automation', 'Backend Development']
  },
  {
    id: 3,
    title: 'Machine Learning Engineer',
    company: 'College Project',
    period: 'Jan 2025 - Present',
    location: 'Academic Project',
    type: 'academic',
    description: 'Developed advanced machine learning models for robotic applications with focus on defect detection and predictive analytics.',
    achievements: [
      'Developed a high-accuracy prediction model using Python to detect defects in robotic arms, achieving an impressive 99% accuracy',
      'Preprocessing complex sensor and mechanical data for optimal model performance',
      'Feature engineering to enhance model performance and accuracy',
      'Training and evaluating multiple machine learning algorithms to find the best solution',
      'Selecting the most accurate model through hyperparameter tuning and cross-validation',
      'Implemented comprehensive model validation and testing procedures'
    ],
    technologies: ['Python', 'Machine Learning', 'Scikit-learn', 'TensorFlow', 'Feature Engineering', 'Cross-validation']
  },
  {
    id: 4,
    title: 'Web Developer',
    company: 'Bharat Intern',
    period: 'Sep 2023 - Oct 2023',
    location: 'Remote',
    type: 'internship',
    description: 'Gained hands-on experience in web development, working with modern technologies and collaborating with cross-functional teams.',
    achievements: [
      'Developing and maintaining web applications using React.js and other related technologies',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products',
      'Implementing responsive design and ensuring cross-browser compatibility',
      'Participating in code reviews and providing constructive feedback to other developers',
      'Gained experience in modern web development practices and agile methodologies'
    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'Git']
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: 'code',
    skills: [
      { name: 'Python', level: 90, icon: 'python' },
      { name: 'SQL', level: 85, icon: 'database' },
      { name: 'VBA Programming', level: 75, icon: 'file-spreadsheet' }
    ]
  },
  {
    title: 'Data Analysis Tools',
    icon: 'bar-chart-3',
    skills: [
      { name: 'Pandas & NumPy', level: 88, icon: 'layers' },
      { name: 'Excel', level: 80, icon: 'file-text' },
      { name: 'Jupyter Notebooks', level: 85, icon: 'book-open' }
    ]
  },
  {
    title: 'Visualization & BI',
    icon: 'pie-chart',
    skills: [
      { name: 'Power BI', level: 82, icon: 'bar-chart' },
      { name: 'Matplotlib', level: 78, icon: 'line-chart' },
      { name: 'Seaborn', level: 85, icon: 'activity' }
    ]
  },
  {
    title: 'Machine Learning',
    icon: 'brain',
    skills: [
      { name: 'Scikit-learn', level: 80, icon: 'cpu' },
      { name: 'ML Models', level: 70, icon: 'network' },
      { name: 'Statistics', level: 85, icon: 'calculator' }
    ]
  }
];

export const stats: StatItem[] = [
  { number: 10, label: 'Projects', suffix: '+' },
  { number: 1, label: 'Years Exp', suffix: '+' },
  { number: 16, label: 'Technologies', suffix: '+' }
];