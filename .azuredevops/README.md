# Azure DevOps Pipeline Configuration

This project includes an Azure DevOps pipeline configuration for automated build and deployment.

## Pipeline Overview

The pipeline consists of two stages:

### 1. Build Stage
- Copies all website files (HTML, CSS, JS, images)
- Excludes unnecessary files (.git, .md, etc.)
- Archives the website into a ZIP file
- Publishes the artifact for deployment

### 2. Deploy Stage
- Downloads the build artifact
- Extracts the website files
- Ready for deployment to Azure services

## Setup Instructions

### Prerequisites
- Azure DevOps account and project
- Git repository connected to Azure DevOps
- Azure subscription (for deployment)

### Step 1: Connect Repository
1. Go to your Azure DevOps project
2. Navigate to **Pipelines** > **Create Pipeline**
3. Select your repository source (Azure Repos Git, GitHub, etc.)
4. Choose **Existing Azure Pipelines YAML file**
5. Select `azure-pipelines.yml`

### Step 2: Configure Pipeline Variables
Update these variables in the YAML file if needed:
```yaml
variables:
  buildConfiguration: 'Release'
  artifactName: 'nurse-website'
```

### Step 3: Choose Deployment Method

#### Option A: Deploy to Azure Storage (Static Website)
1. Uncomment the `AzureFileCopy@4` task in the YAML
2. Replace placeholders:
   - `<Your-Azure-Subscription>`: Your Azure service connection name
   - `<Your-Storage-Account-Name>`: Your storage account name
3. Ensure static website hosting is enabled on your storage account

#### Option B: Deploy to Azure App Service
1. Uncomment the `AzureWebApp@1` task in the YAML
2. Replace placeholders:
   - `<Your-Azure-Subscription>`: Your Azure service connection name
   - `<Your-Web-App-Name>`: Your App Service name

### Step 4: Create Service Connection
1. Go to **Project Settings** > **Service connections**
2. Click **New service connection**
3. Select **Azure Resource Manager**
4. Choose authentication method (Service Principal recommended)
5. Name it and save

### Step 5: Create Environment
1. Go to **Pipelines** > **Environments**
2. Click **Create environment**
3. Name it `production` (or update the YAML)
4. Add approvals if needed for production deployments

## Pipeline Triggers

The pipeline runs automatically when:
- Code is pushed to `main` or `master` branch
- Changes are made (excluding README.md, CUSTOMIZATION.md, .gitignore)

## Manual Deployment

To deploy manually:
1. Go to **Pipelines**
2. Select your pipeline
3. Click **Run pipeline**
4. Choose the branch and run

## Deployment Outputs

After successful deployment:
- **Azure Storage**: Website available at `https://<storage-account>.z13.web.core.windows.net/`
- **Azure App Service**: Website available at `https://<app-name>.azurewebsites.net/`

## Custom Deployment

If you want to deploy to a custom server or FTP:
1. Add appropriate deployment tasks to the YAML
2. Configure credentials in Azure DevOps Library
3. Update the deploy stage accordingly

## Troubleshooting

### Build Fails
- Check the build logs for specific errors
- Ensure all file paths are correct
- Verify repository permissions

### Deployment Fails
- Verify Azure service connection is configured
- Check Azure subscription permissions
- Ensure target service (Storage/App Service) exists

### Files Missing After Deployment
- Review the `Contents` filter in `CopyFiles@2` task
- Check if files are being excluded unintentionally

## Additional Resources

- [Azure Pipelines Documentation](https://docs.microsoft.com/en-us/azure/devops/pipelines/)
- [Deploy to Azure Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blob-static-website)
- [Deploy to Azure App Service](https://docs.microsoft.com/en-us/azure/app-service/)
