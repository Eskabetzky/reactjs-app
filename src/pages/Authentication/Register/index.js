import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

export default function Register() {
    return (
        <div className="relative h-screen">
            <img src="mylogo-f.png" alt="Logo" className="h-20 absolute top-0 left-0 m-4" />
            <div className="flex justify-center items-center h-full">
                <form className="flex flex-col gap-4 max-w-md w-full p-4 bg-gray-100 rounded-md">
                <div>
                     <div className="mb-2 block">
                            <Label htmlFor="firstname" value="First name" />
                        </div>
                        <TextInput id="firstname" type="firstname" placeholder=" " required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="lastname" value="Last name" />
                        </div>
                        <TextInput id="lastname" type="lastname" placeholder=" " required />
                    </div>
                    
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Email" />
                        </div>
                        <TextInput id="email" type="email" placeholder="name@gmail.com" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Password" />
                        </div>
                        <TextInput id="password" type="password" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" value="Repeat password" />
                        </div>
                        <TextInput id="password" type="password" required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="agree" />
                        <Label htmlFor="agree">I agree to the terms and conditions</Label>
                    </div>
                    <Button type="submit">Register</Button>
                </form>
            </div>  
        </div>
    );
}
