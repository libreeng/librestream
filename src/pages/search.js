import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import FormikDebug from '../common/utils/FormikDebug'
import Hero from '../common/ui/Hero'
import {
  TextInput,
  SwitchInput,
  SelectInput,
  RadioInput,
} from '../common/fields'

const mockSelectData = [
  { value: 'select1', label: 'Select One' },
  { value: 'select2', label: 'Select Two' },
  { value: 'select3', label: 'Select Three' },
]

const ValidationSchema = Yup.object().shape({
  content: Yup.string()
    .min(10, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
})

const SearchPage = ({ data }) => {
  const { localSearchPosts: { index, store } } = data
  const [query, setQuery] = useState('')
  const results = useFlexSearch(query, index, store)
  const hero = {
    heroHeading: "Search"
  }
  const initialValues = {
    description: '',
    switch: true,
    featuredProduct: {},
    richDescription: '',
  }

  return (
    <>
      <Hero hero={hero} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={ValidationSchema}
              // onSubmit={(values, { resetForm }) => {
              //   dispatch(testForm({ firestore }, values))
              //   resetForm()
              // }}
              >
                {({ values, setFieldValue }) => (
                  <Form>
                    {/* Example of Text Field */}
                    <Field
                      name="text"
                      type="text"
                      component={TextInput}
                      placeholder="Placeholder text"
                      hint="Enter some text"
                      label="Description"
                    />

                    {/* Example of Switch Input */}
                    <Field
                      name="switch"
                      type="checkbox"
                      component={SwitchInput}
                      label="Switch"
                      onChange={() => setFieldValue('switch', !values.switch)}
                    />

                    <div className="form-check form-check-inline">
                      <Field
                        name="radioExample"
                        type="radio"
                        component={RadioInput}
                        label="radio-opt-1"
                        value="radio-opt-1"
                        onChange={(e, val) => {
                          setFieldValue("radioExample", val.value);
                        }}
                      />
                      <Field
                        name="radioExample"
                        type="radio"
                        component={RadioInput}
                        label="radio-opt-2"
                        value="radio-opt-2"
                        onChange={(e, val) => {
                          setFieldValue("radioExample", val.value);
                        }}
                      />
                    </div>

                    {/* Example of Select Input */}
                    <Field
                      name="featuredProduct"
                      type="text"
                      component={SelectInput}
                      options={mockSelectData}
                      onChange={value => setFieldValue('featuredProduct', value)}
                      label="Select Featured Product"
                    />

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <FormikDebug />
                  </Form>
                )}
              </Formik>



              <label htmlFor="query">
                <span>Search query</span>
                <input
                  name="query"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </label>
              <h2>Results</h2>
              {results.length > 0 ? (
                <ul>
                  {results.map((result) => (
                    <li key={result.url}>{result.title}</li>
                  ))}
                </ul>
              ) : (
                <p>No results!</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

SearchPage.propTypes = {

}
export const pageQuery = graphql`
  query SearchQuery {
    localSearchPosts {
      index
      store
    }
  }
`

export default SearchPage
