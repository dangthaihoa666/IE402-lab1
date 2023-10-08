import { createPoint } from '../template/createPoint.js'

var symbol = {
    type: "picture-marker",
    url: "https://cdn-icons-png.flaticon.com/512/8/8178.png",
    width: "24px",
    height: "24px"
}

var symbolC3 = {
    type: "picture-marker",
    //url: "https://cdn-icons-png.flaticon.com/512/8/8178.png",
    //url: "https://cdn.vectorstock.com/i/preview-1x/16/89/school-icon-high-related-vector-47671689.jpg",
    url: "data:image/png;base64,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",
    width: "24px",
    height: "24px"
}
export var TSN = createPoint(
    109.20195214590278,
    12.269494375171012,
    "Trường Đại học Nha Trang",
    "tỉnh Khánh Hòa",
    symbol
)

export var KGH = createPoint(
    109.19332353752453,
    12.23511737457715,
    "Trường Sĩ quan không quân",
    "tỉnh Khánh Hòa",
    symbol
)

export var HQH = createPoint(
    109.19597027125455,
    12.24542466286468,
    "Học Viện Hải Quân",
    "tỉnh Khánh Hòa",
    symbol
)

export var UKH = createPoint(
    109.19486998365717,
    12.245652771022888,
    "Đại học Khánh Hòa",
    "tỉnh Khánh Hòa",
    symbol
)

export var TTH = createPoint(
    109.19937654484731,
    12.283540979542042,
    "Trường Sĩ quan Thông tin - Hệ Quân sự - Đại học Thông tin liên lạc",
    "tỉnh Khánh Hòa",
    symbol
)

export var TBD = createPoint(
    109.1802445951744,
    12.285495873994897,
    "Đại học Thái Bình Dương",
    "tỉnh Khánh Hòa",
    symbol
)

export var TCU = createPoint(
    109.19641850919254,
    12.282367138840025,
    "Trường Sĩ quan Thông tin - Hệ Dân sự - Đại học Thông tin liên lạc",
    "tỉnh Khánh Hòa",
    symbol
)

export var UPT = createPoint(
    108.16842536374931,
    10.941222637665543,
    "Trường Đại học Phan Thiết",
    "tỉnh Bình Thuận",
    symbol
)

export var UNL = createPoint(
    109.03597568312827,
    11.601383475121997,
    "Phân hiệu Đại học Nông Lâm TP. HCM tại Ninh Thuận",
    "tỉnh Ninh Thuận",
    symbol
)


// Huế

export var DHA = createPoint(
    107.60988784810479,
    16.43718755988419,
    "Đại học Luật - Đại Học Huế",
    "tỉnh Thừa Thiên - Huế",
    symbol
)

export var DHC = createPoint(
    107.60214348921832,
    16.444128681041,
    "Khoa Giáo Dục Thể Chất – Đại Học Huế",
    "tỉnh Thừa Thiên - Huế",
    symbol
)

export var DHD = createPoint(
    107.60013281371529,
    16.478494774380838,
    "Trường Du Lịch Đại học Huế",
    "tỉnh Thừa Thiên - Huế",
    symbol
)

export var DHF = createPoint(
    107.59947300531631,
    16.443234059376028,
    "Trường Đại Học Ngoại Ngữ Huế",
    "tỉnh Thừa Thiên - Huế",
    symbol
)

export var DHK = createPoint(
    107.60401154772993,
    16.443548987336072,
    "Trường Đại học Kinh tế, Đại học Huế",
    "tỉnh Thừa Thiên - Huế",
    symbol
)

export var DHL = createPoint(
    107.57287131242676,
    16.477479596168806,
    "Trường Đại học Nông Lâm Huế",
    "tỉnh Thừa Thiên - Huế",
    symbol
)

export var DHN = createPoint(
    107.57418802559656,
    16.478236923322925,
    "Trường Đại học Nghệ thuật Huế",
    "tỉnh Thừa Thiên - Huế",
    symbol
)

export var DHS = createPoint(
    107.59126190573326,
    16.467812745285467,
    "Trường Đại học Sư phạm Huế",
    "tỉnh Thừa Thiên - Huế",
    symbol
)

export var DHT = createPoint(
    107.59198610541203,
    16.45980390595444,
    "Trường Đại học Khoa học Huế",
    "tỉnh Thừa Thiên - Huế",
    symbol
)

export var DHY = createPoint(
    107.59024853092285,
    16.463033190142188,
    "Đại Học Y Dược – Đại Học Huế",
    "tỉnh Thừa Thiên - Huế",
    symbol
)

export var DPX = createPoint(
    107.59234633701108,
    16.464563383886077,
    "Đại Học Dân Lập Phú Xuân",
    "tỉnh Thừa Thiên - Huế",
    symbol
)


// Quảng Trị

export var DKT = createPoint(
    107.09821446799974,
    16.78985058347215,
    "Phân Hiệu Đại Học Huế tại Quảng Trị",
    "tỉnh Quảng Trị",
    symbol
)

// Quảng Bình

export var DQB = createPoint(
    106.60804788265331,
    17.481619649017304,
    "Trường Đại học Quảng Bình",
    "tỉnh Quảng Bình",
    symbol
)

// Thanh Hóa

export var DH_VHTTDL_TH = createPoint(
    105.7759752054005,
    19.77850368590644,
    "Trường Đại học Văn hoá, Thể thao và Du lịch Thanh Hoá",
    "tỉnh Thanh Hóa",
    symbol
)

export var DH_HD_TH = createPoint(
    105.78210240056889,
    19.761123119959308,
    "Trường Đại học Hồng Đức",
    "tỉnh Thanh Hóa",
    symbol
)

// Nghệ An

export var DH_KT_NA = createPoint(
    105.68114681350335,
    18.692270315534486,
    "Trường Đại học Kinh tế Nghệ An",
    "tỉnh Nghệ An",
    symbol
)

export var DH_CNV_NA = createPoint(
    105.66612577141595,
    18.675812518524634,
    "Trường Đại học Công nghiệp Vinh",
    "tỉnh Nghệ An",
    symbol
)

export var DH_CNVX_NA = createPoint(
    105.71783243892624,
    18.787992597230602,
    "Trường Đại học Công nghệ Vạn Xuân",
    "tỉnh Nghệ An",
    symbol
)

export var DH_SPKTV_NA = createPoint(
    105.70773497107018,
    18.672050863645588,
    "Trường Đại học Sư Phạm Kỹ Thuật Vinh",
    "tỉnh Nghệ An",
    symbol
)

export var DH_V_NA = createPoint(
    105.69369554470164,
    18.661116875139246,
    "Trường Đại học Vinh",
    "tỉnh Nghệ An",
    symbol
)

export var DH_YKV_NA = createPoint(
    105.69914348210028,
    18.685130594271655,
    "Trường Đại học Y Khoa Vinh",
    "tỉnh Nghệ An",
    symbol
)

// Hà Tĩnh

export var DH_HT_HT = createPoint(
    105.91397468622738,
    18.323857216561134,
    "Trường Đại học Hà Tĩnh",
    "tỉnh Hà Tĩnh",
    symbol
)

// Quảng Nam

export var DH_PCT_QN = createPoint(
    108.32922193701295,
    15.879735953117965,
    "Trường Đại học Phan Châu Trinh",
    "tỉnh Quảng Nam",
    symbol
)

export var DH_QN_QN = createPoint(
    108.48231486457875,
    15.563474392364581,
    "Trường Đại học Quảng Nam",
    "tỉnh Quảng Nam",
    symbol
)

// Quảng Ngãi

export var DH_TCKT_QN = createPoint(
    108.82169011005992,
    15.091384261050493,
    "Trường Đại học Tài chính - Kế toán",
    "tỉnh Quảng Ngãi",
    symbol
)

export var DH_PVD_QN = createPoint(
    108.80657495572157,
    15.104504472688808,
    "Trường Đại học Phạm Văn Đồng",
    "tỉnh Quảng Ngãi",
    symbol
)

export var DH_CN_QN = createPoint(
    108.81063189316068,
    15.108991261291862,
    "Trường Phân hiệu ĐH Công nghiệp Tp. HCM tại Quảng Ngãi",
    "tỉnh Quảng Ngãi",
    symbol
)

// Đã Nẵng

export var DH_DA_DN = createPoint(
    108.22106098623868,
    16.032113233505605,
    "Trường Đại học Đông Á",
    "tỉnh Đà Nẵng",
    symbol
)

export var DH_CN_DN = createPoint(
    108.2140746048295,
    16.076729167345633,
    "Trường Khoa Công nghệ - Đại học Đà Nẵng",
    "tỉnh Đà Nẵng",
    symbol
)

export var DH_NN_DN = createPoint(
    108.21123206033289,
    16.034501129177894,
    "Trường Trường Đại họ̣c Ngoại ngữ - Đại học Đà Nẵng",
    "tỉnh Đà Nẵng",
    symbol
)

export var DH_CNTTTT_DN = createPoint(
    108.22018918248617,
    16.07090837054982,
    "Trường Khoa Công nghệ thông tin và truyền thông - Đại học Đà Nẵng",
    "tỉnh Đà Nẵng",
    symbol
)

export var DH_BK_DN = createPoint(
    108.1498905642513,
    16.07386706743243,
    "Trường Trường Đại họ̣c Bách khoa - Đại học Đà Nẵng",
    "tỉnh Đà Nẵng",
    symbol
)

export var DH_KT_DN = createPoint(
    108.23864444684632,
    16.047835618477187,
    "Trường Trường Đại học Kinh tế - Đại học Đà Nẵng",
    "tỉnh Đà Nẵng",
    symbol
)

export var DH_SP_DN = createPoint(
    108.16016842614792,
    16.061204259222922,
    "Trường Trường Đại họ̣c Sư phạm - Đại học Đà Nẵng",
    "tỉnh Đà Nẵng",
    symbol
)

export var DH_DT_DN = createPoint(
    108.20975646378966,
    16.0599665729353,
    "Trường Đại học Duy Tân",
    "tỉnh Đà Nẵng",
    symbol
)

export var DH_Y_DN = createPoint(
    108.24786692159044,
    15.9741471751056,
    "Trường Khoa Y dược - Đại học Đà Nẵng",
    "tỉnh Đà Nẵng",
    symbol
)

export var DH_KTR_DN = createPoint(
    108.2220597376544,
    16.032189980393273,
    "Trường Đại học Kiến trúc Đà Nẵng",
    "tỉnh Đà Nẵng",
    symbol
)

export var DH_TDTT_DN = createPoint(
    108.18032489467444,
    16.071003496963595,
    "Trường Đại học Thể dục Thể thao Đà Nẵng",
    "tỉnh Đà Nẵng",
    symbol
)

export var DH_KTY_DN = createPoint(
    108.21830136182933,
    16.0680444749643,
    "Trường Đại học Kỹ thuật Y - Dược Đà Nẵng",
    "tỉnh Đà Nẵng",
    symbol
)

// Bình Định

export var DH_QN_BD = createPoint(
    109.21911581490382,
    13.759777742824276,
    "Trường Đại học Quy Nhơn",
    "tỉnh Bình Định",
    symbol
)

export var DH_QT_BD = createPoint(
    109.18593439697253,
    13.799239802471707,
    "Trường Đại học Quang Trung",
    "tỉnh Bình Định",
    symbol
)

// Đăk Lăk

export var DH_BMT_DL = createPoint(
    108.0724740471054,
    12.713797090294152,
    "Trường Đại học Buôn Ma Thuột",
    "tỉnh Đăk Lăk",
    symbol
)

export var DH_TN_DL = createPoint(
    108.02396770254686,
    12.65143377716876,
    "Trường Đại học Tây Nguyên",
    "tỉnh Đăk Lăk",
    symbol
)

// Lâm Đồng


export var DH_Y_LD = createPoint(
    108.43599607405814,
    11.964580114849154,
    "Trường Đại học Yersin Đà Lạt",
    "tỉnh Lâm Đồng",
    symbol
)

export var DH_DL_LD = createPoint(
    108.44420256290375,
    11.954563492936458,
    "Trường Đại học Đà Lạt",
    "tỉnh Lâm Đồng",
    symbol
)
export var DH_KT_HCM_DL = createPoint(
    108.46382,
    11.94479,
    "Trường Đại học Kiến trúc Hồ Chí Minh - Cơ sở Đà Lạt",
    "tỉnh Lâm Đồng",
    symbol
)
export var CD_SP_DL = createPoint(
    108.45151,
    11.94528,
    "Trường Cao đẳng Sư phạm Đà Lạt",
    "tỉnh Lâm Đồng",
    symbol
)
export var CD_YT_LD = createPoint(
    108.43138,
    11.95002,
    "Trường Cao đẳng Y tế Lâm Đồng",
    "tỉnh Lâm Đồng",
    symbol
)
export var CD_DL_DL = createPoint(
    108.39216,
    11.97008,
    "Trường Cao đẳng Du lịch Đà Lạt",
    "tỉnh Lâm Đồng",
    symbol
)
export var CD_KT_LD = createPoint(
    108.43330,
    11.93600,
    "Trường Cao đẳng Kinh tế - Kỹ thuật Lâm Đồng",
    "tỉnh Lâm Đồng",
    symbol
)
export var CD_CT_LD = createPoint(
    108.45926,
    11.93855,
    "Trường Cao đẳng Chính trị Lâm Đồng",
    "tỉnh Lâm Đồng",
    symbol
)
// Gia Lai

export var DH_NL_GL = createPoint(
    107.9916460410924,
    13.964938470026485,
    "Trường Phân hiệu Trường Đại học Nông lâm Tp. Hồ Chí Minh tại Gia Lai",
    "tỉnh Gia Lai",
    symbol
)

// Kon Tum

export var DH_DN_KT = createPoint(
    107.99955831123316,
    14.362082236333086,
    "Trường Phân hiệu Đại học Đà Nẵng tại KonTum",
    "tỉnh Kon Tum",
    symbol
)

// Phú Yên

export var DH_PY_PY = createPoint(
    109.3093108170534,
    13.102933169532083,
    "Trường Đại học Phú Yên",
    "tỉnh Phú Yên",
    symbol
)

export var DH_XDMT_PY = createPoint(
    109.31652540323356,
    13.094986738775829,
    "Trường Đại học Xây Dựng miền Trung",
    "tỉnh Phú Yên",
    symbol
)
//Bình Dương
export var DH_VD = createPoint(
    106.61492173068446,
    11.110665820660131,
    "Trường Đại học Việt Đức",
    "tỉnh Bình Dương",
    symbol
)
export var DH_KT_BD = createPoint(
    106.71185873068446,
    10.956465820660131,
    "Trường Đại học Kinh tế - Kỹ thuật Bình Dương",
    "tỉnh Bình Dương",
    symbol
)
export var DH_TDM = createPoint(
    106.67544673068446,
    10.980725820660131,
    "Trường Đại học Thủ Dầu Một",
    "tỉnh Bình Dương",
    symbol
)
export var DH_MO_BD = createPoint(
    106.67360873068446,
    10.988515820660131,
    "Trường Đại học Mở Bình Dương",
    "tỉnh Bình Dương",
    symbol
)
export var DH_TL_BD = createPoint(
    106.68380873068446,
    10.950345820660131,
    "Trường Đại học Thủy Lợi Bình Dương",
    "tỉnh Bình Dương",
    symbol
)
export var DH_SQ_CB_BD = createPoint(
    106.64615873068446,
    10.989245820660131,
    "Trường Đại học Sỹ Quan Công Binh Bình Dương",
    "tỉnh Bình Dương",
    symbol
)
export var DH_QTMD = createPoint(
    106.66619073068446,
    11.055310820660131,
    "Trường Đại học Quốc tế Miền Đông",
    "tỉnh Bình Dương",
    symbol
)
//Đồng Nai
export var DH_LH_CS1 = createPoint(
    106.79070073068446,
    10.9558401820660131,
    "Trường Đại học Lạc Hồng - Cơ sở 1",
    "tỉnh Đồng Nai",
    symbol
)
export var DH_LH_CS2 = createPoint(
    106.79808073068446,
    10.9562901820660131,
    "Trường Đại học Lạc Hồng - Cơ sở 2",
    "tỉnh Đồng Nai",
    symbol
)
export var DH_LH_CS3 = createPoint(
    106.79723073068446,
    10.9684601820660131,
    "Trường Đại học Lạc Hồng - Cơ sở 3",
    "tỉnh Đồng Nai",
    symbol
)
export var DH_LH_CS4 = createPoint(
    106.79717073068446,
    10.9684101820660131,
    "Trường Đại học Lạc Hồng - Cơ sở 4",
    "tỉnh Đồng Nai",
    symbol
)
export var DH_LH_CS5 = createPoint(
    106.79723073068446,
    10.96840,
    "Trường Đại học Lạc Hồng - Cơ sở 5",
    "tỉnh Đồng Nai",
    symbol
)
export var DH_CN_DongN = createPoint(
    106.86873068446,
    10.9846501820660131,
    "Trường Đại học Công nghệ Đồng Nai",
    "tỉnh Đồng Nai",
    symbol
)
export var DH_DN = createPoint(
    106.86138,
    10.96061,
    "Trường Đại học Đồng Nai",
    "tỉnh Đồng Nai",
    symbol
)
export var DH_CN_MD_DN = createPoint(
    106.84197,
    10.96419,
    "Trường Đại học Công nghệ Miền Đông",
    "tỉnh Đồng Nai",
    symbol
)
export var DH_LN_DN = createPoint(
    107.00028,
    10.96673,
    "Trường Đại học Lâm Nghiệp",
    "tỉnh Đồng Nai",
    symbol
)
export var DH_NH_DN = createPoint(
    106.95792,
    10.87710,
    "Trường Đại học Sĩ quan lục quân 2",
    "tỉnh Đồng Nai",
    symbol
)

//Bình Phước
export var CD_SP_BP = createPoint(
    106.91522,
    11.53348,
    "Trường Cao đẳng Sư phạm Bình Phước",
    "tỉnh Bình Phước",
    symbol
)
export var CD_CN_CS_BP = createPoint(
    106.90229,
    11.55487,
    "Trường Cao đẳng Công nghệ Cao su Bình Phước",
    "tỉnh Bình Phước",
    symbol
)
//Bình Dương
export var C3_DA_BD =  createPoint(
    106.7636186,
    10.9111172,
    "Trường THPT Dĩ An",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_AM_BD = createPoint(
    106.68185,
    11.01685,
    "Trường THPT An Mỹ",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_BB_BD = createPoint(
    106.63493,
    11.24928,
    "Trường THPT Bàu Bàng",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_BA_BD = createPoint(
    106.80610,
    10.90130,
    "Trường THPT Bình An",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_BP_BD = createPoint(
    106.65860,
    11.07275,
    "Trường THPT Bình Phú",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_BC_BD = createPoint(
    106.60996,
    11.15646,
    "Trường THPT Bến Cát",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_CHV_BD = createPoint(
    106.65757,
    10.99216,
    "Trường THPT Chuyên Hùng Vương",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_DiA_BD = createPoint(
    106.76822,
    10.91188,
    "Trường THPT Dĩ An",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_DT_BD = createPoint(
    106.36719,
    11.28178,
    "Trường THPT Dầu Tiếng",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_DTri_BD = createPoint(
    106.67858,
    10.81460,
    "Trường THPT Đức Trí",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_HD_BD = createPoint(
    106.71841,
    10.96730,
    "Trường THPT Hoàng Diệu",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_HVN_BD = createPoint(
    106.79774,
    11.06249,
    "Trường THPT Hòang Văn Nghệ",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_LU_BD = createPoint(
    106.63396,
    11.27776,
    "Trường THPT Lai Uyên",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_LL_BD = createPoint(
    106.83986,
    11.13640,
    "Trường THPT Lê Lợi",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_LH_BD = createPoint(
    106.50340,
    11.30694,
    "Trường THPT Long Hòa",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_NTN_BD = createPoint(
    106.68533,
    11.06632,
    "Trường THPT Ngô Thời Nhiệm",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_NAN_BD = createPoint(
    106.75436,
    10.87802,
    "Trường THPT Nguyễn An Ninh",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_NH_BD = createPoint(
    106.81748,
    10.86528,
    "Trường THPT Nguyễn Huệ",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_NT_BD = createPoint(
    106.68839,
    10.95933,
    "Trường THPT Nguyễn Trãi",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_NDC_BD = createPoint(
    106.64719,
    11.01021,
    "Trường THPT Nguyễn Đình Chiểu",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_NK_BD = createPoint(
    106.69153,
    11.06338,
    "Trường THPT Nguyễn Khuyến",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_PK_BD = createPoint(
    106.66857,
    11.00775,
    "Trường THPT Pétrus Ký",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_VMD_BD = createPoint(
    106.66409,
    10.97021,
    "Trường THPT Võ Minh Đức",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_PCT_BD = createPoint(
    106.76434,
    10.92774,
    "Trường THPT Phan Chu Trinh",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_PH_BD = createPoint(
    106.72795,
    11.23838,
    "Trường THPT Phước Hoà",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_VA1_BD = createPoint(
    106.65648,
    10.99400,
    "Trường THPT Việt Anh - cơ sở 1",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_VA2_BD = createPoint(
    106.76429,
    10.89490,
    "Trường THPT Việt Anh - cơ sở 2",
    "tỉnh Bình Dương",
    symbolC3
)
export var C3_THD_BD = createPoint(
    106.68431,
    10.94995,
    "Trường THPT Trịnh Hoài Đức",
    "tỉnh Bình Dương",
    symbolC3
)
//Lâm Đồng
export var C3_DT_LD = createPoint(
    108.37277,
    11.73995,
    "Trường THPT Đức Trọng",
    "tỉnh Lâm Đồng",
    symbolC3
)
export var C3_BTX_LD = createPoint(
    108.44035,
    11.95206,
    "Trường THPT Bùi Thị Xuân",
    "tỉnh Lâm Đồng",
    symbolC3
)
export var C3_LT_LD = createPoint(
    107.84497,
    11.54956,
    "Trường THPT Lộc Thanh",
    "tỉnh Lâm Đồng",
    symbolC3
)
export var C3_TP_LD = createPoint(
    108.46458,
    11.94290,
    "Trường THPT Trần Phú",
    "tỉnh Lâm Đồng",
    symbolC3
)
export var C3_DD_LD = createPoint(
    108.42507,
    11.97277,
    "Trường THPT Đống Đa",
    "tỉnh Lâm Đồng",
    symbolC3
)
export var C3_ND_LD = createPoint(
    107.80534,
    11.56197,
    "Trường THPT Nguyễn Du",
    "tỉnh Lâm Đồng",
    symbolC3
)
export var C3_LP_LD = createPoint(
    107.83872,
    11.55667,
    "Trường THPT Lộc Phát",
    "tỉnh Lâm Đồng",
    symbolC3
)
export var C3_LTV_LD = createPoint(
    108.35470,
    11.73736,
    "Trường THPT Lương Thế Vinh",
    "tỉnh Lâm Đồng",
    symbolC3
)
export var C3_TTNK_LD = createPoint(
    107.48476,
    11.52663,
    "Trường THPT Tư thục Nguyễn Khuyến",
    "tỉnh Lâm Đồng",
    symbolC3
)
export var C3_NTP_LD = createPoint(
    107.78120,
    11.53369,
    "Trường THPT Nguyễn Tri Phương",
    "tỉnh Lâm Đồng",
    symbolC3
)
export var C3_BL_LD = createPoint(
    107.83029,
    11.62703,
    "Trường THPT Bảo Lâm",
    "tỉnh Lâm Đồng",
    symbolC3
)
export var C3_CTL_LD = createPoint(
    108.43679,
    11.93834,
    "Trường THPT Chuyên Thăng Long",
    "tỉnh Lâm Đồng",
    symbolC3
)
export var C3_NTB_LD = createPoint(
    108.33087,
    11.68203,
    "Trường THPT Nguyễn Thái Bình",
    "tỉnh Lâm Đồng",
    symbolC3
)
export var C3_Y_LD = createPoint(
    108.43508,
    11.96468,
    "Trường THPT Yersin",
    "tỉnh Lâm Đồng",
    symbolC3
)
export var C3_HTK_LD = createPoint(
    108.15479,
    11.76310,
    "Trường THPT Huỳnh Thúc Kháng",
    "tỉnh Lâm Đồng",
    symbolC3
)
export var C3_LH_LD = createPoint(
    108.25509,
    11.78503,
    "Trường THPT Lâm Hà",
    "tỉnh Lâm Đồng",
    symbolC3
)
export var C3_NBK_LD = createPoint(
    108.38258,
    11.57783,
    "Trường THPT Nguyễn Bỉnh Khiêm",
    "tỉnh Lâm Đồng",
    symbolC3
)
export var C3_LQD_LD = createPoint(
    108.20781,
    11.85307,
    "Trường THPT Lê Quý Đôn",
    "tỉnh Lâm Đồng",
    symbolC3
)
export var C3_HHT_LD = createPoint(
    108.32392,
    11.75886,
    "Trường THPT Hoàng Hoa Thám",
    "tỉnh Lâm Đồng",
    symbolC3
)
//Bình Phước
export var C3_CVA_BP = createPoint(
    106.60658,
    11.42600,
    "Trường THPT Chu Văn An",
    "tỉnh Bình Phước",
    symbolC3
)
export var C3_HV_BP = createPoint(
    106.89816,
    11.55360,
    "Trường THPT Hùng Vương",
    "tỉnh Bình Phước",
    symbolC3
)
export var C3_DT_BP = createPoint(
    106.87671,
    11.53017,
    "Trường THPT Dân Tộc Nội Trú",
    "tỉnh Bình Phước",
    symbolC3
)
export var C3_CQT_BP = createPoint(
    106.86765,
    11,53000,
    "Trường THPT Chuyên Quang Trung",
    "tỉnh Bình Phước",
    symbolC3
)
export var C3_ND_BP = createPoint(
    106.90014,
    11.54223,
    "Trường THPT Nguyễn Du",
    "tỉnh Bình Phước",
    symbolC3
)
export var C3_DP_BP = createPoint(
    106.86792,
    11.42750,
    "Trường THPT Đồng Phú",
    "tỉnh Bình Phước",
    symbolC3
)
export var C3_CT_BP = createPoint(
    106.63069,
    11.42737,
    "Trường THPT Chơn Thành",
    "tỉnh Bình Phước",
    symbolC3
)
export var C3_DTien_BP = createPoint(
    106.95081,
    11.55490,
    "Trường THPT Đồng Tiến",
    "tỉnh Bình Phước",
    symbolC3
)
export var C3_NQ_BP = createPoint(
    106.80674,
    11.74210,
    "Trường THPT Ngô Quyền",
    "tỉnh Bình Phước",
    symbolC3
)
export var C3_PR_BP = createPoint(
    106.90455,
    11.66003,
    "Trường THPT Phú Riềng",
    "tỉnh Bình Phước",
    symbolC3
)
export var C3_CBL_BP = createPoint(
    106.58484,
    11.65499,
    "Trường THPT Chuyên Bình Long",
    "tỉnh Bình Phước",
    symbolC3
)
export var C3_TP_BP = createPoint(
    106.69046,
    11.65030,
    "Trường THPT Trần Phú",
    "tỉnh Bình Phước",
    symbolC3
)
export var C3_NK_BN_BP = createPoint(
    106.86969,
    11.73443,
    "Trường THPT Nguyễn Khuyến - Bù Gia Mập",
    "tỉnh Bình Phước",
    symbolC3
)
export var C3_NBK_BP = createPoint(
    106.68452,
    11.49761,
    "Trường THPT Nguyễn Bỉnh Khiêm",
    "tỉnh Bình Phước",
    symbolC3
)
export var C3_NHC_BP = createPoint(
    106.61373,
    11.57720,
    "Trường THPT Nguyễn Hữu Cảnh",
    "tỉnh Bình Phước",
    symbolC3
)

//Đồng Nai
export var C3_NHC_DN = createPoint(
    106.85180,
    10.90540,
    "Trường THPT Nguyễn Hữu Cảnh",
    "tỉnh Đồng Nai",
    symbolC3
)
export var C3_NH_DN = createPoint(
    106.83138,
    10.93827,
    "Trường THPT Nam Hà",
    "tỉnh Đồng Nai",
    symbolC3
)
export var C3_CVA_DN = createPoint(
    106.80443,
    10.93338,
    "Trường THPT Chu Văn An",
    "tỉnh Đồng Nai",
    symbolC3
)
export var C3_NQ_DN = createPoint(
    106.82537,
    10.95883,
    "Trường THPT Ngô Quyền",
    "tỉnh Đồng Nai",
    symbolC3
)
export var C3_CLTV_DN = createPoint(
    106.86382,
    10.96203,
    "Trường THPT Chuyên Lương Thế Vinh",
    "tỉnh Đồng Nai",
    symbolC3
)
export var C3_TamH_DN = createPoint(
    106.86125,
    10.94569,
    "Trường THPT Tam Hiệp",
    "tỉnh Đồng Nai",
    symbolC3
)
export var C3_NK_DN = createPoint(
    106.84391,
    10.95934,
    "Trường THPT Nguyễn Khuyến",
    "tỉnh Đồng Nai",
    symbolC3
)
export var C3_TB_DN = createPoint(
    106.86348,
    10.95546,
    "Trường THPT Trần Biên",
    "tỉnh Đồng Nai",
    symbolC3
)
export var C3_BTX_DN = createPoint(
    106.84597,
    10.96827,
    "Trường THPT Bùi Thị Xuân",
    "tỉnh Đồng Nai",
    symbolC3
)
export var C3_LQD_DN = createPoint(
    106.84940,
    10.95900,
    "Trường THPT Lê Quý Đôn",
    "tỉnh Đồng Nai",
    symbolC3
)
export var C3_LHP_DN = createPoint(
    106.88013,
    10.97214,
    "Trường THPT Lê Hồng Phong",
    "tỉnh Đồng Nai",
    symbolC3
)
export var C3_NT_DN = createPoint(
    106.89712,
    10.97147,
    "Trường THPT Nguyễn Trãi",
    "tỉnh Đồng Nai",
    symbolC3
)
export var C3_LQD_LBT_DN = createPoint(
    106.85833,
    10.91096,
    "Trường THPT Lê Quý Đôn - Long Bình Tân",
    "tỉnh Đồng Nai",
    symbolC3
)
export var C3_TP_DN = createPoint(
    106.92768,
    10.86309,
    "Trường THPT Tam Phước",
    "tỉnh Đồng Nai",
    symbolC3
)
export var C3_NVT_DN = createPoint(
    106.88940,
    10.90641,
    "Trường THPT Nguyễn Văn Trỗi",
    "tỉnh Đồng Nai",
    symbolC3
)
export var C3_DTH_DN = createPoint(
    106.87240,
    10.96355,
    "Trường THPT Đinh Tiên Hoàng",
    "tỉnh Đồng Nai",
    symbolC3
)
export var C3_LQD_QT_DN = createPoint(
    106.82485,
    10.95243,
    "Trường THPT Lê Quý Đôn - Quyết Thắng",
    "tỉnh Đồng Nai",
    symbolC3
)
export var C3_TH_DN = createPoint(
    106.90553,
    10.98074,
    "Trường THPT Tân Hòa",
    "tỉnh Đồng Nai",
    symbolC3
)
export var C3_NhonT_DN = createPoint(
    106.82495,
    10.72335,
    "Trường THPT Nhơn Trạch",
    "tỉnh Đồng Nai",
    symbolC3
)
export var C3_TN_DN = createPoint(
    107.00971,
    10.95132,
    "Trường THPT Thống Nhất",
    "tỉnh Đồng Nai",
    symbolC3
)

