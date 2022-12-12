
import './App.css';
import { Formik, Field, Form } from 'formik';
function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: 'ahmet',
          lastName: 'turan',
          email: 'ahmet.t@gmail.com',
          gender: 'male',
          hobies:[],
          cuontry:'',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));

          console.log(values);
        }}
      >
        {
          ({ handleSubmit, handleChange, values }) => (

            <Form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input
                value={values.firstName}
                id="firstName"
                name="firstName"
                onChange={handleChange}
                placeholder="Jane" />

              <br />

              <label htmlFor="lastName">Last Name</label>
              <input
                value={values.lastName}
                id="lastName"
                name="lastName"
                onChange={handleChange}
                placeholder="Doe" />

              <br />

              <label htmlFor="email">Email </label>
              <input
                value={values.email}
                onChange={handleChange}
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
              <br />
              <br />

              <span>male</span>
              <input
                id="gender"
                name="gender"
                onChange={handleChange}
                value="male"
                type={'radio'}
                checked={values.gender === 'male'}
              />
              <span>female</span>
              <input
                id="gender"
                name="gender"
                onChange={handleChange}
                value="female"
                checked={values.gender === 'female'}
                type={'radio'}
              />

              <br />
              <br />


              <div>
                <input type="checkbox"  value={'foto'} name='hobies' onChange={handleChange} />
              fotograf
              </div>

              <div>
                <input type="checkbox" value={'Cinema'}  name='hobies' onChange={handleChange} />
              Cinema
              </div>

              <div>
                <input type="checkbox" value={'Football'} name='hobies' onChange={handleChange} />
              Football
              </div>
              
              <br />
             
              

            <select name="cuontry" id="cuontry" onChange={handleChange}>
            <option value="TR">Türkiye</option>
            <option value="USA">USA</option>
            <option value="EN">England</option>
            </select>

              <br />
              <br />

              <button type="submit">Submit</button>
              <br />
              <br />
              {
                <code>{JSON.stringify(values)}</code>
              }
            </Form>
          )
        }
      </Formik>
    </div>
  );
}

export default App;
