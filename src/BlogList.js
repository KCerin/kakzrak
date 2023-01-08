const BlogList = ({ datas, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(props, blogs);

    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {datas.map((data) => (
                <div className="blog-preview" key={ datas.id }>
                    <h2>{ data.obcina }</h2>
                    <p>Written by { data.pm10}{ data.so2 }</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;