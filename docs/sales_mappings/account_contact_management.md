[Back to Sales Mappings](README.md)

# Account & Contact Management Mapping

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Account creation or during Opportunity creation
2. Account & Contact creation
3. Association of contacts with accounts
4. Enrichment of records with additional information
5. Selection of record type to classify accounts properly

## ERPNext Implementation Steps
1. Create Customer (Account) in CRM with type (Individual/Company)
2. Add contacts linked to Customer
3. Enrich with custom fields (industry, region, etc.)
4. Use Customer Group for classification
5. Segment via Territory or custom fields

## Pain Points (AS-IS)
- Duplicate account or contact creation due to lack of validation
- Incomplete or outdated customer information
- Manual enrichment process leading to delays
- Segmentation inconsistencies

## ERPNext Solutions
- Unique validation for duplicates
- Centralized customer master
- Automated enrichment via integrations
