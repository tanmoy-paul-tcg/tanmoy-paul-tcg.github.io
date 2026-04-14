# Materials Modelling Laboratory Website

The official website for Dr. Tanmoy Paul's Materials Modelling Laboratory at TCG CREST. 

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Frontend**: React, React-Bootstrap, FontAwesome
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Authentication**: JWT-based secure cookies
- **Image Hosting**: [ImgBB API](https://api.imgbb.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started Locally

### Prerequisites

- Node.js (v18+)
- A MongoDB Atlas cluster
- An ImgBB API Key

### Installation

1. **Clone the repository and install dependencies:**
   ```bash
   git clone https://github.com/tanmoy-paul-tcg/tanmoy-paul-tcg.github.io.git
   cd tanmoy-paul-tcg.github.io
   npm install
   ```

2. **Configure Environment Variables:**
   Create a `.env.local` file in the root directory and add the following:
   ```env
   # MongoDB Atlas Connection
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/tcg-lab?retryWrites=true&w=majority

   # Admin Authentication
   ADMIN_PASSWORD=your_secure_password
   JWT_SECRET=a_random_32_character_string_for_jwt_signing

   # ImgBB API Credentials
   IMGBB_API_KEY=your_imgbb_api_key
   ```

3. **(Optional) Seed the Database:**
   If you are setting up the project for the first time on a fresh MongoDB database, you can seed it with the initial data using:
   ```bash
   npm run seed
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the public site.  
   Open [http://localhost:3000/admin](http://localhost:3000/admin) to access the admin dashboard.

## Deployment

This website is designed for zero-config deployment on **Vercel**.

1. Import the repository into Vercel.
2. In the Vercel dashboard, navigate to **Settings > Environment Variables** and add:
   - `MONGODB_URI`
   - `ADMIN_PASSWORD`
   - `JWT_SECRET`
   - `IMGBB_API_KEY`
3. Click **Deploy**. Vercel will automatically build and launch the site.

## Migration Note

This repository previously hosted an index-based Vite application on the `gh-pages` branch. The transition to Next.js necessitates a Node.js runtime environment (like Vercel) instead of static hosting via GitHub Pages, enabling the powerful real-time admin capabilities introduced in this version.
