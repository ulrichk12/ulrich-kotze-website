import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, Heart, MapPin, Activity, Zap, Trophy, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface GarminActivity {
    activity_id: string;
    activity_type: string;
    activity_name: string;
    duration_in_seconds: number;
    distance_in_meters: number;
    start_time_gmt: { value: string };
    average_heart_rate_bpm: number;
    average_pace_min_per_km: number;
}

interface Stats {
    weekDistance: number;
    monthDistance: number;
    yearDistance: number;
    weeklyData: { name: string; distance: number }[];
    monthlyData: { name: string; distance: number }[];
}

export const Activities: React.FC = () => {
    const [activities, setActivities] = useState<GarminActivity[]>([]);
    const [stats, setStats] = useState<Stats>({ weekDistance: 0, monthDistance: 0, yearDistance: 0, weeklyData: [], monthlyData: [] });
    const [loading, setLoading] = useState(true);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await fetch('/api/activities');
                if (!response.ok) throw new Error('Failed to fetch');
                const data: GarminActivity[] = await response.json();
                setActivities(data);
                calculateStats(data);
            } catch (error) {
                console.error('Error fetching activities:', error);
                // Mock data fallback
                const mockData = [
                    {
                        activity_id: '1',
                        activity_type: 'running',
                        activity_name: 'Morning Run',
                        duration_in_seconds: 1800,
                        distance_in_meters: 5000,
                        start_time_gmt: { value: new Date().toISOString() },
                        average_heart_rate_bpm: 145,
                        average_pace_min_per_km: 5.30
                    },
                    {
                        activity_id: '2',
                        activity_type: 'cycling',
                        activity_name: 'Evening Ride',
                        duration_in_seconds: 3600,
                        distance_in_meters: 25000,
                        start_time_gmt: { value: new Date(Date.now() - 86400000).toISOString() },
                        average_heart_rate_bpm: 130,
                        average_pace_min_per_km: 0
                    }
                ];
                setActivities(mockData);
                calculateStats(mockData);
            } finally {
                setLoading(false);
            }
        };

        fetchActivities();
    }, []);

    const calculateStats = (data: GarminActivity[]) => {
        const now = new Date();
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1)); // Monday
        startOfWeek.setHours(0, 0, 0, 0);

        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const startOfYear = new Date(now.getFullYear(), 0, 1);

        let weekDist = 0;
        let monthDist = 0;
        let yearDist = 0;

        // Helper for chart data aggregation
        const weeklyMap = new Map<string, number>();
        const monthlyMap = new Map<string, number>();

        // Initialize last 12 weeks
        for (let i = 11; i >= 0; i--) {
            const d = new Date(now);
            d.setDate(d.getDate() - i * 7);
            // Get start of that week
            const day = d.getDay();
            const diff = d.getDate() - day + (day === 0 ? -6 : 1);
            const monday = new Date(d.setDate(diff));
            const key = `${monday.getDate()}/${monday.getMonth() + 1}`;
            weeklyMap.set(key, 0);
        }

        // Initialize last 6 months
        for (let i = 5; i >= 0; i--) {
            const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const key = d.toLocaleString('default', { month: 'short' });
            monthlyMap.set(key, 0);
        }

        data.forEach(activity => {
            const date = new Date(activity.start_time_gmt.value);
            const distanceKm = activity.distance_in_meters / 1000;

            if (date >= startOfWeek) weekDist += distanceKm;
            if (date >= startOfMonth) monthDist += distanceKm;
            if (date >= startOfYear) yearDist += distanceKm;

            // Populate chart data
            // Weekly
            const day = date.getDay();
            const diff = date.getDate() - day + (day === 0 ? -6 : 1);
            const monday = new Date(new Date(date).setDate(diff));
            const weekKey = `${monday.getDate()}/${monday.getMonth() + 1}`;
            if (weeklyMap.has(weekKey)) {
                weeklyMap.set(weekKey, (weeklyMap.get(weekKey) || 0) + distanceKm);
            }

            // Monthly
            const monthKey = date.toLocaleString('default', { month: 'short' });
            if (monthlyMap.has(monthKey)) {
                monthlyMap.set(monthKey, (monthlyMap.get(monthKey) || 0) + distanceKm);
            }
        });

        setStats({
            weekDistance: weekDist,
            monthDistance: monthDist,
            yearDistance: yearDist,
            weeklyData: Array.from(weeklyMap).map(([name, distance]) => ({ name, distance })),
            monthlyData: Array.from(monthlyMap).map(([name, distance]) => ({ name, distance }))
        });
    };

    // Particle Animation
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId: number;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        const particles: Particle[] = [];
        const particleCount = 100;

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            color: string;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.color = Math.random() > 0.5 ? '99, 102, 241' : '148, 163, 184';
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > width) this.x = 0;
                if (this.x < 0) this.x = width;
                if (this.y > height) this.y = 0;
                if (this.y < 0) this.y = height;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(${this.color}, 0.15)`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    const formatDuration = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        return h > 0 ? `${h}h ${m}m` : `${m}m`;
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden pt-24 pb-12">
            <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Training Log</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Tracking progress, one step at a time.
                    </p>
                </div>

                {/* Stats Dashboard */}
                {!loading && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-indigo-100 font-medium mb-1">This Week</p>
                                    <h3 className="text-4xl font-bold">{stats.weekDistance.toFixed(1)} <span className="text-lg font-normal opacity-80">km</span></h3>
                                </div>
                                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                                    <Activity size={24} className="text-white" />
                                </div>
                            </div>
                            <div className="h-1 w-full bg-black/20 rounded-full overflow-hidden">
                                <div className="h-full bg-white/50 w-3/4"></div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-blue-100 font-medium mb-1">This Month</p>
                                    <h3 className="text-4xl font-bold">{stats.monthDistance.toFixed(1)} <span className="text-lg font-normal opacity-80">km</span></h3>
                                </div>
                                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                                    <Calendar size={24} className="text-white" />
                                </div>
                            </div>
                            <div className="h-1 w-full bg-black/20 rounded-full overflow-hidden">
                                <div className="h-full bg-white/50 w-1/2"></div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <p className="text-emerald-100 font-medium mb-1">This Year</p>
                                    <h3 className="text-4xl font-bold">{stats.yearDistance.toFixed(0)} <span className="text-lg font-normal opacity-80">km</span></h3>
                                </div>
                                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                                    <Trophy size={24} className="text-white" />
                                </div>
                            </div>
                            <div className="h-1 w-full bg-black/20 rounded-full overflow-hidden">
                                <div className="h-full bg-white/50 w-4/5"></div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Charts Section */}
                {!loading && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex items-center gap-2 mb-6">
                                <TrendingUp className="text-indigo-500" size={20} />
                                <h3 className="font-bold text-slate-800">Weekly Volume</h3>
                            </div>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={stats.weeklyData}>
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                                        <Tooltip
                                            cursor={{ fill: '#f1f5f9' }}
                                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                        />
                                        <Bar dataKey="distance" radius={[4, 4, 0, 0]}>
                                            {stats.weeklyData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={index === stats.weeklyData.length - 1 ? '#6366f1' : '#cbd5e1'} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex items-center gap-2 mb-6">
                                <TrendingUp className="text-blue-500" size={20} />
                                <h3 className="font-bold text-slate-800">Monthly Volume</h3>
                            </div>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={stats.monthlyData}>
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                                        <Tooltip
                                            cursor={{ fill: '#f1f5f9' }}
                                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                        />
                                        <Bar dataKey="distance" radius={[4, 4, 0, 0]}>
                                            {stats.monthlyData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={index === stats.monthlyData.length - 1 ? '#3b82f6' : '#cbd5e1'} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                )}

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                    </div>
                ) : (
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                        {activities.map((activity, index) => (
                            <div key={activity.activity_id || index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                                {/* Timeline Dot */}
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-indigo-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                    <Activity size={16} className="text-white" />
                                </div>

                                {/* Card */}
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${activity.activity_type === 'running' ? 'bg-orange-100 text-orange-700' :
                                                        activity.activity_type === 'cycling' ? 'bg-blue-100 text-blue-700' :
                                                            'bg-slate-100 text-slate-700'
                                                    }`}>
                                                    {activity.activity_type || 'Activity'}
                                                </span>
                                                <span className="text-xs text-slate-400 flex items-center gap-1">
                                                    <Calendar size={12} />
                                                    {activity.start_time_gmt?.value ? formatDate(activity.start_time_gmt.value) : 'Unknown Date'}
                                                </span>
                                            </div>
                                            <h3 className="font-bold text-slate-800 text-lg">{activity.activity_name || 'Untitled Activity'}</h3>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                                                <Clock size={18} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Duration</p>
                                                <p className="font-medium text-slate-900">{formatDuration(activity.duration_in_seconds)}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                                                <MapPin size={18} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Distance</p>
                                                <p className="font-medium text-slate-900">{(activity.distance_in_meters / 1000).toFixed(2)} km</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-rose-50 rounded-lg text-rose-600">
                                                <Heart size={18} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Avg HR</p>
                                                <p className="font-medium text-slate-900">{activity.average_heart_rate_bpm || '--'} bpm</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                                                <Zap size={18} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider">Pace</p>
                                                <p className="font-medium text-slate-900">{activity.average_pace_min_per_km?.toFixed(2) || '--'} /km</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
