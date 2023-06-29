(() => {

    //No aplicamos el principio de responsabilidad unica.


    type Gender = 'M' | 'F';

    interface PersonProps {
        name      : string;
        gender    : Gender; 
        birthDate : Date;

    }

    class Person  {

        public name: string;
        public gender: Gender;
        public birthDate: Date;

        constructor({ name, gender, birthDate }: PersonProps){
            this.name      = name;
            this.gender    = gender;
            this.birthDate = birthDate;
        }
    }

    interface UserProps extends PersonProps {
        email     : string;
        role      : string;
        name      : string;
        gender    : Gender;
        birthDate : Date;
    }

    
    class User extends Person {

        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor( {email, role, name, gender, birthDate }: UserProps){
            super({name, gender, birthDate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }


    interface UserSettingsProps extends UserProps {
        workingDirectory : string;
        lastOpenFolder   : string;
        email            : string;
        role             : string;
        name             : string;
        gender           : Gender;
        birthDate        : Date;
    }


    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({
            workingDirectory,
            lastOpenFolder,
            email,
            role,
            name,
            gender,
            birthDate,
        } : UserSettingsProps ){
            super({email, role, name, gender, birthDate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }


    const userSettings = new UserSettings( {
        workingDirectory: 'C:\\Users\\Mati',
        lastOpenFolder: 'C:\\Users\\Mati\\Documents',
        email: 'matias@mail.com',
        role: 'admin',
        name: 'Matias',
        gender: 'M',
        birthDate: new Date(1980, 1, 1)
    });

    console.log({userSettings});

})();