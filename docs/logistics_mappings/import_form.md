[Back to Logistics Mappings](../README.md)

# Import Form

**Process ID**: Logistics Process 15
**Department**: Logistics (International)
**Purpose**: Used as an intimation so that import process can be started

## AS-IS Process Steps
1. Timestamp
2. Email Address
3. SELECT BELOW (Production/RnD)
4. Supplier/Shipper Name
5. Name of Representative/shipper
6. Contact Person
7. Pickup Address
8. Pincode
9. City
10. Province
11. Email Address
12. Phone Number
13. Commercial Invoice No.
14. SELECT BELOW (RnD/Bulk)
15. Items are more than 5 or less than 5?
16. R&D SAMPLE (INVOICE ATTACHMENT)
17. INVOICE VALUE (R&D)
18. (R&D) Commercial Invoice (PDF or EXCEL)
19. COMMERCIAL INVOICE
20. SUPPORTING DOCUMENTS
21. COMMERCIAL INVOICE
22. SUPPORTING DOCUMENTS
23. Number of Boxes
24. Weight Per Box
25. Total Weight
26. BOX SIZE
27. INCOTERM
28. MODE OF TRANSPORT
29. For which VECMOCON PRODUCT this shipment is being IMPORTED?
30. ALREADY PICKED UP ?
31. Enter AWB No. here.
32. Which account is used for this shipment
33. ANY FEEDBACK / REQUEST
34. "I confirm that all information and data provided by me in this form are true, accurate, and valid to the best of my knowledge and belief

Also kindly note that the estimated delivery timeliness for international shipments are:

• By Air
1. ExWork : China/Hongkong/Singapore - 10 Days
2. FOB: China/Hongkong/Singapore - 7 Days

• By Sea
1. ExWork : China/Hongkong - 50 Days
◦ Singapore - 30 Days
2. FOB: China/Hongkong - 40 Days
◦ Singapore - 35 Days

Please note that the above timelines refer to business days only and exclude public holidays, customs office closures, and ECCS (Customs Portal) downtime. "

## Inputs Required
- Commercial Invoice, Packing List
- Supplier details
- Technical write up if required

## Outputs Generated
- Response is added in the response sheet
- Import process is initiated by logistics team

## Systems Used
- Google form and Google Sheets
- Operations, R & D and Sourcing

## Pain Points
- Few shipments are imported by the RnD team through DHL/Fedex A/c and when the form is not filled. It's hard to keep track on it and maintain the documents in our record

## Documents Used
- Linktree, Google forms details And Mail

## Frequency
- REGULAR

## ERPNext Implementation

### Step-by-Step ERPNext Mapping:

#### 1. **Digital Import Request Form**
- Create custom DocType: "Import Request Form"
- Fields: All form fields (Timestamp, Email, Supplier details, Item details, etc.)
- Mandatory validation for required fields
- Auto-generation of unique Import Request ID

#### 2. **Supplier & Item Validation**
- Link to Supplier master (auto-fetch GST, contact details)
- Item master validation (VPN/MPN/EMS codes)
- Currency and exchange rate setup
- Incoterm configuration

#### 3. **Automated Workflow Triggers**
- Form submission triggers approval workflow
- Auto-creation of Purchase Order for supplier
- Link to import logistics management
- Email notifications to relevant stakeholders

#### 4. **Document Management**
- Attachment support for Commercial Invoice, Packing List
- Version control for document updates
- Centralized storage with access controls
- Integration with Google Drive/ERPNext file manager

#### 5. **Integration with Import Process**
- Triggers creation of Import MIS record
- Updates supplier ledger
- Links to freight forwarder management
- Auto-updates inventory expectations

#### 6. **Reporting & Analytics**
- Import request dashboard
- Supplier-wise import tracking
- Cost analysis reports
- Compliance monitoring

## Key ERPNext Modules Used
- **Custom DocType**: Import Request Form
- **Buying Module**: Purchase Orders
- **Stock Module**: Item master, supplier management
- **Workflow Engine**: Approval processes
- **File Manager**: Document attachments

## Key Improvements
- Mandatory form completion for all imports
- Automated workflow triggers
- Better tracking and audit trail
- Reduced manual follow-ups
- Real-time status visibility
- Integration with procurement and logistics
