import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  erpSidebar: [
    'README',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'process_summary',
        'erp_scope_of_work',
      ],
    },
    {
      type: 'category',
      label: 'Implementation',
      items: [
        'gap_analysis',
        'customizations',
        'implementation_plan',
        'recommendations',
      ],
    },
    {
      type: 'category',
      label: 'Department Mappings',
      items: [
        {
          type: 'category',
          label: 'Sales Department (7 processes)',
          items: [
            'sales_mappings/README',
            'sales_mappings/lead_process',
            'sales_mappings/opportunity_process',
            'sales_mappings/account_contact_management',
            'sales_mappings/quotation_process',
            'sales_mappings/product_discount_management',
            'sales_mappings/project_management_post_sales',
            'sales_mappings/reports_dashboards',
            'sales_mappings/crp1_sales_fulfillment_process',
          ],
        },
        {
          type: 'category',
          label: 'Inventory Department (6 processes)',
          items: [
            'inventory_mappings/README',
            'inventory_mappings/material_receipt_grn',
            'inventory_mappings/keeping_material_store',
            'inventory_mappings/kitting',
            'inventory_mappings/outbound_process',
            'inventory_mappings/physical_vs_system_inventory',
            'inventory_mappings/item_creation',
          ],
        },
        {
          type: 'category',
          label: 'Production Department (9 processes)',
          items: [
            'production_mappings/README',
            'production_mappings/sales_plan',
            'production_mappings/monthly_prod_plan',
            'production_mappings/material_req_planning',
            'production_mappings/plan_vs_actual',
            'production_mappings/material_transfer_ems',
            'production_mappings/po_to_ems',
            'production_mappings/vecmocon_outward_ems_inward',
            'production_mappings/actual_vs_planned_consumption',
            'production_mappings/dispatch_tool',
          ],
        },
        {
          type: 'category',
          label: 'Quality Department (4 processes)',
          items: [
            'quality_mappings/README',
            'quality_mappings/incoming_qc',
            'quality_mappings/finished_goods_qc',
            'quality_mappings/pdi',
            'quality_mappings/scrap_management',
          ],
        },
        {
          type: 'category',
          label: 'Logistics Department (21 processes)',
          items: [
            'logistics_mappings/README',
            'logistics_mappings/contact_creation',
            'logistics_mappings/pi_creation',
            'logistics_mappings/po_creation',
            'logistics_mappings/po_creation_operation',
            'logistics_mappings/dispatch_tax_invoice',
            'logistics_mappings/dispatch_repair_return',
            'logistics_mappings/dispatch_replacement',
            'logistics_mappings/dispatch_returnable',
            'logistics_mappings/dispatch_job_work',
            'logistics_mappings/eway_creation',
            'logistics_mappings/maintaining_po_data',
            'logistics_mappings/maintaining_dispatch_data',
            'logistics_mappings/importing_purchase',
            'logistics_mappings/import_form',
            'logistics_mappings/import_mis',
            'logistics_mappings/exporting_selling',
            'logistics_mappings/export_form',
            'logistics_mappings/export_mis',
            'logistics_mappings/nda_agreement_management',
            'logistics_mappings/kpis',
          ],
        },
        {
          type: 'category',
          label: 'Finance Department (35+ processes)',
          items: [
            'finance_mappings/README',
            'finance_mappings/tax_invoice_creation',
            'finance_mappings/payment_advice_followup',
            'finance_mappings/sales_return_process',
            'finance_mappings/payment_to_vendors',
            'finance_mappings/freight_logistics_payments',
            'finance_mappings/foreign_remittance_advance',
            'finance_mappings/foreign_remittance_boe',
            'finance_mappings/pf_esi_return',
            'finance_mappings/tds_return',
            'finance_mappings/payroll',
            'finance_mappings/gst_return_reconciliation',
            'finance_mappings/mis_preparation',
            'finance_mappings/budget_management',
            'finance_mappings/product_cost_estimation',
            'finance_mappings/variance_analysis',
            'finance_mappings/financial_statement_preparation',
            'finance_mappings/msme_returns',
            'finance_mappings/fd_interest_calculation',
            'finance_mappings/bank_reconciliation',
            'finance_mappings/vendor_reconciliation',
            'finance_mappings/fixed_asset_management',
            'finance_mappings/rnd_capitalization',
            'finance_mappings/inventory_valuation',
            'finance_mappings/import_freight_insurance',
            'finance_mappings/ar_ap_ageing',
            'finance_mappings/entry_bills_purchase',
            'finance_mappings/third_party_payments',
            'finance_mappings/service_team_payment_process',
            'finance_mappings/admin_payments_process',
            'finance_mappings/advance_payment_to_vendor',
            'finance_mappings/normal_payment_to_vendor',
            'finance_mappings/advance_payment_sourcing_procurement',
            'finance_mappings/normal_payment_sourcing_procurement',
            'finance_mappings/quality_team_payment_process',
            'finance_mappings/hr_payment_process',
          ],
        },
        {
          type: 'category',
          label: 'Sourcing & Purchasing (14 processes)',
          items: [
            'sourcing_mappings/README',
            'sourcing_mappings/sample_order_rnd',
            'sourcing_mappings/bom_ordering_new_project',
            'sourcing_mappings/negotiation_bom',
            'sourcing_mappings/raising_po',
            'sourcing_mappings/supplier_management',
            'sourcing_mappings/supplier_rating',
            'sourcing_mappings/inventory_management',
            'sourcing_mappings/new_part_code_management',
            'sourcing_mappings/reconciliation_supplier_ledger',
            'sourcing_mappings/payment_request',
            'sourcing_mappings/logistics_management_porter',
            'sourcing_mappings/logistics_management_import',
            'sourcing_mappings/quality_requirement',
            'sourcing_mappings/scrap_management',
          ],
        },
        {
          type: 'category',
          label: 'R&D Department (5 processes)',
          items: [
            'rnd_mappings/README',
            'rnd_mappings/customer_order_execution',
            'rnd_mappings/approach_procurement',
            'rnd_mappings/handover_process',
            'rnd_mappings/repair_replacement',
            'rnd_mappings/sample_dispatch_customers',
          ],
        },
        {
          type: 'category',
          label: 'HR Department (1 process)',
          items: [
            'hr_mappings/README',
            'hr_mappings/material_receipt_grn_hr',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Additional Resources',
      items: [
        'erpnext_mapping',
        'concrete_plan',
        'dry_run_scenario',
        'thorough_process',
        'website_setup',
      ],
    },
  ],
};

export default sidebars;
