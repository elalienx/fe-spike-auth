// Node modules
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";

// Project files
import { auth } from "./firebaseSetup";

// Methods
// if correct, it returns the UID
export async function createAccount(email, password) {
  let result = { status: false, payload: "", message: "" };

  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);

    result = { status: true, payload: user.user.uid, message: "Created!" };
  } catch (error) {
    result.message = `Cannot create account, ${error.code}!`;
  }

  return result;
}

// if correct, it returns the UID
export async function login(email, password) {}

// if correct, it sents an email to reset password
export async function recoverAccount(email) {}
