---

### 4. Backend Microservices Repository (Catalog, User, Media)


# Cloud-Native E-Library - Backend Microservices

### Student Information
* **Name:** Mahesha Dinushan Heenatigala
* **Student Number:** 2301692062
* **Slack Handle:** Mahesha Dinushan
* **GCP Project ID:** project-c341f623-6f55-4fea-bae

---

## Project Description
This repository contains the core business logic domains for the E-Library platform, structured as independent microservices. 
* **Catalog Service:** Manages book metadata, inventory, and search functionalities.
* **Media Service:** Handles the uploading, storage, and retrieval of multi-media files (book cover images and PDF documents).
* **User Service:** Manages user profiles, roles, and authentication.

## Technology Stack
* **Runtime:** Java 25
* **Framework:** Spring Boot 3.x, Spring Data JPA, Spring Web
* **Database:** [Specify MySQL or PostgreSQL here]
* **Security:** JWT (JSON Web Tokens)
* **Cloud Integration:** Eureka Client, Config Client

## Prerequisites
* Java 25 JDK & Maven
* A running instance of the configured relational database.
* Infrastructure services (Config Server & Eureka) must be running.

## Setup & Getting Started

1. **Database Setup:** Ensure your database server is running. The database connection credentials are dynamically pulled from the Config Server. Ensure the schemas match the configuration.

2. **Clone the repository:**
   ```bash
   git clone https://github.com/MaheshaDinu/cloud-native-e-library-services-parent.git
Run the Services:
Navigate into each service directory individually and run them. You can run them in multiple terminal windows:

Bash
# Terminal 1
cd user-service
mvn spring-boot:run

# Terminal 2
cd catalog-service
mvn spring-boot:run

# Terminal 3
cd media-service
mvn spring-boot:run
Verification: Check the Eureka Dashboard (http://localhost:8761) to ensure all three services have successfully registered.
