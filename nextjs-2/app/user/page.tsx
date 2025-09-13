import client from '@/db';

async function fetchData() {
    const user = await client.user.findFirst();

    return {
        email: user?.email,
        name: 'Ankit'
    };
}

export default async function User() {
    const data = await fetchData();

    return (
        <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {data?.name}
                </div>
                {data?.email}
            </div>
        </div>
    </div>
    );
}