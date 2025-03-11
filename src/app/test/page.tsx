import NavbarDesktop from "../_components/admin/navbar-desktop";
import ResikoDesktop from "../_components/admin/resiko-desktop";
import TableDesktop from "../_components/admin/table-desktop";
import TextBoxDesktop from "../_components/admin/textbox-desktop";

export default function Page() {
    const dummy = {name: 'Nama Tenaga Kesehatan', nip: '19990202020202', image:'/user-image.png'};
    const resiko = null;
    const dummyData = [
        {id: '1234567890', name: 'Nama Pasien 1', usiaKehamilan: '10 Minggu', status: 1, ket: 'Keterangan'},
        {id: '1234567891', name: 'Nama Pasien 2', usiaKehamilan: '20 Minggu', status: 2, ket: 'Keterangan'},
        {id: '1234567892', name: 'Nama Pasien 3', usiaKehamilan: '30 Minggu', status: 3, ket: 'Keterangan'},
        {id: '1234567893', name: 'Nama Pasien 4', usiaKehamilan: '40 Minggu', status: null, ket: 'Keterangan'},
    ];
    const inputType = 'tinggi badan'


    return(
        <div className="bg-slate-200 h-screen w-screen">
            <NavbarDesktop  name={dummy.name} nip={dummy.nip} image={dummy.image}/>
            {/* <ResikoDesktop idResikoPasien={resiko}/> */}
            {/* <TableDesktop data={dummyData}/>
            <TextBoxDesktop textBoxType={inputType}/> */}
        </div>
    );
}