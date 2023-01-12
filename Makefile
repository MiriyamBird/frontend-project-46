lint: #lint
	npx eslint .

fix: #fix
	npx eslint . --fix

publish: #publish
	npm publish --dry-run

install: #install
	npm ci

jest: #jest
	NODE_OPTIONS=--experimental-vm-modules npx jest

coverage: #jest coverage
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage

gendiff: #gendiff
	gendiff __fixtures__/file1.json __fixtures__/file2.json

plain: #gendiff
	gendiff -f plain __fixtures__/file1.json __fixtures__/file2.json

json: #gendiff
	gendiff -f json __fixtures__/file1.json __fixtures__/file2.json