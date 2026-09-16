# StyleHub E-Commerce Website

## Project Overview

StyleHub is a responsive e-commerce website created as a hands-on DevOps project. The project demonstrates how a web application can be containerized with Docker and automated through a Jenkins CI/CD pipeline.

The application provides a simple shopping interface for browsing products and demonstrates the integration of source code management, Docker, Jenkins, automated testing, and deployment.

---

## Technologies Used

* **HTML5** – Website structure
* **CSS3** – Styling and responsive design
* **JavaScript** – Website functionality
* **Git** – Source code management
* **GitHub** – Remote code repository
* **Docker** – Application containerization
* **Nginx** – Web server
* **Jenkins** – CI/CD automation
* **Linux/Ubuntu** – Development environment
* **VS Code** – Development and project management

---

## Project Structure

```text
stylehub-ecommerce/
├── css/
│   └── style.css
├── images/
│   └── product images
├── js/
│   └── script.js
├── screenshots/
│   ├── Console-output.png
│   ├── Jenkins-success.png
│   ├── Poll-scm.png
│   ├── Stylehub-website.png
│   └── pipeline-stages.png
├── Dockerfile
├── index.html
└── README.md
```

---

## Application

The StyleHub website is a static e-commerce application containing:

* Navigation menu
* Product sections
* Product images
* Shopping interface
* Responsive webpage layout
* JavaScript functionality

The website is served using Nginx inside a Docker container.

---

## Docker Configuration

The application is packaged into a Docker image so that it can run consistently across environments.

### Build the Docker Image

```bash
docker build -t stylehub .
```

### Run the Container

```bash
docker run -d --name stylehub-web -p 8091:80 stylehub
```

The website can then be accessed at:

```text
http://localhost:8091
```

### Check the Running Container

```bash
docker ps
```

### Stop the Container

```bash
docker stop stylehub-web
```

### Remove the Container

```bash
docker rm stylehub-web
```

---

## Jenkins CI/CD Pipeline

Jenkins is used to automate the application workflow.

The pipeline integrates the GitHub repository with Jenkins and performs automated stages for building, testing, and deploying the Dockerized website.

### Pipeline Stages

The StyleHub Jenkins pipeline includes stages such as:

1. **Checkout**

   * Retrieves the latest source code from GitHub.

2. **Build**

   * Builds the StyleHub Docker image.

3. **Test**

   * Starts a test container and verifies that the website is accessible.

4. **Cleanup**

   * Removes the temporary test container.

5. **Deploy**

   * Runs the application container for deployment.

---

## Jenkins Pipeline Workflow

```text
GitHub
   │
   ▼
Jenkins
   │
   ├── Checkout
   │
   ├── Build Docker Image
   │
   ├── Run Test Container
   │
   ├── Test Website
   │
   ├── Cleanup
   │
   └── Deploy
          │
          ▼
     StyleHub Website
          │
          ▼
      Nginx Container
```

---

## Source Code Repository

GitHub Repository:

https://github.com/taiwoj14/stylehub-ecommerce

---

## Screenshots

### StyleHub Website

### Jenkins Pipeline Stages

### Jenkins Successful Build

### Jenkins Console Output

### Jenkins Poll SCM

---

## DevOps Skills Demonstrated

This project demonstrates practical experience with:

* Git and GitHub
* Linux command-line operations
* Docker containerization
* Nginx web server
* Jenkins pipeline automation
* CI/CD concepts
* Automated application testing
* Container lifecycle management
* Troubleshooting deployment issues
* Source-code version control
* Infrastructure and deployment workflow documentation

---

## Learning Objectives

The main objectives of this project were to:

* Build and manage a web application project.
* Use Git and GitHub for version control.
* Containerize a web application using Docker.
* Configure Jenkins to automate the application workflow.
* Implement automated testing within a Jenkins pipeline.
* Deploy the application using Docker.
* Document the DevOps workflow using GitHub.

---

## Author

**Taiwo Joseph**

Junior AWS Cloud & DevOps / SRE Engineer

GitHub:
https://github.com/taiwoj14

````

