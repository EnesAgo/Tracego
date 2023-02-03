function tabBarStyles({ route }) {
    
        if (route.name === "Notifications") {
            return "none"
          } 
          else{
            return 'flex'
          }
          
        }
export default tabBarStyles