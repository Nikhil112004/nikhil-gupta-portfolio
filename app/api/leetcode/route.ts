import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({
        query: `
          query userProfileCalendar($username: String!) {
            matchedUser(username: $username) {
              userCalendar {
                submissionCalendar
              }
            }
          }
        `,
        variables: {
          username: "nikhil113016",
        },
      }),
      cache: "no-store",
    });

    const data = await response.json();

    const calendar =
      data?.data?.matchedUser?.userCalendar?.submissionCalendar;

    if (!calendar) {
  return NextResponse.json(
    {
      error: "LeetCode calendar not found",
      raw: data,
    },
    { status: 500 }
  );
}

    return NextResponse.json({
      activity: JSON.parse(calendar),
    });
  } catch (error) {
    console.error("LeetCode API error:", error);

    return NextResponse.json(
      { activity: {} },
      { status: 500 }
    );
  }
}