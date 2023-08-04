const developer = {
  name: 'Max',
  age: 30,
  domain: {
    frontend: {
      languages: ['JS', 'C++', 'Java'],
      frameworks: [
        {
          id: 1,
          name: 'ReactJS',
        },
        {
          id: 2,
          name: 'NodeJS',
        },
        {
          id: 3,
          name: 'JavaScript',
        },
      ],
    },
  },
};

const {
  domain: {
    frontend: {
      frameworks: [{ id: name1 }, { id: name2 }, { id: name3 }],
    },
  },
} = developer;

console.log(name1, name2, name3);
