import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface SqsStackProps extends cdk.StackProps {
  enforceSSL: boolean
}
export class SqsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: SqsStackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'CdkConfigQueue', {
      visibilityTimeout: cdk.Duration.seconds(300),
      enforceSSL: props.enforceSSL
    });
  }
}
