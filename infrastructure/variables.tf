variable "project_id" {
  description = "GCP Project ID"
  type        = string
  default = "kotze-household-app"
}

variable "region" {
  description = "GCP region for resources"
  type        = string
  default     = "us-central1"
}

variable "service_name" {
  description = "Name of the Cloud Run service"
  type        = string
  default     = "ulrich-kotze-website"
}
