[Back to R&D Mappings](README.md)

# Customer Order Execution Mapping

**Full Forms**:
- SOR = Statement of Requirement (customer specifications)
- SCM = Supply Chain Management (logistics coordination)
- TSO = Technical Sign-Off (approval)
- ECN = Engineering Change Notice (change documentation)
- ECR = Engineering Change Request (change proposal)

**Simple Explanation**: This process involves developing new products based on customer orders, coordinating with sales and supply chain. ERPNext uses the Projects module to track and centralize all documents and tasks.

**Note**: Needs verification if this fits R&D or should be in Projects/Sales.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Receive SOR from customer
2. Analyze raw material requirements
3. Develop product prototype
4. Coordinate with SCM for materials
5. Finalize and prepare for mass production

## ERPNext Implementation Steps
1. Create Project in Projects module linked to customer order.
2. Attach SOR, TSO, ECN, ECR documents.
3. Create tasks for R&D activities.
4. Track progress and milestones.
5. Link to BOM for material planning.

## Pain Points (AS-IS)
- Documents are not maintained/Centralized in a unified system

## ERPNext Solutions
- Centralized document management in Projects.
- Task tracking and collaboration.
- Integration with other modules.
