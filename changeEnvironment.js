javascript: (function() {

	var urlChanger = {

		obj: {},
		host: null,
		params: null,
		userInput: null,
		isCms: null,
		
		setup: function() {
			this.host = window.location.host;
			this.params = this.getEnvironmentParams();
			this.isCms = window.location.pathname.indexOf("/umbraco") > -1;
		},

		getInput: function() {
			this.userInput = prompt("Environment (" + this.params + ")?");
		},

		main: function() {
			switch(this.userInput) {
				case "loc": 	return this.updateUrl(this.obj.local.host, this.obj.local.cmsHost, this.obj.local.tld); break;
				case "dev": 	return this.updateUrl(this.obj.development.host, this.obj.development.cmsHost, this.obj.development.tld); break;
				case "prod": 	return this.updateUrl(this.obj.production.host, this.obj.production.cmsHost, this.obj.production.tld); break;
				default: 		alert("Wrong parameter ..."); break;
			}
		},

		getEnvironmentParams: function() {
			return this.host.indexOf(this.obj.local.host) > -1 ? "dev/prod" : (this.host.indexOf(this.obj.development.host) > -1 ? "loc/prod" : "dev/loc");
		},

		updateUrl: function(prefix, cms, tld) {
			window.location.href = window.location.protocol + "//" + (this.isCms ? cms : prefix) + "." + this.obj.domain + "." + tld + this.getPath();
		},

		getPath: function() {
			return this.isCms ? window.location.pathname + window.location.hash : window.location.pathname;
		},

		init: function(obj) {
			this.obj = obj;
			this.setup();
			this.getInput();
			if(this.userInput != null) {
				this.main();
			}
		}

	};

	var environmentParameters = {
		domain: "domain",
		production: {
			host: "www",
			cmsHost: "cms",
			tld: "de"
		},
		development: {
			host: "dev-www",
			cmsHost: "dev-cms",
			tld: "dev"
		},
		local: {
			host: "local-www",
			cmsHost: "local-cms",
			tld: "local"
		}
	};

	urlChanger.init(environmentParameters);

})();
