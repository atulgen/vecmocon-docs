[Back to R&D Mappings](README.md)

# Approach with Procurement Team Mapping

**Full Forms**:
- NPD = New Product Development (creating new products)

**Simple Explanation**: R&D requests materials for new product development through procurement. ERPNext uses Purchase Requisitions for formal requests and approvals.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Enter requisite material details in Google Sheet provided by Purchase Team.
2. Collect material from Purchase Team after confirmation.

## ERPNext Implementation Steps
1. Create Purchase Requisition in Buying module with material details.
2. Submit for approval.
3. Once approved, Purchase team creates PO.
4. Receive materials.

## Pain Points (AS-IS)
- Lack of approval authorities

## ERPNext Solutions
- Workflow approvals for requisitions.
- Formal tracking of requests.
