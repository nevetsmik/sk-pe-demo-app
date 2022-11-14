import hexToRGBA from '../hexToRGBA';

export default {
  styles: {
    display: 'flex',
  },
  opts: {},
  id: '',
  classes: '',
  background: {
    styles: {
      backgroundImage: 'url("./common/images/header-bg.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '105% 300px',
      backgroundColor: '#ebecee',
      filter: 'hue-rotate(30deg);',
    },
    opts: {},
    id: '',
    classes: '',
  },
  header: {
    styles: {},
    opts: {},
    id: '',
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
          id: '',
          classes: '',
          componentName: 'NavTitle',
          alignment: 'left',
          name: 'Investments',
        },
        {
          styles: {},
          opts: {},
          id: '',
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
          classes: '',
          componentName: 'NavAvatar',
          alignment: 'right',
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
            id: '',
            classes: '',
            componentName: 'NavSearch',
            alignment: 'left',
          },
          {
            // Pale blue
            // styles: {
            //   backgroundColor: 'rgb(144, 202, 249)',
            // },
            // Opaque
            // styles: {
            //   backgroundColor: hexToRGBA('#ffffff', 0.15),
            //   '&:hover': {
            //     backgroundColor: hexToRGBA('#ffffff', 0.25),
            //   },
            // },
            // Green
            styles: {
              backgroundColor: hexToRGBA('#50CD89', 1.0),
              '&:hover': {
                backgroundColor: hexToRGBA('#50CD89', 1.0),
              },
            },
            // Blue
            // styles: {
            //   backgroundColor: hexToRGBA('#009EF7', 1.0),
            //   '&:hover': {
            //     backgroundColor: hexToRGBA('#26adf8', 1.0),
            //   },
            // },
            // Purple
            // styles: {
            //   backgroundColor: hexToRGBA('#7239EA', 1.0),
            //   '&:hover': {
            //     backgroundColor: hexToRGBA('#7239EA', 1.0),
            //   },
            // },
            // Red
            // styles: {
            //   backgroundColor: hexToRGBA('#F1416C', 1.0),
            //   '&:hover': {
            //     backgroundColor: hexToRGBA('#F1416C', 1.0),
            //   },
            // },
            // Yellow
            // styles: {
            //   backgroundColor: hexToRGBA('#FFC700', 1.0),
            //   '&:hover': {
            //     backgroundColor: hexToRGBA('#FFC700', 1.0),
            //   },
            // },
            opts: {
              variant: 'contained',
            },
            id: 'add-new',
            classes: '',
            componentName: 'Button',
            alignment: 'right',
            type: 'Menu',
            name: 'Add New',
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
                                name: 'Forecast',
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

                                        label: 'Forecast in $',
                                        data: [
                                          45000, 98000, 147000, 265000, 467000,
                                          487000, 603000, 1020000, 1150000,
                                          1230000, 1640000, 2460000,
                                        ],
                                        backgroundColor: hexToRGBA(
                                          '#0d88e6',
                                          0.5
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
                                    },
                                  },
                                },
                                id: '',
                                classes: '',
                                type: 'Chart',
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
                                name: 'Quota Attainment',
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
                                          '#5ad45a',
                                          0.5
                                        ),
                                        borderColor: hexToRGBA('#5ad45a', 0.9),
                                        hoverBackgroundColor: hexToRGBA(
                                          '#5ad45a',
                                          0.9
                                        ),
                                        hoverBorderColor: hexToRGBA(
                                          '#5ad45a',
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
                                          '#ebdc78',
                                          0.5
                                        ),
                                        borderColor: hexToRGBA('#ebdc78', 0.9),
                                        hoverBackgroundColor: hexToRGBA(
                                          '#ebdc78',
                                          0.9
                                        ),
                                        hoverBorderColor: hexToRGBA(
                                          '#ebdc78',
                                          1
                                        ),
                                      },
                                    ],
                                  },
                                  opts: {
                                    maintainAspectRatio: false,
                                    scales: {
                                      x: {
                                        stacked: true,
                                      },
                                      y: {
                                        stacked: true,
                                      },
                                    },
                                  },
                                },
                                id: '',
                                classes: '',
                                type: 'Chart',
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
                                name: 'Pipeline',
                              },
                              content: {
                                styles: {},
                                opts: {
                                  type: 'Doughnut',
                                  data: {
                                    labels: [
                                      'Qual',
                                      'Sol Pres.',
                                      'Sol Acc.',
                                      'Proposal',
                                      'Pending',
                                    ],
                                    datasets: [
                                      {
                                        data: [300, 250, 200, 150, 100],
                                        backgroundColor: [
                                          hexToRGBA('#b30000', 0.5),
                                          hexToRGBA('#4421af', 0.5),
                                          hexToRGBA('#0d88e6', 0.5),
                                          hexToRGBA('#5ad45a', 0.5),
                                          hexToRGBA('#ebdc78', 0.5),
                                        ],
                                        borderColor: [
                                          hexToRGBA('#b30000', 1),
                                          hexToRGBA('#4421af', 1),
                                          hexToRGBA('#0d88e6', 1),
                                          hexToRGBA('#5ad45a', 1),
                                          hexToRGBA('#ebdc78', 1),
                                        ],
                                        hoverBackgroundColor: [
                                          hexToRGBA('#b30000', 0.7),
                                          hexToRGBA('#4421af', 0.7),
                                          hexToRGBA('#0d88e6', 0.7),
                                          hexToRGBA('#5ad45a', 0.7),
                                          hexToRGBA('#ebdc78', 0.7),
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
                        name: 'Open Opportunities',
                      },
                      content: {
                        styles: {},
                        opts: {
                          dataUrl: '/crm/tableData/opportunities.json',
                          columns: [
                            {
                              field: 'name',
                              headerName: 'Name',
                              flex: 1,
                            },
                            {
                              field: 'account',
                              headerName: 'Account',
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
                          dataUrl: '/crm/tableData/accounts.json',
                          columns: [
                            {
                              field: 'name',
                              headerName: 'Name',
                              flex: 1,
                            },
                            {
                              field: 'rep',
                              headerName: 'Rep',
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
                            {
                              field: 'address',
                              headerName: 'Address',
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
        name: 'Contacts',
        route: '/contacts',
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
                        name: 'Contacts',
                      },
                      content: {
                        styles: {},
                        opts: {
                          dataUrl: '/crm/tableData/contacts.json',
                          columns: [
                            {
                              field: 'name',
                              headerName: 'Name',
                              flex: 1,
                            },
                            {
                              field: 'account',
                              headerName: 'Account',
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
                              field: 'title',
                              headerName: 'Title',
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
        route: '/opportunities',
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
                          dataUrl: '/crm/tableData/opportunities.json',
                          columns: [
                            {
                              field: 'name',
                              headerName: 'Name',
                              flex: 1,
                            },
                            {
                              field: 'account',
                              headerName: 'Account',
                              flex: 1,
                            },
                            {
                              field: 'contact',
                              headerName: 'Contact',
                              flex: 1,
                            },
                            {
                              field: 'rep',
                              headerName: 'Rep',
                              flex: 1,
                            },
                            {
                              field: 'arr',
                              headerName: 'ARR',
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
        name: 'Mobile',
        route: '/mobile',
        contents: [],
      },
    ],
  },
  // modals: [
  //   {
  //     styles: {},
  //     opts: {},
  //     id: '',
  //     classes: '',
  //     contents: [
  //       {
  //         styles: {},
  //         opts: {},
  //         id: '',
  //         classes: '',
  //         componentName: 'FormGroup',
  //         contents: [
  //           {
  //             styles: {},
  //             opts: {},
  //             id: '',
  //             classes: '',
  //             componentName: 'FormSelect',
  //             label: {
  //               styles: {},
  //               opts: {},
  //               id: '',
  //               classes: '',
  //             },
  //             formItem: {
  //               styles: {},
  //               opts: {},
  //               id: '',
  //               classes: '',
  //             },
  //           },
  //           {
  //             styles: {},
  //             opts: {},
  //             id: '',
  //             classes: '',
  //             componentName: 'FormInput',
  //             label: {
  //               styles: {},
  //               opts: {},
  //               id: '',
  //               classes: '',
  //             },
  //             formItem: {
  //               styles: {},
  //               opts: {},
  //               id: '',
  //               classes: '',
  //             },
  //           },
  //           {
  //             styles: {},
  //             opts: {},
  //             id: '',
  //             classes: '',
  //             componentName: 'FormInput',
  //             label: {
  //               styles: {},
  //               opts: {},
  //               id: '',
  //               classes: '',
  //             },
  //             formItem: {
  //               styles: {},
  //               opts: {},
  //               id: '',
  //               classes: '',
  //             },
  //           },
  //           {
  //             styles: {},
  //             opts: {},
  //             id: '',
  //             classes: '',
  //             componentName: 'FormInput',
  //             label: {
  //               styles: {},
  //               opts: {},
  //               id: '',
  //               classes: '',
  //             },
  //             formItem: {
  //               styles: {},
  //               opts: {},
  //               id: '',
  //               classes: '',
  //             },
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ],
  footer: {
    styles: {},
    opts: {},
    id: '',
    classes: '',
  },
};