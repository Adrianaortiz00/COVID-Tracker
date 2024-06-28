import PropTypes from "prop-types";

const BlogPost = ({ imageBlog, blogTitle}) => {
    return (
        <section className="mb:mt-0 md:mb-10 w-screen p-4">
            <div className="md:grid md:grid-rows-3 md:grid-col-4 md:grid-flow-col gap-4 m-0 justify-center">
                <img src={imageBlog} alt="BlogPhotoCover" className=" w-screen md:row-span-3 md:w-48 md:h-32" />
                <div className="col-span-2 flex justify-start gap-4 items-center w-[40em] mt-6 md:mt-0">
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
                    <h2 className="text-white font-poppins font-bold md:text-2xl md:w-[20em] text-xl mb-4 md:mt-0"> {blogTitle}</h2>
                </div>
                <a href="" className=" font-poppins font-semibold text-gray-light underline w-1/5 items-center md:mt-0">Continue </a>
            </div>
        </section>
    )
}

BlogPost.propType = {
    imageBlog: PropTypes.string,
    blogTitle: PropTypes.string,
}

export default BlogPost