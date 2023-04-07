const express = require('express');
const router = express.Router();

/*********************************** ALL SITE DATA ***********************************/
// List of names for dynamic (date based) visitors
const dynamicVisitors = [
  'Michael',
  'Christopher',
  'Jessica',
  'Matthew',
  'Ashley',
  'Jennifer',
  'Joshua',
  'Amanda',
  'Daniel',
  'David',
  'James',
  'Robert',
  'John',
  'Joseph',
  'Andrew',
  'Ryan',
  'Sarah',
  'Stephanie',
  'Rachel',
  'Erika',
  'Thomas',
  'Sonya',
  'Bill',
  'Tyrone',
  'Denise',
  'Brian',
  'Adam',
  'Megan',
  'Eric',
  'Elizabeth',
  'Anthony',
  'Nicole',
  'Kevin',
  'Melissa',
  'Kevin',
  'Laura',
  'Kyle',
  'Kayla',
  'Amber',
  'Richard',
  'Kim',
  'Jeff',
  'Amy',
  'Michelle',
  'Benjamin',
  'Mark',
  'Emily',
  'Aaron',
  'Charles',
  'Rebecca',
  'Jamie',
  'Erin',
  'Zachary',
  'Sean',
  'Mary',
  'Kelly',
  'Paul',
  'Dustin',
  'Travis',
  'Gregory',
  'Andrea',
  'Angela',
  'Bryan',
  'Shane',
  'Todd',
  'George',
  'Phillip',
  'Stacy',
  'Joanna',
  'Jasmine',
  'Brooke',
  'Felicity',
  'Tony',
  'Nancy',
  'Kate',
  'Jillian',
  'Jerry',
  'Luke',
  'Maria',
  'Cody',
  'Allison',
  'Peter',
  'Jordan',
  'Natalie',
  'Holly',
  'Jared',
  'Anna',
  'Caroline',
  'Amalia',
  'Donald',
  'Micah',
  'Marvin',
  'Levi',
  'Brad',
  'Taryn',
  'Toni',
  'Jessie',
  'Ronnie',
  'Ruth',
  'Adriana',
  'Darryl',
  'Mayra',
  'Ralph',
  'Elena',
  'Anita',
  'Jane',
  'Simon',
  'Eli',
  'Quentin',
  'Collin',
  'Dallas',
  'Lamar',
  'Lebron',
  'Francisco',
  'DwayneTheRock',
  'Rudy',
  'Rosemary',
  'Marlin',
  'Dory',
  'Glen',
  'Dipper',
];

// List of accounts for dynamic (date based) visitors
const dynamicAccounts = [
  'Soylent Corp',
  'Wonka Industries',
  'Dharma Initiative',
  'Waynes World',
  'Parker Industries',
  'Oceanic',
  'Rearden Steal',
  'InGen',
  'Oscorp',
  'Purrada',
  'Rent A Swag',
  'Space Y',
  'Pixel Arts',
  'Vinepoly',
  'Cloudworks',
  'Chief Aviation',
  'Sphere Co',
  'Altair Corp',
  'Vega Corp',
  'Deneb Corp',
  'Shade Arts',
  'Lion Security',
  'Jupiter Brews',
  'Jetlife',
  'Herolutions',
  'Sphinx Solutions',
  'WhiteBox Inc',
  'Rosefly',
  'Dinoco',
  'Silver Shamrock',
  'Bushwood',
  'HAL Labs',
  'Mugatu Industries',
  'Pizza Planet',
  'Rex Kwan Do',
  'Macmillan',
  'Empire Industries',
];

// List of accounts for static visitors
const staticAccounts = [
  'Stark Industries',
  'Wayne Enterprises',
  'Hooli',
  'Dunder Mifflin US',
  'Pied Piper',
  'Dunder Mifflin EU',
  // 'Associated Strategies',
  'Sterling Cooper',
  'Ewing Oil',
  'Prestige Worldwide',
  'TelAmeriCorp',
  'TakeOff',
  'Burnham and Root',
  'Outer Inc',
  'One World',
  'Cadence',
  'WorryFree Inc',
  'BlueLine',
  'Raptor Inc',
  'Arrowhead',
  'Moonlight Inc',
  'BlueRibbon',
  'LightSpeed',
  'Imaginary Inc',
  'Pluto Corp',
  'Hyperion',
  'BlackBox Inc',
  'Eco Focus',
  'Innovation Arch',
  'Strat Security',
  'Inspire Fitness Co',
  'Candor Corp',
  'Cogent Data',
  'Epic Adventure Inc',
  'Sanguine Skincare',
  'Vortex Solar',
  'Admire Arts',
];

// List of possible systems
const systems = [
  'Mac',
  'Mac',
  'Mac',
  'Mac',
  'Windows',
  'Windows',
  'Windows',
  'Windows',
  'Linux',
];

// Account metadata lookup
let accountDataLookup = [
  {
    accountId: 'Acme',
    account_tier: 'Commercial',
    planLevel: 'Bronze',
    inTrial: true,
  },
  {
    accountId: 'Altair Corp',
    account_tier: 'Commercial',
    planLevel: 'Bronze',
    inTrial: true,
  },
  {
    accountId: 'BlueLine',
    account_tier: 'Commercial',
    planLevel: 'Bronze',
    inTrial: true,
  },
  {
    accountId: 'Burnham and Root',
    account_tier: 'Commercial',
    planLevel: 'Bronze',
    inTrial: true,
  },
  {
    accountId: 'Dinoco',
    account_tier: 'Commercial',
    planLevel: 'Bronze',
    inTrial: false,
  },
  {
    accountId: 'Dunder Mifflin EU',
    account_tier: 'Commercial',
    planLevel: 'Bronze',
    inTrial: true,
  },
  {
    accountId: 'Epic Adventure Inc',
    account_tier: 'Commercial',
    planLevel: 'Bronze',
    inTrial: true,
  },
  {
    accountId: 'Ewing Oil',
    account_tier: 'Commercial',
    planLevel: 'Bronze',
    inTrial: true,
  },
  {
    accountId: 'HAL Labs',
    account_tier: 'Commercial',
    planLevel: 'Bronze',
    inTrial: false,
  },
  {
    accountId: 'Herolutions',
    account_tier: 'Commercial',
    planLevel: 'Bronze',
    inTrial: false,
  },
  {
    accountId: 'Innovation Arch',
    account_tier: 'Commercial',
    planLevel: 'Bronze',
    inTrial: false,
  },
  {
    accountId: 'Jetlife',
    account_tier: 'Commercial',
    planLevel: 'Bronze',
    inTrial: false,
  },
  {
    accountId: 'Jupiter Brews',
    account_tier: 'Corporate',
    planLevel: 'Bronze',
    inTrial: true,
  },
  {
    accountId: 'Mugatu Industries',
    account_tier: 'Corporate',
    planLevel: 'Bronze',
    inTrial: true,
  },
  {
    accountId: 'Pluto Corp',
    account_tier: 'Corporate',
    planLevel: 'Bronze',
    inTrial: false,
  },
  {
    accountId: 'Prestige Worldwide',
    account_tier: 'Corporate',
    planLevel: 'Bronze',
    inTrial: true,
  },
  {
    accountId: 'Rent A Swag',
    account_tier: 'Corporate',
    planLevel: 'Bronze',
    inTrial: false,
  },
  {
    accountId: 'Rex Kwan Do',
    account_tier: 'Corporate',
    planLevel: 'Bronze',
    inTrial: true,
  },
  {
    accountId: 'Shade Arts',
    account_tier: 'Corporate',
    planLevel: 'Bronze',
    inTrial: false,
  },
  {
    accountId: 'Sphinx Solutions',
    account_tier: 'Corporate',
    planLevel: 'Bronze',
    inTrial: true,
  },
  {
    accountId: 'Vinepoly',
    account_tier: 'Corporate',
    planLevel: 'Bronze',
    inTrial: false,
  },
  {
    accountId: 'Wayne Enterprises',
    account_tier: 'Corporate',
    planLevel: 'Bronze',
    inTrial: false,
  },
  {
    accountId: 'Waynes World',
    account_tier: 'Corporate',
    planLevel: 'Bronze',
    inTrial: true,
  },
  {
    accountId: 'WhiteBox Inc',
    account_tier: 'Corporate',
    planLevel: 'Bronze',
    inTrial: false,
  },
  {
    accountId: 'WorryFree Inc',
    account_tier: 'Corporate',
    planLevel: 'Bronze',
    inTrial: true,
  },
  {
    accountId: 'EpicAdventureInc',
    account_tier: 'Corporate',
    planLevel: 'Free',
    inTrial: false,
  },
  {
    accountId: 'LionSecurity',
    account_tier: 'Corporate',
    planLevel: 'Free',
    inTrial: false,
  },
  {
    accountId: 'Pendo',
    account_tier: 'Corporate',
    planLevel: 'Free',
    inTrial: true,
  },
  {
    accountId: 'PixelArts',
    account_tier: 'Corporate',
    planLevel: 'Free',
    inTrial: false,
  },
  {
    accountId: 'ReardenSteal',
    account_tier: 'Corporate',
    planLevel: 'Free',
    inTrial: true,
  },
  {
    accountId: 'WhiteBoxInc',
    account_tier: 'Commercial',
    planLevel: 'Free',
    inTrial: true,
  },
  {
    accountId: 'Admire Arts',
    account_tier: 'Enterprise',
    planLevel: 'Gold',
    inTrial: false,
  },
  {
    accountId: 'Arrowhead',
    account_tier: 'Commercial',
    planLevel: 'Gold',
    inTrial: false,
  },
  {
    accountId: 'Associated Strategies',
    account_tier: 'Enterprise',
    planLevel: 'Gold',
    inTrial: true,
  },
  {
    accountId: 'BlackBox Inc',
    account_tier: 'Commercial',
    planLevel: 'Gold',
    inTrial: false,
  },
  {
    accountId: 'BlueRibbon',
    account_tier: 'Enterprise',
    planLevel: 'Gold',
    inTrial: false,
  },
  {
    accountId: 'Candor Corp',
    account_tier: 'Commercial',
    planLevel: 'Gold',
    inTrial: false,
  },
  {
    accountId: 'Cloudworks',
    account_tier: 'Enterprise',
    planLevel: 'Gold',
    inTrial: false,
  },
  {
    accountId: 'Deneb Corp',
    account_tier: 'Commercial',
    planLevel: 'Gold',
    inTrial: false,
  },
  {
    accountId: 'Dunder Mifflin US',
    account_tier: 'Enterprise',
    planLevel: 'Gold',
    inTrial: false,
  },
  {
    accountId: 'Eco Focus',
    account_tier: 'Commercial',
    planLevel: 'Gold',
    inTrial: true,
  },
  {
    accountId: 'Empire Industries',
    account_tier: 'Enterprise',
    planLevel: 'Gold',
    inTrial: false,
  },
  {
    accountId: 'Imaginary Inc',
    account_tier: 'Commercial',
    planLevel: 'Gold',
    inTrial: false,
  },
  {
    accountId: 'Inspire Fitness Co',
    account_tier: 'Enterprise',
    planLevel: 'Gold',
    inTrial: true,
  },
  {
    accountId: 'LightSpeed',
    account_tier: 'Commercial',
    planLevel: 'Gold',
    inTrial: false,
  },
  {
    accountId: 'Moonlight Inc',
    account_tier: 'Enterprise',
    planLevel: 'Gold',
    inTrial: false,
  },
  {
    accountId: 'Outer Inc',
    account_tier: 'Enterprise',
    planLevel: 'Gold',
    inTrial: true,
  },
  {
    accountId: 'Pied Piper',
    account_tier: 'Enterprise',
    planLevel: 'Gold',
    inTrial: false,
  },
  {
    accountId: 'Pixel Arts',
    account_tier: 'Enterprise',
    planLevel: 'Gold',
    inTrial: true,
  },
  {
    accountId: 'Raptor Inc',
    account_tier: 'Enterprise',
    planLevel: 'Gold',
    inTrial: true,
  },
  {
    accountId: 'Rearden Steal',
    account_tier: 'Enterprise',
    planLevel: 'Gold',
    inTrial: false,
  },
  {
    accountId: 'Space Y',
    account_tier: 'Enterprise',
    planLevel: 'Gold',
    inTrial: true,
  },
  {
    accountId: 'Stark Industries',
    account_tier: 'Enterprise',
    planLevel: 'Gold',
    inTrial: false,
  },
  {
    accountId: 'Sterling Cooper',
    account_tier: 'Enterprise',
    planLevel: 'Gold',
    inTrial: true,
  },
  {
    accountId: 'Strat Security',
    account_tier: 'Enterprise',
    planLevel: 'Gold',
    inTrial: false,
  },
  {
    accountId: 'TakeOff',
    account_tier: 'Enterprise',
    planLevel: 'Gold',
    inTrial: true,
  },
  {
    accountId: 'Wonka Industries',
    account_tier: 'Enterprise',
    planLevel: 'Gold',
    inTrial: false,
  },
  {
    accountId: 'Bushwood',
    account_tier: 'Enterprise',
    planLevel: 'Silver',
    inTrial: false,
  },
  {
    accountId: 'Cadence',
    account_tier: 'Enterprise',
    planLevel: 'Silver',
    inTrial: true,
  },
  {
    accountId: 'Chief Aviation',
    account_tier: 'Enterprise',
    planLevel: 'Silver',
    inTrial: true,
  },
  {
    accountId: 'Cogent Data',
    account_tier: 'Enterprise',
    planLevel: 'Silver',
    inTrial: true,
  },
  {
    accountId: 'Dharma Initiative',
    account_tier: 'Enterprise',
    planLevel: 'Silver',
    inTrial: true,
  },
  {
    accountId: 'Hooli',
    account_tier: 'Enterprise',
    planLevel: 'Silver',
    inTrial: true,
  },
  {
    accountId: 'Hyperion',
    account_tier: 'Enterprise',
    planLevel: 'Silver',
    inTrial: true,
  },
  {
    accountId: 'InGen',
    account_tier: 'Enterprise',
    planLevel: 'Silver',
    inTrial: true,
  },
  {
    accountId: 'Lion Security',
    account_tier: 'Enterprise',
    planLevel: 'Silver',
    inTrial: true,
  },
  {
    accountId: 'Macmillan',
    account_tier: 'Enterprise',
    planLevel: 'Silver',
    inTrial: true,
  },
  {
    accountId: 'Oceanic',
    account_tier: 'Commercial',
    planLevel: 'Silver',
    inTrial: false,
  },
  {
    accountId: 'One World',
    account_tier: 'Commercial',
    planLevel: 'Silver',
    inTrial: true,
  },
  {
    accountId: 'Oscorp',
    account_tier: 'Commercial',
    planLevel: 'Silver',
    inTrial: false,
  },
  {
    accountId: 'Parker Industries',
    account_tier: 'Commercial',
    planLevel: 'Silver',
    inTrial: false,
  },
  {
    accountId: 'Pizza Planet',
    account_tier: 'Commercial',
    planLevel: 'Silver',
    inTrial: true,
  },
  {
    accountId: 'Purrada',
    account_tier: 'Commercial',
    planLevel: 'Silver',
    inTrial: false,
  },
  {
    accountId: 'Rosefly',
    account_tier: 'Commercial',
    planLevel: 'Silver',
    inTrial: false,
  },
  {
    accountId: 'Sanguine Skincare',
    account_tier: 'Commercial',
    planLevel: 'Silver',
    inTrial: true,
  },
  {
    accountId: 'Silver Shamrock',
    account_tier: 'Commercial',
    planLevel: 'Silver',
    inTrial: true,
  },
  {
    accountId: 'Soylent Corp',
    account_tier: 'Commercial',
    planLevel: 'Silver',
    inTrial: false,
  },
  {
    accountId: 'Sphere Co',
    account_tier: 'Commercial',
    planLevel: 'Silver',
    inTrial: false,
  },
  {
    accountId: 'TelAmeriCorp',
    account_tier: 'Commercial',
    planLevel: 'Silver',
    inTrial: false,
  },
  {
    accountId: 'Vega Corp',
    account_tier: 'Corporate',
    planLevel: 'Silver',
    inTrial: true,
  },
  {
    accountId: 'Vortex Solar',
    account_tier: 'Corporate',
    planLevel: 'Silver',
    inTrial: true,
  },
];

/*********************************** ROUTES ***********************************/
router.get('/visitors', function (req, res) {
  res.json(dynamicVisitors);
});

router.get('/accounts', function (req, res) {
  res.json(dynamicAccounts.concat(staticAccounts));
});

router.get('/roles/', function (req, res) {
  res.json(roles);
});

router.get('/teams', function (req, res) {
  res.json(teams);
});

router.get('/titles/:team', function (req, res) {
  let titlesByTeam = titles[req.params.team];

  if (titlesByTeam) {
    res.json(titlesByTeam);
  } else {
    res.status(404);
    res.json({ message: 'Not Found' });
  }
});

router.get('/regions', function (req, res) {
  res.json(regions);
});

router.get('/offices/:region', function (req, res) {
  let officesByRegion = offices[req.params.region];

  if (officesByRegion) {
    res.json(officesByRegion);
  } else {
    res.status(404);
    res.json({ message: 'Not Found' });
  }
});

router.get('/systems', function (req, res) {
  res.json(systems);
});

router.get('/visitors/new', function (req, res) {
  let urlDynamic = req.query.dynamic;
  let urlStatic = req.query.static;
  let visitorType;

  // Determine visitor type from url params
  if (urlDynamic === 'true') {
    visitorType = 'dynamic';
  } else if (urlStatic === 'true') {
    visitorType = 'static';
  } else {
    // If urlDynamic and urlStatic not assigned, assign with coin flip
    // 67% of time give dynamic visitor, 33% of time give static visitor
    visitorType = Math.random() < 0.67 ? 'dynamic' : 'static';
  }

  let app = req.query.app;
  let appMetadata = {};

  if (app === 'crm' || app === 'a11y') {
    appMetadata = {
      suffix: 0,
      roles: ['user', 'admin', 'read-only'],
      teams: [
        'Product',
        'Product',
        'Product',
        'Engineering',
        'IT',
        'Sales',
        'Sales',
        'Sales',
        'Design',
        'Finance',
      ],
      titlePrefixes: ['Junior ', '', '', '', 'Senior ', 'Senior '],
      titles: {
        Product: ['Product Manager'],
        Engineering: [
          'Front End Engineer',
          'Front End Engineer',
          'Front End Engineer',
          'Back End Engineer',
          'Back End Engineer',
          'Back End Engineer',
          'Engineering Manager',
        ],
        IT: ['IT Engineer', 'IT Engineer', 'IT Engineer', 'IT Manager'],
        Sales: [
          'Sales Development Representative',
          'Sales Development Representative',
          'Sales Development Representative',
          'Sales Development Manager',
          'Account Executive',
          'Account Executive',
          'Account Executive',
          'Sales Engineer',
          'Sales Engineer',
          'Sales Engineer',
          'Sales Engineering Manager',
        ],
        Design: ['UI Designer', 'UI Designer', 'UI Designer', 'UI Manager'],
        Finance: [
          'Accountant',
          'Accountant',
          'Accountant',
          'Accounting Manager',
          'Accounting Manager',
          'Accounting Manager',
          'Sales Operations Analyst',
          'Sales Operations Manager',
        ],
      },
      regions: ['AMER', 'AMER', 'AMER', 'EMEA', 'APAC'],
      offices: {
        AMER: ['Raleigh', 'New York', 'San Francisco'],
        EMEA: ['Herzliya', 'Sheffield'],
        APAC: ['Tokyo', 'Sydney'],
      },
    };
  } else if (app === 'investments') {
    appMetadata = {
      suffix: 1,
      roles: ['user', 'admin'],
      teams: [
        'Advisors',
        'Analysts',
        'Consulting',
        'Risk Management',
        'Research',
      ],
      titlePrefixes: ['Junior ', '', '', '', 'Senior ', 'Senior '],
      titles: {
        'Risk Management': ['Risk Analyst', 'Risk Manager'],
        Research: ['Research Associate', 'Research Analyst'],
        Analysts: ['Budget Analyst', 'Credit Analyst'],
        Consulting: ['Financial Consultant'],
        Advisors: ['Financial Advisor'],
      },
      regions: ['AMER', 'EMEA', 'APAC'],
      offices: {
        AMER: ['Raleigh', 'New York', 'San Francisco'],
        EMEA: ['Herzliya', 'Sheffield'],
        APAC: ['Tokyo', 'Sydney'],
      },
    };
  } else if (app === 'insurance') {
    appMetadata = {
      suffix: 2,
      roles: ['user', 'admin', 'read-only'],
      teams: ['Claims', 'Administrative', 'Audit', 'Agents'],
      titlePrefixes: ['Jr ', '', '', 'Sr '],
      titles: {
        Claims: ['Claims Representative', 'Claims Investigator'],
        Administrative: ['Administrative Assistant'],
        Audit: ['Auditor'],
        Agents: ['Agent'],
      },
      regions: ['AMER', 'AMER', 'AMER', 'EMEA', 'APAC'],
      offices: {
        AMER: ['Raleigh', 'New York', 'San Francisco'],
        EMEA: ['Herzliya', 'Sheffield'],
        APAC: ['Tokyo', 'Sydney'],
      },
    };
  } else if (app === 'ehr') {
    appMetadata = {
      suffix: 3,
      roles: ['user', 'admin', 'read-only'],
      teams: ['Physician', 'Administrative', 'Nurse'],
      titlePrefixes: ['', '', 'Sr '],
      titles: {
        Physician: ['Physician'],
        Administrative: ['Billing Administrator', 'Administrative Assistant'],
        Nurse: ['Registered Nurse'],
      },
      regions: ['North', 'East', 'South', 'West'],
      offices: {
        North: ['Spinoza', 'Smith'],
        East: ['Humbug'],
        South: ['Johnson', 'Chianti'],
        West: ['Jones'],
      },
    };
  }

  let visInfo;
  // Get visitor info based on visitor type
  switch (visitorType) {
    case 'dynamic':
      visInfo = getDynamicVisitor(appMetadata.suffix);
      break;
    case 'static':
      visInfo = getStaticVisitor(appMetadata.suffix);
      break;
    default:
      visInfo = getDynamicVisitor(appMetadata.suffix);
      break;
  }
  console.log(visInfo);

  // Overwrite visitor with url params if present before populating metadata
  visInfo.visitor.id = req.query.visitor || visInfo.visitor.id;

  // Populate metadata + account for visitor based on previously generated visitor ID
  visInfo = populateMetadata(visInfo, appMetadata);

  // Overwrite metadata with query params
  visInfo = overwriteMetadata(visInfo, req.query, appMetadata);

  // Send as JSON
  res.json(visInfo);
});

module.exports = router;

/*********************************** VISITOR GENERATION HELPER FUNCTIONS ***********************************/
// Get dynamic (date based) visitor (visitorId + acountId)
function getDynamicVisitor(suffix, date) {
  // Create New Date, date will be used in the case of testing, otherwise, today will = today.
  const today = date || new Date();

  // Get the day of the week as a number [0 - 6 = Sun - Sat]
  const dayOfWeek = today.getDay();

  let visitorName, // Name from array
    visitor = ''; // Name from array + date string
  // Based on day of week, assign visitor the appropriate name + date.
  switch (dayOfWeek) {
    // Monday - Today the goal is to obtain 100 new visitors with today's date. These are weekly unique visitor IDs. Choose 1 random visitor, assign the visitor ID as the name + today's date.
    case 1:
      visitorName =
        dynamicVisitors[
          getRandInt(0, Math.floor(dynamicVisitors.length * 1.0))
        ];
      visitor = `${visitorName}${calcPrevDate(0)}`; // today
      break;

    // Tuesday - Repeat ~90% of visitors from one week ago or ~60% of visitors from one month ago (same as 4 weeks ago)
    case 2:
      if (Math.random() < 0.5) {
        // Week Case
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.9))
          ];
        visitor = `${visitorName}${calcPrevDate(8)}`; // 1 * 7 + 1 = 8
      } // Month Case
      else {
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.6))
          ];
        visitor = `${visitorName}${calcPrevDate(29)}`; // 1 * 7 * 4 + 1 = 29
      }
      break;

    // Wednesday - Repeat ~80% of visitors from two weeks ago or ~50% of visitors from two months ago
    case 3:
      if (Math.random() < 0.5) {
        // Week Case
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.8))
          ];
        visitor = `${visitorName}${calcPrevDate(16)}`; // 2 * 7 + 2 = 16
      } // Month Case
      else {
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.5))
          ];
        visitor = `${visitorName}${calcPrevDate(58)}`; // 2 * 7 * 4 + 2 = 58
      }
      break;

    // Thursday - Repeat ~70% of visitors from three weeks ago or ~45% of visitors from three months ago
    case 4:
      if (Math.random() < 0.5) {
        // Week Case
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.7))
          ];
        visitor = `${visitorName}${calcPrevDate(24)}`; // 3 * 7 + 3 = 24
      } // Month Case
      else {
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.45))
          ];
        visitor = `${visitorName}${calcPrevDate(87)}`; // 3 * 7 * 4 + 3 = 87
      }
      break;

    // Friday - Repeat ~60% of visitors from four weeks ago or 40% of visitors from four months ago
    case 5:
      if (Math.random() < 0.5) {
        // Week Case
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.6))
          ];
        visitor = `${visitorName}${calcPrevDate(32)}`; // 4 * 7 + 4 = 32
      } // Month Case
      else {
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.4))
          ];
        visitor = `${visitorName}${calcPrevDate(116)}`; // 4 * 7 * 4 + 4 = 116
      }
      break;

    // Saturday - Repeat ~50% of visitors from five weeks ago or ~35% of visitors from five months ago
    case 6:
      if (Math.random() < 0.5) {
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.5))
          ];
        visitor = `${visitorName}${calcPrevDate(40)}`; // 5 * 7 + 5 = 40
      } else {
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.35))
          ];
        visitor = `${visitorName}${calcPrevDate(145)}`; // 5 * 7 * 4 + 5  = 145
      }
      break;
    // Sunday - Repeat ~40% of visitors from six weeks ago or ~30% of visitors from six months ago
    case 0:
      if (Math.random() < 0.5) {
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.4))
          ];
        visitor = `${visitorName}${calcPrevDate(48)}`; // 6 * 7 + 6 = 48
      } else {
        visitorName =
          dynamicVisitors[
            getRandInt(0, Math.floor(dynamicVisitors.length * 0.3))
          ];
        visitor = `${visitorName}${calcPrevDate(174)}`; // 6 * 7 * 4 + 6 = 174
      }
      break;
  }

  // Set account based on visitor name to guarantee visitorID is the same when it returns
  const accountId =
    dynamicAccounts[
      dynamicVisitors.indexOf(visitorName) % dynamicAccounts.length
    ];

  // Create account string w /out spaces to append to visitor name
  const accountIdNoSpaces = accountId.replace(/\s/g, '');

  let accountInfo = accountDataLookup.filter(
    (account) => account.accountId == accountId
  )[0];

  return {
    visitor: { id: `${visitor}-${suffix}@${accountIdNoSpaces}.com` },
    account: {
      id: accountId,
      planLevel: accountInfo.planLevel,
      account_tier: accountInfo.account_tier,
      inTrial: accountInfo.inTrial,
    },
  };
}

// Get static visitor (visitorId + acountId)
// Proportions and IDs here used to maintain data in original Acme CRM accounts
function getStaticVisitor(suffix) {
  const randNum = Math.random() * 100;
  const accountId =
    staticAccounts[Math.floor(Math.random() * staticAccounts.length)];
  const accountIdNoSpaces = accountId.replace(/\s/g, '');

  let accountInfo = accountDataLookup.filter(
    (account) => account.accountId == accountId
  )[0];

  let visitorId;
  if (randNum < 25) {
    // 0 - 25 (25%)
    visitorId = `visitor1-${suffix}@${accountIdNoSpaces}.com`;
  } else if (randNum <= 50) {
    // 25 - 50 (25%)
    visitorId = `visitor6-${suffix}@${accountIdNoSpaces}.com`;
  } else if (randNum <= 65) {
    // 50 - 65 (15%)
    visitorId = `visitor4-${suffix}@${accountIdNoSpaces}.com`;
  } else if (randNum <= 80) {
    // 65 - 80 (15%)
    visitorId = `visitor7-${suffix}@${accountIdNoSpaces}.com`;
  } else if (randNum <= 90) {
    // 80 - 90 (10%)
    visitorId = `visitor5-${suffix}@${accountIdNoSpaces}.com`;
  } else if (randNum <= 95) {
    // 90 - 95 (5%)
    visitorId = `visitor3-${suffix}@${accountIdNoSpaces}.com`;
  } else {
    // 95 - 100 (5%)
    visitorId = `visitor2-${suffix}@${accountIdNoSpaces}.com`;
  }

  return {
    visitor: { id: visitorId },
    account: {
      id: accountId,
      planLevel: accountInfo.planLevel,
      account_tier: accountInfo.account_tier,
      inTrial: accountInfo.inTrial,
    },
  };
}

// Populate metadata on visitor info object based on visitor id
function populateMetadata(visInfo, appMetadata) {
  visInfo.visitor.role = getHashedIndexFromArray(
    appMetadata.roles,
    visInfo.visitor.id
  );
  visInfo.visitor.team = getHashedIndexFromArray(
    appMetadata.teams,
    visInfo.visitor.id
  );
  visInfo.visitor.title = `${getHashedIndexFromArray(
    appMetadata.titlePrefixes,
    visInfo.visitor.id
  )}${getHashedIndexFromArray(
    appMetadata.titles[visInfo.visitor.team],
    visInfo.visitor.id
  )}`;
  visInfo.visitor.region = getHashedIndexFromArray(
    appMetadata.regions,
    visInfo.visitor.id
  );
  visInfo.visitor.office = getHashedIndexFromArray(
    appMetadata.offices[visInfo.visitor.region],
    visInfo.visitor.id
  );
  visInfo.visitor.system = getHashedIndexFromArray(systems, visInfo.visitor.id);

  return visInfo;
}

// Overwrite metadata with URL params
function overwriteMetadata(visInfo, params, appMetadata) {
  // Cleanup if the url parameters aren't valid - prevents bad data
  if (params.accountBasedVisitor === 'true') {
    // Visitor + Account
    // If visitor ID based on account, overwrite account ID + overwrite visitor ID with visitor@account.com
    visInfo.account.id = params.account || visInfo.account.id;
    visInfo.visitor.id = `${
      visInfo.visitor.id.includes('@')
        ? visInfo.visitor.id.slice(0, visInfo.visitor.id.indexOf('@'))
        : visInfo.visitor.id
    }@${visInfo.account.id.replace(/\s/g, '')}.com`;
  }

  // Only overwrite if visitor was specified to avoid changing metadata on established visitors
  if (params.visitor) {
    // Account
    // If visitor ID not based on account, just overwrite the account
    if (params.accountBasedVisitor !== 'true') {
      visInfo.account.id = params.account || visInfo.account.id;
    }

    // Role
    visInfo.visitor.role =
      params.role && appMetadata.roles.includes(params.role)
        ? params.role
        : visInfo.visitor.role;

    // Team + Title
    // If only team specified, overwrite team and try to get corresponding title (else blank)
    if (
      params.team &&
      appMetadata.teams.includes(params.team) &&
      !params.title
    ) {
      visInfo.visitor.team = params.team;

      if (titles[visInfo.visitor.team]) {
        visInfo.visitor.title = `${getHashedIndexFromArray(
          appMetadata.titlePrefixes,
          visInfo.visitor.id
        )}${getHashedIndexFromArray(
          appMetadata.titles[visInfo.visitor.team],
          visInfo.visitor.id
        )}`;
      } else {
        visInfo.visitor.title = '';
      }
    }
    // Else if only title assigned, overwrite title and try to get corresponding team (else blank)
    else if (!params.team && params.title) {
      visInfo.visitor.title = params.title;

      let matchingTeam = '';
      for (let team in titles) {
        if (appMetadata.titles[team].includes(visInfo.visitor.title)) {
          matchingTeam = team;
          break;
        }
      }
      visInfo.visitor.team = matchingTeam;
    }
    // Else if both assigned, overwrite both
    else if (
      params.team &&
      appMetadata.teams.includes(params.team) &&
      params.title
    ) {
      visInfo.visitor.team = params.team;
      visInfo.visitor.title = params.title;
    }

    // Region + Office
    // If only region specified, overwrite region and try to get corresponding office (else blank)
    if (params.region && !params.office) {
      visInfo.visitor.region = params.region;

      if (appMetadata.offices[visInfo.visitor.region]) {
        visInfo.visitor.office = getHashedIndexFromArray(
          appMetadata.offices[visInfo.visitor.region],
          visInfo.visitor.id
        );
      } else {
        visInfo.visitor.office = '';
      }
    }
    // Else if only office assigned, overwrite office and try to get corresponding region (else blank)
    else if (!params.region && params.office) {
      visInfo.visitor.office = params.office;

      let matchingRegion = '';
      for (let region in offices) {
        if (offices[region].includes(visInfo.visitor.office)) {
          matchingRegion = region;
          break;
        }
      }
      visInfo.visitor.region = matchingRegion;
    }
    // Else if both assigned, overwrite both
    else if (params.region && params.office) {
      visInfo.visitor.region = params.region;
      visInfo.visitor.office = params.office;
    }

    // System
    visInfo.visitor.system = params.system || visInfo.visitor.system;
  }

  return visInfo;
}

// Returns a random int between min (inclusive) and max (exclusive)
function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Returns date numberOfDays ago as string in format MMDDYYYY
function calcPrevDate(numberOfDays) {
  const todaysDate = new Date();

  const prevDate = new Date(
    todaysDate.getFullYear(),
    todaysDate.getMonth(),
    todaysDate.getDate() - numberOfDays
  );
  const prevMonth = prevDate.getMonth() + 1;
  const prevDay = prevDate.getDate();
  const prevYear = prevDate.getFullYear() - 2000;

  return `${prevMonth < 10 ? '0' : ''}${prevMonth}${
    prevDay < 10 ? '0' : ''
  }${prevDay}${prevYear}`;
}

// Returns numeric hash for given string
function hashCode(str) {
  let hash = 0,
    i,
    chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

// Returns entry in array at index created by hashing given string
function getHashedIndexFromArray(array, str) {
  return array[Math.abs(hashCode(str)) % array.length];
}
