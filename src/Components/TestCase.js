import React from 'react'
import './TestCase.css'

export class TestCase extends React.Component {
  render() {
    return (
      <div className="testCase">
        <form>
          <label>
            Input:
            <input type="text" name="input" />
          </label>

          <label>
            Exspected Output:
            <input type="text" name="Output" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default TestCase
