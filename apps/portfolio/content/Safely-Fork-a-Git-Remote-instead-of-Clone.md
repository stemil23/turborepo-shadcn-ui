---
title: "Safely Fork a Git Remote Instead of Clone"
publishedAt: "2024-06-18"
summary: "A guide to safely fork a Git remote instead of cloning to ensure you can keep your fork updated with the original repository."
---

**Steps for Setting Up Your Fork:**
1. **Fork the Original Repository on GitHub**:

• Navigate to the repository you want to fork on GitHub.

• Click the “Fork” button in the top-right corner. GitHub will create a copy of the repository under your account.

2. **Clone Your Fork Locally**:

Open your terminal and clone the repository that was forked into your account:

git clone https://github.com/your-username/forked-repo.git

Navigate into the cloned repository:

cd forked-repo

3. **Add the Original Repository as** upstream:

Now, set the original repository as the upstream remote, which allows you to pull changes from it without pushing anything back:

git remote add upstream https://github.com/original-owner/original-repo.git

Verify the remotes to make sure they are set up correctly:

git remote -v

You should see two remotes: origin (your fork) and upstream (the original project):

origin    https://github.com/your-username/forked-repo.git (fetch)
origin    https://github.com/your-username/forked-repo.git (push)
upstream  https://github.com/original-owner/original-repo.git (fetch)
upstream  https://github.com/original-owner/original-repo.git (push)

4. **Ensure You Can Only Push to Your Fork (**origin**)**:

Lock the upstream repository from being pushed to by changing its push URL:
git remote set-url --push upstream no_push

This ensures you can’t accidentally push to the original repository.

5. **Pull Updates from the Original Project**:

To keep your fork updated with changes from the original repository:
• Fetch changes from the original project (upstream):
git fetch upstream
• Switch to the branch you want to update, typically main:
git checkout main

• Merge the updates into your local branch:
git merge upstream/main

If there are any conflicts, Git will prompt you to resolve them. After resolving, continue with the merge.

6. **Push Updates to Your Fork**:

After merging updates from the original repository, push the changes to your fork:
git push origin main

7. **Work on Separate Feature Branches**:

When working on new features or changes, it’s a good practice to create a new branch:

git checkout -b feature-branch

Once you’ve made your changes, commit and push them to your fork:

git push origin feature-branch

**Example Workflow**

**1. Pulling Updates from the Original Project:**

git fetch upstream
git checkout main
git merge upstream/main
git push origin main

**2. Working on a New Feature:**
git checkout -b my-feature

# make your changes

git commit -m "Implemented new feature"
git push origin my-feature

This setup allows you to manage your fork independently, while still keeping it updated with changes from the original repository.

