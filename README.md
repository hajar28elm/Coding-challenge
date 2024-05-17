# BlogApp

BlogApp is a simple and intuitive blog management application where users can list, add, update, delete, and view details of blogs. Additionally, users can search for blogs by their title or content and navigate through the blog posts using pagination.

## Features

- **List Blogs**: View all the blogs in a paginated list.
- **Add Blog**: Create a new blog post with a title and content.
- **Update Blog**: Edit the title and content of existing blog posts.
- **Delete Blog**: Remove unwanted blog posts.
- **View Blog Details**: Click on a blog post to see its full details.
- **Search Blogs**: Search for blog posts by their title or content.
- **Pagination**: Navigate through blog posts with ease using pagination.

## Design Decisions and Assumptions

- **Responsiveness**: The site is designed to be responsive and works well on various screen sizes.
- **Simple Design**: The application features a clean and simple design to enhance user experience.
- **Data Persistence**: While create, update, and delete operations work, the changes may not be immediately reflected on the page. A manual page refresh is required to see the modifications.


## Technologies Used

- **Frontend**:  Next.js
- **Backend**: Next.js
- **Database**: MongoDB
- **ORM**: Prisma
- **Styling**: Bootsrap
- **Testing**: Jest, React Testing Library

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/hajar28elm/Coding-challenge.git
    ```

2. Navigate to the project directory:

    ```sh
    cd Coding-challenge
    ```

3. Install dependencies:

    ```sh
    npm install
    ```

### Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```plaintext
DATABAE_URL=your_mongodb_connection_string.
```

### Running the application
   ```sh
   npm run dev
   ```
### Running tests
   ```sh
   npm test
   ```

This README provides a clear overview of the application, including its features, technologies used, installation instructions, and more.

