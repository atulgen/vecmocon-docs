[Back to Sales Mappings](README.md)

# Opportunity Process Mapping

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Lead converted to Opportunity
2. Qualification process
3. NDA signing
4. SOR (Statement of Requirements) receipt
5. Projection Schedule creation
6. Quotation preparation
7. Sample Validation
8. Technical Sign-Off
9. Certification and Homologation
10. Series Supply initiation
11. Opportunity closure (Won or Lost)

## ERPNext Implementation Steps
1. Convert Lead to Opportunity in CRM
2. Update Opportunity stage through workflow (Qualification to Closed)
3. Attach NDA, SOR, and other documents
4. Link Quotation from Selling module
5. Use custom fields for homologation status
6. Track activities and milestones
7. Close Opportunity with win/loss status

## Pain Points (AS-IS)
- Multiple manual documents (NDA, SOR, certifications) stored outside Salesforce
- Lack of integration with technical validation/certification and CRM system
- Lengthy approval cycle for sample validation and sign-offs

## ERPNext Solutions
- Document attachments in Opportunity
- Integrated workflows for approvals
- Real-time status tracking across modules
