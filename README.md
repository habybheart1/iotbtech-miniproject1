# iotbtech-miniproject1

A learning focused collaborative project designed to help participants gain hands-on experience with Tailwind CSS, Git, GitHub, and teamwork through real-world UI replication tasks.

---

## Project Goal

- Practice HTML & Tailwind CSS
- Learn Git and GitHub collaboration
- Improve responsive design skills
- Experience real-world team workflow
- Build consistency through practical project

---

## Contribution Workflow

- Fork or clone the repository
- Create a new branch for your task
- Build your assigned landing page
- Push your branch to Github
- Submit a Pull Request for review

---

## Beginner Guide to Working on the Project

**1. Clone the Repository**

First, go to the GitHub repository.

- Click the green Code button.
- Copy the repository link.

Now open your terminal on your PC.

Navigate to where you want the project folder to live.

For example:

```bash
cd Documents
```

or

```bash
cd Desktop
```

`cd` here means change directory, and directory simply means folder.

**2. Download the Project**

Once you are inside the folder where you want the project to be, run:

```bash
git clone REPOSITORY_LINK_YOU COPIED_IN_STEP_ONE
```

Example:

```bash
git clone https://github.com/habybheart1/iotbtech-miniproject1.git
```

This downloads the project to your computer.

**3. Enter the Project Folder**

After cloning is complete, enter the project folder using:

```bash
cd PROJECT_NAME
```

Example:

```bash
cd iotbtech-miniproject1
```

**4. Open the Project in VS Code**

You can open the project in VS Code by running in your terminal:

```bash
code .
```

If that does not work, you can:

- Open VS Code manually
- Click Open Folder
- Select the cloned project folder

**5. Important: Do NOT Work on the Main Branch**

When the project opens, look at the bottom-left corner of VS Code.

You may see something like: `main`

This means you are currently on the main branch.

You should NEVER work directly on the main branch.

You can also confirm by running:

```bash
git branch
```

The current branch will have a `*` beside it.

Example:

```bash
* main
```

**6. Create Your Own Branch**

Before starting your task, create your own branch.

Run:

```bash
git checkout -b feature/task-name
```

Example:
If your task is bento cards then:

```bash
git checkout -b feature/bento-cards
```

This creates a new branch and automatically switches you into it.

You will now see:

```bash
feature/bento-cards
```

at the bottom-left corner of VS Code instead of main.

You can also confirm with:

```bash
git branch
```

**7. Start Your Work**

Now you can begin your task safely.

For example:

- Create your task folder
- Add your files
- Add an images folder if needed
- Start coding

Example structure:

bento-cards/
│
├── index.html
└── images/

**8. Commit Your Changes Regularly**

As you make important progress, save your work using commits.

Example:

```bash
git add .
git commit -m "feat: add html boilerplate and import tailwind and fonts"
```

Try to commit after every major change.

**9. Push Your Branch to GitHub**

When you are completely done with your task, push your branch:

```bash
git push -u origin BRANCH_NAME
```

Example:
If branch name is feature/bento-cards then:

```bash
git push -u origin feature/bento-cards
```

This uploads your work to GitHub.

**10. Create a Pull Request (PR)**

After pushing:

- Go back to the GitHub repository for the iotbtech repo you cloned
- You will see a button saying **Compare & Pull Request**
- Click it
- Add your title and description
- Create the Pull Request

---

## IMPORTANT

✅ Create the Pull Request
❌ BUT DO NOT MERGE IT YOURSELF!

Even if GitHub shows a merge button, do not click it.

Only create the PR and submit it for review, but don't merge yourself.

Thank you! Happy Coding!
