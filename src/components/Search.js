import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

class Search extends Component {

  render() {
    return (
      <div className="container-fluid mt-5 text-center">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1224px', minWidth: '1200px' }}>
            <div className="content">
              <p>&nbsp;</p>
              <div className="card mb-3 mx-auto bg-warning" style={{ maxWidth: '600px' }}>
                <h2 className="text-dark text-monospace bg-warning"><b>Query certificates</b></h2>
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const id = this.fileId.value
                    const fileToken = this.fileToken.value
                    this.props.queryFile(id, fileToken)
                  }} >
                      <div className="form-group">
                        <br></br>
                          <input
                            id="fileId"
                            type="text"
                            ref={(input) => { this.fileId = input }}
                            className="form-control text-monospace"
                            placeholder="file id"
                            required />
                        <br></br>
                          <input
                            id="fileToken"
                            type="text"
                            ref={(input) => { this.fileToken = input }}
                            className="form-control text-monospace"
                            placeholder="file token"
                            required />                          
                      </div>
                    {/* <input type="file" onChange={this.props.captureFile} className="text-dark text-monospace"/> */}
                    <button type="submit" className="btn-primary btn-block"><b>Click here to query the file</b></button>
                  </form>
              </div>
              <p>&nbsp;</p>
              
              <table className="table-sm table-bordered text-monospace" style={{ width: '1.24', maxHeight: '450px'}}>
                <thead style={{ 'fontSize': '15px' }}>
                  <tr className="bg-info text-white">
                    <th scope="col" style={{ width: '10px'}}>ID</th>
                    <th scope="col" style={{ width: '200px'}}>File name</th>
                    <th scope="col" style={{ width: '120px'}}>File type</th>
                    <th scope="col" style={{ width: '90px'}}>Size</th>
                    <th scope="col" style={{ width: '90px'}}>Upload Date</th>
                    <th scope="col" style={{ width: '120px'}}>Uploader address</th>
                    <th scope="col" style={{ width: '120px'}}>IPFS Hash</th>
                    <th scope="col" style={{ width: '120px'}}>File description</th>
                    <th scope="col" style={{ width: '120px'}}>File preview</th>
                  </tr>
                </thead>
                { this.props.queriedFile.map((result, key) => {
                  return(
                    <thead style={{ 'fontSize': '12px' }} key={key}>
                      <tr>
                        <td>{result.returnValues.fileId}</td>
                        <td>{result.returnValues.fileName}</td>
                        <td>{result.returnValues.fileType}</td>
                        <td>{convertBytes(result.returnValues.fileSize)}</td>
                        <td>{moment.unix(result.returnValues.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                        <td>{result.returnValues.uploader}</td>
                        <td>{result.returnValues.fileHash}</td>
                        <td>{result.returnValues.fileDescription}</td>
                        <td><a target="_blank" rel="noopener noreferrer" href={"http://ipfs.infura.io/ipfs/"+result.returnValues.fileHash}>link</a></td>
                      </tr>
                    </thead>
                  )
                })}
              </table>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Search;