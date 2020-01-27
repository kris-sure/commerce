up: docker-up
down: docker-down
build: docker-build
build-nc: docker-build-no-cache
allow: docker-allow


### Docker init
docker-up:
	docker-compose up -d
docker-down:
	docker-compose down --remove-orphans
docker-build:
	docker-compose build
docker-build-no-cache:
	docker-compose build --no-cache

docker-allow:
	sudo chmod 777 -R data
memory:
	sudo sysctl -w vm.max_map_count=262144


### docker-compose run --rm php
### docker-compose run --rm php php bin/console doctrine:fixtures:load