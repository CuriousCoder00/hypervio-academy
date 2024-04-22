# Project Title

A brief description of what this project does and who it's for

Our eLearning Platform represents a comprehensive solution designed to enhance the educational 
experience for students and educators. This digital learning environment caters to the contemporary 
demands of education by offering a dynamic platform where students can access a diverse range of 
educational materials, including video lectures and written resources. Simultaneously, teachers can 
effortlessly contribute to the platform by uploading their instructional content.
The platform's architecture is built with user-centric principles, providing an intuitive interface for 
easy navigation. Students benefit from a multimedia-rich learning experience, gaining access to a 
repository of video lectures and educational articles. Our platform encourages active engagement 
through interactive features, fostering a sense of community and collaboration among learners. 
For educators, the platform offers a streamlined content management system that facilitates the 
uploading and organization of instructional materials. This includes the ability to categorize content, 
track student progress, and receive valuable feedback. The platform is adaptable to various subjects 
and learning levels, promoting inclusivity and customization. 
In summary, our eLearning Platform seeks to revolutionize education by embracing technology to 
create a dynamic, accessible, and collaborative digital space. This abstract provides a glimpse into 
the key functionalities and user benefits that define our project, positioning it as a forward-thinking 
solution for modern educational needs.

## Features

- Features: Highlighting the key features of the Web Application
- Browse & Filter Courses
- Purchase Courses using Stripe
- Mark Chapters as Completed or Uncompleted
- Progress Calculation of each Course
- Student Dashboard
- Teacher mode
- Create new Courses
- Create new Chapters
- Easily reorder chapter position with drag n’ drop
- Upload thumbnails, attachments and videos using UploadThing
- Video processing using Mux
- HLS Video player using Mux
- Rich text editor for chapter description
- Authentication using Clerk
- ORM using Prisma
- MySQL database

## How to run project

Download the zip file or clone the repository using command:

```git clone https://github.com/CuriousCoder00/hypervio-academy.git```

Install all the dependencies:

```npm install```

Create a ```.env``` file and put all the enviorment variables into it

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

MUX_TOKEN_ID=
MUX_TOKEN_SECRET=

STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_TEACHER_ID=
```

Now run the project:

```npm run dev```

Open the URL in your browser:

```https://localhost:3000/```
