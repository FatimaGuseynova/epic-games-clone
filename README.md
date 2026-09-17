# 🎮 Epic Games Clone — Frontend

A responsive **Epic Games Store frontend clone** built with React, Vite and Tailwind CSS.

The project recreates the main user interface and functionality of a modern digital game store, including game browsing, filtering, sorting, authentication flows, user account pages, news, responsive navigation and API integration.

---

## 📸 Preview
<img width="1903" height="863" alt="Снимок экрана 2026-09-17 153407" src="https://github.com/user-attachments/assets/6f24ab00-6aea-423b-87c1-12a853c782ca" />

---

## ✨ Features

* Responsive Epic Games-inspired interface
* Dynamic game catalog
* Game categories and sections
* Filtering and sorting
* Pagination
* Game details pages
* Age verification flow
* News section
* News details pages
* Login and registration
* OTP verification
* Password reset
* User profile management
* Account deletion flow
* Access and refresh token handling
* Responsive desktop and mobile navigation
* Form validation
* API integration
* Loading and error handling

---

# 🏠 Home Page

The homepage displays dynamically loaded game content in different sections.

Implemented sections include:

* Free Games
* Deals of the Week
* Discounts
* New Releases
* Upcoming Games
* Promotional content
* Game cards
* Responsive layouts

Games are categorized on the frontend according to the data received from the API.

For example:

```text
price === 0
→ Free Games

discount > 0
→ Discounts

Upcoming release
→ Upcoming Games
```
<img width="1897" height="872" alt="Снимок экрана 2026-09-17 175707" src="https://github.com/user-attachments/assets/25c628e2-d931-4a4d-84dd-74824dd0fb2d" />

---

# 🎮 Browse Games

The Browse page displays games in a responsive catalog.

Each game card can display:

* Cover image
* Game title
* Price
* Discount
* Release information
* Additional game information

Selecting a game opens its dedicated details page.

<img width="1888" height="852" alt="Снимок экрана 2026-09-17 175530" src="https://github.com/user-attachments/assets/02886bc1-3ef6-460c-8dbf-dc4a805c57ca" />

---

# 🔎 Filtering & Sorting

The Browse page contains a dynamic filtering system.

Users can filter games by:

* Event
* Genre
* Feature
* Type
* Platform
* Subscription

The filtering logic supports combining multiple categories.

Filters inside the same category can work with **OR logic**, while different filter categories can be combined using **AND logic**.

Example:

```text
Action OR Adventure
        AND
Windows
        AND
Multiplayer
```

The page also supports sorting by:

1. All
2. New Release
3. Coming Soon
4. Alphabetical
5. Price: High to Low
6. Price: Low to High

The number of selected filters is displayed dynamically in the interface.

<img width="1895" height="847" alt="Снимок экрана 2026-09-17 175823" src="https://github.com/user-attachments/assets/47e0f45c-96ea-4bd8-b27e-1034846b5eb8" />

---

# 📄 Pagination

The game catalog uses paginated API data.

The frontend receives information about:

* Current page
* Number of items
* Items per page
* Total number of pages

The pagination logic prevents unnecessary requests for pages that do not exist.

This allows the application to load game data page by page.

<img width="1896" height="845" alt="Снимок экрана 2026-09-17 175907" src="https://github.com/user-attachments/assets/c5d71ef9-9457-40b6-a04d-ffa15380e80b" />

---

# 🎯 Game Details

Each game can be opened on a separate details page.

The selected game is passed to the details route and displayed using the available game information.

The page includes elements such as:

* Game image
* Title
* Price
* Discount
* Description
* Game information
* Action buttons
* Age restriction information

<img width="1897" height="863" alt="Снимок экрана 2026-09-17 180001" src="https://github.com/user-attachments/assets/aeaf49ca-ce1d-458a-9e8f-c8a5302aaa68" />


---

# 🔞 Age Verification

Age-restricted games use a separate verification flow.

When a game requires an `18+` restriction, the user is redirected to an age verification page before accessing the restricted content.

This functionality is handled on the frontend through routing and conditional logic.

<img width="1902" height="820" alt="Снимок экрана 2026-09-17 180025" src="https://github.com/user-attachments/assets/85133d0c-fe5a-419d-bb74-52585823d37a" />

---

# 📰 News

The project includes a dynamic News section.

News data is loaded through the API and displayed as cards.

The News page includes:

* News images
* Article titles
* Article previews
* Publication time
* Pagination
* Responsive layout

Each article can be opened on a dedicated News Details page.

### 📷 Add screenshot here

`./screenshots/news.png`

<img width="1898" height="853" alt="Снимок экрана 2026-09-17 180100" src="https://github.com/user-attachments/assets/ddff6cfb-c4f2-4dd0-8e2d-e31da1b35250" />

---

# 🔐 Authentication

The frontend includes a complete authentication flow.

Implemented pages and functionality include:

* Login
* Registration
* OTP verification
* Password reset
* Logout
* Authentication state
* Token management

The frontend communicates with authentication API endpoints and updates the interface according to the user's authentication state.

<img width="1893" height="854" alt="Снимок экрана 2026-09-17 180140" src="https://github.com/user-attachments/assets/227bb10c-184d-4697-837a-b50d3d6d61f5" />

<img width="1892" height="860" alt="Снимок экрана 2026-09-17 180204" src="https://github.com/user-attachments/assets/713314d0-f2dd-48db-a673-1a6904a16709" />

---

# 🔑 Token Management

The application uses:

* Access Token
* Refresh Token

Authentication tokens are stored in `localStorage`.

Protected requests include the access token.

When the access token expires, the frontend attempts to refresh it using the refresh token.

If refreshing fails, authentication data is removed from `localStorage` and the user is treated as logged out.

Simplified flow:

```text
Login
  ↓
Access Token + Refresh Token
  ↓
localStorage
  ↓
Protected API Request
  ↓
Access Token expires
  ↓
Refresh Token
  ↓
New Access Token
```

---

# 👤 User Profile

Authenticated users have access to a personal account section.

The account interface includes:

* Account Information
* Personal Details
* Downloads
* Password management
* Profile settings
* Account deletion

The current user's information is retrieved through the authenticated user API instead of loading a public list of users.

<img width="1898" height="865" alt="Снимок экрана 2026-09-17 180311" src="https://github.com/user-attachments/assets/8a167af0-5ff7-434d-8f56-7e35fcf43e88" />

---

# ✏️ Personal Details

Users can update their personal information through the profile settings.

The form handles:

* Input values
* Validation
* Submission
* API requests
* Success state

After a successful update, a temporary success notification is displayed and automatically disappears after several seconds.

<img width="1891" height="865" alt="Снимок экрана 2026-09-17 180429" src="https://github.com/user-attachments/assets/3b51ebcd-e615-4d55-b7c4-2299f2ec30e0" />

---

# 🔑 Password Reset

The password reset page allows users to enter a new password and confirm it.

The form validates the entered information before sending the request.

The reset request uses a token-based authentication flow.

Example data sent by the frontend:

```json
{
  "token": "...",
  "newPassword": "...",
  "repeatPassword": "..."
}
```

---

# 🗑️ Account Deletion

The account page includes an account deletion flow.

Before deleting the account, the frontend displays a confirmation dialog.

The current authenticated user's ID is used for the deletion request.

The interface does not provide functionality for deleting other users.

<img width="1886" height="859" alt="Снимок экрана 2026-09-17 180542" src="https://github.com/user-attachments/assets/2469117e-e1ee-455d-8319-cd470d328251" />

---

# 🍔 Responsive Navigation

The project includes separate navigation behavior for desktop and mobile devices.

The mobile version uses a Drawer-based navigation menu.

The mobile profile section also has a dedicated layout adapted for smaller screens.

Responsive navigation includes:

* Hamburger menu
* Mobile Drawer
* Profile menu
* User avatar/initial
* Navigation links
* Responsive header

<img width="231" height="524" alt="Снимок экрана 2026-09-17 180639" src="https://github.com/user-attachments/assets/ccb01412-5e2b-4c67-a3ce-793af749043b" />

---

# 📱 Responsive Design

The entire interface was developed to adapt to different screen sizes.

Responsive behavior was implemented for:

* Desktop
* Tablet
* Mobile

Tailwind CSS breakpoints are used to adjust:

* Grid layouts
* Spacing
* Typography
* Navigation
* Game cards
* Profile pages
* Drawers
* Buttons
* Content sections

<img width="1905" height="855" alt="Снимок экрана 2026-09-17 180829" src="https://github.com/user-attachments/assets/7687f9a2-cc0d-46dc-afa7-9b3bc06c0133" />

<img width="854" height="670" alt="Снимок экрана 2026-09-17 180818" src="https://github.com/user-attachments/assets/68fce694-c455-4f9d-9472-194fcb8a19dd" />

<img width="237" height="527" alt="Снимок экрана 2026-09-17 180739" src="https://github.com/user-attachments/assets/8dcda2c5-3e4a-4bf2-bf27-693488ceec5c" />

---

# 🌐 Language Selection

The header includes a language selection dropdown.

The frontend provides language switching functionality through the Google Translate integration.

Available language options include:

* English
* Russian
* German

<img width="951" height="870" alt="Снимок экрана 2026-09-17 180940" src="https://github.com/user-attachments/assets/dc9886ab-fd39-4e6b-9bb2-7f55a2d62e9c" />

---

# 📝 Forms & Validation

Forms throughout the application are handled using **Formik** and **Yup**.

Formik is used for:

* Form state
* Input handling
* Form submission
* Validation state

Yup is used for:

* Required fields
* Password validation
* Password confirmation
* Input validation
* Error messages

This approach keeps form logic structured and reusable.

---

# 🧩 UI Components

The application is built using reusable React components.

Different parts of the interface are separated into components such as:

* Header
* Footer
* Game Cards
* Sliders
* Drawers
* User Dropdown
* Mobile Profile
* Filters
* Forms
* Notifications
* Account sections

This component-based structure makes the application easier to maintain and extend.

---

# 🔄 API Integration

The frontend communicates with REST API endpoints using the **Fetch API**.

Separate API functions are used for different resources and operations.

Examples include:

```text
/products
/news
/auth
/users
```

The API responses are processed as JSON and then used to update React state and render the interface.

Simplified data flow:

```text
React Component
      ↓
API Function
      ↓
REST API
      ↓
JSON Response
      ↓
React State
      ↓
UI
```

---

# 🛠️ Technologies

| Technology        | Usage                                   |
| ----------------- | --------------------------------------- |
| React             | Building the user interface             |
| Vite              | Development and build tool              |
| JavaScript (ES6+) | Application logic                       |
| Tailwind CSS      | Styling and responsive design           |
| React Router      | Client-side routing                     |
| Fetch API         | API requests                            |
| Formik            | Form management                         |
| Yup               | Form validation                         |
| Ant Design        | Drawer and UI components                |
| React Icons       | Icons                                   |
| Lucide React      | Icons                                   |
| Swiper            | Sliders and carousels                   |
| JWT               | Authentication                          |
| localStorage      | Client-side token and user data storage |

---

# 🧠 Frontend Logic

The project contains several types of frontend logic.

### Conditional Rendering

UI elements change depending on application state.

For example:

```text
Authenticated
    ↓
Profile / Account

Not authenticated
    ↓
Sign In
```

### State Management

React state is used to control:

* API data
* Loading states
* Filters
* Sorting
* Pagination
* Authentication state
* User information
* Drawer visibility
* Notifications
* Form state

### Routing

React Router is used to create separate application pages such as:

```text
/
├── browse
├── detail
├── news
├── news-details
├── login
├── register
├── account
├── personal-details
└── reset-password
```

---

# 📂 Project Structure

A simplified project structure:

```text
src/
│
├── api/
│   ├── ProductsGet.js
│   ├── NewsGet.js
│   ├── UpdateProfile.js
│   ├── NewPassword.js
│   └── ...
│
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Cards/
│   ├── Drawer/
│   └── ...
│
├── pages/
│   ├── Home/
│   ├── Browse/
│   ├── Detail/
│   ├── News/
│   ├── Account/
│   ├── Login/
│   └── Register/
│
├── images/
│
├── App.jsx
└── main.jsx
```

---

# 📚 What I Practiced

This project allowed me to practice:

* React component architecture
* React Hooks
* Client-side routing
* REST API integration
* Authentication flows
* JWT token handling
* Access and refresh tokens
* localStorage
* CRUD operations from the frontend
* Form validation
* Dynamic filtering
* Sorting
* Pagination
* Conditional rendering
* Responsive web development
* Reusable components
* API error handling
* Loading states
* Mobile-first UI adaptation

---

# 🎯 Project Goals

The main goals of the project were to:

* Build a complex React application
* Recreate a real-world game store interface
* Practice working with REST APIs
* Implement authentication flows
* Build dynamic filtering and sorting
* Work with paginated API responses
* Create responsive interfaces
* Practice form validation
* Build reusable React components
* Connect frontend functionality with external API services
