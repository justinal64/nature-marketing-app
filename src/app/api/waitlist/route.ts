import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase-admin";
import { FieldValue } from "firebase-admin/firestore";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const normalized = email.toLowerCase().trim();
    const ref = db.collection("wildlens_waitlist").doc(normalized);
    const existing = await ref.get();

    if (existing.exists) {
      return NextResponse.json({ error: "You're already on the list!" }, { status: 409 });
    }

    await ref.set({ email: normalized, joinedAt: FieldValue.serverTimestamp() });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[waitlist]", err);
    return NextResponse.json({ error: "Server error. Please try again." }, { status: 500 });
  }
}
