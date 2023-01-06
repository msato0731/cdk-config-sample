#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MainStack } from '../lib/main-stack';
import { config as devProperties } from '../env/dev';
import { config as prdProperties } from '../env/prd';

const app = new cdk.App();

const argContext = 'environment';
const envKey = app.node.tryGetContext(argContext);
if (envKey == undefined)
  throw new Error(`Please specify environment with context option. ex) cdk deploy -c ${argContext}=dev`);
const envVals = app.node.tryGetContext(envKey);
if (envVals == undefined) throw new Error('Invalid environment.');

const env = { account: envVals['env']['account'], region: envVals['env']['region'] };

const properties = getProperties(envKey)

new MainStack(app, 'MainStack', {
    env,
    ...properties
});

function getProperties(envKey: String) {
  if (envKey === "dev") {
    return devProperties
  } else if (envKey === "prd") {
    return prdProperties
  }  else {
    throw new Error("No Support environment")
  }
}