# Template

An opinionated way of creating services for node.

Style is base on Clean Architecture, Domain Driven Design and SOLID principles.

## Directory Structure
```

(1)   src/
        index.ts
(i)	service/
          index.ts
	  createService.ts
	  Service.ts
(ii)    interfaces/
	  index.ts
          api/
          mq/

(2)   tests/
(i)	config.js
(ii)    tier1/
	  service/
(iii)	tier2/
(iv)	  interfaces/
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

   1. `service/` is for logic code. `createService` should handle creating all dependencies for `Service` to consume, from a configuration object. 
   2. `interfaces/` is split by function api(http), mq, service and any other[interface] thats required for the service to operate. This is where handler logic should exist and be mapped, from handler objects to service parameters. Any input/endpoint validations and response mappings

2. `tests/` are divided by tiers each tier adds more complexity by joining more parts of the system together

   1. `config` pulls the .env to config tests with prod-like environment properties 
   2. `tier1` [Unit Tests] no dependencies should be used here unless it's integral to the functions operation, use of mocks is highly recommended here
   3. `tier2` This is when the system is composed with config is wrapped by a scenario (BDD), mocks should not be used, but actual test systems and test data for repeat-ability
   4. `interfaces/` we look to test all interfaces here to make sure that configurations and application logic works as expected functionally, the service may not be required here unless the interface is different when exposed through `src/interfaces/service`

3. preconfigured for the project - please view before using
4. output of the `npm run build`, this will be published when using `npm run publish:lib`
