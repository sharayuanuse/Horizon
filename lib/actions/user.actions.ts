'use server';
import { ID } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

export const signIn = async ({email,password} : signInProps) => {
    try{
        const { account } = await createAdminClient();
        const response = await account.createEmailPasswordSession(email,password);
        return parseStringify(response);
    } catch(error){
        console.log('Error',error);
    }
}

export const signUp = async (userData : SignUpParams) => {
    const {email, password, firstName, lastName } = userData;

    try{
        // It uses the createAdminClient function to create an admin Appwrite client and then calls the createEmailPasswordSession method on the account object. This method takes the email and password as arguments and returns a session object. We then set the session secret in a cookie and redirect the user to the account page.
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(
            ID.unique(), 
            email, 
            password, 
            `${firstName} ${lastName}`
        );
        const session = await account.createEmailPasswordSession(email, password);
        cookies().set("appwrite-session", session.secret, {    // appwrite-session same name given in createSessionClient() in appwrite.ts
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
        return parseStringify(newUserAccount);   // we cannot pass large objects therefore parse and stringify
    } catch(error){
        console.log('Error',error);
    }
}

// ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();

    return parseStringify(user);
  } catch (error) {
    console.log(error)
    return null;
  }
}

export const logoutAccount = async () => {
    try{
        const {account} = await createSessionClient();

        cookies().delete('appwrite-session');

        await account.deleteSession('current');
    } catch(error) {
        return null;
    }
}
