# Role Functionality Audit

Generated: 2026-07-30T06:31:31.463Z

This report validates real Supabase password login, JWT-backed API authorization, expected allow/deny behavior, and own-profile access. No secret values are included.

| Account category | Login | Assigned role | API checks |
|---|---|---|---|
| SUPER_ADMIN | passed | super_admin | 9/9 passed |
| ADMIN | passed | admin | 9/9 passed |
| MANAGER | passed | manager | 9/9 passed |
| SALES | passed | sales_executive | 9/9 passed |
| INSTALLER | passed | installation_staff | 9/9 passed |
| TECHNICIAN | passed | service_technician | 9/9 passed |
| ACCOUNTANT | passed | accountant | 9/9 passed |
| CUSTOMER_A | passed | customer | 9/9 passed |
| CUSTOMER_B | passed | customer | 9/9 passed |
| DISABLED | blocked as expected | disabled | security outcome validated |
| NO_ROLE | blocked as expected | no role | security outcome validated |

## Detailed permission checks

### SUPER_ADMIN

| Function | Expected | Actual | Result |
|---|---|---|---|
| Dashboard | allowed | allowed | PASS |
| Customers | allowed | allowed | PASS |
| Product lookup | allowed | allowed | PASS |
| Quotations | allowed | allowed | PASS |
| Invoices | allowed | allowed | PASS |
| Agreements | allowed | allowed | PASS |
| Staff | allowed | allowed | PASS |
| Roles | allowed | allowed | PASS |
| Own profile update | allowed | allowed | PASS |

### ADMIN

| Function | Expected | Actual | Result |
|---|---|---|---|
| Dashboard | allowed | allowed | PASS |
| Customers | allowed | allowed | PASS |
| Product lookup | allowed | allowed | PASS |
| Quotations | allowed | allowed | PASS |
| Invoices | allowed | allowed | PASS |
| Agreements | allowed | allowed | PASS |
| Staff | allowed | allowed | PASS |
| Roles | allowed | allowed | PASS |
| Own profile update | allowed | allowed | PASS |

### MANAGER

| Function | Expected | Actual | Result |
|---|---|---|---|
| Dashboard | allowed | allowed | PASS |
| Customers | allowed | allowed | PASS |
| Product lookup | allowed | allowed | PASS |
| Quotations | allowed | allowed | PASS |
| Invoices | denied | denied | PASS |
| Agreements | denied | denied | PASS |
| Staff | denied | denied | PASS |
| Roles | denied | denied | PASS |
| Own profile update | allowed | allowed | PASS |

### SALES

| Function | Expected | Actual | Result |
|---|---|---|---|
| Dashboard | allowed | allowed | PASS |
| Customers | allowed | allowed | PASS |
| Product lookup | allowed | allowed | PASS |
| Quotations | allowed | allowed | PASS |
| Invoices | denied | denied | PASS |
| Agreements | denied | denied | PASS |
| Staff | denied | denied | PASS |
| Roles | denied | denied | PASS |
| Own profile update | allowed | allowed | PASS |

### INSTALLER

| Function | Expected | Actual | Result |
|---|---|---|---|
| Dashboard | allowed | allowed | PASS |
| Customers | denied | denied | PASS |
| Product lookup | denied | denied | PASS |
| Quotations | denied | denied | PASS |
| Invoices | denied | denied | PASS |
| Agreements | denied | denied | PASS |
| Staff | denied | denied | PASS |
| Roles | denied | denied | PASS |
| Own profile update | allowed | allowed | PASS |

### TECHNICIAN

| Function | Expected | Actual | Result |
|---|---|---|---|
| Dashboard | allowed | allowed | PASS |
| Customers | denied | denied | PASS |
| Product lookup | denied | denied | PASS |
| Quotations | denied | denied | PASS |
| Invoices | denied | denied | PASS |
| Agreements | denied | denied | PASS |
| Staff | denied | denied | PASS |
| Roles | denied | denied | PASS |
| Own profile update | allowed | allowed | PASS |

### ACCOUNTANT

| Function | Expected | Actual | Result |
|---|---|---|---|
| Dashboard | allowed | allowed | PASS |
| Customers | allowed | allowed | PASS |
| Product lookup | allowed | allowed | PASS |
| Quotations | denied | denied | PASS |
| Invoices | allowed | allowed | PASS |
| Agreements | denied | denied | PASS |
| Staff | denied | denied | PASS |
| Roles | denied | denied | PASS |
| Own profile update | allowed | allowed | PASS |

### CUSTOMER_A

| Function | Expected | Actual | Result |
|---|---|---|---|
| Dashboard | allowed | allowed | PASS |
| Customers | denied | denied | PASS |
| Product lookup | denied | denied | PASS |
| Quotations | allowed | allowed | PASS |
| Invoices | allowed | allowed | PASS |
| Agreements | allowed | allowed | PASS |
| Staff | denied | denied | PASS |
| Roles | denied | denied | PASS |
| Own profile update | allowed | allowed | PASS |

### CUSTOMER_B

| Function | Expected | Actual | Result |
|---|---|---|---|
| Dashboard | allowed | allowed | PASS |
| Customers | denied | denied | PASS |
| Product lookup | denied | denied | PASS |
| Quotations | allowed | allowed | PASS |
| Invoices | allowed | allowed | PASS |
| Agreements | allowed | allowed | PASS |
| Staff | denied | denied | PASS |
| Roles | denied | denied | PASS |
| Own profile update | allowed | allowed | PASS |

## Customer isolation

- Customer A role audit: PASS
- Customer B role audit: PASS
- Dedicated live isolation tests additionally verify that each customer sees one different quotation and invoice linked through `customers.profile_id`.

## Overall result: PASS
