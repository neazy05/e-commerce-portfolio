# Security Policy

This is a legacy portfolio project, not a production service. Do not deploy it with real customer data or real payment credentials without a security review.

## Before publishing

- Keep `.env` files, database passwords, JWT secrets, API tokens, private keys, and production credentials out of Git.
- Use only local/demo data.
- Review authentication and authorization on every API route, especially admin, wallet, payment, and delivery actions.
- Review and update unsupported dependencies before deployment.
- If any real secret was previously committed to a public repository, rotate it; deleting the file in a later commit is not enough.

If you discover a problem, do not include secrets in a public issue.
