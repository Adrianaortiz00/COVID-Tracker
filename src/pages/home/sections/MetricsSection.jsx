import Metric from "../../../components/home/Metric"

const MetricsSection = () => {
    return (
        <div className=" flex flex-row justify-around border-none bg-dark-blue-2 pt-8 pl-20 pb-16">
            <Metric iconMetric="&#xe63e;" metric="403" subtitleMetric="STARTUPS" />
            <Metric iconMetric="&#xe63e;" metric="120+" subtitleMetric="MEMBER" />
            <Metric iconMetric="&#xe63e;" metric="22M" subtitleMetric="REVENUE" />
            <Metric iconMetric="&#xe63e;" metric="5643" subtitleMetric="DOWNLOAD" />
        </div>
    )
}


export default MetricsSection