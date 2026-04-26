[![Build Status](https://github.com/johnwatson484/lynx-magnus-web/actions/workflows/build.yaml/badge.svg)](https://github.com/johnwatson484/lynx-magnus-web/actions/workflows/build.yaml)

# Lynx Magnus
Root website for hosting and privacy policies.

## Prerequisites
- Docker
- Docker Compose

## Running the application
The application is intended to be run and developed within a container.  A set of docker-compose files exist to support this.

### Run application in container
The application will be accessible on port `3000`.

```
docker-compose build
docker-compose up
```

Local changes to code files will automatically trigger a restart of the application within the container.
