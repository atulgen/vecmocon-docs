[Back to Main Documentation](README.md)

# ERP Scope of Work - Vecmocon Implementation

**Source**: ERP_Scope of Work.pdf - Comprehensive implementation scope and deliverables for Micloud ERP.

## Project Objective
Implement Micloud ERP across all key business process cycles at Vecmocon India, supporting complete traceability, automation, and operational visibility through an on-premise deployment model.

## Project Scope

### ERP Scope (Active Modules Only)
**Note**: CRM/Lead Management excluded (handled by Salesforce). HRMS, Projects, Maintenance, Loans, and Payroll modules out of scope.

#### 1. Order to Production & Delivery (Outsourced Manufacturing)
**Functional Scope**:
- EMS vendor PO generation with milestone-based tracking
- Production progress stages (as per EMS vendor updates)
- Delivery schedule planning and dispatch instructions
- GRN entry upon receipt from EMS partner

**Specific Capabilities**:
- Multi-level BOM mapping and subcontracting workflows
- Traceability of outsourced production batches
- Reconciliation of materials issued vs. finished goods received
- Standard and actual material costing with consumption variance reporting

#### 2. Sales Order to Delivery to Cash (Sales Execution & Receivables)
**Functional Scope**:
- Sales Order creation from approved quotations (received from Salesforce.com)
- Dispatch planning and delivery challan generation
- Sales invoice generation linked to dispatch
- Real-time accounts receivable tracking
- Credit control and monitoring
- Automated payment reminders and dunning notices

**Key Reports & Analytics**:
- Order fulfillment status report
- Delivery vs. Invoice reconciliation
- AR ageing reports (customer-wise)
- Sales vs. collection analytics
- Credit limit monitoring and exception alerts

#### 3. Procure to Pay (Component Procurement)
**Functional Scope**:
- Supplier master creation and rating system
- Purchase request and PO workflows
- GRN entry, invoice matching, and EMS dispatch
- Supplier performance dashboards

**Specialized Features**:
- Supplier-wise lead time and cost analysis
- Open PO and expected delivery calendar
- Reorder alerts based on minimum stock thresholds

#### 4. Warehouse & Inventory Management
**Functional Scope**:
- Multi-location warehouse setup
- Serial and batch number traceability (where applicable)
- Stock adjustments, transfers, and reconciliation

**Reports & Tools**:
- Real-time stock ledger and valuation
- FG stock summary by customer, project, or BOM
- Cycle count and inventory audit support

#### 5. Finance & Accounting
**Functional Scope**:
- General Ledger (GL), Chart of Accounts, Sub-ledgers
- AP (Vendor) and AR (Customer) integration with procurement/sales
- Bank ledger, reconciliation, and cashflow tracking
- Taxation module (GST, TDS), including e-invoicing readiness

**Reports**:
- P&L, Balance Sheet, Trial Balance
- Vendor and customer account statements
- GST reports and compliance documentation

#### 6. Quality Management
**Functional Scope**:
- Incoming QC inspection and approval
- QC plan configuration based on part or supplier
- Rejection and rework tracking
- Customer complaint logging and resolution

**Specialized Features**:
- Visual quality inspection (attachment support)
- QC gate pass control
- Quality dashboard with supplier-wise defect trends

#### 7. Engineering & Product Lifecycle (Basic)
**Functional Scope**:
- Part/item master creation with version control (optional)
- Multi-level BOM configuration and revision
- Routing and work center definitions

**Costing Capabilities**:
- Standard material cost maintenance
- Actual material consumption tracking via production
- Variance reporting between planned vs. actual BOM costs

### Bar Coding Implementation
- Bar coding of incoming material to facilitate inventory management
- Batch-based inventory tracking and issuing to EMS/other entities

## Implementation Model
- **Deployment**: On-Premise (Server hosted at Vecmocon premises)
- **System Provisioning**: Servers, database, backups, and network infrastructure provided by Vecmocon
- **ERP Partner**: Micloud delivers application setup, configuration, training, and go-live support

## Customer Responsibilities
- Appoint dedicated Project Manager for internal coordination
- Nominate Key Users from each department for:
  - AS-IS/TO-BE process definition and validation
  - User training and UAT participation
  - Master data and test scenarios provision
- Provide physical infrastructure (LAN, server, backup devices)
- Ensure fortnightly Project Sponsor reviews
- Arrange travel/lodging for consultants
- Ensure Key Users allocate time beyond regular work during project phases
