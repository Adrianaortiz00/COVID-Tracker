import Metric from "../../../components/home/Metric"
import { ti-lock, ti-export, ti-crown, ti-heart } from "react-icons/tfi";


const MetricsSection = () => {
    return (
        <div className=" flex flex-row justify-around border-none bg-dark-blue-2 pt-8 pl-20 pb-16">
            <Metric iconMetric="TfiLock" metric="403" subtitleMetric="STARTUPS" />
            <Metric iconMetric="TfiExport" metric="120+" subtitleMetric="MEMBER" />
            <Metric iconMetric="TfiCrown" metric="22M" subtitleMetric="REVENUE" />
            <Metric iconMetric="tTfiHeart" metric="5643" subtitleMetric="DOWNLOAD" />
        </div>
    )
}


export default MetricsSection