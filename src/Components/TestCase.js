import React from 'react'
import './TestCase.css'

export class TestCase extends React.Component {
  render() {
    return (
      <div className="testCase">
        <div className="inputs">
          <form>
            <label>
              Input:
              <input type="text" name="input" />
            </label>

            <label>
              Expected Output:
              <input type="text" name="Output" />
            </label>

            <div className="submitButton">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default TestCase
