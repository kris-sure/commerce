up: docker-up
down: docker-down
build: docker-build
build-nc: docker-build-no-cache


### Docker init
docker-up:
	docker-compose up -d
docker-down:
	docker-compose down --remove-orphans
docker-build:
	docker-compose build
docker-build-no-cache:
	docker-compose build --no-cache


### docker-compose run --rm php
### docker-compose run --rm php php bin/console doctrine:fixtures:load