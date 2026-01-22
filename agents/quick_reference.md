# Quick Reference Guide - Vecmocon ERP

## 🔍 Frequently Needed Information

### 📋 Abbreviations & Terms
| Abbreviation | Full Form | Context |
|--------------|-----------|---------|
| **EMS** | Electronic Manufacturing Services | Outsourced manufacturing partners |
| **BOM** | Bill of Materials | Product structure and components |
| **GRN** | Goods Receipt Note | Material receipt documentation |
| **DC** | Delivery Challan | Dispatch documentation |
| **IQC** | Incoming Quality Control | Supplier material inspection |
| **PDI** | Pre-Dispatch Inspection | Final product inspection |
| **PO** | Purchase Order | Procurement document |
| **PI** | Proforma Invoice | Preliminary sales invoice |
| **SO** | Sales Order | Customer order document |
| **SOR** | Statement of Requirement | Customer specifications |
| **TSO** | Technical Sign-Off | Engineering approval |
| **ECN/ECR** | Engineering Change Notice/Request | Design modifications |
| **NDA** | Non-Disclosure Agreement | Confidentiality agreement |
| **MIS** | Management Information System | Reports and analytics |
| **KPIs** | Key Performance Indicators | Performance metrics |
| **FOB/EXW/CIF** | Freight terms | International shipping arrangements |

### 📂 File Location Guide

#### Client Documentation (Root Level)
```
AS-IS_Process.xlsx          # Complete business process mapping
ERP_Scope of Work.pdf       # Implementation scope and deliverables
Intro.md                    # Company overview
CRP1 Script_Vecmocon.pdf    # Sales fulfillment process
ERP - Hosting Details.pdf   # Server specifications
ERP SPOC.xlsx              # Key users and contacts
Feedback 1 & 2.xlsx        # Training and testing feedback
```

#### ERP Documentation (docs/)
```
docs/README.md                           # Project overview
docs/erp_scope_of_work.md                # Implementation scope
docs/gap_analysis.md                     # Identified gaps
docs/customizations.md                   # Required customizations
docs/implementation_plan.md              # Timeline and resources
docs/recommendations.md                  # Final recommendations
docs/process_summary.md                  # Process overview
docs/concrete_plan.md                    # Implementation approach
docs/dry_run_scenario.md                 # Testing scenarios
docs/thorough_process.md                 # Detailed process flows
docs/website_setup.md                    # Docusaurus configuration
```

#### Department Mappings
```
docs/sales_mappings/                     # 7 sales processes
docs/finance_mappings/                   # 35 finance processes
docs/inventory_mappings/                 # 6 inventory processes
docs/production_mappings/                # 9 production processes
docs/quality_mappings/                   # 4 quality processes
docs/logistics_mappings/                 # 22 logistics processes
docs/sourcing_mappings/                  # 14 sourcing processes
docs/rnd_mappings/                       # 5 R&D processes
docs/hr_mappings/                        # 1 HR process
```

### 🎯 Key Process References

#### Emergency/High-Priority Processes
| Scenario | Primary File | Backup Files |
|----------|--------------|--------------|
| **Sales Order Stuck** | `docs/sales_mappings/crp1_sales_fulfillment_process.md` | `docs/sales_mappings/opportunity_process.md` |
| **Payment Delay** | `docs/finance_mappings/payment_to_vendors.md` | `docs/finance_mappings/payment_advice_followup.md` |
| **Material Shortage** | `docs/production_mappings/material_req_planning.md` | `docs/inventory_mappings/kitting.md` |
| **Quality Issue** | `docs/quality_mappings/incoming_qc.md` | `docs/quality_mappings/scrap_management.md` |
| **Dispatch Problem** | `docs/logistics_mappings/dispatch_process.md` | `docs/logistics_mappings/e-way_creation.md` |
| **Supplier Issue** | `docs/sourcing_mappings/supplier_management.md` | `docs/sourcing_mappings/supplier_rating.md` |

#### Most Referenced Files
1. `docs/sales_mappings/crp1_sales_fulfillment_process.md` - End-to-end sales flow
2. `docs/erp_scope_of_work.md` - Implementation boundaries
3. `docs/finance_mappings/tax_invoice_creation.md` - Revenue process
4. `docs/logistics_mappings/importing.md` - International procurement
5. `AS-IS_Process.xlsx` - Complete process library

### 👥 Contact Processes by Department

#### Sales
- **New Customer Onboarding**: `docs/sales_mappings/account_contact_management.md`
- **Quotation Issues**: `docs/sales_mappings/quotation_process.md`
- **Order Status**: `docs/sales_mappings/crp1_sales_fulfillment_process.md`
- **Payment Follow-up**: `docs/finance_mappings/payment_advice_followup.md`

#### Finance
- **Invoice Creation**: `docs/finance_mappings/tax_invoice_creation.md`
- **Vendor Payments**: `docs/finance_mappings/payment_to_vendors.md`
- **Bank Reconciliation**: `docs/finance_mappings/bank_reconciliation.md`
- **GST Compliance**: `docs/finance_mappings/gst_return_reconciliation.md`
- **Foreign Payments**: `docs/finance_mappings/foreign_remittance_advance.md`

#### Inventory
- **Material Receipt**: `docs/inventory_mappings/material_receipt_grn.md`
- **Stock Issues**: `docs/inventory_mappings/physical_vs_system_inventory.md`
- **Kitting Problems**: `docs/inventory_mappings/kitting.md`
- **Outbound Issues**: `docs/inventory_mappings/outbound_process.md`

#### Production
- **Production Planning**: `docs/production_mappings/monthly_prod_plan.md`
- **Material Requirements**: `docs/production_mappings/material_req_planning.md`
- **EMS Coordination**: `docs/production_mappings/po_to_ems.md`
- **Consumption Variance**: `docs/production_mappings/actual_vs_planned_consumption.md`

#### Quality
- **Incoming Inspection**: `docs/quality_mappings/incoming_qc.md`
- **Finished Goods**: `docs/quality_mappings/finished_goods_qc.md`
- **Pre-Dispatch**: `docs/quality_mappings/pdi.md`
- **Scrap Disposal**: `docs/quality_mappings/scrap_management.md`

#### Logistics
- **Domestic Dispatch**: `docs/logistics_mappings/dispatch_process.md`
- **International Import**: `docs/logistics_mappings/importing.md`
- **Export Process**: `docs/logistics_mappings/exporting_selling.md`
- **Documentation**: `docs/logistics_mappings/e-way_creation.md`

#### Sourcing
- **New Supplier**: `docs/sourcing_mappings/supplier_management.md`
- **PO Creation**: `docs/sourcing_mappings/raising_po.md`
- **Negotiation**: `docs/sourcing_mappings/negotiation_bom.md`
- **Payment Request**: `docs/sourcing_mappings/payment_request.md`

#### R&D
- **New Product**: `docs/rnd_mappings/customer_order_execution.md`
- **Sample Procurement**: `docs/rnd_mappings/sample_dispatch_customers.md`
- **Repair/Replace**: `docs/rnd_mappings/repair_replacement.md`

### 🔧 System Integration Points

#### External Systems
- **Salesforce**: `docs/sales_mappings/opportunity_process.md`
- **GST Portal**: `docs/finance_mappings/gst_return_reconciliation.md`
- **Banking**: `docs/finance_mappings/bank_reconciliation.md`
- **EMS Partners**: `docs/production_mappings/po_to_ems.md`
- **Logistics Partners**: `docs/logistics_mappings/kpis.md`

#### Internal Workflows
- **Sales → Production**: Order triggers planning
- **Production → Sourcing**: Requirements generate POs
- **Sourcing → Inventory**: Receipts update stock
- **Inventory → Quality**: Materials flow through QC
- **Quality → Logistics**: Approved goods dispatch
- **Logistics → Finance**: Dispatch creates invoices

### 📊 Reporting & Analytics

#### Key Reports
- **Sales Performance**: `docs/sales_mappings/reports_dashboards.md`
- **Financial Health**: `docs/finance_mappings/mis_preparation.md`
- **Inventory Status**: `docs/inventory_mappings/README.md`
- **Supplier Performance**: `docs/sourcing_mappings/supplier_rating.md`
- **Logistics KPIs**: `docs/logistics_mappings/kpis.md`

#### Dashboard Locations
- **Sales Dashboard**: Salesforce integration
- **Finance Dashboard**: ERP reporting module
- **Operations Dashboard**: Production and inventory reports
- **Quality Dashboard**: Supplier and defect analytics

### 🚨 Common Issues & Solutions

#### Process Blockers
| Issue | Likely Cause | Reference File |
|-------|--------------|----------------|
| Order not progressing | QC hold or material shortage | `docs/sales_mappings/crp1_sales_fulfillment_process.md` |
| Payment stuck | Invoice mismatch or approval pending | `docs/finance_mappings/payment_to_vendors.md` |
| Dispatch delayed | Documentation incomplete | `docs/logistics_mappings/dispatch_process.md` |
| Supplier rejection | Quality non-conformance | `docs/quality_mappings/incoming_qc.md` |

#### Quick Diagnosis
1. **Check process status** in relevant department mapping
2. **Verify inputs** required for the process
3. **Review integration points** with other departments
4. **Check for manual interventions** or approvals needed

### 📞 Implementation Contacts

#### Project Team
- **Project Manager**: Vecmocon internal lead
- **Implementation Team**: Internal ERP implementors
- **Key Users**: Department representatives (ERP SPOC.xlsx)

#### Emergency Contacts
- **System Issues**: ERP support team
- **Business Critical**: Department heads
- **Compliance**: Finance and legal teams

---

*This quick reference is designed for rapid lookup during ERP implementation and support. For detailed procedures, refer to the full documentation in `docs/[department]_mappings/`*.
