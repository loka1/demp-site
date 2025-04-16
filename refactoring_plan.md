## Refactoring Plan

**Task:** Replace the old questions in `tpl/faq.html` with new questions.

**Plan:**

1.  **Analyze the existing HTML structure:** Understand how the FAQ section is structured in `tpl/faq.html`. Identify the elements that contain the questions and answers.
2.  **Prepare the new FAQ content:** Format the provided questions and answers into the same HTML structure as the existing FAQ section.
3.  **Replace the old FAQ content with the new content:** Use the `apply_diff` tool to replace the old FAQ items with the new FAQ items.
4.  **Present the result to the user:** Use the `attempt_completion` tool to present the result to the user.

**Mermaid Diagram:**

```mermaid
graph LR
    A[Analyze existing HTML structure] --> B(Prepare new FAQ content);
    B --> C{Replace old FAQ content with new content};
    C --> D(Present result to user);