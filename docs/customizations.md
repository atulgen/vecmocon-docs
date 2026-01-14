[Back to Main Documentation](README.md)

# Customizations, Configurations, and Integrations

## Configurations
- **GST and Tax Settings**: Configure GST accounts, HSN codes, tax templates for India compliance.
- **Warehouses**: Set up multi-warehouse (Main, EMS, Subcontractor warehouses) with transfers.
- **Item Masters**: Add custom fields for VPN/MPN, expiry dates, supplier links.
- **Pricing Rules**: Configure discount rules, supplier-wise pricing.
- **Approval Rules**: Set up workflows for PO approvals, payment releases.
- **Quality Inspections**: Configure templates for IQC, PDI, with mandatory fields.

## Customizations
- **Custom Doctypes**: 
  - Import/Export Forms: Custom forms for logistics tracking.
  - E-way Bill: Custom doctype with fields for vehicle, GST, auto-generation via API.
  - LOT Tracking: Enhance batch/serial with custom fields for traceability.
- **Workflows**:
  - Subcontracting: Custom workflow for EMS orders, receipts, reconciliations.
  - Quality: Add PDI workflow with rejection to scrap.
  - R&D Procurement: Link to projects for tracking.
- **Scripts and Automations**:
  - Auto-create Material Requests from Production Plans.
  - Email notifications for approvals, delays.
  - Custom reports for PO data maintenance, dispatch tracking.

## Integrations
- **Salesforce**: API integration for lead/opportunity sync.
- **E-way Bill Portal**: REST API for auto-generation and updates.
- **Google Workspace**: Webhooks for form submissions to ERPNext.
- **Freight Forwarders**: API for tracking and booking.
- **Payment Gateways**: For online payments, reconciliations.

## Estimated Effort
- Configurations: 2-3 weeks.
- Customizations: 4-6 weeks (development and testing).
- Integrations: 2-4 weeks per integration.
- Total: 8-13 weeks with testing.

[Back to Main Documentation](README.md)
