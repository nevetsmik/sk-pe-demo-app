import React from 'react';
import hexToRGBA from '../hexToRGBA';

const updateAddNewLabels = (event) => {
  // Dynamically change text field labels based on type
  let labels = [
    { Account: 'Name', Contact: 'Name', Opportunity: 'Name' },
    {
      Account: 'Rep',
      Contact: 'Email',
      Opportunity: 'Contact',
    },
    {
      Account: 'Territory',
      Contact: 'Phone #',
      Opportunity: 'ARR',
    },
  ];

  let selectedValue =
    event?.target?.value ||
    document.getElementById('add-new-select-type').nextElementSibling.value;
  console.log('Updating labels to match with value ', selectedValue);

  labels.forEach((d, i) => {
    document.getElementById(`add-new-text-field-${i}-label`).innerText =
      labels[i][selectedValue];
    document.getElementById(
      `add-new-text-field-${i}`
    ).nextElementSibling.children[0].children[0].innerText =
      labels[i][selectedValue];
  });
};

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
          id: 'crm-title',
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
            id: 'add-new',
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
                  id: 'add-new-text-field-0',
                  classes: '',
                  componentName: 'TextField',
                  label: 'Email',
                },
                {
                  styles: {},
                  opts: {},
                  id: 'add-new-text-field-1',
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
            styles: { justifyContent: 'center' },
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
                  sm: 6,
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
                        styles: { fontWeight: '600', fontSize: '1.1rem' },
                        opts: {},
                        id: '',
                        classes: '',
                        name: 'All',
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
                              classes: '',
                              name: '',
                            },
                            content: {
                              styles: { width: '900px', height: '700px' },
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
                  sm: 6,
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
                        styles: { fontWeight: '600', fontSize: '1.1rem' },
                        opts: {},
                        id: '',
                        classes: '',
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
                              styles: { width: '900px', height: '700px' },
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
                  sm: 6,
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
                        styles: { fontWeight: '600', fontSize: '1.1rem' },
                        opts: {},
                        id: '',
                        classes: '',
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
                              name: 'Default',
                            },
                            content: {
                              styles: { width: '900px', height: '700px' },
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
        name: 'Debt Portal',
        route: '/debt',
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
                              renderCell: (params) => (
                                <a
                                  href={`${window.location.origin}/accounts/${params.id}/details`}
                                >
                                  {params.formattedValue}
                                </a>
                              ),
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
        name: 'Equity',
        route: '/equity',
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
                              renderCell: (params) => (
                                <a
                                  href={`${window.location.origin}/contacts/${params.id}/details`}
                                >
                                  {params.formattedValue}
                                </a>
                              ),
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
                  md: 4,
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
                        opts: {},
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
                  md: 8,
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
                        opts: {},
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
                        opts: {},
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
