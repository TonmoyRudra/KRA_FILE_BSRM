select * from L3_Batch_Master_Interface bm where bm.batch_number = 'SB22B027' and  bm.mid_pk = 981 and bm.status = 'WAITING'



select extract(hour from cast('12/FEB/2022 10:57:32 PM' as timestamp)) from dual;

select * from L3_STEELS2_DATA_TO_INTERFACE_PKG.


 
DECLARE 
status varchar2(500);
BEGIN
BSRM_IT.L3_Steels2_Data_To_Interface_Pkg.PHYSICAL_INSPECTION_TO_INTERFACE_P(982,'SD22B105', status);
END;

BEGIN BSRM_IT.L3_STEELS2_DATA_TO_INTERFACE_PKG.PHYSICAL_INSPECTION_TO_INTERFACE_P (982,'SD22B105');END;
 
DECLARE 
status varchar2(500);
msg VARCHAR2(500);
BEGIN
 BSRM_IT.L3_Steels2_Data_To_Interface_Pkg.NEW_BATCHES_TO_INTERFACE_P( status,  msg );
END;
 


DECLARE 
status varchar2(500);
msg VARCHAR2(500);

BEGIN
  select * from BSRM_IT.L3_STEELS2_DATA_TO_INTERFACE_PKG.LOAD_DATA_TO_INTERFACE_P ( status,  msg );
END;

BEGIN 
   BSRM_IT.L3_Steels2_Data_To_Interface_Pkg.VALIDATE_P(2143);
END;
 
 DECLARE 
status varchar2(500); 

BEGIN
  L3_INTERFACE_TO_EBS_PKG.BATCH_SCHEDULER( status);
END;

 DECLARE 
status varchar2(500); 
BEGIN 
      L3_INTERFACE_TO_EBS_PKG.CREATE_NEW_RESOURCE(1080, status);commit;
      dbms_output.put_line('Status' || status);
      END;

Successmid:982B:SD22B105

985
"SC22C003"
--delete from l3_physical_inspection_melting where mid_fk = 985
update BSRM_IT.l3_batch_master_interface set status='P.INSPECTION PENDING' where mid_pk=985;
1037
1050
1080
1043
1/1/2022 10:07:29 PM

Update l3_batch_master_interface set  
IF_START_DATE = ADD_MONTHS(IF_START_DATE, +1),
IF_END_DATE = ADD_MONTHS(IF_END_DATE, +1),
LRF_START_DATE = ADD_MONTHS(LRF_START_DATE, +1),
LRF_END_DATE = ADD_MONTHS(LRF_END_DATE, +1),
CCM_START_DATE = ADD_MONTHS(CCM_START_DATE, +1),
CCM_END_DATE = ADD_MONTHS(CCM_END_DATE, +1),
BATCH_NUMBER = BATCH_NUMBER || '_J'
WHERE MID_PK  IN (1050, 1080, 1043)


SELECT * FROM BSRM_IT.l3_batch_master_interface f WHERE f.batch_number in ('SD22C010_J', 'SC22C008','SD22C008','SD22C010_J') 
MID_PK=982;

select * from BSRM_IT.L3_Batch_Details_Interface bb where bb.mid_fk = 1080

select * from BSRM_IT.L3_Item_Map i where i.inventory_item_id = 1746306

delete from bsrm_it.l3_batch_details_interface where did_pk in (1189,1190,1191,1192)


select
  m.batch_no              ,
  min(m.start_date)            ,
  max(m.stop_date)             ,
  436     ,
  'SL1' ,
  'INCOMPLETE' AS status,
  'LOADING' AS stage  ,
  'INITIAL LOAD' AS status_details ,
  'FIRST TIME INSERT' AS last_process_msg,
  MAX(product_grade)   ,
  'ETL'              ,
  SYSDATE
from L3_ST2_IF_SPECIFIC_DATA m
where 
--m.start_date>SYSDATE-31
 m.process_time>0
and m.taptotap>5 --minimum tapping time should be more than 5minute otherwise it will be fake batch
and m.batch_no not in (select im.batch_number from L3_BATCH_MASTER_INTERFACE im where im.org_id=436)
group by m.batch_no
order by min(m.start_date) desc
