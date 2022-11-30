const urlParams = new URLSearchParams(window.location.search);
const urlDisablePendo = urlParams.get('disablePendo') === 'true';
const urlApiKey = urlParams.get('apiKey');
const urlVisitor = urlParams.get('visitor') || '';
const urlAccount = urlParams.get('account') || '';
const urlAccountBasedVisitor = urlParams.get('accountBasedVisitor') || '';
const urlRole = urlParams.get('role') || '';
const urlTeam = urlParams.get('team') || '';
const urlTitle = urlParams.get('title') || '';
const urlQuotaAttainment = urlParams.get('quotaAttainment') || '';
const urlRegion = urlParams.get('region') || '';
const urlOffice = urlParams.get('office') || '';
const urlSystem = urlParams.get('system') || '';

export function runSnippet(config, setPendoMetadata) {
  // Run Pendo snippet if not disabled by url param or already installed
  if (!urlDisablePendo && !window.pendo) {
    // Pendo Snippet
    (function (apiKey) {
      (function (p, e, n, d, o) {
        var v, w, x, y, z;
        o = p[d] = p[d] || {};
        o._q = [];
        v = ['initialize', 'identify', 'updateOptions', 'pageLoad', 'track'];
        for (w = 0, x = v.length; w < x; ++w)
          (function (m) {
            o[m] =
              o[m] ||
              function () {
                o._q[m === v[0] ? 'unshift' : 'push'](
                  [m].concat([].slice.call(arguments, 0))
                );
              };
          })(v[w]);
        y = e.createElement(n);
        y.async = !0;
        y.src = 'https://cdn.pendo.io/agent/static/' + apiKey + '/pendo.js';
        z = e.getElementsByTagName(n)[0];
        z.parentNode.insertBefore(y, z);
      })(window, document, 'script', 'pendo');
    })(urlApiKey || config.apiKey);

    // Call post snippet callback if present
    if (config.snippetCallback) {
      config.snippetCallback(config, urlParams);
    }

    // Kick off request for visitor metadata
    getVisitor(config, setPendoMetadata);
  }
}

// Fetch visitor metadata from server
function getVisitor(config, setPendoMetadata) {
  fetch(
    `/visitorApi/visitors/new?visitor=${urlVisitor}&account=${urlAccount}&accountBasedVisitor=${urlAccountBasedVisitor}&role=${urlRole}&team=${urlTeam}&title=${urlTitle}&quotaAttainment=${urlQuotaAttainment}&region=${urlRegion}&office=${urlOffice}&system=${urlSystem}`
  )
    .then((res) => res.json())
    .then((visitorInfo) => visitorInfo)
    .catch((error) => {
      console.log('Failed to load visitor metadata:', error);
      console.log('Using default metadata');

      const visitorInfo = {
        visitor: {
          id: 'ryan@test.com',
          role: 'user',
          team: 'Product',
          title: 'Product Manager',
          region: 'AMER',
          office: 'Raleigh',
          system: 'Mac',
          quotaBasedRole: false,
          quotaAttainment: 0,
        },
        account: { id: 'test' },
      };

      return visitorInfo;
    })
    .then((visitorInfo) => {
      setPendoMetadata(visitorInfo);
      initPendo(config, visitorInfo);
    });
}

// Initialize pendo with given visitor metadata
function initPendo(config, visitorInfo) {
  pendo.initialize({
    additionalApiKeys: urlApiKey ? [] : config.additionalApiKeys,
    visitor: {
      ...config?.visitor,
      ...visitorInfo.visitor,
    },
    account: {
      ...config?.visitor,
      ...visitorInfo.account,
    },
  });
}
