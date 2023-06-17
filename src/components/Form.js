import {Link} from 'react-router-dom'


function Form({ handleSubmit, title, children }) {
    return (
        <form className="form-auth text-center" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">{title}</h1>
            {children}
            <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">{title}</button>
            <p className="mt-5 mb-3 text-muted">
                Copyright &copy; <Link to='/'><b>MoviesApp</b></Link> {new Date().getFullYear()}.
            </p>
        </form>
    )
}

export default Form;