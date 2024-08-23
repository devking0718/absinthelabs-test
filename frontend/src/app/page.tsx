
import { Box } from "@radix-ui/themes";
import { redirect } from "next/navigation";


export default function DashboardPage() {

  redirect("/badges");

  return null;
}
