import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export interface MainStackProps extends cdk.StackProps {
  vpcId: string,
  instanceType: ec2.InstanceType
}

export class MainStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: MainStackProps ) {
    super(scope, id, props);

    const vpc = ec2.Vpc.fromLookup(this, "Vpc", {
      vpcId: props.vpcId
    });
    const instanceType = props.instanceType;

    new ec2.Instance(this, 'Instance', {
      vpc,
      instanceType,
      machineImage: new ec2.AmazonLinuxImage({
        generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2,
      }),
    });
  }
}
