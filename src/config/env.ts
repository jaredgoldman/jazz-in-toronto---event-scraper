import * as envalid from "envalid";

type EnvConfig = {
  DATABASE_URL: string;
  OPENAI_API_KEY: string;
  OPENAI_ORG_ID: string;
  ADMIN_EMAIL: string;
};

const env = envalid.cleanEnv(process.env, {
  DATABASE_URL: envalid.str({
    desc: "The database url",
  }),
  OPENAI_API_KEY: envalid.str({
    desc: "The open ai api key",
  }),
  OPENAI_ORG_ID: envalid.str({
    desc: "The open ai org id",
  }),
  ADMIN_EMAIL: envalid.str({
    desc: "Email address for seed admin",
  }),
});

export default env as EnvConfig;
