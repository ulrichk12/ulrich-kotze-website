output "cloud_run_url" {
  description = "URL of the deployed Cloud Run service"
  value       = google_cloud_run_service.ulrich_kotze_website.status[0].url
}

output "service_account_email" {
  description = "Email of the Cloud Run service account"
  value       = google_service_account.cloud_run_sa.email
}

output "artifact_registry_repository" {
  description = "Artifact Registry repository name"
  value       = google_artifact_registry_repository.ulrich_kotze_website.name
}

output "docker_image_path" {
  description = "Full path to push Docker images"
  value       = "${var.region}-docker.pkg.dev/${var.project_id}/${google_artifact_registry_repository.ulrich_kotze_website.repository_id}/${var.service_name}"
}

output "domain_mapping_dns_records" {
  description = "DNS records needed to verify domain ownership and route traffic"
  value = {
    status = google_cloud_run_domain_mapping.ulrich_kotze_website.status
  }
}
