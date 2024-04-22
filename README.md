
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
