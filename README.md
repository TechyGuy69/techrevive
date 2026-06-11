
# TECHREVIVE - Professional Computer Support

TECHREVIVE is a premium web application for a premier computer service brand based in Ashoknagar. It provides users with instant AI-powered troubleshooting, professional service listings, and a seamless booking experience.

## 🚀 Features

- **AI Smart Troubleshooter**: Instant diagnostic advice using Google Gemini AI to help users identify PC issues before booking. Includes humorous error handling for a friendly user experience.
- **Service Catalog**: Detailed information and transparent pricing for software and hardware services (Windows installation, PC optimization, Custom builds, etc.).
- **Service Booking**: Interactive contact form powered by Firebase Firestore for prompt doorstep service requests.
- **Mobile Optimized**: A fully responsive, high-performance design specifically tuned to remove excessive gaps and provide a compact, professional experience on smartphones.
- **Direct Connect**: Integrated one-tap buttons for instant WhatsApp, Phone, and Email support.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS & ShadCN UI
- **Backend**: Firebase (Firestore & Authentication)
- **AI Engine**: Genkit with Google Gemini 2.5 Flash
- **Icons**: Lucide React
- **Language**: TypeScript

## 🏁 Getting Started

### Prerequisites

- Node.js (Latest LTS)
- A Firebase Project
- Google AI Studio API Key (for Gemini)

### Environment Variables

To enable the AI Troubleshooting feature, you must provide a Gemini API key. Create a `.env.local` file in the root directory and add:

```env
GOOGLE_GENAI_API_KEY=your_gemini_api_key_here
RESEND_API_KEY=your_resend_api_key_here
```

**Important:** For production environments (like GitHub Secrets), ensure the secret name is exactly `GOOGLE_GENAI_API_KEY`.

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:9002](http://localhost:9002) in your browser.

## 📂 Project Structure

- `src/app`: Next.js App Router pages, layouts, and global styles.
- `src/components`: Reusable UI components (ShadCN) and specialized page sections.
- `src/ai`: Genkit diagnostic flows and AI prompt definitions.
- `src/firebase`: Firebase configuration, providers, and custom data hooks.
- `src/lib`: Utility functions and placeholder data management.

## 👨‍💻 Developed By

Expertly managed and operated by **Usnish Banerjee**.

---
*Reviving tech since 2019.*
