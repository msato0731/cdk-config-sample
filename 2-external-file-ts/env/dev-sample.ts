import * as ec2 from 'aws-cdk-lib/aws-ec2';

export const config = {
    vpcId: "vpc-XXXXXX",
    instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO)
};