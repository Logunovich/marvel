import { useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import './app.css';

const Form = () => {
    const [text, setText] = useState('');
    const [textArea, setTextArea] = useState('');

    const validataInput = (text) => {
        return text.search(/\d/) >= 0 
    }

    const color = validataInput(text) ? 'text-danger' : null;

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <input value={`${text} / ${textArea}`} type="text" className="form-control" readOnly/>
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input 
                        onChange={(e) => setText(e.target.value)} 
                        type="email" 
                        value={text}
                        className={`form-control ${color}`} 
                        id="exampleFormControlInput1" 
                        placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea 
                        onChange={e => setTextArea(e.target.value)}
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3">
                    </textarea>
                </div>
            </form>
        </Container>
    )
}

function App() {
    return (
        <Form/>
    );
}

export default App;
