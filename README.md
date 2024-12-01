# Mimir - Crypto Portfolio Tracker

A cryptocurrency portfolio tracking application built with modern web technologies. Currently in early development, with plans to expand into an AI-powered platform with comprehensive wallet and exchange integrations.

## 🚀 Current Features

- Basic portfolio dashboard
- Manual transaction logging
- User authentication

## 🎯 Planned Features

- Exchange API integrations for automatic transaction syncing
- Web3 wallet connections
- AI-powered insights and analytics
- DeFi protocol tracking
- Multi-chain support

## 🛠️ Tech Stack

- **Frontend**

  - Next.js 14
  - Tailwind CSS
  - shadcn/ui components
  - TypeScript

- **Backend**
  - PostgreSQL
  - Prisma ORM
  - Clerk Authentication

## 📝 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/mimir.git
cd mimir
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in your environment variables:

```env
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

4. Run database migrations

```bash
npx prisma migrate dev
```

5. Start the development server

```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js app router
├── components/         # Reusable React components
│   ├── dashboard/     # Dashboard-specific components
│   ├── transactions/  # Transaction-related components
│   └── ui/            # shadcn/ui components
├── lib/               # Utility functions and services
└── types/             # TypeScript type definitions
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 📬 Contact

Project Link: [https://github.com/BinaryPogs/mimir](https://github.com/BinaryPogs/mimir)

---

Built with the T3 Stack
