[Back to Sourcing Mappings](README.md)

# Sample Order for the R&D Mapping

**Full Forms**:
- PR = Purchase Requisition
- R&D = Research and Development

**Simple Explanation**: Procure samples for R&D. ERPNext uses Purchase Requisitions with approvals.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. User Put Requirement in R&D ordering google sheet.
2. Buyer get the requisitation and Create Part Code in Odoo to raise the PO.
3. After getting invoice Buyer initiate for the advance payment from account team.
4. After payment, material get disptached --> Material received at vecmocon reception.
5. Reception person has google sheet in which they do entry of reqired parameter and share it on logistic group.
6. Buyer give name of user to whome this material need to hand over.
7. Receptionist, put entry of recever name on google sheet and handover to that person.
8. Invoice send to warehous they check the entry on sheet and then do stamp and grn in Odoo.
9. send this invoice to account team.

## ERPNext Implementation Steps
1. User creates Purchase Requisition in ERPNext Buying module.
2. Buyer creates or selects Item with part code in ERPNext.
3. Buyer creates Purchase Order and initiates Payment Entry for advance.
4. Finance processes payment, supplier ships material, receive via Purchase Receipt.
5. Receptionist updates material arrival in custom Logistics doctype.
6. Buyer specifies recipient user in Purchase Requisition.
7. Receptionist creates Material Issue to user and updates records.
8. Warehouse creates GRN (Purchase Receipt), stamps documents, forwards to Finance.
9. Finance receives and processes invoice for final payment.

## Pain Points (AS-IS)
- Manual PR, tracking.

## ERPNext Solutions
- Formal PR process with tracking.
