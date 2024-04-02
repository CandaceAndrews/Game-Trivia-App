
const ps1Games = [
  {
    id: 1,
    title: 'Final Fantasy VII',
    cover: require('@/assets/thumbnails/final-fantasy-7/cover.jpeg'),
    questions: [
      // 1
      {
        question: `What is the name of the ancient city that serves as the birthplace of the Cetra?`,
        options: ['Nibelheim', 'Wutai', 'Cosmo Canyon', 'The Forgotten Capital'],
        correctAnswer: 'The Forgotten Capital'
      },
      // 2
      {
        question: `What is the name of the final dungeon where players confront Sephiroth in his true form?`,
        options: ['Northern Crater', 'Forgotten City', 'Crystal Cave', 'Whirlwind Maze'],
        correctAnswer: 'Northern Crater'
      },
      // 3
      {
        question: `Which summon materia is obtained after defeating the Midgar Zolom?`,
        options: ['Leviathan', 'Ifrit', 'Bahamut', 'Choco/Mog'],
        correctAnswer: 'Leviathan'
      },
      // 4
      {
        question: `What is the name of the bar owned by Tifa Lockhart in Sector 7 of Midgar?`,
        options: ['Seventh Sin', `Heaven's Gate`, ' Seventh Circle', '7th Heaven'],
        correctAnswer: '7th Heaven'
      },
      // 5
      {
        question: `What is the ultimate Limit Break for Cloud Strife?`,
        options: ['Omnislash', 'Finishing Touch', 'Blade Beam', 'Catastrophe'],
        correctAnswer: 'Omnislash'
      },
      // 6
      {
        question: `Which two characters engage in a memorable fight atop the Sister Ray cannon?`,
        options: ['Cloud and Tifa', 'Barret and Dyne', 'Cloud and Sephiroth', 'Tifa and Sephiroth'],
        correctAnswer: 'Cloud and Sephiroth'
      },
      // 7
      {
        question: `What is the name of the underground prison where Cloud and his party are held captive during the story?`,
        options: ['Corel Prison', 'Nibelheim Prison', 'Sector 6 Prison', 'Shinra Building Detention Center'],
        correctAnswer: 'Corel Prison'
      },
      // 8
      {
        question: `Which character can manipulate time and space using their Limit Break abilities?`,
        options: ['Cloud Strife', 'Aerith Gainsborough', 'Vincent Valentine', 'Cait Sith'],
        correctAnswer: 'Vincent Valentine'
      },
      // 9
      {
        question: `What is the name of the giant cannon that Shinra uses to drain Mako energy from the planet?`,
        options: ['Mako Cannon', 'Omega Weapon', 'Sister Ray', 'Jenova Cannon'],
        correctAnswer: 'Sister Ray'
      },
      // 10
      {
        question: `What is the highest rank that a member of the elite military group SOLDIER can achieve?`,
        options: ['SOLDIER First Class', 'SOLDIER Elite', 'SOLDIER Captain', 'SOLDIER Commander'],
        correctAnswer: 'SOLDIER First Class'
      },
      // 11
      {
        question: `What is another name for an Ancient, the last of which plays a crucial role in the story of Final Fantasy VII?`,
        options: ['Cetra', 'Eternals', 'Elders', 'Celestials'],
        correctAnswer: 'Cetra'
      },
      // 12
      {
        question: `What is the name of the optional super-boss that appears in the Ancient Forest area?`,
        options: ['Emerald Weapon', 'Ruby Weapon', 'Diamond Weapon', 'Ultima Weapon'],
        correctAnswer: 'Ruby Weapon'
      },
      // 13
      {
        question: `What is the name of the robotic creature that accompanies Cait Sith?`,
        options: ['Aps', 'Mog', 'Tonberry', 'Boundfat'],
        correctAnswer: 'Mog'
      },
      // 14
      {
        question: `Which summon materia can be obtained by defeating the optional boss, Ruby Weapon?`,
        options: ['Knights of the Round', 'Phoenix', 'Alexander', 'Bahamut ZERO'],
        correctAnswer: 'Bahamut ZERO'
      },
      // 15
      {
        question: `How many Huge Materia are there in the game?`,
        options: ['3 Huge Materia', '4 Huge Materia', '5 Huge Materia', '6 Huge Materia'],
        correctAnswer: '3 Huge Materia'
      },
    ]
  },
  {
    id: 2,
    title: 'Metal Gear Solid',
    cover: require('@/assets/thumbnails/metal-gear-solid/cover.jpeg'),
    questions: [
      {
        // 1
        question: `What is the name of the island where most of Metal Gear Solid's events take place?`,
        options: ['Shadow Moses Island', 'Outer Heaven', 'Zanzibar Land', 'Mother Base'],
        correctAnswer: 'Shadow Moses Island',
      },
      {
        // 2
        question: `What is the name of the stealth camouflage technology used by Snake in Metal Gear Solid?`,
        options: ['Solid Eye', 'Stealth Camo', 'Active Camouflage', 'OctoCamo'],
        correctAnswer: 'Stealth Camo',
      },
      // 3
      {
        question: `What is the name of the device used by Snake to communicate with his support team and save the game in Metal Gear Solid?`,
        options: ['Codec', 'Radar', 'Walkie-Talkie', 'Transceiver'],
        correctAnswer: 'Codec',
      },
      // 4
      {
        question: `Which character betrays Snake and reveals herself to be working with the antagonist?`,
        options: ['Meryl Silverburgh', 'Sniper Wolf', 'Naomi Hunter', 'Mei Ling'],
        correctAnswer: 'Naomi Hunter',
      },
      // 5
      {
        question: `What is the real name of the character known as Deepthroat, who provides Snake with tips and information during the game?`,
        options: ['Frank Jaeger', 'Gray Fox', 'Liquid Snake', 'Solid Snake'],
        correctAnswer: 'Frank Jaeger',
      },
      // 6
      {
        question: `What is the name of the music track that plays during the iconic battle against Psycho Mantis?`,
        options: ['Encounter', 'Snake Eater', 'The Best is Yet to Come', 'Metal Gear Solid Main Theme'],
        correctAnswer: 'Encounter',
      },
      // 7
      {
        question: `What is the name of the government agency that Snake works for in Metal Gear Solid?`,
        options: ['CIA', 'FBI', 'FOXHOUND', 'FOXDIE'],
        correctAnswer: 'FOXHOUND',
      },
      // 8
      {
        question: `Which character sacrifices themselves to save Snake and Otacon during the final battle with Metal Gear Rex?`,
        options: ['Gray Fox', 'Meryl Silverburgh', 'Naomi Hunter', 'Mei Ling'],
        correctAnswer: 'Gray Fox',
      },
      // 9
      {
        question: `What is the name of the scientist who developed Metal Gear Rex and later aids Snake in stopping the weapon?`,
        options: ['Hal Emmerich', 'Frank Jaeger', 'Decoy Octopus', 'Donald Anderson'],
        correctAnswer: 'Hal Emmerich',
      },
        // 10
        {
          question: `What is the name of the virus injected into Snake, threatening his life and serving as a key plot element in Metal Gear Solid?`,
          options: ['FOXALIVE', 'FOXHOUND', 'FOXDIE-C', 'FOXDIE'],
          correctAnswer: 'FOXDIE',
        },
        // 11
        {
          question: `What is the name of the remote-controlled missile launcher used by Snake to destroy obstacles and enemies from a distance in Metal Gear Solid?`,
          options: ['Nikita Missile Launcher', 'Stinger Missile Launcher', 'FAMAS Assault Rifle', 'PSG1 Sniper Rifle'],
          correctAnswer: 'Nikita Missile Launcher',
        },
        // 12
        {
          question: `What is the name of the location where Solid Snake is initially briefed about his mission in Metal Gear Solid?`,
          options: ['Docking Bay', 'Helipad', 'Briefing Room', 'Armory'],
          correctAnswer: 'Briefing Room',
        },
        // 13
        {
          question: `What is the name of the key card system used to access different areas and levels within the Shadow Moses facility in Metal Gear Solid?`,
          options: ['PAL Key', 'Red Card', 'Blue Card', 'ID Card'],
          correctAnswer: '',
        },
        // 14
        {
          question: `What is the significance of the number "141.12" in Metal Gear Solid?`,
          options: [`It is the frequency of Otacon's Codec channel.`, 'It is the access code for Metal Gear Rex.', 'It is the date of the Shadow Moses incident.', 'It is the identification number of Gray Fox.'],
          correctAnswer: `It is the frequency of Otacon's Codec channel.`,
        },
        // 15
        {
          question: `What is the name of the AI system that controls the security and surveillance of the Shadow Moses facility in Metal Gear Solid?`,
          options: ['Otacon', 'ArmsTech', 'DARPA', 'Metal Gear Mk. II'],
          correctAnswer: 'ArmsTech',
        },
    ]
  },
  {
    id: 3,
    title: 'Resident Evil 2',
    cover: require('@/assets/thumbnails/resident-evil-2/cover.jpeg'),
    questions: [
      {
        // 1
        question: `What is the name of the underground laboratory where the T-Virus was developed and researched in Resident Evil 2?`,
        options: ['Arklay Laboratory', 'Spencer Mansion Laboratory', 'Raccoon City Laboratory','Umbrella Corporation Laboratory'],
        correctAnswer: `Umbrella Corporation Laboratory`,
      },
      {
        // 2
        question: `Which boss enemy must players defeat in the underground facility to obtain the G-Virus sample in Resident Evil 2?`,
        options: ['William Birkin', 'G-Virus Spawn', 'Mr. X', 'Giant Crocodile'],
        correctAnswer: ``,
      },
      {
        // 3
        question: `What is the code required to unlock the weapons locker in the Raccoon City Police Department?`,
        options: ['2236', '4613', '8159', '3645'],
        correctAnswer: `2236`,
      },
      {
        // 4
        question: `What is the name of the virus responsible for creating the zombies and mutated creatures in Resident Evil 2?`,
        options: ['T-Virus', 'G-Virus', 'Las Plagas', 'C-Virus'],
        correctAnswer: ``,
      },
      {
        // 5
        question: `What is the final destination that serves as the escape route for the survivors leading to a confrontation with a powerful boss?`,
        options: ['The Umbrella Corporation Headquarters', 'The Police Helipad', 'The Underground Train Station', 'The Raccoon City Hospital'],
        correctAnswer: ``,
      },
      {
        // 6
        question: `What is the name of the mutated plant boss encountered in the sewers beneath Raccoon City?`,
        options: ['Yawn', 'Neptune', 'Chimera', 'Ivy'],
        correctAnswer: ``,
      },
      {
        // 7
        question: `What is the final decision players must make near the end of Resident Evil 2 that determines the ending they will experience?`,
        options: ['Save Leon/Claire', 'Escape Alone', 'Destroy the Laboratory', 'Inject the Antivirus'],
        correctAnswer: ``,
      },
      {
        // 8
        question: ``,
        options: [],
        correctAnswer: ``,
      },
      {
        // 9
        question: ``,
        options: [],
        correctAnswer: ``,
      },
      {
        // 10
        question: ``,
        options: [],
        correctAnswer: ``,
      },
      {
        // 11
        question: ``,
        options: [],
        correctAnswer: ``,
      },
      {
        // 12
        question: ``,
        options: [],
        correctAnswer: ``,
      },
      {
        // 13
        question: ``,
        options: [],
        correctAnswer: ``,
      },
      {
        // 14
        question: ``,
        options: [],
        correctAnswer: ``,
      },
      {
        // 15
        question: ``,
        options: [],
        correctAnswer: ``,
      },
    ]
  },
  {
    id: 4,
    title: 'Crash Bandicoot',
    cover: require('@/assets/thumbnails/crash-bandicoot/cover.jpeg')
  },
  {
    id: 5,
    title: 'Spyro The Dragon',
    cover: require('@/assets/thumbnails/spyro-the-dragon/cover.jpeg')
  },
  {
    id: 6,
    title: 'Tomb Raider',
    cover: require('@/assets/thumbnails/tomb-raider/cover.png')
  },
  {
    id: 7,
    title: 'Silent Hill',
    cover: require('@/assets/thumbnails/silent-hill/cover.jpeg')
  },
  {
    id: 8,
    title: 'Tekken 3',
    cover: require('@/assets/thumbnails/tekken-3/cover.jpeg')
  }
  ];
  
  export default ps1Games;
  
