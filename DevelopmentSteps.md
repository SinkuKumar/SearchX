# SearchX - Development Steps

Add a brief description of the project here.

## Pre-requisites

- **Note** The following steps are for Windows OS. If you are using a different OS, please refer to the respective documentation.

- Download and install
  1. Install [Node.js](https://nodejs.org/en/download/)
  2. Install [Python](https://www.python.org/downloads/)
  3. Install [Docker](https://docs.docker.com/get-docker/)
  4. Install [Qdrant](https://qdrant.tech/documentation/quickstart/)
  5. Install [VSCode](https://code.visualstudio.com/download)
  6. Install [Git](https://git-scm.com/downloads)

- Setup Qdrant from the official documentation
  1. Install Qdrant
  2. Start Qdrant
  3. Create a collection
  4. Insert data into the collection
  5. Query the collection

- Create a new repository in GitHub
  1. Create a repository in [GitHub](https://github.com/SinkuKumar/SearchX)
  2. Clone the repository your local machine
  3. Open the repository in VSCode

- Create a new backend project
  1. Create a new folder `backend` in the repository `mkdir backend`
  2. Go to the backend folder `cd backend`
  3. Create python virtual environment `python -m venv venv`
  4. Activate the virtual environment `.\venv\Scripts\activate`
  5. Install Django and Django Rest Framework `pip install django djangorestframework`
  6. Install dot env library `pip install python-dotenv`
  7. Freeze the requirements `pip freeze > requirements.txt`
  8. Create a new Django project `django-admin startproject SearchX .`
  9. Populate database table `python manage.py migrate`
  10. Create a superuser `python manage.py createsuperuser`
  11. Run the Django server `python manage.py runserver`
  12. Login to the Django admin panel `http://127.0.0.1:8000/admin/`


- Create a new frontend project
  1. Create a new folder `frontend` in the repository `mkdir frontend`
  2. Go to the frontend folder `cd frontend`
  3. Create a new vite project `pnpm create vite@latest`
  4. Use the following options
    - Project name: SearchX
    - Package name: searchx
    - Select a framework: React
    - Select a variant: JavaScript
  5. Follow the instructions to run the project

**Commit**: Initialize SearchX project with Django backend and Vite + React frontend