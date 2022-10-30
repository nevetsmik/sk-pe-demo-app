# Acme CRM

A mock CRM app used to demo Pendo on.

## Heroku

- [Staging Instance](https://dashboard.heroku.com/apps/pe-acme-crm-staging) - [(view app)](https://pe-acme-crm-staging.herokuapp.com/)
- [Production Instance](https://dashboard.heroku.com/apps/pe-acme-crm) - [(view app)](https://www.acmecrm.io/)

The Heroku instances currently use the following buildpacks:

- heroku/nodejs
- https://github.com/jontewks/puppeteer-heroku-buildpack.git

Production runs `npm run automateusage` every 10 minutes and `npm run automateusage:a4p` every hour in the Heroku Scheduler.

## Getting Started

#### Dependencies

In order to get the project up and running you will need:

- Node JS v16.13.0 (Check with `node -v`)
- Yarn v1.22.17 (Check with `yarn -v`)

#### Cloning

To clone a local version of the project run:

```
git clone https://github.com/pendo-io/pe-acme-crm.git
```

#### Installation

To install dependencies and create the static server to serve the build run:

```
cd ./pe-acme-crm
yarn install
```

If you plan to run the automated puppeteer scripts locally, you must also run:

```
node node_modules/puppeteer/install.js
```

#### Development Environment

To start a development environment that updates on source changes run:

```
npm run start:dev
```

The development environment will start at [http://localhost:3000/](http://localhost:3000/).

#### Static Server

To serve static build via server run:

```
npm run start
```

The static build will be served at [http://localhost:5010/](http://localhost:5010/).

#### Puppeteer Testing

To test changes to the automated puppeteer scripts run:

```
npm run automateusage
```

or

```
npm run automateusage:a4p
```

depending on which scripts you have modified. Note that these scripts point to the production url [https://www.acmecrm.io/](https://www.acmecrm.io/) so they will not see any updates to the UI that have not yet been deployed to Heroku.

## Deploying to Heroku

#### Heroku CLI

Follow the instructions [here](https://devcenter.heroku.com/articles/heroku-cli) to install the Heroku CLI. Then login by running:

```
heroku login
```

#### Verify Remotes

Check that the remotes for Heroku have been set up by running:

```
git remote -v
```

Which should yeild the following:

```
heroku-prod     https://git.heroku.com/pe-acme-crm.git (fetch)
heroku-prod     https://git.heroku.com/pe-acme-crm.git (push)
heroku-staging  https://git.heroku.com/pe-acme-crm-staging.git (fetch)
heroku-staging  https://git.heroku.com/pe-acme-crm-staging.git (push)
origin  https://github.com/pendo-io/pe-acme-crm (fetch)
origin  https://github.com/pendo-io/pe-acme-crm (push)
```

If remotes for heroku-staging and heroku-prod are not present, add them by running:

```
git remote add heroku-prod https://git.heroku.com/pe-acme-crm.git
git remote add heroku-staging https://git.heroku.com/pe-acme-crm-staging.git
```

#### Push Changes

First, push changes to remote main to ensure it is up to date with heroku build:

```
git push
```

Then, push changes to heroku staging, monitor build process and test at [https://pe-acme-crm-staging.herokuapp.com/](https://pe-acme-crm-staging.herokuapp.com/):

```
git push heroku-staging
```

Finally, push changes to heroku prod, monitor build process and test at [https://www.acmecrm.io/](https://www.acmecrm.io/):

```
git push heroku-prod
```
