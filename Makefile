project_name = atomic-angular-demo

setup: init rebuild
start: up
stop: clean
restart: build up
rebuild: build
rebuild-clean: super-clean rebuild

init:
	([ ! -e .git/hooks/pre-push ] || rm .git/hooks/pre-push) && ln -s ../../bin/pre-push .git/hooks

clean:
	docker-compose rm --force --stop -v

super-clean: clean
	docker system prune --all --force --volumes

build: clean docker-build install

docker-build:
	docker-compose build

docker-build-no-cache:
	docker-compose build --pull --no-cache

install:
	docker-compose run -l traefik.enable=false --rm $(project_name) npm install

up:
	docker-compose up --force-recreate

sh:
	docker-compose run -l traefik.enable=false --rm $(project_name) sh

bash:
	docker-compose run -l traefik.enable=false --rm $(project_name) bash

lint:
	docker-compose run -l traefik.enable=false --rm $(project_name) npm run lint

lint-fix:
	docker-compose run -l traefik.enable=false --rm $(project_name) npm run lint:fix

test:
	docker-compose run -l traefik.enable=false --rm -e NODE_ENV=test -e CI=true $(project_name) npm test

ci: build lint test

.PHONY: init clean build install lint test