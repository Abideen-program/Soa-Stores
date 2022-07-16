import Directory from "../../components/directory/directory.component";

const Home = () => {
    const categories = [
        {
          id: 1,
          title: "Jackets",
          imageUrl:
            "https://images.unsplash.com/photo-1516431762806-5a41e2353ae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZlbWFsZSUyMGphY2tldHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
    
        {
          id: 2,
          title: "Blouse",
          imageUrl:
            "https://images.unsplash.com/photo-1618085219724-c59ba48e08cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmxvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
    
        {
          id: 3,
          title: "Bags",
          imageUrl:
            "https://images.unsplash.com/photo-1597633125184-9fd7e54f0ff7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmFnc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
    
        {
          id: 4,
          title: "Hats",
          imageUrl:
            "https://images.unsplash.com/photo-1552399230-e073362b3bf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
    
        {
          id: 5,
          title: "Shoes",
          imageUrl:
            "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
      ];
    
      return (
        <Directory categories={categories}/>
      );
}

export default Home