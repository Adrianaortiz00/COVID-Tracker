import Metric from "../../../components/home/Metric"


const MetricsSection = () => {
    return (
        <div className="grid grid-flow-dense md:flex md:flex-row pl-[9em] object-center gap-8 md:gap-0 align-middle items-center md:justify-around border-none bg-dark-blue-2 md:pt-8 md:pl-20 pb-16">
            <Metric iconMetric="ti-lock" metric="403" subtitleMetric="STARTUPS" />
            <Metric iconMetric="ti-export" metric="120+" subtitleMetric="MEMBER" />
            <Metric iconMetric="ti-crown" metric="22M" subtitleMetric="REVENUE" />
            <Metric iconMetric="ti-heart" metric="5643" subtitleMetric="DOWNLOAD" />
        </div>
    )
}


export default MetricsSection