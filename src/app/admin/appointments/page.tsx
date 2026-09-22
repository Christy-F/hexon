import prisma from "@/lib/prisma";
import { CalendarDays, Mail, Phone, User, Settings, Clock } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminAppointmentsPage() {
  const appointments = await prisma.appointment.findMany({
    orderBy: { createdAt: "desc" },
  });

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(date);
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", hour12: true }).format(date);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-400 mb-4">
            Appointments Dashboard
          </h1>
          <p className="text-gray-400 text-lg">
            Manage and view all incoming booking requests.
          </p>
        </div>

        <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="py-5 px-6 font-semibold text-gray-300">Client</th>
                  <th className="py-5 px-6 font-semibold text-gray-300">Contact Info</th>
                  <th className="py-5 px-6 font-semibold text-gray-300">Service Requested</th>
                  <th className="py-5 px-6 font-semibold text-gray-300">Preferred Date</th>
                  <th className="py-5 px-6 font-semibold text-gray-300">Submitted</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {appointments.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-gray-500">
                      No appointments found. Start sharing your booking link!
                    </td>
                  </tr>
                ) : (
                  appointments.map((apt) => (
                    <tr key={apt.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                            <User size={18} />
                          </div>
                          <div>
                            <div className="font-medium text-white">
                              {apt.firstName} {apt.lastName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex flex-col gap-1 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Mail size={14} className="text-teal-400/70" />
                            <a href={`mailto:${apt.email}`} className="hover:text-teal-400 transition-colors">
                              {apt.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone size={14} className="text-teal-400/70" />
                            <a href={`tel:${apt.phone}`} className="hover:text-teal-400 transition-colors">
                              {apt.phone}
                            </a>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                          <Settings size={14} className="text-emerald-400" />
                          {apt.service}
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-2 text-gray-300">
                          <CalendarDays size={16} className="text-teal-400" />
                          {formatDate(new Date(apt.preferredDate))}
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex flex-col gap-1 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Clock size={14} />
                            {formatDate(new Date(apt.createdAt))}
                          </div>
                          <div className="text-xs text-gray-500">
                            {formatTime(new Date(apt.createdAt))}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
