import Metric from "../../../components/home/Metric"


const MetricsSection = () => {
    return (
        <div className=" flex flex-row justify-around border-none bg-dark-blue-2 pt-8 pl-20 pb-16">
            <Metric iconMetric="ti-lock" metric="403" subtitleMetric="STARTUPS" />
            <Metric iconMetric="ti-export" metric="120+" subtitleMetric="MEMBER" />
            <Metric iconMetric="ti-crown" metric="22M" subtitleMetric="REVENUE" />
            <Metric iconMetric="ti-heart" metric="5643" subtitleMetric="DOWNLOAD" />
        </div>
    )
}


export default MetricsSection