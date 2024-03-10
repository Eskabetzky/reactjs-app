import { Button, Checkbox, Label, TextInput } from 'flowbite-react';


function Login() {
  return (
    <div className="relative h-screen">
      <img src="mylogo-f.png" alt="Logo" className="h-16 absolute top-0 left-0 m-4" />
      <div className="flex justify-center items-center h-full">
        <form className="flex flex-col gap-4 max-w-md w-full p-4 bg-gray-100 rounded-md">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Email" />
            </div>
            <TextInput id="email1" type="email" placeholder="name@gmail.com" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Password" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
