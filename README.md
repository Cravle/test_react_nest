## requirements
- docker
- docker-compose
- node 18.19.1
- yarn 1.22.19

## installation 
- `cd api`
- `docker-compose up` to run the db or you can change `DATABASE_URL` in `.env` to your local psotgres db
- rename `.env.example` to `.env`
- `yarn` to install the dependencies

- `cd ui`
- rename `.env.example` to `.env`
- `yarn` to install the dependencies

## run
- `cd api && yarn start:dev`
- `cd ui && yarn dev`

