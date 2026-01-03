import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Navigate } from "react-router-dom";

const ProfilePage = () => {
    const { user, isAuthenticated, logout } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="container mx-auto py-12 px-4 max-w-4xl">
            <div className="flex flex-col md:flex-row gap-8">
                {/* User Card */}
                <Card className="w-full md:w-1/3 h-fit">
                    <CardHeader className="flex flex-col items-center">
                        <Avatar className="w-24 h-24 mb-4">
                            <AvatarImage src={user?.profile_photo} alt={user?.username} />
                            <AvatarFallback className="text-2xl">{user?.first_name?.[0]}{user?.last_name?.[0]}</AvatarFallback>
                        </Avatar>
                        <CardTitle className="text-2xl">{user?.first_name} {user?.last_name}</CardTitle>
                        <p className="text-muted-foreground">@{user?.username}</p>
                    </CardHeader>
                    <CardContent className="space-y-4 text-center">
                        <div className="text-sm text-muted-foreground">{user?.email}</div>
                        <p className="text-sm italic">{user?.bio || "No bio yet."}</p>
                        <Button variant="destructive" onClick={logout} className="w-full">Logout</Button>
                    </CardContent>
                </Card>

                {/* Reports / Details */}
                <div className="w-full md:w-2/3 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>My Reports</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {user?.reports && user.reports.length > 0 ? (
                                <div className="space-y-2">
                                    {/* Placeholder for reports list */}
                                    {user.reports.map((report, idx) => (
                                        <div key={idx} className="p-4 border rounded bg-slate-50">
                                            Report #{idx + 1}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-muted-foreground">
                                    <p>No reports available yet.</p>
                                    <p className="text-sm">Complete a chat session to generate a report.</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
