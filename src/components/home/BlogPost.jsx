import PropTypes from "prop-types";

const BlogPost = ({ imageBlog, blogTitle}) => {
    return (
        <section className="mb-10">
            <div className="grid grid-rows-3 grid-col-4 grid-flow-col gap-4 m-0 justify-center">
                <img src={imageBlog} alt="BlogPhotoCover" className="row-span-3 w-48 h-32" />
                <div className="col-span-2 flex justify-start gap-4 items-center w-[40em]">
                        <div className="flex items-center gap-1 mb-2">
                            <i className="ti ti-timer text-gray-light"></i>
                            <span className=" font-poppins font-medium text-gray-light text-[0.85em]"> 9 Sept 2020 </span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                            <i className="ti ti-comment text-gray-light"></i>
                            <span className=" font-poppins font-medium text-gray-light text-[0.85em]"> 21 Comment </span>
                        </div>
                </div>
                <div className="row-span-2 col-span-2">
                    <h2 className="text-white font-poppins font-bold text-2xl w-[20em]"> {blogTitle}</h2>
                </div>
                <a href="" className=" font-poppins font-semibold text-gray-light underline w-1/5 items-center">Continue </a>
            </div>
        </section>
    )
}

BlogPost.propType = {
    imageBlog: PropTypes.string,
    blogTitle: PropTypes.string,
}

export default BlogPost