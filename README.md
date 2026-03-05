# 🔥 The Fuse

A unique productivity app that forces you to prioritize through scarcity. Built with React, TypeScript, and [Ayna UI](https://github.com/aynaui/ayna-ui).

![Hero Image Placeholder](https://via.placeholder.com/800x400/0ea5e9/ffffff?text=The+Fuse)

## 🎯 The Problem

Traditional todo lists grow forever, becoming sources of anxiety rather than productivity tools. We keep adding tasks without ever finishing them, creating an overwhelming backlog that paralyzes rather than motivates.

## 💡 The Solution

The Fuse takes a radical approach:

### **The 3-Task Limit**

You can only have **3 active tasks at any time**. Want to add a 4th? You must either:

- ✅ Complete an existing task
- 🗑️ Delete it into the abyss (permanently)
- 🔥 Let it burn

### **The Burn Mechanic**

Every task has a literal fuse ⏱️. When you create a task, you assign it a timeframe. If you don't complete it within that time, it **burns up** and moves to the graveyard.

This gamifies the Fear Of Missing Out (FOMO) to drive actual productivity, not just list-making.

## ✨ Features

- **🔥 Visual Burn Progress**: Watch the fuse burn in real-time with color-coded progress bars
- **⏱️ Customizable Timeframes**: From 5 minutes to 8 hours - you decide the urgency
- **🪦 Graveyard Tab**: Review completed and burned tasks to track your productivity patterns
- **📊 Live Statistics**: See your active, completed, and burned task counts at a glance
- **💾 Auto-Save**: Tasks persist in localStorage - close and reopen without losing data
- **🎨 Brutalist Design**: Bold, high-contrast UI built with Ayna UI components
- **⚡ Real-time Updates**: Task timers and burn progress update every second

## 🚀 Getting Started

### Prerequisites

- Node.js >= 16.x
- npm or yarn

### Installation

```bash
# Clone the repository (or download the files)
cd todo-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🎮 How to Use

### 1. Add a Task

- Enter a task title (required)
- Optionally add a description
- Choose a timeframe before it burns (5 min to 8 hours)
- Click "🔥 Light the Fuse"

**Note**: You can only add tasks if you have fewer than 3 active tasks.

### 2. Manage Active Tasks

Each active task shows:

- **Title and description**
- **Visual fuse** showing burn progress (yellow → orange → red)
- **Time remaining** in minutes and seconds
- **Action buttons**:
    - ✓ Complete - Mark as done and move to graveyard
    - 🗑️ Delete into Abyss - Permanently remove
    - 🔥 Burn Now - Manually burn the task

### 3. View the Graveyard

Switch to the "🪦 Graveyard" tab to see:

- All completed tasks (✓ DONE badge)
- All burned tasks (🔥 BURNED badge)
- When each task was created
- Original timeframe

Clear the entire graveyard with the "🧹 Clear Graveyard" button.

## 🏗️ Project Structure

```
todo-app/
├── public/
│   └── fire.svg                    # Favicon
├── src/
│   ├── components/
│   │   ├── AddTaskForm.tsx         # Task creation form
│   │   ├── AddTaskForm.styled.ts   # Form styles
│   │   ├── TaskCard.tsx            # Individual task display
│   │   └── TaskCard.styled.ts      # Task card styles
│   ├── hooks/
│   │   └── useTasks.ts             # Task management logic
│   ├── types/
│   │   └── task.ts                 # TypeScript interfaces
│   ├── App.tsx                     # Main app component
│   ├── App.styled.ts               # App-level styles
│   ├── GlobalStyles.ts             # Global CSS
│   └── main.tsx                    # App entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **styled-components** - CSS-in-JS styling
- **Ayna UI** - Component library for brutalist design
- **localStorage** - Data persistence

## 🎨 Design Philosophy

The app embraces a **brutalist design language** courtesy of Ayna UI:

- **Strong black borders** and high contrast
- **Bold shadows** for depth and separation
- **Geometric shapes** and clean layouts
- **Source Code Pro** monospace typography
- **Vibrant gradients** for the background
- **Interactive animations** for engagement

## 🧠 Psychology Behind It

### Scarcity Creates Value

By limiting active tasks to 3, each slot becomes precious. You're forced to carefully consider what truly matters.

### Deadlines Drive Action

The burning mechanic creates urgency. Studies show that tasks with deadlines are more likely to be completed.

### Visible Progress

The visual fuse tapping into our natural response to time pressure, motivating completion before the "burn."

### Reflection Through History

The graveyard isn't just punishment - it's a learning tool. Review what you completed vs. what burned to understand your productivity patterns.

## 🤝 Contributing

This is a personal project, but suggestions and improvements are welcome! Feel free to:

1. Fork the project
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📝 License

MIT License - feel free to use this project however you'd like!

## 🙏 Acknowledgments

- Built with [Ayna UI](https://github.com/aynaui/ayna-ui) by Ishan Bagchi
- Inspired by productivity psychology and the Eisenhower Matrix
- Special thanks to the React and TypeScript communities

## 📧 Contact

**Ishan Bagchi**

- Email: ishanbagchi4@gmail.com
- GitHub: [@aynaui](https://github.com/aynaui)

---

**Remember**: Productivity isn't about doing everything - it's about doing the right things. Let the rest burn. 🔥
