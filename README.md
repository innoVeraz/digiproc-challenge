# DigiProc Product Showcase

## Tech Stack

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Radix UI

### Backend

- MongoDB
- Next.js API Routes

## Key Decisions and Trade-offs

1. **MongoDB for Data Storage**: MongoDB Atlas was chosen simply cause it sparked more joy after I had a first thought of using prisma and postgres as I am familiar with that setup and I also got a tip about using SQLite but finally came to this decision. It is cloudbased which I have never tried. It comes with safety, scalability and maintenance and was also a good match for Next.

2. **Radix UI for Cart Modal**: Radix UI provides accessible and customizable components, and the Dialog component was ideal for building the cart modal. A trade-off here is that Radix UI requires customization through CSS, so Tailwind CSS was integrated to handle modal styling.

3. **State Management**: Cart state management is handled through React Context (`CartContext`). While this approach is suitable for a small project, it may become less scalable if the project grows and requires complex cart features (e.g., syncing cart state with a backend). For larger applications, libraries like Redux or Zustand could be considered.
