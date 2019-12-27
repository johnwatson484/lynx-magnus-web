[![Build Status](https://johnwatson484.visualstudio.com/John%20D%20Watson/_apis/build/status/Lynx%20Magnus%20Web?branchName=master)](https://johnwatson484.visualstudio.com/John%20D%20Watson/_build/latest?definitionId=29&branchName=master)

# Lynx Magnus
Root website for hosting and privacy policies.

# Prerequisites
- Docker
- Docker Compose

# Running the application
The application is intended to be run and developed within a container.  A set of docker-compose files exist to support this.

## Run application in container
The application will be accessible on port `3000`.

```
docker-compose build
docker-compose up
```

## Develop application in container
```
docker-compose -f docker-compose.yaml -f docker-compose.development.yaml build
docker-compose -f docker-compose.yaml -f docker-compose.development.yaml up
```

Local changes to code files will automatically trigger a restart of the application within the container.
