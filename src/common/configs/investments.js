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
          name: 'Investments',
          type: 'route',
          path: '/',
        },
        {
          name: 'Research',
          type: 'route',
          path: '/research',
        },
        {
          name: 'Banking',
          type: 'route',
          path: '/banking',
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
        name: 'Investments',
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
                                name: 'Portfolio Performance',
                              },
                              content: {
                                styles: {},
                                opts: {
                                  type: 'Bar',
                                  data: {
                                    labels: [
                                      'Jan',
                                      'Feb',
                                      'Mar',
                                      'Apr',
                                      'May',
                                      'June',
                                      'July',
                                      'Aug',
                                      'Sept',
                                      'Oct',
                                      'Nov',
                                      'Dec',
                                    ],
                                    datasets: [
                                      {
                                        fill: true,
                                        label: 'Performance ($)',
                                        data: [
                                          4500, 0, 0, 1230, 1600, 1700, 1800,
                                          13000, 12000, 19000, 22000, 24000,
                                        ],
                                        backgroundColor: hexToRGBA(
                                          '#5ad45a',
                                          0.75
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
                                      {
                                        fill: true,
                                        label: 'Performance ($)',
                                        data: [
                                          0,
                                          -3000,
                                          -660,
                                          0,
                                          0,
                                          0,
                                          0,
                                          0,
                                          0,
                                          0,
                                          0,
                                          ,
                                          0,
                                        ],
                                        backgroundColor: hexToRGBA(
                                          '#b30000',
                                          0.75
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
                                    scales: {
                                      x: {
                                        stacked: true,
                                      },
                                      y: {
                                        stacked: true,
                                        suggestedMin: -4000,
                                        suggestedMax: 5000,
                                        ticks: {
                                          callback: function (
                                            value,
                                            index,
                                            ticks
                                          ) {
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
                            id: 'forecast-card',
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
                                name: 'Individual Funds - YTD',
                              },

                              content: {
                                styles: {},
                                opts: {
                                  type: 'Bar',
                                  data: {
                                    labels: [
                                      'PNO-123',
                                      'PNO-456',
                                      'PNO-789',
                                      'AL-564',
                                      'RB-681',
                                      'EL-378',
                                    ],
                                    datasets: [
                                      {
                                        label: 'Performance YTD',
                                        data: [
                                          135000, 56000, 55000, 47000, 30000,
                                          25000,
                                        ],
                                        backgroundColor: hexToRGBA(
                                          '#0D88E6',
                                          0.75
                                        ),
                                        borderColor: hexToRGBA('#0D88E6', 0.9),
                                        hoverBackgroundColor: hexToRGBA(
                                          '#0D88E6',
                                          0.9
                                        ),
                                        hoverBorderColor: hexToRGBA(
                                          '#0D88E6',
                                          1
                                        ),
                                      },
                                    ],
                                  },

                                  opts: {
                                    maintainAspectRatio: false,
                                    plugins: {
                                      legend: {
                                        position: 'bottom',
                                      },
                                    },
                                    scales: {
                                      x: {
                                        stacked: true,
                                      },
                                      y: {
                                        stacked: true,
                                        suggestedMax: 150000,
                                        ticks: {
                                          callback: function (
                                            value,
                                            index,
                                            ticks
                                          ) {
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
                            id: 'fund-performance',
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
                                styles: {
                                  height: '45px',
                                },
                                opts: {},
                                id: '',
                                classes: 'research-header',
                                name: 'Research',
                              },
                              content: {
                                styles: {},
                                opts: {
                                  dataUrl:
                                    '/investments/articles/all_articles.json',
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
                        name: 'My Clients',
                      },
                      content: {
                        styles: {},
                        opts: {
                          dataUrl:
                            '/investments/tableData/investment_clients.json',
                          columns: [
                            {
                              field: 'name',
                              headerName: 'Name',
                              flex: 1,
                              renderCell: (params) => (
                                <a href={`/clients/${params.id}/details`}>
                                  {params.formattedValue}
                                </a>
                              ),
                            },
                            {
                              field: 'email',
                              headerName: 'Email',
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
        name: 'Research',
        route: '/research',
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
                            'Meet the new acmeInvestments Research Portal, here to serve all of your research needs. Stay up to date and make informed decisions with a carefully curated research portfolio tailored to you.',
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
                                    name: 'Pricing Page Teardown',
                                  },
                                  content: {
                                    styles: { minHeight: '150px' },
                                    opts: {
                                      src: 'https://fast.wistia.net/embed/iframe/6vi5ycxkvg',
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
                      height: 1.1,
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
      {
        name: 'Banking',
        route: '/banking',
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
                            'Welcome to the AcmeInvestments Banking Portal!',
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
                  {
                    styles: {},
                    opts: {
                      container: true,
                    },
                    id: '',
                    classes: '',
                    componentName: 'Grid',
                    contents: [
                      // Text boxes
                      {
                        styles: {},
                        opts: {
                          item: true,
                          xs: 3,
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
                                  height: 0.25,
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
                                      header: '$122,345',
                                      subheader: '',
                                      text: 'Total Wealth',
                                      headerStyle: {
                                        textAlign: 'center',
                                        color: '#1f9c1f',
                                      },
                                      subheaderStyle: {},
                                      textStyle: {
                                        textAlign: 'center',
                                        fontWeight: '700',
                                      },
                                    },
                                    id: '',
                                    classes: 'welcome-message-text',
                                    type: 'Text',
                                  },
                                },
                                id: 'figure-1',
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
                          xs: 3,
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
                                  height: 0.25,
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
                                      header: '$159,168',
                                      subheader: '',
                                      text: 'Total Assets',
                                      headerStyle: {
                                        textAlign: 'center',
                                        color: '#1f9c1f',
                                      },
                                      subheaderStyle: {},
                                      textStyle: {
                                        textAlign: 'center',
                                        fontWeight: '700',
                                      },
                                    },
                                    id: '',
                                    classes: 'welcome-message-text',
                                    type: 'Text',
                                  },
                                },
                                id: 'figure-2',
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
                          xs: 3,
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
                                  height: 0.25,
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
                                      header: '-1.08%/$1,223',
                                      subheader: '',
                                      text: "Today's Change",
                                      headerStyle: {
                                        textAlign: 'center',
                                        color: '#bf3026',
                                      },
                                      subheaderStyle: {},
                                      textStyle: {
                                        textAlign: 'center',
                                        fontWeight: '700',
                                      },
                                    },
                                    id: '',
                                    classes: 'welcome-message-text',
                                    type: 'Text',
                                  },
                                },
                                id: 'figure-3',
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
                          xs: 3,
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
                                  height: 0.25,
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
                                      header: '$36,823',
                                      subheader: '',
                                      text: 'Total Liabilities',
                                      headerStyle: {
                                        textAlign: 'center',
                                        color: '#bf3026',
                                      },
                                      subheaderStyle: {},
                                      textStyle: {
                                        textAlign: 'center',
                                        fontWeight: '700',
                                      },
                                    },
                                    id: '',
                                    classes: 'welcome-message-text',
                                    type: 'Text',
                                  },
                                },
                                id: 'figure-3',
                                classes: '',
                                componentName: 'ContentTile',
                              },
                            ],
                          },
                        ],
                      },
                      // Portfolio Performance Chart
                      {
                        styles: {},
                        opts: { item: true, xs: 12, md: 12 },
                        id: '',
                        classes: '',
                        componentName: 'Grid',
                        contents: [
                          {
                            styles: {},
                            opts: {
                              height: 0.6,
                              header: {
                                styles: {},
                                opts: {},
                                id: '',
                                classes: '',
                                name: 'Portfolio Performance',
                              },
                              content: {
                                styles: {},
                                opts: {
                                  type: 'Bar',
                                  data: {
                                    labels: [
                                      'Jan',
                                      'Feb',
                                      'Mar',
                                      'Apr',
                                      'May',
                                      'June',
                                      'July',
                                      'Aug',
                                      'Sept',
                                      'Oct',
                                      'Nov',
                                      'Dec',
                                    ],
                                    datasets: [
                                      {
                                        fill: true,
                                        label: 'Performance ($)',
                                        data: [
                                          4500, 0, 0, 1230, 1600, 1700, 1800,
                                          13000, 12000, 19000, 22000, 24000,
                                        ],
                                        backgroundColor: hexToRGBA(
                                          '#5ad45a',
                                          0.75
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
                                      {
                                        fill: true,
                                        label: 'Performance ($)',
                                        data: [
                                          0,
                                          -3000,
                                          -660,
                                          0,
                                          0,
                                          0,
                                          0,
                                          0,
                                          0,
                                          0,
                                          0,
                                          ,
                                          0,
                                        ],
                                        backgroundColor: hexToRGBA(
                                          '#b30000',
                                          0.75
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
                                    scales: {
                                      x: {
                                        stacked: true,
                                      },
                                      y: {
                                        stacked: true,
                                        suggestedMin: -4000,
                                        suggestedMax: 5000,
                                        ticks: {
                                          callback: function (
                                            value,
                                            index,
                                            ticks
                                          ) {
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
                            id: 'forecast-card',
                            classes: '',
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
                      height: 0.25,
                      header: {
                        styles: {},
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
