  /**
   * To run this file in Gitpod, use the 
   * command node filter.js in the terminal
   */


  // Simple Filtering
  const people = [{
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];
  const oldEnough = people.filter(person => person.age >= 21);
  console.log(oldEnough);

  const paul = people.filter(item => item.name === "Paul");
  console.log(paul);

  // Complex Filtering
  const students1 = [{
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [{
          name: 'javascript',
          yrsExperience: 1
        },
        {
          name: 'html',
          yrsExperience: 5
        },
        {
          name: 'css',
          yrsExperience: 3
        },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [{
          name: 'javascript',
          yrsExperience: 0
        },
        {
          name: 'html',
          yrsExperience: 4
        },
        {
          name: 'css',
          yrsExperience: 2
        },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [{
          name: 'javascript',
          yrsExperience: 1
        },
        {
          name: 'html',
          yrsExperience: 1
        },
        {
          name: 'css',
          yrsExperience: 5
        },
      ]
    },
  ];
  const has5yrExp = skill => skill.yrsExperience >= 5;
  const hasStrongSkl = student => student.skills.filter(has5yrExp).length > 0;
  const candidates = students1.filter(hasStrongSkl);
  console.log(candidates);
  console.log("---------------------------challenge-----------------------");
  //find students with maths score greater than or equal to 90

  let students = [{
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {
        maths: 'Harry',
        english: 'Joan',
        cad: 'Paul'
      },
      results: {
        maths: 90,
        english: 75,
        cad: 87
      },
    },
    {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {
        science: 'Iris',
        english: 'Joan',
        art: 'Simon'
      },
      results: {
        science: 93,
        english: 80,
        art: 95
      },
    },
    {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {
        science: 'Iris',
        maths: 'Harry',
        art: 'Simon'
      },
      results: {
        science: 84,
        maths: 97,
        art: 95
      },
    },
    {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {
        science: 'Iris',
        english: 'Joan',
        art: 'Simon'
      },
      results: {
        science: 67,
        english: 87,
        art: 95
      },
    }
  ];

  const topMaths = students.filter(student => student.results.maths >= 90);

  console.log(topMaths);