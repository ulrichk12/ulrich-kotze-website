terraform {
  required_version = ">= 1.0"
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

# Artifact Registry repository for Docker images
resource "google_artifact_registry_repository" "ulrich_kotze_website" {
  location      = var.region
  repository_id = "ulrich-kotze-website"
  description   = "Docker repository for Ulrich Kotze Website"
  format        = "DOCKER"
}

# Service account for Cloud Run
resource "google_service_account" "cloud_run_sa" {
  account_id   = "ulrich-kotze-website"
  display_name = "Ulrich Kotze Website Cloud Run Service Account"
  description  = "Service account for running the Ulrich Kotze Website Cloud Run service"
}

# IAM binding to allow the service account to invoke Cloud Run
resource "google_project_iam_member" "cloud_run_invoker" {
  project = var.project_id
  role    = "roles/run.invoker"
  member  = "serviceAccount:${google_service_account.cloud_run_sa.email}"
}

# IAM binding to allow the service account to read from BigQuery
resource "google_project_iam_member" "bigquery_viewer" {
  project = var.project_id
  role    = "roles/bigquery.dataViewer"
  member  = "serviceAccount:${google_service_account.cloud_run_sa.email}"
}

# IAM binding to allow the service account to run BigQuery jobs
resource "google_project_iam_member" "bigquery_job_user" {
  project = var.project_id
  role    = "roles/bigquery.jobUser"
  member  = "serviceAccount:${google_service_account.cloud_run_sa.email}"
}

# IAM binding to allow unauthenticated access (public web app)
resource "google_cloud_run_service_iam_member" "public_access" {
  location = google_cloud_run_service.ulrich_kotze_website.location
  service  = google_cloud_run_service.ulrich_kotze_website.name
  role     = "roles/run.invoker"
  member   = "allUsers"
}

# Cloud Run service
resource "google_cloud_run_service" "ulrich_kotze_website" {
  name     = var.service_name
  location = var.region

  template {
    spec {
      service_account_name = google_service_account.cloud_run_sa.email
      
      containers {
        # Use a placeholder nginx image initially
        # This will be replaced by the actual app image during deployment
        image = "nginx:alpine"
        
        ports {
          container_port = 80
        }

        resources {
          limits = {
            cpu    = "1000m"
            memory = "512Mi"
          }
        }
      }
    }

    metadata {
      annotations = {
        "autoscaling.knative.dev/maxScale" = "10"
        "autoscaling.knative.dev/minScale" = "0"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }


  lifecycle {
    ignore_changes = [
      template[0].spec[0].containers[0].image,
      template[0].metadata[0].annotations,
    ]
  }
}

# Domain mapping for custom domain
resource "google_cloud_run_domain_mapping" "ulrich_kotze_website" {
  location = var.region
  name     = "ulrichkotze.com"

  metadata {
    namespace = var.project_id
  }

  spec {
    route_name = google_cloud_run_service.ulrich_kotze_website.name
  }
}
