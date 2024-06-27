import BlogPost from "../../../components/home/BlogPost"

const Blog = () => {
    return (
        <div className=" w-screen h-auto p-40 bg-dark-blue-2">
            < BlogPost imageBlog="\assets\images\blog-1.jpg" blogTitle="Can COVID-19 be caught from a person who has no symptoms?" />,
            < BlogPost imageBlog="\assets\images\blog-2.jpg" blogTitle="What you need to know About Novel Corona Virus Covid 19" />,
            < BlogPost imageBlog="\assets\images\blog-3.jpg" blogTitle="What can I do to protect myself and prevent the spread of disease?"/>
        </div>
    )
}

export default Blog