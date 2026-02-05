# Configures variables for Terraform

variable "bucket_name" {
  description = "The name of the S3 bucket for the React app"
  type        = string
  default     = "keeping-tabs"
}

variable "region" {
  description = "The AWS region"
  type        = string
  default     = "us-east-1"
}

variable "project_tags" {
  description = "Tags to apply to resources"
  type        = map(string)
  default     = {
    Project     = "keeping-tabs"
    Environment = "dev"
  }
}