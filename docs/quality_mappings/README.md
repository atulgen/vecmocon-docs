[Back to Main Documentation](../README.md)

# Quality Mappings: AS-IS to ERPNext

This directory contains detailed mappings for each of the 4 quality processes from the AS-IS_Process.xlsx Quality sheet.

Each process has its own .md file with:
- Exact AS-IS steps from the sheet
- Broken down ERPNext implementation steps
- Pain points identified
- How ERPNext solves them

## Process Files

| S.No | Process Title | File |
|------|---------------|------|
| 1 | Incoming Quality Check (IQC) | [incoming_qc.md](incoming_qc.md) |
| 2 | Finished Goods Quality Check | [finished_goods_qc.md](finished_goods_qc.md) |
| 3 | Pre-Dispatch Inspection (PDI) | [pdi.md](pdi.md) |
| 4 | Scrap Management | [scrap_management.md](scrap_management.md) |

## Process Summaries

### 1. Incoming Quality Check (IQC)
**AS-IS Overview**: Manual sampling, spreadsheet tracking.
**ERPNext Usage**: Quality Inspection linked to GRN.
**Key Improvements**: Automated sampling, integrated QC.

### 2. Finished Goods Quality Check
**AS-IS Overview**: Informal testing, no records.
**ERPNext Usage**: Quality Inspection for FG.
**Key Improvements**: Standardized checks, traceability.

### 3. Pre-Dispatch Inspection (PDI)
**AS-IS Overview**: Missing process, manual communication.
**ERPNext Usage**: Quality Inspection before DN.
**Key Improvements**: Mandatory PDI, reports.

### 4. Scrap Management
**AS-IS Overview**: Manual approvals, vendor contact.
**ERPNext Usage**: Scrap Stock Entry.
**Key Improvements**: Workflow approvals, tracking.

[Back to Main Documentation](../README.md)
