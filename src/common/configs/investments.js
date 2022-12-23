import React from 'react';
import hexToRGBA from '../hexToRGBA';

export default {
  styles: {
    display: 'flex',
    lineHeight: '2',
  },
  opts: {},
  id: '',
  classes: '',
  favicon: '/investments/logos/main.ico',
  pendoConfig: {
    apiKey: '7057a1b8-0531-49a8-62f3-f4816139ca04',
    additionalApiKeys: [],
  },
  background: {
    styles: {
      backgroundImage: 'url("/common/images/header-bg.png")',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '105% 300px',
      filter:
        'brightness(0) saturate(100%) invert(12%) sepia(14%) saturate(7264%) hue-rotate(219deg) brightness(98%) contrast(133%)',
    },
    opts: {},
    id: '',
    classes: '',
  },
  header: {
    styles: { paddingBottom: '20px' },
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
          id: 'investments-title',
          classes: '',
          componentName: 'NavTitle',
          alignment: 'left',
          name: 'Investments',
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
          name: 'Research',
          type: 'route',
          path: '/',
        },
        // {
        //   name: 'Debt Portal',
        //   type: 'route',
        //   path: '/debt',
        // },
        // {
        //   name: 'Equity Portal',
        //   type: 'route',
        //   path: '/equity',
        // },
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
            id: 'subscribe-form-launch',
            classes: '',
            componentName: 'Button',
            alignment: 'right',
            type: 'Modal',
            name: 'Subscribe to Research',
            openStartCallback: () => {
              // Set dynamic labels for add new form before it is rendered
              // updateAddNewLabels();

              // Add '/new' to url using pendo location api when add new form open
              let baseUrl = pendo.location.getHref();
              pendo.location.setUrl(
                baseUrl.slice(-1) === '/'
                  ? `${baseUrl}subscribe`
                  : `${baseUrl}/subscribe`
              );
            },
            closeEndCallback: () => {
              // Return to using browser url on form closed
              pendo.location.useBrowserUrl();
            },
            header: {
              styles: {},
              opts: {},
              id: '',
              classes: '',
              name: 'Subscribe',
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
                  id: 'subscription-options-select',
                  classes: '',
                  componentName: 'Select',
                  label: 'Subscription Options',
                  options: [
                    {
                      name: 'All Research Updates',
                      value: 'All Research Updates',
                    },
                    {
                      name: 'Healthcare Updates Only',
                      value: 'Healthcare Updates Only',
                    },
                    {
                      name: 'Education Updates Only',
                      value: 'Education Updates Only',
                    },
                  ],
                  default: () => {
                    // Dynamically assign default based on path
                    return 'All Research Updates';
                  },
                },
                {
                  styles: {},
                  opts: {},
                  id: 'subscription-frequency-select',
                  classes: '',
                  componentName: 'Select',
                  label: 'Frequency',
                  options: [
                    {
                      name: 'Daily',
                      value: 'Daily',
                    },
                    {
                      name: 'Weekly',
                      value: 'Weekly',
                    },
                  ],
                  default: () => {
                    // Dynamically assign default based on path
                    return 'Daily';
                  },
                  // changeEndCallback: updateAddNewLabels, // Update dynamic add new form labels on select change
                },
                {
                  styles: {},
                  opts: {},
                  id: 'subscribe-text-email',
                  classes: '',
                  componentName: 'TextField',
                  label: 'Email',
                },
                {
                  styles: {},
                  opts: {},
                  id: 'subscribe-text-name',
                  classes: '',
                  componentName: 'TextField',
                  label: 'Name',
                },
              ],
              submitCallback: function () {
                // Go to relevant details page
                window.location.href = `${window.location.origin}/?app=investments`;
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
        name: 'Research',
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
                  lg: 12,
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
                        styles: { display: 'none' },
                        opts: {},
                        id: '',
                        classes: '',
                        name: '',
                        divider: { display: 'none' },
                      },
                      content: {
                        styles: {},
                        opts: {
                          header: 'Hello there!',
                          subheader:
                            'Meet the new acmeInvestments Research Portal, here to serve all of your research needs. Stay up to date and make informed decisions with a carefully curated research portfolio tailored just to you.',
                          text: '',
                          headerStyle: {},
                          subheaderStyle: {},
                          textStyle: {},
                        },
                        id: '',
                        classes: 'welcome-message-text',
                        type: 'Text',
                      },
                    },
                    id: 'welcome-message',
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
                      // Videos

                      {
                        styles: {},
                        opts: {
                          item: true,
                          xs: 4,
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
                                styles: { minHeight: '175px' },
                                opts: {
                                  height: 1,
                                  header: {
                                    styles: { height: '45px' },
                                    opts: {},
                                    id: '',
                                    classes: 'video-1-header',
                                    name: 'Current Events',
                                  },
                                  content: {
                                    styles: { minHeight: '150px' },
                                    opts: {
                                      src: 'https://www.youtube.com/embed/JDLgf2nGeKw',
                                      title: 'LIVE: NBC News NOW - Dec. 21',
                                    },
                                    id: '',
                                    classes: 'video-1',
                                    type: 'Embed',
                                  },
                                },
                                id: 'video-1-card',
                                classes: '',
                                componentName: 'ContentTile',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        styles: {},
                        opts: {
                          item: true,
                          xs: 4,
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
                                styles: { inHeight: '150px' },
                                opts: {
                                  height: 0.5,
                                  header: {
                                    styles: { height: '45px' },
                                    opts: {},
                                    id: '',
                                    classes: 'video-2-header',
                                    name: 'Recent Releases',
                                  },
                                  content: {
                                    styles: {},
                                    opts: {
                                      src: 'https://www.youtube.com/embed/e6aizfamG2g',
                                      title:
                                        'The biggest risk to stocks in 2023, according to Wall Street banks',
                                      styles: { height: '160px' },
                                    },
                                    id: '',
                                    classes: 'video-2',
                                    type: 'Embed',
                                  },
                                },
                                id: 'video-2-card',
                                classes: '',
                                componentName: 'ContentTile',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        styles: { minHeight: '175px' },
                        opts: {
                          item: true,
                          xs: 4,
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
                                styles: { minHeight: '150px' },
                                opts: {
                                  height: 0.5,
                                  header: {
                                    styles: { height: '45px' },
                                    opts: {},
                                    id: '',
                                    classes: 'video-3-header',
                                    name: 'Just for Fun',
                                  },
                                  content: {
                                    styles: {},
                                    opts: {
                                      src: 'https://www.youtube.com/embed/iszwuX1AK6A',
                                      title:
                                        'The Wolf of Wall Street Official Trailer',
                                    },
                                    id: '',
                                    classes: 'video-3',
                                    type: 'Embed',
                                  },
                                },
                                id: 'video-3-card',
                                classes: '',
                                componentName: 'ContentTile',
                              },
                            ],
                          },
                        ],
                      },

                      // Topic Header
                      {
                        styles: { paddingBottom: '0px' },
                        opts: {
                          item: true,
                          xs: 12,
                          lg: 12,
                        },
                        id: '',
                        classes: 'find-this',
                        componentName: 'Grid',
                        contents: [
                          {
                            styles: {
                              boxShadow: 'none',
                              backgroundColor: 'transparent',
                              paddingBottom: '0px',
                              paddingLeft: '6px',
                            },
                            opts: {
                              height: 0.5,
                              header: {
                                styles: { display: 'none' },
                                opts: {},
                                id: '',
                                classes: 'find-me-2',
                                name: '',
                                divider: { display: 'none' },
                              },
                              content: {
                                styles: {},
                                opts: {
                                  header: '',
                                  subheader: 'By Topic',
                                  text: '',
                                  headerStyle: {},
                                  subheaderStyle: { fontSize: '18px' },
                                  textStyle: {},
                                },
                                id: '',
                                classes: '',
                                type: 'Text',
                              },
                            },
                            id: 'topic-header',
                            classes: '',
                            componentName: 'ContentTile',
                          },
                        ],
                      },

                      // List 1
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
                              height: 0.75,
                              header: {
                                styles: {
                                  height: '45px',
                                },
                                opts: {},
                                id: '',
                                classes: 'healthcare-header',
                                name: 'Healthcare',
                              },
                              content: {
                                styles: {},
                                opts: {
                                  dataUrl:
                                    '/investments/articles/healthcare_articles.json',
                                  buttonStyles: {},
                                  modal: {
                                    styles: {},

                                    opts: {
                                      variant: 'contained',
                                    },
                                    id: 'article-embed',
                                    classes: '',
                                    header: {
                                      styles: {},
                                      opts: {},
                                      id: '',
                                      classes: '',
                                      name: '',
                                    },
                                    content: {
                                      styles: {
                                        width: '900px',
                                        height: '700px',
                                      },
                                      opts: {},
                                      id: '',
                                      classes: '',
                                      componentName: 'Embed',
                                      contents: [],
                                    },
                                  },
                                },
                                id: '',
                                classes: '',
                                type: 'ListResults',
                              },
                            },
                            id: '',
                            classes: 'content-tile-healthcare',
                            componentName: 'ContentTile',
                          },
                        ],
                      },

                      // List 2
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
                              height: 0.75,
                              header: {
                                styles: {
                                  height: '45px',
                                },
                                opts: {},
                                id: '',
                                classes: 'education-header',
                                name: 'Education',
                              },
                              content: {
                                styles: {},
                                opts: {
                                  dataUrl:
                                    '/investments/articles/education_articles.json',
                                  buttonStyles: {},
                                  modal: {
                                    styles: {},

                                    opts: {
                                      variant: 'contained',
                                    },
                                    id: 'article-embed',
                                    classes: '',
                                    header: {
                                      styles: {},
                                      opts: {},
                                      id: '',
                                      classes: '',
                                      name: '',
                                    },
                                    content: {
                                      styles: {
                                        width: '900px',
                                        height: '700px',
                                      },
                                      opts: {},
                                      id: '',
                                      classes: '',
                                      componentName: 'Embed',
                                      contents: [],
                                    },
                                  },
                                },
                                id: '',
                                classes: '',
                                type: 'ListResults',
                              },
                            },
                            id: '',
                            classes: 'content-tile-education',
                            componentName: 'ContentTile',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },

              // Recommended for You
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
                      height: 0.65,
                      header: {
                        styles: { height: '45px' },
                        opts: {},
                        id: '',
                        classes: '',
                        name: 'Recommended for You',
                      },
                      content: {
                        styles: {},
                        opts: {
                          dataUrl: '/investments/articles/all_articles.json',
                          buttonStyles: {},
                          modal: {
                            styles: {},

                            opts: {
                              variant: 'contained',
                            },
                            id: 'article-embed',
                            classes: '',
                            header: {
                              styles: {},
                              opts: {},
                              id: '',
                              classes: 'recommended-header',
                              name: '',
                            },
                            content: {
                              styles: {
                                width: '900px',
                                height: '700px',
                              },
                              opts: {},
                              id: '',
                              classes: '',
                              componentName: 'Embed',
                              contents: [],
                            },
                          },
                        },
                        id: '',
                        classes: '',
                        type: 'ListResults',
                      },
                    },
                    id: '',
                    classes: 'content-tile-recommended',
                    componentName: 'ContentTile',
                  },
                ],
              },
            ],
          },
        ],
      },
      // {
      //   name: 'Debt Portal',
      //   route: '/debt',
      //   contents: [
      //     {
      //       styles: {},
      //       opts: {
      //         container: true,
      //       },
      //       id: '',
      //       classes: '',
      //       componentName: 'Grid',
      //       contents: [
      //         {
      //           styles: {},
      //           opts: {
      //             item: true,
      //             xs: 12,
      //           },
      //           id: '',
      //           classes: '',
      //           componentName: 'Grid',
      //           contents: [
      //             {
      //               styles: {},
      //               opts: {
      //                 height: 1,
      //                 header: {
      //                   styles: {},
      //                   opts: {},
      //                   id: '',
      //                   classes: '',
      //                   name: 'Accounts',
      //                 },
      //                 content: {
      //                   styles: {},
      //                   opts: {
      //                     dataUrl: '/crm/tableData/accounts.json',
      //                     columns: [
      //                       {
      //                         field: 'name',
      //                         headerName: 'Name',
      //                         renderCell: (params) => (
      //                           <a
      //                             href={`${window.location.origin}/accounts/${params.id}/details`}
      //                           >
      //                             {params.formattedValue}
      //                           </a>
      //                         ),
      //                         flex: 1,
      //                       },
      //                       {
      //                         field: 'rep',
      //                         headerName: 'Rep',
      //                         flex: 1,
      //                       },
      //                       {
      //                         field: 'territory',
      //                         headerName: 'Territory',
      //                         flex: 1,
      //                       },
      //                       {
      //                         field: 'industry',
      //                         headerName: 'Industry',
      //                         flex: 1,
      //                       },
      //                       {
      //                         field: 'address',
      //                         headerName: 'Address',
      //                         flex: 3,
      //                       },
      //                     ],
      //                   },
      //                   id: '',
      //                   classes: '',
      //                   type: 'Table',
      //                 },
      //               },
      //               id: '',
      //               classes: '',
      //               componentName: 'ContentTile',
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   name: 'Equity',
      //   route: '/equity',
      //   contents: [
      //     {
      //       styles: {},
      //       opts: {
      //         container: true,
      //       },
      //       id: '',
      //       classes: '',
      //       componentName: 'Grid',
      //       contents: [
      //         {
      //           styles: {},
      //           opts: {
      //             item: true,
      //             xs: 12,
      //           },
      //           id: '',
      //           classes: '',
      //           componentName: 'Grid',
      //           contents: [
      //             {
      //               styles: {},
      //               opts: {
      //                 height: 1,
      //                 header: {
      //                   styles: {},
      //                   opts: {},
      //                   id: '',
      //                   classes: '',
      //                   name: 'Contacts',
      //                 },
      //                 content: {
      //                   styles: {},
      //                   opts: {
      //                     dataUrl: '/crm/tableData/contacts.json',
      //                     columns: [
      //                       {
      //                         field: 'name',
      //                         headerName: 'Name',
      //                         flex: 1,
      //                         renderCell: (params) => (
      //                           <a
      //                             href={`${window.location.origin}/contacts/${params.id}/details`}
      //                           >
      //                             {params.formattedValue}
      //                           </a>
      //                         ),
      //                       },
      //                       {
      //                         field: 'account',
      //                         headerName: 'Account',
      //                         flex: 1,
      //                       },
      //                       {
      //                         field: 'email',
      //                         headerName: 'Email',
      //                         flex: 1,
      //                       },
      //                       {
      //                         field: 'phone',
      //                         headerName: 'Phone',
      //                         flex: 1,
      //                       },
      //                       {
      //                         field: 'title',
      //                         headerName: 'Title',
      //                         flex: 1,
      //                       },
      //                     ],
      //                   },
      //                   id: '',
      //                   classes: '',
      //                   type: 'Table',
      //                 },
      //               },
      //               id: '',
      //               classes: '',
      //               componentName: 'ContentTile',
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
      // {
      //   name: 'Details',
      //   route: '/:detailType/:detailId/details',
      //   contents: [
      //     {
      //       styles: {},
      //       opts: {
      //         container: true,
      //       },
      //       id: '',
      //       classes: '',
      //       componentName: 'Grid',
      //       contents: [
      //         {
      //           styles: {},
      //           opts: {
      //             item: true,
      //             xs: 12,
      //             md: 4,
      //           },
      //           id: '',
      //           classes: '',
      //           componentName: 'Grid',
      //           contents: [
      //             {
      //               styles: {},
      //               opts: {
      //                 height: 0.5,
      //                 header: {
      //                   styles: {},
      //                   opts: {},
      //                   id: '',
      //                   classes: '',
      //                   name: 'Quick Information',
      //                 },
      //                 content: {
      //                   styles: {},
      //                   opts: {},
      //                   id: '',
      //                   classes: '',
      //                   type: 'QuickInfo',
      //                 },
      //               },
      //               id: 'quick-info',
      //               classes: '',
      //               componentName: 'ContentTile',
      //             },
      //           ],
      //         },
      //         {
      //           styles: {},
      //           opts: {
      //             item: true,
      //             xs: 12,
      //             md: 8,
      //           },
      //           id: '',
      //           classes: '',
      //           componentName: 'Grid',
      //           contents: [
      //             {
      //               styles: {},
      //               opts: {
      //                 height: 0.5,
      //                 header: {
      //                   styles: {},
      //                   opts: {},
      //                   id: '',
      //                   classes: '',
      //                   name: 'Activity Tracker',
      //                 },
      //                 content: {
      //                   styles: {},
      //                   opts: {},
      //                   id: '',
      //                   classes: '',
      //                   type: 'TabbedInput',
      //                 },
      //               },
      //               id: '',
      //               classes: '',
      //               componentName: 'ContentTile',
      //             },
      //           ],
      //         },
      //         {
      //           styles: {},
      //           opts: {
      //             item: true,
      //             xs: 12,
      //           },
      //           id: '',
      //           classes: '',
      //           componentName: 'Grid',
      //           contents: [
      //             {
      //               styles: {},
      //               opts: {
      //                 height: 0.5,
      //                 header: {
      //                   styles: {},
      //                   opts: {},
      //                   id: '',
      //                   classes: '',
      //                   name: 'Timeline',
      //                 },
      //                 content: {
      //                   styles: {},
      //                   opts: {},
      //                   id: '',
      //                   classes: '',
      //                   type: 'Timeline',
      //                 },
      //               },
      //               id: '',
      //               classes: '',
      //               componentName: 'ContentTile',
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   ],
      // },
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
