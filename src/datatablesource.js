//temporary data
export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (cellData) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={cellData.row.img} alt="avatar" />
            {cellData.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (cellData) => {
        return (
          <div className={`cellWithStatus ${cellData.row.status}`}>
            {cellData.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Rajeev",
      img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600",
      status: "active",
      email: "rajeev678@gmail.com",
      phone:"6987451230",
      age: 35,
      address:"Taj Mahal, Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh, 282001",
    },
    {
      id: 2,
      username: "Jhonson",
      img: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600",
      email: "jhonshon89@gmail.com",
      status: "passive",
      phone: "8745698532",
      age: 42,
      address: "Gateway of India, Apollo Bandar, Colaba, Mumbai, Maharashtra, 400001",
    },
    {
      id: 3,
      username: "Nandhini",
      img: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=600",
      email: "nandhinandhu@gmail.com",
      status: "pending",
      phone:"9658741230",
      address:"Red Fort, Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi, 110006",
      age: 45,
    },
    {
      id: 4,
      username: "Suresh",
      img: "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=600",
      email: "suresh5467@gmail.com",
      status: "active",
      phone: "9874653210",
      address:"Qutub Minar, Mehrauli, New Delhi, Delhi, 110030",
      age: 16,
    },
    {
      id: 5,
      username: "Thangam",
      img: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
      email: "thangamsnow@gmail.com",
      status: "passive",
      phone:"7561239841",
      age: 22,
      address:"Charminar, Char Kaman, Ghansi Bazaar, Hyderabad, Telangana, 500002",
    },
    {
      id: 6,
      username: "Farjana",
      img: "https://images.pexels.com/photos/13079506/pexels-photo-13079506.jpeg?auto=compress&cs=tinysrgb&w=600",
      email: "farnzfarjana@gmail.com",
      status: "active",
      phone: "8974563254",
      address:"Mysore Palace, Sayyaji Rao Rd, Agrahara, Chamrajpura, Mysuru, Karnataka, 57000",
      age: 15,
    },
    {
      id: 7,
      username: "Chandru",
      img: "https://images.pexels.com/photos/7647313/pexels-photo-7647313.jpeg?auto=compress&cs=tinysrgb&w=600",
      email: "chandru01@gmail.com",
      status: "passive",
      phone: "6325741235",
      age: 44,
      address:"Hawa Mahal, Hawa Mahal Rd, Badi Choupad, J.D.A. Market, Pink City, Jaipur, Rajasthan, 302002",
    },
    {
      id: 8,
      username: "Fathema",
      img: "https://images.pexels.com/photos/4728655/pexels-photo-4728655.jpeg?auto=compress&cs=tinysrgb&w=600",
      email: "8fatheema@gmail.com",
      status: "active",
      phone : "6398745120",
      age: 36,
      address:"India Gate, Rajpath, India Gate, New Delhi, Delhi, 110001",
    },
    {
      id: 9,
      username: "Ronnie",
      img: "https://images.pexels.com/photos/160472/doll-boy-cheeky-toys-160472.jpeg?auto=compress&cs=tinysrgb&w=600",
      email: "ronnienew@gmail.com",
      status: "pending",
      phone: "9874563210",
      address:"Lotus Temple, Lotus Temple Rd, Shambhu Dayal Bagh, Bahapur, Kalkaji, New Delhi, Delhi, 110019",
      age: 25,
    },
    {
      id: 10,
      username: "Radhika",
      img: "https://images.pexels.com/photos/1602754/pexels-photo-1602754.jpeg?auto=compress&cs=tinysrgb&w=600",
      email: "radhikaprasad@gmail.com",
      status: "active",
      phone:" 6395821470",
      address:"Meenakshi Temple, Madurai Main, Madurai, Tamil Nadu, 625001",
      age: 32,
    },
    {
        id: 11,
        username: "Renu",
        img: "https://images.pexels.com/photos/1602754/pexels-photo-1602754.jpeg?auto=compress&cs=tinysrgb&w=600",
        email: "renukadhinesh@gmail.com",
        status: "active",
        age: 32,
      },
  ];