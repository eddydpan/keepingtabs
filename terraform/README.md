# Terraform Directory Organization
These terraform files define the AWS infrastructure.

## Notes
We use the `providers.tf` file to specify the Terraform provider as AWS. Specifically, we configure the `tf-admin` profile, a local profile created with the `aws` CLI through `aws configure`.

This `tf-admin` profile is set up as a "root user" to access all resources on AWS and is the "operator" behind all of the IaC. To initialize this root user, we use the `aws` CLI to create the user and get its access keys that will be stored locally as plaintext (sus) in the `aws` package files (`~/.aws/credentials`). Seems insecure, but since it's local, it *should* be fine.  

These terraform scripts set up the `ci_deployer` user. This user is created ephemerally and given permissions through the AWS IAM resources in terraform. This user **builds** and **deploys** the static files of the React App to **AWS S3** for hosting.

Included in this architecture is configuring the **AWS CloudFront** CDN which sits in front of the S3 bucket hosting the static files.

For security, we also use **GitHub Secrets** to keep track of IAM access keys and tokens.


## Use:

```
terraform init
terraform plan
terraform apply
```