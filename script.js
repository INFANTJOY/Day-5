const resume ={
    "name": "INFANT LEENAS I",
    "objective": "Looking for a challenging role in a reputed company to utilize my engineering skills that can contribute to the company's growth as well as enhance my knowledge by exploring new things.",
    "contact": {
      "email": "infantjoy123@gmail.com",
      "phone": "7639428125",
      "address": "1/220, Kudi Street, Ayampatty, Trichy-620015, India",
      "linkedin": "linkedin.com/in/infantleenas25121997",
      "date_of_birth": "25 December, 1997"
    },
    "education": {
      "bachelor": {
        "degree": "B.E Mechanical Engineering",
        "institution": "SRM TRP Engineering College, Trichy",
        "duration": "08/2015 - 04/2019",
        "cgpa": "6.6"
      },
      "hsc": {
        "institution": "St. Joseph's College Higher Secondary School, Trichy",
        "duration": "06/2013 - 04/2015",
        "percentage": "88%"
      },
      "ssl": {
        "institution": "St. Joseph's High School, Trichy",
        "year_completed": "04/2013",
        "percentage": "91%"
      }
    },
    "skills": [
      "Flutter",
      "C",
      "Java",
      "Python",
      "MS-Word",
      "HTML",
      "NDT",
      "CREO",
      "ANSYS",
      "Time Management",
      "Team Worker"
    ],
    "certificates": [
      {
        "title": "C Programming",
        "description": "C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on."
      },
      {
        "title": "Core Java",
        "description": "Core Java is the part of Java programming language that is used for creating or developing a general-purpose application."
      },
      {
        "title": "Python",
        "description": "Python is an interpreted high-level general-purpose programming language."
      },
      {
        "title": "Non-Destructive Testing",
        "description": "Nondestructive testing is any of a wide group of analysis techniques used in science and technology industry to evaluate the properties of a material, component or system without causing damage."
      },
      {
        "title": "Creo Parametric",
        "description": "With Creo Parametric, and its extensions, you can create, analyze, view, and share designs downstream using 2D CAD, 3D CAD, and parametric and direct modeling capabilities."
      },
      {
        "title": "ANSYS",
        "description": "ANSYS is a general-purpose, finite-element modeling package for numerically solving a wide variety of mechanical problems."
      }
    ],
    "languages": {
      "tamil": "Native or Bilingual Proficiency",
      "english": "Professional Working Proficiency"
    },
    "interests": [
      "Coding",
      "Quality Checking",
      "Developer",
      "Testing"
    ],
    "personal_projects": [
      {
        "title": "Investigation of achieving a light-off temperature in a catalytic converter",
        "duration": "01/2019 - 04/2019",
        "description": "A catalytic converter is a vehicle emissions control device that is used to convert toxic by-products of combustion (occurring in the exhaust of an internal combustion engine) to less toxic substances by performing catalyzed chemical reactions."
      }
    ]
  }
  function iterateObject(obj, indent = 0) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
  
        // Check if the value is an object and not null
        if (typeof value === 'object' && value !== null) {
          console.log(`${'  '.repeat(indent)}${key}:`);
          iterateObject(value, indent + 1); // Recursive call for nested objects
        } else {
          console.log(`${'  '.repeat(indent)}${key}: ${value}`);
        }
      }
    }
  }
  
  // Call the function with the top-level JSON object
  iterateObject(resume);

