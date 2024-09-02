
## Description
A more in depth documentation into the application
## Dependencies
1. Node v14.15.1
2. npm 6.14.8
3. AWS CLI v2
4. EB CLI
5. AWS RDS database running postgres
6. AWS S3 bucket for Frontend
7. AWS Elastic Beanstack for API
   
## AWS cloud setup
1. RDS - database host: database-1.c7y8sg6am3qh.us-east-1.rds.amazonaws.com
2. RDS - database Port: 5432
3. RDS - database name: postgres
4. [S3 endpoint- frontend](http://kiet-641747160724.s3-website-us-east-1.amazonaws.com)
5. [Elastic Beanstalk URL - Backend](http://udagram-api-dev.us-east-1.elasticbeanstalk.com)

## Pipeline
1.  npm run frontend:install - to install frontend dependecies
2.  npm run api:install - to Install dependencies in the the backend API
3.  npm run frontend:lint - to Lint the frontend
4.  npm run frontend:build - to  Build the frontend app
5.  npm run api:build - to  Build the backend API
6.  npm run frontend:deploy - to Deploy the frontend
7.  npm run api:deploy -  to  deploy API

## CircleCI
1. Seting Enviroment variables
2. install nodejs
3. setup aws cli
4. setup eb cli
5. checkout code
6. Install dependencies frontend, build, deploy into S3
7. Install dependencies Backend API, build, deploy into Elastic Beastalk

## Testing
1. cd udagram-frondtend
2. npm run test
3. npm run e2e

## Enviroment Variables
1. PORT = 8080
2. POSTGRES_USERNAME=<Database_username>
3. POSTGRES_PASSWORD=<Database_password>
4. POSTGRES_HOST=<Database_IP_Address>
5. POSTGRES_DB=<Database_name>
6. AWS_BUCKET=<Bucket_name>
7. AWS_REGION=<any>
8. AWS_PROFILE=<any>
9. JWT_SECRET=<any>
10. URL=<Url>
