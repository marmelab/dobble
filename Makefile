.PHONY: all test clean
	
install:
	npm install

test:
	@NODE_ENV=test ./node_modules/mocha/bin/mocha --compilers js:babel/register
