module.exports  = {
     age: function(timestamp){
        const today = new Date()
        const birthdate = new Date(timestamp)
        
        let age = today.getFullYear() - birthdate.getFullYear()
        const month = today.getMonth() - birthdate.getMonth()


        if ( month < 0 || 
            month == 0 &&
             today.getDate() <= birthdate.getDate()) {

                 age = age -1
             }

             return age
    }

}