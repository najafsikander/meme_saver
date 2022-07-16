import { NextPage } from "next";
import Layout from "../../components/layout";
import { useUser } from "../../lib/customHooks";
import UserModel from "../../models/user";
const Dashboard: NextPage = () => {
    
    const {user, isAuthenticated} = useUser();

    return (
     <>
        <Layout layoutMode={1}>
            <h1>Dashboard Page</h1>
        </Layout>
     </>
    );
}

export default Dashboard;
