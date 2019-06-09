# Template

An opinionated way of creating services for node.

Style is base on Clean Architecture, Domain Driven Design and SOLID principles.

## Directory Structure
```

(1)   src/
        index.ts
(1a)	service/
          index.ts
	  createService.ts
	  Service.ts
(1b)    interfaces/
	  index.ts
          api/
          mq/

(2)   tests/
(2a)	config.js
(2b)    tier1/
	  service/
(2c)	tier2/
(2d)	  interfaces/
	    api/
	    mq/

      .gitignore
      tsconfig.json
      tslint.json
      .env
      .editorconfig
      README.md
      CHANGELOG.md
(3)   package.json

(4)   lib/
	package.json
	README.md
	CHANGELOG.md
	index.ts
	interfaces/
	service/
```


1. `src/` is divided to separate interface and logic code

... a. `service/` is for logic code. `createService` should handle creating all dependencies for `Service` to consume, from a configuration object. 
... b. `interfaces/` is split by function api(http), mq, service and any other[interface] thats required for the service to operate. This is where handler logic should exist and be mapped, from handler objects to service parameters. Any input/endpoint validations and response mappings

2. `tests/` are divided by tiers each tier adds more complexity by joining more parts of the system together

... a. `config` pulls the .env to config tests with prod-like environment properties 
... b. `tier1` [Unit Tests] no dependencies should be used here unless it's integral to the functions operation, use of mocks is highly recommended here
... c. `tier2` This is when the system is composed with config is wrapped by a scenario (BDD), mocks should not be used, but actual test systems and test data for repeat-ability
... d. `interfaces/` we look to test all interfaces here to make sure that configurations and application logic works as expected functionally, the service may not be required here unless the interface is different when exposed through `src/interfaces/service`

3. preconfigured for the project - please view before using
4. output of the `npm run build`, this will be published when using `npm run publish:lib`
