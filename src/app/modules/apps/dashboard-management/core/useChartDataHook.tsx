import { useEffect , useState} from "react";

 function useChartDataHook(res:any) {
    const lang = JSON.parse(localStorage.getItem('i18nConfig') || '{}');
    // console.log(res)
    const [data , setData] =  useState<any>()
    // const [dataAr , setDataAr] =  useState<any>()
    useEffect(()=> {
        let chartData_en:any = [];
        let chartData_ar:any = [];
        res?.forEach((element:any) => {
          chartData_en.push({
            labels: [element.t202Lb+":"+element.t202,element.t203Lb+":"+element.t203,element.t204Lb+":"+element.t204],
            datasets: [{
              data: [element.t202, element.t203, element.t204,],
              backgroundColor: [
                 "#e9c46a",
                "#f4a261",
                "#2a9d8f",
              ],
              borderColor: "black",
              borderWidth: 2,
            }],
            all: element.t201,
            title:element.title
          },);
          chartData_ar.push({
            labels: [element.t201LbA +":"+element.t202,element.t203LbA+":"+element.t203,element.t204LbA+":"+element.t204],
            datasets: [{
              data: [element.t202, element.t203, element.t204,],
              backgroundColor: [
                 "#e9c46a",
                "#f4a261",
                "#2a9d8f",
              ],
              borderColor: "black",
              borderWidth: 2,
            }],
            all: element.t201,
            title:element.titleA
          })

          setData(lang.selectedLang === "en"? chartData_en : chartData_ar)
        //   setDataAr(chartData_ar)
        })
    }, [res,lang.selectedLang])
    return {
        data,
    }
 }
 
 export default useChartDataHook;