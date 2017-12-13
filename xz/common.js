var iosUrl;//IOS下载
var andUrl;//安卓下载
function isWeiXin()
{
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}
	
function common(pfid){
	switch( pfid ){
		case 1: /* 云店盟 ydm http://ydm.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yun-dian-meng/id1221310640?mt=8";
			andUrl = "http://a.app.qq.com/o/simple.jsp?pkgname=com.br.yfmer";
			break;
		case 2:  /* 云付 yf */
			iosUrl = "https://itunes.apple.com/cn/app/yun-fu-quan-min-chuang-fu/id1138176125?mt=8";
			andUrl = "http://a.app.qq.com/o/simple.jsp?pkgname=com.br.yf";
			break;
		case 3: /* 云付创客 yfck */
			iosUrl = "";
			andUrl = "https://www.pgyer.com/yunfuchuangke";
			break; 
		case 4:  /* 快付钱包 kfqb http://kuaifu.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/kuai-fu-qian-bao/id1141790903?mt=8";
			andUrl = "https://www.pgyer.com/9BGu";
			break;
		case 5:  /* 超级钱包 cjqb http://cjqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/chao-ji-qian-bao-zhi-fu-cong/id1137334365?mt=8";
			andUrl = "http://a.app.qq.com/o/simple.jsp?pkgname=com.br.sw";
			break;
		case 6:  /* 大米钱包 dmqb http://dmqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/da-mi-qian-bao/id1140024042?mt=8";
			andUrl = "https://www.pgyer.com/wiWy";
			break;
		case 7:  /* 来付 lf http://lfqb.a3banks.com/ */
			iosUrl = "";
			andUrl = "https://www.pgyer.com/Af0P";
			break;
		case 8:  /* 卡码付 kmf http://kmf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/ka-ma-fu/id1140002300?mt=8";
			andUrl = "http://a.app.qq.com/o/simple.jsp?pkgname=com.br.ccp";
			break;
		case 9:  /* 易优钱包 yyqb => 易优钱包 http://yyqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yi-you-qian-bao/id1138164082?mt=8";
			andUrl = "http://oa6sdkvb0.bkt.clouddn.com/shuiguanjihua.apk";
			break;
		case 10: /* 亿客天下 yktx http://yktx.a3banks.com/ */
			iosUrl = "";
			andUrl = "https://www.pgyer.com/bhB5";
			break;
		case 11: /* 扫码付 smf http://smf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/sao-ma-fu-hui-sheng-huo-yi-zhi-fu/id1137511950?mt=8";
			andUrl = "https://www.pgyer.com/mWri";
			break;
		case 12: /* 嘿米钱包 hmqb http://hmqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/hei-mi-qian-bao/id1141707324?mt=8";
			andUrl = "https://www.pgyer.com/jZ49";
			break;
		case 13: /* 扫码乐付 smlf http://smlf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/sao-ma-le-fu/id1134816456?mt=8";
			andUrl = "http://a.app.qq.com/o/simple.jsp?pkgname=com.br.schp";
			break;
		case 14: /* 卡付钱包 kfqb http://kfqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/ka-fu-qian-bao/id1142936681?mt=8";
			andUrl = "https://www.pgyer.com/Wo15";
			break;
		case 15: /* 九州钱包 jzqb http://jzqb.a3banks.com/ => 合新钱包 hxqb http://hxqb.a3banks.com/ */
			iosUrl = "";
			andUrl = "https://www.pgyer.com/hexinqianbao";
			break;
		case 16: /* 云付在线 yfzx -> 云宝付 ybf http://ybf.a3banks.com */
			iosUrl = "https://itunes.apple.com/cn/app/yun-bao-fu/id1177822709?mt=8";
			andUrl = "https://www.pgyer.com/9Wj4";
			break;
		case 18: /* 企联通付 qltf http://qltf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/qi-lian-tong-fu-rang-xiao/id1133386132?mt=8";
			andUrl = "https://www.pgyer.com/RQhE";
			break;
		case 19: /* 爱支付 azf http://azf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/ai-zhi-fu-ai-sheng-huo-qing/id1173740455?mt=8";
			andUrl = "https://www.pgyer.com/CIqI";
			break;
		case 20: /* 瑞士钱包 rsqb http://rsqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/rui-shi-qian-bao/id1148481991?mt=8";
			andUrl = "https://www.pgyer.com/tfdL";
			break;
		case 21: /* 金付钱包 jfqb http://jfqb.a3banks.com/ => 银钱包 yqb http://yinqb.a3banks.com/ */
			iosUrl = "";
			andUrl = "https://www.pgyer.com/b8Eq";
			break;
		case 22: /* 微商汇 wsh http://wsh.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/wei-shang-hui-rang-wo-men/id1137336941?mt=8";
			andUrl = "https://www.pgyer.com/0W07";
			break;
		case 23: /* 想付 xf http://xf.a3banks.com/*/ 
			iosUrl = "https://itunes.apple.com/cn/app/xiang-fu/id1141777110?mt=8";
			andUrl = "https://www.pgyer.com/vdDw";
			break;
		case 24: /* 友创钱包 ycqb http://ycqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/you-chuang-qian-bao/id1139426941?mt=8";
			andUrl = "https://www.pgyer.com/tiqP";
			break;
		case 25: /* 17付 17f http://17fu.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/17fu/id1136669522?mt=8";
			andUrl = "https://www.pgyer.com/0uFX";
			break;
		case 26: /* 秒付 mf http://mf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/miao-fu-bian-li-zhi-fu-jin/id1153961803?mt=8";
			andUrl = "https://www.pgyer.com/5ei0";
			break;
		case 27: /* 小云钱包 xyqb http://xyqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/xiao-yun-qian-bao/id1139165256?mt=8";
			andUrl = "https://www.pgyer.com/9m44";
			break;
		case 28: /* 易支付 yzf http://yzf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yi-zhi-fu-yuan-yu-zhi-fu-dian/id1160567230?mt=8";
			andUrl = "https://www.pgyer.com/RZIE";
			break;
		case 29: /* 恒付钱包 hfqb http://hfqb.a3banks.com/ => 信支付 xzf http://xzf.a3banks.com/ */
			iosUrl = "";
			andUrl = "https://www.pgyer.com/xinzhifu";
			break;
		case 30: /* 三峡快付 sxkf http://sxkf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/san-xia-kuai-fu/id1135743412?mt=8";
			andUrl = "https://www.pgyer.com/NX8n";
			break;
		case 31: /* Ti付 tif http://tif.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/ti-fu/id1141796081?mt=8";
			andUrl = "https://www.pgyer.com/41De";
			break;
		case 33: /* 惠家无卡付 hjwkf http://hjwkf.a3banks.com/ => 顺铭付 smf http://shunmf.a3banks.com/ */
			iosUrl = "";
			andUrl = "https://www.pgyer.com/iIt8";
			break;
		case 34: /* 小微付 xwf http://xwf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/xiao-wei-fu/id1147030487?mt=8";
			andUrl = "https://www.pgyer.com/CyzQ";
			break;
		case 35: /* 全码付 qmf http://qmf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/quan-ma-fu-kai-chuang-zhi/id1137521342?mt=8";
			andUrl = "http://oa6sdkvb0.bkt.clouddn.com/allcodepay.apk";
			break;
		case 36: /* 有的钱包 ydqb http://ydqb.a3banks.com/ */
			iosUrl = "";
			andUrl = "http://oa6st7fg8.qnssl.com/youdewallet.apk";
			break;
		case 37: /* 云码付 ymf http://ymf.a3banks.com/ */
			iosUrl = "";
			andUrl = "https://www.pgyer.com/3S7E";
			break;
		case 38: /* 联合钱包 lhqb http://lhqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/lian-he-qian-bao-rang-xiao/id1138603739?mt=8";
			andUrl = "https://www.pgyer.com/R1oq";
			break;  
		case 39: /* 好享付 hxf http://hxf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/hao-xiang-fu/id1139423448?mt=8";
			andUrl = "https://www.pgyer.com/dTjX";
			break;
		case 40: /* 中付汇通 zfht ->云汇 yh http://zfht.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yun-hui-rang-wei-lai-xian/id1156791571?mt=8";
			andUrl = "https://www.pgyer.com/yLpZ";
			break;
		case 41: /* 惠付钱包 hfqb http://huifuqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/hui-fu-qian-bao/id1139660666?mt=8";
			andUrl = "https://www.pgyer.com/7Xrm";
			break;
		case 42: /* 摇钱树->畅收宝 yqs->csb http://yqs.a3banks.com/ */
			iosUrl = "";
			andUrl = "https://www.pgyer.com/wNkJ";
			break;
		case 43: /* 享付钱包 xfqb http://xiangfu.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/xiang-fu-qian-bao/id1139146022?mt=8";
			andUrl = "https://www.pgyer.com/1old";
			break;
		case 44: /* 微e付 wef http://wef.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/weie-fu/id1141818288?mt=8";
			andUrl = "https://www.pgyer.com/JEi9";
			break;
		case 45: /* 微银钱包 wyqb http://wyqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/wei-yin-qian-bao/id1139420217?mt=8";
			andUrl = "https://www.pgyer.com/2s9n";
			break;
		case 46: /* 壹号钱包 yhqb http://yhqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yi-hao-qian-bao/id1142097105?mt=8";
			andUrl = "https://www.pgyer.com/lvYN";
			break;
		case 47: /* 刷乐钱包 slqb http://slqb.a3banks.com/ */
			iosUrl = "";
			andUrl = "https://www.pgyer.com/1Kyu";
			break;
		case 48: /* 好享付钱包 hxfqb http://hxfqb.a3banks.com/ */
			iosUrl = "";
			andUrl = "https://www.pgyer.com/cXbf";
			break;
		case 49: /* 通码付 tmf http://tmf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/tong-ma-fu/id1141831789?mt=8";
			andUrl = "https://www.pgyer.com/lG82";
			break;
		case 50: /* 云点付 ydf http://ydf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yun-dian-fu/id1137341382?mt=8";
			andUrl = "https://www.pgyer.com/36A8";
			break;
		case 51: /* 好想付 hxf http://haoxf.a3banks.com */
			iosUrl = "https://itunes.apple.com/cn/app/hao-xiang-fu/id1140036682?mt=8";
			andUrl = "https://www.pgyer.com/Cw87";
			break;
		case 52: /* 云集钱包 yjqb http://yjqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yun-ji-qian-bao/id1139156448?mt=8";
			andUrl = "https://www.pgyer.com/Uzpc";
			break;
		case 53: /* 瞬付 sf http://sf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/shun-fu/id1139430899?mt=8";
			andUrl = "https://www.pgyer.com/Fyy2";
			break;
		case 54: /* 好好刷 hhs http://hhs.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/hao-hao-shua/id1139092069?mt=8";
			andUrl = "https://www.pgyer.com/lL3I";
			break;
		case 55: /* i付钱包 ifqb http://ifuqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/i-fu-qian-bao/id1139544097?mt=8";
			andUrl = "https://www.pgyer.com/n2O8";
			break;
		case 56: /* 收钱宝 sqb http://sqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/shou-qian-bao-kai-chuang-zhi/id1139634309?mt=8";
			andUrl = "https://www.pgyer.com/tzEm";
			break;
		case 57: /* 小尖椒 xjj http://xjj.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/xiao-jian-jiao-rang-cai-fu/id1137822503?mt=8";
			andUrl = "https://www.pgyer.com/6QzZ";
			break;
		case 58: /* 全能付 qnf http://qnf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/quan-neng-fu-kai-chuang-zhi/id1141624360?mt=8";
			andUrl = "https://www.pgyer.com/3Tfr";
			break;
		case 59: /* 易云钱包 yyqb http://yiyunqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yi-yun-qian-bao/id1155893943?mt=8";
			andUrl = "https://www.pgyer.com/sFVJ";
			break;
		case 60: /* 一诺云付 ynyf http://ynyf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yi-nuo-yun-fu/id1138150711?mt=8";
			andUrl = "https://www.pgyer.com/agAV";
			break;
		case 61: /* 正码付 zmf http://zmf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/zheng-ma-fu/id1139429004?mt=8";
			andUrl = "https://www.pgyer.com/Hoz0";
			break;
		case 62: /* 旺旺钱包 wwqb http://wwqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/wang-wang-qian-bao/id1139640647?mt=8";
			andUrl = "https://www.pgyer.com/ZGEj";
			break;
		case 63: /* 51付 51fu http://51f.a3banks.com */
			iosUrl = "https://itunes.apple.com/cn/app/51fu/id1138211283?mt=8";
			andUrl = "https://www.pgyer.com/KGrs";
			break;
		case 64: /* 贝付 bf http://bf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/bei-fu/id1139646689?mt=8";
			andUrl = "https://www.pgyer.com/TFMN";
			break;
		case 65: /* 百创钱包 bcqb http://bcqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/bai-chuang-qian-bao/id1142494498?mt=8";
			andUrl = "https://www.pgyer.com/VlMT";
			break;
		case 66: /* 神码付 smf http://smzf.a3banks.com */
			iosUrl = "https://itunes.apple.com/cn/app/shen-ma-fu/id1137875942?mt=8";
			andUrl = "https://www.pgyer.com/EHZ9";
			break;
		case 67: /* 快码支付 kmzf http://kmzf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/kuai-ma-zhi-fu/id1141836681?mt=8";
			andUrl = "https://www.pgyer.com/Ccq9";
			break;
		case 68: /* 环球钱包 hqqb http://hqqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/huan-qiu-qian-bao/id1139991557?mt=8";
			andUrl = "https://www.pgyer.com/8Wje";
			break;
		case 69: /* 海豚钱包 htqb http://htqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/hai-tun-qian-bao-zhi-fu-jiu/id1140078180?mt=8";
			andUrl = "https://www.pgyer.com/KHfg";
			break;
		case 70: /* 爱乐付 alf http://ayf.a3banks.com */
			iosUrl = "https://itunes.apple.com/cn/app/ai-le-fu/id1137833014?mt=8";
			andUrl = "https://www.pgyer.com/eNSH";
			break;
		case 71: /* 时付通 sft http://sft.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/shi-fu-tong/id1140044321?mt=8";
			andUrl = "https://www.pgyer.com/1BGh";
			break;
		case 72: /* 乐享钱包 lxqb http://lxqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/le-xiang-qian-bao/id1135681539?mt=8";
			andUrl = "https://www.pgyer.com/otAL";
			break;
		case 7201: /* 乐享钱包（商务版） lxqb http://lxqbswb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/le-xiang-qian-bao/id1242712506?mt=8";
			andUrl = "https://www.pgyer.com/lexiangqianbaoshangwuban";
			break;
		case 73: /* 微付钱包 wfqb http://wfqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/wei-fu-qian-bao/id1142054208?mt=8";
			andUrl = "https://www.pgyer.com/LF8T";
			break;
		case 74: /* 互联支付 hlzf http://hlzf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/hu-lian-zhi-fu/id1142481692?mt=8";
			andUrl = "https://www.pgyer.com/o9tM";
			break;
		case 75: /* 乐钱包 lqb  => 搜天下 stx http://soutianxia.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/le-qian-bao-kai-chuang-xin/id1140054106?mt=8";
			andUrl = "https://www.pgyer.com/I4KP";
			break;
		case 76: /* 百事付 bsf http://bsf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/bai-shi-fu/id1143376226?mt=8";
			andUrl = "https://www.pgyer.com/TuNQ";
			break;
		case 77: /* 商联云付 slyf => 商联钱包 slqb => 路云钱包 lyqb  http://slyf.a3banks.com */
			iosUrl = "https://itunes.apple.com/cn/app/shang-lian-yun-fu/id1142158725?mt=8";
			andUrl = "https://www.pgyer.com/7QPI";
			break;
		case 78: /* 刷吧 shuaba http://shuaba.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/shua-ba-sui-shi-sui-xiang/id1142147150?mt=8";
			andUrl = "https://www.pgyer.com/h8PG";
			break;
		case 79: /* 无限钱包 wxqb http://wxqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/wu-xian-qian-bao-nin-cai-fu/id1142506542?mt=8";
			andUrl = "https://www.pgyer.com/LH1g";
			break;
		case 80: /* 易码付 ymfu http://ymfu.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yi-ma-fu-rong-yi-sao-ma-zhi-fu/id1142139762?mt=8";
			andUrl = "https://www.pgyer.com/BhXU";
			break;
		case 81: /* 云联支付 ylzf  -> 所罗门钱包 slmqb http://ylzf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/suo-luo-men-qian-bao/id1148540786?mt=8";
			andUrl = "https://www.pgyer.com/5Exs";
			break;
		case 82: /* 大众钱包 dzqb http://dzqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/da-zhong-qian-bao/id1144318663?mt=8";
			andUrl = "https://www.pgyer.com/mICw";
			break;
		case 83: /* 速米钱包 smqb http://smqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/su-mi-qian-bao/id1146745240?mt=8";
			andUrl = "https://www.pgyer.com/0m4G";
			break;
		case 84: /* 易宝和付 ybhf http://ybhf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yi-bao-he-fu/id1146768686?mt=8";
			andUrl = "https://www.pgyer.com/iQDa";
			break;
		case 85: /* 富付支付 ffzf http://ffzf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/fu-fu-zhi-fu/id1256322925?mt=8";
			andUrl = "https://www.pgyer.com/hLB5";
			break;
		case 86: /* 商通钱包 stqb http://stqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/shang-tong-qian-bao/id1144404489?mt=8";
			andUrl = "https://www.pgyer.com/v2gQ";
			break;
		case 87: /* 秒付宝 mfb http://mfb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/miao-fu-bao/id1147014971?mt=8";
			andUrl = "https://www.pgyer.com/4mzz";
			break;
		case 88: /* 简单支付 jdzf http://jdzf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/jian-dan-zhi-fu/id1146787577?mt=8";
			andUrl = "https://www.pgyer.com/tjOj";
			break;
		case 89: /* 微付 wf http://wf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/wei-fu-hu-lian-wang-zhi-fu/id1148789770?mt=8";
			andUrl = "https://www.pgyer.com/weifu";
			break; 
		case 90: /* 立马支付 lmzf http://lmzf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/li-ma-zhi-fu/id1150969556?mt=8";
			andUrl = "https://www.pgyer.com/WEhF";
			break; 
		case 91: /* 布袋钱包 bdqb http://bdqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/bu-dai-qian-bao/id1151035727?mt=8";
			andUrl = "https://www.pgyer.com/whVQ";
			break; 
		case 92: /* 金牛钱包 jnqb http://jnqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/jin-niu-qian-bao/id1152304769?mt=8";
			andUrl = "https://www.pgyer.com/EymO";
			break; 
		case 93: /* 微迅钱包 wxqb http://weixun.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/wei-xun-qian-bao/id1157809669?mt=8";
			andUrl = "https://www.pgyer.com/weixunqianbao";
			break; 
		case 94: /* 速付钱包 sfqb http://sfqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/su-fu-qian-bao/id1152845058?mt=8";
			andUrl = "https://www.pgyer.com/sufuqianbao";
			break; 
		case 95: /* 商捷快付 sjkf http://sjkf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/shang-jie-kuai-fu/id1160087145?mt=8";
			andUrl = "https://www.pgyer.com/shangjiekuaifu";
			break;
		case 96: /* 扫码邦 smb http://smb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/sao-ma-bang-shou-kuan-zhi/id1156730588?mt=8";
			andUrl = "http://oa6sdkvb0.bkt.clouddn.com/saomabang.apk";
			break;  
		case 97: /* 云钱包 yqb http://yqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yun-qian-bao-zhi-fu-xiang/id1156365749?mt=8";
			andUrl = "https://www.pgyer.com/yunqianbao";
			break; 
		case 98: /* 易加钱包 yjqb http://yijia.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yi-jia-qian-bao/id1156781814?mt=8";
			andUrl = "https://www.pgyer.com/yijiaqianbao";
			break; 
		case 99: /* 收创宝 scb http://scb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/shou-chuang-bao/id1156767550?mt=8";
			andUrl = "https://www.pgyer.com/shouchuangbao";
			break; 
		case 100: /* 直线付 zxf http://zxf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/zhi-xian-fu/id1163442244?mt=8";
			andUrl = "https://www.pgyer.com/zhixianfu";
			break; 
		case 101: /* 高晟钱包 gcqb http://gcqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/gao-cheng-qian-bao/id1157871040?mt=8";
			andUrl = "https://www.pgyer.com/gaoshengqianbao";
			break; 
		case 102: /* 无卡支付钱包 wkzfqb http://wkzf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/wu-ka-zhi-fu-qian-bao/id1198503963?mt=8";
			andUrl = "https://www.pgyer.com/wukazhifuqianbao";
			break; 
		case 103: /* 瑞付钱包 rfqb http://rfqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/rui-fu-qian-bao/id1157827140?mt=8";
			andUrl = "https://www.pgyer.com/ruifuqianbao";
			break; 
		case 104: /* 优优钱包 yyqb http://youyou.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/you-you-qian-bao/id1178543721?mt=8";
			andUrl = "https://www.pgyer.com/youyouqianbao";
			break; 
		case 105: /* 致富钱包 zfqb http://zfqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/zhi-fu-qian-bao/id1163679567?mt=8";
			andUrl = "https://www.pgyer.com/zhifuqianbao";
			break; 
		case 106: /* 易安支付 yazf http://yazf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yi-an-zhi-fu/id1172056902?mt=8";
			andUrl = "https://www.pgyer.com/yianzhifu";
			break; 
		case 107: /* 匠心钱包 jxqb http://jxqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/jiang-xin-qian-bao/id1167342469?mt=8";
			andUrl = "http://a.app.qq.com/o/simple.jsp?pkgname=com.br.jxqb";
			break; 
		case 108: /* 快付宝 kfb http://kfb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/kuai-fu-bao-hu-lian-wang-zhi/id1168857592?mt=8";
			andUrl = "https://www.pgyer.com/kuaifubao";
			break; 
		case 109: /* 众付 zf http://zf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/zhong-fu-quan-min-hu-lian/id1175958474?mt=8";
			andUrl = "https://www.pgyer.com/zhongfu";
			break; 
		case 110: /* 智富钱包 zfqb  http://zhifuqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/zhi-fu-qian-bao/id1175967404?mt=8";
			andUrl = "https://www.pgyer.com/zfqb";
			break; 
		case 111: /* 饮马钱包 ymqb http://ymqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yin-ma-qian-bao/id1173751193?mt=8";
			andUrl = "http://a.app.qq.com/o/simple.jsp?pkgname=com.br.yinmaqianbao";
			break; 
		case 112: /* 石门通宝 smtb http://smtb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/shi-men-tong-bao/id1178548695?mt=8";
			andUrl = "https://www.pgyer.com/shimentongbao";
			break; 
		case 113: /* 搜啦钱包 slqb http://solaqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/sou-la-qian-bao/id1180493666?mt=8";
			andUrl = "https://www.pgyer.com/soulaqianbao";
			break; 
		case 114: /* 玩赚钱包 wzqb http://wzqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/wan-zuan-qian-bao/id1256252345?mt=8";
			andUrl = "https://www.pgyer.com/wanzhuanqianbao";
			break;  
		case 115: /* 通付钱包 tfqb http://tfqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/tong-fu-qian-bao/id1185367487?mt=8";
			andUrl = "https://www.pgyer.com/tongfuqianbao";
			break; 
		case 116: /* 财付钱包 cfqb http://cfqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/cai-fu-qian-bao/id1185379962?mt=8";
			andUrl = "https://www.pgyer.com/caifuqianbao";
			break;
		case 117: /* 天娃钱包 twqb => 田娃商盟 twsm http://twqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/tian-wa-qian-bao/id1195745811?mt=8";
			andUrl = "https://www.pgyer.com/tianwaqianbao";
			break;
		case 118: /* 支鑫付钱包 zxfqb http://zxfqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/zhi-xin-fu-qian-bao/id1191388419?mt=8";
			andUrl = "https://www.pgyer.com/zhixinfuqianbao";
			break; 
		case 119: /* 从容宝 crb http://crw.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/cong-rong-bao/id1188947866?mt=8";
			andUrl = "https://www.pgyer.com/congrongbao";
			break; 
		case 120: /* 分享钱包 fxqb http://fxqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/fen-xiang-qian-bao/id1193474230?mt=8";
			andUrl = "http://a.app.qq.com/o/simple.jsp?pkgname=com.br.fxqb";
			break; 
		case 121: /* 先易付 xyf http://xyf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/xian-yi-fu/id1191677170?mt=8";
			andUrl = "https://www.pgyer.com/xianyifu";
			break; 
		case 122: /* 云上聚合 ysjh http://ysjh.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yun-shang-ju-he/id1191708610?mt=8";
			andUrl = "https://www.pgyer.com/yunshangjuhe";
			break; 
		case 123: /* 聚亿宝 jyb http://jyb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/ju-yi-bao/id1193915448?mt=8";
			andUrl = "https://www.pgyer.com/juyibaoqianbao";
			break;
		case 124: /* 玛雅钱包 myqb http://myqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/ma-ya-qian-bao/id1203126525?mt=8";
			andUrl = "https://www.pgyer.com/mayaqianbao";
			break;
		case 125: /* 安钱付 aqf http://aqf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/an-qian-fu/id1202111859?mt=8";
			andUrl = "https://www.pgyer.com/anqianfu";
			break; 
		case 126: /* 知付 zf http://zhifu.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/zhi-fu/id1204036425?mt=8";
			andUrl = "https://www.pgyer.com/Xws6";
			break; 
		case 127: /* 雷米付 lmf http://lmf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/lei-mi-fu/id1204055802?mt=8";
			andUrl = "https://www.pgyer.com/leimifu";
			break; 
		case 128: /* 码上付 msf http://msf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/ma-shang-fu/id1206653824?mt=8";
			andUrl = "https://www.pgyer.com/mashangfu";
			break; 
		case 129: /* 乐钱包 lqb http://lqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/le-qian-bao/id1204078699?mt=8";
			andUrl = "https://www.pgyer.com/leqianbao";
			break; 
		case 130: /* 阿斗金融 adjr http://adjr.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/a-dou-jin-rong/id1210538446?mt=8";
			andUrl = "https://www.pgyer.com/adoujinrong";
			break; 
		case 131: /* 羽信钱包 yxqb http://yxqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yu-xin-qian-bao/id1215584026?mt=8";
			andUrl = "https://www.pgyer.com/yuxinqianbao";
			break; 
		case 132: /* 安全套 aqt http://aqt.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/an-quan-tao/id1214749857?mt=8";
			andUrl = "https://www.pgyer.com/anquantao";
			break; 
		case 133: /* 随意付 syf http://syf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/us/app/sui-yi-fu/id1211601217?l=zh&ls=1&mt=8";
			andUrl = "https://www.pgyer.com/suiyifu";
			break; 
		case 134: /* 天诺钱包 tnqb http://tnqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/tian-nuo-qian-bao/id1230315825?mt=8";
			andUrl = "https://www.pgyer.com/tiannuoqianbao";
			break; 
		case 135: /* 云信支付 yxzf http://yxzf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/us/app/yun-xin-qian-bao/id1211585279?l=zh&ls=1&mt=8";
			andUrl = "https://www.pgyer.com/yunxinzhifu";
			break; 
		case 136: /* 华尔闪付钱包 hesfqb http://hesfqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/us/app/hua-er-shan-fu-qian-bao/id1134915617?l=zh&ls=1&mt=8";
			andUrl = "https://www.pgyer.com/huaershanfuqianbao";
			break; 
		case 137: /* 空付 kf http://kf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/kong-fu/id1215539889?mt=8";
			andUrl = "https://www.pgyer.com/ZZK9";
			break; 
		case 138: /* 华付钱包 hfqb http://hfqianbao.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/hua-fu-qian-bao/id1219125766?mt=8";
			andUrl = "https://www.pgyer.com/huafuqianbao";
			break; 
		case 139: /* 快e付 kyf http://kef.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/kuai-e-fu/id1217665261?mt=8";
			andUrl = "https://www.pgyer.com/kuaiefu";
			break; 
		case 140: /* 付天下 ftx http://ftx.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/fu-tian-xia/id1256268812?mt=8";
			andUrl = "https://www.pgyer.com/futianxia";
			break; 
		case 141: /* 掌付 zf http://zhangfu.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/zhang-fu/id1222278348?mt=8";
			andUrl = "https://www.pgyer.com/zhangfuqianbao";
			break; 
		case 142: /* 收付易 sfy http://sfy.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/shou-fu-yi/id1229969122?mt=8";
			andUrl = "https://www.pgyer.com/shoufuyi";
			break; 
		case 143: /* 云联钱包 ylqb  => 银付钱包 yfqb http://ylqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yin-fu-qian-bao/id1220814687?mt=8";
			andUrl = "https://www.pgyer.com/yinfuqianbao";
			break; 
		case 144: /* 生钱宝 sqb http://sqbao.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/sheng-qian-bao/id1222285035?mt=8";
			andUrl = "https://www.pgyer.com/shengqianbao";
			break; 
		case 145: /* 众享钱包 zxqb http://zxqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/zhong-xiang-qian-bao/id1221175397?mt=8";
			andUrl = "https://www.pgyer.com/zhongxiangqianbao";
			break;
		case 146: /* 华汇钱包 hhqb http://hhqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/hua-hui-qian-bao/id1223900722?mt=8";
			andUrl = "https://www.pgyer.com/huahuiqianbao";
			break;
		case 147: /* 融合钱包 rhqb http://rhqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/rong-he-qian-bao/id1222289646?mt=8";
			andUrl = "https://www.pgyer.com/rongheqianbao";
			break;
		case 148: /* 择付 zf http://zefu.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/ze-fu/id1220830485?mt=8";
			andUrl = "https://www.pgyer.com/zhefuqianbao";
			break;
		case 149: /* 卡友钱包 kyqb http://kyqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/ka-you-qian-bao/id1225105973?mt=8";
			andUrl = "https://www.pgyer.com/kayouqianbao";
			break;
		case 150: /* 米付钱包 mfqb http://mfqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/mi-fu-qian-bao/id1234419615?mt=8";
			andUrl = "https://www.pgyer.com/mifuqianbao";
			break;
		case 151: /* 益众支付 yzzf http://yzzf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yi-zhong-zhi-fu/id1247343337?mt=8";
			andUrl = "https://www.pgyer.com/yizhongzhifu";
			break;
		case 152: /* 潘朵拉钱包 pdlqb http://pdlqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/pan-duo-la/id1238622367?mt=8";
			andUrl = "https://www.pgyer.com/panduolaqianbao";
			break;
		case 153: /* 我的钱包 wdqb http://wdqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/wo-de-qian-bao/id1229939986?mt=8";
			andUrl = "https://www.pgyer.com/wodeqianbao";
			break;
		case 154: /* 联付钱包 lfqb http://lianfuqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/lian-fu-qian-bao/id1235361409?mt=8";
			andUrl = "https://www.pgyer.com/lianfuqianbao";
			break;
		case 155: /* 无卡支付 wkzf => 轻松付 qsf http://wukazf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/wu-ka-zhi-fu/id1231386697?mt=8";
			andUrl = "https://www.pgyer.com/qingsongpay";
			break;
		case 156: /* 下蛋猫钱包 xdmqb http://xdmqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/xia-dan-mao/id1240033895?mt=8";
			andUrl = "https://www.pgyer.com/xiadanmaoqianbao";
			break;
		case 157: /* 掌柜钱包 zgqb http://zgqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/zhang-gui-qian-bao/id1240753390?mt=8";
			andUrl = "https://www.pgyer.com/zhanguiqianbao";
			break;
		case 158: /* 互鑫宝 hxb http://fxb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/hu-xin-bao/id1251886213?mt=8";
			andUrl = "https://www.pgyer.com/huxinbao";
			break;
		case 159: /* 互利宝 hlb http://hlb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/hu-li-bao/id1247357939?mt=8";
			andUrl = "https://www.pgyer.com/hulibao";
			break;
		case 160: /* 信银付 xyf http://xyf.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/xin-yin-fu/id1249259448?mt=8";
			andUrl = "https://www.pgyer.com/xinyinfu";
			break;
		case 161: /* 一品钱包 ypqb http://ypqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yi-pin-qian-bao/id1251872131?mt=8";
			andUrl = "https://www.pgyer.com/yipinqianbao";
			break;
		case 162: /* 创付钱包 cfqb http://cfqbpay.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/chuang-fu-qian-bao/id1253750713?mt=8";
			andUrl = "https://www.pgyer.com/chuangfuqianbao";
			break;
		case 163: /* 安e钱包 aeqb http://aeqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/an-e-qian-bao/id1252520876?mt=8";
			andUrl = "https://www.pgyer.com/aneqianbao";
			break;
		case 164: /* 付盈宝 fyb http://fyb.a3banks.com/ */
			iosUrl = "";
			andUrl = "https://www.pgyer.com/fuyingbao";
			break;
		case 165: /* 小金库 xjk http://xjk.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/xiao-jin-ku/id1258041463?mt=8";
			andUrl = "https://www.pgyer.com/xiaojinku";
			break;
		case 166: /* 信东家 xdj http://xdj.a3banks.com/ */
			iosUrl = "";
			andUrl = "https://www.pgyer.com/xindongjia";
			break;
		case 167: /* 云刷钱包 ysqb http://ysqb.a3banks.com/ */
			iosUrl = "https://itunes.apple.com/cn/app/yun-shua/id1263366115?mt=8";
			andUrl = "https://www.pgyer.com/yunshuaqianbao";
			break;
		case 168: /* 拾贝 sb http://shibei.a3banks.com/ */
			iosUrl = "";
			andUrl = "https://www.pgyer.com/shibeiqianbao";
			break;
		case 169: /* 闪pay sp http://spay.a3banks.com/ */
			iosUrl = "";
			andUrl = "https://www.pgyer.com/shanpay";
			break;
	}
		$('#IOSUrl').attr("href",iosUrl);
		$('#androidUrl').attr("href",andUrl);
		$("#closeId").click(function(){
			window.open(iosUrl,'newwindow');
			//window.location.assign(iosUrl)
			//window.open(iosUrl);
		});
		var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		$(".mask img").css("height", h).on("click", function(){
			$(".mask").hide();
		});
		
		var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		$(".mask img").css("height", h).on("click", function(){
			$(".mask").hide();
		});
		if(isWeiXin())	{
			$(document).on("click", ".android", function(e){
				e.preventDefault();
				$(".mask").show();
			});
			$(document).on("click", ".ios", function(e){
				e.preventDefault();
				$(".mask").show();
			});
		} 
		$('.ios').show();
		$('.android').show();
}
