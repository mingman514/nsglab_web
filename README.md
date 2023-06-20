## NS Lab Website

## Prerequisite
- .env file in root directory (note that all services including docker-compose.yml, frontend and backend share this config file.)

## Build (docker containers)
```
docker-compose build
```

## Deploy (docker containers)
```
docker-compose up -d
```

## Test in local environment
For testing easily, expose Mongo DB port to external accesses.
```
# change to "development" mode
./test_env.sh
```
and manually run each service (run "npm start" in frontend and backend folders).