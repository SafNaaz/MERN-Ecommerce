# ProShop - MERN Shopping Cart App

## Setup Instructions

1. **Install MongoDB**  
   Make sure MongoDB is installed and running locally.

2. **Create `.env` File**  
   Add the following to `/proshop/.env`:
   ```
   MONGO_URI=mongodb://localhost:27017/proshop
   JWT_SECRET=very_secret
   ```

3. **Install Dependencies**  
   - In the parent folder (`/MERN-Ecommerce`):
     ```
     npm install
     ```
   - In the frontend folder (`/MERN-Ecommerce/proshop/frontend`):
     ```
     npm install
     ```

4. **Run the App**  
   Start both backend and frontend:
   ```
   npm run dev
   ```

---

**Note:**  
- MongoDB must be running locally.
- The `.env` file is required for database and JWT configuration.