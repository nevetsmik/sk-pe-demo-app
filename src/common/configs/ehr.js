import React from 'react';
import hexToRGBA from '../hexToRGBA';
import { Link } from 'react-router-dom';

const updateAddNewLabels = (event) => {
  // Dynamically change text field labels based on type
  let labels = [
    { providers: 'Name', physicians: 'Name', patients: 'Name' },
    {
      providers: 'Rep',
      physicians: 'Email',
      patients: 'Physician',
    },
    {
      providers: 'Deductible',
      physicians: 'Phone #',
      patients: 'Reason for Visit',
    },
  ];

  let selectedValue =
    event?.target?.value ||
    document.getElementById('create-select-type').nextElementSibling.value;

  labels.forEach((d, i) => {
    // Label text
    document.getElementById(`create-text-field-${i}-label`).innerText =
      labels[i][selectedValue];
    // Child span that sets width of text when focused
    document.getElementById(
      `create-text-field-${i}`
    ).nextElementSibling.children[0].children[0].innerText =
      labels[i][selectedValue];
    // Input name attribute
    document.getElementById(`create-text-field-${i}`).name =
      labels[i][selectedValue];
  });
};

export default {
  styles: {
    display: 'flex',
  },
  opts: {},
  id: '',
  classes: '',
  favicon: '/ehr/logos/main.ico',
  pendoConfig: {
    name: 'ehr',
    apiKey: '1e7a2098-5550-4136-7db7-37fa8541cf1b',
    additionalApiKeys: [],
    snippetCallback: function (config, urlParams) {
      if (!urlParams.get('apiKey')) {
        // // Zendesk widget script
        // const script = document.createElement('script');
        // script.id = 'ze-snippet';
        // script.src =
        //   'https://static.zdassets.com/ekr/snippet.js?key=95aa7acb-d169-4ca7-bff8-dcb94bd4b1f1';
        // document.head.appendChild(script);
      }
    },
    visitor: {},
    location: {
      transforms: [
        {
          attr: 'search',
          action: 'ExcludeKeys',
          data: [
            'obj',
            'disablePendo',
            'apiKey',
            'visitor',
            'account',
            'accountBasedVisitor',
            'role',
            'team',
            'title',
            'region',
            'office',
            'system',
          ],
        },
      ],
    },
  },
  background: {
    styles: {
      backgroundImage: 'url("/common/images/header-bg.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '105% 300px',
    },
    opts: {},
    id: '',
    classes: '',
  },
  header: {
    styles: {},
    opts: {},
    id: 'header',
    classes: '',
    navBar: {
      styles: {},
      opts: {},
      id: '',
      classes: '',
      contents: [
        {
          styles: {},
          opts: {},
          id: 'ehr-title',
          classes: '',
          componentName: 'NavTitle',
          alignment: 'left',
          name: 'EHR',
        },
        {
          styles: {},
          opts: {},
          id: 'help-button',
          classes: '',
          componentName: 'Button',
          alignment: 'right',
          type: 'Link',
          icon: 'ContactSupport',
          tooltipText: 'Go to Help Center',
          href: 'https://support.pendo.io/hc/en-us',
          target: '_blank',
        },
        {
          styles: {},
          opts: {},
          id: '',
          classes: 'profile-button',
          componentName: 'NavAvatar',
          alignment: 'right',
        },
      ],
      navItems: [
        {
          name: 'Overview',
          type: 'route',
          path: '/',
        },
        {
          name: 'Providers',
          type: 'route',
          path: '/providers',
        },
        {
          name: 'Physicians',
          type: 'route',
          path: '/physicians',
        },
        {
          name: 'Patients',
          type: 'route',
          path: '/patients',
        },
      ],
    },
    appBars: [
      {
        styles: {},
        opts: {},
        id: '',
        classes: '',
        contents: [
          {
            styles: {},
            opts: {},
            id: 'search-bar',
            classes: '',
            componentName: 'NavSearch',
            alignment: 'left',
          },
          {
            styles: {
              backgroundColor: '#1DA259',
              '&:hover': {
                backgroundColor: '#1a9150',
              },
            },
            opts: {
              variant: 'contained',
            },
            id: 'create-button',
            classes: '',
            componentName: 'Button',
            alignment: 'right',
            type: 'Modal',
            name: 'Create Record',
            openStartCallback: () => {
              // Set dynamic labels for add new form before it is rendered
              updateAddNewLabels();

              // Add '/new' to url using pendo location api when add new form open
              let baseUrl = pendo.location.getHref();
              baseUrl = baseUrl.split('?');
              baseUrl[1] = baseUrl[1] ? baseUrl[1] : '';
              pendo.location.setUrl(
                baseUrl[0].slice(-1) === '/'
                  ? `${baseUrl[0]}new?${baseUrl[1]}`
                  : `${baseUrl[0]}/new?${baseUrl[1]}`
              );
            },
            header: {
              styles: {},
              opts: {},
              id: '',
              classes: '',
              name: 'Create Record',
            },
            content: {
              styles: {},
              opts: {},
              id: '',
              classes: '',
              componentName: 'Form',
              contents: [
                {
                  styles: {},
                  opts: {},
                  id: 'create-select-type',
                  classes: '',
                  componentName: 'Select',
                  label: 'Type',
                  options: [
                    {
                      name: 'Provider',
                      value: 'providers',
                    },
                    {
                      name: 'Physician',
                      value: 'physicians',
                    },
                    {
                      name: 'Patient',
                      value: 'patients',
                    },
                  ],
                  default: () => {
                    // Dynamically assign default based on path
                    return window.location.pathname.split('/')[1] || 'patients';
                  },
                  changeEndCallback: updateAddNewLabels, // Update dynamic add new form labels on select change
                },
                {
                  styles: {},
                  opts: {},
                  id: 'create-text-field-0',
                  classes: '',
                  componentName: 'TextField',
                  label: 'Default',
                },
                {
                  styles: {},
                  opts: {},
                  id: 'create-text-field-1',
                  classes: '',
                  componentName: 'TextField',
                  label: 'Default',
                },
                {
                  styles: {},
                  opts: {},
                  id: 'create-text-field-2',
                  classes: '',
                  componentName: 'TextField',
                  label: 'Default',
                },
              ],
              submitCallback: function (event, navigate) {
                // Get details from DOM and use to navigate to new details page
                let url = `/${
                  document.getElementById('create-select-type')
                    .nextElementSibling.value
                }/new/details?obj={`;

                // Store form fields as query params
                for (let i = 0; i < 3; i++) {
                  let el = document.getElementById(`create-text-field-${i}`);
                  url += `${i ? ',' : ''}"${encodeURIComponent(
                    el.name
                  )}":"${encodeURIComponent(el.value)}"`;
                }

                navigate(`${url}}`);
              },
            },
          },
        ],
      },
    ],
  },
  content: {
    styles: {},
    opts: {},
    id: '',
    classes: '',
    routes: [
      {
        name: 'Dashboard',
        route: '/',
        contents: [
          {
            styles: {},
            opts: {
              container: true,
            },
            id: '',
            classes: '',
            componentName: 'Grid',
            contents: [
              {
                styles: {},
                opts: {
                  item: true,
                  xs: 12,
                  lg: 8,
                },
                id: '',
                classes: '',
                componentName: 'Grid',
                contents: [
                  {
                    styles: {},
                    opts: {
                      container: true,
                    },
                    id: '',
                    classes: '',
                    componentName: 'Grid',
                    contents: [
                      {
                        styles: {},
                        opts: {
                          item: true,
                          xs: 12,
                        },
                        id: '',
                        classes: '',
                        componentName: 'Grid',
                        contents: [
                          {
                            styles: {},
                            opts: {
                              height: 0.5,
                              header: {
                                styles: {},
                                opts: {},
                                id: '',
                                classes: '',
                                name: 'Patient Visits this Quarter',
                              },
                              content: {
                                styles: {},
                                opts: {
                                  type: 'Line',
                                  data: {
                                    labels: [
                                      'Week 1',
                                      'Week 2',
                                      'Week 3',
                                      'Week 4',
                                      'Week 5',
                                      'Week 6',
                                      'Week 7',
                                      'Week 8',
                                      'Week 9',
                                      'Week 10',
                                      'Week 11',
                                      'Week 12',
                                    ],
                                    datasets: [
                                      {
                                        fill: true,

                                        label: 'Count of Patient Visits',
                                        data: [
                                          10, 8, 5, 15, 10, 11, 8, 9, 7, 19, 13,
                                          11,
                                        ],
                                        backgroundColor: hexToRGBA(
                                          '#0d88e6',
                                          0.7
                                        ),
                                        borderColor: hexToRGBA('#0d88e6', 0.9),
                                        pointBackgroundColor: hexToRGBA(
                                          '#0d88e6',
                                          0.8
                                        ),
                                        pointBorderColor: hexToRGBA(
                                          '#0d88e6',
                                          1
                                        ),
                                      },
                                    ],
                                  },
                                  opts: {
                                    maintainAspectRatio: false,
                                    responsive: true,
                                    plugins: {
                                      legend: {
                                        display: false,
                                      },
                                      tooltip: {},
                                    },
                                    scales: {
                                      y: {
                                        ticks: {},
                                      },
                                    },
                                  },
                                },
                                id: '',
                                classes: '',
                                type: 'Chart',
                              },
                            },
                            id: 'patient-visits-card',
                            classes: '',
                            componentName: 'ContentTile',
                          },
                        ],
                      },
                      {
                        styles: {},
                        opts: { item: true, xs: 12, md: 6 },
                        id: '',
                        classes: '',
                        componentName: 'Grid',
                        contents: [
                          {
                            styles: {},
                            opts: {
                              height: 0.5,
                              header: {
                                styles: {},
                                opts: {},
                                id: '',
                                classes: '',
                                name: 'Billing Amount by Physician',
                              },
                              content: {
                                styles: {},
                                opts: {
                                  type: 'Bar',
                                  data: {
                                    labels: [
                                      '31422',
                                      '54995',
                                      '20293',
                                      '35930',
                                      '25999',
                                      '20293',
                                    ],
                                    datasets: [
                                      {
                                        label: 'Collected',
                                        data: [
                                          30000, 135000, 47000, 25000, 56000,
                                          55000,
                                        ],
                                        backgroundColor: hexToRGBA(
                                          '#1DA259',
                                          0.7
                                        ),
                                        borderColor: hexToRGBA('#1DA259', 0.9),
                                        hoverBackgroundColor: hexToRGBA(
                                          '#1DA259',
                                          0.9
                                        ),
                                        hoverBorderColor: hexToRGBA(
                                          '#1DA259',
                                          1
                                        ),
                                      },
                                      {
                                        label: 'Outstanding',
                                        data: [
                                          20000, 15000, 33000, 40000, 44000,
                                          65000,
                                        ],
                                        backgroundColor: hexToRGBA(
                                          '#ffc700',
                                          0.7
                                        ),
                                        borderColor: hexToRGBA('#ffc700', 0.9),
                                        hoverBackgroundColor: hexToRGBA(
                                          '#ffc700',
                                          0.9
                                        ),
                                        hoverBorderColor: hexToRGBA(
                                          '#ffc700',
                                          1
                                        ),
                                      },
                                    ],
                                  },
                                  opts: {
                                    maintainAspectRatio: false,
                                    plugins: {
                                      legend: {
                                        display: true,
                                        position: 'bottom',
                                      },
                                      tooltip: {
                                        callbacks: {
                                          label: function (context) {
                                            return (
                                              '$' + context.raw / 1000 + 'k'
                                            );
                                          },
                                        },
                                      },
                                    },
                                    scales: {
                                      x: {
                                        stacked: true,
                                      },
                                      y: {
                                        stacked: true,
                                        ticks: {
                                          callback: function (value) {
                                            return '$' + value / 1000 + 'k';
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                                id: '',
                                classes: '',
                                type: 'Chart',
                              },
                            },
                            id: 'billing-amount-card',
                            classes: '',
                            componentName: 'ContentTile',
                          },
                        ],
                      },
                      {
                        styles: {},
                        opts: { item: true, xs: 12, md: 6 },
                        id: '',
                        classes: '',
                        componentName: 'Grid',
                        contents: [
                          {
                            styles: {},
                            opts: {
                              height: 0.5,
                              header: {
                                styles: {},
                                opts: {},
                                id: '',
                                classes: '',
                                name: 'Reason for Visit',
                              },
                              content: {
                                styles: {},
                                opts: {
                                  type: 'Doughnut',
                                  data: {
                                    labels: [
                                      '434 - Physical',
                                      '239 - Prescription',
                                      '109 - Lab',
                                      '304 - Clinical',
                                      '898 - Acute',
                                    ],
                                    datasets: [
                                      {
                                        data: [0.75, 0.1, 0.08, 0.04, 0.03],
                                        backgroundColor: [
                                          hexToRGBA('#f1416c', 0.7),
                                          hexToRGBA('#7239ea', 0.7),
                                          hexToRGBA('#0d88e6', 0.7),
                                          hexToRGBA('#1DA259', 0.7),
                                          hexToRGBA('#ffc700', 0.7),
                                        ],
                                        borderColor: [
                                          hexToRGBA('#f1416c', 1),
                                          hexToRGBA('#7239ea', 1),
                                          hexToRGBA('#0d88e6', 1),
                                          hexToRGBA('#1DA259', 1),
                                          hexToRGBA('#ffc700', 1),
                                        ],
                                        hoverBackgroundColor: [
                                          hexToRGBA('#f1416c', 0.9),
                                          hexToRGBA('#7239ea', 0.9),
                                          hexToRGBA('#0d88e6', 0.9),
                                          hexToRGBA('#1DA259', 0.9),
                                          hexToRGBA('#ffc700', 0.9),
                                        ],
                                        borderWidth: 1,
                                      },
                                    ],
                                  },
                                  opts: {
                                    maintainAspectRatio: false,
                                    plugins: {
                                      legend: {
                                        display: true,
                                        position: 'right',
                                      },
                                    },
                                  },
                                },
                                id: '',
                                classes: '',
                                type: 'Chart',
                              },
                            },
                            id: 'reason-card',
                            classes: '',
                            componentName: 'ContentTile',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                styles: {},
                opts: {
                  item: true,
                  xs: 12,
                  lg: 4,
                },
                id: '',
                classes: '',
                componentName: 'Grid',
                contents: [
                  {
                    styles: {},
                    opts: {
                      height: 1,
                      header: {
                        styles: {},
                        opts: {},
                        id: '',
                        classes: '',
                        name: "Today's Patients",
                      },
                      content: {
                        styles: {},
                        opts: {
                          dataUrl: '/ehr/tableData/patients.json',
                          columns: [
                            {
                              field: 'name',
                              headerName: 'Name',
                              flex: 1,
                              renderCell: (params) => (
                                <a href={`/patients/${params.id}/details`}>
                                  {params.formattedValue}
                                </a>
                              ),
                            },
                            {
                              field: 'physician_code',
                              headerName: 'Physician',
                              flex: 1,
                            },
                          ],
                        },
                        id: '',
                        classes: '',
                        type: 'Table',
                      },
                    },
                    id: 'todays-patients-card',
                    classes: '',
                    componentName: 'ContentTile',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Providers',
        route: '/providers',
        contents: [
          {
            styles: {},
            opts: {
              container: true,
            },
            id: '',
            classes: '',
            componentName: 'Grid',
            contents: [
              {
                styles: {},
                opts: {
                  item: true,
                  xs: 12,
                },
                id: '',
                classes: '',
                componentName: 'Grid',
                contents: [
                  {
                    styles: {},
                    opts: {
                      height: 1,
                      header: {
                        styles: {},
                        opts: {},
                        id: '',
                        classes: '',
                        name: 'Providers',
                      },
                      content: {
                        styles: {},
                        opts: {
                          dataUrl: '/ehr/tableData/providers.json',
                          columns: [
                            {
                              field: 'name',
                              headerName: 'Name',
                              renderCell: (params) => (
                                <Link to={`/providers/${params.id}/details`}>
                                  {params.formattedValue}
                                </Link>
                              ),
                              flex: 1,
                            },
                            {
                              field: 'region',
                              headerName: 'Region',
                              flex: 3,
                            },
                          ],
                        },
                        id: '',
                        classes: '',
                        type: 'Table',
                      },
                    },
                    id: '',
                    classes: '',
                    componentName: 'ContentTile',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Physicians',
        route: '/physicians',
        contents: [
          {
            styles: {},
            opts: {
              container: true,
            },
            id: '',
            classes: '',
            componentName: 'Grid',
            contents: [
              {
                styles: {},
                opts: {
                  item: true,
                  xs: 12,
                },
                id: '',
                classes: '',
                componentName: 'Grid',
                contents: [
                  {
                    styles: {},
                    opts: {
                      height: 1,
                      header: {
                        styles: {},
                        opts: {},
                        id: '',
                        classes: '',
                        name: 'Physicians',
                      },
                      content: {
                        styles: {},
                        opts: {
                          dataUrl: '/ehr/tableData/physicians.json',
                          columns: [
                            {
                              field: 'name',
                              headerName: 'Name',
                              flex: 1,
                              renderCell: (params) => (
                                <Link to={`/physicians/${params.id}/details`}>
                                  {params.formattedValue}
                                </Link>
                              ),
                            },
                            {
                              field: 'title',
                              headerName: 'Title',
                              flex: 1,
                            },
                            {
                              field: 'email',
                              headerName: 'Email',
                              flex: 1,
                            },
                            {
                              field: 'phone',
                              headerName: 'Phone',
                              flex: 1,
                            },
                            {
                              field: 'code',
                              headerName: 'Code',
                              flex: 1,
                            },
                          ],
                        },
                        id: '',
                        classes: '',
                        type: 'Table',
                      },
                    },
                    id: '',
                    classes: '',
                    componentName: 'ContentTile',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Opportunities',
        route: '/patients',
        contents: [
          {
            styles: {},
            opts: {
              container: true,
            },
            id: '',
            classes: '',
            componentName: 'Grid',
            contents: [
              {
                styles: {},
                opts: {
                  item: true,
                  xs: 12,
                },
                id: '',
                classes: '',
                componentName: 'Grid',
                contents: [
                  {
                    styles: {},
                    opts: {
                      height: 1,
                      header: {
                        styles: {},
                        opts: {},
                        id: '',
                        classes: '',
                        name: 'Opportunities',
                      },
                      content: {
                        styles: {},
                        opts: {
                          dataUrl: '/ehr/tableData/patients.json',
                          columns: [
                            {
                              field: 'name',
                              headerName: 'Name',
                              flex: 1,
                              renderCell: (params) => (
                                <Link to={`/patients/${params.id}/details`}>
                                  {params.formattedValue}
                                </Link>
                              ),
                            },
                            {
                              field: 'provider',
                              headerName: 'Provider',
                              flex: 1,
                            },
                            {
                              field: 'physician_code',
                              headerName: 'Physician',
                              flex: 1,
                            },
                            {
                              field: 'phone',
                              headerName: 'Phone',
                              flex: 1,
                            },
                            {
                              field: 'deductible',
                              headerName: 'Deductible',
                              flex: 1,
                            },
                          ],
                        },
                        id: '',
                        classes: '',
                        type: 'Table',
                      },
                    },
                    id: '',
                    classes: '',
                    componentName: 'ContentTile',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Details',
        route: '/:detailType/:detailId/details',
        contents: [
          {
            styles: {},
            opts: {
              container: true,
            },
            id: '',
            classes: '',
            componentName: 'Grid',
            contents: [
              {
                styles: {},
                opts: {
                  item: true,
                  xs: 12,
                  sm: 5,
                  md: 4,
                  lg: 3,
                },
                id: '',
                classes: '',
                componentName: 'Grid',
                contents: [
                  {
                    styles: {},
                    opts: {
                      height: 0.5,
                      header: {
                        styles: {},
                        opts: {},
                        id: '',
                        classes: '',
                        name: 'Quick Information',
                      },
                      content: {
                        styles: {},
                        opts: {
                          schema: {
                            providers: ['name', 'region'],
                            physicians: ['name', 'title', 'code'],
                            patients: ['name', 'physician', 'provider'],
                          },
                          src: 'https://pendo-static-6591622502678528.storage.googleapis.com/aMWfxQOEkuJp4VuCXMEJQUBQIJ8/guide-media-cd1fdd27-4597-4af1-bb5b-e03bf2b75bc9',
                          baseUrl: '/ehr/tableData/',
                        },
                        id: '',
                        classes: '',
                        type: 'QuickInfo',
                      },
                    },
                    id: 'quick-info',
                    classes: '',
                    componentName: 'ContentTile',
                  },
                ],
              },
              {
                styles: {},
                opts: {
                  item: true,
                  xs: 12,
                  sm: 7,
                  md: 8,
                  lg: 9,
                },
                id: '',
                classes: '',
                componentName: 'Grid',
                contents: [
                  {
                    styles: {},
                    opts: {
                      height: 0.5,
                      header: {
                        styles: {},
                        opts: {},
                        id: '',
                        classes: '',
                        name: 'New Entry',
                      },
                      content: {
                        styles: {},
                        opts: {
                          tabs: [
                            'New Note',
                            'Email',
                            'Call',
                            'Log Activity',
                            'Create Task',
                            'Schedule',
                          ],
                        },
                        id: '',
                        classes: '',
                        type: 'TabbedInput',
                      },
                    },
                    id: '',
                    classes: '',
                    componentName: 'ContentTile',
                  },
                ],
              },
              {
                styles: {},
                opts: {
                  item: true,
                  xs: 12,
                },
                id: '',
                classes: '',
                componentName: 'Grid',
                contents: [
                  {
                    styles: {},
                    opts: {
                      height: 0.5,
                      header: {
                        styles: {},
                        opts: {},
                        id: '',
                        classes: '',
                        name: 'History',
                      },
                      content: {
                        styles: {},
                        opts: {
                          entries: [
                            {
                              icon: 'NoteAlt',
                              text: 'Waiting on signed forms from patient.',
                            },
                            // {
                            //   icon: 'Email',
                            //   text: 'Sent follow up email to re-engage.',
                            // },
                            {
                              icon: 'Phone',
                              text: 'Had a phone conversation discussing medical concerns.',
                            },
                            {
                              icon: 'Build',
                              text: 'Resolved issue on billing for patient.',
                            },
                            {
                              icon: 'CheckBox',
                              text: 'Visit completed.',
                            },
                            {
                              icon: 'CalendarToday',
                              text: 'Visit requested November 15, 2020.',
                            },
                          ],
                        },
                        id: '',
                        classes: '',
                        type: 'Timeline',
                      },
                    },
                    id: '',
                    classes: '',
                    componentName: 'ContentTile',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  footer: {
    styles: {},
    opts: {},
    id: 'footer',
    classes: '',
    typography: {
      styles: {},
      opts: {},
      id: '',
      classes: '',
      icon: {
        styles: {
          color: '#0d88e6',
        },
        opts: {},
        id: '',
        classes: 'footer-icon',
      },
    },
  },
};
