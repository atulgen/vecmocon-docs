[Back to Finance Mappings](README.md)

# TDS Return Mapping

## AS-IS Steps (from AS-IS_Process.xlsx)
Monthly Return:
1. First we have book invoice in tally according to the Section.
2. According the books entry we prepared month return data.
3. As per return data we pay monthly tds challan section wise before 7th of every next month

Quaterly Return:
1. Every quater we have to complile the monthly data and create return and adjust the tds at invoice level with respection challan paid on monthly level.
2. After return preparation in excel we have convert conso file and uplode on portal 

## ERPNext Implementation Steps
1. Use Tax Withholding doctype for TDS calculations on invoices.
2. Generate monthly TDS reports.
3. Create challans via Payment Entry.
4. Compile quarterly data and export to Conso format.
5. Upload to TDS portal.

## Pain Points (AS-IS)
- Many times correct calculation is not possible which reason challan has paid over or less

## ERPNext Solutions
- Automated TDS calculation and withholding.
- Accurate tracking and reports.
- Integration for filings.
