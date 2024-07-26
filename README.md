## <a  name="introduction">🎉 Introduction</a>

**postpeak** is a dynamic blogging platform built with Next.js and Prisma. Users can sign up, log in, create posts, view other posts, comment on them, and filter posts by category. This application provides a user-friendly interface for managing and exploring blog content.

## <a  name="tech-stack">⚙️ Tech Stack</a>

- Next.js

- JavaScript

- Prisma

- Firebase

## <a  name="features">🔋 Features</a>

👉 **User Authentication:** Secure login and sign-up functionality using Firebase Authentication.

👉 **Create a Post:** Users can create new blog posts with text and images.

👉 **View Posts:** Users can view a list of all posts with detailed content.

👉 **Comment on Posts:** Users can leave comments on individual posts.

👉 **Filter by Category:** Easily filter and view posts based on categories.

## <a  name="prerequisites">🔧 Prerequisites</a>

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)

- [Node.js](https://nodejs.org/en)

- [npm](https://www.npmjs.com/) (Node Package Manager)

- Prisma CLI

## <a  name="installation">🚀 Installation</a>

1.  Clone the repository:

```bash
git clone https://github.com/yourusername/next-blog-app.git
```

2.  Navigate to the project directory:

```bash
cd next-blog-app
```

3.  Install dependencies:

```bash
npm install
```

4.  Set up Prisma:

```bash
npx prisma generate
```

5.  Create a new file named `.env` in the root of your project and add the following content:

```bash
#NEXTAUTH

NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_ID=your_google_id
GOOGLE_SECRET=your_google_secret
NEXTAUTH_URL=your_nextauth_url


#MONGODB
DATABASE_URL=your_mongodb_uri

#NEXT
NEXT_PUBLIC_URL=your_public_url

#FIREBASE
FIRE_BASE=your_firebase_api_key
```

6.  Run the development server:

```bash
npm run dev
```

7.  Open http://localhost:3000 with your browser to see the result.

## <a  name="usage">📘 Usage</a>

- **Authentication:** Users can sign up and log in using Firebase Authentication.

- **Post Creation:** Authenticated users can create new blog posts.

- **Viewing Posts:** Browse through a list of blog posts and view detailed content.

- **Commenting:** Leave comments on posts to engage with content.

- **Filtering:** Use categories to filter and find posts relevant to your interests.
