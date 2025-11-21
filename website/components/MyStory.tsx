import React, { useRef, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

// Image configuration with aspect ratio based spans
const IMAGE_CONFIG = [
    {
        "src": "B279D116-220D-4A24-8999-0AB17F79C6FF_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "E093DC15-0069-4E3E-B706-BCD97A4140C9_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "F1DE8CDB-3C48-4029-8D6E-6E3D1A98F823_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "FC417800-2E63-48AE-919F-2F7C6E5B9DD6_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "CC77DF76-0051-4748-88FD-FFC612E1E04A_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "15660CA0-7A06-47BB-8D73-C525F2E31BC8_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "7E6C2AE8-239C-4294-B214-5971C54BD64C_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "0BAEF3A2-3514-45A5-B09A-2FECA94C7A59_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "CF1958C7-DA39-4579-9B02-1AF29874F7D2_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "408BEC37-E348-4958-A307-9D8F3899C320_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "FD4A816D-7FFA-4844-8A61-9AD9AB86AD63_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "C9105301-60F1-4442-A0E4-6210B6AEF4C1_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "62BB4635-3570-4B82-8469-52A609A2790F_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "61AA8FEC-9344-4545-B37E-D82127D9090D_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "3FC58441-4FE6-4296-B340-70DC076251E5_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "70F68DA9-9D60-411D-9943-E32BBEBECE43_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "B2B6A053-10EF-4050-A705-00A81DFA711A_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "1C5961E8-E1E9-40AF-8F4D-BEA53AE399B5_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "E78EDCF0-94F2-4494-B0E3-1333FF244AC3_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "84CDC02D-5C4A-4D43-9D05-7703F39B1232_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "A7E639F1-4AF9-4579-8FD5-1387DBA3AD73_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "0E328C0F-CF16-42BE-9FA0-F63C3775A2F3_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "3FD968D4-B2BC-4A97-ACB2-D5566AF50A88_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "F0863FCB-685F-4773-8938-AF7B5C226E25_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "7733FAFE-2489-43DA-ADC8-9DC60CD6DB9B_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "AD2E59FF-055C-4EBC-9AFC-30DDEE92E526_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "881BE30F-1462-49F2-B192-74D68AC58E5E_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "EF505590-404C-40DF-8624-316C6D31C6CE_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "D2AC4B52-C3CD-40E4-B255-136977A3F281_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "DA129862-EA25-4063-B465-B1C724B785DB_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "3737F593-305D-49FA-9898-168A2216BA2E_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "1F89D622-FB60-46D3-9B05-0D053E0E0A20_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "47BF78B9-BA85-4ACD-8F2E-00D77E631682_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "906ABF28-E506-4284-B5F4-E95AFCEAD1B0_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "F7BA39E6-7FF1-48E9-BCF4-F887BEF257B0_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "B5F8E536-7300-418A-8BA3-A366D00FB441_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "E8D1E2AE-EE98-46E9-8269-49117A5748C9_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "73690458-C781-4C03-8E91-9E5501FA35C2_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "54DB19DE-F416-4064-82B3-4BDFD093C9DD_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "AED90F98-01EA-45B0-9F1B-669E339710AB_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "CC99CB29-DB85-441D-BACF-33C9B15CEA53_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "3855A4A0-AEEC-44F1-9653-06E5F7137DE5_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "BA2CEAB6-F5D1-4632-9D8C-4D4A3C4A8A43_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "F0F9C782-55E0-44FE-9F77-9BF428324C41_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "8B60BE0A-145D-4563-8136-A756609D8550_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "E615C596-2895-4A9F-8E83-7F1EB5479B23_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "3045D034-C13E-4DD6-909E-4FBE1BBCC6C8_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "C12A96FC-DA95-4F0A-AC62-55EE4D9A2FCB_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "8D90273D-34D8-450B-AD67-6AE2725B0E62_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "2BB54059-316E-45E8-A466-9C1B7BFE6302_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "9BDA14A8-B0A8-4E09-A429-646B18E3C5DE_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "5BF37EDA-BAAA-46AF-B184-76FB4F0455B3_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "222DBF9E-AE25-4C20-A977-391B6D997C4D_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "D5110639-9921-4C25-8613-273DAA6CA827_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "CD01D3AD-2E76-4817-BF56-B6DDFC0FB4BE_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "FDEC9B4D-83DE-4037-BB28-1D410F80ABCD_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "AC26BBE7-A5E2-41E1-9514-273E76557324_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "93D35C19-6B1E-49F1-BA5C-521C4AB64F1E_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "7684187F-48C8-4C8A-AA34-035AFCF95BD1_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "7FCDA191-84FA-44DE-90C9-2B2B228CD34E_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "0C0B5DD1-4C6F-4C4F-8947-89BF4B5479BB_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "FC045A76-4BDF-4386-8F98-A70E6AF915AF_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "71C3BAD8-DA5A-41CA-B4C0-6A0F993DD1AD_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "6599C10D-6A2E-4161-9926-A74159B8A6AF_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "C0C1FF59-2BDB-4948-89F0-DF5FB893A620_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "7CD52DC1-7FDE-4B35-929D-C7A29C6AF291_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "1BD587DC-435D-4F04-8729-DC56C9A9B248_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "7C49CC34-02D4-4047-9B06-20A8332B00DF_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "FEF7406D-1CAE-4A17-83EA-8B68550ADD99_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "6C727D7D-2C3B-4936-A17F-09A67A133B62_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "EB7A4171-888F-42EC-A383-E7A031266D35_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "705B17CD-B3C9-45C3-AF50-5760E7E547C7_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "F3D9167F-3753-4DFC-8968-249059ECAF19_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "2B1AC995-6289-4DE1-A8C9-18D8A804B7B0_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "F8C2CD45-CE3F-42D2-A7C4-F17A69371B5A_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "4B49CDE7-F00C-4D41-967A-3220F12622B4_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "38FDD2C7-FBD7-4E3A-8F08-069AAE7E704E_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "115DEEA8-FDCC-457B-9B93-1141EB4EF029_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "83F4310D-277F-4D34-B959-188D699B3508_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "09B3D91C-BC5C-4CF4-B906-B2BA88ED382D_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "CF973756-9FFC-4CAA-B48C-AC25D4A2922B_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "F3275D4F-BDB3-476F-AA21-05D173550212_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "6B5BBA3E-F57F-458C-A120-A2082C5CA021_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "0F9230E1-61FD-46DF-B3C8-E147DB07D4F2_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "2C16F421-A98C-4CCF-B449-D85366E87B33_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "A15117FB-ADCB-4CEE-9AC5-C1F7D9BD9886_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "EE815972-D1E0-4EF7-A5AF-4EC874A3CF49_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "91CC54A4-6629-46D6-94F9-FD20E6CFF07C_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "4D3BB5FF-5BAE-4908-A108-B3C4E7AD4F08_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "ACBE835E-D679-44DB-918C-DDD7912AA7D9_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "E764325B-0EFA-4D7C-9DAE-9ABE07329350_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "E551AFA9-5D99-4DE8-BC46-99779FABBCCD_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "9349F3B6-5947-431A-9F2B-B6168B70F590_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "707DF8B8-27D3-4954-9BDD-5DA855787279_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "BE9EA941-622F-4734-8CFA-5C87D0075DAA_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "DC95E54B-17F2-4C30-B693-A60E6B9D9350_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "F0D18A67-C7CE-49DE-A8AA-80F07BBDF8C8_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "DBB2255F-C21A-49DF-8FE2-9686A9B60102_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "AA17993F-5EED-4EE6-9386-A62AAB015E85_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "2816642C-B19C-4A69-9AA1-94511B2BEC4B_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "A98D4CF3-3350-46D6-A096-4F6594EB59B7_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "0366B59F-0F8D-4A78-9B69-4CE19B218AF0_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "5C3DF0F4-BEEA-4A04-93CE-C4D371690D10_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "218B7FFC-31DD-4D78-9850-0B56836B617D_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "D314182E-0E3B-44F5-B350-AB2F05913068_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "063900C3-1163-4171-B13C-8A87FE0B8FF9_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "AEFC38BD-4A0D-4849-A240-B82A66C1DA3E_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "D3B0172E-8601-4743-9537-AFD89CD6F2E1_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "1BC00F1C-F0E9-41AE-8B95-6857C2CF51B2_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "ED80FD8F-3A50-498E-9876-22550517099B_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "157CAA68-DEA2-4037-BB64-A3107AEA736F_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "A0B0B1E3-51AB-4B52-90FA-DE6E906045C2_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "5534FD49-0921-4157-93F1-DB1DBFDB0503_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "F513C9B3-7661-4219-BA57-CE947EB2305C_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "C970D7E8-141C-4FEB-AF4D-F0D314988478_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "79261E45-2390-4015-90F2-965D2FDF0DCB_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "269D8517-F837-4EEF-9718-13CF16EC17DB_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "F34A1F45-827F-40BC-AA45-00C1F924E430_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "F61D3512-9916-489C-A822-A7AD14823BA1_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "5D3AE918-9405-44AB-A496-31CBD6909DF3_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "2EA3EAE6-823C-4CF1-A7CC-595CD8FC09A4_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "98B43A03-C0DC-482A-95FB-0AC03CF3E5EA_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "94A8740B-16FC-4726-B377-B3DCD4A3BA00_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "18936E60-B09D-4A1E-A83B-2F756456576A_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "2C5711EB-7E71-4C35-A182-59590F1B5D27_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "32199AE4-8ECA-4EEA-9BD8-A6F206D00C51_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "2784689C-9FCA-4D21-8F68-9CB73A16BA6D_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "61887E55-A7F6-4A41-9D6B-7BF1057444BF_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "0DE8C776-FD43-4B1B-99F6-E639E76189BD_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "AEA63F9B-2D4D-48C3-8B80-178F505D16E7_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "FF8CF5AD-6D9F-40C4-90E5-69BB52DC689F_1_105_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    },
    {
        "src": "0E3982E3-ED69-49A3-A4C1-A1AFFE66920A_4_5005_c.jpeg",
        "span": "md:col-span-1 md:row-span-1"
    }
];

interface BentoItemProps {
    src: string;
    className?: string;
    priority?: boolean;
}

const BentoItem: React.FC<BentoItemProps> = ({ src, className = '', priority = false }) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!itemRef.current) return;

        const rect = itemRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Calculate rotation (max 10 degrees)
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            ref={itemRef}
            className={`relative group rounded-2xl overflow-hidden bg-slate-800 ${className}`}
            onMouseMove={(e) => {
                setIsHovered(true);
                handleMouseMove(e);
            }}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
            }}
        >
            <div
                className="w-full h-full transition-transform duration-200 ease-out"
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.05 : 1})`,
                }}
            >
                {/* Image */}
                <img
                    src={`/My story/${src}`}
                    alt="Memory"
                    loading={priority ? "eager" : "lazy"}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setIsLoading(false)}
                />

                {/* Loading Skeleton */}
                {isLoading && (
                    <div className="absolute inset-0 bg-slate-800 animate-pulse" />
                )}

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Glossy Reflection Effect */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: `linear-gradient(
                            105deg,
                            transparent 20%,
                            rgba(255, 255, 255, 0.1) 40%,
                            rgba(255, 255, 255, 0.2) 45%,
                            rgba(255, 255, 255, 0.1) 50%,
                            transparent 80%
                        )`,
                        transform: `translateX(${rotation.y * 2}%) translateY(${rotation.x * 2}%)`,
                    }}
                />

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition-colors duration-300" />
            </div>
        </div>
    );
};

export const MyStory: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
            {/* Navigation */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <a
                        href="#home"
                        className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </a>
                </div>
            </div>

            {/* Header */}
            <div className="pt-32 pb-12 px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                    My Story
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                    A visual journey through the moments that shaped who I am today.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[400px] grid-flow-dense">
                    {IMAGE_CONFIG.map((item, index) => (
                        <BentoItem
                            key={item.src}
                            src={item.src}
                            className={item.span}
                            priority={index < 8}
                        />
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="text-center pb-12 text-slate-500 text-sm">
                <p>End of gallery</p>
            </div>
        </div>
    );
};
