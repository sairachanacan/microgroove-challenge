
## Running the Application

Follow these steps to run the Angular app locally:

1. **Install Node.js and npm**  
   Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

2. **Install Angular CLI**  
   If Angular CLI is not installed globally, run:  
   ```bash
   npm install -g @angular/cli

3. **Install project dependencies**
   Navigate to your project folder and run:
   ```bash
   npm install -g @angular/cli

4. **Run the development server**
   Start the Angular application:
   ```bash
   ng serve

5. **Run the production build**
   Start the Angular application.
   The compiled files will be in the dist/ folder.
   ```bash
   ng build

6. **Open in browser**: 
  Open application in browser 
    ```bash
    http://localhost:4200

# Manual Test Scenarios for Initials App (Tested)

---

## 1. Page Load
- Text input and submit button are visible.
- Input and button are centered horizontally.
- Submit button is to the right of the input.

---

## 2. Submitting a Name
- Enter a name → Click the submit button → API is called with the entered name.
- Input stays visible for new entries.
- Resulting SVG image shows.
- Multiple submissions build a history of images.

---

## 3. Loading State
- If API is slow → Loading animation appears over input/button.
- Loader disappears when API responds.
- Input and button are inactive while loading.

---

## 4. History Navigation
- Back arrow shows previous images.
- Forward arrow shows newer images.
- Back arrow disabled at first image.
- Forward arrow disabled at last image.
- Navigating history does not call API again.

---

## 5. Error Handling
- Empty input → API is not called.

---

## 6. State Handling
- Submitting updates UI via Subjects/BehaviorSubjects.
- API responses update the image and history.
- History navigation updates images without API calls.

---

## 7. UI / UX
- Layout stays centered and responsive.
- Pressing Enter submits the form.
- Buttons show focus states for accessibility.
- Loader is visible when the API is in-progress.
- In the mobile view (less than 768px) layout with one column should be shown.
- In the tablet and above layout with two column should be shown.
