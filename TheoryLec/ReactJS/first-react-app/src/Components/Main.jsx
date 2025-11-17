function Main({students}) {
    return (
        <main>
            <div>
                {/* <h1>Hello, {name}</h1> */}
                <h1>Hello</h1>
                {/* <ul>
                    {
                        names.map((name) => (
                            <li>{name}</li>
                        ))
                    }
                </ul> */}

                <ul>
                    {
                        students.map((student) => (
                            <li>{student.name} - {student.age} years old</li>
                        ))
                    }
                </ul>

            </div>
            <div>
                <p>Welcome to your first React application.</p>
            </div>
        </main>
    )
}

export default Main;