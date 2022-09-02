import React from 'react'
import PickupShow from '../components/pickup_show';
import miscLogo from '../../../assets/images/icon-guitar-misc.png';
import bodyLogo from '../../../assets/images/icon-guitar-body.png';
import neckLogo from '../../../assets/images/icon-guitar-neck.png';
import electronicsLogo from '../../../assets/images/icon-guitar-electronics.png';
import hardwareLogo from '../../../assets/images/icon-guitar-hardware.png';

class TableRow extends React.Component {
  render () {
    return <React.Fragment>
             <tr>
               <td>{this.props.title}</td>
               <td>{this.props.element}{this.props.metric && this.props.element ? this.props.metric : ''}</td>
             </tr>
           </React.Fragment>
  }
}

export class GuitarTable extends React.Component {
  render () {
    const guitar = this.props.guitar
    return <table className="table guitar__show__table">
            <tbody>
              <img src={miscLogo} alt="misc-logo" />
              <TableRow element={guitar.brand} title={'Brand'}/>
              <TableRow element={guitar.name} title={'Name'}/>
              <TableRow element={guitar.year} title={'Year'}/>
              <TableRow element={guitar.serial_number} title={'Serial Number'}/>
              <TableRow element={guitar.made_in} title={'Made In'}/>
              <TableRow element={guitar.color} title={'Color'}/>
              <TableRow element={guitar.artist} title={'Artist'}/>
              <TableRow element={guitar.price} title={'Price'} metric={'$'}/>
              <TableRow element={guitar.purchase_date} title={'Purchase Date'}/>
            </tbody>

            <tbody>
              <img src={bodyLogo} alt="body-logo" />
              <TableRow element={guitar.body_wood} title={'Wood'}/>
              <TableRow element={guitar.body_finish} title={'Finish'}/>
              <TableRow element={guitar.body_top_wood} title={'Top Wood'}/>
            </tbody>

            <tbody>
              <img src={neckLogo} alt="neck-logo" />
              <TableRow element={guitar.neck_wood} title={'Wood'}/>
              <TableRow element={guitar.fingerboard_wood} title={'Figerboard'}/>
              <TableRow element={guitar.body_wood} title={'Scale Length'} metric={'mm'}/>
              <TableRow element={guitar.frets_number} title={'Fret Number'}/>
              <TableRow element={guitar.frets_type} title={'Fret Type'}/>
              <TableRow element={guitar.neck_shape} title={'Neck Shape'}/>
              <TableRow element={guitar.neck_radius} title={'Radius'} metric={'mm'}/>
              <TableRow element={guitar.neck_width_nut} title={'Neck Width Nut'} metric={'mm'}/>
              <TableRow element={guitar.neck_width_last_fret} title={'Neck Width Last Fret'} metric={'mm'}/>
              <TableRow element={guitar.neck_finish} title={'Finish'}/>
              <TableRow element={guitar.neck_attachment} title={'Attachment'}/>
              <TableRow element={guitar.nut_material} title={'Nut Material'}/>
              <TableRow element={guitar.inlays} title={'Inlays'}/>
            </tbody>

            <tbody>
              <img src={electronicsLogo} alt="electronics-logo" />
              <TableRow element={guitar.pickups_configuration} title={'Configuration'}/>
              <tr>
                <td>Neck</td>
                <td>{this.props.neckPickup ? <PickupShow position="Neck" pickup={this.props.neckPickup}/> : ''}</td>
              </tr>
              <tr>
                <td>Center</td>
                <td>{this.props.centerPickup ? <PickupShow position="Center" pickup={this.props.centerPickup}/> : ''}</td>
              </tr>
              <tr>
                <td>Bridge</td>
                <td>{this.props.bridgePickup ? <PickupShow position="Bridge" pickup={this.props.bridgePickup}/> : ''}</td>
              </tr>
            </tbody>

            <tbody>
              <img src={hardwareLogo} alt="hardware-logo" />
              <TableRow element={guitar.tuning_machines} title={'Tuning Machines'}/>
              <TableRow element={guitar.bridge} title={'Bridge'}/>
            </tbody>
          </table>
  }
}
