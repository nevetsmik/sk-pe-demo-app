import React from 'react';
import hexToRGBA from '../hexToRGBA';
import { Link } from 'react-router-dom';

const updateAddNewLabels = (event) => {
  // Dynamically change text field labels based on type
  let labels = [
    { accounts: 'Name', representatives: 'Name', claims: 'Account' },
    {
      accounts: 'Representative',
      representatives: 'Email',
      claims: 'Representative',
    },
    {
      accounts: 'Territory',
      representatives: 'Phone #',
      claims: 'Amount',
    },
  ];

  let selectedValue =
    event?.target?.value ||
    document.getElementById('add-new-select-type').nextElementSibling.value;

  labels.forEach((d, i) => {
    // Label text
    document.getElementById(`add-new-text-field-${i}-label`).innerText =
      labels[i][selectedValue];
    // Child span that sets width of text when focused
    document.getElementById(
      `add-new-text-field-${i}`
    ).nextElementSibling.children[0].children[0].innerText =
      labels[i][selectedValue];
    // Input name attribute
    document.getElementById(`add-new-text-field-${i}`).name =
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
  favicon: '/insurance/logos/main.ico',
  pendoConfig: {
    name: 'insurance',
    apiKey: 'c533ab73-a019-481d-69fb-8d73adc816bf',
    additionalApiKeys: [],
    snippetCallback: function (config, urlParams) {
      // if (!urlParams.get('apiKey')) {
      //   // Zendesk widget script
      //   const script = document.createElement('script');
      //   script.id = 'ze-snippet';
      //   script.src =
      //     'https://static.zdassets.com/ekr/snippet.js?key=95aa7acb-d169-4ca7-bff8-dcb94bd4b1f1';
      //   document.head.appendChild(script);
      // }
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
            'quotaAttainment',
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
          id: 'insurance-title',
          classes: '',
          componentName: 'NavTitle',
          alignment: 'left',
          name: 'Insurance',
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
          name: 'Accounts',
          type: 'route',
          path: '/accounts',
        },
        {
          name: 'Representatives',
          type: 'route',
          path: '/representatives',
        },
        {
          name: 'Claims',
          type: 'route',
          path: '/claims',
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
            id: 'add-new',
            classes: '',
            componentName: 'Button',
            alignment: 'right',
            type: 'Modal',
            name: 'New +',
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
              name: 'New Record',
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
                  id: 'add-new-select-type',
                  classes: '',
                  componentName: 'Select',
                  label: 'Type',
                  options: [
                    {
                      name: 'Account',
                      value: 'accounts',
                    },
                    {
                      name: 'Representative',
                      value: 'representatives',
                    },
                    {
                      name: 'Claim',
                      value: 'claims',
                    },
                  ],
                  default: () => {
                    // Dynamically assign default based on path
                    return window.location.pathname.split('/')[1] || 'claims';
                  },
                  changeEndCallback: updateAddNewLabels, // Update dynamic add new form labels on select change
                },
                {
                  styles: {},
                  opts: {},
                  id: 'add-new-text-field-0',
                  classes: '',
                  componentName: 'TextField',
                  label: 'Default',
                },
                {
                  styles: {},
                  opts: {},
                  id: 'add-new-text-field-1',
                  classes: '',
                  componentName: 'TextField',
                  label: 'Default',
                },
                {
                  styles: {},
                  opts: {},
                  id: 'add-new-text-field-2',
                  classes: '',
                  componentName: 'TextField',
                  label: 'Default',
                },
              ],
              submitCallback: function (event, navigate) {
                // Get details from DOM and use to navigate to new details page
                let url = `/${
                  document.getElementById('add-new-select-type')
                    .nextElementSibling.value
                }/new/details?obj={`;

                // Store form fields as query params
                for (let i = 0; i < 3; i++) {
                  let el = document.getElementById(`add-new-text-field-${i}`);
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
                                name: 'Total Claim Amount',
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

                                        label: 'Total Claim Amount in $',
                                        data: [
                                          45000, 98000, 147000, 265000, 467000,
                                          487000, 603000, 1020000, 1150000,
                                          1230000, 1640000, 2460000,
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
                                      tooltip: {
                                        callbacks: {
                                          label: function (context) {
                                            return (
                                              '$' + context.raw / 1000000 + 'm'
                                            );
                                          },
                                        },
                                      },
                                    },
                                    scales: {
                                      y: {
                                        ticks: {
                                          callback: function (value) {
                                            return '$' + value / 1000000 + 'm';
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
                            id: 'claim-amount-card',
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
                                name: 'Claim Completion by Representative',
                              },
                              content: {
                                styles: {},
                                opts: {
                                  type: 'Bar',
                                  data: {
                                    labels: [
                                      'Mona',
                                      'Felix',
                                      'Jess',
                                      'Ravi',
                                      'Kam',
                                      'Walter',
                                    ],
                                    datasets: [
                                      {
                                        label: 'Attained',
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
                                        label: 'Remaining',
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
                            id: 'completion-card',
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
                                name: 'Claim Status',
                              },
                              content: {
                                styles: {},
                                opts: {
                                  type: 'Doughnut',
                                  data: {
                                    labels: [
                                      'New',
                                      'Open',
                                      'Pending',
                                      'Closed',
                                    ],
                                    datasets: [
                                      {
                                        data: [300, 250, 200, 150],
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
                                  },
                                },
                                id: '',
                                classes: '',
                                type: 'Chart',
                              },
                            },
                            id: 'status-card',
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
                        name: 'Open Claims',
                      },
                      content: {
                        styles: {},
                        opts: {
                          dataUrl: '/insurance/tableData/claims.json',
                          columns: [
                            {
                              field: 'account',
                              headerName: 'Account',
                              flex: 1,
                              renderCell: (params) => (
                                <a href={`/claims/${params.id}/details`}>
                                  {params.formattedValue}
                                </a>
                              ),
                            },
                            {
                              field: 'amount',
                              headerName: 'Amount',
                              flex: 1,
                            },
                          ],
                        },
                        id: '',
                        classes: '',
                        type: 'Table',
                      },
                    },
                    id: 'open-claims-card',
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
        name: 'Accounts',
        route: '/accounts',
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
                        name: 'Accounts',
                      },
                      content: {
                        styles: {},
                        opts: {
                          dataUrl: '/insurance/tableData/accounts.json',
                          columns: [
                            {
                              field: 'name',
                              headerName: 'Name',
                              renderCell: (params) => (
                                <Link to={`/accounts/${params.id}/details`}>
                                  {params.formattedValue}
                                </Link>
                              ),
                              flex: 1,
                            },
                            {
                              field: 'rep',
                              headerName: 'Representative',
                              flex: 1,
                            },
                            {
                              field: 'territory',
                              headerName: 'Territory',
                              flex: 1,
                            },
                            {
                              field: 'industry',
                              headerName: 'Industry',
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
        name: 'Representatives',
        route: '/representatives',
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
                        name: 'Representatives',
                      },
                      content: {
                        styles: {},
                        opts: {
                          dataUrl: '/insurance/tableData/representatives.json',
                          columns: [
                            {
                              field: 'name',
                              headerName: 'Name',
                              flex: 1,
                              renderCell: (params) => (
                                <Link
                                  to={`/representatives/${params.id}/details`}
                                >
                                  {params.formattedValue}
                                </Link>
                              ),
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
                              field: 'title',
                              headerName: 'Title',
                              flex: 1,
                            },
                            {
                              field: 'region',
                              headerName: 'Region',
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
        name: 'Claims',
        route: '/claims',
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
                        name: 'Claims',
                      },
                      content: {
                        styles: {},
                        opts: {
                          dataUrl: '/insurance/tableData/claims.json',
                          columns: [
                            {
                              field: 'id',
                              headerName: 'Number',
                              flex: 1,
                              renderCell: (params) => (
                                <Link to={`/claims/${params.id}/details`}>
                                  {params.formattedValue}
                                </Link>
                              ),
                            },
                            {
                              field: 'account',
                              headerName: 'Account',
                              flex: 1,
                            },
                            {
                              field: 'rep',
                              headerName: 'Representative',
                              flex: 1,
                            },
                            {
                              field: 'amount',
                              headerName: 'Amount',
                              flex: 1,
                            },
                            {
                              field: 'claim_date',
                              headerName: 'Claim Date',
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
                            accounts: ['name', 'rep', 'territory'],
                            representatives: ['name', 'email', 'phone'],
                            claims: ['account', 'representative', 'amount'],
                          },
                          src: 'https://pendo-static-6591622502678528.storage.googleapis.com/aMWfxQOEkuJp4VuCXMEJQUBQIJ8/guide-media-cd1fdd27-4597-4af1-bb5b-e03bf2b75bc9',
                          baseUrl: '/insurance/tableData/',
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
                        name: 'Activity Tracker',
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
                        name: 'Timeline',
                      },
                      content: {
                        styles: {},
                        opts: {
                          entries: [
                            {
                              icon: 'NoteAlt',
                              text: 'Waiting on signed agreement from client.',
                            },
                            {
                              icon: 'Build',
                              text: 'Resolved issue on quote for client.',
                            },
                            {
                              icon: 'CheckBox',
                              text: 'Quote completed.',
                            },
                            {
                              icon: 'CalendarToday',
                              text: 'Quote requested November 15, 2020.',
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
