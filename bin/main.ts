#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SqsStack} from '../lib/sqs-stack';
import { config as devProperties } from '../env/dev';
import { config as prodProperties } from '../env/prod';

const app = new cdk.App();

const devEnv = { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION }

new SqsStack(app, 'DevSqsStack', {
  env: devEnv,
  ...devProperties,
  // ...devProperties 部分は以下の様にも書ける
  // enforceSSL: devProperties.enforceSSL
});

const prodEnv = { account: "123456789", region: "ap-northeast-1" }

new SqsStack(app, 'ProdSqsStack', {
  env: prodEnv,
  ...prodProperties,
});
