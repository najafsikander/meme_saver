import type { NextPage } from "next";
import styles from "../../styles/Home.module.scss";
import Layout from "../../components/layout";
import AuthForm from '../../components/auth-form';

const SignUp: NextPage = () => {
  return (
    <div>
      <Layout layoutMode={0}>
        <main className={`${styles.fullPage} ${styles.signUpPage}`}>
          <div className={styles.custCard}>
            <div className={`card col-md-6 offset-md-3`}>
              <div className="card-body">
                {/* Card Heading */}
                <h1 className="card-title">Sign Up</h1>
                {/*Card SubHeading*/}
                <h4 className="card-subtitle mb-2 text-muted">
                  Lets get you started by creating your account!
                </h4>

                {/* Form Area */}
                <AuthForm formMode={0}/>

              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default SignUp;
