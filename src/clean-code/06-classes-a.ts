(() => {

    //No aplica el principio de responsabilidad unica

    type Gender = 'M' | 'F';

    class Person  {
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthDate: Date
        ){}
    }

    
    class User extends Person {
        public lastAccess: Date;

        constructor(
            public email: string, 
            public role: string,
            name: string,
            gender: Gender,
            birthDate: Date,
        ){
            super(name, gender, birthDate);
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthDate: Date
        
        ){
            super(email, role, name, gender, birthDate);
        }
    }


    const userSettings = new UserSettings( 
        'C:\\Users\\Mati',
        'C:\\Users\\Mati\\Documents',
        'matias@mail.com',
        'admin',
        'Matias',
        'M',
        new Date(1980, 1, 1)
    );

    console.log({userSettings});


    

    

})();