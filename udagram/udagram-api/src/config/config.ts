import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.POSTGRES_USERNAME.split('\r')[0]}`,
  password: `${process.env.POSTGRES_PASSWORD.split('\r')[0]}`,
  database: `${process.env.POSTGRES_DB.split('\r')[0]}`,
  host: `${process.env.POSTGRES_HOST.split('\r')[0]}`,
  aws_region: `${process.env.AWS_REGION.split('\r')[0]}`,
  aws_profile: `${process.env.AWS_PROFILE.split('\r')[0]}`,
  aws_media_bucket: `${process.env.AWS_BUCKET.split('\r')[0]}`,
  url: `${process.env.URL.split('\r')[0]}`,
  jwt: {
    secret: `${process.env.JWT_SECRET.split('\r')[0]}`,
  },
};
