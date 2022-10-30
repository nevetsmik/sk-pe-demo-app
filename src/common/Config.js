// Return config based on current URL
export function determineConfig() {
  // If on localhost, use url param
  let app;
  if (window.location.hostname === 'localhost') {
    app = new URLSearchParams(window.location.search).get('app');
  }
  // Else, use subdomain
  else {
    app = window.location.hostname.split('.')[0];
  }

  // If app not defined, return crm config
  if (!configs[app]) {
    return configs['crm'];
  }
  // Else, return config for specified app
  else {
    return configs[app];
  }
}

const hexToRGBA = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return alpha ? `rgba(${r}, ${g}, ${b}, ${alpha})` : `rgba(${r}, ${g}, ${b})`;
};

let configs = {
  crm: {
    styles: {
      appBar: {
        backgroundColor: 'rgba(18, 130, 151, 1)',
      },
      content: {
        backgroundColor: 'rgba(247, 248, 250, 1)',
        padding: '16px',
        tiles: {
          borderRadius: '10px',
        },
      },
      drawer: {},
    },
    drawer: {
      width: 240,
      logo: {
        path: './crm/logos/main4.svg',
        name: 'CRM',
      },
      linkGroups: [
        {
          alignment: 'top',
          links: [
            {
              displayName: 'Dashboard',
              icon: 'Home',
              route: '/',
              contents: [
                {
                  componentName: 'Grid',
                  opts: {
                    container: true,
                  },
                  contents: [
                    {
                      componentName: 'Grid',
                      opts: {
                        item: true,
                        xs: 12,
                        md: 12,
                        lg: 8,
                      },
                      contents: [
                        {
                          componentName: 'Grid',
                          opts: {
                            container: true,
                          },
                          contents: [
                            {
                              componentName: 'Grid',
                              opts: {
                                item: true,
                                xs: 12,
                              },
                              contents: [
                                {
                                  componentName: 'ContentTile',
                                  key: '0',
                                  opts: {
                                    header: 'Forecast',
                                    type: 'Chart',
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
                                              45000, 98000, 147000, 265000,
                                              467000, 487000, 603000, 1020000,
                                              1150000, 1230000, 1640000,
                                              2460000,
                                            ],
                                            backgroundColor: hexToRGBA(
                                              '#0d88e6',
                                              0.5
                                            ),
                                            borderColor: hexToRGBA(
                                              '#0d88e6',
                                              0.9
                                            ),
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
                                    sx: {
                                      height: {
                                        xs: `calc((100vh - 64px - 2*16px - 4*8px) / 2)`,
                                      },
                                    },
                                  },
                                  contents: [],
                                },
                              ],
                            },
                            {
                              componentName: 'Grid',
                              opts: { item: true, xs: 12, md: 6 },
                              contents: [
                                {
                                  componentName: 'ContentTile',
                                  key: '1',
                                  opts: {
                                    header: 'Quota Attainment',
                                    type: 'Chart',
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
                                              30000, 135000, 47000, 25000,
                                              56000, 55000,
                                            ],
                                            backgroundColor: hexToRGBA(
                                              '#5ad45a',
                                              0.5
                                            ),
                                            borderColor: hexToRGBA(
                                              '#5ad45a',
                                              0.9
                                            ),
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
                                            borderColor: hexToRGBA(
                                              '#ebdc78',
                                              0.9
                                            ),
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
                                    sx: {
                                      height: {
                                        xs: `calc((100vh - 64px - 2*16px - 4*8px) / 2)`,
                                      },
                                    },
                                  },
                                  contents: [],
                                },
                              ],
                            },
                            {
                              componentName: 'Grid',
                              opts: { item: true, xs: 12, md: 6 },
                              contents: [
                                {
                                  componentName: 'ContentTile',
                                  key: '2',
                                  opts: {
                                    header: 'Pipeline',
                                    type: 'Chart',
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
                                    sx: {
                                      height: {
                                        xs: `calc((100vh - 64px - 2*16px - 4*8px) / 2)`,
                                      },
                                    },
                                  },
                                  contents: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      componentName: 'Grid',
                      opts: {
                        item: true,
                        xs: 12,
                        md: 12,
                        lg: 4,
                      },
                      contents: [
                        {
                          componentName: 'ContentTile',
                          key: '3',
                          opts: {
                            header: 'Open Opportunities',
                            type: 'Table',
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
                            sx: {
                              height: {
                                xs: `calc(100vh - 64px - 2*16px - 2*8px)`,
                              },
                            },
                          },
                          contents: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              displayName: 'Accounts',
              icon: 'PeopleAlt',
              route: '/accounts',
              contents: [
                {
                  componentName: 'Grid',
                  opts: {
                    item: true,
                    xs: 12,
                  },
                  contents: [
                    {
                      componentName: 'ContentTile',
                      key: '4',
                      opts: {
                        header: 'Accounts',
                        type: 'Table',
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
                        sx: {
                          height: {
                            xs: `calc(100vh - 64px - 2*16px - 2*8px)`,
                          },
                        },
                      },
                      contents: [],
                    },
                  ],
                },
              ],
            },
            {
              displayName: 'Contacts',
              icon: 'AssignmentInd',
              route: '/contacts',
              contents: [
                {
                  componentName: 'Grid',
                  opts: {
                    container: true,
                  },
                  contents: [
                    {
                      componentName: 'Grid',
                      opts: {
                        item: true,
                        xs: 12,
                      },
                      contents: [
                        {
                          componentName: 'ContentTile',
                          key: '5',
                          opts: {
                            header: 'Contacts',
                            type: 'Table',
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
                            sx: {
                              height: {
                                xs: `calc(100vh - 64px - 2*16px - 2*8px)`,
                              },
                            },
                          },
                          contents: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              displayName: 'Opportunities',
              icon: 'RequestPage',
              route: '/opportunities',
              contents: [
                {
                  componentName: 'Grid',
                  opts: {
                    container: true,
                  },
                  contents: [
                    {
                      componentName: 'Grid',
                      opts: {
                        item: true,
                        xs: 12,
                      },
                      contents: [
                        {
                          componentName: 'ContentTile',
                          key: '6',
                          opts: {
                            header: 'Opportunities',
                            type: 'Table',
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
                            sx: {
                              height: {
                                xs: `calc(100vh - 64px - 2*16px - 2*8px)`,
                              },
                            },
                          },
                          contents: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          alignment: 'bottom',
          links: [
            {
              displayName: 'Mobile',
              icon: 'PhoneIphone',
              route: '/mobile',
              contents: [],
            },
          ],
        },
      ],
    },
  },
  investments: {
    drawer: {
      width: 265,
      logo: {
        path: './crm/logos/main.svg',
        name: 'Investments',
      },
      linkGroups: [
        {
          alignment: 'top',
          links: [
            {
              displayName: 'Dashboard',
              icon: 'Home',
              route: '/',
              contents: [
                {
                  componentName: 'Grid',
                  opts: {
                    item: true,
                    xs: 12,
                    md: 12,
                    lg: 8,
                  },
                  contents: [
                    {
                      componentName: 'Grid',
                      opts: {
                        container: true,
                      },
                      contents: [
                        {
                          componentName: 'Grid',
                          opts: {
                            item: true,
                            xs: 12,
                          },
                          contents: [
                            {
                              componentName: 'ContentTile',
                              key: '0',
                              opts: {
                                header: 'Forecast',
                                type: 'Chart',
                                opts: {
                                  type: 'Line',
                                  data: {
                                    labels: [
                                      'January',
                                      'February',
                                      'March',
                                      'April',
                                      'May',
                                      'June',
                                      'July',
                                    ],
                                    datasets: [
                                      {
                                        fill: true,
                                        label: 'Dataset 2',
                                        data: [0, 100, 200, 300, 400, 500, 600],
                                        borderColor: 'rgb(53, 162, 235)',
                                        backgroundColor:
                                          'rgba(53, 162, 235, 0.5)',
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
                                sx: {
                                  height: {
                                    xs: `calc((100vh - 64px - 2*16px - 4*8px) / 2)`,
                                  },
                                },
                              },
                              contents: [],
                            },
                          ],
                        },
                        {
                          componentName: 'Grid',
                          opts: { item: true, xs: 12, md: 6 },
                          contents: [
                            {
                              componentName: 'ContentTile',
                              key: '1',
                              opts: {
                                header: 'Quota Attainment',
                                type: 'Chart',
                                opts: {
                                  type: 'Bar',
                                  data: {
                                    labels: [
                                      'Red',
                                      'Blue',
                                      'Yellow',
                                      'Green',
                                      'Purple',
                                      'Orange',
                                    ],
                                    datasets: [
                                      {
                                        label: 'Attainment',
                                        data: [0, 100, 200, 300, 400, 500, 600],
                                        borderColor: 'rgb(53, 162, 235)',
                                        backgroundColor:
                                          'rgba(53, 162, 235, 0.5)',
                                      },
                                      {
                                        label: 'Remaining',
                                        data: [
                                          1000, 1100, 1200, 1300, 1400, 1500,
                                          1600,
                                        ],
                                        borderColor: 'rgb(53, 162, 235)',
                                        backgroundColor:
                                          'rgba(53, 162, 235, 0.5)',
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
                                sx: {
                                  height: {
                                    xs: `calc((100vh - 64px - 2*16px - 4*8px) / 2)`,
                                  },
                                },
                              },
                              contents: [],
                            },
                          ],
                        },
                        {
                          componentName: 'Grid',
                          opts: { item: true, xs: 12, md: 6 },
                          contents: [
                            {
                              componentName: 'ContentTile',
                              key: '2',
                              opts: {
                                header: 'Pipeline',
                                type: 'Chart',
                                opts: {
                                  type: 'Doughnut',
                                  data: {
                                    labels: [
                                      'Red',
                                      'Blue',
                                      'Yellow',
                                      'Green',
                                      'Purple',
                                      'Orange',
                                    ],
                                    datasets: [
                                      {
                                        label: '# of Votes',
                                        data: [12, 19, 3, 5, 2, 3],
                                        backgroundColor: [
                                          'rgba(255, 99, 132, 0.2)',
                                          'rgba(54, 162, 235, 0.2)',
                                          'rgba(255, 206, 86, 0.2)',
                                          'rgba(75, 192, 192, 0.2)',
                                          'rgba(153, 102, 255, 0.2)',
                                          'rgba(255, 159, 64, 0.2)',
                                        ],
                                        borderColor: [
                                          'rgba(255, 99, 132, 1)',
                                          'rgba(54, 162, 235, 1)',
                                          'rgba(255, 206, 86, 1)',
                                          'rgba(75, 192, 192, 1)',
                                          'rgba(153, 102, 255, 1)',
                                          'rgba(255, 159, 64, 1)',
                                        ],
                                        borderWidth: 1,
                                      },
                                    ],
                                  },
                                  opts: {
                                    maintainAspectRatio: false,
                                  },
                                },
                                sx: {
                                  height: {
                                    xs: `calc((100vh - 64px - 2*16px - 4*8px) / 2)`,
                                  },
                                },
                              },
                              contents: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  componentName: 'Grid',
                  opts: {
                    item: true,
                    xs: 12,
                    md: 12,
                    lg: 4,
                  },
                  contents: [
                    {
                      componentName: 'ContentTile',
                      key: '3',
                      opts: {
                        header: 'Open Opportunities',
                        type: 'Table',
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
                        sx: {
                          height: {
                            xs: `calc(100vh - 64px - 2*16px - 2*8px)`,
                          },
                        },
                      },
                      contents: [],
                    },
                  ],
                },
              ],
            },
            {
              displayName: 'Accounts',
              icon: 'PeopleAlt',
              route: '/accounts',
              contents: [
                {
                  componentName: 'Grid',
                  opts: {
                    container: true,
                  },
                  contents: [
                    {
                      componentName: 'Grid',
                      opts: {
                        item: true,
                        xs: 12,
                      },
                      contents: [
                        {
                          componentName: 'ContentTile',
                          key: '0',
                          opts: {
                            header: 'Forecast',
                            type: 'Chart',
                            opts: {
                              type: 'Line',
                              data: {
                                labels: [
                                  'January',
                                  'February',
                                  'March',
                                  'April',
                                  'May',
                                  'June',
                                  'July',
                                ],
                                datasets: [
                                  {
                                    fill: true,
                                    label: 'Dataset 2',
                                    data: [0, 100, 200, 300, 400, 500, 600],
                                    borderColor: 'rgb(53, 162, 235)',
                                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
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
                            sx: {
                              height: {
                                xs: `calc(100vh - 64px - 2*16px - 2*8px)`,
                              },
                            },
                          },
                          contents: [],
                        },
                      ],
                    },
                  ],
                },
                ,
              ],
            },
            {
              displayName: 'Brokers',
              icon: 'AssignmentInd',
              route: '/contacts',
              contents: [],
            },
            {
              displayName: 'Funds',
              icon: 'RequestPage',
              route: '/opportunities',
              contents: [],
            },
          ],
        },
      ],
    },
  },
};
