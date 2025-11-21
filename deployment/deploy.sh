#!/bin/bash

# Ulrich Kotze Website - Cloud Run Deployment Script
# This script builds and deploys the Ulrich Kotze Website to Google Cloud Run

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
PROJECT_ID="${GCP_PROJECT_ID:-kotze-household-app}"
REGION="${GCP_REGION:-us-central1}"
SERVICE_NAME="${SERVICE_NAME:-ulrich-kotze-website}"
APP_DIR="../website"

# Function to print colored messages
print_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if PROJECT_ID is set
if [ -z "$PROJECT_ID" ]; then
    print_error "GCP_PROJECT_ID environment variable is not set"
    echo "Please set it with: export GCP_PROJECT_ID=your-project-id"
    exit 1
fi

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    print_error "gcloud CLI is not installed"
    echo "Please install it from: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Check if user is authenticated
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" &> /dev/null; then
    print_error "Not authenticated with gcloud"
    echo "Please run: gcloud auth login"
    exit 1
fi

print_info "Starting deployment to Cloud Run..."
print_info "Project: $PROJECT_ID"
print_info "Region: $REGION"
print_info "Service: $SERVICE_NAME"

# Set the project
print_info "Setting GCP project..."
gcloud config set project "$PROJECT_ID"

# Enable required APIs
print_info "Enabling required Google Cloud APIs..."
gcloud services enable \
    cloudbuild.googleapis.com \
    run.googleapis.com \
    artifactregistry.googleapis.com \
    --quiet

# Get the Artifact Registry repository name from Terraform output
print_info "Getting Artifact Registry repository..."
cd ../infrastructure
REPO_NAME=$(terraform output -raw artifact_registry_repository 2>/dev/null || echo "ulrich-kotze-website")
cd ../deployment

# Configure Docker to use gcloud as a credential helper
print_info "Configuring Docker authentication..."
gcloud auth configure-docker "${REGION}-docker.pkg.dev" --quiet

# Build the Docker image
IMAGE_NAME="${REGION}-docker.pkg.dev/${PROJECT_ID}/${REPO_NAME}/${SERVICE_NAME}"
IMAGE_TAG="latest"
FULL_IMAGE_NAME="${IMAGE_NAME}:${IMAGE_TAG}"

print_info "Building Docker image..."
print_info "Image: $FULL_IMAGE_NAME"

cd "$APP_DIR"
docker build --platform linux/amd64 -t "$FULL_IMAGE_NAME" -f ../deployment/Dockerfile .

# Push the image to Artifact Registry
print_info "Pushing image to Artifact Registry..."
docker push "$FULL_IMAGE_NAME"

# Deploy to Cloud Run
print_info "Deploying to Cloud Run..."
gcloud run deploy "$SERVICE_NAME" \
    --image "$FULL_IMAGE_NAME" \
    --platform managed \
    --region "$REGION" \
    --allow-unauthenticated \
    --port 80 \
    --memory 512Mi \
    --cpu 1 \
    --min-instances 0 \
    --max-instances 10 \
    --quiet

# Get the service URL
SERVICE_URL=$(gcloud run services describe "$SERVICE_NAME" \
    --platform managed \
    --region "$REGION" \
    --format 'value(status.url)')

print_info "Deployment completed successfully!"
echo ""
echo "=========================================="
echo -e "${GREEN}Service URL:${NC} $SERVICE_URL"
echo "=========================================="
echo ""
print_info "You can now access your application at the URL above"
