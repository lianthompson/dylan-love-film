import Input from "../input";

export default function Contact() {
    return (
        <div className="flex flex-col justify-end justify-center m-auto font-[family-name:var(--font-molengo)] text-[#3B3B93] gap-[20px]">
            <Input title={"Name"} type={"text"}></Input>
            <Input title={"Email"} type={"email"}></Input>
            <Input title={"Subject"} type={"text"}></Input>
            <Input title={"Message"} type={"textarea"}></Input>
            <div className="text-3xl">+1 415 342 2582</div>
        </div>
    );
}