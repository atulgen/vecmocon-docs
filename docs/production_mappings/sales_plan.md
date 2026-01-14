[Back to Production Mappings](README.md)

# Sales Plan Mapping

**Full Forms**:
- FG = Finished Goods

**Simple Explanation**: Plan monthly production based on sales forecasts. ERPNext uses Production Plans linked to Sales Orders.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Sales share next 3 months req. on 20th.
2. Consolidate Product-wise req.
3. Input from R&D for handover, Purchase for arrival.
4. Prepare week-wise plan.

## ERPNext Implementation Steps
1. Import sales forecasts.
2. Create Production Plan from Sales Orders.
3. Adjust for material availability.
4. Generate weekly schedules.

## Pain Points (AS-IS)
- FG Code wise Sales Plan not recieved

## ERPNext Solutions
- Auto-link to sales data.
- Real-time forecast integration.
