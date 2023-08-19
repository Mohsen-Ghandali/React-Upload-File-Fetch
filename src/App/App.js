import { useState } from "react";

const App = () => {
    const [title, setTitle] = useState("")
    const [url, setUrl] = useState("")
    const [image, setImage] = useState("")
    const handlerEvent = (e) => {
        e.preventDefault();
        const photo = new FormData()
        photo.append("title", title)
        photo.append("url", url)
        photo.append("thumbnailUrl", image)
        const create = async () => {
            try {
                let data = await fetch('https://jsonplaceholder.typicode.com/photos', {
                    method: 'POST',
                    body: JSON.stringify({
                        albumId: 1,
                        title: photo.get("title"),
                        url: photo.get("url"),
                        thumbnailUrl: photo.get("thumbnailUrl"),
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                let res = await data.json()
                console.log(res);
            } catch (error) {
                console.log(error.message);
            }
        }
        create()
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <form action="#" method="post" onSubmit={(e) => { handlerEvent(e) }} className="col-6 offset-3 bg-dark text-whit rounded-2">
                    <div className="d-block mb-2">
                        <label htmlFor="title" className="text-capitalize">title</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="title..."
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="d-block mb-2">
                        <label htmlFor="url" className="text-capitalize">url</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="url..."
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <div className="d-block ">
                        <label htmlFor="image" className="text-capitalize">url</label>
                        <input
                            type="file"
                            className="form-control"
                            placeholder="image..."
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-success text-capitalize my-3  ">Upload</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default App;



