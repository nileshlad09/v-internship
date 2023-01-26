import { useParams } from 'react-router-dom'
import './View.css'
import React from 'react'
import { Link } from 'react-router-dom';
// import data from '../StudentData/Data';
function View() {
    const params = useParams();
    const fname = params.fname;
    const roll = params.roll;
    const Sem = params.Sem;
    const branch = params.branch;
    const organization = params.organization;
    const email = params.email;
    const start = params.start;
    const end = params.end;
    // const id = params.id;
    const domain = params.domain;

    // const [image, setimage] = useState({});

    // useEffect(() => {
    //     getimage();
    // })
    // const getimage = () => {
    //     const f = data.find((val, index) => {
    //         return val.id === parseInt(id);
    //     })
    //     setimage(f);
    // }

    return (
      <>
            <div style={{ paddingTop: "30px",overflow:"hidden" }}>
                <form class="row g-3"  style={{padding:"20px"}}>
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Name</label>
                        <input type="email" class="form-control" value={fname} id="inputEmail4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Roll Number</label>
                        <input type="text" value={roll} class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputAddress" class="form-label">Email</label>
                        <input type="email" value={email} class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">branch</label>
                        <input type="text" value={branch} class="form-control" id="inputCity" />
                    </div>
                </form>
            </div>

          <div className="internship">
          <h3 className='heading'>INTERNSHIP-01</h3>
                {/* <div className="certificate">
                    <img src={image.img} alt="" srcset="" />
                </div> */}
                <form class="row g-3"  style={{padding:"20px"}} >
                <div class="col-md-2">
                        <label for="inputPassword4" class="form-label">Start</label>
                        <input type="text" value={start} class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-md-2">
                        <label for="inputAddress" class="form-label">End</label>
                        <input type="email" value={end} class="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Organization</label>
                        <input type="text" value={organization} class="form-control" id="inputZip" />
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Domain</label>
                        <input type="text" value={domain} class="form-control" id="inputZip" />
                    </div>
                    <div class="col-md-2">
                        <label for="inputZip" class="form-label">Sem</label>
                        <input type="text" value={Sem} class="form-control" id="inputZip" />
                    </div>
                    <div class="col-md-2">
                    <label for="inputZip" class="form-label">Certificate</label>
                    <Link  to=''class="form-control" id="inputZip" style={{color:"green"}}>CLICK TO SEE CERTIFICATE</Link>
                    </div>
                    </form>
          </div>
            </>

            );
}

            export default View;