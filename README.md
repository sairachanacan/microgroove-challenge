# Manual Test Scenarios for Initials App (Tested)

---

## 1. Page Load
- Text input and submit button are visible.
- Input and button are centered horizontally.
- Submit button is to the right of the input.

---

## 2. Submitting a Name
- Enter a name → API is called with the correct name.
- Input stays visible for new entries.
- Resulting SVG image shows below the input.
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
- Loader is visible but not obstructive.
