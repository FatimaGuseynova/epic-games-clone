import { useState, useEffect } from "react";

import { getUsers } from "../api/getUsers";

import Sidebar from "./components/Sidebar";

import GenresAdmin from "./components/GenresAdmin";
import EventsAdmin from "./components/EventsAdmin";
import FeaturesAdmin from "./components/FeaturesAdmin";
import TypesAdmin from "./components/TypesAdmin";
import PlatformsAdmin from "./components/PlatformsAdmin";
import SubscriptionsAdmin from "./components/SubscriptionsAdmin";

import { GenresGet } from "../api/GenreGet";
import { EventsGet } from "../api/EventsGet";
import { FeatureGet } from "../api/FeaturesGet";
import { PlatformGet } from "../api/PlatformsGet";
import { SubscriptionsGet } from "../api/SubscriptionGet";
import { TypesGet } from "../api/TypeGet";

function Admin() {

    const [activePage, setActivePage] = useState("genres");

    const [filterData, setFilterData] = useState({
        genres: [],
        events: [],
        features: [],
        types: [],
        platforms: [],
        subscriptions: []
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getData = async () => {

            try {

                await getUsers();

                const [
                    genres,
                    events,
                    features,
                    platforms,
                    subscriptions,
                    types
                ] = await Promise.all([
                    GenresGet(),
                    EventsGet(),
                    FeatureGet(),
                    PlatformGet(),
                    SubscriptionsGet(),
                    TypesGet()
                ]);

                setFilterData({
                    genres,
                    events,
                    features,
                    platforms,
                    subscriptions,
                    types
                });

            } catch (error) {

                console.error("Failed to load admin data:", error);

            } finally {

                setLoading(false);

            }
        };

        getData();

    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#121216] text-white flex items-center justify-center">
                <p className="text-lg">
                    Loading...
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#121216] text-white flex">

            <Sidebar
                activePage={activePage}
                setActivePage={setActivePage}
            />

            <main className="flex-1 p-8">

                {activePage === "genres" && (
                    <GenresAdmin data={filterData.genres} />
                )}

                {activePage === "events" && (
                    <EventsAdmin data={filterData.events} />
                )}

                {activePage === "features" && (
                    <FeaturesAdmin data={filterData.features} />
                )}

                {activePage === "types" && (
                    <TypesAdmin data={filterData.types} />
                )}

                {activePage === "platforms" && (
                    <PlatformsAdmin data={filterData.platforms} />
                )}

                {activePage === "subscriptions" && (
                    <SubscriptionsAdmin
                        data={filterData.subscriptions}
                    />
                )}

            </main>

        </div>
    );
}

export default Admin;