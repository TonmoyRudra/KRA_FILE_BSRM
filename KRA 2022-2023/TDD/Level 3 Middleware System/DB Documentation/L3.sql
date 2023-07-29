select * from user_bsrm_it u where u.salesrep_id=17932 in (4849,5007)


-- Main Table 
select * from L3_ST2_CCM_SPECIFIC_DATA
select * from L3_ST2_IF_SPECIFIC_DATA
select * from L3_ST2_LRF_SPECIFIC_DATA
select * from L3_ST2_MATERIALS_ADDITIONS_DETAILS
select * from L3_ST2_MATERIALS_DESCRIPTION
select * from L3_ST2_SCRAP_DETAILS
select * from L3_ST2_STEEL_ANALYSIS_DATA

-- Landing Table
LND_L3_CCM_SPECIFIC_DATA
LND_L3_IF_SPECIFIC_DATA
LND_L3_LRF_SPECIFIC_DATA
LND_L3_MATERIALS_ADDITIONS_DTL
LND_L3_MATERIALS_DESCRIPTION
LND_L3_SCRAP_DETAILS
LND_L3_STEEL_ANALYSIS_DATA

--INTERFACE TABLES
--- IF PhyIns Done but not effect
SELECT j.rowId, j.* FROM L3_BATCH_MASTER_INTERFACE j where  j.status = 'P.INSPECTION PENDING' and 
 j.MID_PK in (Select k.mid_fk from l3_physical_inspection_melting k)
 and j.mid_pk in (select bd.mid_fk from l3_batch_details_interface bd where bd.material_type = 'PRODUCT') 
 and j.recipe_id is not null
 
 and j.batch_number = 'SD236191'
 
 SELECT   j.* FROM L3_BATCH_MASTER_INTERFACE j where j.batch_number = 'SD236143'
 select  bd.rowId,  bd.* from l3_batch_details_interface bd where bd.mid_fk = 3171
 j.mid_pk in (3314,3313)
 
 select * from l3_batch_master_interface
 select * from l3_batch_details_interface h
SELECT * FROM L3_BATCH_DETAILS_INTERFACE d where d.did_pk = 261 and d.mid_fk = 982
SELECT * FROM L3_TRANSECT_MATERIAL_INTERFACE
SELECT * FROM L3_RESOURCES_INTERFACE
SELECT * FROM L3_PROCESS_PARAMETER_INTERFACE


select * from L3_ST2_CCM_PRODUCT_DATA 
 
SELECT ROWID,r.* FROM L3_RESOURCES_MASTER R; -- 
SELECT * FROM L3_PROCESS_PARAMETER_MASTER ; -- Edit modify
SELECT rowid,GV.* FROM L3_GLOVAL_PARAM_VALUES GV;
select * from L3_ITEM_MAP  i where i.org_id=436 and i.grade is not null


--grade
select distinct  i.grade, i.dia FROM L3_ITEM_MAP i where i.org_id=436 and i.grade is not null and i.dia is not null
 GROUP BY  i.grade, i.dia 

--section
select distinct i.dia FROM L3_ITEM_MAP i where i.org_id=436 and i.grade ='B500DWR' and i.dia is not null
--Length/1000 M 
select distinct i.length_in_mm FROM L3_ITEM_MAP i where i.org_id=436 and i.grade ='B500DWR' and i.dia ='160x160'

select * from l3_gloval_param_values where param_name='PER_METER_WEIGHT_KG' and  org_id = 436 --take formula value
select TO_NUMBER(TO_CHAR(bb.if_start_date,'HH24')), bb.if_start_date from l3_batch_master_interface bb where bb.mid_pk = 984 --destination

--delete from l3_physical_inspection_melting where mid_fk = 2310

select * from l3_batch_details_interface b where b.mid_fk = 2310
SELECT j.rowId, j.* FROM L3_BATCH_MASTER_INTERFACE j where j.batch_number = 'SD235050'
select * from l3_physical_inspection_melting hh where hh.batch_number = 'SD235050'
select hr.ebs_locationid , hr.ebs_ou_id, hr.* from bsrm_it.hr_employeeinfo_ashris hr where hr.ebs_locationcode = 436 hr.hr_employeeid = 17020000013782

grant select, insert, update, delete on L3_BATCH_DETAILS_INTERFACE to APPS;

SELECT * FROM ITEM_MASTER_VIEW_BSRM item where item.ITEM_TYPE;
--BATCH DETAILS
SELECT ROWID, s.* FROM L3_BATCH_MASTER_INTERFACE s WHERE MID_PK=2710;
SELECT * FROM L3_ST2_CCM_PRODUCT_DATA

select * from l3_batch_details_interface j where j.mid_fk = 2710
--INGREDIENT
select * from l3_batch_details_interface D
INNER JOIN L3_Item_Master_View_Bsrm I ON D.INVENTORY_ITEM_ID=I.INVENTORY_ITEM_ID AND D.ORG_ID=I.ORG_ID
WHERE MATERIAL_TYPE in ('INGREDIENT','PRODUCT', 'BYPRODUCT') AND MID_FK=2829 AND ORDER BY D.Did_Pk;

Select * from L3_Item_Map item 
INNER JOIN l3_item_master_view_bsrm iv on iv.ITEM_CODE = item.item_code
where 

select * from L3_Item_Master_View_Bsrm 

select * from Item_Master_View_Bsrm i where i.Item_name = 'APC Dust - Manufactured'

select * from Item_Master_View_Bsrm i where i.INVENTORY_ITEM_ID = 1748306 and i.ORGANIZATION_ID = 436

select * from l3_batch_details_interface D 
WHERE MATERIAL_TYPE in ('INGREDIENT') AND MID_FK=982;
--QUALITY
SELECT * FROM L3_QUALITY_RESULT_INTERFACE WHERE MID_FK=982 AND BATCH_STEP_NO IN (10,20,30) order by TEST_ID
--PHYSICAL INSPECTION
--AS LIKE AS P.INS ENTRY +
SELECT * FROM L3_QUALITY_RESULT_INTERFACE WHERE MID_FK=981 AND BATCH_STEP_NO =40

--RESOURCE
SELECT * FROM L3_RESOURCES_INTERFACE WHERE MID_FK=981

--PROCESS PARAMETER
SELECT * FROM L3_PROCESS_PARAMETER_INTERFACE WHERE MID_FK=981
SELECT * FROM BSRM_IT.L3_BATCH_MASTER_INTERFACE M WHERE M.MID_PK=1405
SELECT * FROM BSRM_IT.L3_TRANSECT_MATERIAL_INTERFACE M WHERE M.MID_FK=1405;
--FORMULA ITEM
select * from L3_ITEM_MAP item where item.p_ins_type = 'FORMULA'

select * from l3_interface_to_ebs_pkg

select * from PLC_L2_INTEGRATION_PKG

select * from BSRM_IT.L3_Batch_Master_Interface bm where bm.batch_number not in (
select j.batch_no from gme_batch_header j where j.ORGANIZATION_ID = 436);

select * from bsrm_it.l3_batch_details_interface d where d.mid_fk in (1037
,1080
,1076
)
SELECT * FROM BSRM_IT.l3_batch_master_interface s order BY S.CREATION_DATE DESC  where s.batch_number in ('SD22C010_J'
,'SC22C014_J'
,'SA22B107')

SA22B148
SB22B027
SB22B026
SC22C080
SD22C163
SB22C098
SC22C103A
SD22C095
SD22C1406
SD22C098

 select m.lot_number,sum(m.primary_transaction_quantity) StockQty
                from Mtl_Onhand_Quantities_Detail m
                where organization_id= 436
                and inventory_item_id=1746306
                and subinventory_code = 'SL1-000034'
                and Locator_id=19359
                and m.date_received <= '02-JAN-2023' --vTransactionDate, FUTURE LOT NOT ALLOWED FOR TRANSACTION
                group by m.lot_number
                order by StockQty;
                
                 SELECT * 
                           FROM MTL_LOT_NUMBERS_ALL_V k
                           where k.INVENTORY_ITEM_ID=1746306
                                 and k.ORGANIZATION_ID=436
                                 and k.LOT_NUMBER='SML Scrap Yard'
                                 and rownum=1
                           order by k.CREATION_DATE DESC;
                           
  select NVL(sum(f.PRIMARY_RESERVATION_QUANTITY),0)
                        from MTL_RESERVATIONS_ALL_V f
                        where f.ORGANIZATION_ID=436 
                        and f.INVENTORY_ITEM_ID=1746306
                        and f.SUBINVENTORY_CODE='SL1-000034'
                        and f.LOCATOR_ID=19359
                        and f.LOT_NUMBER='SML Scrap Yard';
                        
                        select * from l3_resources_interface rr where rr.mid_fk in (1037
,1080
,1076
)
                        select * from l3_process_parameter_interface pp where pp.mid_fk in (1037
,1080
,1076
)
    L3_INTERFACE_TO_EBS_PKG.CREATE_NEW_RESOURCE(P_MID, status);commit;
    if LOWER(status) = 'failed' then
      status := 'FAILED'; 
      UPDATE BSRM_IT.L3_Batch_Master_Interface s set status='FAILED', status_details = 'Create New Resources Failed', s.last_update_date = SYSDATE where s.mid_pk = P_MID;
      commit;
      RETURN;
    end if;
    
    
    --Delete from L3_PHYSICAL_INSPECTION_MELTING where batch_number = 'SC235060'
select * from L3_PHYSICAL_INSPECTION_MELTING h where h.batch_number = 'SC235055'
