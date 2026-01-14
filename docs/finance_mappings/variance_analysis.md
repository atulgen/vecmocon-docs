[Back to Finance Mappings](README.md)

# Variance Analysis Mapping

**Full Forms**:
- AOP = Annual Operating Plan
- COGS = Cost of Goods Sold
- BOM = Bill of Materials

**Simple Explanation**: Analyze differences between planned and actual sales and costs. ERPNext provides variance reports.

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Availability of actual sales and plotting against AOP sales to identify variance reasons.
2. Capturing of actual COGS and identifying variances from BOM and AOP COGS.

## ERPNext Implementation Steps
1. Compare actual sales with AOP targets.
2. Analyze COGS variances using BOM vs actual consumption.
3. Generate variance reports with reasons.

## Pain Points (AS-IS)
- Capturing of actual consumption (not being done currently).
- Availability of latest BOM.

## ERPNext Solutions
- Automated variance calculations.
- Real-time BOM updates.
- Integrated consumption tracking.
