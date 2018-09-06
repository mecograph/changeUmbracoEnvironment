# changeUmbracoEnvironment
A small script (as bookmark) which changes the umbraco environment (e.g. from local to dev or prod) depending on the given parameters.
Specifically designed for umbraco cms. Has to be minified (after the environment parameters are set) and pasted into URL field while creating a new bookmark. Currently only tested in Google Chrome...

## Environment Parameters Object

domain: name of the domain (e.g. website is www.myawesomedomain.org then it's "myawesomedomain")
environment.host: the subdomain part of the host
environment.cmsHost: the subdomain part of the host for the cms
environment.tld: topleveldomain part of the host
