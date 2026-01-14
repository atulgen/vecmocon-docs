[Back to Finance Mappings](README.md)

# PF/ESI Return Mapping

## AS-IS Steps (from AS-IS_Process.xlsx)
1. Request for salary sheet for the releted month
2. Verify the PF and ESI data.
3. Downlode epf return format from epf portal
4. According to salary sheet we have prepare epf return 
5. We have convert the final sheet in text format.
6. Text file uplode on EPF portal
7 After that payment by bank

## ERPNext Implementation Steps
1. Generate salary slips from Payroll module (or integrate with Keka).
2. Auto-calculate PF/ESI deductions.
3. Create custom report for EPF return format.
4. Export as text file.
5. Upload to EPF portal manually or via API if available.
6. Process payments via Payment Entry.

## Pain Points (AS-IS)
- Many times wrong calculation of Pf recevied

## ERPNext Solutions
- Automated calculations in Payroll.
- Accurate deduction tracking.
- Custom export formats.
