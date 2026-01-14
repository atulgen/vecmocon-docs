[Back to Logistics Mappings](../README.md)

# Export Form

**Process ID**: Logistics Process 18
**Department**: Logistics (International)
**Purpose**: Used as an intimation so that export process can be started

## AS-IS Process Steps
1. Timestamp
2. Email Address
3. Company Name (Drop Location)
4. Name of Representative/Receiver contact person
5. Delivery Address
6. City
7. Province
8. Email of Representative (RECEIVER)
9. Phone Number of Representative (RECEIVER)
10. Items
11. Quantity per item
12. Unit Price per item in INR
13. Number of Boxes
14. Weight Per Box
15. Total Weight
16. BOX SIZE
17. INCOTERM
18. Mode of Transport
19. Specific Document required if any for clearance and delivery
20. Supporting Documents (Upto 5)
21. I confirm that all information and data provided by me in this form are true, accurate, and valid to the best of my knowledge and belief.
22. Zip Code / Postal Code
23. AWB No
24. Documents

## Inputs Required
- Commercial Invoice, Packing list, Buyer Details

## Outputs Generated
- Response is added in the response sheet and export process is initiated by logistics team

## Systems Used
- Google form and Google Sheets
- Operations, Sales, Sourcing, R&D and Logistics

## Pain Points
- None specified

## Documents Used
- CommerciaI Invoice, Packing List, Checklist, Shipping Bill

## Frequency
- NOT OFTEN

## ERPNext Implementation

### Step-by-Step ERPNext Mapping:

#### 1. **Digital Export Request Form**
- Create custom DocType: "Export Request Form"
- Fields: All form fields (Timestamp, Company details, Item details, etc.)
- Mandatory validation for required fields
- Auto-generation of unique Export Request ID

#### 2. **Customer & Item Validation**
- Link to Customer master (auto-fetch address, GST, export compliance)
- Item master validation with export-specific fields
- Destination country validation
- Incoterm and shipping term setup

#### 3. **Automated Workflow Triggers**
- Form submission triggers export process workflow
- Auto-creation of Delivery Note/Sales Invoice
- Link to export logistics and documentation
- Email notifications to relevant stakeholders

#### 4. **Document Management Integration**
- Attachment support for supporting documents
- Auto-generation of export checklists
- Version control for document updates
- Integration with cloud storage

#### 5. **Export Process Integration**
- Triggers creation of Export MIS record
- Updates customer export history
- Links to freight forwarder booking
- Auto-updates compliance tracking

#### 6. **Reporting & Compliance**
- Export request status dashboard
- Compliance monitoring reports
- Customer-wise export tracking
- Regulatory filing automation

## Key ERPNext Modules Used
- **Custom DocType**: Export Request Form
- **Selling Module**: Sales Orders, Delivery Notes
- **Stock Module**: Item master, export compliance
- **Workflow Engine**: Export approval processes
- **File Manager**: Document attachments and checklists

## Key Improvements
- Mandatory field validation
- Automated export process triggers
- Better document management
- Improved coordination between departments
- Reduced manual follow-ups
- Real-time compliance monitoring
