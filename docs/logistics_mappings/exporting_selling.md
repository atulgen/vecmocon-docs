[Back to Logistics Mappings](../README.md)

# Exporting / International Selling

**Process ID**: Logistics Process 17
**Department**: Logistics (International)
**Purpose**: Export / International Selling of Finished Goods/Raw Material parts to the foreign buyers

## AS-IS Process Steps

### 1. Buyer & Sales Process
- We (exporter) finalize the international customer
- A quotation or Proforma Invoice (PI) is shared with the buyer
- Buyer confirms the PI and issues a Purchase Order (PO)
- Payment terms are finalized (advance, LC, or post-shipment)
- Departments involved: Sales, Finance, Logistics, Sourcing

### 2. Material Readiness
- Our team confirms material readiness at our factory/warehouse
- Dispatch terms are as per agreed incoterms (EXW/FOB/CIF)

### 3. Document Preparation
- We prepare the required export documents:
  - Commercial Invoice
  - Packing List
  - Product-specific certifications (if any)
  - Draft Shipping Bill (if required)
- Documents are validated by:
  - Sales/Sourcing Team
  - Logistics/Export Team

### 4. Export Booking
- Export team submits the shipping request form/logistics intimation to logistics
- Shipment details are shared with multiple Freight Forwarders (FF) / CHAs for quotation and TAT
- Based on quotation and TAT, FF/CHA is finalized

### 5. Freight Forwarder Coordination
- Finalized FF/CHA coordinates with our logistics team for pickup
- Pickup is arranged based on incoterm (Air/Sea)

### 6. Pickup & Pre-Shipment Process
- Goods are picked up from our premises
- For EXW, pickup is done by buyer's agent
- For FOB, we arrange delivery up to port/airport
- Goods are transported to port of export
- FF/CHA initiates export customs clearance process

### 7. Export Clearance
- Shipping Bill is filed and submitted with required documents
- Goods undergo customs examination and clearance
- Once cleared:
  - Final AWB/BL is generated
  - Flight or vessel booking is confirmed
  - ETD shared with us and buyer

### 8. In-Transit & Destination Handling
**A. Air Shipment:**
- Cargo is loaded onto flight and departs
- FF shares tracking, ETD/ETA, and original AWB
- We share documents with buyer for import clearance

**B. Sea Shipment:**
- Container is loaded and sealed
- Onboard confirmation and final BL is shared
- Documents couriered or emailed to buyer for clearance at destination

### 9. Post-Shipment Documentation
- Buyer is provided with:
  - Commercial Invoice, Packing List
  - BL/AWB
  - Certificate of Origin (if required)
  - Insurance (if applicable – for CIF shipments)
- Documents submitted to the bank in case of LC transactions

### 10. Payment & Record Keeping
- Buyer processes payment as per agreed terms
- Our bank confirms export payment realization
- All export documents including SB, BL, invoice, etc. are submitted to Finance
- Documents are stored in Master Drive

## Process Split Based on Shipping Terms
- **FOB (Free on Board)**: We handle up to loading on vessel/flight
- **Ex-Works (EXW)**: Buyer handles everything from our factory gate

## Inputs Required
- CI, PL, Export form to be filled, Technical write up if required

## Outputs Generated
- EXPORT OF SHIPMENT to the buyers country and location

## Systems Used
- Goggle forms, mails, watsapp group
- Operations, Sales, Finance and Logistics

## Pain Points
- None specified

## Documents Used
- CI, PL, Checklist, shipping bill

## Frequency
- NOT OFTEN

## ERPNext Implementation

### Step-by-Step ERPNext Mapping:

#### 1. **Export Order Management**
- Create Sales Order with export flag
- Link to customer master with export compliance data
- Auto-calculation of export pricing and taxes
- Integration with shipping terms (FOB, EXW, CIF)

#### 2. **Customer & Compliance Setup**
- Enhanced Customer DocType with export fields
- GST compliance validation
- Export license tracking
- Destination country regulations

#### 3. **Document Generation Automation**
- Auto-generation of Commercial Invoice from Sales Order
- Packing List creation with item details
- Shipping Bill preparation with HSN codes
- Certificate of Origin integration

#### 4. **Customs Clearance Workflow**
- Shipping Bill filing process
- Integration with customs APIs
- Duty drawback calculations
- Export promotion scheme tracking

#### 5. **Freight Forwarder Management**
- FF master with performance tracking
- Rate contracts and negotiations
- Booking and tracking integration
- Cost variance analysis

#### 6. **Post-Shipment Compliance**
- Export realization tracking
- Bank certificate management
- Duty drawback claims
- Export incentive monitoring

#### 7. **Dashboard & Analytics**
- Export performance dashboard
- Market-wise revenue tracking
- Compliance status monitoring
- Predictive analytics for export planning

## Key ERPNext Modules Used
- **Selling Module**: Sales Orders with export enhancements
- **Accounts Module**: Export invoice, GST compliance
- **Custom DocTypes**: Shipping Bill, Export Compliance
- **Workflow Engine**: Customs clearance approvals
- **Integration**: Customs API, freight forwarder systems
- **Dashboard Module**: Export KPIs and analytics

## Key Improvements
- Reduced manual document preparation
- Better compliance with export regulations
- Real-time visibility into export process
- Automated customs clearance workflows
- Improved audit trail for export transactions
- Predictive analytics for market expansion
