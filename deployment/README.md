# Ulrich Kotze Website - Cloud Run Deployment

This directory contains scripts and configuration for deploying the Ulrich Kotze Website to Google Cloud Run.

## Prerequisites

1. **Google Cloud SDK**: Install from [cloud.google.com/sdk](https://cloud.google.com/sdk/docs/install)
2. **Docker**: Install from [docker.com](https://www.docker.com/get-started)
3. **Terraform**: Install from [terraform.io](https://www.terraform.io/downloads)
4. **GCP Project**: You need a Google Cloud Platform project with billing enabled

## Setup

### 1. Authenticate with Google Cloud

```bash
gcloud auth login
gcloud auth application-default login
```

### 2. Set Environment Variables

```bash
export GCP_PROJECT_ID="your-project-id"
export GCP_REGION="us-central1"  # Optional, defaults to us-central1
export SERVICE_NAME="ulrich-kotze-website"  # Optional, defaults to ulrich-kotze-website
```

### 3. Provision Infrastructure with Terraform

**Important**: You must provision the infrastructure first before deploying the application.

```bash
cd ../infrastructure

# Initialize Terraform
terraform init

# Create terraform.tfvars file
cat > terraform.tfvars <<EOF
project_id   = "your-project-id"
region       = "us-central1"
service_name = "ulrich-kotze-website"
EOF

# Review the plan
terraform plan

# Apply the infrastructure
terraform apply
```

This will create:
- Artifact Registry repository for Docker images
- Service account for Cloud Run
- Cloud Run service (with placeholder nginx image)
- IAM bindings for public access

**Note**: The Cloud Run service is initially created with a placeholder `nginx:alpine` image. The actual application image will be deployed in the next step.

### 4. Deploy the Application

```bash
cd ../deployment
./deploy.sh
```

The script will:
1. Build the Docker image
2. Push it to Artifact Registry
3. Deploy to Cloud Run
4. Display the service URL

## Manual Deployment

If you prefer to deploy manually:

```bash
# Set variables
PROJECT_ID="your-project-id"
REGION="us-central1"
SERVICE_NAME="ulrich-kotze-website"
IMAGE_NAME="${REGION}-docker.pkg.dev/${PROJECT_ID}/ulrich-kotze-website/${SERVICE_NAME}:latest"

# Build and push
cd ../website
docker build -t "$IMAGE_NAME" -f ../deployment/Dockerfile .
docker push "$IMAGE_NAME"

# Deploy
gcloud run deploy "$SERVICE_NAME" \
  --image "$IMAGE_NAME" \
  --platform managed \
  --region "$REGION" \
  --allow-unauthenticated \
  --port 80 \
  --memory 512Mi \
  --cpu 1
```

## Environment Variables

The deployment script uses the following environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `GCP_PROJECT_ID` | Your GCP project ID | *Required* |
| `GCP_REGION` | GCP region for deployment | `us-central1` |
| `SERVICE_NAME` | Name of the Cloud Run service | `ulrich-kotze-website` |

## Updating the Application

To deploy updates:

```bash
cd deployment
./deploy.sh
```

The script will rebuild the image with your latest changes and deploy to Cloud Run.

## Monitoring

View logs:
```bash
gcloud run services logs read "$SERVICE_NAME" --region "$REGION"
```

View service details:
```bash
gcloud run services describe "$SERVICE_NAME" --region "$REGION"
```

## Cleanup

To destroy all infrastructure:

```bash
cd ../infrastructure
terraform destroy
```

## Troubleshooting

### Authentication Issues

If you get authentication errors:
```bash
gcloud auth login
gcloud auth configure-docker ${GCP_REGION}-docker.pkg.dev
```

### API Not Enabled

If you get "API not enabled" errors:
```bash
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable artifactregistry.googleapis.com
```

### Permission Denied

Ensure your account has the necessary roles:
- Cloud Run Admin
- Artifact Registry Admin
- Service Account User

### Build Failures

Check Docker is running:
```bash
docker ps
```

Clear Docker cache:
```bash
docker system prune -a
```

## Architecture

```
┌─────────────┐
│   Browser   │
└──────┬──────┘
       │ HTTPS
       ▼
┌─────────────────┐
│  Cloud Run      │
│  (nginx)        │
│  ┌───────────┐  │
│  │ Static    │  │
│  │ Web App   │  │
│  └───────────┘  │
└─────────────────┘
```

The application is a static web app served by nginx in a Docker container running on Cloud Run.

## Cost Estimation

Cloud Run pricing (as of 2024):
- **Free tier**: 2 million requests/month
- **CPU**: $0.00002400/vCPU-second
- **Memory**: $0.00000250/GiB-second
- **Requests**: $0.40/million requests

With the default configuration (512Mi memory, 1 vCPU), costs are minimal for low to moderate traffic.

## Support

For issues or questions:
1. Check the [Cloud Run documentation](https://cloud.google.com/run/docs)
2. Review the [Terraform Google provider docs](https://registry.terraform.io/providers/hashicorp/google/latest/docs)
3. Check application logs in Cloud Console
