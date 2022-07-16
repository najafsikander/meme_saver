import type { NextPage } from "next";
import styles from "../../styles/Home.module.scss";
import Layout from "../../components/layout";
import AuthForm from '../../components/auth-form';

const SignIn: NextPage = () => {
  
  

  return (
    <div>
      <Layout layoutMode={0}>
        <main className={styles.fullPage}>
          <div className={styles.custCard}>
            <div className={`card col-md-6 offset-md-3`}>
              <div className="card-body">
                <h1 className="card-title">Sign In</h1>
                <h4 className="card-subtitle mb-2 text-muted">
                  Enter your login details
                </h4>

                {/* Form Area */}
                <AuthForm formMode={1}/>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  )
};

export default  SignIn;